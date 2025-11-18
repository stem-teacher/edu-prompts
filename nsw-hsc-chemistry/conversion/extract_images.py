#!/usr/bin/env python3
"""
Image Extraction Script for HSC Chemistry 2025 Exam

This script helps extract images from the PDF exam paper.
Requires: pdf2image, Pillow

Install with: pip install pdf2image Pillow
"""

from pdf2image import convert_from_path
from PIL import Image
import os

# Define the images we need and their approximate page numbers
IMAGE_INFO = {
    'q1-diagram.png': {'page': 2, 'bbox': None},  # Will need manual cropping
    'q3-structures.png': {'page': 3, 'bbox': None},
    'q5-graphs.png': {'page': 4, 'bbox': None},
    'q15-flowchart.png': {'page': 9, 'bbox': None},
    'q15-options.png': {'page': 9, 'bbox': None},
    'q17-structures.png': {'page': 10, 'bbox': None},
    'q20-calibration.png': {'page': 11, 'bbox': None},
    'q26-grid.png': {'page': 19, 'bbox': None},
    'q27-equilibrium.png': {'page': 21, 'bbox': None},
    'q28-polymers.png': {'page': 22, 'bbox': None},
    'q28-monomer.png': {'page': 22, 'bbox': None},
    'q34-titration.png': {'page': 30, 'bbox': None},
    'q35-energy.png': {'page': 32, 'bbox': None},
}

def extract_images(pdf_path, output_dir='images', dpi=300):
    """
    Extract images from PDF pages
    
    Args:
        pdf_path: Path to the PDF file
        output_dir: Directory to save extracted images
        dpi: Resolution for image extraction
    """
    
    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)
    
    print(f"Converting PDF pages to images at {dpi} DPI...")
    
    # Get unique page numbers
    pages_needed = set(info['page'] for info in IMAGE_INFO.values())
    
    for page_num in sorted(pages_needed):
        print(f"Processing page {page_num}...")
        
        # Convert single page to image
        images = convert_from_path(
            pdf_path, 
            dpi=dpi, 
            first_page=page_num, 
            last_page=page_num
        )
        
        if images:
            img = images[0]
            
            # Save full page image for manual cropping
            full_page_path = os.path.join(output_dir, f'page_{page_num:03d}.png')
            img.save(full_page_path, 'PNG')
            print(f"  Saved full page: {full_page_path}")
            print(f"  You'll need to manually crop this to extract specific diagrams")
    
    print("\nImage extraction complete!")
    print("\nNext steps:")
    print("1. Open each page_XXX.png file")
    print("2. Crop the relevant diagram/graph")
    print("3. Save with the appropriate name from the list below:")
    print()
    for filename, info in sorted(IMAGE_INFO.items()):
        print(f"  - {filename} (from page {info['page']})")

def main():
    import sys
    
    if len(sys.argv) < 2:
        print("Usage: python extract_images.py <path_to_pdf>")
        print("\nExample:")
        print("  python extract_images.py 2025-hsc-chemistry.pdf")
        sys.exit(1)
    
    pdf_path = sys.argv[1]
    
    if not os.path.exists(pdf_path):
        print(f"Error: PDF file not found: {pdf_path}")
        sys.exit(1)
    
    extract_images(pdf_path)

if __name__ == '__main__':
    main()
