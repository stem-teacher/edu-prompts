**MarkSense - Teacher's Guide to Automated Assessment**

**Introduction**

MarkSense streamlines the assessment process, providing near-instantaneous, detailed feedback to your students while significantly reducing your manual marking time. This guide outlines the simple workflow from creating your assessment to delivering graded results.

**Workflow Overview:**

1.  **Prepare Assessment:** Create your assessment document and easily generate the corresponding MarkSense template using the built-in tools. Establish the marking rubric for AI assistance.
2.  **Distribute:** Give the assessment handout (PDF or print) to students.
3.  **Scan:** Students scan their completed handouts using the classroom scanner linked to MarkSense.
4.  **Automated Marking:** MarkSense automatically processes each scan: identifies the student and assessment, marks multiple-choice questions, uses AI to analyze written answers against your rubric, generates feedback comments, calculates scores, and compiles a personalized, annotated feedback document for the student.
5.  **Deliver Feedback:** The graded feedback document is automatically emailed to each student.
6.  **Review (Optional):** Use the MarkSense application to quickly review any flagged items (e.g., answers the AI was unsure about) or browse overall class results.

**Step-by-Step Guide for Teachers:**

1.  **Creating Your Assessment:**
    *   **Design Handout:** Prepare your assessment document as usual (e.g., in Word, Google Docs, or using Markdown with LaTeX for scientific content). Ensure clear areas for student responses (MC bubbles, written answer spaces). Export the final handout as a PDF (e.g., `Year7_Science_Term1_Exam.pdf`).
    *   **Use MarkSense Setup:** Open the MarkSense application. Select "Create New Assessment Template".
        *   Upload your assessment handout PDF (`Year7_Science_Term1_Exam.pdf`).
        *   MarkSense will analyze the document. Use the simple on-screen tools to:
            *   Confirm or adjust the areas identified for multiple-choice questions and written answers.
            *   Specify the correct answer for each multiple-choice question (e.g., click the 'C' bubble for Question 1). MarkSense automatically creates the necessary green/red marking guides in the background template.
            *   Define where scores and overall/section comments should appear on the feedback document.
            *   Link or input your marking rubric for each written question to guide the AI analysis.
        *   Save the template within MarkSense. It will automatically associate this template with the assessment handout.
    *   **Distribute Handout:** Provide the clean assessment handout PDF (or printouts) to your students. The handout includes an embedded identifier (like a subtle QR code) automatically added by MarkSense during setup, linking it to the template and rubric.

2.  **Student Completion and Scanning:**
    *   Students complete the handout.
    *   Students scan their completed handout using the designated MarkSense classroom scanner. The system automatically reads the embedded identifier to know which student and assessment it is, and which template/rubric to use. No manual linking is needed.

3.  **Automated Marking and Feedback:**
    *   MarkSense processes each scan immediately.
    *   It marks the MC section, identifying correct/incorrect answers visually on the PDF.
    *   It analyzes written answers using the AI and your provided rubric, assigning scores and generating initial feedback comments based on the rubric criteria.
    *   It calculates section and total scores.
    *   It compiles the annotated PDF with all marks, scores, and comments.
    *   It automatically emails the completed feedback PDF to the student (using email addresses linked to student IDs in your class lists).

4.  **Reviewing Results (Optional):**
    *   Open the MarkSense application at any time.
    *   Select the class and assessment you want to review.
    *   Browse through the digitally marked student papers.
    *   MarkSense may flag specific answers (e.g., ambiguous MC marks, low AI confidence on a written answer) for your quick review. You can easily override AI scores or add your own clarifying comments directly in the app.
    *   View class analytics and generate reports (e.g., CSV scores for upload).

**Benefits for You:**

*   **Save Time:** Dramatically reduces time spent on repetitive marking tasks.
*   **Focus on Teaching:** Spend more time analyzing results, planning interventions, and interacting with students.
*   **Consistent Marking:** Ensures all papers are marked against the same standard using your defined rubric.
*   **Faster Feedback:** Students receive detailed feedback almost immediately, reinforcing learning.

MarkSense handles the technical details, allowing you to focus on creating quality assessments and providing timely, meaningful feedback.

---

**MarkSense - Technical Guide for Assessment Template Preparation**

**(Target Audience: AI Assistant or Technical Staff; Assumes Future AI-Assisted Template Creation)**

**Objective:** Ensure assessment materials are structured and annotated correctly, either manually via compatible tools or programmatically (potentially AI-assisted), to enable the MarkSense automated workflow.

**Core Principle:** MarkSense relies on a separate, hidden **Template PDF** (`*_TEMPLATE.pdf`) associated with each student handout (`AssessmentName.pdf`). This template contains precisely positioned and labeled **PDF annotations** that define assessment structure and marking logic.

