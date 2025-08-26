#!/usr/bin/env bash
set -euo pipefail

# Extract question → outcome mappings from a NESA Investigating Science MG PDF
# Usage: tools/mg_to_ndjson.sh <year> <mg-pdf> <exam-pdf>
# Emits NDJSON: question nodes, exam→question edges, question→outcome edges.

YEAR=$1
MG="$2"
EXAM_PDF="$3"

if [ ! -f "$MG" ]; then
  echo "Missing MG PDF: $MG" >&2
  exit 1
fi

# Convert MG to plain text
TXT=$(mktemp)
trap 'rm -f "$TXT"' EXIT
pdftotext "$MG" "$TXT"

section=""
qnum=""
qpart=""
marks=""
have_question=0

normalize_codes() {
  # Read a single line of codes via stdin; echo normalized codes separated by space
  sed 's/INS[[:space:]]\{0,1\}/INS/g' \
  | tr -d '\r' \
  | sed 's/\[/(/g; s/\]/)/g' \
  | tr ',' '\n' \
  | sed 's/^\s\+//; s/\s\+$//' \
  | awk -v Y="$YEAR" 'BEGIN{OFS=""} {
      c=$0;
      if (c=="") next;
      if (c ~ /^INS(11|12)-[0-9]+$/) { print c; next }
      if (c ~ /^(11|12)-[0-9]+$/)    { print "INS", c; next }
      if (c ~ /^[0-9]+-[0-9]+$/)     { split(c,a,"-"); print "INS", a[1], "-", a[2]; next }
      # Sometimes MG lists just e.g. 12-4 12-7 in the same line separated by spaces
      if (c ~ /^[0-9]+$/) { next }
      # Fallthrough prints nothing
    }'
}

split_q() {
  # in: current_q -> sets qnum, qpart
  qnum="${current_q%%-*}"
  local rest="${current_q#*-}"
  if [ "$rest" = "$current_q" ] || [ "$rest" = "-" ]; then
    qpart=""
  else
    qpart="$rest"
  fi
}

emit_question_node() {
  local qid="question:${YEAR}:${qnum}${qpart}"
  local exam_id="exam:${YEAR}"
  local part_json="null"
  if [ -n "$qpart" ]; then part_json="\"${qpart#-}\""; fi
  local marks_json="null"
  if [ -n "$marks" ]; then marks_json="$marks"; fi
  cat <<JSON
{"id":"${qid}","type":"Deliverable","props":{"kind":"exam-question","year":${YEAR},"number":${qnum},"part":${part_json},"section":"${section}","marks":${marks_json},"source_file":"$(basename "$EXAM_PDF")"},"provenance":{"source":"pdf","captured_at":"$(date -u +%Y-%m-%dT%H:%M:%SZ)","agent_id":"agent:extractor","tool":"pdftotext","evidence_refs":["file:$(basename "$MG")"]}}
{"from":"${exam_id}","to":"${qid}","label":"PRODUCES","props":{},"provenance":{"source":"pdf","captured_at":"$(date -u +%Y-%m-%dT%H:%M:%SZ)","agent_id":"agent:extractor","tool":"pdftotext"}}
JSON
}

emit_q_outcome_edge() {
  local qid="question:${YEAR}:${qnum}${qpart}"
  local oc=$1
  local oid="outcome:${oc}"
  cat <<JSON
{"from":"${qid}","to":"${oid}","label":"DERIVES_FROM","props":{},"provenance":{"source":"pdf","captured_at":"$(date -u +%Y-%m-%dT%H:%M:%SZ)","agent_id":"agent:extractor","tool":"pdftotext"}}
JSON
}

# Build a simplified event stream: ::SEC, ::Q, ::M, ::S
awk '
  BEGIN{sec=""; want_mark=0; want_codes=0; want_qnum=0; want_content=0}
  {
    gsub(/\r/, "");
    if ($1=="Section" && $2=="I")  { print "::SEC I"; next }
    if ($1=="Section" && $2=="II") { print "::SEC II"; next }

    # Question lines: "Question 21 (a)" or "21 (a)" or "Question 21"
    if ($1=="Question" && $2 ~ /^[0-9]+$/ ) {
      part="-";
      if ($3 ~ /^\([a-z]\)$/) { part=substr($3,2,1) }
      print "::Q " $2 " " part; next
    }
    if ($1=="Question" && NF==1) { want_qnum=1; next }
    if (want_qnum==1 && $1 ~ /^[0-9]+$/) {
      part="-"; if ($2 ~ /^\([a-z]\)$/) { part=substr($2,2,1) }
      print "::Q " $1 " " part; want_qnum=0; next
    }
    # No fallback: avoid matching raw numeric lines like year or marks

    if ($1=="Marks" && NF==1) { want_mark=1; next }
    if (want_mark==1) {
      if ($1 ~ /^[0-9]+$/) { print "::M " $1; want_mark=0; next } else { want_mark=0 }
    }

    if ($1=="Content" && NF==1) { want_content=1; next }
    if (want_content==1) {
      if ($1=="Mod" && $2 ~ /^[0-9]+$/) { print "::C " $2; want_content=0; next } else if ($0 ~ /./) { want_content=0 }
    }
    if ($1=="Mod" && $2 ~ /^[0-9]+$/) { print "::C " $2; next }

    if ($1=="Syllabus" && $2=="outcomes") { want_codes=1; next }
    if (want_codes==1) {
      if ($0 ~ /./) { print "::S " $0; want_codes=0; next } else { next }
    }
  }
' "$TXT" | (
  # Now in shell: interpret the stream and emit NDJSON lines
  current_q=""; current_part=""; current_marks=""; current_mod=""; emitted=0;
  current_sec="";
  while IFS= read -r line; do
    case "$line" in
      '::SEC I') current_sec="I" ;;
      '::SEC II') current_sec="II" ;;
      '::Q '* )
        # Emit previous question node if pending
        if [ -n "$current_q" ]; then
          split_q
          marks="$current_marks"
          if [ $emitted -eq 0 ]; then section="$current_sec" emit_question_node; emitted=1; fi
          : # no module edge at Q-flush; emit with outcomes or at EOF
        fi
        # start new
        set -- $line; # ::Q <n> <part|
        current_q="$2-${3:--}"
        current_marks=""
        emitted=0
        ;;
      '::C '* )
        current_mod="${line#::C }" ;;
      '::M '* )
        current_marks="${line#::M }"
        ;;
      '::S '* )
        codes_line="${line#::S }"
        norm=$(printf "%s\n" "$codes_line" | normalize_codes | tr '\n' ' ')
        # Emit node (if not yet), module edge, and outcome edges
        split_q
        marks="$current_marks"
        if [ $emitted -eq 0 ]; then section="$current_sec" emit_question_node; emitted=1; fi
        if [ -n "$current_mod" ]; then
          echo "{\"from\":\"question:${YEAR}:${qnum}${qpart}\",\"to\":\"module:M${current_mod}\",\"label\":\"DERIVES_FROM\",\"props\":{},\"provenance\":{\"source\":\"pdf\",\"captured_at\":\"$(date -u +%Y-%m-%dT%H:%M:%SZ)\",\"agent_id\":\"agent:extractor\",\"tool\":\"pdftotext\"}}"
        fi
        for oc in $norm; do
          emit_q_outcome_edge "$oc"
        done
        ;;
    esac
  done
  # flush last question node if no codes encountered
  if [ -n "$current_q" ]; then
    split_q
    marks="$current_marks"
    if [ $emitted -eq 0 ]; then section="$current_sec" emit_question_node; fi
    : # no module edge at EOF unless outcomes were seen
  fi
)
