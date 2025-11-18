#!/usr/bin/env python3
"""
Image Extraction Script for 2014 HSC Chemistry Exam
Extracts images from the PDF for use in the Quarto conversion

Requirements:
    pip install pdf2image Pillow

Usage:
    python extract_images.py
"""

from pdf2image import convert_from_path
from pathlib import Path
import sys

# PDF source file
PDF_FILE = "chemistry-hsc-exam-2014_archive.pdf"
OUTPUT_DIR = "images"

# Image extraction specifications
# Format: (filename, page_number, description)
IMAGES_TO_EXTRACT = [
    # Section I - Part A (Multiple Choice)
    ("q2-structure.png", 2, "Structural formula of halogenated propane"),
    ("q8-ph-temperature-graph.png", 6, "Graph: pH vs temperature for weak acid"),
    ("q9-structures.png", 7, "Four structural formulas W, X, Y, Z"),
    ("q11-coordinate-bonds.png", 8, "Lewis structures showing coordinate bonding"),
    ("q12-ph-scale.png", 8, "pH scale with substances marked"),
    ("q13-ammonia-graphs.png", 9, "Four graphs of ammonia concentration vs time"),
    ("q18-nylon66.png", 11, "Nylon 6,6 polymer structure and monomers"),
    ("q20-yield-graph.png", 12, "Graph: yield of Z vs temperature at different pressures"),

    # Section I - Part B (Extended Response)
    ("q22-apparatus.png", 14, "Spirit burner experimental apparatus"),
    ("q22a-graph-grid.png", 15, "Empty graph grid for heat of combustion"),
    ("q23-town-diagram.png", 16, "Town water supply diagram with contaminant sources"),
    ("q28-galvanic-cell.png", 21, "Galvanic cell with unknown metal X"),
    ("q29-gas-jar.png", 22, "Gas jar experiment with burning sulfur"),

    # Section II - Elective Questions
    ("q32a-sulfuric-acid.png", 26, "Sulfuric acid drops on steel and glass"),
    ("q33a-pipe-layers.png", 28, "Pipe cross-section showing protective layers"),
    ("q33c-chloride-graph.png", 29, "Graph: chloride concentration over time"),
    ("q34a-neuromuscular-junction.png", 30, "Neuromuscular junction diagram"),
    ("q34c-glycogen-graph.png", 31, "Glycogen molecular mass distribution"),
    ("q35a-ionisation-graph.png", 33, "Successive ionization energies of aluminium"),
    ("q35c-electron-config.png", 34, "Electron configuration table for titanium"),
    ("q36a-blood-collection.png", 35, "Forensic scientist collecting blood sample"),
    ("q36b-dipeptide.png", 35, "Dipeptide hydrolysis equation"),
    ("q36c-mass-spectrum.png", 36, "Mass spectrum of unknown substance"),
]

def check_requirements():
    """Check if required packages are installed"""
    try:
        import pdf2image
        from PIL import Image
        return True
    except ImportError as e:
        print(f"Error: Missing required package")
        print(f"Please install: pip install pdf2image Pillow")
        print(f"Details: {e}")
        return False

def create_output_directory():
    """Create the output directory if it doesn't exist"""
    output_path = Path(OUTPUT_DIR)
    output_path.mkdir(exist_ok=True)
    print(f"Output directory: {output_path.absolute()}")
    return output_path

