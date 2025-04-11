#!/bin/bash

echo "Creating images directory if it doesn't exist..."
mkdir -p images
echo ""

echo "Downloading Chemistry Module 7 Media Resources..."
echo "-------------------------------------------------"

# Alkane Naming Diagram (Placeholder: alkane_naming_tutorial.mp4 - Replaced with diagram)
echo "Downloading: Alkane Naming Diagram..."
wget -O images/alkane_naming_diagram.png "https://chem.libretexts.org/@api/deki/files/69509/Rule1_example1.png?revision=1"
echo ""

# Isomer Animation (Placeholder: isomer_animation.gif)
echo "Downloading: Isomer Animation..."
wget -O images/isomer_animation.gif "https://chem.libretexts.org/@api/deki/files/132886/StructuralIsomerismL.gif?revision=1"
echo ""

# Molymod Guide (Placeholder: molymod_guide.pdf)
echo "Downloading: Molymod Guide..."
wget -O images/molymod_guide.pdf "https://www.chm.uri.edu/wp-content/uploads/2017/09/Molymod-instructions.pdf"
echo ""

# VSEPR Animation (Placeholder: vsepr_animation.gif)
echo "Downloading: VSEPR Animation..."
wget -O images/vsepr_animation.gif "https://chem.libretexts.org/@api/deki/files/62981/VSEPR_shapes.gif?revision=1"
echo ""

# Safety Data Sheet for Hexane (Placeholder: sds_hexane.pdf)
echo "Downloading: Safety Data Sheet (Hexane Example)..."
wget -O images/sds_hexane_example.pdf "https://ehs.princeton.edu/sites/ehs/files/sds/hexane.pdf"
echo ""

# Addition Reaction Animation (Placeholder: addition_reaction_mechanism_animation.mp4 - Replaced with GIF)
echo "Downloading: Alkene Addition Reaction Animation (Bromination)..."
wget -O images/addition_reaction_bromination.gif "https://chem.libretexts.org/@api/deki/files/70827/Bromination_Mechanism.gif?revision=1"
echo ""

# Alcohol Classification Diagram (Placeholder: alcohol_classification_diagram.png)
echo "Downloading: Alcohol Classification Diagram..."
wget -O images/alcohol_classification_diagram.png "https://chem.libretexts.org/@api/deki/files/59713/class_alcohol.png?revision=1"
echo ""

# Esterification Reflux Setup (Placeholder: esterification_reflux_setup.png)
echo "Downloading: Esterification Reflux Setup Diagram..."
wget -O images/esterification_reflux_setup.gif "https://www.bbc.co.uk/staticarchive/a8a79bb024c7d8b27d4c589d7a8d3029f382f779.gif"
echo ""

# Micelle Diagram (Placeholder: micelle_diagram.png)
echo "Downloading: Micelle Diagram..."
wget -O images/micelle_diagram.png "https://chem.libretexts.org/@api/deki/files/64783/micelle.png?revision=1"
echo ""

# Addition Polymerisation Animation (Placeholder: addition_polymerisation_animation.mp4 - Replaced with GIF)
echo "Downloading: Addition Polymerisation Animation..."
wget -O images/addition_polymerisation.gif "https://upload.wikimedia.org/wikipedia/commons/a/a2/Addition_polymerization_initiation_and_propagation.gif"
echo ""

# Calorimetry Setup Diagram (Placeholder: calorimetry_setup_diagram.png)
echo "Downloading: Simple Calorimetry Setup Diagram..."
# Using a general chemistry setup diagram as specific alcohol combustion diagrams might be complex
wget -O images/calorimetry_setup_diagram.png "https://chem.libretexts.org/@api/deki/files/129008/CALSetupe.png?revision=1"
echo ""


echo "-------------------------------------------------"
echo "Download process finished."
echo "Files are located in the 'images' directory."
echo "Note: Some links might become inactive over time. Videos were generally replaced with diagrams/GIFs."
