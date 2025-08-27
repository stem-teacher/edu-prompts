#!/usr/bin/env bash
set -euo pipefail

# Convert local NDJSON (entities + relations) to a SurrealQL script.
# Non-destructive: writes a .surql file; does not import.

OUT_DIR="out"
OUT_FILE="${OUT_DIR}/invsci.surql"
mkdir -p "$OUT_DIR"

TMP=$(mktemp)
trap 'rm -f "$TMP"' EXIT

# Concatenate NDJSON sources
shopt -s nullglob
FILES=( seed.ndjson data/seed/*.ndjson )
cat "${FILES[@]}" > "$TMP"

{
  echo "BEGIN TRANSACTION;"
  echo "LET \$ns = 'school';"
  echo "LET \$db = 'invsci';"
  echo "-- Entities"
  jq -rc 'select(has("id") and has("type")) | "CREATE entity CONTENT " + (tojson) + ";"' "$TMP"
  echo "-- Relations"
  jq -rc 'select(has("from") and has("to") and has("label")) | "CREATE relation CONTENT " + (tojson) + ";"' "$TMP"
  echo "COMMIT TRANSACTION;"
} > "$OUT_FILE"

echo "Wrote $OUT_FILE"
