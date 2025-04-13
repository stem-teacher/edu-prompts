import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const FinalizedReactionTypeChordDiagram = () => {
  const svgRef = useRef(null);
  const [tooltipContent, setTooltipContent] = useState({ visible: false, content: "", x: 0, y: 0 });
  const [selectedMolecule, setSelectedMolecule] = useState(null);

  // Define color scheme for reaction types
  const reactionTypeColors = {
    "Addition": "#4682B4",      // Steel blue
    "Substitution": "#6A5ACD",  // Slate blue 
    "Elimination": "#2E8B57",   // Sea green
    "Oxidation": "#CD5C5C",     // Indian red
    "Condensation": "#9932CC"   // Dark orchid
  };

  // Define color scheme for functional groups
  const functionalGroupColors = {
    "Alkanes": "#8F9779",        // Olive green
    "Alkenes": "#9FA9A3",        // Gray-green
    "Alkynes": "#B5BDB4",        // Light gray-green
    "Alcohols": "#A0522D",       // Brown
    "Aldehydes": "#B87A62",      // Lighter brown
    "Ketones": "#C39F9B",        // Rose-brown 
    "Carboxylic Acids": "#8B4513", // Dark brown
    "Esters": "#D2B48C",         // Tan
    "Haloalkanes": "#5D6D7E"     // Blue-gray
  };

  // Define the functional groups involved in reactions
  const functionalGroups = [
    "Alkanes", "Alkenes", "Alkynes", "Alcohols", "Aldehydes", 
    "Ketones", "Carboxylic Acids", "Esters", "Haloalkanes"
  ];

  // Description for each functional group
  const groupDescriptions = {
    "Alkanes": "Saturated hydrocarbons with single C-C bonds",
    "Alkenes": "Unsaturated hydrocarbons with C=C double bonds",
    "Alkynes": "Unsaturated hydrocarbons with C≡C triple bonds",
    "Alcohols": "Compounds with -OH functional group",
    "Aldehydes": "Compounds with -CHO functional group",
    "Ketones": "Compounds with internal C=O group",
    "Carboxylic Acids": "Compounds with -COOH functional group",
    "Esters": "Compounds with -COO- functional group",
    "Haloalkanes": "Compounds with halogen substituents"
  };

  // Examples for each functional group
  const groupExamples = {
    "Alkanes": ["Methane (CH₄)", "Ethane (CH₃CH₃)", "Propane (CH₃CH₂CH₃)"],
    "Alkenes": ["Ethene (CH₂=CH₂)", "Propene (CH₃CH=CH₂)"],
    "Alkynes": ["Ethyne (HC≡CH)", "Propyne (CH₃C≡CH)"],
    "Alcohols": ["Ethanol (CH₃CH₂OH)", "Propan-2-ol (CH₃CHOHCH₃)"],
    "Aldehydes": ["Ethanal (CH₃CHO)", "Propanal (CH₃CH₂CHO)"],
    "Ketones": ["Propanone (CH₃COCH₃)", "Butanone (CH₃CH₂COCH₃)"],
    "Carboxylic Acids": ["Ethanoic acid (CH₃COOH)", "Propanoic acid (CH₃CH₂COOH)"],
    "Esters": ["Ethyl ethanoate (CH₃COOCH₂CH₃)", "Methyl propanoate (CH₃CH₂COOCH₃)"],
    "Haloalkanes": ["Chloromethane (CH₃Cl)", "Bromoethane (CH₃CH₂Br)"]
  };

  // Define reactions organized by type
  const reactionsByType = {
    "Addition": [
      {source: "Alkenes", target: "Alkanes", reagent: "H₂/Ni, Pt or Pd", example: "CH₂=CH₂ + H₂ → CH₃CH₃"},
      {source: "Alkenes", target: "Alcohols", reagent: "H₂O/H⁺", example: "CH₂=CH₂ + H₂O → CH₃CH₂OH"},
      {source: "Alkenes", target: "Haloalkanes", reagent: "HX or X₂", example: "CH₂=CH₂ + HCl → CH₃CH₂Cl"},
      {source: "Alkynes", target: "Alkenes", reagent: "H₂/Ni (partial)", example: "HC≡CH + H₂ → H₂C=CH₂"},
      {source: "Alkynes", target: "Alkanes", reagent: "H₂/Ni (excess)", example: "HC≡CH + 2H₂ → CH₃CH₃"}
    ],
    "Substitution": [
      {source: "Alkanes", target: "Haloalkanes", reagent: "X₂/UV", example: "CH₄ + Cl₂ → CH₃Cl + HCl"},
      {source: "Alcohols", target: "Haloalkanes", reagent: "HX", example: "CH₃CH₂OH + HBr → CH₃CH₂Br + H₂O"},
      {source: "Haloalkanes", target: "Alcohols", reagent: "OH⁻/H₂O", example: "CH₃CH₂Br + OH⁻ → CH₃CH₂OH + Br⁻"}
    ],
    "Elimination": [
      {source: "Alcohols", target: "Alkenes", reagent: "H₂SO₄/heat", example: "CH₃CH₂OH → CH₂=CH₂ + H₂O"}
    ],
    "Oxidation": [
      {source: "Alcohols", target: "Aldehydes", reagent: "K₂Cr₂O₇/H⁺(controlled)", example: "CH₃CH₂OH → CH₃CHO + H₂O"},
      {source: "Alcohols", target: "Ketones", reagent: "K₂Cr₂O₇/H⁺", example: "CH₃CHOHCH₃ → CH₃COCH₃ + H₂O"},
      {source: "Aldehydes", target: "Carboxylic Acids", reagent: "K₂Cr₂O₇/H⁺(excess)", example: "CH₃CHO → CH₃COOH"}
    ],
    "Condensation": [
      {source: "Alcohols", target: "Esters", reagent: "RCOOH/H⁺", example: "CH₃CH₂OH + CH₃COOH → CH₃COOCH₂CH₃ + H₂O"},
      {source: "Carboxylic Acids", target: "Esters", reagent: "ROH/H⁺", example: "CH₃COOH + CH₃CH₂OH → CH₃COOCH₂CH₃ + H₂O"}
    ]
  };

  // Structure to store which reaction types are currently active (all true by default)
  const [activeReactionTypes, setActiveReactionTypes] = useState(() => {
    const initial = {};
    Object.keys(reactionTypeColors).forEach(type => {
      initial[type] = true;
    });
    return initial;
  });

  // Create a full list of all reaction connections
  const allReactions = Object.entries(reactionsByType).flatMap(([type, reactions]) => 
    reactions.map(r => ({...r, type}))
  );

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous content
    d3.select(svgRef.current).selectAll("*").remove();

    // Set up dimensions for a fixed size diagram
    const width = 800;
    const height = 800;
    const outerRadius = Math.min(width, height) * 0.45;
    const innerRadius = outerRadius - 30;

    // Create SVG with expanded viewBox - significantly increased height to accommodate title
    const svg = d3.select(svgRef.current)
      .attr("viewBox", `-100 -100 ${width + 200} ${height + 300}`)
      .attr("width", "800px")
      .attr("height", "800px")
      .style("font-family", "'Inter', 'Helvetica', 'Arial', sans-serif");
      
    // Add title at the bottom of the diagram - position that worked before
    svg.append("text")
      .attr("x", width/2)
      .attr("y", height + 110)  // Use position that worked previously
      .attr("text-anchor", "middle")
      .style("font-size", "20px")
      .style("font-weight", "bold")
      .style("fill", "#000")  // Ensure it's black and visible
      .text("Organic Chemistry Reaction Mechanisms");

    // Create index mapping for functional groups
    const index = {};
    functionalGroups.forEach((group, i) => {
      index[group] = i;
    });

    // Calculate uniform angles for each functional group
    const totalGroups = functionalGroups.length;
    const angleStep = (2 * Math.PI) / totalGroups;
    
    // Create custom group data with uniform angles
    const groupData = functionalGroups.map((group, i) => {
      const startAngle = i * angleStep;
      const endAngle = (i + 1) * angleStep - (angleStep * 0.1); // Add small gap
      return {
        index: i,
        name: group,
        startAngle,
        endAngle,
        value: 1 // Equal value for all groups
      };
    });

    // Filter visible reactions based on active types
    const visibleReactions = allReactions.filter(r => activeReactionTypes[r.type]);

    // Create chord group
    const chordGroup = svg.append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Create group arc generator
    const arc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

    // Draw functional group arcs
    chordGroup.append("g")
      .selectAll("path")
      .data(groupData)
      .join("path")
      .attr("fill", d => functionalGroupColors[d.name])
      .attr("stroke", "#fff")
      .attr("d", arc)
      .on("click", (event, d) => {
        const moleculeName = d.name;
        setSelectedMolecule(prevSelected => 
          prevSelected === moleculeName ? null : moleculeName
        );
      });

    // Add all labels - both angled and horizontal - in one unified approach
    chordGroup.append("g")
      .selectAll("text")
      .data(groupData)
      .join("text")
      .each(d => { d.angle = (d.startAngle + d.endAngle) / 2; })
      .attr("dy", "0.35em")
      .attr("text-anchor", d => d.angle > Math.PI ? "end" : "start")
      .attr("transform", d => {
        // Add extra padding for all labels
        let extraPadding = 40; // Increased default padding
        
        // Additional padding for longer names
        if (d.name === "Carboxylic Acids") {
          extraPadding += 20;
        } else if (["Haloalkanes", "Alkanes", "Aldehydes"].includes(d.name)) {
          extraPadding += 15;
        }
        
        // Regular angled labels for all groups
        return `
          rotate(${(d.angle * 180 / Math.PI - 90)})
          translate(${outerRadius + extraPadding})
          ${d.angle > Math.PI ? "rotate(180)" : ""}
        `;
      })
      .text(d => d.name)
      .style("font-size", "14px")
      .style("font-weight", "bold");
      
    // Ensure we don't have any filtering that removes certain labels
    // No filter: .data(groupData.filter(d => !["Haloalkanes", "Alkanes", "Aldehydes"].includes(d.name)))

    // Create custom ribbon generator for fixed width connections
    const customRibbon = (d) => {
      const sourceGroup = groupData[index[d.source]];
      const targetGroup = groupData[index[d.target]];
      
      if (!sourceGroup || !targetGroup) return null;
      
      const sourceAngle = (sourceGroup.startAngle + sourceGroup.endAngle) / 2;
      const targetAngle = (targetGroup.startAngle + targetGroup.endAngle) / 2;
      
      // Fixed-width chords
      const sourceWidth = 0.1;  
      const targetWidth = 0.1;
      
      const s0 = sourceAngle - sourceWidth / 2;
      const s1 = sourceAngle + sourceWidth / 2;
      const t0 = targetAngle - targetWidth / 2;
      const t1 = targetAngle + targetWidth / 2;
      
      // Calculate points for the path
      const r = innerRadius;
      
      // Source arc endpoints
      const sourceStartX = r * Math.cos(s0);
      const sourceStartY = r * Math.sin(s0);
      const sourceEndX = r * Math.cos(s1);
      const sourceEndY = r * Math.sin(s1);
      
      // Target arc endpoints
      const targetStartX = r * Math.cos(t0);
      const targetStartY = r * Math.sin(t0);
      const targetEndX = r * Math.cos(t1);
      const targetEndY = r * Math.sin(t1);
      
      // Create the ribbon path
      const path = d3.path();
      
      // Start at the beginning of the source arc
      path.moveTo(sourceStartX, sourceStartY);
      
      // Draw the source arc
      path.arc(0, 0, r, s0, s1);
      
      // Draw curve from source to target
      path.bezierCurveTo(
        sourceEndX * 0.5, sourceEndY * 0.5,
        targetStartX * 0.5, targetStartY * 0.5,
        targetStartX, targetStartY
      );
      
      // Draw the target arc
      path.arc(0, 0, r, t0, t1);
      
      // Draw curve from target back to source
      path.bezierCurveTo(
        targetEndX * 0.5, targetEndY * 0.5,
        sourceStartX * 0.5, sourceStartY * 0.5,
        sourceStartX, sourceStartY
      );
      
      path.closePath();
      return path.toString();
    };

    // Draw reaction ribbons with consistent width
    chordGroup.append("g")
      .selectAll("path")
      .data(visibleReactions)
      .join("path")
      .attr("d", d => customRibbon(d))
      .attr("fill", d => reactionTypeColors[d.type])
      .attr("stroke", d => d3.rgb(reactionTypeColors[d.type]).darker())
      .attr("stroke-width", 0.5)
      .style("opacity", 0.7)
      .on("mouseover", (event, d) => {
        // Highlight this chord
        d3.select(event.currentTarget).style("opacity", 1);
        
        // Show tooltip with reaction details
        const tooltip = `
          <div style="background-color: white; padding: 10px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.2); max-width: 280px;">
            <h3 style="margin: 0 0 5px 0; color: ${reactionTypeColors[d.type]};">${d.type} Reaction</h3>
            <p style="margin: 0 0 5px 0;"><strong>From:</strong> ${d.source} → <strong>To:</strong> ${d.target}</p>
            <p style="margin: 0 0 5px 0;"><strong>Reagent:</strong> ${d.reagent}</p>
            <p style="margin: 0 0 5px 0;"><strong>Example:</strong> ${d.example}</p>
          </div>
        `;
        
        setTooltipContent({
          visible: true,
          content: tooltip,
          x: event.pageX,
          y: event.pageY
        });
      })
      .on("mouseout", (event) => {
        d3.select(event.currentTarget).style("opacity", 0.7);
        setTooltipContent(prev => ({ ...prev, visible: false }));
      });

  }, [activeReactionTypes, selectedMolecule]);

  // Toggle reaction type visibility
  const toggleReactionType = (type) => {
    setActiveReactionTypes(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  // Get chemistry information for selected molecule
  const getMoleculeChemistry = (moleculeName) => {
    if (!moleculeName) return null;

    // Find all reactions where this molecule is a source or target
    const relatedReactions = [];
    
    Object.entries(reactionsByType).forEach(([reactionType, reactions]) => {
      reactions.forEach(reaction => {
        if (reaction.source === moleculeName || reaction.target === moleculeName) {
          relatedReactions.push({
            ...reaction,
            type: reactionType
          });
        }
      });
    });

    return {
      name: moleculeName,
      description: groupDescriptions[moleculeName],
      examples: groupExamples[moleculeName],
      reactions: relatedReactions
    };
  };

  const selectedMoleculeData = getMoleculeChemistry(selectedMolecule);

  return (
    <div className="w-full h-full relative">
      {/* Controls for toggling reaction types */}
      <div className="absolute top-5 left-5 z-10">
        <div className="bg-white p-4 rounded-lg shadow-md w-64">
          <h3 className="text-lg font-bold mb-3">Reaction Types</h3>
          <div className="space-y-2">
            {Object.entries(reactionTypeColors).map(([type, color]) => (
              <div key={type} className="flex items-center">
                <input
                  type="checkbox"
                  id={`reaction-${type}`}
                  checked={activeReactionTypes[type]}
                  onChange={() => toggleReactionType(type)}
                  className="mr-2"
                />
                <div 
                  className="w-4 h-4 mr-2" 
                  style={{ backgroundColor: color }}
                ></div>
                <label htmlFor={`reaction-${type}`} className="text-sm">
                  {type}
                </label>
              </div>
            ))}
          </div>
          <div className="mt-4 text-xs text-gray-600">
            Toggle checkboxes to show/hide specific reaction mechanisms.
          </div>
        </div>
      </div>

      {/* Main visualization */}
      <div className="flex justify-center items-center h-full">
        <svg ref={svgRef}></svg>
      </div>

      {/* Tooltip */}
      {tooltipContent.visible && (
        <div 
          className="fixed z-50 pointer-events-none"
          style={{
            left: tooltipContent.x + 10,
            top: tooltipContent.y + 10
          }}
          dangerouslySetInnerHTML={{ __html: tooltipContent.content }}
        />
      )}

      {/* Selected molecule chemistry panel */}
      {selectedMoleculeData && (
        <div className="absolute top-5 right-5 bg-white p-4 rounded-lg shadow-md w-72 max-h-96 overflow-y-auto z-10">
          <h3 className="text-lg font-bold mb-2" 
              style={{ color: functionalGroupColors[selectedMoleculeData.name] }}>
            {selectedMoleculeData.name}
          </h3>
          <p className="text-sm mb-3">{selectedMoleculeData.description}</p>
          
          <div className="mb-3">
            <h4 className="font-bold text-sm mb-1">Examples:</h4>
            <ul className="list-disc pl-5 text-xs">
              {selectedMoleculeData.examples.map((example, idx) => (
                <li key={idx}>{example}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-sm mb-1">Reactions:</h4>
            <div className="space-y-2">
              {selectedMoleculeData.reactions.map((reaction, idx) => (
                <div key={idx} className="text-xs p-2 border rounded" 
                     style={{ borderLeftColor: reactionTypeColors[reaction.type], borderLeftWidth: '4px' }}>
                  <div className="font-bold" style={{ color: reactionTypeColors[reaction.type] }}>
                    {reaction.type}
                  </div>
                  <div>
                    {reaction.source === selectedMoleculeData.name ? 
                      <span>To: <b>{reaction.target}</b></span> : 
                      <span>From: <b>{reaction.source}</b></span>}
                  </div>
                  <div>Reagent: {reaction.reagent}</div>
                  <div className="mt-1 pt-1 border-t border-gray-100">
                    {reaction.example}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="mt-4 text-sm text-gray-500 hover:text-gray-700"
            onClick={() => setSelectedMolecule(null)}
          >
            Close
          </button>
        </div>
      )}

      {/* Teaching info panel */}
      <div className="absolute bottom-5 left-5 bg-white bg-opacity-90 p-3 rounded-lg shadow-md max-w-xs z-10">
        <h4 className="font-bold text-sm mb-1">Visualization Guide</h4>
        <ul className="text-xs list-disc pl-5 space-y-1">
          <li>Colors indicate reaction mechanisms</li>
          <li>Hover over connections for reaction details</li>
          <li>Click on a functional group for detailed chemistry</li>
          <li>Toggle reaction types using checkboxes</li>
        </ul>
      </div>
    </div>
  );
};

export default FinalizedReactionTypeChordDiagram;