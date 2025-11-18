# 2015 HSC Chemistry Exam - Quarto Conversion

This directory contains the Quarto markdown conversion of the 2015 NSW HSC Chemistry examination paper.

## Project Overview

- **Exam Year:** 2015
- **Subject:** Chemistry
- **Total Marks:** 100
- **Exam Structure:**
  - Section I Part A: 20 multiple choice questions (20 marks)
  - Section I Part B: 10 extended response questions (55 marks)
  - Section II: 5 option questions, choose ONE (25 marks)
- **Total Pages:** 42 (including data sheet and periodic table)
- **Status:** ✅ Complete conversion with image placeholders

## Files in This Directory

- `2015-hsc-chemistry.qmd` - Main Quarto document with all exam questions
- `README.md` - This file
- `extract_images.py` - Python script to assist with image extraction
- `Makefile` - Build automation commands
- `images/` - Directory for extracted images (to be populated)

## Required Images

All images need to be extracted from the original PDF and saved to the `images/` directory. Below is a complete list:

### Section I - Part A (Multiple Choice)

| Image File | Question | Page | Description | Suggested Width |
|------------|----------|------|-------------|-----------------|
| `q2-glassware.png` | 2 | 2 | Four types of glassware (conical flask, pipette, measuring cylinder, burette) | 80% |
| `q7-galvanic-cell.png` | 7 | 4 | Simple galvanic cell diagram with Ag and Cu electrodes in solutions | 70% |
| `q11-monomers.png` | 11 | 5 | Two monomer structures for condensation polymerisation | 60% |
| `q11-polymers.png` | 11 | 5 | Four polymer structure options (A-D) | 80% |
| `q14-titration-curve.png` | 14 | 6 | pH vs volume titration curve | 60% |
| `q15-catchment.png` | 15 | 7 | Water catchment diagram showing river, stream, forest, farmland, village, ocean | 70% |

### Section I - Part B (Extended Response)

| Image File | Question | Page | Description | Suggested Width |
|------------|----------|------|-------------|-----------------|
| `q22-graph-paper.png` | 22 | 15 | Grid paper for plotting ozone concentration data | 100% |
| `q28-apparatus.png` | 28 | 23 | Glass tube with cotton wool soaked in HCl and NH3 at ends | 70% |
| `q30-haber-graph.png` | 30 | 26 | Graph showing percentage yield of ammonia vs temperature at different pressures | 80% |

### Section II - Option Questions

| Image File | Question | Page | Description | Suggested Width |
|------------|----------|------|-------------|-----------------|
| `q31-solvay-process.png` | 31c | 31 | Flowchart of Solvay process for sodium carbonate production | 80% |
| `q32-electroplating.png` | 32c | 33 | Photograph of electroplating equipment with power supply and beaker | 60% |
| `q33-muscle-cell.png` | 33a | 34 | Simplified diagram of muscle cell showing organelles | 60% |
| `q33-protein-structure.png` | 33c | 35 | Protein section showing various bonding interactions | 70% |
| `q34-electronegativity.png` | 34c | 37 | Graph of electronegativity vs atomic number for Periods 1-3 | 70% |
| `q35-dna-profiles.png` | 35c | 39 | DNA profile banding patterns for George, Linda, and three children | 70% |
| `periodic-table.png` | Data | 42 | Complete periodic table | 100% |

**Total Images Required:** 17

## Image Extraction Methods

### Method 1: Using pdfimages (Command Line)

The `pdfimages` utility extracts all images from a PDF:

```bash
# Install pdfimages (part of poppler-utils)
sudo apt-get install poppler-utils  # Ubuntu/Debian
brew install poppler                  # macOS

# Extract all images from the PDF
pdfimages -all chemistry-hsc-exam-2015.pdf-archive.pdf images/extracted

# This will create numbered image files in the images/ directory
# You'll need to rename them according to the table above
```

### Method 2: Using Python (pdf2image)

Use the provided `extract_images.py` script:

```bash
# Install required packages
pip install pdf2image Pillow

# Run the extraction script
python extract_images.py

# The script will convert specific pages to images for manual cropping
```

### Method 3: Manual Extraction (PDF Viewer)

1. Open `chemistry-hsc-exam-2015.pdf-archive.pdf` in a PDF viewer
2. For each image listed in the table above:
   - Navigate to the specified page
   - Take a screenshot or use the PDF viewer's snapshot tool
   - Crop to include only the relevant image
   - Save with the exact filename from the table
   - Place in the `images/` directory

### Recommended Approach

1. Use Method 1 or 2 to extract page images
2. Use an image editor (GIMP, Photoshop, Preview, etc.) to crop individual elements
3. Save each cropped image with the appropriate filename
4. Ensure image quality is sufficient for clear reproduction in PDF output

## Building the Document

### Prerequisites

- **Quarto:** Install from https://quarto.org/docs/get-started/
- **LaTeX Distribution:** Required for PDF output
  - **Windows:** MiKTeX or TeX Live
  - **macOS:** MacTeX
  - **Linux:** TeX Live (`sudo apt-get install texlive-full`)
- **Images:** All 17 images must be extracted and placed in `images/` directory

