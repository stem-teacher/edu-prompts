#!/usr/bin/env python3
"""
Image Extraction Helper for 2018 HSC Chemistry Exam
This script assists in extracting images from the PDF for the Quarto conversion.
"""

import os
import sys
from pathlib import Path

# Image extraction data
IMAGES_TO_EXTRACT = [
    {
        'filename': 'q7-weak-acid-ionisation.png',
        'question': 7,
        'page': 3,
        'description': 'Four beaker diagrams (A-D) showing ionisation of weak acid with key',
        'notes': 'Includes KEY showing water molecule and molecule of weak acid symbols'
    },
    {
        'filename': 'q17-ph-buffer-graphs.png',
        'question': 17,
        'page': 7,
        'description': 'Four graphs (A-D) showing pH vs CO2 concentration',
        'notes': 'Each graph shows water and water+buffer curves'
    },
    {
        'filename': 'q19-galvanic-cells.png',
        'question': 19,
        'page': 8,
        'description': 'Four galvanic cell diagrams (A-D)',
        'notes': 'Shows Cu-Mg, Cu-Cu, Cu-Pt, and Cu-Fe electrode combinations'
    },
    {
        'filename': 'q24-fermentation-apparatus.png',
        'question': 24,
        'page': 14,
        'description': 'Fermentation apparatus with gas syringe',
        'notes': 'Shows flask with yeast in glucose solution connected to gas syringe'
    },
    {
        'filename': 'q25-kinetic-energy-graph.png',
        'question': 25,
        'page': 15,
        'description': 'Kinetic energy distribution at two temperatures',
        'notes': 'Shows T1 (low) and T2 (high) temperature curves with EA marked'
    },
    {
        'filename': 'q27-cfc-structure.png',
        'question': 27,
        'page': 17,
        'description': 'Structural formula of chlorofluorocarbon compound',
        'notes': 'Shows H-C-C-H structure with Cl and F substituents'
    },
    {
        'filename': 'q28-camp-stove.png',
        'question': 28,
        'page': 18,
        'description': 'Camp stove diagram',
        'notes': 'Shows water pot, flame, butane canister, and clearance height'
    },
    {
        'filename': 'q28-graph-grid.png',
        'question': 28,
        'page': 18,
        'description': 'Empty graph grid',
        'notes': 'Grid for plotting CO concentration vs clearance height data'
    },
    {
        'filename': 'q32-electrolytic-cell.png',
        'question': 32,
        'page': 27,
        'description': 'Electrolytic cell diagram',
        'notes': 'Shows anode (+), cathode (-), and electrolyte with battery symbol'
    },
    {
        'filename': 'q33-dipeptide.png',
        'question': 33,
        'page': 29,
        'description': 'Dipeptide structural formula',
        'notes': 'Shows H2N-CH(CH3)-CO-NH-CH(CH2OH)-COOH structure'
    },
    {
        'filename': 'q33-energy-profile.png',
        'question': 33,
        'page': 30,
        'description': 'Energy profile for glucose combustion',
        'notes': 'Shows 181 kJ/mol activation energy and 2997 kJ/mol total energy release'
    },
    {
        'filename': 'q34-boron-config.png',
        'question': 34,
        'page': 31,
        'description': 'Electron configuration diagram for boron',
        'notes': 'Shows orbital box diagram with electron arrows'
    },
    {
        'filename': 'q35-mass-spectrometer.png',
        'question': 35,
        'page': 32,
        'description': 'Mass spectrometer schematic',
        'notes': 'Shows curved path with part A labelled (detector/magnetic field)'
    },
]

def print_header():
    """Print script header."""
    print("=" * 70)
    print("2018 HSC Chemistry Exam - Image Extraction Helper")
    print("=" * 70)
    print()

def check_pdf_exists():
    """Check if the source PDF exists."""
    pdf_path = Path("2018-hsc-chemistry-archive.pdf")
    if not pdf_path.exists():
        print("ERROR: Source PDF not found!")
        print(f"Expected: {pdf_path.absolute()}")
        print()
        print("Please ensure '2018-hsc-chemistry-archive.pdf' is in the current directory.")
        return False
    print(f"✓ Found source PDF: {pdf_path}")
    return True

def create_directories():
    """Create necessary directories."""
    dirs = ['images', 'images/pages']
    for dir_name in dirs:
        Path(dir_name).mkdir(parents=True, exist_ok=True)
    print(f"✓ Created directories: {', '.join(dirs)}")

