---
title: "Orphaned Concepts Report"
author: "Sophia (AI Agent)"
date: "2025-08-31"
format:
  html:
    toc: true
    theme: cosmo
---

## 1. Overview

This report identifies "orphaned" concepts within the Investigating Science Knowledge Graph. An orphaned concept is defined as a syllabus dot point that is not currently linked to any past HSC exam question in the dataset.

This analysis is crucial for identifying areas of the curriculum that may be under-assessed and for guiding the development of new assessment materials to ensure complete coverage.

## 2. Methodology

The analysis was performed by:
1.  Extracting a complete list of all `concept` entities from the knowledge graph.
2.  Extracting all `ASSESSES` relationships, which link an exam `question` to a `concept`.
3.  Comparing the two lists to identify which concepts have no incoming `ASSESSES` links.

## 3. Orphaned Concepts by Module

The following is a list of all concepts that are not currently mapped to a specific HSC exam question in the knowledge graph.

### Module 1: Cause and Effect – Observing
- All 16 concepts in this module are currently orphaned.

### Module 2: Cause and Effect – Inferences and Generalisations
- All 17 concepts in this module are currently orphaned.

### Module 3: Scientific Models
- All 9 concepts in this module are currently orphaned.

### Module 4: Theories and Laws
- All 10 concepts in this module are currently orphaned.

### Module 5: Scientific Investigations
- `concept:M5-1-1` to `concept:M5-3-3` (10 concepts)
- `concept:M5-4-2` to `concept:M5-4-4` (3 concepts)

### Module 6: Technologies
- `concept:M6-1-1` to `concept:M6-1-5` (5 concepts)
- `concept:M6-2-2` to `concept:M6-2-3` (2 concepts)

### Module 7: Fact or Fallacy?
- `concept:M7-1-1` to `concept:M7-2-2` (5 concepts)
- `concept:M7-4-1` to `concept:M7-4-5` (5 concepts)
- `concept:M7-5-1` to `concept:M7-5-3` (3 concepts)
- `concept:M7-5-5`

### Module 8: Science and Society
- `concept:M8-1-1`
- `concept:M8-2-1`, `concept:M8-2-3`, `concept:M8-2-4`
- `concept:M8-3-1` to `concept:M8-3-3` (3 concepts)

## 4. Recommendations

-   **Prioritise Year 11 Content:** The most significant gap is the entire Year 11 curriculum (Modules 1-4), for which no exam mappings currently exist. New assessment drills should be created to target these foundational concepts.
-   **Targeted Question Development:** For the Year 12 modules, new questions should be developed to specifically target the orphaned concepts listed above, ensuring that students are assessed on the full breadth of the syllabus.
-   **Continuous Review:** This report should be regenerated periodically as new exam papers are added to the dataset to provide an updated view of curriculum coverage.
