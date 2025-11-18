#!/usr/bin/env python3
"""
Image Extraction Script for 2019 HSC Chemistry Exam
This script extracts pages from the PDF for manual cropping of images.
"""

import os
from pathlib import Path

# Check if required packages are installed
try:
    from pdf2image import convert_from_path
    from PIL import Image
except ImportError:
    print("Error: Required packages not installed.")
    print("Please install with: pip install pdf2image Pillow")
    print("Note: You may also need to install poppler-utils:")
    print("  - Ubuntu/Debian: sudo apt-get install poppler-utils")
    print("  - macOS: brew install poppler")
    print("  - Windows: Download from https://github.com/oschwartz10612/poppler-windows")
    exit(1)

# Configuration
PDF_FILE = "2019-hsc-chemistry.pdf"
OUTPUT_DIR = "images"
FULL_PAGES_DIR = os.path.join(OUTPUT_DIR, "full_pages")

# Create output directories
Path(OUTPUT_DIR).mkdir(exist_ok=True)
Path(FULL_PAGES_DIR).mkdir(exist_ok=True)

# Define which pages contain which images
# Format: (page_number, description)
PAGES_TO_EXTRACT = {
    2: "Q1 - Structural formulas (4 options)",
    3: "Q4 - Mass spectrum",
    4: "Q5-Q6 - Titration curve",
    5: "Q8 - Ester structure",
    7: "Q14 - NMR spectrum and structural formulas",
    10: "Q20 - Calibration curve",
    14: "Q21 - Table and isomers",
    16: "Q23 - Experimental apparatus",
    18: "Q24 - Conductivity graph",
    19: "Q25 - Concentration vs time graph",
    20: "Q26 - Four spectra (MS, IR, 1H NMR, 13C NMR)",
    24: "Q29 - Data table",
    28: "Q32 - Boiling points graph",
    30: "Q34 - Reaction scheme",
    1: "Title page (for NSW logo)",
    33: "Formulae sheet",
    34: "Data sheet page 1",
    35: "Data sheet page 2",
    36: "Periodic table"
}

# Image extraction guide
IMAGE_LIST = [
    # Section I
    ("q1-structural-formulas.png", 2, "Four structural formula options for pentan-2-one"),
    ("q4-mass-spectrum.png", 3, "Mass spectrum graph"),
    ("q5-q6-titration-curve.png", 4, "Titration curve graph"),
    ("q8-structure.png", 5, "Ester structure"),
    ("q14-nmr-spectrum.png", 7, "1H NMR spectrum"),
    ("q14-structural-formulas.png", 7, "Four C4H9Cl structural options"),
    ("q20-calibration-curve.png", 10, "MnO4- calibration curve"),

    # Section II
    ("q21a-table.png", 14, "Table with 2-methylpropan-2-ol structure"),
    ("q21b-isomers.png", 14, "Two functional group isomers"),
    ("q23-apparatus.png", 16, "Spirit burner apparatus diagram"),
    ("q24-conductivity-graph.png", 18, "Conductivity titration graph"),
    ("q25a-graph.png", 19, "Concentration vs time equilibrium graph"),
    ("q26-spectra.png", 20, "Four spectra combined (MS, IR, 1H NMR, 13C NMR)"),
    ("q32-boiling-points.png", 28, "Boiling points comparison graph"),
    ("q34-reaction-scheme.png", 30, "Synthesis reaction scheme"),

    # Additional
    ("nsw-logo.png", 1, "NSW Government waratah logo"),
]

