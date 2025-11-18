#!/usr/bin/env python3
"""
Image Extraction Script for 2020 HSC Chemistry Exam
Extracts specific pages from the PDF for manual cropping of diagrams and graphs.
"""

import os
from pathlib import Path

try:
    from pdf2image import convert_from_path
    from PIL import Image
except ImportError:
    print("Required packages not installed.")
    print("Please run: pip install pdf2image Pillow")
    print("You may also need to install poppler:")
    print("  - Ubuntu/Debian: sudo apt-get install poppler-utils")
    print("  - macOS: brew install poppler")
    print("  - Windows: Download from https://github.com/oschwartz10612/poppler-windows/releases/")
    exit(1)

# Configuration
PDF_FILE = "2020-hsc-chemistry.pdf"
OUTPUT_DIR = "images/pages"
DPI = 300  # High quality for clear diagrams

# Define which pages need image extraction
# Format: (page_number, description)
PAGES_TO_EXTRACT = [
    (1, "title-page"),  # NSW logo
    (2, "q2-indicators"),  # Question 2 table
    (3, "q5-nmr"),  # Question 5 NMR spectrum
    (4, "q6-q7-structures"),  # Questions 6 and 7
    (5, "q8-titration"),  # Question 8 pH curve
    (6, "q9-structures"),  # Question 9 structures
    (7, "q12-polymer"),  # Question 12 polymer
    (8, "q15-chloroacetamide"),  # Question 15 structure
    (9, "q16-q17"),  # Questions 16 and 17
    (10, "q19-rates"),  # Question 19 rate graphs
    (11, "q20-solubility"),  # Question 20 graph
    (15, "q21-mass-spec"),  # Question 21 mass spectrum
    (17, "q23-flowchart"),  # Question 23 flowchart
    (18, "q24-biodiesel"),  # Question 24 reaction
    (21, "q25-graph-paper"),  # Question 25 graph
    (22, "q26-energy"),  # Question 26 energy profile
    (23, "q27-equation"),  # Question 27 equation boxes
    (25, "q29-flowchart-structures"),  # Question 29
    (26, "q30-ir"),  # Question 30 IR spectrum
    (32, "q34-ph-graph"),  # Question 34 graph
]

# Image extraction instructions
IMAGE_INSTRUCTIONS = {
    "q2-indicator-table.png": {
        "page": 2,
        "description": "Table with 4 rows showing indicators, colors, and pH ranges",
        "location": "Middle of page"
    },
    "q5-nmr-spectrum.png": {
        "page": 3,
        "description": "13C NMR spectrum with 2 peaks around 15 and 40 ppm",
        "location": "Center of page"
    },
    "q6-structure.png": {
        "page": 4,
        "description": "Structural formula with Br, F, H, OH groups",
        "location": "Top third of page"
    },
    "q7-isomers.png": {
        "page": 4,
        "description": "2x2 grid of structural formulas (Compounds 1-4)",
        "location": "Bottom half of page"
    },
    "q8-titration-curve.png": {
        "page": 5,
        "description": "pH vs Volume curve, pH from 0-12, volume 0-100 mL",
        "location": "Center of page"
    },
    "q9-structures.png": {
        "page": 6,
        "description": "Four structural formulas labeled A-D",
        "location": "Full question area"
    },
    "q12-polymer.png": {
        "page": 7,
        "description": "Polymer repeating unit with benzene ring and ester linkages",
        "location": "Top of question"
    },
    "q15-chloroacetamide.png": {
        "page": 8,
        "description": "Molecular structure of chloroacetamide",
        "location": "Middle of question"
    },
    "q16-equilibrium.png": {
        "page": 9,
        "description": "Yield vs Temperature graph with 3 pressure curves",
        "location": "Top of page"
    },
    "q17-apparatus.png": {
        "page": 9,
        "description": "Beaker diagram with lid, CuSO4 solution and solid",
        "location": "Middle of page"
    },
    "q19-rate-graphs.png": {
        "page": 10,
        "description": "Four rate vs time graphs labeled A-D in 2x2 grid",
        "location": "Bottom half of page"
    },
    "q20-solubility-graph.png": {
        "page": 11,
        "description": "Graph showing [CrO4^2-] vs [Ag+] relationship",
        "location": "Center of page"
    },
    "q21-mass-spectrum.png": {
        "page": 15,
        "description": "Mass spectrum showing relative intensity vs m/z",
        "location": "Top of question"
    },
    "q23-flowchart.png": {
        "page": 17,
        "description": "Industrial process flowchart with reactors and separators",
        "location": "Center of page"
    },
    "q24-biodiesel-reaction.png": {
        "page": 18,
        "description": "Chemical equation showing transesterification reaction",
        "location": "Top of question"
    },
    "q25-graph-paper.png": {
        "page": 21,
        "description": "Empty graph paper grid",
        "location": "Full page grid"
    },
    "q26-energy-profile.png": {
        "page": 22,
        "description": "Energy profile diagram showing N2,O2 -> NO",
        "location": "Middle of question"
    },
    "q27-equation.png": {
        "page": 23,
        "description": "Two empty boxes for structural formulas with + H2O <=> + OH-",
        "location": "Part (a)"
    },
    "q29-flowchart.png": {
        "page": 25,
        "description": "Reaction flowchart with compounds A-E and conditions",
        "location": "Top of page"
    },
    "q29-structures.png": {
        "page": 25,
        "description": "Five empty boxes labeled A-E for structural formulas",
        "location": "Bottom of page"
    },
    "q30-ir-spectrum.png": {
        "page": 26,
        "description": "IR spectrum showing transmittance vs wavenumber",
        "location": "Top third"
    },
    "q30-h-nmr.png": {
        "page": 26,
        "description": "1H NMR spectrum with peaks and integration",
        "location": "Bottom left"
    },
    "q30-c-nmr.png": {
        "page": 26,
        "description": "13C NMR spectrum",
        "location": "Bottom right"
    },
    "q34-ph-graph.png": {
        "page": 32,
        "description": "pH vs concentration graph for acrylic acid and HCl",
        "location": "Top of question"
    },
}


