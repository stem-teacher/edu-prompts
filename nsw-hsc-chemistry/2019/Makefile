.PHONY: help check-images render clean extract-pages

# Variables
QMD_FILE = 2019-hsc-chemistry.qmd
PDF_OUTPUT = 2019-hsc-chemistry.pdf
IMAGES_DIR = images
PYTHON = python3

# Default target
help:
	@echo "=================================================="
	@echo "2019 HSC Chemistry Exam - Build System"
	@echo "=================================================="
	@echo ""
	@echo "Available targets:"
	@echo ""
	@echo "  make extract-pages  - Extract full pages from PDF for manual cropping"
	@echo "  make check-images   - Check which images have been extracted"
	@echo "  make render         - Render the Quarto document to PDF"
	@echo "  make clean          - Remove generated files"
	@echo "  make help           - Show this help message"
	@echo ""
	@echo "=================================================="
	@echo "Workflow:"
	@echo "=================================================="
	@echo ""
	@echo "1. make extract-pages    # Extract pages from PDF"
	@echo "2. [Manually crop images from full pages]"
	@echo "3. make check-images     # Verify all images present"
	@echo "4. make render           # Build the final PDF"
	@echo ""
	@echo "=================================================="

# Extract full pages for manual cropping
extract-pages:
	@echo "Extracting pages from PDF..."
	@$(PYTHON) extract_images.py
	@echo ""
	@echo "✓ Page extraction complete!"
	@echo "Now manually crop images and save them to $(IMAGES_DIR)/"

# Check if all required images are present
check-images:
	@echo "Checking image status..."
	@$(PYTHON) extract_images.py check

# Render the Quarto document
render: $(QMD_FILE)
	@echo "Rendering Quarto document..."
	@echo ""
	quarto render $(QMD_FILE)
	@echo ""
	@if [ -f "$(PDF_OUTPUT)" ]; then \
		echo "================================================"; \
		echo "✓ Success! PDF generated: $(PDF_OUTPUT)"; \
		echo "================================================"; \
	else \
		echo "================================================"; \
		echo "✗ Error: PDF was not generated"; \
		echo "================================================"; \
		exit 1; \
	fi

# Clean generated files
clean:
	@echo "Cleaning generated files..."
	rm -f $(PDF_OUTPUT)
	rm -rf $(QMD_FILE:.qmd=_files)
	rm -f .quarto/
	@echo "✓ Clean complete"

# Advanced: Render with verbose output
render-verbose: $(QMD_FILE)
	quarto render $(QMD_FILE) --verbose

# Check if Quarto is installed
check-quarto:
	@echo "Checking for Quarto installation..."
	@if command -v quarto >/dev/null 2>&1; then \
		echo "✓ Quarto is installed"; \
		quarto --version; \
	else \
		echo "✗ Quarto is not installed"; \
		echo "Please install from: https://quarto.org/docs/get-started/"; \
		exit 1; \
	fi

# Check all dependencies
check-deps: check-quarto
	@echo ""
	@echo "Checking for Python..."
	@if command -v $(PYTHON) >/dev/null 2>&1; then \
		echo "✓ Python is installed"; \
		$(PYTHON) --version; \
	else \
		echo "✗ Python is not installed"; \
		exit 1; \
	fi
	@echo ""
	@echo "Checking for required Python packages..."
	@$(PYTHON) -c "import pdf2image; print('✓ pdf2image is installed')" || echo "✗ pdf2image not installed (pip install pdf2image)"
	@$(PYTHON) -c "import PIL; print('✓ Pillow is installed')" || echo "✗ Pillow not installed (pip install Pillow)"
	@echo ""
	@echo "✓ All dependency checks complete"

# Create images directory if it doesn't exist
$(IMAGES_DIR):
	mkdir -p $(IMAGES_DIR)

# Initialize the project structure
init: $(IMAGES_DIR)
	@echo "Initializing project structure..."
	mkdir -p $(IMAGES_DIR)/full_pages
	@echo "✓ Project structure created"
	@echo ""
	@echo "Next steps:"
	@echo "1. Place 2019-hsc-chemistry.pdf in this directory"
	@echo "2. Run: make extract-pages"
	@echo "3. Crop images manually"
	@echo "4. Run: make render"