def print_extraction_list():
    """Print list of images to extract."""
    print()
    print("IMAGES TO EXTRACT")
    print("-" * 70)
    print()

    for i, img in enumerate(IMAGES_TO_EXTRACT, 1):
        print(f"{i}. {img['filename']}")
        print(f"   Question: {img['question']} | Page: {img['page']}")
        print(f"   Description: {img['description']}")
        print(f"   Notes: {img['notes']}")
        print()

    print(f"Total images required: {len(IMAGES_TO_EXTRACT)}")
    print()

def check_extracted_images():
    """Check which images have been extracted."""
    print("EXTRACTION STATUS")
    print("-" * 70)
    print()

    images_dir = Path('images')
    extracted = []
    missing = []

    for img in IMAGES_TO_EXTRACT:
        img_path = images_dir / img['filename']
        if img_path.exists():
            size = img_path.stat().st_size
            extracted.append((img['filename'], size))
            status = f"✓ FOUND ({size:,} bytes)"
        else:
            missing.append(img['filename'])
            status = "✗ MISSING"

        print(f"{status:30s} {img['filename']}")

    print()
    print(f"Summary: {len(extracted)}/{len(IMAGES_TO_EXTRACT)} images extracted")

    if missing:
        print()
        print("Missing images:")
        for filename in missing:
            print(f"  - {filename}")

    return len(missing) == 0

def try_pdf2image():
    """Attempt to use pdf2image to extract page images."""
    try:
        from pdf2image import convert_from_path
        print()
        print("PDF2IMAGE METHOD")
        print("-" * 70)
        print()
        print("Converting specific pages to images for manual cropping...")

        # Get unique pages
        pages_needed = sorted(set(img['page'] for img in IMAGES_TO_EXTRACT))

        print(f"Pages to convert: {', '.join(map(str, pages_needed))}")
        print()

        # Convert pages
        for page_num in pages_needed:
            print(f"Converting page {page_num}...", end=' ')
            try:
                images = convert_from_path(
                    '2018-hsc-chemistry-archive.pdf',
                    first_page=page_num,
                    last_page=page_num,
                    dpi=200
                )

                if images:
                    output_path = f'images/pages/page-{page_num:02d}.png'
                    images[0].save(output_path, 'PNG')
                    print(f"✓ Saved to {output_path}")
                else:
                    print("✗ No image generated")
            except Exception as e:
                print(f"✗ Error: {e}")

        print()
        print("Page images saved to images/pages/")
        print("You can now manually crop these images to extract the required figures.")
        return True

    except ImportError:
        print()
        print("pdf2image library not found.")
        print("To install: pip install pdf2image")
        print("Note: Also requires poppler-utils to be installed on your system")
        return False
    except Exception as e:
        print(f"Error using pdf2image: {e}")
        return False

def print_manual_instructions():
    """Print manual extraction instructions."""
    print()
    print("MANUAL EXTRACTION INSTRUCTIONS")
    print("-" * 70)
    print()
    print("1. Open 2018-hsc-chemistry-archive.pdf in a PDF viewer")
    print("2. For each image in the list above:")
    print("   a. Navigate to the specified page")
    print("   b. Use screenshot tool or PDF annotation to select the image")
    print("   c. Save to images/ with the exact filename shown")
    print("   d. Recommended format: PNG, 150+ DPI")
    print()
    print("3. Run this script again to check extraction status:")
    print("   python3 extract_images.py --check")
    print()

def print_pdfimages_instructions():
    """Print pdfimages extraction instructions."""
    print()
    print("PDFIMAGES METHOD (Command Line)")
    print("-" * 70)
    print()
    print("If you have poppler-utils installed, you can extract all images:")
    print()
    print("  pdfimages -png 2018-hsc-chemistry-archive.pdf images/raw/img")
    print()
    print("This will extract all images as img-000.png, img-001.png, etc.")
    print("You'll need to identify and rename them according to the list above.")
    print()

def main():
    """Main function."""
    print_header()

    # Check command line arguments
    if len(sys.argv) > 1 and sys.argv[1] == '--check':
        # Just check status
        if not check_pdf_exists():
            return 1
        create_directories()
        all_present = check_extracted_images()
        return 0 if all_present else 1

    # Full run
    if not check_pdf_exists():
        return 1

    create_directories()
    print_extraction_list()

    # Try automated extraction
    pdf2image_worked = try_pdf2image()

    if not pdf2image_worked:
        print_manual_instructions()
        print_pdfimages_instructions()

    # Check status
    print()
    check_extracted_images()

    print()
    print("=" * 70)
    print("Next steps:")
    print("1. Extract/crop the images as listed above")
    print("2. Run: python3 extract_images.py --check")
    print("3. When all images are ready, run: make render")
    print("=" * 70)
    print()

    return 0

if __name__ == '__main__':
    sys.exit(main())
