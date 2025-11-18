# 2014 HSC Chemistry Exam - Quarto Conversion

This directory contains the converted 2014 NSW HSC Chemistry examination paper in Quarto markdown format.

## Files

- `2014-hsc-chemistry.qmd` - Main Quarto document with all questions
- `chemistry-hsc-exam-2014_archive.pdf` - Original PDF exam paper
- `extract_images.py` - Python script to assist with image extraction
- `Makefile` - Build automation
- `images/` - Directory for extracted images
- `README.md` - This file

## Exam Structure

**Year:** 2014

**Total Marks:** 100

**Sections:**
- **Section I - Part A:** Questions 1-20 (Multiple choice, 20 marks)
- **Section I - Part B:** Questions 21-31 (Extended response, 55 marks)
- **Section II:** Questions 32-36 (Choose ONE elective question, 25 marks)

**Total Pages:** 37 (plus data sheets)

## Images Required

All images must be extracted from the original PDF and placed in the `images/` directory. Below is a complete list of required images with their locations in the original PDF.

### Section I - Part A (Multiple Choice)

| Image File | Question | Page | Description | Suggested Width |
|------------|----------|------|-------------|-----------------|
| `q2-structure.png` | 2 | 2 | Structural formula of 2-fluoro-1,2-dibromopropane | 40% |
| `q8-ph-temperature-graph.png` | 8 | 6 | Graph showing pH vs temperature for weak acid HA | 60% |
| `q9-structures.png` | 9 | 7 | Four structural formulas for compounds W, X, Y, Z | 80% |
| `q11-coordinate-bonds.png` | 11 | 8 | Four Lewis structure diagrams showing coordinate covalent bonding | 70% |
| `q12-ph-scale.png` | 12 | 8 | pH scale (0-14) with various substances marked | 100% |
| `q13-ammonia-graphs.png` | 13 | 9 | Four graphs (A-D) showing ammonia concentration vs time | 80% |
| `q18-nylon66.png` | 18 | 11 | Polymer structure of nylon 6,6 and monomer options | 100% |
| `q20-yield-graph.png` | 20 | 12 | Graph showing yield of Z vs temperature at different pressures | 70% |

### Section I - Part B (Extended Response)

| Image File | Question | Page | Description | Suggested Width |
|------------|----------|------|-------------|-----------------|
| `q22-apparatus.png` | 22 | 14 | Spirit burner experimental setup with beaker, tripod, thermometer | 50% |
| `q22a-graph-grid.png` | 22(a) | 15 | Empty grid for graphing heat of combustion vs molar mass | 80% |
| `q23-town-diagram.png` | 23 | 16 | Diagram showing town, river, agricultural land, car battery factory | 70% |
| `q28-galvanic-cell.png` | 28 | 21 | Galvanic cell diagram with X metal anode and Cu cathode | 70% |
| `q29-gas-jar.png` | 29 | 22 | Gas jar experiment with burning sulfur and litmus paper | 40% |

### Section II - Elective Questions

| Image File | Question | Page | Description | Suggested Width |
|------------|----------|------|-------------|-----------------|
| `q32a-sulfuric-acid.png` | 32(a) | 26 | Three diagrams showing H₂SO₄ drops on steel and glass surfaces | 90% |
| `q33a-pipe-layers.png` | 33(a) | 28 | Cross-section of pipe showing protective layers | 60% |
| `q33c-chloride-graph.png` | 33(c) | 29 | Graph showing chloride ion concentration over 5 weeks (sawtooth pattern) | 60% |
| `q34a-neuromuscular-junction.png` | 34(a) | 30 | Diagram of nerve-muscle junction with synaptic cleft | 80% |
| `q34c-glycogen-graph.png` | 34(c)(ii) | 31 | Bell curve showing glycogen molecular mass distribution | 70% |
| `q35a-ionisation-graph.png` | 35(a) | 33 | Graph showing successive ionization energies of aluminium | 70% |
| `q35c-electron-config.png` | 35(c) | 34 | Table showing electron configurations with orbital diagrams | 80% |
| `q36a-blood-collection.png` | 36(a) | 35 | Picture of forensic scientist collecting blood sample | 60% |
| `q36b-dipeptide.png` | 36(b)(i) | 35 | Chemical structure equation of dipeptide hydrolysis | 70% |
| `q36c-mass-spectrum.png` | 36(c)(i) | 36 | Mass spectrum graph showing peaks at various m/z ratios | 80% |

### Additional Images

