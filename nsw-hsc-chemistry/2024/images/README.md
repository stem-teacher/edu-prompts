# Required Images for 2024 HSC Chemistry Exam

This directory contains all images extracted from the original PDF that are referenced in the Quarto document.

## Complete Image List

### Section I - Multiple Choice Questions

| # | Filename | Question | Page | Description | Dimensions |
|---|----------|----------|------|-------------|------------|
| 1 | `q1-homologous-series.png` | 1 | 2 | Four pairs of structural formulas (A-D) showing ethers and alcohols | 80% width |
| 2 | `q4-ir-spectrum.png` | 4 | 3 | IR spectrum with % transmittance vs wavenumber (500-3500 cm⁻¹) | 70% width |
| 3 | `q4-structures.png` | 4 | 3 | Four structural formulas: alcohol, carboxylic acid, ketone, alkane | 60% width |
| 4 | `q9-mass-spectra.png` | 9 | 5 | Four mass spectra (A-D) for ethanamine, m/z 0-80 | 80% width |
| 5 | `q12-structure.png` | 12 | 7 | Structural formula of chloro-N-ethyl amide compound | 50% width |
| 6 | `q14-glycine.png` | 14 | 8 | Structural formula of glycine (H₂N-CH₂-COOH) | 30% width |
| 7 | `q14-silk-polymer.png` | 14 | 8 | Section of silk polymer showing peptide bonds and side chains | 70% width |
| 8 | `q14-monomers.png` | 14 | 8 | Four amino acid structures (A-D) | 70% width |
| 9 | `q17-titration-curve.png` | 17 | 10 | Titration curve, pH 0-14 vs volume NaOH 0-50 mL, diprotic acid | 70% width |
| 10 | `q18-reaction-quotient.png` | 18 | 11 | Four graphs (A-D) showing Q vs Time | 70% width |
| 11 | `q19-structures.png` | 19 | 11 | Four organic structures for NMR analysis | 80% width |

### Section II - Extended Response Questions

| # | Filename | Question | Page | Description | Dimensions |
|---|----------|----------|------|-------------|------------|
| 12 | `q22-vinyl-fluoride.png` | 22 | 14 | Vinyl fluoride monomer structure (C=C with H and F) | 25% width |
| 13 | `q24-graph-axes.png` | 24 | 16 | Blank graph paper for boiling point plot, 1-4 carbon atoms | 60% width |
| 14 | `q25-calibration-graph.png` | 25 | 18 | Linear calibration curve, absorbance vs phosphate (0-1.2 mg/L) | 70% width |
| 15 | `q26-graph-axes.png` | 26 | 20 | Graph axes for [I₂] vs Time (0-6 min) | 60% width |
| 16 | `q31-urea-synthesis.png` | 31 | 25 | Two reaction schemes: phosgene route (AE=35.9%) and DMC route (AE=48.4%) | 80% width |
| 17 | `q33-reduction.png` | 33 | 27 | Acetone → propan-2-ol reduction reaction | 40% width |
| 18 | `q34-conductivity-graph.png` | 34 | 28 | Conductivity vs volume ammonia, showing decrease then plateau | 70% width |
| 19 | `q35-structures.png` | 35 | 30 | Three carboxylic acid structures with molar masses | 100% width |
| 20 | `q37-keq-vs-dg.png` | 37 | 33 | Exponential curve, K_eq vs ΔG° (-35 to 0 kJ/mol) | 70% width |
| 21 | `q38-mass-spectrum.png` | 38 | 34 | Mass spectrum with peaks at m/z ~30, 40, 120 | 70% width |

**Total: 21 distinct images required**

## Image Specifications

### Format
- **File type:** PNG (preferred) or JPG
- **Resolution:** Minimum 300 DPI for clarity
- **Color:** RGB or Grayscale

### Quality Guidelines

1. **Graphs and Spectra**
   - Include all axis labels and scales
   - Ensure grid lines are visible if present
   - Keep tick marks and numbers legible
   - Maintain aspect ratio

2. **Chemical Structures**
   - Show all atoms, bonds, and labels clearly
   - Keep bond angles accurate
   - Include all stereochemistry indicators
   - Ensure subscripts and superscripts are readable

3. **Diagrams**
   - Include all labels and annotations
   - Maintain proportions
   - Keep text readable at document size

4. **Cropping**
   - Tight margins (minimal white space)
   - Don't cut off any content
   - Remove question numbers/text unless part of image
   - Keep figure captions if they're part of the image

