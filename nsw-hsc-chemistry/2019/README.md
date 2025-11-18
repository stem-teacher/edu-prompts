# 2019 HSC Chemistry Exam - Quarto Conversion

This directory contains the Quarto markdown conversion of the 2019 NSW HSC Chemistry examination paper.

## Project Overview

- **Exam Year**: 2019
- **Subject**: Chemistry
- **Total Marks**: 100
- **Total Questions**: 34 (Questions 1-20 in Section I, Questions 21-34 in Section II)
- **Original PDF Pages**: 36 pages (including formulae/data sheets)

## Structure

- **Section I**: Multiple choice questions 1-20 (20 marks, 35 minutes)
- **Section II**: Extended response questions 21-34 (80 marks, 2 hours 25 minutes)

## Files

- `2019-hsc-chemistry.qmd` - Main Quarto document
- `README.md` - This file
- `extract_images.py` - Python script for image extraction
- `Makefile` - Build automation
- `images/` - Directory for all extracted images

## Required Images

All images must be extracted from the original PDF and placed in the `images/` directory.

### Section I Images (Multiple Choice)

| Image Filename | Description | Question | PDF Page | Width |
|----------------|-------------|----------|----------|-------|
| `q1-structural-formulas.png` | Four structural formula options (A-D) for pentan-2-one | Q1 | 2 | 80% |
| `q4-mass-spectrum.png` | Mass spectrum graph showing m/z peaks at 27, 41, 60, 73, 88 | Q4 | 3 | 70% |
| `q5-q6-titration-curve.png` | Titration curve showing pH vs volume of acid added | Q5, Q6 | 4 | 70% |
| `q8-structure.png` | Ester structure: CH₃CH₂-O-C(=O)-CH₂CH₂CH₂CH₃ | Q8 | 5 | 50% |
| `q14-nmr-spectrum.png` | ¹H NMR spectrum for C₄H₉Cl | Q14 | 7 | 70% |
| `q14-structural-formulas.png` | Four structural options (A-D) for C₄H₉Cl isomers | Q14 | 7 | 60% |
| `q20-calibration-curve.png` | Absorbance vs concentration calibration curve for MnO₄⁻ | Q20 | 10 | 70% |

### Section II Images (Extended Response)

| Image Filename | Description | Question | PDF Page | Width |
|----------------|-------------|----------|----------|-------|
| `q21a-table.png` | Table showing 2-methylpropan-2-ol structure | Q21(a) | 14 | 70% |
| `q21b-isomers.png` | Two functional group isomers (propanal and propanone) | Q21(b) | 14 | 60% |
| `q23-apparatus.png` | Spirit burner apparatus for enthalpy determination | Q23 | 16 | 60% |
| `q24-conductivity-graph.png` | Conductivity vs volume titration graph | Q24 | 18 | 70% |
| `q25a-graph.png` | Concentration vs time graph for equilibrium system | Q25(a) | 19 | 70% |
| `q26-spectra.png` | Four spectra: Mass, IR, ¹H NMR, ¹³C NMR | Q26 | 20 | 100% |
| `q29-data-table.png` | Atomic absorption spectroscopy data table | Q29(c) | 24 | 70% |
| `q32-boiling-points.png` | Graph of boiling points for alcohols and thiols | Q32 | 28 | 80% |
| `q34-reaction-scheme.png` | Synthesis scheme from chloroethane to ethyl ethanoate | Q34 | 30 | 80% |

### Additional Assets

| Image Filename | Description | Location | Width |
|----------------|-------------|----------|-------|
| `nsw-logo.png` | NSW Government waratah logo | Title page | 3cm |
| `formulae-sheet.png` | Formulae sheet (if needed as image) | Page 33 | 100% |
| `data-sheet.png` | Data sheet with solubility constants | Page 33-34 | 100% |
| `periodic-table.png` | Periodic table | Page 36 | 100% |

## Image Extraction Methods

### Method 1: Using pdfimages (Command Line)

```bash
# Install poppler-utils if needed
sudo apt-get install poppler-utils

# Extract all images from the PDF
pdfimages -png 2019-hsc-chemistry.pdf images/extracted

# Images will be numbered sequentially
# You'll need to manually crop and rename them according to the table above
```

### Method 2: Using Python (pdf2image)

