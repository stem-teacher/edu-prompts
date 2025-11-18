# 2023 HSC Chemistry Exam - Quarto Conversion

This directory contains the 2023 NSW HSC Chemistry examination paper converted to Quarto markdown format for high-fidelity PDF rendering.

## Files

- `2023-hsc-chemistry.qmd` - Main Quarto document with all exam questions
- `2023-hsc-chemistry_20240318.pdf` - Original exam PDF
- `extract_images.py` - Python script to extract images from PDF
- `Makefile` - Build automation
- `README.md` - This file
- `images/` - Directory for extracted images (to be created)

## Exam Structure

- **Year**: 2023
- **Total Marks**: 100
- **Section I**: 20 multiple choice questions (20 marks)
- **Section II**: 17 extended response questions (Questions 21-37, 80 marks)
- **Total Pages**: 44 (including formulae and data sheets)

## Required Images

All images must be extracted from the original PDF and placed in the `images/` directory.

### Section I Images (Multiple Choice)

| Image File | Question | Page | Description | Width % |
|-----------|----------|------|-------------|---------|
| `q2-aas-diagram.png` | Q2 | 2 | Atomic absorption spectroscopy apparatus diagram | 80% |
| `q3-structure.png` | Q3 | 3 | Structural formula of pent-2-yne compound | 60% |
| `q5-weak-acid-diagrams.png` | Q5 | 4 | Four beaker diagrams showing weak acid solutions with key | 100% |
| `q9-titration-curve.png` | Q9 | 5 | Titration curve graph (pH vs volume of titrant) | 70% |
| `q11-indicator-chart.png` | Q11 | 6 | Flower water indicator color chart | 90% |
| `q16-precipitation-curve.png` | Q16 | 9 | Precipitation titration curve (pAg vs volume AgNO3) | 70% |
| `q18-rate-graph.png` | Q18 | 10 | Rate vs time graph showing equilibrium shift | 70% |
| `q19-mass-spectrum.png` | Q19 | 11 | Mass spectrum for butan-2-one | 70% |

### Section II Images (Extended Response)

| Image File | Question | Page | Description | Width % |
|-----------|----------|------|-------------|---------|
| `q21-isomers.png` | Q21 | 14 | Three structural isomers with formula C4H8O2 | 80% |
| `q23-buffer-diagram.png` | Q23 | 16 | Two beaker diagrams showing pH changes with NaOH addition | 80% |
| `q25-combustion-apparatus.png` | Q25 | 18 | Experimental apparatus for combustion of octan-1-ol | 60% |
| `q26-nitric-acid-process.png` | Q26 | 20 | Flowchart of industrial nitric acid production process | 100% |
| `q29-solubility-graph.png` | Q29 | 24 | Solubility vs molar mass graph for alkan-1-ols | 70% |
| `q31-graph-paper.png` | Q31 | 27 | Grid paper for calibration curve plotting | 90% |
| `q33-piston-diagram.png` | Q33 | 30 | Container with moveable piston diagram | 40% |
| `q33-equilibrium-graph.png` | Q33 | 30 | Amount vs time graph showing equilibrium changes | 80% |
| `q36-nmr-spectrum.png` | Q36 | 34 | 13C NMR spectrum of compound A | 45% |
| `q36-ir-spectrum.png` | Q36 | 34 | Infrared spectrum of compound B | 45% |

**Total images needed: 18**

## Image Extraction Methods

### Method 1: Using pdfimages (Command Line)

```bash
# Install poppler-utils if needed
# Ubuntu/Debian: sudo apt-get install poppler-utils
# macOS: brew install poppler

# Extract all images from PDF
pdfimages -png 2023-hsc-chemistry_20240318.pdf images/extracted

# Then manually crop and rename the images according to the table above
```

### Method 2: Using Python Script

```bash
# Install required packages
pip install pdf2image Pillow

# Run the extraction script
python extract_images.py

# The script will save full-page images that you can then crop manually
```

### Method 3: Manual Extraction (PDF Viewer)

1. Open `2023-hsc-chemistry_20240318.pdf` in a PDF viewer (Adobe Acrobat, Preview, etc.)
2. For each image listed in the table above:
   - Navigate to the specified page
   - Take a screenshot of the image area
   - Crop to remove excess whitespace
   - Save with the correct filename in `images/` directory
   - Ensure reasonable resolution (300 DPI recommended)

## Build Instructions

### Prerequisites

- [Quarto](https://quarto.org/docs/get-started/) (version 1.3 or later)
- LaTeX distribution (TinyTeX, TeX Live, or MiKTeX)
- All images extracted and placed in `images/` directory

### Quick Start

```bash
# Check if all images are present
make check-images

# Render the document to PDF
make render

# Or use Quarto directly
quarto render 2023-hsc-chemistry.qmd
```

### Manual Rendering

```bash
quarto render 2023-hsc-chemistry.qmd --to pdf
```

The output will be `2023-hsc-chemistry.pdf`.

## Dependencies

### LaTeX Packages

The following LaTeX packages are required (automatically loaded in the YAML header):

- `chemfig` - For drawing chemical structures
- `mhchem` - For chemical equations and formulas
- `siunitx` - For SI units formatting
- `graphicx` - For including images
- `tikz` - For diagrams
- `fancyhdr` - For custom headers

These are typically included in standard LaTeX distributions.

## Chemistry Notation

All chemical notation uses the `mhchem` package:

- Chemical formulas: `\ce{H2O}`, `\ce{NaCl}`
- Ions: `\ce{Na+}`, `\ce{SO4^2-}`
- Reactions: `\ce{A + B -> C}`
- Equilibrium: `\ce{A <=> B}`
- States: `\ce{H2O(l)}`, `\ce{CO2(g)}`

## Customization

### Adjusting Margins

Edit the YAML header geometry section:

```yaml
geometry:
  - margin=2.5cm  # Change this value
```

### Changing Font Size

Edit the YAML header:

```yaml
fontsize: 11pt  # Options: 10pt, 11pt, 12pt
```

### Page Headers

Modify the `\fancyhead` commands in the YAML header to change page header content.

## Quality Checklist

Before finalizing, verify:

- [ ] All 18 images extracted and correctly named
- [ ] All chemical formulas use `\ce{}` notation
- [ ] All 20 multiple choice questions present (Section I)
- [ ] All 17 extended response questions present (Section II)
- [ ] Mark allocations shown for each question
- [ ] Tables properly formatted
- [ ] Mathematical expressions use LaTeX math mode
- [ ] Document renders without errors
- [ ] Output PDF resembles original exam paper

## Notes

- The original PDF includes formulae sheets and data sheets (pages 41-44) which contain reference information
- Some complex diagrams may need manual recreation for best quality
- Image quality depends on the source PDF resolution
- The conversion maintains the exact question numbering and mark allocations from the original exam

## Copyright

© 2023 NSW Education Standards Authority

This conversion is for educational purposes. The original examination paper is the property of NSW Education Standards Authority.

## Version History

- **2024-03-18**: Initial conversion from original PDF
- Document ID: 1020

## Contact

For issues or improvements to this conversion, please check the parent repository documentation.
