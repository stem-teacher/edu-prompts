# Detailed Prompt for Creating an Organic Chemistry Sunburst Visualization

I need your help creating an interactive D3.js sunburst visualization for an organic chemistry knowledge graph. I previously created a similar visualization for physics, and I want to apply the same approach to organize organic chemistry concepts hierarchically.

# Knowledge Graph Structure
I'll provide a comprehensive knowledge graph for organic chemistry that includes:

Core concepts and principles
Functional groups and their relationships
Reaction mechanisms and pathways
Laboratory techniques and applications
Interconnections between concepts

The data may be structured as JSON, nested lists, or another hierarchical format.

# Visualization Requirements
1. Hierarchical Organization
Please organize the sunburst diagram with:

Center: "Organic Chemistry" as the central concept
First Ring: Major organizational categories (e.g., Functional Groups, Reaction Mechanisms, Structural Analysis)
Second Ring: Sub-categories within each major category
Third Ring: Specific concepts, reactions, or techniques
Fourth Ring (optional): Detailed components like specific examples or applications

2. Visual Design Specifications
Please use this academic-friendly color scheme:

Central Concept: Navy Blue (#2C3E50)
Major Categories: Warm Brown/Brick (#A0522D)
Subcategories: Olive Green (#8F9779)
Specific Concepts: Soft Beige (#E9D8A6)
Details/Examples: Medium Beige (#C3B299)
Cross-References: Light Beige (#D4C5B9)
Background: Off-white/Soft Cream (#FDF6EC)

# Typography:

Font Family: Inter, Helvetica, or Arial (sans-serif)
Bold for central concept and major categories
Regular weight for other elements
Font sizes decreasing from center outward

3. Chemistry-Specific Considerations
Please address these organic chemistry visualization needs:

Group similar functional groups with related color shades
Visually distinguish reaction types (substitution, addition, elimination)
Represent chirality and stereochemistry concepts appropriately
Include applicable IUPAC nomenclature references
Link related concepts across different branches (e.g., show how alcohols relate to oxidation reactions)

# 4. Interactive Features
The visualization should include:

Hover tooltips showing detailed information about each concept
Information panel below the visualization displaying extended details when a node is selected
Metadata display including any references to textbooks, laboratory applications, or industry relevance
Auto-truncating labels that fit within the available space

# 5. Technical Implementation
Please use:

D3.js for the core visualization
React components and hooks for state management
A responsive design that scales appropriately
Clean transitions for interactive elements

# 6. Educational Utility
The final visualization should support:

Identification of conceptual relationships in organic chemistry
Progressive learning paths from basic to advanced concepts
Connections between theoretical knowledge and laboratory applications
Clear visualization of reaction mechanisms and transformations

Sample D3.js Implementation
Please implement the sunburst diagram using code structured similarly to:
```typescript
jsximport React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const OrganicChemistrySunburst = () => {
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);
  const [tooltipContent, setTooltipContent] = useState({ visible: false, content: "", x: 0, y: 0 });
  const [focusedNode, setFocusedNode] = useState(null);

  // Define node colors by type with the suggested color scheme
  const nodeColors = {
    central: "#2C3E50", // Navy Blue
    major: "#A0522D",   // Warm Brown/Brick
    subcategory: "#8F9779", // Olive Green
    concept: "#E9D8A6",  // Soft Beige
    detail: "#C3B299",    // Medium Beige for details
    reference: "#D4C5B9" // Light Beige for cross-references
  };

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous visualization
    d3.select(svgRef.current).selectAll("*").remove();

    // Set up dimensions
    const width = 900;
    const height = 900;
    const radius = Math.min(width, height) / 2 - 20;

    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", "100%")
      .attr("height", "100%")
      .style("font-family", "'Inter', 'Helvetica', 'Arial', sans-serif")
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    // Define your organic chemistry data structure here
    const data = {
      name: "Organic Chemistry",
      desc: "Study of carbon-based compounds and their properties",
      type: "central",
      children: [
        {
          name: "Functional Groups",
          desc: "Characteristic groups of atoms within molecules",
          type: "major",
          children: [
            // Add organic chemistry functional groups here
          ]
        },
        {
          name: "Reaction Mechanisms",
          desc: "Pathways by which chemical reactions occur",
          type: "major",
          children: [
            // Add reaction mechanism categories here
          ]
        },
        // Additional major categories...
      ]
    };

    // Remainder of D3.js implementation...
  }, []);

  // Rest of the component code...
};

export default OrganicChemistrySunburst;
```

# Expected Output
The final visualization should be similar to my physics knowledge graph but tailored to organic chemistry concepts. It should allow students and teachers to:

Grasp the overall structure of organic chemistry
Explore relationships between functional groups and reaction mechanisms
Understand progressive complexity from basic concepts to advanced applications
See connections between theoretical principles and laboratory techniques

Please generate this interactive sunburst visualization based on the organic chemistry knowledge graph I'll provide, maintaining academic rigor while creating an intuitive and visually appealing learning tool.

Note: When I share the actual knowledge graph data in our conversation, please first examine its structure thoroughly to understand the hierarchy and relationships before implementing the visualization. Feel free to suggest modifications to the data organization if needed to create a more effective visualization.