| Image File | Description |
|------------|-------------|
| `bostes-logo.png` | BOSTES (Board of Studies) logo for title page |

**Total Images Required:** 21 + 1 logo = 22 images

## Image Extraction Methods

### Method 1: Using pdfimages (Command Line)

```bash
# Install poppler-utils if needed
sudo apt-get install poppler-utils  # Ubuntu/Debian
brew install poppler                 # macOS

# Extract all images from PDF
pdfimages -all chemistry-hsc-exam-2014_archive.pdf images/extracted

# Images will be numbered sequentially
# You'll need to rename them according to the table above
```

### Method 2: Using Python (pdf2image)

Use the provided `extract_images.py` script:

```bash
# Install required packages
pip install pdf2image Pillow

# Run the extraction script
python extract_images.py

# This will extract full pages that you can then crop manually
```

### Method 3: Manual Extraction (PDF Viewer)

1. Open `chemistry-hsc-exam-2014_archive.pdf` in a PDF viewer
2. Navigate to the page containing the image
3. Use screenshot or snipping tool to capture the image
4. Save with the appropriate filename from the table above
5. Place in the `images/` directory

## Building the Document

### Prerequisites

- Quarto (version 1.3 or later)
- LaTeX distribution (TeX Live, MiKTeX, or TinyTeX)
- Required LaTeX packages: chemfig, mhchem, siunitx, graphicx, tikz, fancyhdr

### Install Quarto

```bash
# Download from https://quarto.org/docs/get-started/
# Or use package manager:
brew install quarto  # macOS
```

### Install LaTeX

```bash
# TinyTeX (recommended for Quarto)
quarto install tinytex

# Additional packages will be installed automatically on first render
```

### Render to PDF

```bash
# Using Quarto CLI
quarto render 2014-hsc-chemistry.qmd

# Using Make
make render

# Output will be: 2014-hsc-chemistry.pdf
```

### Check for Missing Images

```bash
# Using Make
make check-images

# This will list any missing image files
```

## LaTeX Packages Used

The document uses the following LaTeX packages for chemistry notation:

- **chemfig** - Drawing chemical structures
- **mhchem** - Chemical formulas and equations
- **siunitx** - Units and numbers
- **graphicx** - Image inclusion
- **tikz** - Diagrams and graphics
- **fancyhdr** - Custom headers and footers

## Chemistry Notation Examples

The document uses `mhchem` package for all chemical notation:

```latex
\ce{H2O}                    % Water
\ce{H+}                     % Hydrogen ion
\ce{Fe^3+}                  % Iron(III) ion
\ce{SO4^2-}                 % Sulfate ion
\ce{2H2 + O2 -> 2H2O}      % Chemical reaction
\ce{A + B <=> C + D}       % Equilibrium
\ce{[Cu(H2O)6]^2+}         % Complex ion
```

## Customization

### Adjust Page Margins

Edit the YAML header in `2014-hsc-chemistry.qmd`:

```yaml
geometry:
  - margin=2.5cm  # Change this value
```

### Adjust Font Size

```yaml
fontsize: 11pt  # Options: 10pt, 11pt, 12pt
```

### Change Header Content

```yaml
include-in-header:
  text: |
    \fancyhead[L]{Your Left Header}
    \fancyhead[R]{Your Right Header}
```

## Notes

- The original exam uses BOSTES (Board of Studies, Teaching and Educational Standards NSW) branding from 2014
- Chemical formulas must use `\ce{}` notation from mhchem package
- All mark allocations are preserved from the original
- Answer spaces are represented with `\vspace{Xcm}` commands
- The document includes both question paper and data sheets
- Section II requires students to answer in separate booklets (noted in instructions)

## Troubleshooting

### LaTeX Errors

If you encounter LaTeX compilation errors:

1. Ensure all required packages are installed
2. Check that all image files exist in the `images/` directory
3. Verify chemical notation uses proper `\ce{}` syntax
4. Check for special characters that need escaping

### Missing Images

If images are missing:

1. Run `make check-images` to identify which images are missing
2. Extract missing images using one of the methods above
3. Ensure image filenames match exactly (case-sensitive)

### Chemical Formula Rendering

If chemical formulas don't render correctly:

1. Verify mhchem package is installed
2. Check that formulas use `\ce{}` notation
3. Ensure braces are properly balanced

## Copyright

© 2014 Board of Studies, Teaching and Educational Standards NSW

This is an archived examination paper for educational purposes.

## Version History

- **v1.0** (2025) - Initial Quarto conversion from 2014 PDF exam
