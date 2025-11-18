# Images Directory - 2017 HSC Chemistry Exam

This directory contains all images extracted from the 2017 HSC Chemistry examination PDF.

## Required Images: 23 Total

### Image Extraction Status

Run `make check-images` from the parent directory to verify all required images are present.

To extract pages from the PDF, run:
```bash
cd ..
make extract-pages
```

This will create page_XX.png files in this directory. You will then need to manually crop the specific diagrams and save them with the filenames listed below.

---

## Complete Image List

### Section I - Part A (Multiple Choice)

#### Question 3 (Page 2)
**Filename:** `q3-structure.png`
- **Description:** Structural formula of a 4-carbon haloalkane with chlorine and fluorine substituents
- **Type:** Chemical structure diagram
- **Recommended width:** 50%

#### Question 4 (Page 3)
**Filename:** `q4-apparatus.png`
- **Description:** Esterification apparatus with reflux condenser, round bottom flask, and Bunsen burner
- **Type:** Laboratory apparatus diagram
- **Recommended width:** 60%

#### Question 7 (Page 4)
**Filename:** `q7-test-tubes.png`
- **Description:** Three test tubes showing setup with bromine water, hexane, and hexene
- **Type:** Experimental setup diagram
- **Recommended width:** 70%

**Filename:** `q7-results.png`
- **Description:** Four multiple choice options (A-D) showing different test tube results
- **Type:** Results diagram with 4 options
- **Recommended width:** 60%

#### Question 9 (Page 5)
**Filename:** `q9-apparatus.png`
- **Description:** Heat of combustion apparatus with spirit burner, conical flask, thermometer, tripod, and heat shield
- **Type:** Laboratory apparatus diagram
- **Recommended width:** 60%

#### Question 10 (Page 6)
**Filename:** `q10-cells.png`
- **Description:** Side-by-side diagrams of dry cell and lead-acid cell with labeled electrodes X and Y
- **Type:** Electrochemistry cell diagrams
- **Recommended width:** 80%

#### Question 12 (Page 7)
**Filename:** `q12-polymers.png`
- **Description:** Four polymer structure options (A-D) showing different arrangements of propene addition polymer
- **Type:** Chemical structure diagrams
- **Recommended width:** 70%

#### Question 15 (Page 8)
**Filename:** `q15-lewis-structures.png`
- **Description:** Four Lewis electron dot structure options (A-D) for N₂O
- **Type:** Lewis structure diagrams
- **Recommended width:** 60%

#### Question 18 (Page 9)
**Filename:** `q18-equilibrium-graph.png`
- **Description:** Graph showing concentration vs time for three gases (X, Y, Z) at equilibrium
- **Type:** Line graph
- **Recommended width:** 70%

---

### Section I - Part B (Extended Response)

#### Question 22 (Page 16)
**Filename:** `q22-grid.png`
- **Description:** Empty grid for plotting calibration curve (absorbance vs zinc concentration)
- **Type:** Graph grid
- **Recommended width:** 80%
- **Note:** Students plot data points on this grid

#### Question 23 (Page 17)
**Filename:** `q23-galvanic-cell.png`
- **Description:** Galvanic cell diagram with zinc and silver electrodes, salt bridge, and voltmeter
- **Type:** Electrochemistry cell diagram
- **Recommended width:** 70%

#### Question 26(b) (Page 21)
**Filename:** `q26-map.png`
- **Description:** Map showing SO₂ concentrations in atmosphere above landmass with metal smelter and coal-fired power stations
- **Type:** Contour/concentration map
- **Recommended width:** 80%
- **Features:** Different shading levels for SO₂ concentrations, 1000 km scale

#### Question 29 (Page 24)
**Filename:** `q29-map.png`
- **Description:** Map of Rivertown at junction of two rivers, showing Sites X and Y, limestone caves, and saw mill
- **Type:** Location map
- **Recommended width:** 70%

---

### Section II - Option Questions

#### Question 31(b) - Industrial Chemistry (Page 30)
**Filename:** `q31b-graph.png`
- **Description:** Graph of SO₃ concentration vs time for equilibrium reaction
- **Type:** Line graph
- **Recommended width:** 60%
- **Note:** Students copy this graph and sketch a second curve

#### Question 31(c) - Industrial Chemistry (Page 31)
**Filename:** `q31c-flowchart.png`
- **Description:** Solvay process flowchart showing raw materials, ammonia, products, and process steps
- **Type:** Process flowchart
- **Recommended width:** 80%
- **Features:** Multiple connected boxes showing carbonating tower, heater, lime kiln, ammonia recovery, lime slaker

#### Question 33(a) - Biochemistry of Movement (Page 33)
**Filename:** `q33a-enzyme-graph.png`
- **Description:** Graph showing enzyme activity vs pH (range 2-10)
- **Type:** Curve graph
- **Recommended width:** 60%
- **Features:** Bell-shaped curve with peak around pH 4

