#!/bin/bash

echo "Creating images directory if it doesn't exist..."
mkdir -p images
echo ""

echo "Downloading Chemistry Module 7 Media Resources (Version 2)..."
echo "-------------------------------------------------"

# Alkane Naming Diagram (OK from previous script)
echo "Downloading: Alkane Naming Diagram..."
wget -O images/alkane_naming_diagram.png "https://chem.libretexts.org/@api/deki/files/69509/Rule1_example1.png?revision=1"
echo ""

# Isomer Animation (Placeholder: isomer_animation.gif) - REPLACED
echo "Downloading: Isomer Animation (Butane Isomers)..."
# Old: wget -O images/isomer_animation.gif "https://chem.libretexts.org/@api/deki/files/132886/StructuralIsomerismL.gif?revision=1"
wget -O images/isomer_animation.gif "https://chem.libretexts.org/@api/deki/files/132885/StructuralIsomersButaneL.gif?revision=1"
echo ""

# Molymod Guide (Placeholder: molymod_guide.pdf) - REPLACED
echo "Downloading: Molymod Guide (from Molymod)..."
# Old: wget -O images/molymod_guide.pdf "https://www.chm.uri.edu/wp-content/uploads/2017/09/Molymod-instructions.pdf"
# Try manufacturer site link
wget -O images/molymod_guide.pdf "https://www.molymod.com/pdf/Inorganic_Organic_Student_Instructions.pdf"
echo ""

# VSEPR Animation (OK from previous script)
echo "Downloading: VSEPR Animation..."
wget -O images/vsepr_animation.gif "https://chem.libretexts.org/@api/deki/files/62981/VSEPR_shapes.gif?revision=1"
echo ""

# Safety Data Sheet for Hexane (Placeholder: sds_hexane_example.pdf) - REPLACED
echo "Downloading: Safety Data Sheet (Hexane Example from Alfa Aesar)..."
# Old: wget -O images/sds_hexane_example.pdf "https://ehs.princeton.edu/sites/ehs/files/sds/hexane.pdf"
# Try Alfa Aesar link
wget -O images/sds_hexane_example.pdf "https://www.alfa.com/content/msds/english/a15648.pdf"
echo ""

# Addition Reaction Animation (Placeholder: addition_reaction_mechanism_animation.mp4 - Replaced with GIF) - REPLACED
echo "Downloading: Alkene Addition Reaction Animation (Bromination)..."
# Old: wget -O images/addition_reaction_bromination.gif "https://chem.libretexts.org/@api/deki/files/70827/Bromination_Mechanism.gif?revision=1"
# Try Wikimedia direct link again, might work better than some LibreText redirects
wget -O images/addition_reaction_bromination.gif "https://upload.wikimedia.org/wikipedia/commons/5/58/Mechanism_of_bromination_of_alkene.gif"
echo ""

# Alcohol Classification Diagram (Placeholder: alcohol_classification_diagram.png) - REPLACED
echo "Downloading: Alcohol Classification Diagram..."
# Old: wget -O images/alcohol_classification_diagram.png "https://chem.libretexts.org/@api/deki/files/59713/class_alcohol.png?revision=1"
wget -O images/alcohol_classification_diagram.png "https://chem.libretexts.org/@api/deki/files/134389/primarysecondarytertiary.png?revision=1"
echo ""

# Esterification Reflux Setup (Placeholder: esterification_reflux_setup.gif) - REPLACED
echo "Downloading: Esterification Reflux Setup Diagram (from LibreTexts)..."
# Old: wget -O images/esterification_reflux_setup.gif "https://www.bbc.co.uk/staticarchive/a8a79bb024c7d8b27d4c589d7a8d3029f382f779.gif"
wget -O images/esterification_reflux_setup.gif "https://chem.libretexts.org/@api/deki/files/70567/Reflux_Apparatus.gif?revision=1"
echo ""

# Micelle Diagram (Placeholder: micelle_diagram.png) - REPLACED
echo "Downloading: Micelle Diagram (from Wikimedia)..."
# Old: wget -O images/micelle_diagram.png "https://chem.libretexts.org/@api/deki/files/64783/micelle.png?revision=1"
wget -O images/micelle_diagram.png "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Micelle_scheme-en.svg/500px-Micelle_scheme-en.svg.png"
echo ""

# Addition Polymerisation Animation (Placeholder: addition_polymerisation_animation.mp4 - Replaced with GIF) - REPLACED
echo "Downloading: Addition Polymerisation Animation (from Wikimedia)..."
# Old: wget -O images/addition_polymerisation.gif "https://upload.wikimedia.org/wikipedia/commons/a/a2/Addition_polymerization_initiation_and_propagation.gif"
# Using the direct upload URL again, sometimes works better
wget -O images/addition_polymerisation.gif "https://upload.wikimedia.org/wikipedia/commons/a/a2/Addition_polymerization_initiation_and_propagation.gif"
echo ""

# Calorimetry Setup Diagram (Placeholder: calorimetry_setup_diagram.png) - REPLACED
echo "Downloading: Simple Calorimetry Setup Diagram (from Wikimedia)..."
# Old: wget -O images/calorimetry_setup_diagram.png "https://chem.libretexts.org/@api/deki/files/129008/CALSetupe.png?revision=1"
wget -O images/calorimetry_setup_diagram.png "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Simple_calorimeter.svg/500px-Simple_calorimeter.svg.png"
echo ""

echo "-------------------------------------------------"
echo "Download process finished (Version 2)."
echo "Files are located in the 'images' directory."
echo "Please check the 'images' directory to ensure files have downloaded correctly (non-zero size)."
echo "Note: Web links can change; some resources might still fail if URLs become invalid or servers block direct downloads."
