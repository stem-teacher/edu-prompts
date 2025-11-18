#!/usr/bin/env python3
"""
Extract images from 2016 HSC Chemistry PDF

This script extracts page images from the PDF for manual cropping.
For best results, use a PDF viewer and screenshot tool to extract individual
diagrams and save them with the correct filenames.

Requirements:
    pip install pdf2image Pillow

Usage:
    python extract_images.py
"""

import os
from pathlib import Path

# Check if required packages are installed
try:
    from pdf2image import convert_from_path
    from PIL import Image
except ImportError:
    print("ERROR: Required packages not installed.")
    print("Please run: pip install pdf2image Pillow")
    print("\nYou may also need to install poppler:")
    print("  - Ubuntu/Debian: sudo apt-get install poppler-utils")
    print("  - macOS: brew install poppler")
    print("  - Windows: Download from https://github.com/oschwartz10612/poppler-windows/releases/")
    exit(1)

# Configuration
PDF_FILE = "2016-hsc-chemistry-archive.pdf"
OUTPUT_DIR = "images"
DPI = 300  # Higher DPI for better quality

# List of images to extract with their page numbers
# Format: (filename, page_number, description)
IMAGES_TO_EXTRACT = [
    ("q1-vinyl-chloride.png", 2, "Molecular structure of vinyl chloride"),
    ("q5-hydrogen-bonding.png", 3, "Four diagrams showing H-bonding"),
    ("q11-haloalkane.png", 5, "Structural formula of haloalkane"),
    ("q13-flowchart.png", 6, "Flowchart for substance identification"),
    ("q16-galvanic-cell.png", 7, "Electrochemical cell diagram"),
    ("q17-polymer.png", 8, "Polymer structure"),
    ("q17-monomers.png", 8, "Four possible monomer structures"),
    ("q20-mercury-spectrum.png", 9, "Mercury emission spectrum"),
    ("q21-galvanic-cell.png", 14, "Silver/Copper galvanic cell"),
    ("q22-apparatus.png", 15, "Reflux apparatus for esterification"),
    ("q23-graph-grid.png", 16, "Empty graph grid for plotting data"),
    ("q27-graph.png", 21, "Volume of gas vs HCl volume graph"),
    ("q28-equilibrium-graph.png", 22, "Concentration vs time graph"),
    ("q31a-sulfur-extraction.png", 30, "Frasch process sulfur extraction diagram"),
    ("q32a-electrolytic-cell.png", 32, "Electrolytic cell with graphite electrodes"),
    ("q33a-amino-acids.png", 34, "Table of amino acid structures"),
    ("q33a-ribonuclease.png", 34, "Ribonuclease enzyme structure diagram"),
    ("q34a-electron-config.png", 36, "Electron configuration diagram"),
    ("q35a-shoe-print.png", 38, "Photograph of shoe print in soil"),
    ("q35b-electrophoresis.png", 39, "Before and after electrophoresis diagrams"),
    ("q35c-emission-spectra.png", 40, "Atomic emission spectra comparison"),
    ("periodic-table.png", 42, "Periodic Table"),
]


def create_output_directory():
    """Create the output directory if it doesn't exist."""
    Path(OUTPUT_DIR).mkdir(parents=True, exist_ok=True)
    print(f"✓ Created output directory: {OUTPUT_DIR}/")


def check_pdf_exists():
    """Check if the PDF file exists."""
    if not os.path.exists(PDF_FILE):
        print(f"ERROR: PDF file not found: {PDF_FILE}")
        print("Please ensure the PDF is in the current directory.")
        return False
    print(f"✓ Found PDF file: {PDF_FILE}")
    return True


def extract_full_pages():
    """Extract full pages as images for manual cropping."""
    print(f"\nExtracting pages at {DPI} DPI...")
    print("This may take a few minutes...\n")

    # Get unique page numbers
    pages_needed = sorted(set(img[1] for img in IMAGES_TO_EXTRACT))

    try:
        # Convert specific pages
        for page_num in pages_needed:
            print(f"  Extracting page {page_num}...")
            images = convert_from_path(
                PDF_FILE,
                dpi=DPI,
                first_page=page_num,
                last_page=page_num
            )

            if images:
                # Save the page image
                output_file = os.path.join(OUTPUT_DIR, f"page_{page_num:02d}.png")
                images[0].save(output_file, "PNG")
                print(f"    → Saved: {output_file}")

        print(f"\n✓ Extracted {len(pages_needed)} pages")
        return True

    except Exception as e:
        print(f"\nERROR: Failed to extract pages: {e}")
        return False


def print_manual_instructions():
    """Print instructions for manual image extraction."""
    print("\n" + "="*70)
    print("MANUAL EXTRACTION REQUIRED")
    print("="*70)
    print("\nFull page images have been saved to the images/ directory.")
    print("You now need to crop individual diagrams and save them with the")
    print("correct filenames.\n")

    print("Required Images:\n")
    print(f"{'Filename':<35} {'Page':<6} {'Description'}")
    print("-" * 70)

    for filename, page, description in IMAGES_TO_EXTRACT:
        print(f"{filename:<35} {page:<6} {description}")

    print("\n" + "="*70)
    print("\nRECOMMENDED WORKFLOW:")
    print("="*70)
    print("""
1. Open each page image (page_XX.png) in an image editor
2. Crop the relevant diagram/graph/structure
3. Save with the exact filename from the table above
4. Delete the page_XX.png files when done

RECOMMENDED TOOLS:
  - GIMP (free, cross-platform)
  - Preview (macOS)
  - Paint.NET (Windows)
  - ImageMagick (command line)

TIPS:
  - Crop tightly around diagrams to remove excess whitespace
  - Ensure images are clear and readable
  - Save as PNG format for best quality
  - Check that filenames match exactly (case-sensitive)
""")


def create_images_readme():
    """Create a README file in the images directory."""
    readme_path = os.path.join(OUTPUT_DIR, "README.md")

    content = """# Images Directory

This directory contains images extracted from the 2016 HSC Chemistry exam PDF.

## Required Images

"""

    content += "| Filename | Page | Description |\n"
    content += "|----------|------|-------------|\n"

    for filename, page, description in IMAGES_TO_EXTRACT:
        content += f"| {filename} | {page} | {description} |\n"

    content += """
## Extraction Status

- [ ] All images extracted
- [ ] All images cropped correctly
- [ ] All filenames match exactly
- [ ] Images tested in rendered document

## Notes

Images should be:
- PNG format
- Clear and readable at 300 DPI or higher
- Cropped to remove excess whitespace
- Named exactly as shown in the table above
"""

    with open(readme_path, 'w') as f:
        f.write(content)

    print(f"✓ Created {readme_path}")


def main():
    """Main execution function."""
    print("="*70)
    print("2016 HSC Chemistry - Image Extraction Script")
    print("="*70)
    print()

    # Check if PDF exists
    if not check_pdf_exists():
        return

    # Create output directory
    create_output_directory()

    # Extract full pages
    if not extract_full_pages():
        return

    # Create README in images directory
    create_images_readme()

    # Print manual instructions
    print_manual_instructions()

    print("\n" + "="*70)
    print("Next Steps:")
    print("="*70)
    print("""
1. Crop individual images from the page_XX.png files
2. Save with the correct filenames from the table above
3. Run: make check-images
4. Run: make render
""")


if __name__ == "__main__":
    main()
