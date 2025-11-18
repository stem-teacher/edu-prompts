# 2021 HSC Chemistry Exam - Quarto Conversion

This directory contains the Quarto markdown conversion of the 2021 NSW HSC Chemistry examination paper.

## Files

- `2021-hsc-chemistry.qmd` - Main Quarto document
- `2021-hsc-chemistry.pdf` - Original exam PDF
- `README.md` - This file
- `extract_images.py` - Python script to assist with image extraction
- `Makefile` - Build automation
- `images/` - Directory for extracted images

## Document Structure

- **Section I**: 20 multiple choice questions (20 marks)
- **Section II**: 16 extended response questions, Q21-36 (80 marks)
- **Total marks**: 100
- **Additional materials**: Formulae sheet, Data sheet, Periodic Table

## Required Images

All images must be extracted from the PDF and saved in the `images/` directory. Below is the complete list:

### Section I - Multiple Choice Questions

| Image File | Question | Page | Description | Suggested Width |
|------------|----------|------|-------------|----------------|
| `q3-structure.png` | 3 | 3 | Structural formula of N-methylpropanamide | 50% |
| `q4-ethyl-pentanoate.png` | 4 | 4 | Structural formula of ethyl pentanoate | 60% |
| `q8-soap-emulsion.png` | 8 | 5 | Four diagrams (A-D) showing soap anion arrangements in emulsion | 80% |
| `q9-paracetamol-spectrum.png` | 9 | 6 | UV absorption spectrum of paracetamol | 60% |
| `q9-solvent-spectra.png` | 9 | 6 | UV absorption spectra for four solvents (A-D) | 100% |
| `q10-polymer-structure.png` | 10 | 7 | Polymer chain structure | 60% |
| `q10-monomer-options.png` | 10 | 7 | Four structural formulas (A-D) for monomer options | 80% |
| `q12-spectra.png` | 12 | 8 | Mass spectrum and Carbon-13 NMR | 100% |
| `q12-structures.png` | 12 (cont) | 9 | Four structural formulas (A-D) | 100% |
| `q14-calibration-curve.png` | 14 | 10 | Calibration curve (absorbance vs concentration) for nickel analysis | 70% |
| `q16-titration-curve.png` | 16 | 11 | Titration curve (pH vs titre volume) | 70% |

### Section II - Extended Response Questions

| Image File | Question | Page | Description | Suggested Width |
|------------|----------|------|-------------|----------------|
| `q25-apparatus.png` | 25 | 18 | Fermentation apparatus with gas syringe | 60% |
| `q26-flowchart.png` | 26 | 19 | Reaction flow chart from 2-methylprop-1-ene | 100% |
| `q29-ir-spectrum.png` | 29 | 22 | Infrared spectrum of pentane-1,5-diamine | 100% |
| `q29-mass-spectrum.png` | 29 | 22 | Mass spectrum of pentane-1,5-diamine | 100% |
| `q29-c13-nmr.png` | 29 | 22 | Carbon-13 NMR spectrum | 100% |
| `q29-h-nmr.png` | 29 (cont) | 23 | Proton NMR spectrum | 100% |
| `q33-graph.png` | 33 | 28 | Graph showing ΔH and TΔS vs temperature | 80% |
| `q34-ph-graph.png` | 34 | 29 | pH vs time graph for HCl bubbled into water and solutions | 70% |

**Total images required: 19**

## Image Extraction Methods

### Method 1: Using pdfimages (Command Line)

```bash
# Install poppler-utils if not already installed
# Ubuntu/Debian: sudo apt-get install poppler-utils
# macOS: brew install poppler

# Extract all images from PDF
pdfimages -png 2021-hsc-chemistry.pdf images/extracted

# Images will need to be manually cropped and renamed
```

### Method 2: Using Python Script

Run the provided extraction script:

```bash
python extract_images.py
```

This will save full-page images that you can manually crop.

### Method 3: Manual Extraction (Recommended for Best Quality)

1. Open `2021-hsc-chemistry.pdf` in a PDF viewer
2. For each image listed above:
   - Navigate to the specified page
   - Use screenshot tool or PDF export to capture the image
   - Crop to show only the relevant diagram/graph
   - Save with the exact filename listed above
   - Ensure good resolution (at least 300 DPI for print quality)

## Building the Document

### Prerequisites

- Quarto (https://quarto.org/docs/get-started/)
- LaTeX distribution (TinyTeX recommended: `quarto install tinytex`)
- All images extracted and placed in `images/` directory

### Build Commands

```bash
# Using Makefile
make render

# Or directly with Quarto
quarto render 2021-hsc-chemistry.qmd

# Check for missing images
make check-images

# Clean generated files
make clean
```

## LaTeX Packages Used

The document uses the following LaTeX packages for chemistry notation:

- **chemfig**: Drawing chemical structures
- **mhchem**: Chemical formulas and equations
- **siunitx**: Scientific units
- **graphicx**: Image inclusion
- **tikz**: Graphics and diagrams
- **fancyhdr**: Page headers

## Chemistry Notation

All chemical formulas use the `\ce{}` command from mhchem:

- Formulas: `\ce{H2O}`, `\ce{NaOH}`, `\ce{CH3COOH}`
- Ions: `\ce{H+}`, `\ce{OH-}`, `\ce{Cr2O7^2-}`
- Reactions: `\ce{A + B -> C + D}`
- Equilibrium: `\ce{A + B <=> C + D}`

## Notes

- The original PDF contains 36 pages (including formulae and data sheets)
- Some structural formulas are provided as images rather than ChemFig code for accuracy
- Answer spaces are indicated with `\vspace{}` commands
- The document maintains the original page structure and question numbering

## Special Features of 2021 Exam

- Question 12: Combined mass spectrum and NMR analysis
- Question 29: Comprehensive spectroscopy question with IR, Mass, C-13 NMR, and H-NMR
- Question 35: Complex back titration calculation (note: contains a correction about potassium iodide quantity)
- Multiple questions involving graph interpretation and data analysis

## Verification Checklist

- [ ] All 19 images extracted and named correctly
- [ ] Images placed in `images/` directory
- [ ] All chemical formulas use `\ce{}` notation
- [ ] Document renders without errors
- [ ] PDF output matches original layout
- [ ] All question numbers and marks correct
- [ ] Tables formatted properly
- [ ] Math equations display correctly

## Copyright

© 2021 NSW Education Standards Authority

This conversion is for educational purposes.
