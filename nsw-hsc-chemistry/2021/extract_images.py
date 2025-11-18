#!/usr/bin/env python3
"""
Image Extraction Script for 2021 HSC Chemistry Exam
This script helps extract images from the PDF for use in the Quarto document.
"""

import os
from pathlib import Path

# Image extraction information
IMAGES = [
    # Section I - Multiple Choice
    {
        "filename": "q3-structure.png",
        "question": 3,
        "page": 3,
        "description": "Structural formula of N-methylpropanamide",
        "notes": "Molecule with amide group"
    },
    {
        "filename": "q4-ethyl-pentanoate.png",
        "question": 4,
        "page": 4,
        "description": "Structural formula of ethyl pentanoate",
        "notes": "Ester structure"
    },
    {
        "filename": "q8-soap-emulsion.png",
        "question": 8,
        "page": 5,
        "description": "Four diagrams (A-D) showing soap anion arrangements",
        "notes": "Contains water/oil droplets with soap molecules"
    },
    {
        "filename": "q9-paracetamol-spectrum.png",
        "question": 9,
        "page": 6,
        "description": "UV absorption spectrum of paracetamol",
        "notes": "Single spectrum at top of page"
    },
    {
        "filename": "q9-solvent-spectra.png",
        "question": 9,
        "page": 6,
        "description": "UV absorption spectra for four solvents (A-D)",
        "notes": "Four separate graphs labeled Solvent A, B, C, D"
    },
    {
        "filename": "q10-polymer-structure.png",
        "question": 10,
        "page": 7,
        "description": "Polymer chain structure",
        "notes": "Repeating ester units"
    },
    {
        "filename": "q10-monomer-options.png",
        "question": 10,
        "page": 7,
        "description": "Four structural formulas (A-D) for monomer options",
        "notes": "Various hydroxy acid structures"
    },
    {
        "filename": "q12-spectra.png",
        "question": 12,
        "page": 8,
        "description": "Mass spectrum and Carbon-13 NMR",
        "notes": "Two spectra stacked vertically"
    },
    {
        "filename": "q12-structures.png",
        "question": 12,
        "page": 9,
        "description": "Four structural formulas (A-D)",
        "notes": "Ketone/aldehyde structures"
    },
    {
        "filename": "q14-calibration-curve.png",
        "question": 14,
        "page": 10,
        "description": "Calibration curve for nickel analysis",
        "notes": "Absorbance vs Concentration graph"
    },
    {
        "filename": "q16-titration-curve.png",
        "question": 16,
        "page": 11,
        "description": "Titration curve (pH vs titre volume)",
        "notes": "Shows polyprotic acid behavior"
    },

    # Section II - Extended Response
    {
        "filename": "q25-apparatus.png",
        "question": 25,
        "page": 18,
        "description": "Fermentation apparatus with gas syringe",
        "notes": "Conical flask with rubber stopper and syringe"
    },
    {
        "filename": "q26-flowchart.png",
        "question": 26,
        "page": 19,
        "description": "Reaction flow chart from 2-methylprop-1-ene",
        "notes": "Shows hydration and oxidation pathways with empty boxes A, B, C, D"
    },
    {
        "filename": "q29-ir-spectrum.png",
        "question": 29,
        "page": 22,
        "description": "Infrared spectrum of pentane-1,5-diamine",
        "notes": "Wavenumber vs % transmittance"
    },
    {
        "filename": "q29-mass-spectrum.png",
        "question": 29,
        "page": 22,
        "description": "Mass spectrum of pentane-1,5-diamine",
        "notes": "m/z vs relative intensity, molecular ion 102"
    },
    {
        "filename": "q29-c13-nmr.png",
        "question": 29,
        "page": 22,
        "description": "Carbon-13 NMR spectrum",
        "notes": "Chemical shift (ppm) spectrum"
    },
    {
        "filename": "q29-h-nmr.png",
        "question": 29,
        "page": 23,
        "description": "Proton NMR spectrum",
        "notes": "Shows triplet, quintet, and overlapping quintets"
    },
    {
        "filename": "q33-graph.png",
        "question": 33,
        "page": 28,
        "description": "Graph showing ΔH and TΔS vs temperature",
        "notes": "Two lines with temperatures T1, T2, T3 marked"
    },
    {
        "filename": "q34-ph-graph.png",
        "question": 34,
        "page": 29,
        "description": "pH vs time graph for HCl in water and solutions",
        "notes": "Three curves labeled Water, X, and Y"
    },
]

