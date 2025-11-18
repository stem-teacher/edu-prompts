#!/usr/bin/env python3
"""
Image Extraction Script for 2022 HSC Chemistry Exam
Extracts page images from PDF for manual cropping
"""

import os
from pathlib import Path

try:
    from pdf2image import convert_from_path
    from PIL import Image
except ImportError:
    print("Required packages not installed.")
    print("Please install with: pip install pdf2image Pillow")
    print("Note: pdf2image also requires poppler to be installed on your system")
    exit(1)

# Configuration
PDF_FILE = "2022-hsc-chemistry.pdf"
OUTPUT_DIR = "images/pages"
DPI = 300  # Higher DPI for better quality

# Pages that contain images we need to extract
PAGES_WITH_IMAGES = {
    3: ["q4-manganese-absorbance", "q4-lamp-spectra"],
    4: ["q6-uv-vis-spectra"],
    6: ["q9-structures"],
    7: ["q11-cyclohexanol-reaction"],
    8: ["q12-c6h14-isomers"],
    10: ["q15-conductivity-graph"],
    11: ["q18-biopolymer"],
    12: ["q20-indicator-graph"],
    17: ["q24-boiling-points"],
    18: ["q25-beakers"],
    21: ["q28-flowchart"],
    24: ["q30-mass-spectrum", "q30-ir-spectrum", "q30-proton-nmr"],
    25: ["q30-c13-nmr"]
}


def create_directories():
    """Create output directories if they don't exist"""
    Path(OUTPUT_DIR).mkdir(parents=True, exist_ok=True)
    Path("images").mkdir(exist_ok=True)
    print(f"Created output directory: {OUTPUT_DIR}")


def extract_pages():
    """Extract specific pages from PDF as images"""
    if not os.path.exists(PDF_FILE):
        print(f"Error: PDF file '{PDF_FILE}' not found!")
        print("Please ensure the PDF is in the same directory as this script.")
        return False

    print(f"Extracting pages from {PDF_FILE}...")
    print(f"This may take a few minutes at {DPI} DPI...")

    # Get list of unique pages to extract
    pages_to_extract = sorted(set(PAGES_WITH_IMAGES.keys()))

    try:
        # Convert specific pages to images
        for page_num in pages_to_extract:
            print(f"  Extracting page {page_num}...")

            # Convert single page (pdf2image uses 1-based indexing)
            images = convert_from_path(
                PDF_FILE,
                dpi=DPI,
                first_page=page_num,
                last_page=page_num
            )

            if images:
                # Save the page image
                output_file = os.path.join(OUTPUT_DIR, f"page-{page_num:02d}.png")
                images[0].save(output_file, "PNG")
                print(f"    Saved: {output_file}")

        print(f"\n✓ Successfully extracted {len(pages_to_extract)} pages")
        return True

    except Exception as e:
        print(f"\n✗ Error during extraction: {e}")
        return False


def print_instructions():
    """Print instructions for manual cropping"""
    print("\n" + "="*70)
    print("NEXT STEPS: Manual Image Cropping")
    print("="*70)
    print(f"\nFull page images have been saved to: {OUTPUT_DIR}/")
    print("\nYou now need to manually crop each image from these pages.")
    print("\nInstructions:")
    print("1. Open each page image in an image editor (GIMP, Photoshop, Preview, etc.)")
    print("2. Crop the relevant portion according to the table below")
    print("3. Save the cropped image with the exact filename shown")
    print("4. Place all cropped images in the 'images/' directory")
    print("\n" + "-"*70)
    print("IMAGE CROPPING GUIDE")
    print("-"*70)

    for page_num in sorted(PAGES_WITH_IMAGES.keys()):
        images = PAGES_WITH_IMAGES[page_num]
        print(f"\nPage {page_num} (source: {OUTPUT_DIR}/page-{page_num:02d}.png)")
        for img_name in images:
            print(f"  → Crop and save as: images/{img_name}.png")

    print("\n" + "-"*70)
    print("\nCropping Tips:")
    print("- Include the entire diagram/graph/spectrum")
    print("- Include axis labels and titles where present")
    print("- Remove excess white space but leave some margin")
    print("- Ensure text is readable")
    print("- Save as PNG format for best quality")
    print("- For Q30 spectra, crop each spectrum separately")

    print("\n" + "="*70)
    print(f"Total images to create: {sum(len(imgs) for imgs in PAGES_WITH_IMAGES.values())}")
    print("="*70)


def check_extracted_images():
    """Check which images still need to be created"""
    print("\n" + "="*70)
    print("EXTRACTION STATUS CHECK")
    print("="*70)

    all_images = []
    for images in PAGES_WITH_IMAGES.values():
        all_images.extend(images)

    missing = []
    found = []

    for img_name in all_images:
        img_path = f"images/{img_name}.png"
        if os.path.exists(img_path):
            found.append(img_name)
            print(f"✓ {img_path}")
        else:
            missing.append(img_name)
            print(f"✗ {img_path} (MISSING)")

    print("\n" + "-"*70)
    print(f"Summary: {len(found)}/{len(all_images)} images ready")

    if missing:
        print(f"\nStill need to create {len(missing)} images:")
        for img in missing:
            print(f"  - {img}.png")
    else:
        print("\n🎉 All images have been extracted!")
        print("You can now render the Quarto document.")

    print("="*70)


def main():
    """Main execution function"""
    print("="*70)
    print("2022 HSC Chemistry Exam - Image Extraction Tool")
    print("="*70)

    # Create directories
    create_directories()

    # Extract pages
    success = extract_pages()

    if success:
        # Print cropping instructions
        print_instructions()

        # Check status
        print("\n\nChecking for already-cropped images...")
        check_extracted_images()

    print("\n" + "="*70)
    print("Image extraction complete!")
    print("="*70)


if __name__ == "__main__":
    main()
