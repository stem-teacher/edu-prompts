# Images Directory

This directory should contain all extracted images from the 2022 HSC Chemistry exam PDF.

## Required Images (17 total)

### Section I - Multiple Choice Questions

1. **q4-manganese-absorbance.png** - Page 3
   - Manganese absorbance spectrum showing wavelengths from 380-750 nm

2. **q4-lamp-spectra.png** - Page 3
   - Four AAS lamp emission spectra (options A, B, C, D)

3. **q6-uv-vis-spectra.png** - Page 4
   - UV-visible absorbance spectra showing Solution P (dashed line) and Solution Q (solid line)
   - X-axis: Wavelength (300-800 nm)
   - Y-axis: Absorbance (0.0-0.5)

4. **q9-structures.png** - Page 6
   - Four structural formula options (A, B, C, D) for C8H18

5. **q11-cyclohexanol-reaction.png** - Page 7
   - Cyclohexanol structure with OH group
   - Reaction arrow showing "conc. H2SO4"
   - Four product options (A, B, C, D)

6. **q12-c6h14-isomers.png** - Page 8
   - Four structural isomers of C6H14 (A, B, C, D)

7. **q15-conductivity-graph.png** - Page 10
   - X-axis: Volume added from burette (0.0-14.0 mL)
   - Y-axis: Conductivity (0.0-8.0 mS/cm)
   - Graph showing conductivity decrease then plateau

8. **q18-biopolymer.png** - Page 11
   - Top: Polymer structure showing repeating ester units with CH3 groups
   - Below: Four monomer options (A, B, C, D) with molar mass and number of units

9. **q20-indicator-graph.png** - Page 12
   - X-axis: pH (2-10)
   - Y-axis: Relative amount (0.0-1.0)
   - Four curves showing H3Cy+, H2Cy, HCy-, and Cy2- species

### Section II - Extended Response Questions

10. **q24-boiling-points.png** - Page 17
    - X-axis: Molar mass (60-160 g mol-1)
    - Y-axis: Boiling point (0-200°C)
    - Scatter plot showing increasing trend

11. **q25-beakers.png** - Page 18
    - Two beakers side by side
    - Left: 0.2 mol L-1 HCl, pH = 0.70
    - Right: 0.2 mol L-1 HCN, pH = 5.0

12. **q28-flowchart.png** - Page 21
    - Flowchart showing iron analysis procedure
    - Starts with "Impure iron sample"
    - Multiple steps with filtration, treatment, etc.
    - Ends with "Iron(III) oxide"

13. **q30-mass-spectrum.png** - Page 24
    - X-axis: m/z (10-90)
    - Y-axis: Relative intensity (0-100)
    - Major peak at m/z = 43

14. **q30-ir-spectrum.png** - Page 24
    - X-axis: Wavenumber (500-4000 cm-1)
    - Y-axis: % transmittance (0-100)
    - Notable troughs around 3000 and 1700 cm-1
    - Fingerprint region marked

15. **q30-proton-nmr.png** - Page 24
    - X-axis: Chemical shift (0-3 ppm)
    - Three signals labeled:
      - Septet, 1 × H
      - Singlet, 3 × H
      - Doublet, 6 × H

16. **q30-c13-nmr.png** - Page 25
    - X-axis: Chemical shift (0-200 ppm)
    - Three peaks visible

## Extraction Instructions

See the main README.md file in the parent directory for detailed extraction instructions.

### Quick Method

1. Run the extraction script:
   ```bash
   python3 ../extract_images.py
   ```

2. This creates full page images in `pages/` subdirectory

3. Manually crop each image from the pages and save here with the exact filenames listed above

## File Format

- All images should be PNG format
- Use high resolution (300 DPI recommended)
- Include all relevant labels, axes, and titles
- Remove excess whitespace but leave some margin

## Verification

Check if all images are present:

```bash
cd ..
make check-images
```

Or manually count: should have 17 PNG files in this directory.
