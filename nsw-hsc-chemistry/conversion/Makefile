.PHONY: help render clean check-images

help:
	@echo "Available commands:"
	@echo "  make render       - Render the Quarto document to PDF"
	@echo "  make check-images - Check if all required images are present"
	@echo "  make clean        - Remove generated files"
	@echo "  make help         - Show this help message"

check-images:
	@echo "Checking for required images..."
	@missing=0; \
	for img in q1-diagram.png q3-structures.png q5-graphs.png \
	           q15-flowchart.png q15-options.png q17-structures.png \
	           q20-calibration.png q26-grid.png q27-equilibrium.png \
	           q28-polymers.png q28-monomer.png q34-titration.png \
	           q35-energy.png; do \
		if [ ! -f "images/$$img" ]; then \
			echo "  ❌ Missing: $$img"; \
			missing=$$((missing + 1)); \
		else \
			echo "  ✓ Found: $$img"; \
		fi \
	done; \
	if [ $$missing -eq 0 ]; then \
		echo "\nAll images present! Ready to render."; \
	else \
		echo "\n$$missing image(s) missing. Please extract them before rendering."; \
		exit 1; \
	fi

render: check-images
	@echo "Rendering Quarto document..."
	quarto render 2025-hsc-chemistry.qmd
	@echo "Done! Check 2025-hsc-chemistry.pdf"

clean:
	@echo "Cleaning generated files..."
	rm -f 2025-hsc-chemistry.pdf
	rm -rf 2025-hsc-chemistry_files/
	@echo "Done!"
