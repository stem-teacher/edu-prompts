#!/bin/bash

USER_AGENT="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36"

echo "Creating images directory if it doesn't exist..."
mkdir -p images
echo ""

echo "Downloading Chemistry Module 7 Media Resources (Version 3)..."
echo "Using User-Agent: $USER_AGENT"
echo "-------------------------------------------------"

# --- Files that worked previously ---
echo "Downloading: Alkane Naming Diagram (LibreTexts)..."
wget -U "$USER_AGENT" -O images/alkane_naming_diagram.png "https://chem.libretexts.org/@api/deki/files/69509/Rule1_example1.png?revision=1"
echo ""

echo "Downloading: VSEPR Animation (LibreTexts)..."
wget -U "$USER_AGENT" -O images/vsepr_animation.gif "https://chem.libretexts.org/@api/deki/files/62981/VSEPR_shapes.gif?revision=1"
echo ""

echo "Downloading: Esterification Reflux Setup Diagram (BBC Archive)..."
wget -U "$USER_AGENT" -O images/esterification_reflux_setup.gif "https://www.bbc.co.uk/staticarchive/a8a79bb024c7d8b27d4c589d7a8d3029f382f779.gif"
echo ""


# --- Files that failed previously - Trying new links/methods ---

# Isomer Animation (Butane Isomers) - REPLACED (Trying direct Wikimedia media link)
echo "Downloading: Isomer Animation (Butane Isomers - Wikimedia)..."
# Old v2: wget -U "$USER_AGENT" -O images/isomer_animation.gif "https://chem.libretexts.org/@api/deki/files/132885/StructuralIsomersButaneL.gif?revision=1"
wget -U "$USER_AGENT" -O images/isomer_animation.gif "https://upload.wikimedia.org/wikipedia/commons/e/e0/Butane-isomers-2D-B.gif"
echo ""

# Molymod Guide - REPLACED (Trying Bristol University link)
echo "Downloading: Molymod Guide (Bristol Uni)..."
# Old v2: wget -U "$USER_AGENT" -O images/molymod_guide.pdf "https://www.molymod.com/pdf/Inorganic_Organic_Student_Instructions.pdf"
# This link might be old but sometimes .ac.uk sites are more stable for direct access
wget -U "$USER_AGENT" -O images/molymod_guide.pdf "http://www.chm.bris.ac.uk/webprojects2001/moorcraft/molymod.pdf"
echo ""

# Safety Data Sheet for Hexane - REPLACED (Trying Fisher Scientific link)
echo "Downloading: Safety Data Sheet (Hexane Example from Fisher Sci)..."
# Old v2: wget -U "$USER_AGENT" -O images/sds_hexane_example.pdf "https://www.alfa.com/content/msds/english/a15648.pdf"
wget -U "$USER_AGENT" -O images/sds_hexane_example.pdf "https://www.fishersci.com/content/dam/fishersci/en_US/documents/programs/education/regulatory-documents/sds/chemicals/chemicals-h/S25358.pdf"
echo ""

# Addition Reaction Animation (Bromination) - REPLACED (Trying different Wikimedia Commons image)
echo "Downloading: Alkene Addition Reaction Animation (Bromination - Static Diagram)..."
# Old v2: wget -U "$USER_AGENT" -O images/addition_reaction_bromination.gif "https://upload.wikimedia.org/wikipedia/commons/5/58/Mechanism_of_bromination_of_alkene.gif"
# This is a static diagram, but shows the key steps clearly
wget -U "$USER_AGENT" -O images/addition_reaction_bromination.png "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Electrophilic_Addition_Mechanism_General.svg/800px-Electrophilic_Addition_Mechanism_General.svg.png"
echo ""

# Alcohol Classification Diagram - REPLACED (Trying different LibreTexts link)
echo "Downloading: Alcohol Classification Diagram (LibreTexts Alt)..."
# Old v2: wget -U "$USER_AGENT" -O images/alcohol_classification_diagram.gif "https://www.chem.ucalgary.ca/courses/350/Carey5th/Ch17/1701.gif"
wget -U "$USER_AGENT" -O images/alcohol_classification_diagram.png "https://chem.libretexts.org/@api/deki/files/134389/primarysecondarytertiary.png?revision=1"
echo ""

# Micelle Diagram - REPLACED (Trying ThoughtCo link)
echo "Downloading: Micelle Diagram (ThoughtCo)..."
# Old v2: wget -U "$USER_AGENT" -O images/micelle_diagram.png "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Micelle_scheme-en.svg/500px-Micelle_scheme-en.svg.png"
# Using --no-check-certificate as ThoughtCo sometimes has certificate issues for wget
wget -U "$USER_AGENT" --no-check-certificate -O images/micelle_diagram.png "https://www.thoughtco.com/thmb/wK45Q0L5G9q6D0K5R9G2w8yX8g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/micelle-diagram-609449_final-89f6d9c1d3f14018854b19cd128a66bc.png"
echo ""

# Addition Polymerisation Animation - REPLACED (Trying a different animation source - Chem LibreTexts GIF)
echo "Downloading: Addition Polymerisation Animation (Chem LibreTexts GIF)..."
# Old v2: wget -U "$USER_AGENT" -O images/addition_polymerisation.gif "https://upload.wikimedia.org/wikipedia/commons/a/a2/Addition_polymerization_initiation_and_propagation.gif"
wget -U "$USER_AGENT" -O images/addition_polymerisation.gif "https://chem.libretexts.org/@api/deki/files/63244/FreeRadicalAdditionPolymerization.gif?revision=1"
echo ""

# Calorimetry Setup Diagram - REPLACED (Trying alternative Wikimedia link - PNG)
echo "Downloading: Simple Calorimetry Setup Diagram (Wikimedia Alt PNG)..."
# Old v2: wget -U "$USER_AGENT" -O images/calorimetry_setup_diagram.png "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Simple_calorimeter.svg/500px-Simple_calorimeter.svg.png"
wget -U "$USER_AGENT" -O images/calorimetry_setup_diagram.png "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Coffee_cup_calorimeter.svg/512px-Coffee_cup_calorimeter.svg.png"
echo ""


echo "-------------------------------------------------"
echo "Download process finished (Version 3)."
echo "Files are located in the 'images' directory."
echo "Please check the 'images' directory again to ensure files have downloaded correctly (non-zero size)."
