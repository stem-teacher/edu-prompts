#!/usr/bin/env bash
set -euo pipefail

out_dir="invsci/_includes"
out_file="$out_dir/exam-mapping.md"
mkdir -p "$out_dir"

{
  echo "## Outcome coverage (all years)"
  echo
  echo '| Outcome | Count |'
  echo '|---|---|'
  jq -r '
    select(.from and .to and .label=="DERIVES_FROM")
    | select(.from|startswith("question:"))
    | select(.to|startswith("outcome:"))
    | .to | split(":")[1]
  ' data/seed/exams.ndjson \
  | sort | uniq -c | sort -nr \
  | awk '{printf "| %s | %s |\n", $2, $1}'

  echo
  echo "## Sample mapping (2019)"
  echo
  echo '| Question | Outcome |'
  echo '|---|---|'
  jq -r '
    select(.from and .to and .label=="DERIVES_FROM")
    | select(.from|startswith("question:2019:"))
    | [ .from, .to ] | @tsv
  ' data/seed/exams.ndjson \
  | awk '{printf "| %s | %s |\n", $1, $2}'
} > "$out_file"

echo "Wrote $out_file"

