# 2022 HSC Chemistry Exam - Quarto Document

This directory contains the 2022 NSW HSC Chemistry examination paper converted to Quarto markdown format.

## Files

- `2022-hsc-chemistry.qmd` - Main Quarto document
- `2022-hsc-chemistry.pdf` - Original exam PDF
- `extract_images.py` - Python script to extract images from PDF
- `Makefile` - Build automation
- `images/` - Directory for extracted images
- `README.md` - This file

## Exam Structure

- **Year:** 2022
- **Total Marks:** 100
- **Sections:** 2
  - Section I: 20 multiple choice questions (20 marks)
  - Section II: 16 extended response questions (Questions 21-36, 80 marks)
- **Total Pages:** 40 (including data sheets)

## Required Images

All images need to be extracted from the original PDF and placed in the `images/` directory.

### Section I Images (Multiple Choice)

| Image File | Question | Page | Description | Width |
|------------|----------|------|-------------|-------|
| `q4-manganese-absorbance.png` | 4 | 3 | Manganese absorbance spectrum | 80% |
| `q4-lamp-spectra.png` | 4 | 3 | Four AAS lamp emission spectra (A-D) | 80% |
| `q6-uv-vis-spectra.png` | 6 | 4 | UV-visible absorbance spectra of solutions P and Q | 80% |
| `q9-structures.png` | 9 | 6 | Four structural formula options (A-D) for C8H18 | 80% |
| `q11-cyclohexanol-reaction.png` | 11 | 7 | Cyclohexanol structure, reaction arrow, and four product options | 80% |
| `q12-c6h14-isomers.png` | 12 | 8 | Four isomer structures of C6H14 (A-D) | 80% |
| `q15-conductivity-graph.png` | 15 | 10 | Conductivity vs volume graph for titration | 80% |
| `q18-biopolymer.png` | 18 | 11 | Biopolymer structure and four monomer options (A-D) | 90% |
| `q20-indicator-graph.png` | 20 | 12 | Cyanidin species distribution vs pH graph | 80% |

### Section II Images (Extended Response)

| Image File | Question | Page | Description | Width |
|------------|----------|------|-------------|-------|
| `q24-boiling-points.png` | 24 | 17 | Boiling point vs molar mass graph for 1-chloroalkanes | 80% |
| `q25-beakers.png` | 25 | 18 | Two beakers showing HCl and HCN solutions with pH values | 60% |
| `q28-flowchart.png` | 28 | 21 | Flowchart showing iron analysis procedure | 80% |
| `q30-mass-spectrum.png` | 30 | 24 | Mass spectrum of unknown compound | 80% |
| `q30-ir-spectrum.png` | 30 | 24 | Infrared spectrum of unknown compound | 80% |
| `q30-proton-nmr.png` | 30 | 24 | Proton NMR spectrum of unknown compound | 80% |
| `q30-c13-nmr.png` | 30 | 25 | Carbon-13 NMR spectrum of unknown compound | 80% |

**Total Images Required: 17**

## Image Extraction Methods

### Method 1: Using pdfimages (Command Line)

```bash
# Install poppler-utils if not already installed
sudo apt-get install poppler-utils  # Ubuntu/Debian
brew install poppler                 # macOS

# Extract all images from PDF
pdfimages -png 2022-hsc-chemistry.pdf images/raw

# Images will be extracted as raw-000.png, raw-001.png, etc.
# You'll need to manually rename and crop them according to the table above
```

### Method 2: Using Python script

```bash
# Install required packages
pip install pdf2image Pillow

# Run the extraction script
python extract_images.py

# This will save full page images that you can then crop manually
```

### Method 3: Manual Extraction (Most Accurate)

1. Open `2022-hsc-chemistry.pdf` in a PDF viewer (Adobe Acrobat, Preview, etc.)
2. For each image in the table above:
   - Navigate to the specified page
   - Take a screenshot of the relevant portion
   - Save with the exact filename from the table
   - Place in the `images/` directory

**Recommended:** Use Method 3 for best quality and accuracy, especially for:
- Graphs (Q4, Q6, Q15, Q20, Q24)
- Spectra (Q30 - all four spectra)
- Complex diagrams (Q28 flowchart)

## Building the Document

### Prerequisites

- Quarto: https://quarto.org/docs/get-started/
- LaTeX distribution (TinyTeX recommended):
  ```bash
  quarto install tinytex
  ```
- R or Python (optional, for running code cells)

### Build Commands

```bash
# Check all images are present
make check-images

# Render to PDF
make render
# or
quarto render 2022-hsc-chemistry.qmd

# Clean generated files
make clean

# View help
make help
```

### Manual Build

```bash
quarto render 2022-hsc-chemistry.qmd --to pdf
```

The output will be `2022-hsc-chemistry.pdf` in the same directory.

## LaTeX Packages Used

The document uses the following LaTeX packages (automatically included in header):

- `chemfig` - For drawing chemical structures
- `mhchem` - For chemical formulas and equations
- `siunitx` - For SI units
- `graphicx` - For including images
- `tikz` - For diagrams
- `fancyhdr` - For custom headers

## Chemistry Notation Standards

All chemical notation uses the `mhchem` package:

- Chemical formulas: `\ce{H2O}`, `\ce{NaOH}`, `\ce{CH3COOH}`
- Ions: `\ce{H+}`, `\ce{OH-}`, `\ce{Fe^3+}`, `\ce{SO4^2-}`
- Reactions: `\ce{2H2 + O2 -> 2H2O}`
- Equilibrium: `\ce{A + B <=> C + D}`
- Complex ions: `\ce{[Ag(NH3)2]+}`
- States: `\ce{HCl(aq)}`, `\ce{NaCl(s)}`, `\ce{H2O(l)}`, `\ce{CO2(g)}`

## Customization

### Changing Page Margins

Edit the YAML header in the .qmd file:

```yaml
geometry:
  - margin=2.5cm  # Change this value
```

### Changing Font Size

```yaml
fontsize: 11pt  # Options: 10pt, 11pt, 12pt
```

### Adjusting Image Sizes

In the markdown, change the width parameter:

```markdown
![Description](images/filename.png){width=70%}  # Change 70% as needed
```

## Troubleshooting

### Images not displaying

1. Check that all images are in the `images/` directory
2. Verify filenames match exactly (case-sensitive)
3. Ensure images are in PNG format
4. Run `make check-images` to verify

### LaTeX errors

1. Ensure TinyTeX or a LaTeX distribution is installed
2. Check that all required packages are available
3. Look for special characters that need escaping

### Chemistry notation not rendering

1. Verify `\ce{}` commands are properly formed
2. Check that mhchem package is loading (should be automatic)
3. Ensure braces are balanced

## Notes

- The original PDF includes formulae sheet, data sheet, and periodic table (pages 37-40)
- All mark allocations are preserved from the original exam
- Answer spaces are represented with `\vspace{Xcm}` commands
- Question numbering follows the original exactly
- Section I has questions 1-20 (multiple choice)
- Section II has questions 21-36 (extended response)

## Credits

**Original Document:** 2022 HSC Chemistry Examination
**Copyright:** © 2022 NSW Education Standards Authority
**Converted to Quarto:** [Date]

## License

This is an educational document. The original examination paper is copyright NSW Education Standards Authority. This Quarto conversion is for educational purposes only.
