# 2016 HSC Chemistry Exam - Quarto Conversion

This directory contains a high-fidelity Quarto conversion of the 2016 NSW HSC Chemistry examination paper.

## Files

- `2016-hsc-chemistry.qmd` - Main Quarto document with complete exam content
- `2016-hsc-chemistry-archive.pdf` - Original PDF exam paper
- `extract_images.py` - Python script to extract images from the PDF
- `Makefile` - Build automation commands
- `images/` - Directory for extracted images (needs to be created)
- `README.md` - This file

## Exam Structure

**Total Marks:** 100
**Time:** 3 hours (plus 5 minutes reading time)

### Section I (75 marks)
- **Part A (20 marks):** Questions 1-20 - Multiple choice
- **Part B (55 marks):** Questions 21-30 - Extended response questions

### Section II (25 marks)
Choose ONE question from:
- Question 31: Industrial Chemistry
- Question 32: Shipwrecks, Corrosion and Conservation
- Question 33: The Biochemistry of Movement
- Question 34: The Chemistry of Art
- Question 35: Forensic Chemistry

## Required Images

All images need to be extracted from the original PDF and placed in the `images/` directory.

### List of Required Images

| Image File | Question | Page | Description | Width |
|------------|----------|------|-------------|-------|
| q1-vinyl-chloride.png | 1 | 2 | Molecular structure of vinyl chloride | 30% |
| q5-hydrogen-bonding.png | 5 | 3 | Four diagrams showing H-bonding between water and ethanol | 80% |
| q11-haloalkane.png | 11 | 5 | Structural formula of haloalkane | 30% |
| q13-flowchart.png | 13 | 6 | Flowchart for substance identification | 60% |
| q16-galvanic-cell.png | 16 | 7 | Electrochemical cell diagram | 50% |
| q17-polymer.png | 17 | 8 | Polymer structure | 70% |
| q17-monomers.png | 17 | 8 | Four possible monomer structures | 60% |
| q20-mercury-spectrum.png | 20 | 9 | Mercury emission spectrum | 60% |
| q21-galvanic-cell.png | 21 | 14 | Silver/Copper galvanic cell | 60% |
| q22-apparatus.png | 22 | 15 | Reflux apparatus for esterification | 40% |
| q23-graph-grid.png | 23 | 16 | Empty graph grid for plotting data | 100% |
| q27-graph.png | 27 | 21 | Volume of gas vs HCl volume graph | 70% |
| q28-equilibrium-graph.png | 28 | 22 | Concentration vs time for equilibrium system | 70% |
| q31a-sulfur-extraction.png | 31(a) | 30 | Frasch process sulfur extraction diagram | 60% |
| q32a-electrolytic-cell.png | 32(a) | 32 | Electrolytic cell with graphite electrodes | 50% |
| q33a-amino-acids.png | 33(a) | 34 | Table of amino acid structures (Cys, Asp, Thr) | 60% |
| q33a-ribonuclease.png | 33(a) | 34 | Ribonuclease enzyme structure diagram | 50% |
| q34a-electron-config.png | 34(a) | 36 | Electron configuration diagram | 50% |
| q35a-shoe-print.png | 35(a) | 38 | Photograph of shoe print in soil | 40% |
| q35b-electrophoresis.png | 35(b) | 39 | Before and after electrophoresis diagrams | 70% |
| q35c-emission-spectra.png | 35(c) | 40 | Atomic emission spectra comparison | 100% |
| periodic-table.png | Data | 42 | Periodic Table | 100% |

**Total Images Required:** 22

## Image Extraction Methods

### Method 1: Using pdfimages (Command Line)

```bash
# Install poppler-utils if needed
sudo apt-get install poppler-utils  # Ubuntu/Debian
brew install poppler                 # macOS

# Create images directory
mkdir -p images

# Extract all images from the PDF
pdfimages -png 2016-hsc-chemistry-archive.pdf images/extract

# Rename and crop images as needed
```

### Method 2: Using Python Script

