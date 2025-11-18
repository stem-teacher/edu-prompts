# Images for 2014 HSC Chemistry Exam

This directory contains images extracted from the original PDF exam paper for use in the Quarto markdown conversion.

## Required Images List

### Section I - Part A (Multiple Choice)

| Filename | Question | Page | Description | Width |
|----------|----------|------|-------------|-------|
| `q2-structure.png` | 2 | 2 | Structural formula showing 2-fluoro-1,2-dibromopropane with H, C, F, Br atoms | 40% |
| `q8-ph-temperature-graph.png` | 8 | 6 | Graph showing pH (5.0-8.0) vs Temperature (0-200°C) for weak acid HA | 60% |
| `q9-structures.png` | 9 | 7 | Four structural formulas for compounds W, X, Y, Z (C2H2FCl2 isomers) | 80% |
| `q11-coordinate-bonds.png` | 11 | 8 | Four Lewis structure diagrams (A-D) showing coordinate covalent bonding examples | 70% |
| `q12-ph-scale.png` | 12 | 8 | pH scale 0-14 with substances: stomach acid, lemon juice, wine, rain water, milk, sea water, baking soda, soap, laundry detergent, bleach, oven cleaner | 100% |
| `q13-ammonia-graphs.png` | 13 | 9 | Four graphs (A-D) showing concentration of ammonia vs time with change at time T | 80% |
| `q18-nylon66.png` | 18 | 11 | Polymer structure of nylon 6,6 and four answer options (A-D) showing different monomer pairs | 100% |
| `q20-yield-graph.png` | 20 | 12 | Graph showing Yield of Z (%) vs Temperature (°C) at three pressures: 30, 100, 200 atmospheres | 70% |

### Section I - Part B (Extended Response)

| Filename | Question | Page | Description | Width |
|----------|----------|------|-------------|-------|
| `q22-apparatus.png` | 22 | 14 | Spirit burner experimental setup: tripod with wire gauze, beaker with water and thermometer, spirit burner containing alkanol | 50% |
| `q22a-graph-grid.png` | 22(a) | 15 | Empty grid for graphing "Heat of combustion versus molar mass" with axes labeled | 80% |
| `q23-town-diagram.png` | 23 | 16 | Diagram showing town with water supply, river, creek, agricultural land, and car battery factory | 70% |
| `q28-galvanic-cell.png` | 28 | 21 | Galvanic cell diagram: X metal (anode) in colorless solution, Cu metal (cathode) in blue Cu(NO₃)₂ solution, KNO₃ salt bridge, voltmeter | 70% |
| `q29-gas-jar.png` | 29 | 22 | Gas jar with lid, metal spoon with burning sulfur inside, dry litmus paper at bottom | 40% |

### Section II - Elective Questions

#### Industrial Chemistry (Q32)

| Filename | Question | Page | Description | Width |
|----------|----------|------|-------------|-------|
| `q32a-sulfuric-acid.png` | 32(a) | 26 | Three diagrams showing drops of concentrated H₂SO₄, dilute H₂SO₄, and either on different surfaces (steel, glass) with bubbling patterns | 90% |

#### Shipwrecks, Corrosion and Conservation (Q33)

| Filename | Question | Page | Description | Width |
|----------|----------|------|-------------|-------|
| `q33a-pipe-layers.png` | 33(a) | 28 | Cross-section of pipe showing layers: interior zinc coating, steel, 99.99% pure zinc, polymer coating, powder coating | 60% |
| `q33c-chloride-graph.png` | 33(c) | 29 | Graph showing [Cl⁻] vs Time (weeks) with sawtooth pattern over 5 weeks | 60% |

#### The Biochemistry of Movement (Q34)

| Filename | Question | Page | Description | Width |
|----------|----------|------|-------------|-------|
| `q34a-neuromuscular-junction.png` | 34(a) | 30 | Neuromuscular junction diagram: motor neuron, synaptic cleft, vesicles of ACh, sarcolemma, muscle cell with myofibrils, action potential arrows | 80% |
| `q34c-glycogen-graph.png` | 34(c)(ii) | 31 | Bell curve showing "Number of glycogen molecules" vs "Molecular mass (×10⁵ g mol⁻¹)" with peak at 4.0 | 70% |

#### The Chemistry of Art (Q35)

| Filename | Question | Page | Description | Width |
|----------|----------|------|-------------|-------|
| `q35a-ionisation-graph.png` | 35(a) | 33 | Graph showing "Ionisation energy (kJ mol⁻¹)" vs "Ionisation number" (0-7) for aluminium with sharp increases | 70% |
| `q35c-electron-config.png` | 35(c) | 34 | Table showing electron configurations for Ti with orbital box diagrams (1s, 2s, 2p, 3s, 3p, 4s, 3d) for states I, II, III | 80% |