Run the provided `extract_images.py` script:

```bash
# Install required packages
pip install pdf2image Pillow

# Run the extraction script
python extract_images.py

# This will save full pages as images for manual cropping
```

### Method 3: Manual Extraction (PDF Viewer)

1. Open `2019-hsc-chemistry.pdf` in a PDF viewer (Adobe Reader, Preview, etc.)
2. Use the snapshot/screenshot tool to capture each image
3. Save with the appropriate filename from the table above
4. Crop to remove excess whitespace

### Recommended Workflow

1. Run `extract_images.py` to get full page images
2. Open each page image in an image editor (GIMP, Photoshop, etc.)
3. Crop each diagram/graph/structure according to the table
4. Save with the correct filename
5. Run `make check-images` to verify all images are present

## Building the Document

### Prerequisites

- Quarto (>= 1.3)
- LaTeX distribution (TeX Live or MiKTeX)
- Make (optional, for using Makefile)

### LaTeX Packages Required

The following LaTeX packages are automatically loaded:
- `chemfig` - For drawing chemical structures
- `mhchem` - For chemical formulae
- `siunitx` - For units
- `graphicx` - For images
- `tikz` - For diagrams
- `fancyhdr` - For headers

### Build Commands

```bash
# Check if all images are present
make check-images

# Render the Quarto document to PDF
make render
# OR
quarto render 2019-hsc-chemistry.qmd

# Clean generated files
make clean
```

## Chemistry Notation Notes

This document uses proper chemistry notation throughout:

- **Chemical formulae**: `\ce{H2O}`, `\ce{CH3COOH}`, `\ce{Na2CO3}`
- **Ions**: `\ce{H+}`, `\ce{OH-}`, `\ce{Fe^3+}`, `\ce{SO4^2-}`
- **Reactions**: `\ce{2H2 + O2 -> 2H2O}`
- **Equilibrium**: `\ce{A + B <=> C + D}`
- **Concentrations**: mol L^-1^ or `\ce{mol L-1}`

## Special Features in 2019 Exam

- **Question 4**: Mass spectrum analysis (organic compound identification)
- **Question 14**: ¹H NMR spectrum analysis
- **Question 20**: Multi-step dilution calculation with calibration curve
- **Question 26**: Multi-spectroscopic analysis (MS, IR, ¹H NMR, ¹³C NMR)
- **Question 29**: Atomic absorption spectroscopy with calibration curves

## Customization

### Adjusting Image Sizes

Image widths are specified in the .qmd file using `{width=XX%}`. Adjust these percentages if images appear too large or small in the final PDF.

### Changing Margins

Edit the geometry settings in the YAML header:

```yaml
geometry:
  - margin=2.5cm  # Change this value
```

### Font Size

Change the `fontsize` in the YAML header (default: 11pt).

## Known Issues

1. Some complex organic structures in Question 1 may need manual adjustment
2. The reaction scheme in Question 34 has multiple structural formulas that may need precise alignment
3. Graph paper grids in some questions are not included (only the graphs themselves)

## Quality Checklist

- [x] All 20 multiple choice questions included
- [x] All 14 extended response questions (21-34) included
- [x] All mark allocations specified
- [x] Chemical notation uses `\ce{}` throughout
- [x] Image placeholders for all diagrams/graphs
- [x] Answer spaces indicated with `\vspace{}`
- [x] Tables converted to markdown format
- [x] Mathematical expressions in LaTeX
- [x] Formulae and data sheets referenced
- [ ] All images extracted and placed in images/ directory
- [ ] Document successfully renders to PDF
- [ ] Visual comparison with original PDF

## Building Instructions

1. **Extract all images** using one of the methods above
2. **Verify images** with `make check-images`
3. **Render the document** with `quarto render 2019-hsc-chemistry.qmd`
4. **Check the output PDF** for accuracy
5. **Adjust image sizes** if necessary

## Contributing

When making changes:
- Maintain consistent chemistry notation using `\ce{}`
- Preserve original question numbering and mark allocations
- Keep image placeholders even if images aren't extracted yet
- Test that the document renders without errors

## License

This conversion is for educational purposes. The original examination content is © 2019 NSW Education Standards Authority.

## Contact

For issues or questions about this conversion, please refer to the main project repository.
