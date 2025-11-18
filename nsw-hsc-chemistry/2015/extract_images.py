#!/usr/bin/env python3
"""
Image Extraction Script for 2015 HSC Chemistry Exam
====================================================

This script helps extract images from the 2015 HSC Chemistry exam PDF
for use in the Quarto conversion.

Requirements:
    pip install pdf2image Pillow

Usage:
    python extract_images.py

The script will:
1. Convert specific pages of the PDF to high-resolution images
2. Save them to the images/ directory for manual cropping
3. Provide guidance on which elements to crop from each page
"""

import os
from pathlib import Path

try:
    from pdf2image import convert_from_path
    from PIL import Image
except ImportError:
    print("Error: Required packages not installed.")
    print("Please run: pip install pdf2image Pillow")
    print("\nOn Linux, you may also need: sudo apt-get install poppler-utils")
    print("On macOS, you may also need: brew install poppler")
    exit(1)

# Configuration
PDF_PATH = "chemistry-hsc-exam-2015.pdf-archive.pdf"
OUTPUT_DIR = "images"
DPI = 300  # High resolution for quality output

# Pages to extract (page numbers are 1-indexed)
PAGES_TO_EXTRACT = {
    2: ["q2-glassware.png"],
    4: ["q7-galvanic-cell.png"],
    5: ["q11-monomers.png", "q11-polymers.png"],
    6: ["q14-titration-curve.png"],
    7: ["q15-catchment.png"],
    15: ["q22-graph-paper.png"],
    23: ["q28-apparatus.png"],
    26: ["q30-haber-graph.png"],
    31: ["q31-solvay-process.png"],
    33: ["q32-electroplating.png"],
    34: ["q33-muscle-cell.png"],
    35: ["q33-protein-structure.png"],
    37: ["q34-electronegativity.png"],
    39: ["q35-dna-profiles.png"],
    42: ["periodic-table.png"],
}

# Detailed extraction instructions
EXTRACTION_NOTES = {
    2: "Q2: Extract 4 glassware diagrams (A-D): conical flask, pipette, measuring cylinder, burette",
    4: "Q7: Extract complete galvanic cell diagram with Ag/Cu electrodes, solutions, and voltmeter",
    5: "Q11: Extract TWO images - (1) two monomer structures at top, (2) four polymer options A-D",
    6: "Q14: Extract pH vs volume titration curve graph",
    7: "Q15: Extract water catchment map showing river, stream, forest, farmland, village, ocean, point X",
    15: "Q22: Extract blank graph paper grid for plotting data",
    23: "Q28: Extract glass tube apparatus with cotton wool at both ends",
    26: "Q30: Extract Haber process graph (yield vs temperature with multiple pressure curves)",
    31: "Q31: Extract Solvay process flowchart diagram",
    33: "Q32: Extract photograph of electroplating equipment (power supply, beaker, electrodes)",
    34: "Q33: Extract simplified muscle cell diagram showing organelles",
    35: "Q33: Extract protein structure diagram showing bonding interactions",
    37: "Q34: Extract electronegativity vs atomic number graph",
    39: "Q35: Extract DNA profile banding patterns (5 lanes)",
    42: "Extract complete periodic table of elements",
}


def create_output_directory():
    """Create the output directory if it doesn't exist."""
    Path(OUTPUT_DIR).mkdir(exist_ok=True)
    print(f"✓ Output directory ready: {OUTPUT_DIR}/")


def check_pdf_exists():
    """Check if the PDF file exists."""
    if not os.path.exists(PDF_PATH):
        print(f"Error: PDF file not found: {PDF_PATH}")
        print("\nPlease ensure the PDF file is in the current directory.")
        print("Expected filename: chemistry-hsc-exam-2015.pdf-archive.pdf")
        return False
    print(f"✓ PDF file found: {PDF_PATH}")
    return True


def extract_page_images():
    """Extract specified pages from the PDF as high-resolution images."""
    print(f"\nExtracting pages from PDF at {DPI} DPI...")
    print("This may take a few minutes...\n")

    for page_num in sorted(PAGES_TO_EXTRACT.keys()):
        try:
            print(f"Processing page {page_num}...")

            # Convert single page to image
            images = convert_from_path(
                PDF_PATH,
                dpi=DPI,
                first_page=page_num,
                last_page=page_num
            )

            if images:
                # Save the page image
                page_filename = f"page_{page_num:02d}_raw.png"
                page_path = os.path.join(OUTPUT_DIR, page_filename)
                images[0].save(page_path, "PNG")
                print(f"  ✓ Saved: {page_filename}")

                # Show extraction instructions
                if page_num in EXTRACTION_NOTES:
                    print(f"  📝 {EXTRACTION_NOTES[page_num]}")
                    print(f"  ➜ Crop and save as: {', '.join(PAGES_TO_EXTRACT[page_num])}")
                print()

        except Exception as e:
            print(f"  ✗ Error processing page {page_num}: {e}")
            print()


