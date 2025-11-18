.PHONY: help check-images render clean extract-images verify-images

# Default target
help:
	@echo "2024 HSC Chemistry Exam - Build System"
	@echo "======================================="
	@echo ""
	@echo "Available targets:"
	@echo "  make help           - Show this help message"
	@echo "  make check-images   - Verify all required images are present"
	@echo "  make extract-images - Run image extraction script"
	@echo "  make render         - Render the Quarto document to PDF"
	@echo "  make clean          - Remove generated files"
	@echo "  make verify-images  - Check image extraction status"
	@echo ""
	@echo "Typical workflow:"
	@echo "  1. make extract-images  # Extract page images from PDF"
	@echo "  2. [Manually crop images according to README.md]"
	@echo "  3. make check-images    # Verify all images present"
	@echo "  4. make render          # Build the final PDF"

# Check if all required images exist
check-images:
	@echo "Checking for required images..."
	@echo ""
	@missing=0; \
	for img in \
		q1-homologous-series.png \
		q4-ir-spectrum.png \
		q4-structures.png \
		q9-mass-spectra.png \
		q12-structure.png \
		q14-glycine.png \
		q14-silk-polymer.png \
		q14-monomers.png \
		q17-titration-curve.png \
		q18-reaction-quotient.png \
		q19-structures.png \
		q22-vinyl-fluoride.png \
		q24-graph-axes.png \
		q25-calibration-graph.png \
		q26-graph-axes.png \
		q31-urea-synthesis.png \
		q33-reduction.png \
		q34-conductivity-graph.png \
		q35-structures.png \
		q37-keq-vs-dg.png \
		q38-mass-spectrum.png; \
	do \
		if [ -f "images/$$img" ]; then \
			echo "  ✓ $$img"; \
		else \
			echo "  ✗ $$img (MISSING)"; \
			missing=$$((missing + 1)); \
		fi; \
	done; \
	echo ""; \
	if [ $$missing -eq 0 ]; then \
		echo "✓ All images present! Ready to render."; \
		exit 0; \
	else \
		echo "✗ Missing $$missing image(s). Please extract them first."; \
		echo "  Run 'make extract-images' and follow the instructions."; \
		exit 1; \
	fi

# Extract images from PDF using Python script
extract-images:
	@if [ ! -f "2024-hsc-chemistry.pdf" ]; then \
		echo "✗ Error: 2024-hsc-chemistry.pdf not found"; \
		echo "  Please place the PDF in this directory first."; \
		exit 1; \
	fi
	@echo "Running image extraction script..."
	@python3 extract_images.py

# Verify image extraction status
verify-images:
	@python3 extract_images.py --check

# Render the Quarto document to PDF
render: check-images
	@echo "Rendering 2024-hsc-chemistry.qmd to PDF..."
	@echo ""
	quarto render 2024-hsc-chemistry.qmd
	@echo ""
	@echo "✓ Successfully rendered!"
	@echo "  Output: 2024-hsc-chemistry.pdf"

# Clean generated files
clean:
	@echo "Cleaning generated files..."
	rm -f 2024-hsc-chemistry.pdf
	rm -f 2024-hsc-chemistry.tex
	rm -rf 2024-hsc-chemistry_files
	rm -rf .quarto
	@echo "✓ Clean complete"

# Clean everything including extracted images
clean-all: clean
	@echo "Removing extracted images..."
	rm -rf images/page_*.png
	@echo "✓ Deep clean complete"
	@echo ""
	@echo "Note: Final cropped images in images/ directory were NOT removed."
	@echo "      To remove all images: rm -rf images/"
