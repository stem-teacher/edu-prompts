# Makefile for 2023 HSC Chemistry Exam Quarto Document
#
# Usage:
#   make help          - Show this help message
#   make check-images  - Verify all required images are present
#   make render        - Render the Quarto document to PDF
#   make clean         - Remove generated files
#   make extract       - Run image extraction script

# Variables
QMD_FILE = 2023-hsc-chemistry.qmd
PDF_FILE = 2023-hsc-chemistry_20240318.pdf
OUTPUT_PDF = 2023-hsc-chemistry.pdf
IMAGES_DIR = images
TEMP_DIR = $(IMAGES_DIR)/temp_pages

# Required images
REQUIRED_IMAGES = \
	$(IMAGES_DIR)/q2-aas-diagram.png \
	$(IMAGES_DIR)/q3-structure.png \
	$(IMAGES_DIR)/q5-weak-acid-diagrams.png \
	$(IMAGES_DIR)/q9-titration-curve.png \
	$(IMAGES_DIR)/q11-indicator-chart.png \
	$(IMAGES_DIR)/q16-precipitation-curve.png \
	$(IMAGES_DIR)/q18-rate-graph.png \
	$(IMAGES_DIR)/q19-mass-spectrum.png \
	$(IMAGES_DIR)/q21-isomers.png \
	$(IMAGES_DIR)/q23-buffer-diagram.png \
	$(IMAGES_DIR)/q25-combustion-apparatus.png \
	$(IMAGES_DIR)/q26-nitric-acid-process.png \
	$(IMAGES_DIR)/q29-solubility-graph.png \
	$(IMAGES_DIR)/q31-graph-paper.png \
	$(IMAGES_DIR)/q33-piston-diagram.png \
	$(IMAGES_DIR)/q33-equilibrium-graph.png \
	$(IMAGES_DIR)/q36-nmr-spectrum.png \
	$(IMAGES_DIR)/q36-ir-spectrum.png

# Colors for output
GREEN = \033[0;32m
YELLOW = \033[0;33m
RED = \033[0;31m
NC = \033[0m # No Color

.PHONY: help check-images render clean extract all

# Default target
all: check-images render

help:
	@echo "$(GREEN)2023 HSC Chemistry Exam - Build Commands$(NC)"
	@echo ""
	@echo "Available targets:"
	@echo "  $(YELLOW)make help$(NC)          - Show this help message"
	@echo "  $(YELLOW)make check-images$(NC)  - Verify all required images are present"
	@echo "  $(YELLOW)make extract$(NC)       - Run image extraction script"
	@echo "  $(YELLOW)make render$(NC)        - Render the Quarto document to PDF"
	@echo "  $(YELLOW)make clean$(NC)         - Remove generated files"
	@echo "  $(YELLOW)make all$(NC)           - Check images and render (default)"
	@echo ""
	@echo "Workflow:"
	@echo "  1. Run 'make extract' to extract pages from PDF"
	@echo "  2. Manually crop images and save to $(IMAGES_DIR)/"
	@echo "  3. Run 'make check-images' to verify all images present"
	@echo "  4. Run 'make render' to generate final PDF"
	@echo ""

check-images:
	@echo "$(YELLOW)Checking for required images...$(NC)"
	@missing=0; \
	for img in $(REQUIRED_IMAGES); do \
		if [ ! -f "$$img" ]; then \
			echo "  $(RED)✗ Missing: $$img$(NC)"; \
			missing=$$((missing + 1)); \
		else \
			echo "  $(GREEN)✓ Found: $$img$(NC)"; \
		fi; \
	done; \
	total=$$(echo $(REQUIRED_IMAGES) | wc -w); \
	found=$$((total - missing)); \
	echo ""; \
	echo "$(YELLOW)Summary: $$found/$$total images present$(NC)"; \
	if [ $$missing -gt 0 ]; then \
		echo "$(RED)✗ $$missing image(s) missing!$(NC)"; \
		echo "$(YELLOW)Run 'make extract' to extract pages, then crop manually.$(NC)"; \
		exit 1; \
	else \
		echo "$(GREEN)✓ All images present!$(NC)"; \
	fi

extract:
	@if [ ! -f "$(PDF_FILE)" ]; then \
		echo "$(RED)✗ Error: $(PDF_FILE) not found!$(NC)"; \
		exit 1; \
	fi
	@echo "$(YELLOW)Running image extraction script...$(NC)"
	@python3 extract_images.py

render: check-images
	@echo "$(YELLOW)Rendering Quarto document...$(NC)"
	@if ! command -v quarto &> /dev/null; then \
		echo "$(RED)✗ Error: Quarto not found!$(NC)"; \
		echo "Please install Quarto: https://quarto.org/docs/get-started/"; \
		exit 1; \
	fi
	quarto render $(QMD_FILE)
	@if [ -f "$(OUTPUT_PDF)" ]; then \
		echo "$(GREEN)✓ Success! Generated: $(OUTPUT_PDF)$(NC)"; \
		@ls -lh $(OUTPUT_PDF); \
	else \
		echo "$(RED)✗ Error: PDF generation failed$(NC)"; \
		exit 1; \
	fi

clean:
	@echo "$(YELLOW)Cleaning generated files...$(NC)"
	@rm -f $(OUTPUT_PDF)
	@rm -rf $(QMD_FILE:.qmd=_files)
	@rm -rf .quarto
	@echo "$(GREEN)✓ Clean complete$(NC)"

clean-all: clean
	@echo "$(YELLOW)Removing temporary extraction files...$(NC)"
	@rm -rf $(TEMP_DIR)
	@echo "$(GREEN)✓ Deep clean complete$(NC)"

# Development helpers
watch:
	@echo "$(YELLOW)Watching for changes (requires Quarto preview)...$(NC)"
	quarto preview $(QMD_FILE)

info:
	@echo "$(GREEN)Project Information$(NC)"
	@echo "  QMD File:      $(QMD_FILE)"
	@echo "  Source PDF:    $(PDF_FILE)"
	@echo "  Output PDF:    $(OUTPUT_PDF)"
	@echo "  Images Dir:    $(IMAGES_DIR)/"
	@echo "  Images Needed: $$(echo $(REQUIRED_IMAGES) | wc -w)"
	@echo ""
	@echo "$(GREEN)System Information$(NC)"
	@if command -v quarto &> /dev/null; then \
		echo "  Quarto:        $$(quarto --version)"; \
	else \
		echo "  Quarto:        $(RED)Not installed$(NC)"; \
	fi
	@if command -v python3 &> /dev/null; then \
		echo "  Python:        $$(python3 --version)"; \
	else \
		echo "  Python:        $(RED)Not installed$(NC)"; \
	fi
	@if command -v pdflatex &> /dev/null; then \
		echo "  LaTeX:         Installed"; \
	else \
		echo "  LaTeX:         $(RED)Not installed$(NC)"; \
	fi