def extract_pages():
    """Extract full pages as images for manual cropping."""

    if not os.path.exists(PDF_FILE):
        print(f"Error: PDF file '{PDF_FILE}' not found!")
        print(f"Please ensure '{PDF_FILE}' is in the current directory.")
        return False

    print(f"Extracting pages from {PDF_FILE}...")
    print(f"This may take a minute...\n")

    try:
        # Convert specific pages to images
        pages_to_convert = sorted(PAGES_TO_EXTRACT.keys())

        for page_num in pages_to_convert:
            print(f"Extracting page {page_num}: {PAGES_TO_EXTRACT[page_num]}")

            # Convert single page (pdf2image uses 1-indexed pages)
            images = convert_from_path(
                PDF_FILE,
                first_page=page_num,
                last_page=page_num,
                dpi=300  # High resolution for quality
            )

            if images:
                output_file = os.path.join(FULL_PAGES_DIR, f"page_{page_num:02d}.png")
                images[0].save(output_file, "PNG")
                print(f"  → Saved to {output_file}")

        print("\n" + "="*70)
        print("Page extraction complete!")
        print("="*70)
        return True

    except Exception as e:
        print(f"Error during extraction: {e}")
        return False

def print_instructions():
    """Print instructions for manual cropping."""

    print("\n" + "="*70)
    print("NEXT STEPS: Manual Image Cropping")
    print("="*70)
    print("\nFull page images have been saved to:", FULL_PAGES_DIR)
    print("\nYou now need to crop each image and save it with the correct filename.")
    print("Here's the complete list:\n")

    print(f"{'Filename':<35} {'Page':<6} {'Description'}")
    print("-" * 70)

    for filename, page, description in IMAGE_LIST:
        print(f"{filename:<35} {page:<6} {description}")

    print("\n" + "="*70)
    print("CROPPING WORKFLOW:")
    print("="*70)
    print(f"""
1. Open each full page image in {FULL_PAGES_DIR}
2. Crop the relevant diagram/graph/structure
3. Save it in the '{OUTPUT_DIR}' directory with the filename above
4. Remove excess whitespace around the image
5. Ensure image is clear and high resolution

RECOMMENDED TOOLS:
- GIMP (free, cross-platform): https://www.gimp.org/
- macOS Preview (built-in)
- Windows Paint / Paint.NET
- Adobe Photoshop (if available)

TIPS:
- Maintain aspect ratio when cropping
- Remove unnecessary borders and margins
- For graphs, include axis labels and titles
- For structures, ensure all atoms and bonds are visible
- Save as PNG format for best quality

After cropping all images, run:
    make check-images

Or check manually that all files listed above are in the '{OUTPUT_DIR}' directory.
""")

def check_images():
    """Check which images have been created."""

    print("\n" + "="*70)
    print("IMAGE STATUS CHECK")
    print("="*70 + "\n")

    missing = []
    present = []

    for filename, page, description in IMAGE_LIST:
        filepath = os.path.join(OUTPUT_DIR, filename)
        if os.path.exists(filepath):
            size = os.path.getsize(filepath)
            present.append((filename, size))
            print(f"✓ {filename:<35} ({size:,} bytes)")
        else:
            missing.append((filename, page, description))
            print(f"✗ {filename:<35} MISSING (from page {page})")

    print("\n" + "="*70)
    print(f"Summary: {len(present)} present, {len(missing)} missing")
    print("="*70)

    if missing:
        print("\nMissing images:")
        for filename, page, description in missing:
            print(f"  - {filename} (page {page}): {description}")
        print(f"\nExtract these from the full page images in '{FULL_PAGES_DIR}'")
    else:
        print("\n✓ All images are present! You can now render the document.")
        print("  Run: quarto render 2019-hsc-chemistry.qmd")

    return len(missing) == 0

def main():
    """Main function."""

    print("="*70)
    print("2019 HSC CHEMISTRY - IMAGE EXTRACTION TOOL")
    print("="*70)

    import sys

    if len(sys.argv) > 1 and sys.argv[1] == "check":
        check_images()
    else:
        success = extract_pages()
        if success:
            print_instructions()
            print("\n" + "="*70)
            print("To check image status later, run:")
            print("    python extract_images.py check")
            print("="*70)

if __name__ == "__main__":
    main()
