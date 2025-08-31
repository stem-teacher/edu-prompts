#!/usr/bin/env bash
set -euo pipefail

# This script generates the Quarto content for the website from the eduKG.

# 1. Clean up old content
rm -f modules/*.qmd

# 2. Generate module pages
jq -c 'select(.props.kind == "Module" and .props.year_level == 12) | .' out/eduKG.ndjson | while read -r module; do
  module_id=$(echo "$module" | jq -r '.id')
  module_num=$(echo "$module" | jq -r '.props.number')
  module_title=$(echo "$module" | jq -r '.props.title')
  
  cat <<-EOF > "modules/module${module_num}.qmd"
---
title: "Module ${module_num}: ${module_title}"
---
EOF

  jq -c "select(.props.kind == \"InquiryQuestion\" and .props.module == \"$module_id\") | ." out/eduKG.ndjson | while read -r iq; do
    iq_id=$(echo "$iq" | jq -r '.id')
    iq_title=$(echo "$iq" | jq -r '.props.title')

    echo "## Inquiry question: $iq_title" >> "modules/module${module_num}.qmd"
    echo "" >> "modules/module${module_num}.qmd"

    jq -c "select(.props.kind == \"Concept\" and .props.inquiry_question == \"$iq_id\") | ." out/eduKG.ndjson | while read -r concept; do
      concept_statement=$(echo "$concept" | jq -r '.props.statement')
      echo "- **\`$(echo "$concept" | jq -r '.id')\`**: $concept_statement" >> "modules/module${module_num}.qmd"
      
      if echo "$concept" | jq -e '.props.definition' > /dev/null; then
        definition=$(echo "$concept" | jq -r '.props.definition')
        echo "  - **Definition:** $definition" >> "modules/module${module_num}.qmd"
      fi
      if echo "$concept" | jq -e '.props.hsc_example' > /dev/null; then
        hsc_example=$(echo "$concept" | jq -r '.props.hsc_example')
        echo "  - **HSC Example:** $hsc_example" >> "modules/module${module_num}.qmd"
      fi
      if echo "$concept" | jq -e '.props.case_study' > /dev/null; then
        case_study_title=$(echo "$concept" | jq -r '.props.case_study.title')
        case_study_details=$(echo "$concept" | jq -r '.props.case_study.details')
        echo "  - **Case Study:** $case_study_title - $case_study_details" >> "modules/module${module_num}.qmd"
      fi
       if echo "$concept" | jq -e '.props.practical_example' > /dev/null; then
        practical_example_title=$(echo "$concept" | jq -r '.props.practical_example.title')
        practical_example_details=$(echo "$concept" | jq -r '.props.practical_example.details')
        echo "  - **Practical Example:** $practical_example_title - $practical_example_details" >> "modules/module${module_num}.qmd"
      fi
    done
    echo "" >> "modules/module${module_num}.qmd"
  done
done