#### Forensic Chemistry (Q36)

| Filename | Question | Page | Description | Width |
|----------|----------|------|-------------|-------|
| `q36a-blood-collection.png` | 36(a) | 35 | Picture of forensic scientist (kneeling, no gloves, no mask) collecting blood sample from floor in room | 60% |
| `q36b-dipeptide.png` | 36(b)(i) | 35 | Chemical structure equation showing dipeptide (H₂N-CH(CH₃)-CO-NH-CH₂-CH₂-COOH) + H₂O with arrows | 70% |
| `q36c-mass-spectrum.png` | 36(c)(i) | 36 | Mass spectrum graph: "Relative intensity" vs "Mass to charge ratio" (0-300) with major peak at 100 | 80% |

### Additional Resources

| Filename | Description |
|----------|-------------|
| `bostes-logo.png` | BOSTES (Board of Studies, Teaching and Educational Standards NSW) logo for title page |

## Total: 23 Images Required

- Section I Part A: 8 images
- Section I Part B: 5 images
- Section II: 10 images
- Logo: 1 image

## Extraction Instructions

### Method 1: Using pdf2image (Python)

```bash
# Install dependencies
pip install pdf2image Pillow

# Run extraction script
python extract_images.py

# This creates full-page images in this directory
# You'll need to crop them manually to the specific areas
```

### Method 2: Using pdfimages (Command Line)

```bash
# Extract all images
pdfimages -all ../chemistry-hsc-exam-2014_archive.pdf extracted

# Images will need to be identified and renamed
```

### Method 3: Manual Screenshot

1. Open PDF in viewer
2. Navigate to the correct page
3. Take screenshot of the specific image area
4. Save with the filename from the table above
5. Place in this `images/` directory

## Image Requirements

- **Format:** PNG (preferred) or JPEG
- **Resolution:** Minimum 300 DPI
- **Quality:** High - text must be readable
- **Cropping:** Tight around content, remove excess whitespace
- **Color:** Preserve original (grayscale acceptable for diagrams)

## Checking Extraction Status

### Using Make

```bash
# Check which images are missing
make check-images
```

### Manual Check

```bash
# Count PNG files in this directory
ls -1 *.png 2>/dev/null | wc -l

# Should show 23 (22 question images + 1 logo)
```

### List missing images

```bash
# From parent directory
make check-images
```

## Cropping Guidelines

### For Graphs and Charts
- Include axis labels and titles
- Include legend if present
- Keep grid lines visible
- Maintain aspect ratio

### For Chemical Structures
- Include all bonds and atoms
- Keep labels and annotations
- Ensure stereochemistry indicators are visible
- Maintain proper bond angles

### For Diagrams
- Include all labels and callouts
- Keep directional arrows
- Preserve relative sizes
- Include scale bars if present

### For Tables
- Include all column/row headers
- Keep gridlines clear
- Ensure all text is readable
- Maintain alignment

## Image Quality Checklist

Before considering an image complete:

- [ ] Image is high resolution (300+ DPI)
- [ ] Text is sharp and readable
- [ ] No compression artifacts
- [ ] Proper cropping (not too tight, not too loose)
- [ ] Filename matches exactly (case-sensitive)
- [ ] Image format is PNG
- [ ] Colors are accurate (if applicable)
- [ ] Image displays correctly in the rendered PDF

## Notes

- Some images contain multiple elements (e.g., Q18 shows both polymer and answer options)
- Q22a is an empty grid - preserve grid spacing and axis labels
- Chemical structures should show all bonds clearly
- Graphs must have readable axis labels and legends
- The BOSTES logo is used on the title page

## Troubleshooting

### Image Not Displaying

1. Check filename matches exactly (case-sensitive)
2. Verify image is in the `images/` directory
3. Ensure image file is not corrupted
4. Check file permissions

### Poor Quality

1. Re-extract at higher DPI (try 600 DPI)
2. Use PNG instead of JPEG to avoid compression
3. Ensure source PDF is high quality

### Wrong Size

1. Check the width percentage in the .qmd file
2. Adjust width in image reference: `{width=XX%}`
3. Ensure aspect ratio is preserved

## After Extraction

Once all images are extracted:

1. Run `make check-images` to verify all files present
2. Run `make render` to generate PDF
3. Check PDF output for image quality
4. Adjust individual image sizes if needed by editing the .qmd file

---

**Status:** Images need to be extracted

**Last Updated:** 2025

**Source:** chemistry-hsc-exam-2014_archive.pdf
