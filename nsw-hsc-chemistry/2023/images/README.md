# Images for 2023 HSC Chemistry Exam

This directory should contain all images extracted from the exam PDF for use in the Quarto document.

## Required Images List

### Section I - Multiple Choice Questions

| Filename | Question | Page | Description |
|----------|----------|------|-------------|
| `q2-aas-diagram.png` | Q2 | 2 | Atomic absorption spectroscopy apparatus diagram with lamp, flame, sample, prism, lens, and detector |
| `q3-structure.png` | Q3 | 3 | Structural formula showing pent-2-yne compound with carbon chain and triple bond |
| `q5-weak-acid-diagrams.png` | Q5 | 4 | Four beaker diagrams (A, B, C, D) showing weak acid solutions with key indicating acid molecules, H+ ions, and anions |
| `q9-titration-curve.png` | Q9 | 5 | Titration curve graph showing pH (0-14) vs volume of titrant (0-50 mL) |
| `q11-indicator-chart.png` | Q11 | 6 | Flower water indicator chart showing colors (Red, Purple, Blue, Blue-green, Green-yellow) across pH 1-12 |
| `q16-precipitation-curve.png` | Q16 | 9 | Precipitation titration curve showing pAg (0-15) vs volume of AgNO3 (0-80 mL) |
| `q18-rate-graph.png` | Q18 | 10 | Rate vs time graph showing forward and reverse reaction rates with temperature change at time t |
| `q19-mass-spectrum.png` | Q19 | 11 | Mass spectrum for butan-2-one showing relative intensity (0-100%) vs m/z (0-80) |

### Section II - Extended Response Questions

| Filename | Question | Page | Description |
|----------|----------|------|-------------|
| `q21-isomers.png` | Q21 | 14 | Three structural formulas: butan-2-one, butanal, and 2-methylpropanal (C4H8O2 isomers) |
| `q23-buffer-diagram.png` | Q23 | 16 | Two beaker diagrams showing Solution X (pH 7.00→12.00) and Solution Y (pH 7.00→7.02) after adding NaOH |
| `q25-combustion-apparatus.png` | Q25 | 18 | Experimental apparatus showing thermometer, can containing water, and burner with octan-1-ol |
| `q26-nitric-acid-process.png` | Q26 | 20 | Complex flowchart of industrial nitric acid production with 3 reactors, separators, and emissions control |
| `q29-solubility-graph.png` | Q29 | 24 | Graph showing solubility in water (g/100 mL) vs molar mass (g/mol) for alkan-1-ols at 20°C |
| `q31-graph-paper.png` | Q31 | 27 | Grid/graph paper for plotting calibration curve (absorbance vs concentration) |
| `q33-piston-diagram.png` | Q33 | 30 | Diagram of closed container with moveable piston for variable volume system |
| `q33-equilibrium-graph.png` | Q33 | 30 | Amount (mol) vs time (minutes) graph showing A2(g), B2(g), and AB2(g) equilibrium changes |
| `q36-nmr-spectrum.png` | Q36 | 34 | 13C NMR spectrum of compound A showing chemical shift (ppm) from 0-200 |
| `q36-ir-spectrum.png` | Q36 | 34 | Infrared spectrum of compound B showing transmittance (%) vs wavenumber (cm-1) from 1000-4000 |

**Total images required: 18**

## Image Specifications

- **Format**: PNG (recommended) or high-quality JPEG
- **Resolution**: 300 DPI minimum for text legibility
- **Color Mode**: RGB
- **Compression**: Lossless preferred

## Quality Guidelines

1. **Cropping**: Include appropriate whitespace around content (don't crop too tight)
2. **Text Clarity**: Ensure all labels, numbers, and text are clearly readable
3. **Graphs**: Include axis labels, titles, and legends
4. **Diagrams**: Maintain proper aspect ratio
5. **Background**: White or transparent background preferred

## Extraction Methods

### Method 1: Python Script
```bash
python3 ../extract_images.py
```
Then manually crop the extracted pages.

### Method 2: PDF Tool
```bash
pdfimages -png ../2023-hsc-chemistry_20240318.pdf extracted
```
Then crop and rename appropriately.

### Method 3: Manual Screenshot
- Open PDF in viewer
- Navigate to specified page
- Take screenshot of image area
- Crop and save with correct filename

## Verification

After extracting all images, verify they're present:

```bash
make check-images
```

This will check for all 18 required images and report any missing files.

## Notes

- Some questions on page 34 (Q36) require two separate images (NMR and IR spectra)
- Page 30 (Q33) also has two images (piston diagram and equilibrium graph)
- Ensure graphs include all axes, labels, and keys from the original
- Chemical structures should be clearly visible with all bonds and atoms labeled

## Current Status

**Images extracted: 0/18**

Run the extraction script and manually crop images to populate this directory.
