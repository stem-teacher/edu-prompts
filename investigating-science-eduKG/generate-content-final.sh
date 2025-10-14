#!/usr/bin/env bash
set -euo pipefail

# This script generates the Quarto content for the website from the eduKG.
# It is designed to be idempotent, cleaning all generated content before running.

# 1. Clean up old content to ensure a clean slate
echo "Cleaning old content..."
rm -rf modules
mkdir -p modules
rm -f study-methodology.qmd planning.qmd group-chat.qmd tracking.qmd about.qmd index.qmd

# 2. Re-create placeholder and index pages
echo "Creating placeholder pages..."
cat <<-"EOF" > index.qmd
---
title: "Welcome to the HSC Investigating Science Hub"
---

This website is a comprehensive, data-driven resource for students of the NSW HSC Investigating Science course. It has been automatically generated from a central Knowledge Graph, ensuring that the content is directly aligned with the NESA syllabus.

### Key Features:

*   **Complete Syllabus Coverage:** Detailed notes for all Year 12 Modules (5-8).
*   **Exam-Mapped Content:** Key concepts are linked directly to examples from past HSC exams, showing you how they are assessed.
*   **Structured Learning:** Content is organized by Inquiry Questions, mirroring the syllabus structure.

Use the navigation bar to explore the modules and study tools.
EOF

cat <<-"EOF" > study-methodology.qmd
---
title: "Study Methodology"
---
This section will provide detailed advice and strategies for studying Investigating Science effectively.
*(Content to be added)*
EOF

cat <<-"EOF" > planning.qmd
---
title: "Planning"
---
This section will feature tools and templates to help you plan your study schedule and revision.
*(Content to be added)*
EOF

cat <<-"EOF" > group-chat.qmd
---
title: "Group Chat"
---
This page will host an embedded group chat for students to discuss topics and ask questions.
*(Integration to be added)*
EOF

cat <<-"EOF" > tracking.qmd
---
title: "Tracking"
---
This section will provide tools to track your progress through the syllabus and practice questions.
*(Content to be added)*
EOF

cat <<-"EOF" > about.qmd
---
title: "About"
---
This website provides a comprehensive, data-driven resource for the HSC Investigating Science course.
EOF


# 3. Generate module pages from the Knowledge Graph
echo "Generating module pages from eduKG..."
jq -c 'select(.props.kind == "Module" and .props.year_level == 12) | .' out/eduKG.ndjson | while read -r module; do
  module_id=$(echo "$module" | jq -r '.id')
  module_num=$(echo "$module" | jq -r '.props.number')
  module_title=$(echo "$module" | jq -r '.props.title')
  
  module_file="modules/module${module_num}.qmd"
  echo "Creating $module_file..."

  cat <<-"EOF" > "$module_file"
---
title: "Module ${module_num}: ${module_title}"
---
EOF

  jq -c "select(.props.kind == \"InquiryQuestion\" and .props.module == \"$module_id\") | ." out/eduKG.ndjson | while read -r iq; do
    iq_id=$(echo "$iq" | jq -r '.id')
    iq_title=$(echo "$iq" | jq -r '.props.title')

    echo "" >> "$module_file"
    echo "## Inquiry question: $iq_title" >> "$module_file"
    echo "" >> "$module_file"

    jq -c "select(.props.kind == \"Concept\" and .props.inquiry_question == \"$iq_id\") | ." out/eduKG.ndjson | while read -r concept; do
      concept_statement=$(echo "$concept" | jq -r '.props.statement')
      echo "- **\`$(echo "$concept" | jq -r '.id')\`**: $concept_statement" >> "$module_file"
      
      if echo "$concept" | jq -e '.props.definition' > /dev/null; then
        definition=$(echo "$concept" | jq -r '.props.definition')
        echo "  - **Definition:** $definition" >> "$module_file"
      fi
      if echo "$concept" | jq -e '.props.hsc_example' > /dev/null; then
        hsc_example=$(echo "$concept" | jq -r '.props.hsc_example')
        echo "  - **HSC Example:** $hsc_example" >> "$module_file"
      fi
      if echo "$concept" | jq -e '.props.case_study' > /dev/null; then
        case_study_title=$(echo "$concept" | jq -r '.props.case_study.title')
        case_study_details=$(echo "$concept" | jq -r '.props.case_study.details')
        echo "  - **Case Study:** $case_study_title - $case_study_details" >> "$module_file"
      fi
       if echo "$concept" | jq -e '.props.practical_example' > /dev/null; then
        practical_example_title=$(echo "$concept" | jq -r '.props.practical_example.title')
        practical_example_details=$(echo "$concept" | jq -r '.props.practical_example.details')
        echo "  - **Practical Example:** $practical_example_title - $practical_example_details" >> "$module_file"
      fi
    done
  done
done

echo "Content generation complete."
