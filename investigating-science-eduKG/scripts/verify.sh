#!/usr/bin/env bash
set -euo pipefail

echo "== Tool versions =="
quarto --version | head -n 1 || true
surreal version || true
jq --version || true

echo "\n== Validate NDJSON =="
./tools/validate-ndjson.sh .

echo "\n== Render Quarto project =="
quarto render invsci --quiet

echo "All checks passed."
