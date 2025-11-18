.PHONY: help check-images render clean view all

# Output filename
OUTPUT = 2018-hsc-chemistry.pdf
SOURCE = 2018-hsc-chemistry.qmd

# Required images
IMAGES = images/q7-weak-acid-ionisation.png \
         images/q17-ph-buffer-graphs.png \
         images/q19-galvanic-cells.png \
         images/q24-fermentation-apparatus.png \
         images/q25-kinetic-energy-graph.png \
         images/q27-cfc-structure.png \
         images/q28-camp-stove.png \
         images/q28-graph-grid.png \
         images/q32-electrolytic-cell.png \
         images/q33-dipeptide.png \
         images/q33-energy-profile.png \
         images/q34-boron-config.png \
         images/q35-mass-spectrometer.png

# Default target
all: check-images render

# Help target
help:
	@echo "2018 HSC Chemistry Exam - Quarto Build System"
	@echo ""
	@echo "Available targets:"
	@echo "  make help          - Show this help message"
	@echo "  make check-images  - Verify all required images are present"
	@echo "  make render        - Render the Quarto document to PDF"
	@echo "  make view          - Render and open the PDF"
	@echo "  make clean         - Remove generated files"
	@echo "  make all           - Check images and render (default)"
	@echo ""
	@echo "Image extraction:"
	@echo "  python3 extract_images.py        - Run image extraction helper"
	@echo "  python3 extract_images.py --check - Check extraction status"
	@echo ""

# Check if all required images exist
check-images:
	@echo "Checking for required images..."
	@missing=0; \
	for img in $(IMAGES); do \
		if [ -f "$$img" ]; then \
			echo "  ✓ $$img"; \
		else \
			echo "  ✗ MISSING: $$img"; \
			missing=$$((missing + 1)); \
		fi; \
	done; \
	echo ""; \
	if [ $$missing -eq 0 ]; then \
		echo "All images present (14/14)"; \
		exit 0; \
	else \
		echo "Missing $$missing image(s)"; \
		echo "Run 'python3 extract_images.py' for extraction help"; \
		exit 1; \
	fi

# Render the document
render: $(SOURCE)
	@echo "Rendering $(SOURCE) to PDF..."
	@if ! command -v quarto >/dev/null 2>&1; then \
		echo "ERROR: Quarto not found. Please install from https://quarto.org"; \
		exit 1; \
	fi
	quarto render $(SOURCE)
	@if [ -f "$(OUTPUT)" ]; then \
		echo ""; \
		echo "Success! Generated: $(OUTPUT)"; \
		ls -lh $(OUTPUT); \
	else \
		echo "ERROR: PDF generation failed"; \
		exit 1; \
	fi

# Render and open
view: render
	@echo "Opening $(OUTPUT)..."
	@if [ -f "$(OUTPUT)" ]; then \
		if command -v xdg-open >/dev/null 2>&1; then \
			xdg-open $(OUTPUT); \
		elif command -v open >/dev/null 2>&1; then \
			open $(OUTPUT); \
		elif command -v start >/dev/null 2>&1; then \
			start $(OUTPUT); \
		else \
			echo "Could not detect PDF viewer. Please open $(OUTPUT) manually."; \
		fi \
	fi

# Clean generated files
clean:
	@echo "Cleaning generated files..."
	rm -f $(OUTPUT)
	rm -f $(SOURCE:.qmd=.tex)
	rm -f $(SOURCE:.qmd=.log)
	rm -f $(SOURCE:.qmd=.aux)
	rm -rf $(SOURCE:.qmd=_files)
	rm -rf .quarto
	@echo "Clean complete"

# Extract images (convenience target)
extract:
	python3 extract_images.py

# Check extraction status
check:
	python3 extract_images.py --check
