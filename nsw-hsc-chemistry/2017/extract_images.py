#!/usr/bin/env python3
"""
Image Extraction Script for 2017 HSC Chemistry Exam
====================================================

This script extracts pages containing images from the 2017 HSC Chemistry PDF
and saves them as high-resolution PNG files for manual cropping.

Requirements:
    pip install pdf2image pillow

System Requirements:
    - poppler-utils (for pdf2image)
      Ubuntu/Debian: sudo apt-get install poppler-utils
      macOS: brew install poppler

Usage:
    python extract_images.py
"""

import os
from pathlib import Path

try:
    from pdf2image import convert_from_path
    from PIL import Image
except ImportError:
    print("Error: Required packages not installed.")
    print("Please run: pip install pdf2image pillow")
    print("\nAlso ensure poppler-utils is installed:")
    print("  Ubuntu/Debian: sudo apt-get install poppler-utils")
    print("  macOS: brew install poppler")
    exit(1)


# Configuration
PDF_FILE = "2017-hsc-chemistry-archive.pdf"
OUTPUT_DIR = "images"
DPI = 300  # High resolution for quality images

# Pages containing images that need extraction
# Format: (page_number, description)
IMAGE_PAGES = [
    (2, "Q3 - Structural formula of haloalkane"),
    (3, "Q4 - Esterification apparatus"),
    (4, "Q7 - Test tubes with bromine water"),
    (5, "Q9 - Heat of combustion apparatus"),
    (6, "Q10 - Dry cell and lead-acid cell diagrams"),
    (7, "Q12 - Polymer structures"),
    (8, "Q15 - Lewis dot structures for N2O"),
    (9, "Q18 - Equilibrium concentration graph"),
    (16, "Q22 - Grid for calibration curve"),
    (17, "Q23 - Galvanic cell diagram"),
    (21, "Q26 - SO2 concentration map"),
    (24, "Q29 - Rivertown map"),
    (30, "Q31(b) - SO3 concentration vs time graph"),
    (31, "Q31(c) - Solvay process flowchart"),
    (33, "Q33(a) - Enzyme activity vs pH graph"),
    (34, "Q33(c) - Dipeptide formation equation"),
    (36, "Q34(c) - Lewis oxygen structure and ionisation graph"),
    (37, "Q35(a) - Sodium emission spectrum"),
    (38, "Q35(c) - Blood sample mass spectrum"),
    (39, "Q35(c) - Four mass spectra"),
]

# Detailed image list for manual cropping
REQUIRED_IMAGES = {
    2: ["q3-structure.png"],
    3: ["q4-apparatus.png"],
    4: ["q7-test-tubes.png", "q7-results.png"],
    5: ["q9-apparatus.png"],
    6: ["q10-cells.png"],
    7: ["q12-polymers.png"],
    8: ["q15-lewis-structures.png"],
    9: ["q18-equilibrium-graph.png"],
    16: ["q22-grid.png"],
    17: ["q23-galvanic-cell.png"],
    21: ["q26-map.png"],
    24: ["q29-map.png"],
    30: ["q31b-graph.png"],
    31: ["q31c-flowchart.png"],
    33: ["q33a-enzyme-graph.png"],
    34: ["q33c-dipeptide.png"],
    36: ["q34c-lewis-oxygen.png", "q34c-ionisation-graph.png"],
    37: ["q35a-emission-spectrum.png"],
    38: ["q35c-blood-spectrum.png"],
    39: ["q35c-four-spectra.png"],
}


def create_output_directory():
    """Create the output directory if it doesn't exist."""
    Path(OUTPUT_DIR).mkdir(exist_ok=True)
    print(f"✓ Output directory created/verified: {OUTPUT_DIR}/")


def check_pdf_exists():
    """Check if the PDF file exists."""
    if not os.path.exists(PDF_FILE):
        print(f"✗ Error: PDF file not found: {PDF_FILE}")
        print(f"  Please ensure the PDF is in the current directory.")
        return False
    print(f"✓ PDF file found: {PDF_FILE}")
    return True


def extract_pages():
    """Extract pages containing images from the PDF."""
    print(f"\nExtracting pages at {DPI} DPI...")
    print("This may take a few moments...\n")

    pages_to_extract = [page for page, _ in IMAGE_PAGES]

    try:
        # Convert specific pages to images
        images = convert_from_path(
            PDF_FILE,
            dpi=DPI,
            first_page=min(pages_to_extract),
            last_page=max(pages_to_extract),
            fmt='png'
        )

        # Save each page
        saved_count = 0
        for page_num, description in IMAGE_PAGES:
            # Adjust index (PDF pages are 1-indexed, list is 0-indexed)
            img_index = page_num - min(pages_to_extract)

            if img_index < len(images):
                output_file = os.path.join(OUTPUT_DIR, f"page_{page_num:02d}.png")
                images[img_index].save(output_file, 'PNG')
                print(f"✓ Page {page_num:2d} saved: {output_file}")
                print(f"           {description}")
                saved_count += 1
            else:
                print(f"✗ Page {page_num} - Index out of range")

        print(f"\n✓ Successfully extracted {saved_count} pages")
        return True

    except Exception as e:
        print(f"✗ Error during extraction: {e}")
        return False


