.PHONY: help check-images render clean extract-pages

# Default target
help:
	@echo "2022 HSC Chemistry Exam - Build Commands"
	@echo "=========================================="
	@echo ""
	@echo "Available targets:"
	@echo "  make help          - Show this help message"
	@echo "  make check-images  - Verify all required images are present"
	@echo "  make extract-pages - Extract page images from PDF for manual cropping"
	@echo "  make render        - Render the Quarto document to PDF"
	@echo "  make clean         - Remove generated files"
	@echo ""
	@echo "Typical workflow:"
	@echo "  1. make extract-pages  (extract full pages from PDF)"
	@echo "  2. Manually crop images from pages/ and save to images/"
	@echo "  3. make check-images   (verify all images present)"
	@echo "  4. make render         (build the final PDF)"

check-images:
	@echo "Checking for required images..."
	@echo "================================"
	@required_images=( \
		"q4-manganese-absorbance.png" \
		"q4-lamp-spectra.png" \
		"q6-uv-vis-spectra.png" \
		"q9-structures.png" \
		"q11-cyclohexanol-reaction.png" \
		"q12-c6h14-isomers.png" \
		"q15-conductivity-graph.png" \
		"q18-biopolymer.png" \
		"q20-indicator-graph.png" \
		"q24-boiling-points.png" \
		"q25-beakers.png" \
		"q28-flowchart.png" \
		"q30-mass-spectrum.png" \
		"q30-ir-spectrum.png" \
		"q30-proton-nmr.png" \
		"q30-c13-nmr.png" \
	); \
	missing=0; \
	found=0; \
	for img in "$${required_images[@]}"; do \
		if [ -f "images/$$img" ]; then \
			echo "✓ images/$$img"; \
			found=$$((found + 1)); \
		else \
			echo "✗ images/$$img (MISSING)"; \
			missing=$$((missing + 1)); \
		fi; \
	done; \
	echo ""; \
	echo "Summary: $$found/17 images present"; \
	if [ $$missing -gt 0 ]; then \
		echo ""; \
		echo "⚠ Warning: $$missing image(s) missing!"; \
		echo "Run 'make extract-pages' to extract page images for cropping."; \
		echo "See README.md for detailed extraction instructions."; \
		exit 1; \
	else \
		echo ""; \
		echo "✓ All images present! Ready to render."; \
	fi

extract-pages:
	@echo "Extracting page images from PDF..."
	@echo "==================================="
	@if [ ! -f "2022-hsc-chemistry.pdf" ]; then \
		echo "Error: 2022-hsc-chemistry.pdf not found!"; \
		echo "Please ensure the PDF is in this directory."; \
		exit 1; \
	fi
	@if ! command -v python3 &> /dev/null; then \
		echo "Error: python3 not found!"; \
		echo "Please install Python 3."; \
		exit 1; \
	fi
	@python3 extract_images.py

render:
	@echo "Rendering Quarto document..."
	@echo "============================="
	@if ! command -v quarto &> /dev/null; then \
		echo "Error: Quarto not found!"; \
		echo "Please install Quarto from https://quarto.org"; \
		exit 1; \
	fi
	@echo "Checking images first..."
	@$(MAKE) check-images
	@echo ""
	@echo "Building PDF..."
	quarto render 2022-hsc-chemistry.qmd
	@echo ""
	@echo "✓ Build complete!"
	@echo "Output: 2022-hsc-chemistry.pdf"

clean:
	@echo "Cleaning generated files..."
	@rm -rf _freeze/
	@rm -rf images/pages/
	@rm -rf .quarto/
	@rm -f 2022-hsc-chemistry.pdf
	@rm -f *.log
	@echo "✓ Clean complete"

# Quick render without checking images (use with caution)
render-force:
	@echo "Rendering without image check..."
	quarto render 2022-hsc-chemistry.qmd