def print_summary():
    """Print summary of required images and next steps."""
    print("\n" + "=" * 70)
    print("EXTRACTION COMPLETE")
    print("=" * 70)

    print(f"\nRaw page images have been saved to: {OUTPUT_DIR}/")
    print("\nNext Steps:")
    print("-----------")
    print("1. Open each page_XX_raw.png file in an image editor")
    print("2. Crop the relevant diagram/image from the page")
    print("3. Save with the specified filename (see table below)")
    print("4. Delete the page_XX_raw.png files when done")

    print("\n" + "=" * 70)
    print("REQUIRED IMAGES - CROPPING GUIDE")
    print("=" * 70)
    print(f"\n{'Page':<6} {'Source File':<20} {'Target Filename(s)':<30}")
    print("-" * 70)

    for page_num in sorted(PAGES_TO_EXTRACT.keys()):
        source = f"page_{page_num:02d}_raw.png"
        targets = PAGES_TO_EXTRACT[page_num]
        target_str = targets[0] if len(targets) == 1 else f"{targets[0]} + {len(targets)-1} more"
        print(f"{page_num:<6} {source:<20} {target_str:<30}")
        if len(targets) > 1:
            for target in targets[1:]:
                print(f"{'':6} {'':20} {target:<30}")

    print("\n" + "=" * 70)
    print("Total images needed: 17")
    print("=" * 70)


def create_images_readme():
    """Create a README in the images directory."""
    readme_content = """# Images Directory

This directory contains all images extracted from the 2015 HSC Chemistry exam PDF.

## Required Images (17 total)

### Section I - Part A
- q2-glassware.png
- q7-galvanic-cell.png
- q11-monomers.png
- q11-polymers.png
- q14-titration-curve.png
- q15-catchment.png

### Section I - Part B
- q22-graph-paper.png
- q28-apparatus.png
- q30-haber-graph.png

### Section II - Options
- q31-solvay-process.png
- q32-electroplating.png
- q33-muscle-cell.png
- q33-protein-structure.png
- q34-electronegativity.png
- q35-dna-profiles.png

### Data Sheet
- periodic-table.png

## Image Specifications

- **Format:** PNG
- **Resolution:** 300 DPI minimum
- **Color:** RGB or Grayscale (as appropriate)
- **Background:** White (crop closely to avoid excessive whitespace)

## Naming Convention

Images are named according to the question they appear in:
- Format: `qXX-description.png`
- Example: `q7-galvanic-cell.png` for Question 7

## Extraction Status

After extracting each image, mark it as complete:

- [ ] q2-glassware.png
- [ ] q7-galvanic-cell.png
- [ ] q11-monomers.png
- [ ] q11-polymers.png
- [ ] q14-titration-curve.png
- [ ] q15-catchment.png
- [ ] q22-graph-paper.png
- [ ] q28-apparatus.png
- [ ] q30-haber-graph.png
- [ ] q31-solvay-process.png
- [ ] q32-electroplating.png
- [ ] q33-muscle-cell.png
- [ ] q33-protein-structure.png
- [ ] q34-electronegativity.png
- [ ] q35-dna-profiles.png
- [ ] periodic-table.png

## Notes

- Crop images tightly but ensure all relevant content is visible
- Maintain aspect ratios
- Ensure text/labels are legible at final size
- Remove any watermarks or page numbers if present
"""

    readme_path = os.path.join(OUTPUT_DIR, "README.md")
    with open(readme_path, "w") as f:
        f.write(readme_content)
    print(f"\n✓ Created: {OUTPUT_DIR}/README.md")


def main():
    """Main execution function."""
    print("\n" + "=" * 70)
    print("2015 HSC CHEMISTRY EXAM - IMAGE EXTRACTION SCRIPT")
    print("=" * 70)
    print()

    # Check prerequisites
    if not check_pdf_exists():
        return

    create_output_directory()
    create_images_readme()

    # Extract pages
    extract_page_images()

    # Print summary
    print_summary()

    print("\nFor detailed extraction instructions, see:")
    print(f"  - {OUTPUT_DIR}/README.md")
    print("  - Main README.md in parent directory")
    print()


if __name__ == "__main__":
    main()
