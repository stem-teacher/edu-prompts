# Images for 2021 HSC Chemistry Exam

This directory contains all images extracted from the 2021 HSC Chemistry exam PDF.

## Required Images (19 total)

### Extraction Checklist

- [ ] `q3-structure.png` - Q3, Page 3: Structural formula of N-methylpropanamide
- [ ] `q4-ethyl-pentanoate.png` - Q4, Page 4: Structural formula of ethyl pentanoate
- [ ] `q8-soap-emulsion.png` - Q8, Page 5: Four diagrams (A-D) showing soap anion arrangements
- [ ] `q9-paracetamol-spectrum.png` - Q9, Page 6: UV absorption spectrum of paracetamol
- [ ] `q9-solvent-spectra.png` - Q9, Page 6: UV absorption spectra for four solvents (A-D)
- [ ] `q10-polymer-structure.png` - Q10, Page 7: Polymer chain structure
- [ ] `q10-monomer-options.png` - Q10, Page 7: Four structural formulas (A-D) for monomer options
- [ ] `q12-spectra.png` - Q12, Page 8: Mass spectrum and Carbon-13 NMR
- [ ] `q12-structures.png` - Q12, Page 9: Four structural formulas (A-D)
- [ ] `q14-calibration-curve.png` - Q14, Page 10: Calibration curve for nickel analysis
- [ ] `q16-titration-curve.png` - Q16, Page 11: Titration curve (pH vs titre volume)
- [ ] `q25-apparatus.png` - Q25, Page 18: Fermentation apparatus with gas syringe
- [ ] `q26-flowchart.png` - Q26, Page 19: Reaction flow chart from 2-methylprop-1-ene
- [ ] `q29-ir-spectrum.png` - Q29, Page 22: Infrared spectrum of pentane-1,5-diamine
- [ ] `q29-mass-spectrum.png` - Q29, Page 22: Mass spectrum of pentane-1,5-diamine
- [ ] `q29-c13-nmr.png` - Q29, Page 22: Carbon-13 NMR spectrum
- [ ] `q29-h-nmr.png` - Q29, Page 23: Proton NMR spectrum
- [ ] `q33-graph.png` - Q33, Page 28: Graph showing ΔH and TΔS vs temperature
- [ ] `q34-ph-graph.png` - Q34, Page 29: pH vs time graph for HCl in water and solutions

## Extraction Methods

### Method 1: Screenshot Tool (Recommended)

1. Open the PDF in a viewer
2. Navigate to the page number listed above
3. Use a screenshot tool to capture the specific image
4. Crop to remove unnecessary whitespace
5. Save as PNG with the exact filename listed

### Method 2: PDF Export

1. Open PDF in Adobe Acrobat or similar
2. Use "Export to Images" feature
3. Export specific pages
4. Crop and save individual images

### Method 3: Command Line (pdfimages)

```bash
pdfimages -png ../2021-hsc-chemistry.pdf page
# Then manually crop and rename files
```

## Image Requirements

- **Format**: PNG (preferred) or high-quality JPG
- **Resolution**: Minimum 300 DPI for print quality
- **Cropping**: Remove excess whitespace but keep all relevant content
- **Naming**: Use exact filenames as listed above (case-sensitive)

## Verification

After extraction, run from parent directory:

```bash
make check-images
```

This will verify all required images are present.