```bash
# Install required packages
pip install pdf2image Pillow

# Run the extraction script
python extract_images.py

# Images will be saved to images/ directory as full-page screenshots
# Manual cropping required for individual diagrams
```

### Method 3: Manual Extraction (Most Accurate)

1. Open `2016-hsc-chemistry-archive.pdf` in a PDF viewer
2. Use screenshot or snipping tool to capture each image
3. Save with the exact filename from the table above
4. Recommended tools:
   - macOS: Preview or Grab
   - Windows: Snipping Tool or Snip & Sketch
   - Linux: GNOME Screenshot or Spectacle

## Building the Document

### Prerequisites

- Quarto (>= 1.3)
- LaTeX distribution (TeX Live, MiKTeX, or TinyTeX)
- Required LaTeX packages: chemfig, mhchem, siunitx, graphicx, tikz, fancyhdr

### Install Quarto

```bash
# macOS
brew install quarto

# Ubuntu/Debian
sudo apt-get install quarto

# Or download from https://quarto.org/docs/get-started/
```

### Install LaTeX

```bash
# Install TinyTeX (recommended)
quarto install tinytex

# Or install full TeX Live distribution
```

### Build Commands

```bash
# Check that all images are present
make check-images

# Render the document to PDF
make render

# Clean generated files
make clean

# Show help
make help
```

## Manual Build

```bash
# Render the Quarto document
quarto render 2016-hsc-chemistry.qmd

# Output will be: 2016-hsc-chemistry.pdf
```

## Chemistry Notation

This document uses proper chemistry notation via the `mhchem` LaTeX package:

- Chemical formulas: `\ce{H2O}`, `\ce{NaOH}`, `\ce{C6H12O6}`
- Ions: `\ce{Na+}`, `\ce{SO4^2-}`, `\ce{Fe^3+}`
- Reactions: `\ce{A + B -> C + D}`
- Equilibrium: `\ce{A + B <=> C + D}`
- States: `\ce{H2O(l)}`, `\ce{CO2(g)}`, `\ce{NaCl(s)}`, `\ce{HCl(aq)}`

## Customization

### Page Layout

Edit the YAML header in `2016-hsc-chemistry.qmd`:

```yaml
geometry:
  - margin=2.5cm  # Adjust margins
fontsize: 11pt    # Change font size
```

### Chemistry Packages

Additional LaTeX packages can be added in the `include-in-header` section.

## Known Issues

1. **Missing Images:** All image placeholders are included in the .qmd file. Images must be extracted from the PDF and placed in the `images/` directory before rendering.

2. **Complex Molecular Structures:** Some complex organic structures (Q1, Q5, Q11, Q17, Q33a) may need to be redrawn using ChemFig for publication-quality output.

3. **Graph Grid (Q23a):** The empty graph grid needs to be extracted or recreated using TikZ.

4. **Tables:** All tables use standard Markdown format. Complex tables may need LaTeX formatting for perfect alignment.

## Quality Checklist

- [x] All Section I Part A questions (1-20) included
- [x] All Section I Part B questions (21-30) included
- [x] All Section II option questions (31-35) included
- [x] All chemical formulas use `\ce{}` notation
- [x] Mark allocations shown for each question
- [x] Image placeholders for all diagrams/graphs
- [x] Data sheet included
- [x] Periodic table placeholder included
- [ ] All images extracted and placed in images/ directory
- [ ] Document renders successfully to PDF
- [ ] Output PDF matches original layout

## Contributing

To improve this conversion:

1. Extract missing images
2. Verify chemical notation accuracy
3. Check mark allocations match original
4. Test PDF rendering
5. Report any discrepancies

## Copyright

© 2016 Board of Studies, Teaching and Educational Standards NSW

This conversion is for educational purposes. The original examination paper is the property of NSW Education Standards Authority (NESA).

## Source

Original PDF: `2016-hsc-chemistry-archive.pdf`

Conversion Date: 2025

Conversion Tool: Claude Code with custom HSC Chemistry conversion prompt
