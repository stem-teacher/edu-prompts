.PHONY: help check-images render clean setup

# Default target
help:
	@echo "2021 HSC Chemistry Exam - Quarto Build System"
	@echo "=============================================="
	@echo ""
	@echo "Available targets:"
	@echo "  make setup         - Create images directory and run extraction helper"
	@echo "  make check-images  - Verify all required images are present"
	@echo "  make render        - Render the Quarto document to PDF"
	@echo "  make clean         - Remove generated files"
	@echo "  make help          - Show this help message"
	@echo ""
	@echo "Workflow:"
	@echo "  1. make setup          (create directories)"
	@echo "  2. Extract images      (manual or scripted)"
	@echo "  3. make check-images   (verify images)"
	@echo "  4. make render         (build PDF)"

# List of required images
REQUIRED_IMAGES = \
	images/q3-structure.png \
	images/q4-ethyl-pentanoate.png \
	images/q8-soap-emulsion.png \
	images/q9-paracetamol-spectrum.png \
	images/q9-solvent-spectra.png \
	images/q10-polymer-structure.png \
	images/q10-monomer-options.png \
	images/q12-spectra.png \
	images/q12-structures.png \
	images/q14-calibration-curve.png \
	images/q16-titration-curve.png \
	images/q25-apparatus.png \
	images/q26-flowchart.png \
	images/q29-ir-spectrum.png \
	images/q29-mass-spectrum.png \
	images/q29-c13-nmr.png \
	images/q29-h-nmr.png \
	images/q33-graph.png \
	images/q34-ph-graph.png

# Source files
QMD_FILE = 2021-hsc-chemistry.qmd
PDF_OUTPUT = 2021-hsc-chemistry.pdf

# Setup - create directories and run helper
setup:
	@echo "Setting up project structure..."
	@mkdir -p images
	@python3 extract_images.py

# Check if all required images exist
check-images:
	@echo "Checking for required images..."
	@echo "Required: 19 images"
	@echo ""
	@missing=0; \
	for img in $(REQUIRED_IMAGES); do \
		if [ -f "$$img" ]; then \
			echo "✓ $$img"; \
		else \
			echo "✗ MISSING: $$img"; \
			missing=$$((missing + 1)); \
		fi; \
	done; \
	echo ""; \
	if [ $$missing -eq 0 ]; then \
		echo "✓ All images present!"; \
		exit 0; \
	else \
		echo "⚠ Missing $$missing image(s)"; \
		echo "Run 'python3 extract_images.py' for extraction guide"; \
		exit 1; \
	fi

# Render the Quarto document
render: check-images
	@echo "Rendering Quarto document..."
	@if ! command -v quarto &> /dev/null; then \
		echo "Error: Quarto not found. Install from https://quarto.org"; \
		exit 1; \
	fi
	quarto render $(QMD_FILE)
	@echo ""
	@echo "✓ PDF generated: $(PDF_OUTPUT)"

# Clean generated files
clean:
	@echo "Cleaning generated files..."
	@rm -f $(PDF_OUTPUT)
	@rm -rf 2021-hsc-chemistry_files/
	@rm -f *.log *.aux *.out *.toc
	@echo "✓ Clean complete"

# Additional helpful targets
list-images:
	@echo "Required images (19 total):"
	@for img in $(REQUIRED_IMAGES); do \
		echo "  - $$img"; \
	done

count-images:
	@present=$$(ls images/*.png 2>/dev/null | wc -l); \
	required=$$(echo $(REQUIRED_IMAGES) | wc -w); \
	echo "Images: $$present / $$required"