def create_images_directory():
    """Create the images directory if it doesn't exist."""
    images_dir = Path("images")
    images_dir.mkdir(exist_ok=True)
    print(f"✓ Images directory created/verified: {images_dir.absolute()}")
    return images_dir

def print_extraction_guide():
    """Print a guide for manual image extraction."""
    print("\n" + "="*80)
    print("2021 HSC CHEMISTRY - IMAGE EXTRACTION GUIDE")
    print("="*80)
    print(f"\nTotal images required: {len(IMAGES)}")
    print("\nMANUAL EXTRACTION INSTRUCTIONS:")
    print("-" * 80)

    for i, img in enumerate(IMAGES, 1):
        print(f"\n[{i}/{len(IMAGES)}] {img['filename']}")
        print(f"    Question: {img['question']}")
        print(f"    Page:     {img['page']}")
        print(f"    Desc:     {img['description']}")
        print(f"    Notes:    {img['notes']}")
        print(f"    → Save to: images/{img['filename']}")

    print("\n" + "="*80)

def create_images_readme():
    """Create a README in the images directory."""
    images_dir = Path("images")
    readme_path = images_dir / "README.md"

    content = """# Images for 2021 HSC Chemistry Exam

This directory contains all images extracted from the 2021 HSC Chemistry exam PDF.

## Required Images (19 total)

### Extraction Checklist

"""

    for img in IMAGES:
        content += f"- [ ] `{img['filename']}` - Q{img['question']}, Page {img['page']}: {img['description']}\n"

    content += """
## Extraction Methods

### Method 1: Screenshot Tool (Recommended)

1. Open the PDF in a viewer
2. Navigate to the page number listed above
3. Use a screenshot tool to capture the specific image
4. Crop to remove unnecessary whitespace
5. Save as PNG with the exact filename listed

### Method 2: PDF Export

1. Open PDF in Adobe Acrobat or similar
2. Use "Export to Images" feature
3. Export specific pages
4. Crop and save individual images

### Method 3: Command Line (pdfimages)

```bash
pdfimages -png ../2021-hsc-chemistry.pdf page
# Then manually crop and rename files
```

## Image Requirements

- **Format**: PNG (preferred) or high-quality JPG
- **Resolution**: Minimum 300 DPI for print quality
- **Cropping**: Remove excess whitespace but keep all relevant content
- **Naming**: Use exact filenames as listed above (case-sensitive)

## Verification

After extraction, run from parent directory:

```bash
make check-images
```

This will verify all required images are present.
"""

    readme_path.write_text(content)
    print(f"✓ Created images/README.md")

def check_existing_images():
    """Check which images already exist."""
    images_dir = Path("images")
    if not images_dir.exists():
        return []

    existing = []
    for img in IMAGES:
        img_path = images_dir / img['filename']
        if img_path.exists():
            existing.append(img['filename'])

    return existing

def main():
    """Main function to run the extraction helper."""
    print("2021 HSC Chemistry - Image Extraction Helper")
    print("=" * 80)

    # Create images directory
    images_dir = create_images_directory()

    # Create README in images directory
    create_images_readme()

    # Check for existing images
    existing = check_existing_images()
    if existing:
        print(f"\n✓ Found {len(existing)} existing images:")
        for img in existing:
            print(f"  - {img}")
    else:
        print("\n⚠ No images found yet")

    missing = len(IMAGES) - len(existing)
    if missing > 0:
        print(f"\n⚠ Still need to extract {missing} images")
    else:
        print("\n✓ All images extracted!")

    # Print extraction guide
    print_extraction_guide()

    print("\nNEXT STEPS:")
    print("-" * 80)
    print("1. Open 2021-hsc-chemistry.pdf in a PDF viewer")
    print("2. For each image listed above:")
    print("   - Navigate to the specified page")
    print("   - Screenshot/export the image")
    print("   - Crop to show only the relevant content")
    print("   - Save to images/ with the exact filename")
    print("3. Run 'make check-images' to verify all images are present")
    print("4. Run 'make render' to build the Quarto document")
    print("=" * 80)

if __name__ == "__main__":
    # Try to use pdf2image if available
    try:
        from pdf2image import convert_from_path
        print("✓ pdf2image is available")
        print("  You can use convert_from_path() for automated extraction")
        print("  However, manual extraction is recommended for best quality\n")
    except ImportError:
        print("ℹ pdf2image not installed (optional)")
        print("  Install with: pip install pdf2image")
        print("  Manual extraction is recommended anyway\n")

    main()
