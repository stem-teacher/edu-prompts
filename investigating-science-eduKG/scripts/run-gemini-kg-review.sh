#!/usr/bin/env bash
set -euo pipefail

# Tiny wrapper to run the Gemini KG review prompt against your HSC directory.

CLI_BIN=${CLI_BIN:-gemini}
MODEL=${MODEL:-gemini-1.5-pro}
PROMPT_FILE=${PROMPT_FILE:-tools/prompts/gemini-kg-review.txt}

# Default HSC directory from the prompt; override with HSC_DIR env var if needed.
HSC_DIR_DEFAULT="/Volumes/second-store/ai/edu-prompts/investigating-science-eduKG/past-hsc-exams"
HSC_DIR=${HSC_DIR:-"$HSC_DIR_DEFAULT"}

usage() {
  cat <<EOF
Usage: CLI_BIN=gemini MODEL=gemini-1.5-pro HSC_DIR="/path/to/past-hsc-exams" \
       scripts/run-gemini-kg-review.sh

Notes:
- This reads the prompt from: $PROMPT_FILE
- It substitutes the default HSC path in the prompt with HSC_DIR if provided.
- It then pipes the prompt to the Gemini CLI: "$CLI_BIN --model $MODEL".
- Output is tee'd to: out/gemini-kg-review-output.txt

Tips:
- If your Gemini CLI supports file attachments, re-run with attachments for PDFs/QMD/MD.
- You can override CLI_BIN/MODEL/PROMPT_FILE via env vars.
EOF
}

if [[ "${1:-}" == "-h" || "${1:-}" == "--help" ]]; then
  usage
  exit 0
fi

if ! command -v "$CLI_BIN" >/dev/null 2>&1; then
  echo "Error: Gemini CLI '$CLI_BIN' not found in PATH" >&2
  exit 127
fi

if [[ ! -f "$PROMPT_FILE" ]]; then
  echo "Error: Prompt file not found: $PROMPT_FILE" >&2
  exit 1
fi

mkdir -p out

echo "Running Gemini review with:"
echo "- CLI_BIN: $CLI_BIN"
echo "- MODEL:   $MODEL"
echo "- PROMPT:  $PROMPT_FILE"
echo "- HSC_DIR: $HSC_DIR"

# Substitute HSC directory in the prompt if overridden.
if [[ "$HSC_DIR" != "$HSC_DIR_DEFAULT" ]]; then
  sed "s|$HSC_DIR_DEFAULT|$HSC_DIR|g" "$PROMPT_FILE" | \
    "$CLI_BIN" --model "$MODEL" | tee out/gemini-kg-review-output.txt
else
  cat "$PROMPT_FILE" | "$CLI_BIN" --model "$MODEL" | tee out/gemini-kg-review-output.txt
fi

