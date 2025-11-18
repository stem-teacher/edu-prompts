#!/usr/bin/env python3
"""
Image Extraction Script for 2024 HSC Chemistry Exam
Extracts full pages as images for manual cropping

Usage:
    python extract_images.py

Requirements:
    pip install pdf2image pillow
"""

import os
from pathlib import Path
from pdf2image import convert_from_path

# Configuration
PDF_FILE = "2024-hsc-chemistry.pdf"
OUTPUT_DIR = "images"
DPI = 300  # High resolution for clarity

# Image extraction guide with page numbers
IMAGES_TO_EXTRACT = [
    # Section I - Multiple Choice
    {"page": 2, "question": 1, "description": "Homologous series structural formulas (A-D)", "filename": "q1-homologous-series.png"},
    {"page": 3, "question": 4, "description": "IR spectrum", "filename": "q4-ir-spectrum.png"},
    {"page": 3, "question": 4, "description": "Four structural formulas", "filename": "q4-structures.png"},
    {"page": 5, "question": 9, "description": "Four mass spectra (A-D)", "filename": "q9-mass-spectra.png"},
    {"page": 7, "question": 12, "description": "Amide structural formula", "filename": "q12-structure.png"},
    {"page": 8, "question": 14, "description": "Glycine structure", "filename": "q14-glycine.png"},
    {"page": 8, "question": 14, "description": "Silk polymer section", "filename": "q14-silk-polymer.png"},
    {"page": 8, "question": 14, "description": "Four amino acid monomers", "filename": "q14-monomers.png"},
    {"page": 10, "question": 17, "description": "Titration curve", "filename": "q17-titration-curve.png"},
    {"page": 11, "question": 18, "description": "Four Q vs Time graphs", "filename": "q18-reaction-quotient.png"},
    {"page": 11, "question": 19, "description": "Four structural formulas for NMR", "filename": "q19-structures.png"},

    # Section II - Extended Response
    {"page": 14, "question": 22, "description": "Vinyl fluoride structure", "filename": "q22-vinyl-fluoride.png"},
    {"page": 16, "question": 24, "description": "Graph axes for boiling points", "filename": "q24-graph-axes.png"},
    {"page": 18, "question": 25, "description": "Calibration graph", "filename": "q25-calibration-graph.png"},
    {"page": 20, "question": 26, "description": "Graph axes for [I2] vs time", "filename": "q26-graph-axes.png"},
    {"page": 25, "question": 31, "description": "Urea synthesis reactions", "filename": "q31-urea-synthesis.png"},
    {"page": 27, "question": 33, "description": "Acetone reduction", "filename": "q33-reduction.png"},
    {"page": 28, "question": 34, "description": "Conductivity graph", "filename": "q34-conductivity-graph.png"},
    {"page": 30, "question": 35, "description": "Three carboxylic acid structures", "filename": "q35-structures.png"},
    {"page": 33, "question": 37, "description": "Keq vs ΔG° graph", "filename": "q37-keq-vs-dg.png"},
    {"page": 34, "question": 38, "description": "Mass spectrum", "filename": "q38-mass-spectrum.png"},
]


def create_output_directory():
    """Create the output directory if it doesn't exist."""
    Path(OUTPUT_DIR).mkdir(parents=True, exist_ok=True)
    print(f"✓ Output directory '{OUTPUT_DIR}' ready")


def check_pdf_exists():
    """Check if the PDF file exists."""
    if not os.path.exists(PDF_FILE):
        print(f"✗ Error: PDF file '{PDF_FILE}' not found")
        print(f"  Please ensure the PDF is in the current directory")
        return False
    print(f"✓ Found PDF file: {PDF_FILE}")
    return True


def extract_pages():
    """Extract all relevant pages from the PDF as full-page images."""
    print(f"\n{'='*60}")
    print(f"Extracting pages from {PDF_FILE} at {DPI} DPI...")
    print(f"{'='*60}\n")

    # Get unique page numbers
    pages_to_extract = sorted(set(img["page"] for img in IMAGES_TO_EXTRACT))

    print(f"Pages to extract: {pages_to_extract}")
    print(f"Total: {len(pages_to_extract)} pages\n")

    # Convert PDF pages to images
    try:
        images = convert_from_path(
            PDF_FILE,
            dpi=DPI,
            first_page=min(pages_to_extract),
            last_page=max(pages_to_extract)
        )

        # Save each page
        page_offset = min(pages_to_extract) - 1
        for i, page_num in enumerate(pages_to_extract):
            output_path = os.path.join(OUTPUT_DIR, f"page_{page_num:03d}.png")
            images[i].save(output_path, "PNG")
            print(f"  ✓ Saved page {page_num} → {output_path}")

        print(f"\n✓ Successfully extracted {len(pages_to_extract)} pages")

    except Exception as e:
        print(f"\n✗ Error extracting pages: {e}")
        print(f"  Make sure pdf2image and its dependencies are installed:")
        print(f"    pip install pdf2image pillow")
        print(f"  On Linux, you may also need: sudo apt-get install poppler-utils")
        print(f"  On macOS: brew install poppler")
        return False

    return True


