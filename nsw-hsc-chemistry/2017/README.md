# 2017 HSC Chemistry Exam - Quarto Conversion

This directory contains the Quarto markdown conversion of the 2017 NSW HSC Chemistry examination paper.

## Project Overview

**Exam Year:** 2017
**Total Marks:** 100
**Duration:** 3 hours (plus 5 minutes reading time)
**Source PDF:** `2017-hsc-chemistry-archive.pdf`

## Exam Structure

### Section I (75 marks)
- **Part A:** Questions 1–20 (20 marks) - Multiple choice
- **Part B:** Questions 21–30 (55 marks) - Short answer and extended response

### Section II (25 marks)
Choose ONE question from:
- Question 31: Industrial Chemistry
- Question 32: Shipwrecks, Corrosion and Conservation
- Question 33: The Biochemistry of Movement
- Question 34: The Chemistry of Art
- Question 35: Forensic Chemistry

## Files in This Directory

- `2017-hsc-chemistry.qmd` - Main Quarto document
- `2017-hsc-chemistry-archive.pdf` - Original PDF exam paper
- `README.md` - This file
- `extract_images.py` - Python script for image extraction
- `Makefile` - Build automation
- `images/` - Directory for extracted images
- `images/README.md` - List of required images

## Required Images

A total of **23 images** need to be extracted from the PDF:

### Part A - Multiple Choice (Questions 1-20)

| Image File | Question | Page | Description |
|------------|----------|------|-------------|
| `q3-structure.png` | 3 | 2 | Structural formula of 4-carbon haloalkane with Cl and F |
| `q4-apparatus.png` | 4 | 3 | Esterification apparatus with reflux condenser |
| `q7-test-tubes.png` | 7 | 4 | Three test tubes showing bromine water, hexane, and hexene setup |
| `q7-results.png` | 7 | 4 | Four options (A-D) showing possible results in test tubes |
| `q9-apparatus.png` | 9 | 5 | Heat of combustion apparatus with spirit burner and flask |
| `q10-cells.png` | 10 | 6 | Dry cell and lead-acid cell diagrams side by side |
| `q12-polymers.png` | 12 | 7 | Four polymer structure options showing different arrangements |
| `q15-lewis-structures.png` | 15 | 8 | Four Lewis dot structure options for N₂O |
| `q18-equilibrium-graph.png` | 18 | 9 | Graph showing concentration vs time for gases X, Y, and Z |

### Part B - Extended Response (Questions 21-30)

| Image File | Question | Page | Description |
|------------|----------|------|-------------|
| `q22-grid.png` | 22(a) | 16 | Empty grid for plotting calibration curve |
| `q23-galvanic-cell.png` | 23 | 17 | Galvanic cell with Zn and Ag electrodes |
| `q26-map.png` | 26(b) | 21 | Map showing SO₂ concentrations over landmass |
| `q29-map.png` | 29 | 24 | Map of Rivertown at river junction with sites X and Y |

### Section II - Option Questions (Questions 31-35)

| Image File | Question | Page | Description |
|------------|----------|------|-------------|
| `q31b-graph.png` | 31(b)(i) | 30 | Graph of SO₃ concentration vs time |
| `q31c-flowchart.png` | 31(c) | 31 | Solvay process flow chart |
| `q33a-enzyme-graph.png` | 33(a)(i) | 33 | Enzyme activity vs pH graph |
| `q33c-dipeptide.png` | 33(c)(i) | 34 | Incomplete dipeptide formation equation |
| `q34c-lewis-oxygen.png` | 34(c)(i) | 36 | Incorrect Lewis dot structure of oxygen |
| `q34c-ionisation-graph.png` | 34(c)(ii-iii) | 36 | Successive ionisation energies for transition metals |
| `q35a-emission-spectrum.png` | 35(a)(ii) | 37 | Sodium emission spectrum showing wavelengths |
| `q35c-blood-spectrum.png` | 35(c)(iii) | 38 | Mass spectrum of blood sample |
| `q35c-four-spectra.png` | 35(c)(iii) | 39 | Four mass spectra (Methoxyp.d, Trifluor.d, Heroin, Ethanol) |

## Image Extraction Methods

### Method 1: Using `pdfimages` (Command Line)

The `pdfimages` utility extracts images directly from PDF files.

```bash
# Install pdfimages (part of poppler-utils)
sudo apt-get install poppler-utils  # Ubuntu/Debian
brew install poppler                 # macOS

# Extract all images
pdfimages -png 2017-hsc-chemistry-archive.pdf images/extracted

# Images will be numbered sequentially
# You'll need to identify and rename them according to the table above
```

### Method 2: Using Python `pdf2image`

The provided `extract_images.py` script converts specific PDF pages to images for manual cropping.

```bash
# Install required Python packages
pip install pdf2image pillow

# Run the extraction script
python extract_images.py

# This will create full-page images in the images/ directory
# You'll need to crop the specific diagrams/graphs from these pages
```

### Method 3: Manual Extraction via PDF Viewer

