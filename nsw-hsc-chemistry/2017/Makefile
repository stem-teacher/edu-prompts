# Makefile for 2017 HSC Chemistry Exam Quarto Document
# ======================================================

# Variables
QMD_FILE = 2017-hsc-chemistry.qmd
PDF_OUTPUT = 2017-hsc-chemistry.pdf
IMAGE_DIR = images
PYTHON = python3

# Required images
REQUIRED_IMAGES = \
	$(IMAGE_DIR)/q3-structure.png \
	$(IMAGE_DIR)/q4-apparatus.png \
	$(IMAGE_DIR)/q7-test-tubes.png \
	$(IMAGE_DIR)/q7-results.png \
	$(IMAGE_DIR)/q9-apparatus.png \
	$(IMAGE_DIR)/q10-cells.png \
	$(IMAGE_DIR)/q12-polymers.png \
	$(IMAGE_DIR)/q15-lewis-structures.png \
	$(IMAGE_DIR)/q18-equilibrium-graph.png \
	$(IMAGE_DIR)/q22-grid.png \
	$(IMAGE_DIR)/q23-galvanic-cell.png \
	$(IMAGE_DIR)/q26-map.png \
	$(IMAGE_DIR)/q29-map.png \
	$(IMAGE_DIR)/q31b-graph.png \
	$(IMAGE_DIR)/q31c-flowchart.png \
	$(IMAGE_DIR)/q33a-enzyme-graph.png \
	$(IMAGE_DIR)/q33c-dipeptide.png \
	$(IMAGE_DIR)/q34c-lewis-oxygen.png \
	$(IMAGE_DIR)/q34c-ionisation-graph.png \
	$(IMAGE_DIR)/q35a-emission-spectrum.png \
	$(IMAGE_DIR)/q35c-blood-spectrum.png \
	$(IMAGE_DIR)/q35c-four-spectra.png