**Ideal Future State: AI-Assisted Template Generation:**

The system aims to automate template creation from structured source documents (e.g., Markdown with LaTeX). An AI assistant, guided by this technical specification, should generate the `AssessmentName.pdf` (student handout) and the corresponding `AssessmentName_TEMPLATE.pdf` (internal template with annotations).

**Manual/Fallback Template Creation Requirements (Using Acrobat):**

If manual creation/editing is necessary:

1.  **Base PDF:** Start with the final student handout PDF (`AssessmentName.pdf`).
2.  **Save As Template:** Save a copy as `AssessmentName_TEMPLATE.pdf`.
3.  **Editor:** Use **Adobe Acrobat** (or verified equivalent) that preserves `/T` field metadata.
4.  **Add Annotations:** Add the following annotations to `AssessmentName_TEMPLATE.pdf`, ensuring precise placement and **exact labels** in the `/T` field ("Title" in Acrobat properties). Annotations should generally have no fill and thin borders unless specified.

    *   **MC Correct Guides:**
        *   Type: `/Square`, Label: `mc-q{N}-{correct_letter}`, Appearance: Green border, No fill.
        *   Placement: Covers correct answer bubble (A/B/C/D) for each MC question. Page: MC page(s).
    *   **MC Incorrect Placeholders:**
        *   Type: `/Square`, Label: `mc_incorrect_q{N}-{choice_letter}`, Appearance: Red border, No fill.
        *   Placement: One for *every* choice (A/B/C/D) for *every* question. Position adjacent/overlapping the bubble. Page: MC page(s).
    *   **MC Area Marker:**
        *   Type: `/Square`, Label: `mc_area`, Appearance: Black border, No fill.
        *   Placement: Bounds the entire MC section. Page: MC page(s).
    *   **Written Answer Area Markers:**
        *   Type: `/Square`, Label: `written_q{N}_area`, Appearance: Black border, No fill.
        *   Placement: Bounds the designated answer space for each written question. Page: Relevant page.
    *   **Score Field Placeholders:**
        *   Type: `/FreeText`, Label: `mark-part-a`, `mark-part-b`, `mark-total`, `mark-q{N}-{part}`, Appearance: Small box where score should appear, Content: "0".
    *   **Comment Field Placeholders:**
        *   Type: `/FreeText`, Label: `comment_overall`, `comment_mc`, `comment_q{N}`, Appearance: Appropriately sized box where comments belong, Content: Empty.
    *   **Filename Stamp Placeholder:**
        *   Type: `/FreeText`, Label: `filename_stamp_placeholder`, Appearance: Positioned where stamp should go, Content: Ignored. Page: **1 only**.

**Programmatic Template Generation (AI Guidance):**

When generating templates programmatically (e.g., from Markdown/LaTeX via a Rust backend using `pdf_exam_tools_lib`):

1.  **Generate Handout:** Create the student-facing PDF (`AssessmentName.pdf`) without MarkSense annotations but including necessary layout and potentially the QR code/identifier.
2.  **Generate Template:** Create the separate `AssessmentName_TEMPLATE.pdf`. This can often be a copy of the handout PDF initially.
3.  **Add Annotations Programmatically:** Use the library functions (`add_labeled_rect_multi`, `add_labeled_freetext_multi`) to add all the required annotations listed above to the `AssessmentName_TEMPLATE.pdf`.
    *   **Coordinate Calculation:** Determine the correct `/Rect` coordinates based on the source document structure (e.g., position relative to specific text anchors found via OCR during generation, or based on layout conventions like Tufte-LaTeX). This is the most complex part of automated generation.
    *   **Labeling:** Apply the exact labels specified.
    *   **Appearance:** Set colors and styles as specified.

**Linking Handout, Template, and Scans:**

*   The system requires a robust, **automated** mechanism to link a scanned student paper back to its corresponding `AssessmentName_TEMPLATE.pdf` and the associated rubric/class list.
*   **Implementation:** This is handled internally by MarkSense during the "Create New Assessment Template" step in the Teacher UI. It generates a unique assessment ID. This ID is embedded visually (QR code) or as metadata onto the student handout PDF. The scanner (or subsequent processing step) reads this ID from the scan and uses it to retrieve the correct template, rubric, and class context from the MarkSense system database/storage. Manual linking is not part of the standard teacher workflow.

**Verification:**

*   Programmatically generated templates should be verified using library functions (`get_annotation_properties`, etc.) to confirm all required annotations exist with correct labels, types, and approximate positions before being finalized.

This technical guide provides the necessary details for consistent and correct template preparation, forming the foundation for the automated marking process.
