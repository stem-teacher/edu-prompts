# Claude Prompt: HSC Chemistry Exam PDF to Quarto Conversion

## Copy this entire prompt to use in a new Claude session

---

I need you to convert an uploaded PDF examination paper (NSW HSC Chemistry Exam) into a professional Quarto document that renders to PDF matching the original as closely as possible.

## Context

This is an NSW HSC Chemistry examination paper that typically contains:
- **Section I**: Multiple-choice questions (usually 20 questions, worth 20 marks)
- **Section II**: Extended response questions (worth 80 marks)
- Multiple diagrams, graphs, molecular structures, and data tables
- A formulae sheet at the end (or data sheet)

**IMPORTANT:** The exact structure, number of questions, page count, and mark allocations may vary between years. You MUST analyze the uploaded PDF to determine:
- Total number of sections and their structure
- Number of questions in each section
- Mark allocations for each question and sub-question
- Page numbers for diagrams and images
- Whether there are any additional sections or special instructions

## Required Output

Create a complete project structure with:

1. **Main Quarto document** (.qmd file)
2. **README.md** with full documentation
3. **Image extraction guide** or script
4. **Makefile** for build automation
5. **images/** directory structure

## Technical Specifications

### Quarto Document Requirements

The .qmd file MUST include:

**YAML Header:**
```yaml
---
title: "Chemistry"
subtitle: "[YEAR] HIGHER SCHOOL CERTIFICATE EXAMINATION"
format:
  pdf:
    documentclass: article
    geometry:
      - margin=2.5cm
    fontsize: 11pt
    include-in-header:
      text: |
        \usepackage{chemfig}
        \usepackage{mhchem}
        \usepackage{siunitx}
        \usepackage{graphicx}
        \usepackage{tikz}
        \usepackage{fancyhdr}
        \pagestyle{fancy}
        \fancyhead[L]{Centre Number}
        \fancyhead[R]{Student Number}
---
```

**Note:** Replace `[YEAR]` with the actual year of the exam (e.g., 2024, 2023, 2022). Extract this from the PDF title page or filename.

### Chemistry Notation Standards

Use the `mhchem` LaTeX package for ALL chemical notation:

- **Chemical formulas**: `\ce{H2O}`, `\ce{CH3COOH}`, `\ce{Na2CO3}`
- **Ions**: `\ce{H+}`, `\ce{OH-}`, `\ce{Fe^3+}`, `\ce{SO4^2-}`
- **Reactions**: `\ce{2H2 + O2 -> 2H2O}`
- **Equilibrium**: `\ce{A + B <=> C + D}`
- **Complex ions**: `\ce{[Cu(H2O)6]^2+}`, `\ce{[CuCl4]^2-}`
- **Subscripts in text**: \ce{H2SO4} not H~2~SO~4~
- **Concentrations**: mol L^-1^ or use `\ce{mol L-1}`

**Examples of correct usage:**
```latex
$$\ce{PCl3(g) + Cl2(g) <=> PCl5(g)}$$

$$\ce{2NO2(g) <=> N2O4(g)} \quad \Delta H = -57.2 \text{ kJ mol}^{-1}$$

The concentration of \ce{Ag+} ions in solution...

A 0.20 mol L^-1^ solution of \ce{NaOH}...
```

### Document Structure

**Title Page:**
- NSW Education Standards Authority header
- Exam title and year
- Centre Number and Student Number fields
- General Instructions
- Section breakdown with marks and timing

**Section I (Multiple Choice):**
- Clear question numbering (### Question 1, ### Question 2, etc.)
- All options labeled A, B, C, D (or sometimes E in some years - check the PDF)
- Preserve any tables, diagrams, or molecular structures
- Use placeholder images where needed: `![Description](images/qX-name.png){width=XX%}`
- Note: Some years may have 15 questions, others 20 - always check the actual PDF

**Section II (Extended Response):**
- Question numbers with mark allocation: `### Question [N] (X marks)` where N is the question number
- Sub-parts labeled: **(a)**, **(b)**, etc. with marks: **(a) ... (3 marks)**
- Some years use different sub-question styles (i, ii, iii) - preserve the original style
- Answer spaces represented with `\vspace{Xcm}`
- Tables for fill-in responses using markdown tables
- Graph paper or diagrams as image placeholders

## Image Handling

### Required Images List

**IMPORTANT:** You MUST analyze the PDF to identify ALL images that need extraction. The number and type of images varies by year.

Common types of images in HSC Chemistry exams include:
- Molecular structures and structural formulas
- Graphs (concentration vs time, titration curves, calibration curves, energy profiles)
- Diagrams (apparatus, flowcharts, molecular models)
- Data tables (when complex or containing special symbols)
- Periodic table sections
- Spectra (NMR, IR, UV-Vis, Mass spec)
- Polymer structures

**Naming Convention:**
- Use descriptive names: `qN-description.png` where N is the question number
- Examples:
  - `q1-apparatus.png` - Experimental apparatus diagram
  - `q5-equilibrium-graph.png` - Concentration vs time graph
  - `q15-nmr-spectrum.png` - NMR spectrum
  - `q23-structures.png` - Multiple structural formula options

**For each image, document in README.md:**
- Question number
- Page number in original PDF
- Description of the image
- Approximate dimensions or width percentage

### Image Syntax

Use this format:
```markdown
![Descriptive alt text](images/filename.png){width=XX%}
```

Typical widths:
- Small diagrams: 40-50%
- Structures/graphs: 60-80%
- Full-width tables/figures: 100%

## Specific Question Examples

**Note:** These are examples based on typical HSC Chemistry exam questions. The actual questions in your PDF will differ. Use these as formatting templates only.

### Multiple Choice Example:
```markdown
### Question 7

Copper ions can form coloured complexes with water molecules and with chloride ions in dilute aqueous solutions.

| Complex ion | Colour |
|-------------|--------|
| \ce{[Cu(H2O)6]^2+} | Blue |
| \ce{[CuCl4]^2-} | Green |

Which of the following analytical techniques would be most suitable to distinguish between these two complexes?

A. Infrared spectrophotometry  
B. Carbon-13 NMR spectroscopy  
C. UV-visible spectrophotometry  
D. Atomic absorption spectroscopy
```

### Extended Response Example:
```markdown
### Question 31 (6 marks)

Hydrazine is a compound of hydrogen and nitrogen. The complete combustion of 1.0 L of gaseous hydrazine requires 3.0 L of oxygen, producing 2.0 L of nitrogen dioxide gas and 2.0 L of water vapour. All volumes are measured at 400°C.

**(a)** Use the chemical equation for the combustion of hydrazine to show that the molecular formula for hydrazine is \ce{N2H4}. **(2 marks)**

\vspace{4cm}

**(b)** The relationship between the acid equilibrium constant ($K_a$) and the corresponding conjugate base equilibrium constant ($K_b$) is shown. **(4 marks)**

$$K_a \times K_b = K_w$$

Use a relevant chemical equation to calculate the pH of a 0.20 mol L^-1^ solution of \ce{N2H5+} using the following data:

- the $K_b$ of hydrazine is $1.7 \times 10^{-6}$ at 25°C
- \ce{N2H5+} is the conjugate acid of \ce{N2H4}.

\vspace{10cm}
```

### Table Example:
```markdown
| Compound | Molar mass |
|----------|------------|
| Ethyne | 26.04 |
| Hydrogen chloride | 36.46 |
| Chloroethene | 62.50 |
```

## Supporting Files Required

### 1. README.md

Must include:
- Project overview
- List of all required images with page numbers
- Three methods for extracting images from PDF:
  - Using pdfimages command
  - Using Python pdf2image library
  - Manual extraction via PDF viewer
- Build instructions
- Dependencies (LaTeX packages, Quarto, etc.)
- Customization options

### 2. Image Extraction Script (Python)

Create `extract_images.py` that:
- Uses pdf2image to convert specific pages to images
- Lists all images needed with page numbers
- Provides instructions for manual cropping
- Saves full pages for manual extraction

### 3. Makefile

Include targets for:
- `make help` - Show available commands
- `make check-images` - Verify all images present
- `make render` - Render the Quarto document
- `make clean` - Remove generated files

### 4. Directory Structure

```
project-root/
├── [YEAR]-hsc-chemistry.qmd    # e.g., 2024-hsc-chemistry.qmd
├── README.md
├── extract_images.py
├── Makefile
├── SUMMARY.md (optional)
└── images/
    └── README.md (list of required images)
```

**Filename Convention:** Use `[YEAR]-hsc-chemistry.qmd` where YEAR is the exam year (e.g., `2024-hsc-chemistry.qmd`, `2023-hsc-chemistry.qmd`)

## Important Requirements

### Must Do:
1. **Analyze the PDF first** - Determine the actual structure, question count, and page layout before starting
2. **Convert ALL questions** - Don't skip any content from any section
3. **Use proper chemistry notation** - Never write H2O, always \ce{H2O}
4. **Preserve mark allocations** - Every question shows marks: (2 marks), (3 marks), etc.
5. **Include all tables** - Convert to markdown tables
6. **Create image placeholders** - For every diagram, graph, or structure
7. **Maintain question numbering** - Use the exact numbering from the PDF (may vary by year)
8. **Use proper math notation** - $K_{eq}$, $\Delta H$, $pK_a$, etc.
9. **Include page breaks** - Use `\newpage` between major sections
10. **Adapt to variations** - Different years may have different numbers of questions, sections, or formats

### Must Not Do:
1. **Don't use HTML** - Use LaTeX/markdown only
2. **Don't skip images** - Every visual element needs a placeholder
3. **Don't invent content** - Transcribe exactly from the PDF
4. **Don't forget units** - Include mol L^-1^, kJ mol^-1^, etc.
5. **Don't use plain text for formulas** - Always use \ce{} or math mode

## Quality Checklist

Before finishing, verify:

- [ ] PDF thoroughly analyzed for structure and content
- [ ] All multiple choice questions present (Section I)
- [ ] All extended response questions present (Section II)
- [ ] Any additional sections included (e.g., data sheets, formulae sheets)
- [ ] Every chemical formula uses `\ce{}` notation
- [ ] All mark allocations shown for each question/subpart
- [ ] Image placeholders for ALL diagrams/graphs/structures
- [ ] Tables properly formatted in markdown
- [ ] Mathematical expressions in LaTeX math mode
- [ ] Answer spaces indicated with `\vspace{}`
- [ ] Year correctly identified and used in filename and subtitle
- [ ] README.md includes complete image extraction guide with page numbers
- [ ] Python extraction script provided and customized for this year
- [ ] Makefile with build commands (customized for the year-specific filename)
- [ ] YAML header includes all necessary LaTeX packages

## Starting the Work

When I upload the PDF:

1. **First**, read through the ENTIRE document to understand:
   - The year of the exam
   - Total number of pages
   - Number of sections and their structure
   - Total number of questions in each section
   - Mark allocations
   - All images, diagrams, graphs, and tables
   - Special features (data sheets, formulae sheets, etc.)

2. **Document your analysis** by stating:
   - "This is the [YEAR] HSC Chemistry exam"
   - "Section I contains [N] multiple choice questions"
   - "Section II contains [M] extended response questions"
   - "I've identified [X] images that need extraction"

3. **Create** the project directory structure with year-specific naming

4. **Write** the main .qmd file with:
   - Complete YAML header (with correct year)
   - Title page
   - All Section I questions
   - All Section II questions
   - Any additional sections

5. **Identify** ALL images needed and create placeholders

6. **Write** README.md with:
   - Year-specific information
   - Complete image extraction instructions with page numbers
   - List of all required images

7. **Create** extract_images.py script (customized for page numbers)

8. **Create** Makefile (using correct year in filename)

9. **Create** SUMMARY.md explaining what was done

## Additional Notes

### Year-Specific Variations
Different exam years may have:
- Different page counts and layouts
- Varying numbers of questions per section
- Different mark allocations
- Different image types and quantities
- Data sheets or formulae sheets at different locations
- Some years have tables for periodic data, others have separate sheets

### Technical Considerations
- Some complex organic structures may need ChemFig commands (especially in older papers)
- Preserve the formal exam paper style and layout from the specific year
- Use professional formatting throughout
- Include copyright notice with correct year: "© [YEAR] NSW Education Standards Authority"
- Older papers (pre-2019) may have different syllabus content and question styles

### Common Challenges by Era
- **2014-2018**: May have different question numbering schemes
- **2019-2024**: Generally more standardized format
- **All years**: Chemistry notation must be consistent using mhchem

## Example Output Quality

The final document when rendered should:
- Look professional and exam-like
- Match the layout and style of the original PDF
- Have clear section breaks
- Display all chemistry correctly with proper notation
- Be ready for image insertion
- Be buildable with: `quarto render [YEAR]-hsc-chemistry.qmd`
- Generate a PDF that closely resembles the original exam paper

## Before You Begin

Ask yourself:
1. What year is this exam?
2. How many questions are in each section?
3. What is the total page count?
4. How many images need extraction?
5. Are there any unique features in this year's exam?

---

Please proceed to convert the uploaded PDF following these specifications exactly:

1. **Analyze the PDF thoroughly first**
2. **State your findings** (year, structure, question counts)
3. **Create all files** in an appropriate directory structure
4. **Use year-specific naming** for all files
5. **Provide clear instructions** for completing the image extraction

Remember: Each year's exam may be slightly different. Adapt to what you see in the PDF while maintaining consistent high-quality output.