### Build Commands

```bash
# Check if all images are present
make check-images

# Render to PDF
make render
# or
quarto render 2015-hsc-chemistry.qmd

# Clean generated files
make clean

# View help
make help
```

### Expected Output

- `2015-hsc-chemistry.pdf` - Final rendered exam paper

## Image Extraction Details

### Page-by-Page Image Guide

**Page 2 (Q2):** Glassware diagrams
- Extract 4 separate pieces of glassware shown as options A-D
- These are simple line drawings of laboratory equipment

**Page 4 (Q7):** Galvanic cell
- Extract the complete diagram showing two beakers, electrodes, salt bridge, and voltmeter
- Make sure labels (Ag, Cu, Ag⁺(aq), Cu²⁺(aq)) are visible

**Page 5 (Q11):** Monomers and polymers
- Two separate extractions needed:
  - Monomer structures (top of question)
  - Four polymer options (A-D) shown as answer choices

**Page 6 (Q14):** Titration curve
- Extract the pH vs Volume graph
- Ensure axes and curve are clearly visible

**Page 7 (Q15):** Water catchment
- Extract the complete map/diagram
- Should show River, Stream, Forest, Farmland, Village, Ocean, and point X
- Include the 1 km scale bar

**Page 15 (Q22):** Graph paper
- Extract the blank grid provided for students
- This should be the complete grid system

**Page 23 (Q28):** Apparatus diagram
- Extract the glass tube setup
- Should show cotton wool at both ends and labels

**Page 26 (Q30):** Haber process graph
- Extract the complete graph with multiple pressure curves
- Ensure legend is visible (200 atm, 300 atm, 400 atm, 500 atm)

**Page 31 (Q31):** Solvay process
- Extract the complete flowchart
- Should show: Purified brine, Carbon dioxide, Ammonia, Reaction vessel, Cooled, Filtered, Heated stages

**Page 33 (Q32):** Electroplating equipment
- Extract the photograph showing power supply, beaker, and electrodes
- Include the Mg(s) label

**Page 34 (Q33):** Muscle cell
- Extract the simplified cell diagram
- Should show mitochondria and other organelles

**Page 35 (Q33):** Protein structure
- Extract the complex protein bonding diagram
- Ensure all chemical structures and labels are visible

**Page 37 (Q34):** Electronegativity graph
- Extract the complete graph
- Ensure x-axis (Atomic Number 0-20) and y-axis (Electronegativity 0-4.0) are clear

**Page 39 (Q35):** DNA profiles
- Extract the banding pattern diagram
- Should show 5 lanes: George, Linda, Child A, Child B, Child C

**Page 42:** Periodic table
- Extract the complete periodic table
- This is the standard reference table provided with the exam

## Customization Options

### Adjusting Image Sizes

In the .qmd file, image widths can be adjusted using the `{width=XX%}` parameter:

```markdown
![Description](images/filename.png){width=70%}
```

### Modifying Page Layout

Edit the YAML header in `2015-hsc-chemistry.qmd`:

```yaml
geometry:
  - margin=2.5cm  # Adjust margins
fontsize: 11pt    # Adjust font size
```

### Chemistry Notation

All chemical formulas use the `mhchem` package:
- `\ce{H2O}` for water
- `\ce{H+}` for hydrogen ion
- `\ce{A + B -> C}` for reactions

## Quality Checklist

Before final rendering, verify:

- [ ] All 17 images extracted and properly named
- [ ] Images are clear and high resolution (300 DPI recommended)
- [ ] All chemical formulas use `\ce{}` notation
- [ ] All mark allocations shown for each question
- [ ] Answer spaces represented with `\vspace{}`
- [ ] Tables properly formatted
- [ ] Mathematical expressions in LaTeX
- [ ] Document renders without errors
- [ ] PDF output matches original exam layout

## Notes

- This conversion preserves the exact question text and structure from the original 2015 exam
- The exam format reflects the pre-2019 HSC Chemistry syllabus
- Some content may differ from the current syllabus (as noted in the warning on the title page)
- Image placeholders are included; actual images must be extracted separately
- Copyright © 2015 Board of Studies, Teaching and Educational Standards NSW

## Troubleshooting

### LaTeX Errors

If you encounter LaTeX errors:
1. Ensure all required packages are installed (`mhchem`, `siunitx`, etc.)
2. Check that chemical formulas use proper `\ce{}` syntax
3. Verify all special characters are properly escaped

### Missing Images

If images are missing:
1. Run `make check-images` to identify missing files
2. Extract missing images using one of the methods above
3. Ensure filenames match exactly (case-sensitive)

### Rendering Issues

If the document won't render:
1. Verify Quarto is installed: `quarto --version`
2. Check LaTeX installation: `pdflatex --version`
3. Review error messages for specific package issues

## Support

For issues with:
- **Quarto:** https://quarto.org/docs/
- **LaTeX packages:** https://www.ctan.org/
- **mhchem syntax:** https://mhchem.github.io/MathJax-mhchem/

## License

This conversion is for educational purposes. Original content © 2015 Board of Studies, Teaching and Educational Standards NSW.
