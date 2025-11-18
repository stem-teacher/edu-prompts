# Images Directory - 2015 HSC Chemistry Exam

This directory should contain all images extracted from the 2015 HSC Chemistry exam PDF.

## Required Images (17 total)

### Extraction Checklist

Mark each image as complete after extraction:

#### Section I - Part A (Multiple Choice)

- [ ] **q2-glassware.png** - Page 2
  - Four types of glassware (A-D): conical flask, pipette, measuring cylinder, burette
  - Width: 80%

- [ ] **q7-galvanic-cell.png** - Page 4
  - Galvanic cell with Ag and Cu electrodes, solutions, salt bridge, voltmeter
  - Width: 70%

- [ ] **q11-monomers.png** - Page 5
  - Two monomer structures for condensation polymerisation
  - Width: 60%

- [ ] **q11-polymers.png** - Page 5
  - Four polymer structure options (A-D)
  - Width: 80%

- [ ] **q14-titration-curve.png** - Page 6
  - pH vs volume titration curve graph
  - Width: 60%

- [ ] **q15-catchment.png** - Page 7
  - Water catchment diagram (river, stream, forest, farmland, village, ocean, point X)
  - Width: 70%

#### Section I - Part B (Extended Response)

- [ ] **q22-graph-paper.png** - Page 15
  - Blank grid paper for plotting ozone data
  - Width: 100%

- [ ] **q28-apparatus.png** - Page 23
  - Glass tube with cotton wool soaked in HCl and NH₃
  - Width: 70%

- [ ] **q30-haber-graph.png** - Page 26
  - Percentage yield of ammonia vs temperature (multiple pressure curves)
  - Width: 80%

#### Section II - Option Questions

- [ ] **q31-solvay-process.png** - Page 31
  - Flowchart of Solvay process for sodium carbonate production
  - Width: 80%

- [ ] **q32-electroplating.png** - Page 33
  - Photograph of electroplating equipment (power supply, beaker, Mg electrode)
  - Width: 60%

- [ ] **q33-muscle-cell.png** - Page 34
  - Simplified muscle cell diagram showing mitochondria and organelles
  - Width: 60%

- [ ] **q33-protein-structure.png** - Page 35
  - Protein section showing bonding interactions (disulfide bridges, hydrogen bonds, etc.)
  - Width: 70%

- [ ] **q34-electronegativity.png** - Page 37
  - Graph of electronegativity (Pauling scale) vs atomic number for Periods 1-3
  - Width: 70%

- [ ] **q35-dna-profiles.png** - Page 39
  - DNA profile banding patterns (George, Linda, Child A, Child B, Child C)
  - Width: 70%

#### Data Sheet

- [ ] **periodic-table.png** - Page 42
  - Complete periodic table of elements
  - Width: 100%

## Image Specifications

- **Format:** PNG (preferred) or JPG
- **Resolution:** 300 DPI minimum recommended
- **Color:** RGB or Grayscale as appropriate
- **Background:** White (crop to minimize excess whitespace)
- **Naming:** Must match exactly (case-sensitive)

## Extraction Methods

### Option 1: Using the Python Script

```bash
python3 extract_images.py
```

This will create full-page images that you can then crop manually.

### Option 2: Manual Screenshot

1. Open the PDF in a viewer
2. Navigate to the specified page
3. Take a screenshot or use snapshot tool
4. Crop to the image
5. Save with exact filename

### Option 3: Using pdfimages

```bash
pdfimages -all ../chemistry-hsc-exam-2015.pdf-archive.pdf extracted
```

Then rename and organize the extracted images.

## Cropping Guidelines

- **Crop tightly** but include all relevant elements (labels, axes, legends)
- **Maintain aspect ratio** - don't stretch or distort
- **Remove page numbers** and irrelevant text
- **Keep resolution high** - at least 300 DPI
- **Check readability** - ensure text is clear

## Verification

After extracting all images, verify:

```bash
make check-images
```

This will confirm all 17 images are present before rendering.

## Notes

- Some images may contain chemical formulas that will also be represented in LaTeX in the document
- The periodic table should be the complete reference table from the data sheet
- Graph images should include axes, labels, and legends
- Diagrams should be clear enough for educational use

## Quick Reference

| Question | Filename | Page | Type |
|----------|----------|------|------|
| Q2 | q2-glassware.png | 2 | Diagram |
| Q7 | q7-galvanic-cell.png | 4 | Diagram |
| Q11 | q11-monomers.png | 5 | Structures |
| Q11 | q11-polymers.png | 5 | Structures |
| Q14 | q14-titration-curve.png | 6 | Graph |
| Q15 | q15-catchment.png | 7 | Map |
| Q22 | q22-graph-paper.png | 15 | Grid |
| Q28 | q28-apparatus.png | 23 | Diagram |
| Q30 | q30-haber-graph.png | 26 | Graph |
| Q31 | q31-solvay-process.png | 31 | Flowchart |
| Q32 | q32-electroplating.png | 33 | Photo |
| Q33 | q33-muscle-cell.png | 34 | Diagram |
| Q33 | q33-protein-structure.png | 35 | Structure |
| Q34 | q34-electronegativity.png | 37 | Graph |
| Q35 | q35-dna-profiles.png | 39 | Diagram |
| Data | periodic-table.png | 42 | Table |
