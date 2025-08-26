#!/usr/bin/env bash
set -euo pipefail

out="data/seed/exams.ndjson"
tmp=$(mktemp)
trap 'rm -f "$tmp"' EXIT

> "$tmp"

gen() {
  local year=$1 mg=$2 exam=$3
  if [ -f "$mg" ] && [ -f "$exam" ]; then
    ./tools/mg_to_ndjson.sh "$year" "$mg" "$exam" >> "$tmp"
  else
    echo "Skipping $year (missing files)" >&2
  fi
}

gen 2019 2019-hsc-investigating-science-mg.pdf 2019-hsc-investigating-science.pdf
gen 2020 2020-hsc-investigating-science-mg.pdf 2020-hsc-investigating-science.pdf
gen 2021 2021-hsc-investigating-science-mg.pdf 2021-hsc-investigating-science.pdf
gen 2022 2022-hsc-investigating-sci-mg.pdf 2022-hsc-investigating-science.pdf
gen 2023 2023-hsc-investigating-sci-mg.pdf 2023-hsc-investigating-science.pdf
gen 2024 2024-hsc-investigating-science-mg.pdf 2024-hsc-investigating-science.pdf

# Write out
mv "$tmp" "$out"
echo "Wrote $out"

