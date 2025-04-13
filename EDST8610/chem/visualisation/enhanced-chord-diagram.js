import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const EnhancedOrganicChemistryChord = ({ knowledgeGraph, bloomFilter, syllabusFilter }) => {
  const svgRef = useRef(null);
  const [tooltipContent, setTooltipContent] = useState({ visible: false, content: "", x: 0, y: 0 });
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [showLabels, setShowLabels] = useState(true);
  const [showBloomLevels, setShowBloomLevels] = useState(true);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous visualization
    d3.select(svgRef.current).selectAll("*").remove();

    // Set up dimensions
    const width = 800;
    const height = 800;
    const outerRadius = Math.min(width, height) * 0.45;
    const innerRadius = outerRadius * 0.9;

    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", "100%")
      .attr("height", "100%")
      .style("font-family", "'Inter', 'Helvetica', 'Arial', sans-serif");

    // Define color scheme for functional groups
    const groupColors = {
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

    // Define color scheme for reaction types
    const reactionColors = {
      "Addition": "#4682B4",        // Steel blue
      "Substitution": "#6A5ACD",    // Slate blue
      "Elimination": "#2E8B57",     // Sea green
      "Oxidation": "#CD5C5C",       // Indian red
      "Condensation": "#9932CC"     // Dark orchid
    };

    // Define color scheme for Bloom's taxonomy levels
    const bloomColors = {
      "Remember": "#74ADD1",
      "Understand": "#4575B4",
      "Apply": "#ABD9E9",
      "Analyse": "#FDAE61",
      "Evaluate": "#F46D43",
      "Create": "#D73027"
    };

    // Create matrix data
    const index = {
      "Alkanes": 0,
      "Alkenes": 1,
      "Alkynes": 2,
      "Alcohols": 3,
      "Aldehydes": 4,
      "Ketones": 5,
      "Carboxylic Acids": 6,
      "Esters": 7,
      "Haloalkanes": 8
    };

    // Map reactions to knowledge nodes (this would come from your knowledge graph)
    const reactionToNodeMapping = {
      "Alkanes-Haloalkanes": "CHM_M7_RPROD_N2", // Substitution
      "Alkenes-Alkanes": "CHM_M7_RPROD_N1", // Addition
      "Alkenes-Alcohols": "CHM_M7_RPROD_N1", // Addition
      "Alkenes-Haloalkanes": "CHM_M7_RPROD_N1", // Addition
      "Alkynes-Alkenes": "CHM_M7_RPROD_N1", // Addition
      "Alkynes-Alkanes": "CHM_M7_RPROD_N1", // Addition
      "Alcohols-Alkenes": "CHM_M7_ALC_N4", // Dehydration
      "Alcohols-Haloalkanes": "CHM_M7_ALC_N5", // Substitution
      "Alcohols-Aldehydes": "CHM_M7_ALC_N6", // Oxidation
      "Alcohols-Ketones": "CHM_M7_ALC_N6", // Oxidation
      "Alcohols-Esters": "CHM_M7_ESTER_N1", // Esterification
      "Aldehydes-Carboxylic Acids": "CHM_M7_ALC_N6", // Oxidation
      "Haloalkanes-Alcohols": "CHM_M7_ALC_N7", // Substitution
      "Carboxylic Acids-Esters": "CHM_M7_ESTER_N1" // Esterification
    };

    // Get a node's Bloom level from the knowledge graph
    const getBloomLevel = (nodeId) => {
      if (!knowledgeGraph) return "Apply"; // Default
      
      // Search for the node in the knowledge graph
      for (const course of knowledgeGraph.courses) {
        for (const module of course.modules) {
          for (const topic of module.topics) {
            const foundNode = topic.knowledgeNodes.find(node => node.nodeId === nodeId);
            if (foundNode) return foundNode.bloomTaxonomyLevel;
          }
        }
      }
      return "Apply"; // Default if not found
    };

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

    // Create reaction data - define the pathways between functional groups
    const reactions = [
      {source: "Alkanes", target: "Haloalkanes", value: 10, type: "Substitution", reagent: "X₂/UV", example: "CH₄ + Cl₂ → CH₃Cl + HCl"},
      
      {source: "Alkenes", target: "Alkanes", value: 10, type: "Addition", reagent: "H₂/Ni, Pt or Pd", example: "CH₂=CH₂ + H₂ → CH₃CH₃"},
      {source: "Alkenes", target: "Alcohols", value: 15, type: "Addition", reagent: "H₂O/H⁺", example: "CH₂=CH₂ + H₂O → CH₃CH₂OH"},
      {source: "Alkenes", target: "Haloalkanes", value: 10, type: "Addition", reagent: "HX or X₂", example: "CH₂=CH₂ + HCl → CH₃CH₂Cl"},
      
      {source: "Alkynes", target: "Alkenes", value: 10, type: "Addition", reagent: "H₂/Ni (partial)", example: "HC≡CH + H₂ → H₂C=CH₂"},
      {source: "Alkynes", target: "Alkanes", value: 5, type: "Addition", reagent: "H₂/Ni (excess)", example: "HC≡CH + 2H₂ → CH₃CH₃"},
      
      {source: "Alcohols", target: "Alkenes", value: 15, type: "Elimination", reagent: "H₂SO₄/heat", example: "CH₃CH₂OH → CH₂=CH₂ + H₂O"},
      {source: "Alcohols", target: "Haloalkanes", value: 10, type: "Substitution", reagent: "HX", example: "CH₃CH₂OH + HBr → CH₃CH₂Br + H₂O"},
      {source: "Alcohols", target: "Aldehydes", value: 12, type: "Oxidation", reagent: "K₂Cr₂O₇/H⁺(controlled)", example: "CH₃CH₂OH → CH₃CHO + H₂O"},
      {source: "Alcohols", target: "Ketones", value: 12, type: "Oxidation", reagent: "K₂Cr₂O₇/H⁺", example: "CH₃CHOHCH₃ → CH₃COCH₃ + H₂O"},
      {source: "Alcohols", target: "Esters", value: 12, type: "Condensation", reagent: "RCOOH/H⁺", example: "CH₃CH₂OH + CH₃COOH → CH₃COOCH₂CH₃ + H₂O"},
      
      {source: "Aldehydes", target: "Carboxylic Acids", value: 12, type: "Oxidation", reagent: "K₂Cr₂O₇/H⁺(excess)", example: "CH₃CHO → CH₃COOH"},
      
      {source: "Haloalkanes", target: "Alcohols", value: 10, type: "Substitution", reagent: "OH⁻/H₂O", example: "CH₃CH₂Br + OH⁻ → CH₃CH₂OH + Br⁻"},
      
      {source: "Carboxylic Acids", target: "Esters", value: 15, type: "Condensation", reagent: "ROH/H⁺", example: "CH₃COOH + CH₃CH₂OH → CH₃COOCH₂CH₃ + H₂O"}
    ];

    // Apply filters if needed
    let filteredReactions = [...reactions];
    if (bloomFilter) {
      filteredReactions = filteredReactions.filter(reaction => {
        const nodeId = reactionToNodeMapping[`${reaction.source}-${reaction.target}`];
        return nodeId && getBloomLevel(nodeId) === bloomFilter;
      });
    }

    // Create the matrix for the chord diagram
    const matrix = Array(Object.keys(index).length).fill().map(() => Array(Object.keys(index).length).fill(0));
    
    // Fill the matrix with values from the filtered reactions
    filteredReactions.forEach(reaction => {
      const sourceIndex = index[reaction.source];
      const targetIndex = index[reaction.target];
      matrix[sourceIndex][targetIndex] = reaction.value;
    });

    // Create chord layout
    const chord = d3.chord()
      .padAngle(0.05)
      .sortSubgroups(d3.descending);

    const chords = chord(matrix);

    // Create group arc generator
    const arc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

    // Create ribbon generator for chords
    const ribbon = d3.ribbon()
      .radius(innerRadius);

    // Create a group for the entire chord diagram, centered
    const chordGroup = svg.append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Create groups
    const groups = chordGroup.append("g")
      .selectAll("g")
      .data(chords.groups)
      .join("g");

    // Add group arcs
    groups.append("path")
      .attr("fill", d => groupColors[Object.keys(index)[d.index]])
      .attr("stroke", "#fff")
      .attr("d", arc)
      .on("mouseover", (event, d) => {
        const groupName = Object.keys(index)[d.index];
        setSelectedGroup(groupName);
        
        // Highlight relevant chords
        ribbons
          .style("opacity", chord => {
            if (chord.source.index === d.index || chord.target.index === d.index) {
              return 1;
            } else {
              return 0.1;
            }
          });
          
        // Highlight relevant group
        groups.select("path")
          .style("opacity", group => {
            return group.index === d.index ? 1 : 0.3;
          });
          
        // Show tooltip
        const tooltip = `
          <div style="background-color: white; padding: 10px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.2); max-width: 250px;">
            <h3 style="margin: 0 0 5px 0; color: ${groupColors[groupName]};">${groupName}</h3>
            <p style="margin: 0 0 8px 0;">${groupDescriptions[groupName]}</p>
            <strong>Examples:</strong>
            <ul style="margin: 5px 0 0 0; padding-left: 20px;">
              ${groupExamples[groupName].map(ex => `<li>${ex}</li>`).join('')}
            </ul>
          </div>
        `;
        
        setTooltipContent({
          visible: true,
          content: tooltip,
          x: event.pageX,
          y: event.pageY
        });
      })
      .on("mouseout", () => {
        setSelectedGroup(null);
        ribbons.style("opacity", 0.7);
        groups.select("path").style("opacity", 1);
        setTooltipContent(prev => ({ ...prev, visible: false }));
      });

    // Add group labels
    if (showLabels) {
      groups.append("text")
        .each(d => { d.angle = (d.startAngle + d.endAngle) / 2; })
        .attr("dy", "0.35em")
        .attr("text-anchor", d => d.angle > Math.PI ? "end" : "start")
        .attr("transform", d => `
          rotate(${(d.angle * 180 / Math.PI - 90)})
          translate(${outerRadius + 15})
          ${d.angle > Math.PI ? "rotate(180)" : ""}
        `)
        .text(d => Object.keys(index)[d.index])
        .style("font-size", "12px")
        .style("font-weight", "bold");
    }

    // Store reaction info in a lookup table
    const reactionLookup = {};
    filteredReactions.forEach(reaction => {
      const sourceIndex = index[reaction.source];
      const targetIndex = index[reaction.target];
      reactionLookup[`${sourceIndex}-${targetIndex}`] = reaction;
    });

    // Add chords
    const ribbons = chordGroup.append("g")
      .selectAll("path")
      .data(chords)
      .join("path")
      .attr("d", ribbon)
      .attr("fill", d => {
        const reaction = reactionLookup[`${d.source.index}-${d.target.index}`];
        return reaction ? reactionColors[reaction.type] : "#ccc";
      })
      .attr("stroke", "#fff")
      .style("opacity", 0.7)
      .on("mouseover", (event, d) => {
        const reaction = reactionLookup[`${d.source.index}-${d.target.index}`];
        if (!reaction) return;
        
        // Get corresponding node ID and Bloom's level
        const nodeId = reactionToNodeMapping[`${reaction.source}-${reaction.target}`];
        const bloomLevel = nodeId ? getBloomLevel(nodeId) : "Apply";
        
        // Highlight this chord
        d3.select(event.currentTarget).style("opacity", 1);
        
        // Show detailed tooltip
        const tooltip = `
          <div style="background-color: white; padding: 10px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.2); max-width: 280px;">
            <h3 style="margin: 0 0 5px 0; color: ${reactionColors[reaction.type]};">${reaction.type} Reaction</h3>
            <p style="margin: 0 0 5px 0;"><strong>From:</strong> ${reaction.source} → <strong>To:</strong> ${reaction.target}</p>
            <p style="margin: 0 0 5px 0;"><strong>Reagent:</strong> ${reaction.reagent}</p>
            <p style="margin: 0 0 5px 0;"><strong>Example:</strong> ${reaction.example}</p>
            ${nodeId ? `
              <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid #eee;">
                <p style="margin: 0 0 5px 0;"><strong>Knowledge Node:</strong> ${nodeId}</p>
                <p style="margin: 0; color: ${bloomColors[bloomLevel]};"><strong>Bloom's Level:</strong> ${bloomLevel}</p>
              </div>
            ` : ''}
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

    // Add Bloom's level indicators to arcs if enabled
    if (showBloomLevels && knowledgeGraph) {
      // For each group, create a small indicator showing the highest Bloom's level
      groups.append("g")
        .attr("class", "bloom-indicator")
        .attr("transform", d => {
          const angle = (d.startAngle + d.endAngle) / 2;
          const x = Math.sin(angle) * (innerRadius - 15);
          const y = -Math.cos(angle) * (innerRadius - 15);
          return `translate(${x},${y})`;
        })
        .each(function(d) {
          const groupName = Object.keys(index)[d.index];
          
          // Find all reactions involving this group and their bloom levels
          const involvedReactions = filteredReactions.filter(r => 
            r.source === groupName || r.target === groupName
          );
          
          // If no reactions, skip
          if (involvedReactions.length === 0) return;
          
          // Find the highest Bloom's level
          const bloomLevels = involvedReactions.map(r => {
            const nodeId = reactionToNodeMapping[`${r.source}-${r.target}`];
            return nodeId ? getBloomLevel(nodeId) : null;
          }).filter(Boolean);
          
          // If no bloom levels found, skip
          if (bloomLevels.length === 0) return;
          
          // Rank Bloom's levels
          const bloomRank = {
            "Remember": 1,
            "Understand": 2,
            "Apply": 3,
            "Analyse": 4,
            "Evaluate": 5,
            "Create": 6
          };
          
          // Find highest level
          const highestLevel = bloomLevels.reduce((highest, current) => {
            return (bloomRank[current] > bloomRank[highest]) ? current : highest;
          }, bloomLevels[0]);
          
          // Add indicator
          d3.select(this).append("circle")
            .attr("r", 8)
            .attr("fill", bloomColors[highestLevel])
            .attr("stroke", "#fff")
            .attr("stroke-width", 1);
        });
    }

    // Add a legend for reaction types
    const legendX = width - 200;
    const legendY = 50;
    
    const legend = svg.append("g")
      .attr("transform", `translate(${legendX}, ${legendY})`);
    
    legend.append("text")
      .attr("x", 0)
      .attr("y", 0)
      .text("Reaction Types")
      .style("font-weight", "bold")
      .style("font-size", "14px");
    
    Object.entries(reactionColors).forEach(([type, color], i) => {
      const y = i * 25 + 25;
      
      legend.append("rect")
        .attr("x", 0)
        .attr("y", y)
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", color);
      
      legend.append("text")
        .attr("x", 25)
        .attr("y", y + 12)
        .text(type)
        .style("font-size", "12px");
    });

    // Add a legend for Bloom's taxonomy if enabled
    if (showBloomLevels) {
      const bloomLegendX = 20;
      const bloomLegendY = 50;
      
      const bloomLegend = svg.append("g")
        .attr("transform", `translate(${bloomLegendX}, ${bloomLegendY})`);
      
      bloomLegend.append("text")
        .attr("x", 0)
        .attr("y", 0)
        .text("Bloom's Taxonomy")
        .style("font-weight", "bold")
        .style("font-size", "14px");
      
      Object.entries(bloomColors).forEach(([level, color], i) => {
        const y = i * 25 + 25;
        
        bloomLegend.append("circle")
          .attr("cx", 8)
          .attr("cy", y + 8)
          .attr("r", 8)
          .attr("fill", color);
        
        bloomLegend.append("text")
          .attr("x", 25)
          .attr("y", y + 12)
          .text(level)
          .style("font-size", "12px");
      });
    }

  }, [selectedGroup, showLabels, showBloomLevels, knowledgeGraph, bloomFilter, syllabusFilter]);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div style={{ position: "absolute", top: "20px", left: "20px", zIndex: 100 }}>
        <div style={{ backgroundColor: "white", padding: "10px", borderRadius: "5px", boxShadow: "0 2px 5px rgba(0,0,0,0.2)" }}>
          <h3 style={{ margin: "0 0 10px 0", fontSize: "16px" }}>Organic Chemistry Reaction Network</h3>
          <p style={{ margin: "0 0 10px 0", fontSize: "14px" }}>
            Hover over segments to explore reaction pathways between functional groups.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label style={{ fontSize: "14px", display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={showLabels}
                onChange={() => setShowLabels(!showLabels)}
                style={{ marginRight: "8px" }}
              />
              Show Labels
            </label>
            <label style={{ fontSize: "14px", display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={showBloomLevels}
                onChange={() => setShowBloomLevels(!showBloomLevels)}
                style={{ marginRight: "8px" }}
              />
              Show Bloom's Levels
            </label>
          </div>
        </div>
      </div>

      <svg ref={svgRef} style={{ width: "100%", height: "100%" }}></svg>

      {tooltipContent.visible && (
        <div 
          style={{
            position: "fixed",
            left: tooltipContent.x + 10,
            top: tooltipContent.y + 10,
            pointerEvents: "none",
            zIndex: 1000
          }}
          dangerouslySetInnerHTML={{ __html: tooltipContent.content }}
        />
      )}

      {selectedGroup && (
        <div style={{ 
          position: "absolute", 
          bottom: "20px", 
          left: "50%", 
          transform: "translateX(-50%)",
          backgroundColor: "white", 
          padding: "15px", 
          borderRadius: "5px", 
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          maxWidth: "500px",
          zIndex: 100
        }}>
          <h3 style={{ 
            margin: "0 0 10px 0", 
            color: groupColors[selectedGroup],
            fontSize: "18px"
          }}>
            {selectedGroup}
          </h3>
          <p style={{ margin: "0", fontSize: "14px" }}>
            {groupDescriptions[selectedGroup]}
          </p>
        </div>
      )}

      {/* Teaching Info Panel */}
      <div style={{ 
        position: "absolute", 
        bottom: "20px", 
        left: "20px",
        backgroundColor: "rgba(255,255,255,0.9)", 
        padding: "10px", 
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        fontSize: "12px",
        maxWidth: "250px",
        zIndex: 99
      }}>
        <h4 style={{ margin: "0 0 5px 0", fontSize: "14px" }}>Teaching Notes</h4>
        <ul style={{ margin: "0", paddingLeft: "15px" }}>
          <li>Arcs represent functional groups</li>
          <li>Connections show reaction pathways</li>
          <li>Colors indicate reaction types</li>
          <li>Thickness suggests reaction importance</li>
          <li>Hover for detailed information</li>
          {showBloomLevels && (
            <li>Circles indicate Bloom's taxonomy level</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default EnhancedOrganicChemistryChord;