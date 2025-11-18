#!/usr/bin/env python3
"""
Extract images from 2023 HSC Chemistry Exam PDF

This script extracts specific pages from the PDF as images for manual cropping.
The images need to be manually cropped to extract the specific diagrams, graphs,
and structures needed for the Quarto document.

Requirements:
    pip install pdf2image Pillow

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
    print("Please run: pip install pdf2image Pillow")
    print("\nYou may also need to install poppler:")
    print("  Ubuntu/Debian: sudo apt-get install poppler-utils")
    print("  macOS: brew install poppler")
    exit(1)

# Configuration
PDF_FILE = "2023-hsc-chemistry_20240318.pdf"
OUTPUT_DIR = "images"
TEMP_DIR = "images/temp_pages"

# Define which pages contain which images
# Format: (page_number, image_name, description)
IMAGE_LOCATIONS = [
    # Section I - Multiple Choice
    (2, "q2-aas-diagram", "Atomic absorption spectroscopy diagram"),
    (3, "q3-structure", "Structural formula of pent-2-yne"),
    (4, "q5-weak-acid-diagrams", "Four weak acid solution diagrams"),
    (5, "q9-titration-curve", "Titration curve graph"),
    (6, "q11-indicator-chart", "Flower water indicator chart"),
    (9, "q16-precipitation-curve", "Precipitation titration curve"),
    (10, "q18-rate-graph", "Rate vs time graph"),
    (11, "q19-mass-spectrum", "Mass spectrum for butan-2-one"),

    # Section II - Extended Response
    (14, "q21-isomers", "Three structural isomers C4H8O2"),
    (16, "q23-buffer-diagram", "Buffer solution pH change diagrams"),
    (18, "q25-combustion-apparatus", "Combustion apparatus diagram"),
    (20, "q26-nitric-acid-process", "Nitric acid production flowchart"),
    (24, "q29-solubility-graph", "Solubility vs molar mass graph"),
    (27, "q31-graph-paper", "Graph paper for calibration curve"),
    (30, "q33-piston-diagram", "Container with moveable piston"),
    (30, "q33-equilibrium-graph", "Equilibrium amount vs time graph"),
    (34, "q36-nmr-spectrum", "13C NMR spectrum of compound A"),
    (34, "q36-ir-spectrum", "Infrared spectrum of compound B"),
]


def create_directories():
    """Create necessary directories for image storage."""
    Path(OUTPUT_DIR).mkdir(exist_ok=True)
    Path(TEMP_DIR).mkdir(parents=True, exist_ok=True)
    print(f"✓ Created directories: {OUTPUT_DIR}/ and {TEMP_DIR}/")


def check_pdf_exists():
    """Check if the source PDF file exists."""
    if not Path(PDF_FILE).exists():
        print(f"Error: PDF file '{PDF_FILE}' not found!")
        print("Please ensure the PDF is in the current directory.")
        return False
    print(f"✓ Found PDF file: {PDF_FILE}")
    return True


def extract_pages():
    """Extract relevant pages as images for manual cropping."""
    print("\nExtracting pages from PDF...")
    print("This may take a moment...\n")

    # Get unique page numbers
    pages_needed = sorted(set(loc[0] for loc in IMAGE_LOCATIONS))

    try:
        # Convert specific pages to images
        for page_num in pages_needed:
            print(f"  Extracting page {page_num}...", end=" ")

            # Convert single page (pdf2image uses 1-based indexing)
            images = convert_from_path(
                PDF_FILE,
                first_page=page_num,
                last_page=page_num,
                dpi=300  # High quality for cropping
            )

            if images:
                output_path = Path(TEMP_DIR) / f"page_{page_num:03d}.png"
                images[0].save(output_path, "PNG")
                print(f"✓ Saved to {output_path}")

        print(f"\n✓ Extracted {len(pages_needed)} pages to {TEMP_DIR}/")

    except Exception as e:
        print(f"\n✗ Error during extraction: {e}")
        return False

    return True


def print_cropping_instructions():
    """Print instructions for manual cropping."""
    print("\n" + "="*70)
    print("MANUAL CROPPING REQUIRED")
    print("="*70)
    print("\nPage images have been saved to:", TEMP_DIR)
    print("\nNow you need to manually crop each image:")
    print("\n1. Open each page image in an image editor (GIMP, Photoshop, Preview, etc.)")
    print("2. Crop to extract the specific diagram/graph/structure")
    print("3. Save the cropped image with the correct filename")
    print("\nRequired images to crop:\n")

    print(f"{'Page':<6} {'Save As':<35} {'Description':<40}")
    print("-" * 85)

    for page, filename, description in IMAGE_LOCATIONS:
        output_name = f"{filename}.png"
        source_file = f"page_{page:03d}.png"
        print(f"{page:<6} {output_name:<35} {description:<40}")
        print(f"       ← Crop from: {TEMP_DIR}/{source_file}")
        print()

    print("\nSave all cropped images to:", OUTPUT_DIR + "/")
    print("\nTips for cropping:")
    print("  - Include some whitespace around diagrams (don't crop too tight)")
    print("  - Maintain aspect ratio where appropriate")
    print("  - Save as PNG format for best quality")
    print("  - Ensure text/numbers are clearly readable")
    print("  - For graphs, include axes labels and titles")
    print("\nAfter cropping all images, run: make check-images")
    print("="*70 + "\n")


def create_images_readme():
    """Create a README in the images directory."""
    readme_path = Path(OUTPUT_DIR) / "README.md"

    with open(readme_path, 'w') as f:
        f.write("# Images for 2023 HSC Chemistry Exam\n\n")
        f.write("This directory contains all images extracted from the exam PDF.\n\n")
        f.write("## Required Images\n\n")
        f.write("| Filename | Question | Description |\n")
        f.write("|----------|----------|-------------|\n")

        for page, filename, description in IMAGE_LOCATIONS:
            f.write(f"| `{filename}.png` | Page {page} | {description} |\n")

        f.write(f"\n**Total images required: {len(IMAGE_LOCATIONS)}**\n\n")
        f.write("## Extraction Notes\n\n")
        f.write("- All images should be in PNG format\n")
        f.write("- Resolution: 300 DPI recommended\n")
        f.write("- Color: RGB color mode\n")
        f.write("- Include sufficient whitespace around content\n")
        f.write("- Ensure all text is clearly readable\n\n")
        f.write("## Verification\n\n")
        f.write("Run `make check-images` to verify all images are present.\n")

    print(f"✓ Created {readme_path}")


def main():
    """Main execution function."""
    print("\n" + "="*70)
    print("2023 HSC Chemistry Exam - Image Extraction Tool")
    print("="*70 + "\n")

    # Check prerequisites
    if not check_pdf_exists():
        return

    # Create directories
    create_directories()

    # Extract pages
    if not extract_pages():
        print("\n✗ Extraction failed!")
        return

    # Create images directory README
    create_images_readme()

    # Print instructions
    print_cropping_instructions()

    print("✓ Page extraction complete!")
    print(f"\nNext steps:")
    print(f"  1. Open images in {TEMP_DIR}/")
    print(f"  2. Crop each image as specified above")
    print(f"  3. Save cropped images to {OUTPUT_DIR}/")
    print(f"  4. Run 'make check-images' to verify\n")


if __name__ == "__main__":
    main()