## Extraction Workflow

### Step 1: Extract Full Pages
```bash
python extract_images.py
```
This creates `page_XXX.png` files for each page containing images.

### Step 2: Manual Cropping
For each image in the table:
1. Open the corresponding `page_XXX.png`
2. Locate the specific image/diagram
3. Crop to include only the relevant content
4. Save with the exact filename from the table

### Step 3: Verification
```bash
make check-images
# or
python extract_images.py --check
```

## Image Details by Question

### Question 1 (Page 2)
**File:** `q1-homologous-series.png`
- Shows 4 pairs (A, B, C, D) of structural formulas
- Each pair has two molecules side-by-side
- Molecules show various functional groups (ethers, alcohols, haloalkanes)
- Requires careful extraction to capture all 4 options clearly

### Question 4 (Page 3)
**Files:** `q4-ir-spectrum.png` and `q4-structures.png`
- IR spectrum shows characteristic peaks around 3000-3500 cm⁻¹ and 1680-1750 cm⁻¹
- Four simple organic structures (alcohol, carboxylic acid, ketone, alkane)
- May be two separate images or can be extracted together

### Question 9 (Page 5)
**File:** `q9-mass-spectra.png`
- Four separate mass spectra stacked vertically (A, B, C, D)
- Each shows relative intensity 0-100% vs m/z 0-80
- Different fragmentation patterns
- Can extract as single composite image or four separate images

### Question 14 (Page 8)
**Files:** `q14-glycine.png`, `q14-silk-polymer.png`, `q14-monomers.png`
- Glycine: Simple amino acid structure
- Silk polymer: Repeating peptide structure showing multiple amino acids linked
- Monomers: Four different amino acids (A-D) to choose from

### Question 17 (Page 10)
**File:** `q17-titration-curve.png`
- Classic diprotic acid titration curve
- Two inflection points visible
- pH range 0-14, volume 0-50 mL
- Shows initial pH ~2, buffer regions, equivalence points

### Question 24 (Page 16)
**File:** `q24-graph-axes.png`
- Empty graph with gridlines
- X-axis: Number of carbon atoms (1-4)
- Y-axis: Boiling point (needs scale)
- Students will plot data on this graph

### Question 25 (Page 18)
**File:** `q25-calibration-graph.png`
- Linear relationship, absorbance vs concentration
- Fine grid lines in background
- Line passes through origin
- Data points may be visible on line

### Question 35 (Page 30)
**File:** `q35-structures.png`
- Three distinct carboxylic acid structures
- Structure 1: unsaturated (contains C=C)
- Structure 2: saturated
- Structure 3: dicarboxylic acid
- Include molar mass information if shown with structures

### Question 37 (Page 33)
**File:** `q37-keq-vs-dg.png`
- Exponential decay curve
- X-axis: ΔG° from -35 to 0 kJ/mol
- Y-axis: K_eq from 0 to 1.6×10⁶
- Shows inverse relationship

### Question 38 (Page 34)
**File:** `q38-mass-spectrum.png`
- Mass spectrum showing molecular ion and fragments
- Prominent peaks around m/z 30, 40
- Molecular ion peak around m/z 120
- Pattern indicates halogenated alkane

## Troubleshooting

### Image Not Found Error
- Check filename spelling (case-sensitive!)
- Verify file is in `images/` directory
- Ensure file extension is `.png` or `.jpg`

### Image Too Large/Small in PDF
- Adjust `{width=XX%}` in .qmd file
- Typical ranges: 25% (small), 60% (medium), 80% (large)

### Image Quality Poor
- Re-extract at higher DPI (300+ recommended)
- Check original PDF quality
- Avoid resizing down after extraction

### Missing Content in Cropped Image
- Expand crop boundaries slightly
- Check original page image for complete content
- Ensure all labels, axes, and legends included

## Status Tracking

Track your progress:
- [ ] All page images extracted (`page_XXX.png`)
- [ ] Section I images cropped (11 images)
- [ ] Section II images cropped (10 images)
- [ ] All images renamed correctly
- [ ] Image quality verified
- [ ] `make check-images` passes
- [ ] Document renders successfully

## Notes

- Some pages may contain multiple images that need separate extraction
- Graph axes can be extracted empty (for student plotting) or with data
- Chemical structures should maintain accurate geometry
- Spectra need clear axis labels and scales
- When in doubt, include more rather than less in the crop

For more details, see the main README.md in the parent directory.
