# Images Required for 2016 HSC Chemistry Exam

This directory should contain 22 images extracted from the original PDF.

## Image List

| # | Filename | Question | Page | Description |
|---|----------|----------|------|-------------|
| 1 | q1-vinyl-chloride.png | 1 | 2 | Molecular structure showing C=C with H, H, H, Cl substituents |
| 2 | q5-hydrogen-bonding.png | 5 | 3 | Four diagrams (A-D) showing hydrogen bonding between ethanol and water molecules |
| 3 | q11-haloalkane.png | 11 | 5 | Structural formula of 2-bromo-2-chloro-1,1,1-trifluoroethane |
| 4 | q13-flowchart.png | 13 | 6 | Flowchart showing substance identification tests (flame test, HCl, Ba2+) |
| 5 | q16-galvanic-cell.png | 16 | 7 | Electrochemical cell diagram with Q(s) and R(s) electrodes |
| 6 | q17-polymer.png | 17 | 8 | Polymer structure showing repeating units with CH3 groups |
| 7 | q17-monomers.png | 17 | 8 | Four structural formulas (A-D) of possible monomers |
| 8 | q20-mercury-spectrum.png | 20 | 9 | Emission spectrum showing lines at 623.4 nm and 615.2 nm |
| 9 | q21-galvanic-cell.png | 21 | 14 | Silver-Copper galvanic cell with voltmeter |
| 10 | q22-apparatus.png | 22 | 15 | Reflux apparatus for esterification with condenser labeled X |
| 11 | q23-graph-grid.png | 23 | 16 | Empty graph grid for student to plot temperature vs time |
| 12 | q27-graph.png | 27 | 21 | Graph showing volume of gas (L) vs volume of HCl (mL) |
| 13 | q28-equilibrium-graph.png | 28 | 22 | Concentration vs time graph for CO, Cl2, and COCl2 |
| 14 | q31a-sulfur-extraction.png | 31(a) | 30 | Frasch process diagram showing pipes A and B, compressed air |
| 15 | q32a-electrolytic-cell.png | 32(a) | 32 | Electrolytic cell with graphite electrodes in NaCl solution, 6.0V |
| 16 | q33a-amino-acids.png | 33(a) | 34 | Table showing structural formulas of Cys, Asp, and Thr amino acids |
| 17 | q33a-ribonuclease.png | 33(a) | 34 | Ribonuclease structure showing amino acid chain with bonds X and Y |
| 18 | q34a-electron-config.png | 34(a) | 36 | Electron configuration diagram showing orbital filling (5s, 4s, 4p, 3s, 3p, 3d, 2s, 2p, 1s) |
| 19 | q35a-shoe-print.png | 35(a) | 38 | Photograph of shoe print in soil |
| 20 | q35b-electrophoresis.png | 35(b) | 39 | Before and after electrophoresis diagrams showing amino acids X, Y, Z |
| 21 | q35c-emission-spectra.png | 35(c) | 40 | Atomic emission spectra for Copper, Strontium, Cadmium, Titanium, and Paint sample |
| 22 | periodic-table.png | Data Sheet | 42 | Periodic Table of the Elements |

## Extraction Instructions

### Option 1: Use the Python Script

```bash
cd /home/user/edu-prompts/nsw-hsc-chemistry/2016
python extract_images.py
```

This will extract full-page images. You then need to:
1. Open each page_XX.png file
2. Crop the relevant diagram/graph
3. Save with the correct filename from the table above
4. Delete the page_XX.png files when done

### Option 2: Manual Screenshot

1. Open `2016-hsc-chemistry-archive.pdf`
2. Navigate to each page listed above
3. Use screenshot/snipping tool to capture the specific diagram
4. Save with exact filename from the table
5. Place in this directory

### Option 3: Use pdfimages Command

```bash
# Extract all embedded images
pdfimages -png ../2016-hsc-chemistry-archive.pdf extract

# Rename and organize as needed
```

## Image Quality Guidelines

- **Format:** PNG (preferred) or high-quality JPG
- **Resolution:** 300 DPI minimum
- **Cropping:** Remove excess whitespace, but keep diagram complete
- **Size:** Keep diagrams readable when scaled to width percentages specified in .qmd
- **Filenames:** Must match exactly (case-sensitive)

## Checking Progress

Run from parent directory:

```bash
make check-images
```

This will show which images are present and which are missing.

## Status

- [ ] q1-vinyl-chloride.png
- [ ] q5-hydrogen-bonding.png
- [ ] q11-haloalkane.png
- [ ] q13-flowchart.png
- [ ] q16-galvanic-cell.png
- [ ] q17-polymer.png
- [ ] q17-monomers.png
- [ ] q20-mercury-spectrum.png
- [ ] q21-galvanic-cell.png
- [ ] q22-apparatus.png
- [ ] q23-graph-grid.png
- [ ] q27-graph.png
- [ ] q28-equilibrium-graph.png
- [ ] q31a-sulfur-extraction.png
- [ ] q32a-electrolytic-cell.png
- [ ] q33a-amino-acids.png
- [ ] q33a-ribonuclease.png
- [ ] q34a-electron-config.png
- [ ] q35a-shoe-print.png
- [ ] q35b-electrophoresis.png
- [ ] q35c-emission-spectra.png
- [ ] periodic-table.png

**Total: 0/22 images extracted**
