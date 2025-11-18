# 2024 HSC Chemistry Exam - Quarto Conversion

This directory contains the Quarto markdown conversion of the 2024 NSW HSC Chemistry examination paper.

## Files in this Directory

- `2024-hsc-chemistry.qmd` - Main Quarto document containing all exam questions
- `2024-hsc-chemistry.pdf` - Original exam PDF
- `README.md` - This file
- `extract_images.py` - Python script to extract images from the PDF
- `Makefile` - Build automation
- `images/` - Directory for extracted images

## Exam Structure

**Year:** 2024

**Total Marks:** 100

**Sections:**
- **Section I:** 20 multiple choice questions (20 marks, pages 2-12)
- **Section II:** 19 extended response questions (Questions 21-39, 80 marks, pages 13-40)

## Required Images

All images must be extracted from the original PDF and placed in the `images/` directory. Below is a complete list of required images with page numbers and descriptions.

### Section I (Multiple Choice) Images

| Image Filename | Question | Page | Description | Recommended Width |
|----------------|----------|------|-------------|-------------------|
| `q1-homologous-series.png` | 1 | 2 | Four pairs of structural formulas (A-D) showing different organic compounds | 80% |
| `q4-ir-spectrum.png` | 4 | 3 | Infrared spectrum showing % transmittance vs wavenumber (3500-500 cm⁻¹) | 70% |
| `q4-structures.png` | 4 | 3 | Four structural formulas (A: alcohol, B: carboxylic acid, C: ketone, D: alkane) | 60% |
| `q9-mass-spectra.png` | 9 | 5 | Four mass spectra (A-D) showing relative intensity vs m/z (0-80) | 80% |
| `q12-structure.png` | 12 | 7 | Structural formula of amide compound with chlorine and ethyl group | 50% |
| `q14-glycine.png` | 14 | 8 | Structural formula of glycine amino acid | 30% |
| `q14-silk-polymer.png` | 14 | 8 | Section of silk polymer showing peptide bonds | 70% |
| `q14-monomers.png` | 14 | 8 | Four amino acid monomers (A: glycine, B: alanine, C: propene derivative, D: serine) | 70% |
| `q17-titration-curve.png` | 17 | 10 | Titration curve showing pH (0-14) vs volume of NaOH (0-50 mL) with two equivalence points | 70% |
| `q18-reaction-quotient.png` | 18 | 11 | Four graphs (A-D) showing Q vs Time with different trends | 70% |
| `q19-structures.png` | 19 | 11 | Four structural formulas of organic compounds for NMR analysis | 80% |

### Section II (Extended Response) Images

| Image Filename | Question | Page | Description | Recommended Width |
|----------------|----------|------|-------------|-------------------|
| `q22-vinyl-fluoride.png` | 22 | 14 | Structural formula of vinyl fluoride monomer | 25% |
| `q24-graph-axes.png` | 24 | 16 | Blank graph paper for plotting boiling points vs carbon atoms | 60% |
| `q25-calibration-graph.png` | 25 | 18 | Calibration curve showing absorbance vs phosphate concentration (0-1.2 mg/L) | 70% |
| `q26-graph-axes.png` | 26 | 20 | Graph axes for sketching [I₂] vs time (0-6 min) | 60% |
| `q31-urea-synthesis.png` | 31 | 25 | Two reaction schemes: phosgene + ammonia and DMC + ammonia producing urea | 80% |
| `q33-reduction.png` | 33 | 27 | Reduction of acetone (ketone) to propan-2-ol (alcohol) | 40% |
| `q34-conductivity-graph.png` | 34 | 28 | Conductivity vs volume of ammonia solution showing decrease then plateau | 70% |
| `q35-structures.png` | 35 | 30 | Three carboxylic acid structures (Structure 1: propenoic acid, Structure 2: propanoic acid, Structure 3: diacid) | 100% |
| `q37-keq-vs-dg.png` | 37 | 33 | Graph showing equilibrium constant vs ΔG° (-35 to 0 kJ/mol) | 70% |
| `q38-mass-spectrum.png` | 38 | 34 | Mass spectrum showing relative intensity vs m/z (0-120) with peaks around 30, 40 | 70% |

## Image Extraction Methods

### Method 1: Using pdfimages (Command Line)

```bash
# Install poppler-utils if needed
sudo apt-get install poppler-utils  # Ubuntu/Debian
brew install poppler                 # macOS

# Extract all images from specific pages
pdfimages -f 2 -l 12 2024-hsc-chemistry.pdf images/section1
pdfimages -f 13 -l 40 2024-hsc-chemistry.pdf images/section2

# Then manually crop and rename images according to the table above
```