def extract_pages():
    """Extract full pages as images for manual cropping"""
    pdf_path = Path(PDF_FILE)

    if not pdf_path.exists():
        print(f"Error: PDF file not found: {pdf_path}")
        print(f"Please ensure {PDF_FILE} is in the current directory")
        return False

    output_path = create_output_directory()

    print(f"\nExtracting pages from: {pdf_path}")
    print(f"This will create full-page images that you can crop manually.\n")

    # Get unique page numbers
    pages_needed = sorted(set(page for _, page, _ in IMAGES_TO_EXTRACT))

    print(f"Pages to extract: {pages_needed}\n")

    try:
        # Convert specific pages to images
        print("Converting PDF pages to images (this may take a moment)...")
        images = convert_from_path(
            pdf_path,
            dpi=300,  # High quality
            first_page=min(pages_needed),
            last_page=max(pages_needed)
        )

        # Save each page
        page_offset = min(pages_needed) - 1
        for i, page_num in enumerate(pages_needed):
            actual_index = i
            filename = f"page_{page_num:02d}.png"
            output_file = output_path / filename

            if actual_index < len(images):
                images[actual_index].save(output_file, "PNG")
                print(f"✓ Saved: {filename}")
            else:
                print(f"✗ Warning: Could not extract page {page_num}")

        print(f"\n✓ Extracted {len(images)} pages to {output_path}/")
        return True

    except Exception as e:
        print(f"Error during extraction: {e}")
        return False

def print_extraction_guide():
    """Print a guide for manual image cropping"""
    print("\n" + "="*70)
    print("MANUAL CROPPING GUIDE")
    print("="*70)
    print("\nThe full pages have been extracted. Now you need to:")
    print("1. Open each page image in an image editor")
    print("2. Crop the specific image/diagram for each question")
    print("3. Save with the correct filename\n")

    print("Required Images and Locations:")
    print("-" * 70)

    current_page = None
    for filename, page, description in IMAGES_TO_EXTRACT:
        if page != current_page:
            print(f"\nPage {page}:")
            current_page = page
        print(f"  → {filename:35s} - {description}")

    print("\n" + "="*70)
    print("After cropping all images, run: make check-images")
    print("="*70 + "\n")

def create_images_readme():
    """Create a README file in the images directory"""
    output_path = Path(OUTPUT_DIR)
    readme_file = output_path / "README.md"

    content = """# Images for 2014 HSC Chemistry Exam

This directory contains images extracted from the original PDF exam paper.

## Required Images

| Filename | Question | Page | Description |
|----------|----------|------|-------------|
"""

    for filename, page, description in IMAGES_TO_EXTRACT:
        question = filename.split('-')[0].replace('q', 'Q')
        content += f"| `{filename}` | {question} | {page} | {description} |\n"

    content += """
## Extraction Status

After extracting an image, you can mark it here:

- [ ] All Section I Part A images (Q2, Q8, Q9, Q11, Q12, Q13, Q18, Q20)
- [ ] All Section I Part B images (Q22, Q23, Q28, Q29)
- [ ] All Section II images (Q32-Q36)

## Notes

- All images should be PNG format
- Use high resolution (300 DPI minimum)
- Crop tightly around the image content
- Ensure text is readable
- Preserve aspect ratios

## Quick Check

Run this command to see which images are missing:

```bash
make check-images
```

Or manually check:

```bash
ls -1 *.png 2>/dev/null | wc -l
```

Should show 22 files (21 question images + 1 logo).
"""

    readme_file.write_text(content)
    print(f"✓ Created {readme_file}")

def main():
    """Main execution function"""
    print("="*70)
    print("2014 HSC Chemistry Exam - Image Extraction Script")
    print("="*70 + "\n")

    # Check requirements
    if not check_requirements():
        return 1

    # Check if PDF exists
    if not Path(PDF_FILE).exists():
        print(f"Error: PDF file '{PDF_FILE}' not found!")
        print(f"Please place the PDF in the current directory and try again.")
        return 1

    # Extract pages
    print(f"Found PDF: {PDF_FILE}")
    print(f"Total images needed: {len(IMAGES_TO_EXTRACT)}\n")

    response = input("Extract full pages for manual cropping? [Y/n]: ").strip().lower()
    if response in ['', 'y', 'yes']:
        if extract_pages():
            create_images_readme()
            print_extraction_guide()
            return 0
        else:
            return 1
    else:
        print("Extraction cancelled.")
        return 0

if __name__ == "__main__":
    sys.exit(main())
