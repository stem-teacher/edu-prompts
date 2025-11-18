# Makefile for 2014 HSC Chemistry Exam Quarto Document

# Variables
QMD_FILE = 2014-hsc-chemistry.qmd
PDF_OUTPUT = 2014-hsc-chemistry.pdf
IMAGE_DIR = images
PYTHON = python3

# Image files required
IMAGES = \
	$(IMAGE_DIR)/q2-structure.png \
	$(IMAGE_DIR)/q8-ph-temperature-graph.png \
	$(IMAGE_DIR)/q9-structures.png \
	$(IMAGE_DIR)/q11-coordinate-bonds.png \
	$(IMAGE_DIR)/q12-ph-scale.png \
	$(IMAGE_DIR)/q13-ammonia-graphs.png \
	$(IMAGE_DIR)/q18-nylon66.png \
	$(IMAGE_DIR)/q20-yield-graph.png \
	$(IMAGE_DIR)/q22-apparatus.png \
	$(IMAGE_DIR)/q22a-graph-grid.png \
	$(IMAGE_DIR)/q23-town-diagram.png \
	$(IMAGE_DIR)/q28-galvanic-cell.png \
	$(IMAGE_DIR)/q29-gas-jar.png \
	$(IMAGE_DIR)/q32a-sulfuric-acid.png \
	$(IMAGE_DIR)/q33a-pipe-layers.png \
	$(IMAGE_DIR)/q33c-chloride-graph.png \
	$(IMAGE_DIR)/q34a-neuromuscular-junction.png \
	$(IMAGE_DIR)/q34c-glycogen-graph.png \
	$(IMAGE_DIR)/q35a-ionisation-graph.png \
	$(IMAGE_DIR)/q35c-electron-config.png \
	$(IMAGE_DIR)/q36a-blood-collection.png \
	$(IMAGE_DIR)/q36b-dipeptide.png \
	$(IMAGE_DIR)/q36c-mass-spectrum.png

# Default target
.PHONY: all
all: help

# Help target
.PHONY: help
help:
	@echo "2014 HSC Chemistry Exam - Makefile"
	@echo "===================================="
	@echo ""
	@echo "Available targets:"
	@echo "  make help           - Show this help message"
	@echo "  make check-images   - Check which images are missing"
	@echo "  make render         - Render the Quarto document to PDF"
	@echo "  make clean          - Remove generated files"
	@echo "  make extract        - Run image extraction script"
	@echo "  make setup          - Create images directory structure"
	@echo "  make status         - Show project status"
	@echo ""
	@echo "Workflow:"
	@echo "  1. make setup       - Create necessary directories"
	@echo "  2. make extract     - Extract images from PDF"
	@echo "  3. make check-images - Verify all images are present"
	@echo "  4. make render      - Build the final PDF"
	@echo ""

# Check for missing images
.PHONY: check-images
check-images:
	@echo "Checking for required images..."
	@echo "================================"
	@missing=0; \
	for img in $(IMAGES); do \
		if [ ! -f $$img ]; then \
			echo "✗ Missing: $$img"; \
			missing=$$((missing + 1)); \
		fi; \
	done; \
	if [ $$missing -eq 0 ]; then \
		echo "✓ All 23 images are present!"; \
	else \
		echo ""; \
		echo "Missing $$missing image(s)"; \
		echo "Run 'make extract' to extract images from PDF"; \
	fi

# Render the Quarto document
.PHONY: render
render: $(QMD_FILE)
	@echo "Rendering Quarto document..."
	@if [ ! -d $(IMAGE_DIR) ]; then \
		echo "Warning: images directory not found!"; \
		echo "Run 'make setup' first"; \
		exit 1; \
	fi
	quarto render $(QMD_FILE)
	@echo ""
	@echo "✓ PDF generated: $(PDF_OUTPUT)"

# Clean generated files
.PHONY: clean
clean:
	@echo "Cleaning generated files..."
	rm -f $(PDF_OUTPUT)
	rm -rf *_files/
	rm -f .quarto/
	@echo "✓ Clean complete"

# Run image extraction script
.PHONY: extract
extract:
	@if [ ! -f extract_images.py ]; then \
		echo "Error: extract_images.py not found!"; \
		exit 1; \
	fi
	@echo "Running image extraction script..."
	$(PYTHON) extract_images.py

# Create directory structure
.PHONY: setup
setup:
	@echo "Setting up project structure..."
	mkdir -p $(IMAGE_DIR)
	@if [ ! -f $(IMAGE_DIR)/README.md ]; then \
		echo "Creating images/README.md..."; \
		$(PYTHON) extract_images.py --create-readme || true; \
	fi
	@echo "✓ Setup complete"
	@echo ""
	@echo "Next steps:"
	@echo "  1. Run 'make extract' to extract images"
	@echo "  2. Run 'make check-images' to verify"
	@echo "  3. Run 'make render' to build PDF"

