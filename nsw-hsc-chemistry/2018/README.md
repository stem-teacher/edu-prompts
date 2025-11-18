# 2018 HSC Chemistry Exam - Quarto Conversion

This directory contains the 2018 NSW HSC Chemistry examination paper converted to Quarto markdown format for high-fidelity PDF rendering.

## Files

- `2018-hsc-chemistry.qmd` - Main Quarto document with complete exam content
- `2018-hsc-chemistry-archive.pdf` - Original exam PDF
- `README.md` - This file
- `extract_images.py` - Python script to assist with image extraction
- `Makefile` - Build automation
- `images/` - Directory for extracted images (to be created)

## Exam Structure

**Year:** 2018

**Total Marks:** 100

**Sections:**
- **Section I – 75 marks** (Part A: 20 multiple choice, Part B: 10 extended response questions)
- **Section II – 25 marks** (Choose ONE from 5 elective module questions)

**Special Features:**
- This is a pre-2019 exam with the old syllabus structure
- Uses Fe^3+ notation in tables (not standard modern notation)
- Has specific formatting for chemical equations in tables

## Required Images

All images must be extracted from the original PDF and saved in the `images/` directory. Below is a complete list:

### Section I - Part A (Multiple Choice)

| Image File | Question | Page | Description | Suggested Width |
|------------|----------|------|-------------|-----------------|
| `q7-weak-acid-ionisation.png` | 7 | 3 | Four beaker diagrams (A-D) showing ionisation of weak acid with key | 80% |
| `q17-ph-buffer-graphs.png` | 17 | 7 | Four graphs (A-D) showing pH vs CO2 concentration | 90% |
| `q19-galvanic-cells.png` | 19 | 8 | Four galvanic cell diagrams (A-D) with different electrode combinations | 100% |

### Section I - Part B (Extended Response)

| Image File | Question | Page | Description | Suggested Width |
|------------|----------|------|-------------|-----------------|
| `q24-fermentation-apparatus.png` | 24 | 14 | Diagram of fermentation setup with gas syringe | 50% |
| `q25-kinetic-energy-graph.png` | 25 | 15 | Graph showing molecular kinetic energy distribution at two temperatures with activation energy marked | 70% |
| `q27-cfc-structure.png` | 27 | 17 | Structural formula of chlorofluorocarbon compound | 30% |
| `q28-camp-stove.png` | 28 | 18 | Diagram of camp stove showing clearance height | 40% |
| `q28-graph-grid.png` | 28 | 18 | Empty graph grid for plotting data | 80% |

### Section II - Elective Questions

| Image File | Question | Page | Description | Suggested Width |
|------------|----------|------|-------------|-----------------|
| `q32-electrolytic-cell.png` | 32 | 27 | Diagram of electrolytic cell with anode, cathode, and electrolyte | 40% |
| `q33-dipeptide.png` | 33 | 29 | Structural formula of dipeptide molecule | 40% |
| `q33-energy-profile.png` | 33 | 30 | Energy profile diagram for glucose combustion showing activation energy and enthalpy change | 60% |
| `q34-boron-config.png` | 34 | 31 | Electron configuration diagram for boron using orbital boxes | 30% |
| `q35-mass-spectrometer.png` | 35 | 32 | Schematic diagram of mass spectrometer with part A labelled | 50% |

**Total Images Required:** 14

## Image Extraction Methods

### Method 1: Using pdfimages (Command Line)

```bash
# Install poppler-utils if needed
sudo apt-get install poppler-utils  # Ubuntu/Debian
brew install poppler                 # macOS

# Extract all images from the PDF
pdfimages -png 2018-hsc-chemistry-archive.pdf images/extracted

# Images will be saved as extracted-000.png, extracted-001.png, etc.
# You'll need to identify and rename them according to the table above
```

### Method 2: Using Python Script

Run the provided extraction script:

```bash
python3 extract_images.py
```

This will:
- Convert specific pages to images for manual cropping
- Save full-page images in `images/pages/`
- Provide a list of images to extract

### Method 3: Manual Extraction (Most Accurate)

1. Open `2018-hsc-chemistry-archive.pdf` in a PDF viewer
2. For each image in the table above:
   - Navigate to the specified page
   - Use screenshot or PDF annotation tools to select and copy the image
   - Save with the exact filename from the table
   - Recommended format: PNG with transparent background where applicable

