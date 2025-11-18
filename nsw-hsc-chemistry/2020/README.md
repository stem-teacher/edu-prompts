# 2020 HSC Chemistry Exam - Quarto Conversion

This directory contains the Quarto markdown conversion of the 2020 NSW HSC Chemistry examination paper.

## Project Overview

- **Exam Year**: 2020
- **Total Marks**: 100
- **Section I**: 20 multiple choice questions (20 marks)
- **Section II**: 16 extended response questions (Questions 21-36, 80 marks)
- **Total Images Required**: 26

## Files

- `2020-hsc-chemistry.qmd` - Main Quarto document
- `2020-hsc-chemistry.pdf` - Original exam PDF
- `README.md` - This file
- `extract_images.py` - Python script for image extraction
- `Makefile` - Build automation
- `images/` - Directory for extracted images

## Required Images

All images must be extracted from the PDF and placed in the `images/` directory.

### Section I Images (Multiple Choice)

| Image File | Question | Page | Description | Width |
|------------|----------|------|-------------|-------|
| `nsw-logo.png` | Title | 1 | NSW Government logo | - |
| `q2-indicator-table.png` | 2 | 2 | Table of acid-base indicators with pH ranges | 80% |
| `q5-nmr-spectrum.png` | 5 | 3 | 13C NMR spectrum showing two peaks | 80% |
| `q6-structure.png` | 6 | 4 | Molecular structure with Br, F, H, OH groups | 40% |
| `q7-isomers.png` | 7 | 4 | Four structural formulas in a 2x2 grid | 100% |
| `q8-titration-curve.png` | 8 | 5 | pH titration curve for weak base vs HCl | 70% |
| `q9-structures.png` | 9 | 6 | Four organic compound structures (A-D) | 70% |
| `q12-polymer.png` | 12 | 7 | Polymer structure showing repeating unit | 60% |
| `q15-chloroacetamide.png` | 15 | 8 | Structure of chloroacetamide molecule | 40% |
| `q16-equilibrium.png` | 16 | 9 | Yield vs temperature at different pressures | 70% |
| `q17-apparatus.png` | 17 | 9 | Beaker with CuSO4 solid and saturated solution | 50% |
| `q19-rate-graphs.png` | 19 | 10 | Four rate vs time graphs (A-D) | 100% |
| `q20-solubility-graph.png` | 20 | 11 | Graph of Ag+ vs CrO4^2- concentrations | 80% |

### Section II Images (Extended Response)

| Image File | Question | Page | Description | Width |
|------------|----------|------|-------------|-------|
| `q21-mass-spectrum.png` | 21 | 15 | Mass spectrum of an alkane | 80% |
| `q23-flowchart.png` | 23 | 17 | Industrial process flowchart for ethane-1,2-diol | 90% |
| `q24-biodiesel-reaction.png` | 24 | 18 | Chemical equation showing biodiesel production | 100% |
| `q25-graph-paper.png` | 25 | 21 | Graph paper grid for plotting data | 100% |
| `q26-energy-profile.png` | 26 | 22 | Energy profile diagram for N2 + O2 -> NO | 60% |
| `q27-equation.png` | 27 | 23 | Empty boxes for structural formulas | 80% |
| `q29-flowchart.png` | 29 | 25 | Reaction flowchart with compounds A-E | 90% |
| `q29-structures.png` | 29 | 25 | Empty boxes for drawing structures A-E | 80% |
| `q30-ir-spectrum.png` | 30 | 26 | Infrared spectrum | 100% |
| `q30-h-nmr.png` | 30 | 26 | 1H NMR spectrum | 100% |
| `q30-c-nmr.png` | 30 | 26 | 13C NMR spectrum | 100% |
| `q34-ph-graph.png` | 34 | 32 | pH vs concentration for two acids | 80% |

## Image Extraction Methods

### Method 1: Using pdfimages (Command Line)

```bash
# Install poppler-utils if not already installed
# Ubuntu/Debian: sudo apt-get install poppler-utils
# macOS: brew install poppler

# Extract all images
pdfimages -png 2020-hsc-chemistry.pdf images/extracted

# Then manually crop and rename each image according to the table above
```

### Method 2: Using Python (pdf2image)

Run the provided `extract_images.py` script:

```bash
# Install required packages
pip install pdf2image Pillow

# Run extraction script
python extract_images.py
```

This will save full-page images in the `images/pages/` directory. You'll need to manually crop the specific diagrams/graphs from these pages.

### Method 3: Manual Extraction (PDF Viewer)

1. Open `2020-hsc-chemistry.pdf` in a PDF viewer
2. Use screenshot tool to capture each image
3. Save with the filename from the table above
4. Place in the `images/` directory

## Building the Document

### Prerequisites

- Quarto (>= 1.3)
- LaTeX distribution (TinyTeX, TeX Live, or MiKTeX)
- Required LaTeX packages: chemfig, mhchem, siunitx, graphicx, tikz, fancyhdr

### Install Quarto

```bash
# See https://quarto.org/docs/get-started/
```

### Install Required LaTeX Packages

```bash
# If using TinyTeX
quarto install tinytex
tlmgr install chemfig mhchem siunitx pgf tikz fancyhdr
```

### Render the Document

```bash
# Check that all images are present
make check-images

# Render to PDF
make render

# Or use Quarto directly
quarto render 2020-hsc-chemistry.qmd
```

## Makefile Commands

```bash
make help          # Show available commands
make check-images  # Verify all required images are present
make render        # Render the Quarto document to PDF
make clean         # Remove generated files
```

## Notes

### Chemistry Notation

All chemical formulas use the `mhchem` package:
- Formulas: `\ce{H2O}`, `\ce{NaCl}`
- Reactions: `\ce{2H2 + O2 -> 2H2O}`
- Equilibrium: `\ce{A <=> B}`
- Ions: `\ce{H+}`, `\ce{OH-}`

### Mathematical Expressions

- Equilibrium constants: $K_{eq}$, $K_a$, $K_b$, $K_{sp}$
- Enthalpy: $\Delta H$
- Concentrations: mol L^-1^ or \ce{mol L-1}

### Answer Spaces

Answer spaces in Section II are represented with `\vspace{Xcm}` where X varies based on expected answer length.

### Special Features

- Title page with NSW logo and formatting
- Section breaks with `\newpage`
- Tables for data presentation
- Graph paper placeholder for Question 25

## Customization

### Adjusting Margins

Edit the geometry settings in the YAML header:

```yaml
geometry:
  - margin=2.5cm  # Change to desired margin
```

### Changing Font Size

```yaml
fontsize: 11pt  # Options: 10pt, 11pt, 12pt
```

### Page Headers

Headers are controlled by the fancyhdr package in the YAML:

```latex
\fancyhead[L]{Centre Number}
\fancyhead[R]{Student Number}
```

## Copyright

© 2020 NSW Education Standards Authority

This examination paper is provided for educational purposes.

## Completion Checklist

- [ ] Extract all 26 images from PDF
- [ ] Verify image dimensions and quality
- [ ] Test render with `quarto render 2020-hsc-chemistry.qmd`
- [ ] Check chemistry notation renders correctly
- [ ] Verify all tables format properly
- [ ] Confirm page breaks are appropriate
- [ ] Review final PDF against original exam paper