### Method 2: Using Python Script

```bash
# Install dependencies
pip install pdf2image pillow

# Run the extraction script
python extract_images.py

# This will save full-page images to images/ directory
# Manually crop the relevant portions and rename according to the table
```

### Method 3: Manual Extraction via PDF Viewer

1. Open `2024-hsc-chemistry.pdf` in your PDF viewer
2. For each image in the table:
   - Navigate to the specified page
   - Use screenshot tool or PDF export to capture the image
   - Crop to show only the relevant content
   - Save with the exact filename from the table
   - Place in `images/` directory

## Building the Document

### Prerequisites

- Quarto (>= 1.3)
- LaTeX distribution (TeX Live, MiKTeX, or MacTeX)
- LaTeX packages: chemfig, mhchem, siunitx, graphicx, tikz, fancyhdr

### Build Commands

```bash
# Check all images are present
make check-images

# Render to PDF
make render
# OR
quarto render 2024-hsc-chemistry.qmd

# Clean generated files
make clean
```

## Chemistry Notation

All chemical formulas use the `mhchem` package with `\ce{}` notation:

- **Formulas:** `\ce{H2O}`, `\ce{CH3COOH}`, `\ce{Na2CO3}`
- **Ions:** `\ce{H+}`, `\ce{OH-}`, `\ce{Fe^3+}`, `\ce{SO4^2-}`
- **Reactions:** `\ce{2H2 + O2 -> 2H2O}`
- **Equilibrium:** `\ce{A + B <=> C + D}`

## Special Notes for 2024 Exam

1. **Question 1** contains complex structural formulas showing homologous series - requires careful extraction
2. **Question 4** has an IR spectrum that needs clear wavenumber labels
3. **Question 9** shows four different mass spectra - extract as single composite image
4. **Question 17** has a diprotic acid titration curve with two inflection points
5. **Question 24** requires a blank graph for student plotting - extract the grid
6. **Question 25** calibration graph has fine grid lines - ensure high resolution
7. **Question 35** involves structure elucidation - three distinct carboxylic acid structures
8. **Question 38** is a multi-part organic chemistry problem requiring mass spectrum and NMR interpretation

## Customization

### Adjusting Margins

Edit the YAML header in `2024-hsc-chemistry.qmd`:

```yaml
geometry:
  - margin=2cm  # Change from 2.5cm
```

### Font Size

```yaml
fontsize: 12pt  # Change from 11pt
```

### Image Widths

Adjust the `{width=XX%}` parameter in image placeholders throughout the document.

## Quality Checklist

Before finalizing:

- [ ] All 30+ images extracted and placed in `images/` directory
- [ ] All images properly named according to the table
- [ ] All chemical formulas use `\ce{}` notation (no plain text like H2O)
- [ ] All mark allocations shown for each question
- [ ] Mathematical expressions in LaTeX math mode
- [ ] Document renders without errors
- [ ] PDF output matches original layout
- [ ] All tables properly formatted
- [ ] Page breaks appropriate

## Dependencies

### LaTeX Packages

The following LaTeX packages are required (included in the YAML header):

- `chemfig` - Drawing chemical structures
- `mhchem` - Chemical formula typesetting
- `siunitx` - SI units formatting
- `graphicx` - Image inclusion
- `tikz` - Graphics creation
- `fancyhdr` - Custom headers/footers

### Python Dependencies (for image extraction)

```
pdf2image>=1.16.0
Pillow>=9.0.0
```

## Troubleshooting

### Images Not Displaying

- Verify image files exist in `images/` directory
- Check filenames match exactly (case-sensitive)
- Ensure image format is PNG or JPG

### LaTeX Errors

- Install missing LaTeX packages via your TeX distribution's package manager
- For Ubuntu/Debian: `sudo apt-get install texlive-science texlive-extra-utils`
- For macOS: `tlmgr install chemfig mhchem siunitx`

### Chemistry Notation Not Rendering

- Ensure `mhchem` package is included in YAML header
- Verify all formulas are wrapped in `\ce{}`
- Check for special characters that need escaping

## Copyright

© 2024 NSW Education Standards Authority

This conversion is for educational purposes. The original examination remains the property of NSW Education Standards Authority.

## Contributing

If you find errors or improvements:

1. Check the original PDF for accuracy
2. Verify chemistry notation follows mhchem standards
3. Ensure image descriptions are clear
4. Test the build process before submitting changes

## Version History

- **v1.0** (2024) - Initial conversion of 2024 HSC Chemistry exam
  - 20 multiple choice questions
  - 19 extended response questions (Q21-Q39)
  - 30+ images identified for extraction
  - Full formulae sheet, data sheet, and periodic table included