**Quality Guidelines:**
- Minimum resolution: 150 DPI
- For diagrams: Ensure all labels and text are clearly readable
- For graphs: Maintain grid lines and axis labels
- For chemical structures: Ensure bonds and atoms are crisp

## Building the Document

### Prerequisites

1. **Quarto** (version 1.3 or later)
```bash
# Installation instructions at: https://quarto.org/docs/get-started/
```

2. **LaTeX distribution** with required packages:
   - chemfig
   - mhchem
   - siunitx
   - graphicx
   - tikz
   - fancyhdr

For complete LaTeX installation:
```bash
# Ubuntu/Debian
sudo apt-get install texlive-full

# macOS
brew install --cask mactex

# Windows
# Download and install MiKTeX or TeX Live
```

### Build Commands

Using Make:
```bash
# Check if all images are present
make check-images

# Render the PDF
make render

# Clean generated files
make clean

# View help
make help
```

Using Quarto directly:
```bash
# Render to PDF
quarto render 2018-hsc-chemistry.qmd

# Preview (renders and opens)
quarto preview 2018-hsc-chemistry.qmd
```

## Verification Checklist

Before considering the conversion complete, verify:

- [ ] All 14 images extracted and placed in `images/` directory
- [ ] All 20 multiple choice questions present (Questions 1-20)
- [ ] All 10 extended response questions present (Questions 21-30)
- [ ] All 5 elective questions present (Questions 31-35)
- [ ] Chemical formulas use `\ce{}` notation throughout
- [ ] All mark allocations shown correctly
- [ ] Tables formatted properly in markdown
- [ ] Mathematical expressions in LaTeX math mode
- [ ] Document renders without errors
- [ ] Generated PDF matches original layout

## Notes on 2018 Exam Specifics

1. **Notation Differences**: This exam uses Fe^3+ in tables rather than \ce{Fe^3+} - converted to proper mhchem notation
2. **Section Structure**: Different from current format - has Part A and Part B in Section I
3. **Elective Modules**: Five options (Industrial Chemistry, Shipwrecks, Biochemistry of Movement, Chemistry of Art, Forensic Chemistry)
4. **Chemistry Equations**: Many complex equilibrium equations requiring careful LaTeX formatting
5. **Data Sheet**: Includes standard potentials table and formulae

## Customization Options

### Adjusting Page Layout

Edit the YAML header in `2018-hsc-chemistry.qmd`:

```yaml
geometry:
  - margin=2.5cm  # Change margins
fontsize: 11pt    # Change to 10pt or 12pt
```

### Changing Image Widths

Modify the `{width=XX%}` parameter in image tags:

```markdown
![Description](images/filename.png){width=60%}
```

### Chemical Notation

All chemistry uses the mhchem package. Examples:
- Formulas: `\ce{H2SO4}`, `\ce{Fe^3+}`, `\ce{SO4^2-}`
- Reactions: `\ce{A + B -> C}`
- Equilibrium: `\ce{A <=> B}`

## Troubleshooting

### Images Not Displaying

1. Check image files exist in `images/` directory
2. Verify filenames match exactly (case-sensitive)
3. Ensure image format is supported (PNG, JPG, PDF)

### LaTeX Errors

1. Check all `\ce{}` commands are properly closed
2. Verify math mode delimiters (`$...$` or `$$...$$`)
3. Ensure special characters are escaped

### Build Failures

1. Run `make check-images` to verify all images present
2. Check Quarto version: `quarto --version`
3. Verify LaTeX packages installed: `tlmgr list --installed`

## Dependencies

- Quarto ≥ 1.3
- LaTeX distribution (TeXLive, MiKTeX, or MacTeX)
- Python ≥ 3.7 (for extraction script)
- pdf2image library (optional): `pip install pdf2image`
- poppler-utils (optional, for pdfimages)

## License

This conversion is for educational purposes. The original examination paper is:

© 2018 NSW Education Standards Authority

## Contact

For issues or questions about this conversion, please refer to the main project repository.

---

**Last Updated:** 2025-11-18
**Quarto Version:** 1.3+
**Status:** Images pending extraction
