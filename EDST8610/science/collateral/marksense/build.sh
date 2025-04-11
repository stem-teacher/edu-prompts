#!/bin/bash

# Define variables
FILENAME=$1
SOURCE_DIR=$(pwd)
BUILD_DIR="$SOURCE_DIR/build"

# Ensure build directory exists
mkdir -p $BUILD_DIR


# Copy the generated content.tex and other files to the build directory
cp $SOURCE_DIR/$FILENAME.tex $BUILD_DIR/
cp -R $SOURCE_DIR/img $BUILD_DIR/

# Change to the build directory for processing
cd $BUILD_DIR

# Run LaTeX (since we're already in the build directory, output goes here)
pdflatex -interaction=nonstopmode $FILENAME.tex

# Run biber
biber $FILENAME

# Run LaTeX again twice to resolve references
pdflatex -interaction=nonstopmode $FILENAME.tex
pdflatex -interaction=nonstopmode $FILENAME.tex

# Copy the final PDF back to the source directory
cp $FILENAME.pdf $SOURCE_DIR/

# Print completion message
echo "Build complete! Output files are in the 'build' directory."
echo "The PDF has also been copied to the source directory for convenience."
