# 2025 HSC Chemistry Exam - Quarto Conversion

This directory contains a Quarto document conversion of the 2025 NSW HSC Chemistry examination paper.

## Files

- `2025-hsc-chemistry.qmd` - Main Quarto document
- `images/` - Directory for extracted images (see below)

## Required Images

The following images need to be extracted from the original PDF and placed in the `images/` directory:

### Section I (Multiple Choice)

1. **q1-diagram.png** - Diagram showing H+ and A- ions in solution (page 2)
2. **q3-structures.png** - Four structural formula options for Question 3 (page 3)
3. **q5-graphs.png** - Four concentration vs time graphs (page 4)
4. **q15-flowchart.png** - Chemical transformation flowchart (page 9)
5. **q15-options.png** - Four structural formula options A-D (page 9)
6. **q17-structures.png** - Four molecular structures (page 10)
7. **q20-calibration.png** - Calibration curve graph (page 11)

### Section II (Extended Response)

8. **q26-grid.png** - Blank graph paper grid (page 19)
9. **q27-equilibrium.png** - Concentration vs time graph with equilibrium (page 21)
10. **q28-polymers.png** - Kevlar and Polystyrene polymer structures (page 22)
11. **q28-monomer.png** - Monomer structures for Kevlar synthesis (page 22)
12. **q34-titration.png** - pH vs Volume titration curve (page 30)
13. **q35-energy.png** - Energy profile diagram for cobalt complex reaction (page 32)

## Extracting Images from PDF

You can extract images using several methods:

### Method 1: Using pdfimages (recommended)

```bash
# Extract all images from the PDF
pdfimages -all 2025-hsc-chemistry.pdf images/img

# This will create numbered image files in the images directory
# You'll need to rename them according to the list above
```

### Method 2: Using PDF viewer

1. Open the PDF in Preview (Mac), Adobe Acrobat, or similar
2. Use the selection tool to select each diagram/graph
3. Copy and paste into an image editor
4. Save as PNG with the appropriate filename

### Method 3: Using Python (pdf2image)

```python
from pdf2image import convert_from_path
import os

# Convert PDF pages to images
pages = convert_from_path('2025-hsc-chemistry.pdf')

# Save specific pages or regions
# You'll need to crop specific regions for each question
```

## Building the Document

Once all images are in place, render the Quarto document:

```bash
quarto render 2025-hsc-chemistry.qmd
```

This will create a PDF file that closely matches the original exam paper.

## Notes

- The document uses LaTeX packages for chemistry notation: `chemfig`, `mhchem`, and `siunitx`
- Make sure you have a LaTeX distribution installed (e.g., TeX Live, MiKTeX)
- Some chemical structures may need manual adjustment for optimal appearance
- The formulae sheet (pages 41-44 of original) needs to be added to the end of the document

## Chemical Notation

The document uses the `mhchem` package for chemical equations. For example:

- `\ce{H2O}` renders as H₂O
- `\ce{CH3CH2OH}` renders as CH₃CH₂OH
- `\ce{CO2 + H2O -> H2CO3}` renders equations with arrows

## Customization

You can adjust the PDF output by modifying the YAML header:

- Change margins in the `geometry` section
- Adjust font size with `fontsize`
- Modify header/footer with `fancyhdr` commands

## Issues and Improvements

If you notice any discrepancies with the original document:

1. Check chemical formula rendering
2. Verify image placements and sizes
3. Ensure table formatting matches original
4. Review page breaks and spacing

## License

This is a reproduction of an official NSW Education Standards Authority examination paper for educational purposes.