#### Question 33(c) - Biochemistry of Movement (Page 34)
**Filename:** `q33c-dipeptide.png`
- **Description:** Incomplete chemical equation for dipeptide formation from alanine and glycine
- **Type:** Chemical equation with structural formulas
- **Recommended width:** 70%
- **Note:** Shows reactants with structural formulas, students complete products

#### Question 34(c) - Chemistry of Art (Page 36)
**Filename:** `q34c-lewis-oxygen.png`
- **Description:** Incorrect Lewis electron dot structure for oxygen atom (students identify error)
- **Type:** Lewis structure diagram
- **Recommended width:** 30%

**Filename:** `q34c-ionisation-graph.png`
- **Description:** Graph of successive ionisation energies (1st, 2nd, 3rd, 4th) for transition metals Sc through Zn
- **Type:** Line graph with multiple series
- **Recommended width:** 80%
- **Features:** Four separate lines showing ionisation energies up to 7000 kJ mol⁻¹

#### Question 35(a) - Forensic Chemistry (Page 37)
**Filename:** `q35a-emission-spectrum.png`
- **Description:** Sodium emission spectrum showing wavelengths at 467, 515, 588, and 616 nm
- **Type:** Spectrum diagram
- **Recommended width:** 80%
- **Features:** Wavelength scale from 400-700 nm with colored bands

#### Question 35(c) - Forensic Chemistry (Page 38)
**Filename:** `q35c-blood-spectrum.png`
- **Description:** Mass spectrum from blood sample analysis
- **Type:** Mass spectrum (bar graph)
- **Recommended width:** 100%
- **Features:** m/z values from 20-380, abundance percentages, multiple peaks

#### Question 35(c) - Forensic Chemistry (Page 39)
**Filename:** `q35c-four-spectra.png`
- **Description:** Four mass spectra labeled as Diagram 1-4 (Methoxyp.d, Trifluor.d, Heroin, Ethanol)
- **Type:** Four mass spectrum graphs
- **Recommended width:** 100%
- **Features:** Each spectrum shows different m/z ranges and peak patterns
- **Note:** This is a composite image with 4 separate spectra that should be kept together

---

## Image Specifications

All images should meet these requirements:

- **Format:** PNG (lossless compression)
- **Resolution:** Minimum 300 DPI
- **Color Mode:** RGB or Grayscale as appropriate
- **File Naming:** Exact filenames as listed above (case-sensitive)
- **Location:** All images must be in this `images/` directory

## Extraction Workflow

### Step 1: Extract Full Pages

```bash
cd /home/user/edu-prompts/nsw-hsc-chemistry/2017
python extract_images.py
```

This creates full-page PNG files for all pages containing images.

### Step 2: Crop Individual Images

For each page image created:

1. Open `page_XX.png` in an image editor (GIMP, Photoshop, Preview, etc.)
2. Locate the diagram/graph specified in the table above
3. Crop just that element (with some white space margin)
4. Save as PNG with the exact filename from the list
5. Ensure the cropped image is clear and readable

### Step 3: Verify Completeness

```bash
make check-images
```

This command checks that all 23 required images are present.

### Step 4: Build Document

Once all images are present:

```bash
make render
```

## Image Quality Guidelines

### Do:
- ✓ Maintain high resolution (300+ DPI)
- ✓ Include appropriate white space around diagrams
- ✓ Ensure text in diagrams is readable
- ✓ Use lossless PNG compression
- ✓ Keep original aspect ratios
- ✓ Use exact filenames (case-sensitive)

### Don't:
- ✗ Over-compress or reduce quality
- ✗ Crop too tightly (leave some margin)
- ✗ Convert to JPG (use PNG only)
- ✗ Resize disproportionately
- ✗ Add watermarks or modifications
- ✗ Use different filenames

## Troubleshooting

### "Image not found" error when rendering

**Problem:** Quarto cannot find an image file.

**Solutions:**
1. Check that the filename matches exactly (case-sensitive)
2. Verify the image is in the `images/` directory
3. Ensure file extension is `.png` (lowercase)
4. Run `make check-images` to see which files are missing

### Blurry or pixelated images in PDF output

**Problem:** Image quality is poor in rendered PDF.

**Solutions:**
1. Re-extract from PDF at higher DPI (600 instead of 300)
2. Ensure source image resolution is sufficient
3. Use PNG format, not JPG
4. Check that image dimensions are appropriate (not too small)

### Cannot extract images from PDF

**Problem:** Python script fails or `pdf2image` not working.

**Solutions:**
1. Install required packages: `pip install pdf2image pillow`
2. Install poppler-utils:
   - Ubuntu/Debian: `sudo apt-get install poppler-utils`
   - macOS: `brew install poppler`
3. Verify PDF file is present: `2017-hsc-chemistry-archive.pdf`

---

## Summary

**Total Images Required:** 23
**Source Pages:** 2-9, 16-17, 21, 24, 30-31, 33-34, 36-39
**Estimated Extraction Time:** 30-45 minutes (manual cropping)

Once all images are extracted and properly named in this directory, the Quarto document will build successfully to create a high-fidelity PDF reproduction of the 2017 HSC Chemistry exam.

---

**Last Updated:** January 2025
**Status:** Awaiting image extraction