def create_directories():
    """Create necessary directories for image extraction."""
    Path(OUTPUT_DIR).mkdir(parents=True, exist_ok=True)
    Path("images").mkdir(exist_ok=True)
    print(f"Created directory: {OUTPUT_DIR}")


def extract_pages():
    """Extract specified pages from PDF as images."""
    if not os.path.exists(PDF_FILE):
        print(f"ERROR: {PDF_FILE} not found!")
        print(f"Please ensure the PDF is in the current directory: {os.getcwd()}")
        return False

    print(f"Extracting pages from {PDF_FILE}...")
    print(f"Output directory: {OUTPUT_DIR}")
    print(f"DPI: {DPI}")
    print()

    for page_num, description in PAGES_TO_EXTRACT:
        try:
            print(f"Extracting page {page_num} ({description})...")

            # Convert single page to image
            images = convert_from_path(
                PDF_FILE,
                dpi=DPI,
                first_page=page_num,
                last_page=page_num
            )

            if images:
                output_file = f"{OUTPUT_DIR}/page-{page_num:02d}-{description}.png"
                images[0].save(output_file, "PNG")
                print(f"  Saved: {output_file}")

        except Exception as e:
            print(f"  ERROR extracting page {page_num}: {e}")

    print()
    print("="*70)
    print("Page extraction complete!")
    print("="*70)
    return True


def print_cropping_instructions():
    """Print detailed instructions for cropping images."""
    print("\n" + "="*70)
    print("MANUAL CROPPING INSTRUCTIONS")
    print("="*70)
    print()
    print("The pages have been extracted to the 'images/pages/' directory.")
    print("You now need to crop the specific diagrams/graphs from each page.")
    print()
    print("For each image below:")
    print("  1. Open the corresponding page image")
    print("  2. Crop the specified diagram/graph")
    print("  3. Save to images/ with the exact filename shown")
    print()
    print("-"*70)
    print()

    for filename, info in sorted(IMAGE_INSTRUCTIONS.items()):
        print(f"FILE: images/{filename}")
        print(f"  Source: Page {info['page']}")
        print(f"  Description: {info['description']}")
        print(f"  Location: {info['location']}")
        print()

    print("-"*70)
    print()
    print("TIPS:")
    print("  - Use an image editor like GIMP, Photoshop, or Preview (Mac)")
    print("  - Crop tightly around diagrams but include axis labels and titles")
    print("  - Save as PNG format for best quality")
    print("  - Maintain high resolution (300 DPI recommended)")
    print()


def create_images_readme():
    """Create a README in the images directory."""
    readme_content = """# Images Directory

This directory contains all extracted images for the 2020 HSC Chemistry exam conversion.

## Required Images (26 total)

### Section I - Multiple Choice
- nsw-logo.png
- q2-indicator-table.png
- q5-nmr-spectrum.png
- q6-structure.png
- q7-isomers.png
- q8-titration-curve.png
- q9-structures.png
- q12-polymer.png
- q15-chloroacetamide.png
- q16-equilibrium.png
- q17-apparatus.png
- q19-rate-graphs.png
- q20-solubility-graph.png

### Section II - Extended Response
- q21-mass-spectrum.png
- q23-flowchart.png
- q24-biodiesel-reaction.png
- q25-graph-paper.png
- q26-energy-profile.png
- q27-equation.png
- q29-flowchart.png
- q29-structures.png
- q30-ir-spectrum.png
- q30-h-nmr.png
- q30-c-nmr.png
- q34-ph-graph.png

## Extraction Status

Run `make check-images` from the parent directory to verify all images are present.

## Source Pages

Full page images are available in the `pages/` subdirectory for manual cropping.
"""

    with open("images/README.md", "w") as f:
        f.write(readme_content)

    print("Created images/README.md")


def main():
    """Main execution function."""
    print("="*70)
    print("2020 HSC Chemistry Exam - Image Extraction Script")
    print("="*70)
    print()

    create_directories()

    if extract_pages():
        create_images_readme()
        print_cropping_instructions()

        print("="*70)
        print("NEXT STEPS:")
        print("="*70)
        print()
        print("1. Manually crop images from the extracted pages")
        print("   (See instructions above)")
        print()
        print("2. Download NSW Government logo:")
        print("   Save as: images/nsw-logo.png")
        print()
        print("3. Verify all images:")
        print("   make check-images")
        print()
        print("4. Render the document:")
        print("   make render")
        print()
    else:
        print("\nImage extraction failed. Please check the error messages above.")


if __name__ == "__main__":
    main()