1. Open `2017-hsc-chemistry-archive.pdf` in a PDF viewer
2. For each image in the table above:
   - Navigate to the specified page
   - Use the PDF viewer's selection tool to select the image/diagram
   - Copy and paste into an image editor, or use screenshot tools
   - Save with the exact filename from the table
   - Save to the `images/` directory

### Recommended Image Specifications

- **Format:** PNG (preferred for diagrams and graphs)
- **Resolution:** 300 DPI minimum for clarity
- **Color mode:** RGB or Grayscale as appropriate
- **Compression:** Use lossless compression

## Building the Document

### Prerequisites

```bash
# Install Quarto
# Download from https://quarto.org/docs/get-started/

# Install LaTeX (required for PDF output)
# For Ubuntu/Debian:
sudo apt-get install texlive-full

# For macOS:
brew install --cask mactex

# Verify LaTeX packages
# The document requires: chemfig, mhchem, siunitx, graphicx, tikz, fancyhdr
```

### Build Commands

Using the Makefile:

```bash
# Check if all required images are present
make check-images

# Render the Quarto document to PDF
make render

# Clean generated files
make clean

# Show help
make help
```

Manual build:

```bash
# Render to PDF
quarto render 2017-hsc-chemistry.qmd

# The output will be: 2017-hsc-chemistry.pdf
```

## Dependencies

### LaTeX Packages

The following LaTeX packages are required (included in YAML header):

- `chemfig` - Drawing chemical structures
- `mhchem` - Chemical formula typesetting
- `siunitx` - SI units formatting
- `graphicx` - Image inclusion
- `tikz` - Drawing diagrams
- `fancyhdr` - Custom headers/footers

### Quarto Configuration

- **Document class:** article
- **Font size:** 11pt
- **Margins:** 2.5cm all sides
- **Output format:** PDF

## Notes on This Exam

### Unique Features of 2017 Exam

1. **Unusual structure:** Section I has two parts (A and B), unlike more recent exams
2. **Part A:** Traditional multiple choice (20 questions)
3. **Part B:** Extended response within Section I (questions 21-30, 55 marks)
4. **Section II:** Choose ONE from 5 option modules (25 marks each)

### Chemistry Notation Used

All chemical formulas use the `\ce{}` command from mhchem package:

- Formulas: `\ce{H2O}`, `\ce{NaCl}`, `\ce{CH3COOH}`
- Ions: `\ce{H+}`, `\ce{OH-}`, `\ce{SO4^2-}`
- Reactions: `\ce{A + B -> C + D}`
- Equilibrium: `\ce{A + B <=> C + D}`
- States: `\ce{H2O(l)}`, `\ce{CO2(g)}`, `\ce{NaCl(s)}`, `\ce{Na+(aq)}`

### Common Measurements

- Concentrations: mol L^-1^ or `\ce{mol L-1}`
- Energy: kJ mol^-1^
- Temperature: °C or K
- Pressure: kPa or Pa

## Image Extraction Script Usage

The `extract_images.py` script creates full-page images of pages containing diagrams:

```python
# The script will extract pages: 2-9, 16-17, 21, 24, 30-31, 33-34, 36-39
python extract_images.py

# Output files will be named: page_XX.png in the images/ directory
# You will need to crop specific diagrams from these pages
```

After running the script, use an image editor to:

1. Open each page image
2. Crop the relevant diagram/graph
3. Save with the correct filename from the images list above
4. Ensure proper resolution and clarity

## Quality Checklist

Before considering the conversion complete:

- [ ] All 23 images extracted and correctly named
- [ ] All questions transcribed (1-30 from Section I, 31-35 from Section II)
- [ ] All chemical formulas use `\ce{}` notation
- [ ] All mark allocations preserved
- [ ] Mathematical expressions in LaTeX format
- [ ] Tables properly formatted in markdown
- [ ] Answer spaces indicated with `\vspace{}`
- [ ] Document builds without errors
- [ ] PDF output resembles original exam paper
- [ ] All graphs and diagrams have descriptive alt text

## Troubleshooting

### Common Build Errors

**Error: "LaTeX package not found"**
```bash
# Install missing LaTeX packages
sudo tlmgr install chemfig mhchem siunitx
```

**Error: "Image not found"**
- Check that all images are in the `images/` directory
- Verify filenames match exactly (case-sensitive)
- Run `make check-images` to see which images are missing

**Error: "Quarto not found"**
```bash
# Install Quarto from https://quarto.org
# Or use package manager:
brew install quarto  # macOS
```

### Image Quality Issues

If images appear blurry or pixelated:

1. Re-extract at higher DPI (use 300 or 600 DPI)
2. Ensure source PDF is high quality
3. Use PNG format instead of JPG for diagrams
4. Check image dimensions are appropriate (not too small)

## Copyright Notice

© 2017 NSW Education Standards Authority

This examination paper is provided for educational purposes. All rights reserved.

## Version History

- **v1.0** (2025-01-18) - Initial conversion from PDF to Quarto format
  - All questions transcribed
  - Image placeholders created
  - Supporting files generated

## Contact & Contributions

For issues or improvements to this conversion, please refer to the main project repository.

---

**Last Updated:** January 2025
**Conversion Status:** Complete - Images pending extraction
**Build Status:** Ready for image insertion
