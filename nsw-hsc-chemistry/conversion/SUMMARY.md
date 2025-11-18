# HSC Chemistry 2025 Exam - Quarto Conversion Summary

## What Has Been Created

I've successfully converted the 2025 NSW HSC Chemistry examination paper into a Quarto document format. Here's what's in the directory:

### Files Created

1. **2025-hsc-chemistry.qmd** - The main Quarto document containing:
   - All 20 multiple choice questions (Section I)
   - All 17 extended response questions (Section II, Questions 21-37)
   - Proper chemistry notation using `mhchem` LaTeX package
   - Proper document structure with headers and sections
   - Image placeholders for all diagrams and graphs

2. **README.md** - Complete documentation including:
   - File structure explanation
   - List of required images
   - Methods for extracting images from PDF
   - Build instructions
   - Customization options

3. **extract_images.py** - Python script to help extract images from the PDF

4. **Makefile** - Build automation with commands to:
   - Check if all images are present
   - Render the document
   - Clean generated files

5. **images/README.md** - Guide for the images directory

## What You Need to Do Next

### Step 1: Extract Images

The document requires 13 images to be extracted from the original PDF. You have three options:

**Option A: Using the Python script (Recommended)**
```bash
cd /Users/philiphaynes/Documents/hsc-chem-2025
pip install pdf2image Pillow
python extract_images.py /mnt/user-data/uploads/2025-hsc-chemistry.pdf
```

This will create full-page images that you can then crop manually.

**Option B: Manual extraction**
- Open the PDF in Preview or Adobe Acrobat
- For each image listed in the README, select and copy it
- Paste into an image editor and save as PNG with the correct name

**Option C: Using pdfimages command line tool**
```bash
pdfimages -all 2025-hsc-chemistry.pdf images/img
# Then rename the extracted images according to the list in README.md
```

### Step 2: Place Images

All images should go in the `images/` directory with these exact names:
- q1-diagram.png
- q3-structures.png
- q5-graphs.png
- q15-flowchart.png
- q15-options.png
- q17-structures.png
- q20-calibration.png
- q26-grid.png
- q27-equilibrium.png
- q28-polymers.png
- q28-monomer.png
- q34-titration.png
- q35-energy.png

### Step 3: Render the Document

Once all images are in place:

```bash
cd /Users/philiphaynes/Documents/hsc-chem-2025
make render
```

Or directly with Quarto:
```bash
quarto render 2025-hsc-chemistry.qmd
```

This will create `2025-hsc-chemistry.pdf`.

## Features of the Conversion

### Chemistry Notation
- All chemical formulas use proper notation: H₂O, CH₃COOH, etc.
- Chemical equations with reaction arrows
- Subscripts and superscripts properly formatted
- Complex ions and charges correctly displayed

### Structure
- Maintains the two-section format
- Preserves question numbering and mark allocations
- Includes proper spacing and page breaks
- Professional title page matching original

### Tables and Graphs
- All data tables converted to markdown format
- Graph placeholders with proper sizing
- Structural formula options clearly laid out

## Known Limitations

1. **Formulae Sheet**: Pages 41-44 (the formulae sheet, data sheet, and periodic table) need to be added separately
2. **Some structural formulas**: Complex organic chemistry structures may need manual drawing with ChemFig if perfect accuracy is required
3. **Answer spaces**: The dotted lines for written answers are represented as vertical space
4. **Multiple choice answer sheet**: Not included (as it's a separate sheet)

## Customization

You can modify the YAML header in the .qmd file to:
- Adjust margins (currently 2.5cm)
- Change font size (currently 11pt)
- Add headers/footers
- Modify spacing

## Testing

To check if everything is ready:
```bash
make check-images
```

This will tell you which images are missing.

## Troubleshooting

**Issue: LaTeX packages not found**
Solution: Install a LaTeX distribution (TeX Live or MiKTeX)

**Issue: Images not displaying**
Solution: Check that image filenames exactly match those listed and are in the `images/` directory

**Issue: Chemical formulas not rendering**
Solution: Ensure `mhchem` package is installed with your LaTeX distribution

## File Location

All files are in:
```
/Users/philiphaynes/Documents/hsc-chem-2025/
```

## Next Steps for Perfect Reproduction

1. Extract and place all 13 images
2. Add the formulae sheet content (pages 41-44)
3. Fine-tune spacing to match original page breaks
4. Verify all chemical notation renders correctly
5. Check table formatting and alignments

The document structure is complete and ready to render once images are in place!
