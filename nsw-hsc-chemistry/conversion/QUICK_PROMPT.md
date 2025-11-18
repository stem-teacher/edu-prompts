# Quick Copy-Paste Prompt for New Claude Session

---

## PASTE THIS DIRECTLY INTO CLAUDE:

I need you to convert an uploaded PDF examination paper (NSW HSC Chemistry exam) into a Quarto document that renders to PDF matching the original.

**FIRST: Analyze the PDF to determine the year, structure, and number of questions. Each year's exam may vary slightly.**

**Key Requirements:**

**1. Create Complete Project Structure:**
- Main .qmd file with all questions
- README.md with documentation
- extract_images.py for image extraction
- Makefile for build automation
- images/ directory

**2. Use These LaTeX Packages (in YAML header):**
```yaml
---
title: "Chemistry"
subtitle: "[YEAR] HIGHER SCHOOL CERTIFICATE EXAMINATION"
format:
  pdf:
    documentclass: article
    geometry: [margin=2.5cm]
    fontsize: 11pt
    include-in-header:
      text: |
        \usepackage{chemfig}
        \usepackage{mhchem}
        \usepackage{siunitx}
---
```
*Replace [YEAR] with the actual exam year (e.g., 2024, 2023)*

**3. Chemistry Notation Rules:**
- ALWAYS use `\ce{}` for chemicals: `\ce{H2O}`, `\ce{CH3COOH}`, `\ce{Fe^3+}`
- Reactions: `\ce{A + B -> C}` or `\ce{A <=> B}` for equilibrium
- Concentrations: mol L^-1^ or `\ce{mol L-1}`
- Math: $K_{eq}$, $\Delta H$, $pK_a$

**4. Document Structure:**
- Title page with exam info (extract year from PDF)
- Section I: Multiple choice questions (count varies by year - check PDF)
- Section II: Extended response questions (count varies - check PDF)
- Each question numbered, marks shown: `### Question N (X marks)`
- Subparts: **(a)** ... **(3 marks)** (or **i**, **ii** depending on year)
- Answer spaces: `\vspace{4cm}`

**5. Images:**
Analyze PDF to identify ALL images (quantity varies by year):
```markdown
![Description](images/qN-description.png){width=70%}
```

Create complete list in README with:
- Question number
- Page number for extraction
- Description of image

**6. Tables:**
Use markdown tables:
```markdown
| Compound | Molar mass |
|----------|------------|
| Ethyne   | 26.04      |
```

**7. Must Include:**
- ALL questions from all sections (numbers vary by year)
- Mark allocations for every part
- All data tables converted to markdown
- Image placeholders for ALL diagrams/graphs/structures
- Year correctly identified in filename and subtitle

**8. Critical:**
- NEVER write "H2O" - always `\ce{H2O}`
- NEVER skip questions or content
- ALWAYS show marks: (2 marks), (3 marks)
- Convert ALL tables to markdown
- Create placeholder for EVERY image

**Example Question Format:**

```markdown
### Question 7

Copper ions can form coloured complexes with water molecules and with chloride ions.

| Complex ion | Colour |
|-------------|--------|
| \ce{[Cu(H2O)6]^2+} | Blue |
| \ce{[CuCl4]^2-} | Green |

Which analytical technique would best distinguish these complexes?

A. Infrared spectrophotometry  
B. Carbon-13 NMR spectroscopy  
C. UV-visible spectrophotometry  
D. Atomic absorption spectroscopy
```

**Example Extended Response:**

```markdown
### Question 25 (3 marks)

A student produced propyl butanoate by refluxing 0.267 mol of propan-1-ol and 0.298 mol of butanoic acid.

| Product | Volume (mL) | Density (g mL^-1^) | Molar mass (g mol^-1^) |
|---------|-------------|--------------------|-----------------------|
| propyl butanoate | 12.2 | 0.873 | 130.2 |

Calculate the percentage yield.

\vspace{8cm}
```

**Deliverables:**
1. Complete .qmd file named [YEAR]-hsc-chemistry.qmd (with ALL questions)
2. README.md (with year-specific image extraction guide)
3. extract_images.py (Python script with correct page numbers)
4. Makefile (with check-images, render, clean targets - using correct filename)
5. images/README.md (complete list of required images with page numbers)
6. SUMMARY.md (what was done + next steps)

**Quality Check:**
- Year correctly identified and used throughout
- All questions numbered correctly (per the actual PDF)
- All chemical formulas use \ce{}
- All marks shown
- All tables converted
- Image placeholders for EVERY diagram/graph
- Build instructions complete and year-specific

**Before Starting:**
1. Read the ENTIRE PDF
2. State the year and structure you found
3. Count total questions per section
4. Identify all images

**Then Create:**
Professional, exam-quality output matching the original PDF. Use year-specific naming for all files. Place all files in appropriate directory structure with clear documentation.

---

**WORKFLOW:**
1. Paste this prompt into Claude
2. Attach the HSC Chemistry PDF (any year: 2014-2025)
3. Claude will analyze the PDF and state what year/structure it found
4. Claude will create all conversion files with correct year-specific naming