# Colors for output
COLOR_RESET = \033[0m
COLOR_BOLD = \033[1m
COLOR_GREEN = \033[32m
COLOR_YELLOW = \033[33m
COLOR_RED = \033[31m
COLOR_BLUE = \033[34m

.PHONY: all help check-images render clean extract-pages verify-deps

# Default target
all: check-images render

# Help target
help:
	@echo "$(COLOR_BOLD)2017 HSC Chemistry Exam - Makefile Commands$(COLOR_RESET)"
	@echo ""
	@echo "$(COLOR_BOLD)Available targets:$(COLOR_RESET)"
	@echo "  $(COLOR_GREEN)make help$(COLOR_RESET)           - Show this help message"
	@echo "  $(COLOR_GREEN)make check-images$(COLOR_RESET)   - Check if all required images are present"
	@echo "  $(COLOR_GREEN)make extract-pages$(COLOR_RESET)  - Run Python script to extract PDF pages"
	@echo "  $(COLOR_GREEN)make render$(COLOR_RESET)         - Render the Quarto document to PDF"
	@echo "  $(COLOR_GREEN)make verify-deps$(COLOR_RESET)    - Verify all dependencies are installed"
	@echo "  $(COLOR_GREEN)make clean$(COLOR_RESET)          - Remove generated files"
	@echo "  $(COLOR_GREEN)make all$(COLOR_RESET)            - Check images and render (default)"
	@echo ""
	@echo "$(COLOR_BOLD)Workflow:$(COLOR_RESET)"
	@echo "  1. Run 'make extract-pages' to extract page images from PDF"
	@echo "  2. Manually crop images and save with correct names"
	@echo "  3. Run 'make check-images' to verify all images present"
	@echo "  4. Run 'make render' to build the PDF"
	@echo ""

# Check if all required images exist
check-images:
	@echo "$(COLOR_BOLD)Checking for required images...$(COLOR_RESET)"
	@missing_count=0; \
	for img in $(REQUIRED_IMAGES); do \
		if [ -f "$$img" ]; then \
			echo "$(COLOR_GREEN)✓$(COLOR_RESET) $$img"; \
		else \
			echo "$(COLOR_RED)✗$(COLOR_RESET) $$img $(COLOR_RED)(missing)$(COLOR_RESET)"; \
			missing_count=$$((missing_count + 1)); \
		fi; \
	done; \
	total=$$(echo "$(REQUIRED_IMAGES)" | wc -w); \
	found=$$((total - missing_count)); \
	echo ""; \
	echo "$(COLOR_BOLD)Summary:$(COLOR_RESET) $$found/$$total images found"; \
	if [ $$missing_count -eq 0 ]; then \
		echo "$(COLOR_GREEN)✓ All images present!$(COLOR_RESET)"; \
		exit 0; \
	else \
		echo "$(COLOR_YELLOW)⚠ $$missing_count image(s) missing$(COLOR_RESET)"; \
		echo ""; \
		echo "Run '$(COLOR_BLUE)make extract-pages$(COLOR_RESET)' to extract page images,"; \
		echo "then manually crop and save with the correct filenames."; \
		exit 1; \
	fi

# Extract pages from PDF using Python script
extract-pages:
	@echo "$(COLOR_BOLD)Extracting pages from PDF...$(COLOR_RESET)"
	@if [ ! -f "extract_images.py" ]; then \
		echo "$(COLOR_RED)✗ Error: extract_images.py not found$(COLOR_RESET)"; \
		exit 1; \
	fi
	@$(PYTHON) extract_images.py
	@echo ""
	@echo "$(COLOR_GREEN)✓ Page extraction complete$(COLOR_RESET)"
	@echo "Next: Manually crop images from the extracted pages"

# Verify dependencies
verify-deps:
	@echo "$(COLOR_BOLD)Verifying dependencies...$(COLOR_RESET)"
	@echo ""
	@echo "$(COLOR_BOLD)Checking Quarto:$(COLOR_RESET)"
	@if command -v quarto >/dev/null 2>&1; then \
		echo "$(COLOR_GREEN)✓$(COLOR_RESET) Quarto: $$(quarto --version)"; \
	else \
		echo "$(COLOR_RED)✗$(COLOR_RESET) Quarto not found"; \
		echo "  Install from: https://quarto.org"; \
	fi
	@echo ""
	@echo "$(COLOR_BOLD)Checking LaTeX:$(COLOR_RESET)"
	@if command -v pdflatex >/dev/null 2>&1; then \
		echo "$(COLOR_GREEN)✓$(COLOR_RESET) pdflatex found"; \
	else \
		echo "$(COLOR_RED)✗$(COLOR_RESET) pdflatex not found"; \
		echo "  Install TeX Live or MacTeX"; \
	fi
	@echo ""
	@echo "$(COLOR_BOLD)Checking Python:$(COLOR_RESET)"
	@if command -v $(PYTHON) >/dev/null 2>&1; then \
		echo "$(COLOR_GREEN)✓$(COLOR_RESET) Python: $$($(PYTHON) --version)"; \
	else \
		echo "$(COLOR_RED)✗$(COLOR_RESET) Python not found"; \
	fi
	@echo ""
	@echo "$(COLOR_BOLD)Checking Python packages:$(COLOR_RESET)"
	@$(PYTHON) -c "import pdf2image" 2>/dev/null && \
		echo "$(COLOR_GREEN)✓$(COLOR_RESET) pdf2image" || \
		echo "$(COLOR_YELLOW)⚠$(COLOR_RESET) pdf2image (pip install pdf2image)"
	@$(PYTHON) -c "import PIL" 2>/dev/null && \
		echo "$(COLOR_GREEN)✓$(COLOR_RESET) Pillow" || \
		echo "$(COLOR_YELLOW)⚠$(COLOR_RESET) Pillow (pip install pillow)"
	@echo ""

# Render the Quarto document
render: $(QMD_FILE)
	@echo "$(COLOR_BOLD)Rendering Quarto document to PDF...$(COLOR_RESET)"
	@echo ""
	@if [ ! -f "$(QMD_FILE)" ]; then \
		echo "$(COLOR_RED)✗ Error: $(QMD_FILE) not found$(COLOR_RESET)"; \
		exit 1; \
	fi
	quarto render $(QMD_FILE)
	@echo ""
	@if [ -f "$(PDF_OUTPUT)" ]; then \
		echo "$(COLOR_GREEN)✓ Successfully rendered: $(PDF_OUTPUT)$(COLOR_RESET)"; \
	else \
		echo "$(COLOR_RED)✗ Error: PDF output not generated$(COLOR_RESET)"; \
		exit 1; \
	fi

# Clean generated files
clean:
	@echo "$(COLOR_BOLD)Cleaning generated files...$(COLOR_RESET)"
	@rm -f $(PDF_OUTPUT)
	@rm -f $(QMD_FILE:.qmd=.tex)
	@rm -f $(QMD_FILE:.qmd=.log)
	@rm -f $(QMD_FILE:.qmd=.aux)
	@rm -rf $(QMD_FILE:.qmd=_files)
	@rm -rf .quarto
	@echo "$(COLOR_GREEN)✓ Clean complete$(COLOR_RESET)"

# Quick build (assumes images are present)
quick: render

# Full build with checks
build: verify-deps check-images render
	@echo ""
	@echo "$(COLOR_GREEN)$(COLOR_BOLD)✓ Build complete!$(COLOR_RESET)"
	@echo "Output: $(PDF_OUTPUT)"
