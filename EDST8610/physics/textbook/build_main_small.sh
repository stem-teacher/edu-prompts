#!/bin/bash
# Build script for main_small.tex

# Define variables
SOURCE_DIR="/Volumes/second-store/ai/edu-prompts/EDST8610/physics/textbook"
BUILD_DIR="$SOURCE_DIR/build"

# Ensure build directory exists
mkdir -p $BUILD_DIR

# Create a fixed version of chapter4.tex
echo "Fixing chapter4.tex for \keyword{} command..."
cp "$SOURCE_DIR/chapters/chapter4.tex" "$SOURCE_DIR/chapters/chapter4_original.tex"
sed 's/\\keyword{/\\textbf{/g' "$SOURCE_DIR/chapters/chapter4.tex" > "$SOURCE_DIR/chapters/chapter4_fixed.tex"

# Copy the fixed chapter4 for use
cp "$SOURCE_DIR/chapters/chapter4_fixed.tex" "$SOURCE_DIR/chapters/chapter4.tex"

# Copy files to the build directory
echo "Copying files to build directory..."
cp "$SOURCE_DIR/main_small.tex" "$BUILD_DIR/"
cp "$SOURCE_DIR/introduction.tex" "$BUILD_DIR/"
mkdir -p "$BUILD_DIR/chapters"
cp "$SOURCE_DIR/chapters/chapter4.tex" "$BUILD_DIR/chapters/"
cp -R "$SOURCE_DIR/chapters"/*.png "$BUILD_DIR/chapters/" 2>/dev/null || :
cp -R "$SOURCE_DIR/chapters"/*.jpg "$BUILD_DIR/chapters/" 2>/dev/null || :
cp -R "$SOURCE_DIR/chapters"/*.webp "$BUILD_DIR/chapters/" 2>/dev/null || :

# Change to the build directory for processing
cd "$BUILD_DIR"

# Run LaTeX (since we're already in the build directory, output goes here)
echo "Running pdflatex first pass..."
pdflatex -interaction=nonstopmode main_small.tex

# Run biber if needed (only if references are present)
if [ -f "main_small.bcf" ]; then
    echo "Running biber..."
    biber main_small
fi

# Run LaTeX again twice to resolve references
echo "Running pdflatex second pass..."
pdflatex -interaction=nonstopmode main_small.tex
echo "Running pdflatex final pass..."
pdflatex -interaction=nonstopmode main_small.tex

# Copy the final PDF back to the source directory
echo "Copying PDF to source directory..."
cp main_small.pdf "$SOURCE_DIR/"

# Restore the original chapter4.tex
echo "Restoring original chapter4.tex..."
cp "$SOURCE_DIR/chapters/chapter4_original.tex" "$SOURCE_DIR/chapters/chapter4.tex"

# Print completion message
echo "Build complete! Output files are in the 'build' directory."
echo "The PDF has also been copied to the source directory for convenience."