def print_cropping_instructions():
    """Print instructions for manual cropping."""
    print("\n" + "="*70)
    print("MANUAL CROPPING INSTRUCTIONS")
    print("="*70)
    print("\nThe following images need to be cropped from the extracted pages:")
    print("\nUse an image editor (GIMP, Photoshop, Preview, etc.) to:")
    print("1. Open each page_XX.png file")
    print("2. Crop the specific diagram/graph")
    print("3. Save with the exact filename shown below")
    print("4. Place in the images/ directory\n")

    for page_num, description in IMAGE_PAGES:
        images_needed = REQUIRED_IMAGES.get(page_num, [])
        print(f"\nPage {page_num:2d} - {description}")
        print(f"  Source: {OUTPUT_DIR}/page_{page_num:02d}.png")
        for img_file in images_needed:
            print(f"  → Crop and save as: {OUTPUT_DIR}/{img_file}")

    print("\n" + "="*70)
    print("TOTAL IMAGES NEEDED: 23")
    print("="*70)


def create_images_readme():
    """Create a README in the images directory."""
    readme_content = """# Images Directory

This directory contains all images extracted from the 2017 HSC Chemistry exam PDF.

## Extraction Status

Run `make check-images` from the parent directory to verify all required images are present.

## Required Images (23 total)

### Multiple Choice Section
1. q3-structure.png - Haloalkane structural formula
2. q4-apparatus.png - Esterification apparatus diagram
3. q7-test-tubes.png - Bromine water test tubes setup
4. q7-results.png - Test tube results options
5. q9-apparatus.png - Heat of combustion apparatus
6. q10-cells.png - Dry cell and lead-acid cell
7. q12-polymers.png - Polymer structure options
8. q15-lewis-structures.png - N₂O Lewis structures
9. q18-equilibrium-graph.png - Gas equilibrium graph

### Extended Response Section
10. q22-grid.png - Empty calibration curve grid
11. q23-galvanic-cell.png - Zn-Ag galvanic cell
12. q26-map.png - SO₂ concentration map
13. q29-map.png - Rivertown water sources map

### Option Questions Section
14. q31b-graph.png - SO₃ production graph
15. q31c-flowchart.png - Solvay process flowchart
16. q33a-enzyme-graph.png - Enzyme activity vs pH
17. q33c-dipeptide.png - Dipeptide formation
18. q34c-lewis-oxygen.png - Lewis oxygen structure
19. q34c-ionisation-graph.png - Ionisation energies
20. q35a-emission-spectrum.png - Sodium emission
21. q35c-blood-spectrum.png - Blood sample spectrum
22. q35c-four-spectra.png - Four mass spectra

## Image Specifications

- Format: PNG
- Resolution: 300 DPI minimum
- Color: RGB or Grayscale as appropriate
- Compression: Lossless

## Source Pages

Extracted from: 2017-hsc-chemistry-archive.pdf
Pages: 2-9, 16-17, 21, 24, 30-31, 33-34, 36-39
"""

    readme_path = os.path.join(OUTPUT_DIR, "README.md")
    with open(readme_path, 'w') as f:
        f.write(readme_content)
    print(f"\n✓ Created {readme_path}")


def main():
    """Main execution function."""
    print("="*70)
    print("2017 HSC Chemistry Exam - Image Extraction Script")
    print("="*70)
    print()

    # Step 1: Check if PDF exists
    if not check_pdf_exists():
        return 1

    # Step 2: Create output directory
    create_output_directory()

    # Step 3: Extract pages
    if not extract_pages():
        return 1

    # Step 4: Create images README
    create_images_readme()

    # Step 5: Print cropping instructions
    print_cropping_instructions()

    print("\n✓ Extraction complete!")
    print(f"\nNext steps:")
    print(f"1. Open the page images in {OUTPUT_DIR}/")
    print(f"2. Crop each diagram/graph as indicated above")
    print(f"3. Save with the exact filenames shown")
    print(f"4. Run 'make check-images' to verify all images are present")
    print(f"5. Run 'make render' to build the PDF\n")

    return 0


if __name__ == "__main__":
    exit(main())
