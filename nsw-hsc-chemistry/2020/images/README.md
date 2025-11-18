# Images Directory - 2020 HSC Chemistry Exam

This directory contains all extracted images for the 2020 HSC Chemistry exam Quarto conversion.

## Required Images (26 total)

### Section I - Multiple Choice (13 images)

| Filename | Question | Page | Description |
|----------|----------|------|-------------|
| `nsw-logo.png` | Title | 1 | NSW Government waratah logo |
| `q2-indicator-table.png` | 2 | 2 | Table of acid-base indicators with pH ranges and colors |
| `q5-nmr-spectrum.png` | 5 | 3 | 13C NMR spectrum with 2 peaks at ~15 and ~40 ppm |
| `q6-structure.png` | 6 | 4 | Structural formula with Br, F, H, OH groups on 3-carbon chain |
| `q7-isomers.png` | 7 | 4 | Four structural formulas in 2x2 grid (Compounds 1-4) |
| `q8-titration-curve.png` | 8 | 5 | pH titration curve: weak base vs 1.0 M HCl |
| `q9-structures.png` | 9 | 6 | Four organic structures (options A-D) with carboxylic acid/ketone/alcohol |
| `q12-polymer.png` | 12 | 7 | Polymer repeating unit with benzene ring and ester linkages |
| `q15-chloroacetamide.png` | 15 | 8 | Structural formula of chloroacetamide |
| `q16-equilibrium.png` | 16 | 9 | Yield vs temperature graph at 10, 30, 50 MPa |
| `q17-apparatus.png` | 17 | 9 | Beaker with lid containing saturated CuSO4 solution and solid |
| `q19-rate-graphs.png` | 19 | 10 | Four rate vs time graphs (A-D) showing equilibrium shift |
| `q20-solubility-graph.png` | 20 | 11 | [CrO4^2-] vs [Ag+] solubility product graph |

### Section II - Extended Response (13 images)

| Filename | Question | Page | Description |
|----------|----------|------|-------------|
| `q21-mass-spectrum.png` | 21 | 15 | Mass spectrum of alkane (relative intensity vs m/z) |
| `q23-flowchart.png` | 23 | 17 | Industrial flowchart: ethene + oxygen → ethane-1,2-diol |
| `q24-biodiesel-reaction.png` | 24 | 18 | Transesterification reaction: vegetable oil → biodiesel |
| `q25-graph-paper.png` | 25 | 21 | Empty graph paper grid for plotting titration data |
| `q26-energy-profile.png` | 26 | 22 | Energy profile: N2 + O2 → NO reaction |
| `q27-equation.png` | 27 | 23 | Empty boxes for structural formula equation |
| `q29-flowchart.png` | 29 | 25 | Reaction scheme showing compounds A-E with reagents |
| `q29-structures.png` | 29 | 25 | Empty boxes labeled A-E for drawing structures |
| `q30-ir-spectrum.png` | 30 | 26 | IR spectrum: transmittance vs wavenumber |
| `q30-h-nmr.png` | 30 | 26 | 1H NMR spectrum with integration and splitting |
| `q30-c-nmr.png` | 30 | 26 | 13C NMR spectrum showing 3 peaks |
| `q34-ph-graph.png` | 34 | 32 | pH vs concentration for acrylic acid and HCl |

## Extraction Status

To check which images are missing:

```bash
cd /home/user/edu-prompts/nsw-hsc-chemistry/2020
make check-images
```

## How to Extract Images

### Method 1: Automated Script
```bash
python3 extract_images.py
```
This extracts full pages to `images/pages/`. You then manually crop specific diagrams.

### Method 2: Manual Screenshot
1. Open `2020-hsc-chemistry.pdf`
2. Navigate to the page number shown in tables above
3. Screenshot/crop the specific diagram
4. Save with exact filename from tables above
5. Place in this directory

### Method 3: pdfimages Command
```bash
pdfimages -png 2020-hsc-chemistry.pdf images/extracted
# Then manually crop and rename
```

## Image Specifications

- **Format**: PNG (recommended)
- **Resolution**: 300 DPI minimum
- **Color**: RGB or Grayscale as appropriate
- **Cropping**: Include all labels, axes, and titles
- **Naming**: Use exact filenames from tables above

## Special Notes

### NSW Logo
The NSW Government waratah logo can be:
- Extracted from page 1 of the PDF
- Downloaded from NSW Government branding guidelines
- Recreated if necessary

### Graph Paper (Q25)
The graph paper should be a clean grid suitable for plotting:
- Temperature (y-axis) vs Volume (x-axis)
- Clear gridlines
- Sufficient size for data points

### Structural Formulas
For questions requiring empty boxes (Q27, Q29):
- Crop the template boxes from the original PDF
- Or create simple rectangular placeholders

### Spectra (Q30)
High quality is essential for:
- IR spectrum (wavenumber labels must be readable)
- 1H NMR (splitting patterns visible, integration clear)
- 13C NMR (peak positions accurate)

## Quality Checklist

Before rendering, verify each image:
- [ ] Correct filename
- [ ] Placed in images/ directory (not subdirectory)
- [ ] High resolution (text clearly readable)
- [ ] Proper cropping (no extra whitespace, all labels included)
- [ ] PNG format
- [ ] Color/contrast appropriate

## Troubleshooting

**Image not found during render:**
- Check exact filename (case-sensitive)
- Ensure image is in images/ directory
- Run `make check-images` to identify missing files

**Low quality render:**
- Re-extract at higher DPI (300+)
- Check original PDF quality
- Ensure PNG format (not low-quality JPEG)

**Spectra unreadable:**
- Extract at 600 DPI for complex diagrams
- Crop tightly around spectrum
- Ensure axis labels are included
