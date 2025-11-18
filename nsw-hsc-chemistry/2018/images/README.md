# Required Images for 2018 HSC Chemistry Exam

This directory should contain all extracted images from the original PDF.

## Image List

### Section I - Part A (Multiple Choice)

1. **q7-weak-acid-ionisation.png**
   - Question: 7
   - Page: 3
   - Description: Four beaker diagrams (A, B, C, D) showing ionisation of weak acid
   - Notes: Includes KEY showing water molecule and molecule of weak acid symbols
   - Suggested width: 80%

2. **q17-ph-buffer-graphs.png**
   - Question: 17
   - Page: 7
   - Description: Four graphs (A, B, C, D) showing pH vs CO₂ concentration
   - Notes: Each graph shows water and water+buffer curves
   - Suggested width: 90%

3. **q19-galvanic-cells.png**
   - Question: 19
   - Page: 8
   - Description: Four galvanic cell diagrams (A, B, C, D)
   - Notes: Shows Cu-Mg, Cu-Cu, Cu-Pt, and Cu-Fe electrode combinations with voltmeters
   - Suggested width: 100%

### Section I - Part B (Extended Response)

4. **q24-fermentation-apparatus.png**
   - Question: 24
   - Page: 14
   - Description: Fermentation apparatus with gas syringe
   - Notes: Shows conical flask with yeast in glucose solution connected to gas syringe collecting CO₂
   - Suggested width: 50%

5. **q25-kinetic-energy-graph.png**
   - Question: 25
   - Page: 15
   - Description: Kinetic energy distribution at two temperatures
   - Notes: Shows T₁ (low temperature) and T₂ (high temperature) curves with EA (activation energy) marked
   - Suggested width: 70%

6. **q27-cfc-structure.png**
   - Question: 27
   - Page: 17
   - Description: Structural formula of chlorofluorocarbon compound
   - Notes: Shows molecule with structure: H-C(Cl,H)-C(F,F)-H
   - Suggested width: 30%

7. **q28-camp-stove.png**
   - Question: 28
   - Page: 18
   - Description: Camp stove diagram showing clearance height
   - Notes: Shows water pot above flame, butane canister, with clearance height indicated
   - Suggested width: 40%

8. **q28-graph-grid.png**
   - Question: 28
   - Page: 18
   - Description: Empty graph grid for student plotting
   - Notes: Grid for plotting CO concentration vs clearance height data
   - Suggested width: 80%

### Section II - Elective Questions

9. **q32-electrolytic-cell.png**
   - Question: 32 (Shipwrecks, Corrosion and Conservation)
   - Page: 27
   - Description: Electrolytic cell diagram
   - Notes: Shows anode (+), cathode (-), electrolyte solution, and battery/power source
   - Suggested width: 40%

10. **q33-dipeptide.png**
    - Question: 33 (The Biochemistry of Movement)
    - Page: 29
    - Description: Dipeptide structural formula
    - Notes: Shows H₂N-CH(CH₃)-CO-NH-CH(CH₂OH)-COOH structure
    - Suggested width: 40%

11. **q33-energy-profile.png**
    - Question: 33 (The Biochemistry of Movement)
    - Page: 30
    - Description: Energy profile for glucose combustion
    - Notes: Shows activation energy (181 kJ mol⁻¹) and total energy release (2997 kJ mol⁻¹)
    - Suggested width: 60%

12. **q34-boron-config.png**
    - Question: 34 (The Chemistry of Art)
    - Page: 31
    - Description: Electron configuration diagram for boron
    - Notes: Shows orbital box diagram with electron arrows in 1s, 2s, and 2p orbitals
    - Suggested width: 30%

13. **q35-mass-spectrometer.png**
    - Question: 35 (Forensic Chemistry)
    - Page: 32
    - Description: Mass spectrometer schematic diagram
    - Notes: Shows curved path with part A labelled (magnetic field/detector region)
    - Suggested width: 50%

## Total: 14 images required

## Extraction Methods

### Option 1: Manual Screenshot
1. Open `2018-hsc-chemistry-archive.pdf`
2. Navigate to the page number listed above
3. Use screenshot tool to capture the image
4. Save with the exact filename listed
5. Save as PNG format, 150+ DPI recommended

### Option 2: Use extraction script
```bash
cd ..
python3 extract_images.py
```

### Option 3: Use pdfimages
```bash
cd ..
pdfimages -png 2018-hsc-chemistry-archive.pdf images/raw/img
# Then manually identify and rename files
```

## Verification

To check if all images are present:
```bash
cd ..
make check-images
# or
python3 extract_images.py --check
```

## Image Requirements

- **Format**: PNG preferred (also accepts JPG, PDF)
- **Resolution**: Minimum 150 DPI
- **Quality**: Ensure text, labels, and lines are clearly readable
- **Naming**: Must match filenames exactly (case-sensitive)
- **Color**: Preserve original colors; grayscale acceptable for diagrams

## Notes

- Some images contain multiple parts (e.g., 4 options A-D) - capture all parts in one image
- Maintain aspect ratios when extracting
- For graphs with grids, ensure grid lines are visible
- For chemical structures, ensure all bonds and atoms are crisp
- The graph grid (q28-graph-grid.png) should be the blank grid only, not the completed graph