def print_extraction_guide():
    """Print a guide for manual cropping and naming."""
    print(f"\n{'='*60}")
    print(f"MANUAL EXTRACTION GUIDE")
    print(f"{'='*60}\n")

    print(f"Full page images have been saved to '{OUTPUT_DIR}/'")
    print(f"\nNow you need to manually crop each image to show only the")
    print(f"relevant content and rename according to the following guide:\n")

    current_question = None
    for img in IMAGES_TO_EXTRACT:
        if current_question != img["question"]:
            if current_question is not None:
                print()
            current_question = img["question"]
            print(f"Question {img['question']} (Page {img['page']}):")

        print(f"  • Crop and save as: {img['filename']}")
        print(f"    Description: {img['description']}")

    print(f"\n{'='*60}")
    print(f"CROPPING INSTRUCTIONS")
    print(f"{'='*60}\n")

    print(f"For each image above:")
    print(f"1. Open the corresponding page_XXX.png file")
    print(f"2. Use an image editor (e.g., GIMP, Preview, Paint) to crop")
    print(f"3. Include only the relevant diagram/graph/structure")
    print(f"4. Remove any surrounding text unless it's part of the image")
    print(f"5. Save with the exact filename shown above")
    print(f"6. Ensure the image is clear and readable")

    print(f"\n{'='*60}")
    print(f"TIPS FOR GOOD QUALITY")
    print(f"{'='*60}\n")

    print(f"• Keep margins tight but don't cut off content")
    print(f"• Maintain high resolution (don't resize down)")
    print(f"• Save as PNG for best quality")
    print(f"• Check that text and numbers are legible")
    print(f"• For graphs, include axis labels and scales")
    print(f"• For structures, include all atoms and bonds clearly")


def verify_all_images():
    """Check which images still need to be created."""
    print(f"\n{'='*60}")
    print(f"IMAGE STATUS CHECK")
    print(f"{'='*60}\n")

    missing = []
    present = []

    for img in IMAGES_TO_EXTRACT:
        filepath = os.path.join(OUTPUT_DIR, img["filename"])
        if os.path.exists(filepath):
            present.append(img["filename"])
            print(f"  ✓ {img['filename']}")
        else:
            missing.append(img)
            print(f"  ✗ {img['filename']} (MISSING)")

    print(f"\nSummary:")
    print(f"  Present: {len(present)}/{len(IMAGES_TO_EXTRACT)}")
    print(f"  Missing: {len(missing)}/{len(IMAGES_TO_EXTRACT)}")

    if missing:
        print(f"\n⚠ Still need to create {len(missing)} images")
        print(f"  See extraction guide above for details")
    else:
        print(f"\n✓ All images are present! Ready to build the document.")

    return len(missing) == 0


def main():
    """Main execution function."""
    print("="*60)
    print("2024 HSC Chemistry Exam - Image Extraction Script")
    print("="*60)

    # Check prerequisites
    if not check_pdf_exists():
        return 1

    create_output_directory()

    # Extract pages
    if not extract_pages():
        return 1

    # Print guide for manual cropping
    print_extraction_guide()

    # Check status
    print()
    verify_all_images()

    print(f"\n{'='*60}")
    print(f"NEXT STEPS")
    print(f"{'='*60}\n")
    print(f"1. Manually crop the extracted page images (see guide above)")
    print(f"2. Run this script again to verify all images are present:")
    print(f"   python extract_images.py --check")
    print(f"3. Once all images are ready, build the document:")
    print(f"   make render")
    print(f"   or: quarto render 2024-hsc-chemistry.qmd")
    print()

    return 0


if __name__ == "__main__":
    import sys

    # Check if user wants to verify images only
    if len(sys.argv) > 1 and sys.argv[1] == "--check":
        create_output_directory()
        all_present = verify_all_images()
        sys.exit(0 if all_present else 1)
    else:
        sys.exit(main())
