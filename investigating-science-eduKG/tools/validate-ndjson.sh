#!/usr/bin/env bash
set -euo pipefail

# Validate NDJSON entity + relation structure and referential integrity using jq.

ROOT_DIR="${1:-.}"

shopt -s nullglob
FILES=("${ROOT_DIR}/seed.ndjson" "${ROOT_DIR}/data/seed"/*.ndjson)

if [ ${#FILES[@]} -eq 0 ]; then
  echo "No NDJSON files found" >&2
  exit 1
fi

TMP=$(mktemp)
IDS=$(mktemp)
trap 'rm -f "$TMP" "$IDS"' EXIT

# Concatenate all lines into a single stream
cat "${FILES[@]}" > "$TMP"

# Check each line parses as JSON
if ! jq -c . "$TMP" >/dev/null; then
  echo "NDJSON parse error" >&2
  exit 2
fi

# Collect entity IDs and validate required fields
jq -r 'select(has("id") and has("type")) | .id' "$TMP" | sort -u | jq -R . | jq -s . > "$IDS"

# Validate entity types and provenance
jq -e '
  select(has("id") and has("type"))
  | select(.type|IN("Agent","Prompt","Deliverable","Decision","Tool"))
  | select(.provenance and .provenance.source and .provenance.captured_at and .provenance.agent_id and .provenance.tool)
' "$TMP" >/dev/null || {
  echo "Entity validation failed: type/provenance mismatch" >&2
  exit 3
}

# Validate relation labels
ERRS=$(jq -r --slurpfile ids "$IDS" '
  select(has("from") and has("to") and has("label")) as $r
  | select(["IMPLEMENTS","HANDOFFS_TO","PRODUCES","DERIVES_FROM","VERIFIES","DECIDES"] | index($r.label) | not)
  | "Invalid relation label: \(.label) from=\(.from) to=\(.to)"
' "$TMP")

if [ -n "$ERRS" ]; then
  echo "$ERRS" >&2
  exit 4
fi

# Check referential integrity
MISSING=$(jq -r --slurpfile ids "$IDS" '
  select(has("from") and has("to") and has("label"))
  | [ (if (.from as $f | ($ids[0] | index($f)) ) then empty else "MISSING from: \(.from)" end),
      (if (.to   as $t | ($ids[0] | index($t)) ) then empty else "MISSING to: \(.to)" end) ]
  | .[]
' "$TMP")

if [ -n "$MISSING" ]; then
  echo "$MISSING" >&2
  exit 5
fi

echo "NDJSON validation OK: ${#FILES[@]} file(s) checked"
