.PHONY: help check-images render clean extract-images

# Default target
help:
	@echo "2020 HSC Chemistry Exam - Makefile"
	@echo "=================================="
	@echo ""
	@echo "Available targets:"
	@echo "  make help           - Show this help message"
	@echo "  make check-images   - Verify all required images are present"
	@echo "  make extract-images - Run Python script to extract page images"
	@echo "  make render         - Render the Quarto document to PDF"
	@echo "  make clean          - Remove generated files"
	@echo "  make all            - Check images and render document"
	@echo ""
	@echo "Workflow:"
	@echo "  1. make extract-images  (extract pages from PDF)"
	@echo "  2. Manually crop images (see README.md)"
	@echo "  3. make check-images    (verify all images present)"
	@echo "  4. make render          (build the final PDF)"
	@echo ""

# List of all required images
IMAGES := images/nsw-logo.png \
          images/q2-indicator-table.png \
          images/q5-nmr-spectrum.png \
          images/q6-structure.png \
          images/q7-isomers.png \
          images/q8-titration-curve.png \
          images/q9-structures.png \
          images/q12-polymer.png \
          images/q15-chloroacetamide.png \
          images/q16-equilibrium.png \
          images/q17-apparatus.png \
          images/q19-rate-graphs.png \
          images/q20-solubility-graph.png \
          images/q21-mass-spectrum.png \
          images/q23-flowchart.png \
          images/q24-biodiesel-reaction.png \
          images/q25-graph-paper.png \
          images/q26-energy-profile.png \
          images/q27-equation.png \
          images/q29-flowchart.png \
          images/q29-structures.png \
          images/q30-ir-spectrum.png \
          images/q30-h-nmr.png \
          images/q30-c-nmr.png \
          images/q34-ph-graph.png

# Check if all required images exist
check-images:
	@echo "Checking for required images..."
	@echo ""
	@missing=0; \
	for img in $(IMAGES); do \
		if [ -f "$$img" ]; then \
			echo "✓ $$img"; \
		else \
			echo "✗ MISSING: $$img"; \
			missing=$$((missing + 1)); \
		fi; \
	done; \
	echo ""; \
	if [ $$missing -eq 0 ]; then \
		echo "All 26 images present!"; \
		exit 0; \
	else \
		echo "Missing $$missing image(s)."; \
		echo "Run 'make extract-images' to extract pages, then crop manually."; \
		echo "See README.md for detailed instructions."; \
		exit 1; \
	fi

# Extract page images using Python script
extract-images:
	@echo "Running image extraction script..."
	@if [ ! -f "extract_images.py" ]; then \
		echo "ERROR: extract_images.py not found!"; \
		exit 1; \
	fi
	@python3 extract_images.py

# Render the Quarto document
render: 2020-hsc-chemistry.qmd
	@echo "Rendering 2020-hsc-chemistry.qmd..."
	@if ! command -v quarto >/dev/null 2>&1; then \
		echo "ERROR: Quarto is not installed."; \
		echo "Please install from https://quarto.org/docs/get-started/"; \
		exit 1; \
	fi
	quarto render 2020-hsc-chemistry.qmd
	@echo ""
	@echo "Rendering complete!"
	@if [ -f "2020-hsc-chemistry.pdf" ]; then \
		echo "Output: 2020-hsc-chemistry.pdf"; \
	fi

# Clean generated files
clean:
	@echo "Cleaning generated files..."
	rm -f 2020-hsc-chemistry.pdf
	rm -rf 2020-hsc-chemistry_files/
	rm -f .quarto/
	@echo "Clean complete!"

# Check images and render if all present
all: check-images render
	@echo ""
	@echo "Build complete!"
