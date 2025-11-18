.PHONY: help check-images render clean extract-images

# Variables
QMD_FILE = 2016-hsc-chemistry.qmd
PDF_FILE = 2016-hsc-chemistry.pdf
SOURCE_PDF = 2016-hsc-chemistry-archive.pdf
IMAGES_DIR = images

# Required images
REQUIRED_IMAGES = \
	$(IMAGES_DIR)/q1-vinyl-chloride.png \
	$(IMAGES_DIR)/q5-hydrogen-bonding.png \
	$(IMAGES_DIR)/q11-haloalkane.png \
	$(IMAGES_DIR)/q13-flowchart.png \
	$(IMAGES_DIR)/q16-galvanic-cell.png \
	$(IMAGES_DIR)/q17-polymer.png \
	$(IMAGES_DIR)/q17-monomers.png \
	$(IMAGES_DIR)/q20-mercury-spectrum.png \
	$(IMAGES_DIR)/q21-galvanic-cell.png \
	$(IMAGES_DIR)/q22-apparatus.png \
	$(IMAGES_DIR)/q23-graph-grid.png \
	$(IMAGES_DIR)/q27-graph.png \
	$(IMAGES_DIR)/q28-equilibrium-graph.png \
	$(IMAGES_DIR)/q31a-sulfur-extraction.png \
	$(IMAGES_DIR)/q32a-electrolytic-cell.png \
	$(IMAGES_DIR)/q33a-amino-acids.png \
	$(IMAGES_DIR)/q33a-ribonuclease.png \
	$(IMAGES_DIR)/q34a-electron-config.png \
	$(IMAGES_DIR)/q35a-shoe-print.png \
	$(IMAGES_DIR)/q35b-electrophoresis.png \
	$(IMAGES_DIR)/q35c-emission-spectra.png \
	$(IMAGES_DIR)/periodic-table.png

# Default target
help:
	@echo "================================================================"
	@echo "2016 HSC Chemistry - Quarto Document Build System"
	@echo "================================================================"
	@echo ""
	@echo "Available targets:"
	@echo ""
	@echo "  make help            - Show this help message"
	@echo "  make check-images    - Check if all required images are present"
	@echo "  make extract-images  - Run Python script to extract page images"
	@echo "  make render          - Render the Quarto document to PDF"
	@echo "  make clean           - Remove generated files"
	@echo "  make all             - Check images and render document"
	@echo ""
	@echo "Prerequisites:"
	@echo "  - Quarto (>= 1.3)"
	@echo "  - LaTeX distribution (TeX Live, MiKTeX, or TinyTeX)"
	@echo "  - All images extracted to $(IMAGES_DIR)/ directory"
	@echo ""
	@echo "Quick start:"
	@echo "  1. make extract-images   # Extract page images from PDF"
	@echo "  2. Manually crop images  # Crop and save with correct names"
	@echo "  3. make check-images     # Verify all images present"
	@echo "  4. make render           # Build the PDF"
	@echo ""
	@echo "================================================================"

# Check if all required images are present
check-images:
	@echo "Checking for required images..."
	@echo ""
	@missing=0; \
	total=0; \
	for img in $(REQUIRED_IMAGES); do \
		total=$$((total + 1)); \
		if [ -f "$$img" ]; then \
			echo "  ✓ $$img"; \
		else \
			echo "  ✗ MISSING: $$img"; \
			missing=$$((missing + 1)); \
		fi; \
	done; \
	echo ""; \
	if [ $$missing -eq 0 ]; then \
		echo "================================================================"; \
		echo "✓ All $$total images found!"; \
		echo "================================================================"; \
		echo "You can now run: make render"; \
		echo ""; \
		exit 0; \
	else \
		echo "================================================================"; \
		echo "✗ Missing $$missing out of $$total images"; \
		echo "================================================================"; \
		echo ""; \
		echo "Please extract missing images before rendering."; \
		echo "Run: make extract-images"; \
		echo ""; \
		exit 1; \
	fi

# Extract page images from PDF using Python script
extract-images:
	@echo "Running image extraction script..."
	@echo ""
	@if [ ! -f "$(SOURCE_PDF)" ]; then \
		echo "ERROR: Source PDF not found: $(SOURCE_PDF)"; \
		exit 1; \
	fi
	@if [ ! -f "extract_images.py" ]; then \
		echo "ERROR: extract_images.py not found"; \
		exit 1; \
	fi
	@python3 extract_images.py

# Render the Quarto document
render:
	@echo "================================================================"
	@echo "Rendering Quarto document..."
	@echo "================================================================"
	@echo ""
	@if [ ! -f "$(QMD_FILE)" ]; then \
		echo "ERROR: Quarto file not found: $(QMD_FILE)"; \
		exit 1; \
	fi
	quarto render $(QMD_FILE)
	@echo ""
	@echo "================================================================"
	@if [ -f "$(PDF_FILE)" ]; then \
		echo "✓ PDF successfully generated: $(PDF_FILE)"; \
		echo "================================================================"; \
		echo ""; \
		ls -lh $(PDF_FILE); \
		echo ""; \
	else \
		echo "✗ PDF generation failed"; \
		echo "================================================================"; \
		exit 1; \
	fi

# Clean generated files
clean:
	@echo "Cleaning generated files..."
	@rm -f $(PDF_FILE)
	@rm -rf $(QMD_FILE:.qmd=_files)
	@rm -f *.aux *.log *.out *.toc
	@echo "✓ Clean complete"

# Build everything
all: check-images render
	@echo ""
	@echo "================================================================"
	@echo "✓ Build complete!"
	@echo "================================================================"
	@echo ""

# Create images directory
$(IMAGES_DIR):
	@mkdir -p $(IMAGES_DIR)
	@echo "Created images directory"