# Show project status
.PHONY: status
status:
	@echo "2014 HSC Chemistry Exam - Project Status"
	@echo "========================================="
	@echo ""
	@echo "Files:"
	@if [ -f $(QMD_FILE) ]; then \
		echo "  ✓ $(QMD_FILE)"; \
	else \
		echo "  ✗ $(QMD_FILE) - MISSING"; \
	fi
	@if [ -f chemistry-hsc-exam-2014_archive.pdf ]; then \
		echo "  ✓ chemistry-hsc-exam-2014_archive.pdf"; \
	else \
		echo "  ✗ chemistry-hsc-exam-2014_archive.pdf - MISSING"; \
	fi
	@if [ -f extract_images.py ]; then \
		echo "  ✓ extract_images.py"; \
	else \
		echo "  ✗ extract_images.py - MISSING"; \
	fi
	@if [ -f $(PDF_OUTPUT) ]; then \
		echo "  ✓ $(PDF_OUTPUT) (generated)"; \
	else \
		echo "  ✗ $(PDF_OUTPUT) - Not yet generated"; \
	fi
	@echo ""
	@echo "Images:"
	@present=0; missing=0; \
	for img in $(IMAGES); do \
		if [ -f $$img ]; then \
			present=$$((present + 1)); \
		else \
			missing=$$((missing + 1)); \
		fi; \
	done; \
	echo "  Present: $$present / 23"; \
	echo "  Missing: $$missing / 23"
	@echo ""
	@if command -v quarto >/dev/null 2>&1; then \
		echo "Tools:"; \
		echo "  ✓ Quarto installed (version: $$(quarto --version))"; \
	else \
		echo "Tools:"; \
		echo "  ✗ Quarto not found - install from https://quarto.org"; \
	fi
	@if command -v $(PYTHON) >/dev/null 2>&1; then \
		echo "  ✓ Python installed (version: $$($(PYTHON) --version))"; \
	else \
		echo "  ✗ Python not found"; \
	fi

# Rebuild everything from scratch
.PHONY: rebuild
rebuild: clean render

# Watch mode (requires quarto preview)
.PHONY: watch
watch:
	@echo "Starting Quarto preview..."
	@echo "The document will auto-rebuild when you save changes"
	@echo "Press Ctrl+C to stop"
	quarto preview $(QMD_FILE)

# Validate the QMD file
.PHONY: validate
validate:
	@echo "Validating Quarto document..."
	@if quarto check $(QMD_FILE); then \
		echo "✓ Document is valid"; \
	else \
		echo "✗ Document has errors"; \
		exit 1; \
	fi

# Count questions and marks
.PHONY: count
count:
	@echo "Counting questions and marks..."
	@echo ""
	@echo "Section I Part A (Multiple Choice):"
	@grep -c "^### Question [0-9]" $(QMD_FILE) || true
	@echo ""
	@echo "Section I Part B (Extended Response):"
	@grep -c "^### Question [2-3][0-9]" $(QMD_FILE) || true
	@echo ""
	@echo "Section II (Electives):"
	@grep -c "^## Question [3-9][0-9]" $(QMD_FILE) || true

# Install Python dependencies
.PHONY: install-python-deps
install-python-deps:
	@echo "Installing Python dependencies..."
	$(PYTHON) -m pip install pdf2image Pillow
	@echo "✓ Python dependencies installed"

# Install Quarto (if using TinyTeX)
.PHONY: install-latex
install-latex:
	@echo "Installing TinyTeX for Quarto..."
	quarto install tinytex
	@echo "✓ TinyTeX installed"

# Full setup (for first time use)
.PHONY: full-setup
full-setup: install-python-deps setup
	@echo ""
	@echo "========================================="
	@echo "Setup complete!"
	@echo "========================================="
	@echo ""
	@echo "Next steps:"
	@echo "  1. Ensure chemistry-hsc-exam-2014_archive.pdf is in this directory"
	@echo "  2. Run: make extract"
	@echo "  3. Manually crop the extracted images"
	@echo "  4. Run: make check-images"
	@echo "  5. Run: make render"
	@echo ""

.PHONY: info
info:
	@echo "Document: 2014 HSC Chemistry Examination"
	@echo "Format: Quarto Markdown (.qmd)"
	@echo "Output: PDF"
	@echo "Total Marks: 100"
	@echo "Questions: 36 (Section I: 1-31, Section II: 32-36)"
	@echo "Images Required: 23"
	@echo ""
