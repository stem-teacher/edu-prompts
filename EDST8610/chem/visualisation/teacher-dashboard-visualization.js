import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const LearningPathwayTree = ({ knowledgeGraph, targetNodeId }) => {
  const svgRef = useRef(null);
  const [tooltipContent, setTooltipContent] = useState({ visible: false, content: "", x: 0, y: 0 });
  
  useEffect(() => {
    if (!svgRef.current || !knowledgeGraph || !targetNodeId) return;
    
    // Find target node and all prerequisites recursively
    const targetNode = findNodeById(knowledgeGraph, targetNodeId);
    if (!targetNode) return;
    
    const pathwayData = buildPathwayData(knowledgeGraph, targetNode);
    renderPathwayTree(pathwayData);
  }, [knowledgeGraph, targetNodeId]);
  
  const findNodeById = (graph, nodeId) => {
    // Search through the graph to find the node with matching ID
    for (const course of graph.courses) {
      for (const module of course.modules) {
        for (const topic of module.topics) {
          const foundNode = topic.knowledgeNodes.find(node => node.nodeId === nodeId);
          if (foundNode) return foundNode;
        }
      }
    }
    return null;
  };
  
  const buildPathwayData = (graph, targetNode, visited = new Set()) => {
    // Recursive function to build tree data structure from prerequisites
    if (visited.has(targetNode.nodeId)) return null;
    visited.add(targetNode.nodeId);
    
    const node = {
      id: targetNode.nodeId,
      name: targetNode.description.split('.')[0], // First sentence as name
      description: targetNode.description,
      bloomLevel: targetNode.bloomTaxonomyLevel,
      children: []
    };
    
    // Add prerequisites as children
    if (targetNode.prerequisiteNodes && targetNode.prerequisiteNodes.length > 0) {
      for (const prereqId of targetNode.prerequisiteNodes) {
        const prereqNode = findNodeById(graph, prereqId);
        if (prereqNode) {
          const childData = buildPathwayData(graph, prereqNode, visited);
          if (childData) node.children.push(childData);
        }
      }
    }
    
    return node;
  };
  
  const renderPathwayTree = (data) => {
    // Clear previous visualization
    d3.select(svgRef.current).selectAll("*").remove();
    
    // Set up dimensions
    const width = 800;
    const height = 600;
    
    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", "100%")
      .attr("height", "100%");
    
    // Color scale based on Bloom's taxonomy levels
    const bloomColors = {
      "Remember": "#74ADD1",
      "Understand": "#4575B4",
      "Apply": "#ABD9E9",
      "Analyse": "#FDAE61",
      "Evaluate": "#F46D43",
      "Create": "#D73027"
    };
    
    // Create tree layout
    const root = d3.hierarchy(data);
    
    // Use appropriate tree layout based on node count
    const treeLayout = d3.tree()
      .size([height - 100, width - 200]);
    
    treeLayout(root);
    
    // Create links
    svg.append("g")
      .attr("fill", "none")
      .attr("stroke", "#555")
      .attr("stroke-opacity", 0.4)
      .attr("stroke-width", 1.5)
      .selectAll("path")
      .data(root.links())
      .join("path")
      .attr("d", d3.linkHorizontal()
        .x(d => d.y)
        .y(d => d.x));
    
    // Create nodes
    const node = svg.append("g")
      .selectAll("g")
      .data(root.descendants())
      .join("g")
      .attr("transform", d => `translate(${d.y},${d.x})`);
    
    // Add circles for nodes
    node.append("circle")
      .attr("fill", d => bloomColors[d.data.bloomLevel] || "#999")
      .attr("r", 8)
      .on("mouseover", (event, d) => {
        // Show tooltip with node details
        const tooltip = `
          <div style="background-color: white; padding: 10px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.2); max-width: 300px;">
            <h3 style="margin: 0 0 5px 0; color: ${bloomColors[d.data.bloomLevel]};">${d.data.name}</h3>
            <p style="margin: 0 0 5px 0;">${d.data.description}</p>
            <p style="margin: 0; font-style: italic;">Bloom's Level: ${d.data.bloomLevel}</p>
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
        setTooltipContent(prev => ({ ...prev, visible: false }));
      });
    
    // Add labels
    node.append("text")
      .attr("dy", "0.31em")
      .attr("x", d => d.children ? -12 : 12)
      .attr("text-anchor", d => d.children ? "end" : "start")
      .text(d => d.data.name.length > 30 ? d.data.name.substring(0, 30) + "..." : d.data.name)
      .clone(true).lower()
      .attr("stroke", "white");
    
    // Add a title to the visualization
    svg.append("text")
      .attr("x", width / 2)
      .attr("y", 20)
      .attr("text-anchor", "middle")
      .style("font-size", "18px")
      .style("font-weight", "bold")
      .text(`Learning Pathway to ${data.name}`);
    
    // Add a legend for Bloom's taxonomy
    const legend = svg.append("g")
      .attr("transform", `translate(${width - 180}, ${height - 180})`);
    
    legend.append("text")
      .attr("x", 0)
      .attr("y", 0)
      .text("Bloom's Taxonomy")
      .style("font-weight", "bold");
    
    Object.entries(bloomColors).forEach(([level, color], i) => {
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
        .text(level);
    });
  };
  
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
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
    </div>
  );
};

export default LearningPathwayTree;