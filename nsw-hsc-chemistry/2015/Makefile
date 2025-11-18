.PHONY: help check-images render clean

# Variables
QMD_FILE = 2015-hsc-chemistry.qmd
PDF_OUTPUT = 2015-hsc-chemistry.pdf
IMAGES_DIR = images

# Required images list
REQUIRED_IMAGES = \
	$(IMAGES_DIR)/q2-glassware.png \
	$(IMAGES_DIR)/q7-galvanic-cell.png \
	$(IMAGES_DIR)/q11-monomers.png \
	$(IMAGES_DIR)/q11-polymers.png \
	$(IMAGES_DIR)/q14-titration-curve.png \
	$(IMAGES_DIR)/q15-catchment.png \
	$(IMAGES_DIR)/q22-graph-paper.png \
	$(IMAGES_DIR)/q28-apparatus.png \
	$(IMAGES_DIR)/q30-haber-graph.png \
	$(IMAGES_DIR)/q31-solvay-process.png \
	$(IMAGES_DIR)/q32-electroplating.png \
	$(IMAGES_DIR)/q33-muscle-cell.png \
	$(IMAGES_DIR)/q33-protein-structure.png \
	$(IMAGES_DIR)/q34-electronegativity.png \
	$(IMAGES_DIR)/q35-dna-profiles.png \
	$(IMAGES_DIR)/periodic-table.png

help:
	@echo "2015 HSC Chemistry Exam - Makefile"
	@echo "=================================="
	@echo ""
	@echo "Available targets:"
	@echo "  make help          - Show this help message"
	@echo "  make check-images  - Verify all required images are present"
	@echo "  make render        - Render the Quarto document to PDF"
	@echo "  make clean         - Remove generated files"
	@echo "  make extract       - Run the image extraction script"
	@echo ""
	@echo "Typical workflow:"
	@echo "  1. make extract       # Extract images from PDF"
	@echo "  2. # Manually crop images as needed"
	@echo "  3. make check-images  # Verify all images present"
	@echo "  4. make render        # Generate final PDF"
	@echo ""

check-images:
	@echo "Checking for required images..."
	@echo "================================"
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
		echo "✓ All 17 images present!"; \
		echo "  Ready to render the document."; \
	else \
		echo "✗ Missing $$missing image(s)"; \
		echo "  Please extract missing images before rendering."; \
		echo "  Run 'make extract' to help with extraction."; \
		exit 1; \
	fi

render: check-images
	@echo "Rendering Quarto document..."
	@echo "============================"
	quarto render $(QMD_FILE)
	@echo ""
	@if [ -f "$(PDF_OUTPUT)" ]; then \
		echo "✓ Success! PDF generated: $(PDF_OUTPUT)"; \
		ls -lh $(PDF_OUTPUT); \
	else \
		echo "✗ Error: PDF not generated"; \
		exit 1; \
	fi

clean:
	@echo "Cleaning generated files..."
	rm -f $(PDF_OUTPUT)
	rm -rf 2015-hsc-chemistry_files/
	rm -f *.aux *.log *.out *.toc
	@echo "✓ Clean complete"

extract:
	@echo "Running image extraction script..."
	@echo "=================================="
	@if [ -f "extract_images.py" ]; then \
		python3 extract_images.py; \
	else \
		echo "✗ Error: extract_images.py not found"; \
		exit 1; \
	fi

# Development targets
watch:
	@echo "Watching for changes and auto-rendering..."
	quarto preview $(QMD_FILE)

info:
	@echo "Project Information"
	@echo "==================="
	@echo "Exam Year:     2015"
	@echo "Subject:       HSC Chemistry"
	@echo "Main File:     $(QMD_FILE)"
	@echo "Output:        $(PDF_OUTPUT)"
	@echo "Images Dir:    $(IMAGES_DIR)"
	@echo "Total Images:  17"
	@echo ""
	@echo "Dependencies:"
	@echo "  - Quarto:    $(shell quarto --version 2>/dev/null || echo 'NOT INSTALLED')"
	@echo "  - pdflatex:  $(shell pdflatex --version 2>/dev/null | head -n1 || echo 'NOT INSTALLED')"
	@echo "  - Python:    $(shell python3 --version 2>/dev/null || echo 'NOT INSTALLED')"
