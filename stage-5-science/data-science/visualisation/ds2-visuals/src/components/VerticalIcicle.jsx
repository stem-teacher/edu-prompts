// src/components/VerticalIcicle.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import lessonDataJSON from "../data/lessonSequence.json";
import edukgData from "../data/work-product-final-EduKG-stage-5-datascience.json";
import makeLessonTree from "../utils/makeLessonTree";

// ─── CONFIG ───
const moduleColWidth = 40;
const weekColWidth = 40;
const lessonColWidth = 200; // << REDUCED LESSON WIDTH
const rowHeight = 28;
const rootColor = "#2C3E50";
const weekColor = "#e3f2fd";
const lessonColor = d3
  .scaleOrdinal()
  .domain([1, 2, 3, 4, 5])
  .range(["#AED9E0", "#F7D488", "#F5B971", "#E67D83", "#9C27B0"]);

// --- Utility Function to Build Lookup Map ---
function buildEdukgLookup(edukgCourseData) {
    const lookup = new Map();
    try {
        const topics = edukgCourseData?.courses?.[0]?.modules?.[0]?.topics;
        if (!topics || !Array.isArray(topics)) {
            console.error("Could not find topics array in EduKG data:", edukgCourseData);
            return lookup;
        }
        topics.forEach(topic => {
            const nodes = topic?.knowledgeNodes;
            if (nodes && Array.isArray(nodes)) {
                nodes.forEach(node => {
                    if (node?.nodeId) { lookup.set(node.nodeId, node); }
                });
            }
        });
    } catch (error) { console.error("Error building EduKG lookup:", error, edukgCourseData); }
    return lookup;
}

// --- Pre-process EduKG data ONCE ---
const edukgLookup = buildEdukgLookup(edukgData);
if (edukgLookup.size === 0) {
    console.warn("EduKG Lookup Map is empty. Check JSON structure and buildEdukgLookup function.");
}

// --- Component ---
export default function VerticalIcicle() {
  const [hoveredNode, setHoveredNode] = useState(null);
  // --- ADD State for selected lesson data ---
  const [selectedLesson, setSelectedLesson] = useState(null);
  const svgRef = useRef();

  const root = useMemo(() => {
      const lessons = lessonDataJSON.lessons;
      const totalWeeks = lessonDataJSON.totalWeeks;
      const tree = makeLessonTree(lessons, totalWeeks);
      if (!tree || typeof tree !== 'object' || !tree.name) {
          console.error("Invalid tree structure for d3.hierarchy:", tree);
          return null;
      }
      try {
          return d3.hierarchy(tree).sum((d) => (d.children ? 0 : 1));
      } catch(error) {
          console.error("Error during d3.hierarchy creation:", error);
          return null;
      }
  }, []);

  // --- Handlers ---
  const handleMouseOver = (node) => {
      setHoveredNode(node);
      // If hovering a lesson, update the selected lesson state
      if (node && node.depth === 2) {
          setSelectedLesson(node.data);
      }
  };

  const handleMouseLeave = () => {
      // Only clear the hover state, not the selected lesson
      setHoveredNode(null);
  };

  useEffect(() => {
      if (!root || !root.value || !svgRef.current) return;

      const svg = d3.select(svgRef.current);
      svg.selectAll("g").remove();

      const totalCalculatedHeight = root.value * rowHeight;
      const totalWidth = moduleColWidth + weekColWidth + lessonColWidth; // Uses updated lessonColWidth

      root.each(d => { // Apply manual coords
          d.y0_manual = (d.depth === 0) ? 0 : (d.depth === 1) ? moduleColWidth : (d.depth === 2) ? moduleColWidth + weekColWidth : d.y0;
          d.y1_manual = (d.depth === 0) ? moduleColWidth : (d.depth === 1) ? moduleColWidth + weekColWidth : (d.depth === 2) ? totalWidth : d.y1;
      });

      const partitionLayout = d3.partition().size([totalCalculatedHeight, totalWidth]).padding(1);
      partitionLayout(root);

      const heightBuffer = 1.5 * rowHeight;
      svg.attr("viewBox", [0, 0, totalWidth, totalCalculatedHeight + heightBuffer])
         .attr("preserveAspectRatio", "xMinYMin meet");

      // Filter nodes based on hover state
      const nodesToDraw = root.descendants().filter((d) => {
          if (d.depth === 0) return true;
          if (d.depth === 1 && hoveredNode) return true;
          if (d.depth === 2) {
               if (hoveredNode?.depth === 1 && d.parent === hoveredNode) return true;
               if (hoveredNode?.depth === 2 && d.parent === hoveredNode.parent) return true;
          }
          return false;
      });

      const container = svg.append("g").attr("class", "d3-container");

      // D3 Join
      const g = container.selectAll("g.node-group")
          .data(nodesToDraw, d => d.data.id || d.data.name || `${d.depth}-${d.x0}-${d.y0_manual}`)
          .join("g")
              .attr("class", "node-group")
              .attr("transform", (d) => `translate(${d.y0_manual},${d.x0})`)
              .attr("font-family", "sans-serif").attr("font-size", 10);

      // Module Bar
      const moduleNodeData = root;
      svg.select("g.module-group").remove();
      if (moduleNodeData) {
          const moduleRectWidth = moduleNodeData.y1_manual - moduleNodeData.y0_manual -1;
          const moduleG = svg.append("g").attr("class", "module-group").datum(moduleNodeData);
          moduleG.append("rect")
              .attr("x", 0).attr("y", 0)
              .attr("width", moduleRectWidth).attr("height", totalCalculatedHeight -1 )
              .attr("fill", rootColor).style("cursor", "pointer")
              .attr("stroke", hoveredNode === root ? "black" : "none").attr("stroke-width", hoveredNode === root ? 1 : 0)
              .on("mouseover", () => handleMouseOver(root)); // Use handler
           moduleG.append("text")
              .attr("x", moduleRectWidth / 2).attr("y", totalCalculatedHeight / 2)
              .attr("text-anchor", "middle").attr("fill", "#fff")
              .attr("transform", `rotate(-90, ${moduleRectWidth / 2}, ${totalCalculatedHeight / 2})`)
              .style("pointer-events", "none").text(moduleNodeData.data.name);
      }

      // Week Rectangles / Labels
      g.filter(d => d.depth === 1).each(function(d) {
          const rectWidth = d.y1_manual - d.y0_manual -1; const rectHeight = Math.max(0, d.x1 - d.x0); const group = d3.select(this);
          group.selectAll("rect").data([d]).join("rect")
              .attr("x", 0).attr("y", 0).attr("width", rectWidth).attr("height", rectHeight)
              .attr("fill", weekColor).attr("stroke", hoveredNode === d ? "black" : "#eee")
              .attr("stroke-width", hoveredNode === d ? 1.5 : 0.5).style("cursor", "pointer")
              .on("mouseover", () => handleMouseOver(d)); // Use handler
          group.selectAll("text").data([d]).join("text")
               .style("pointer-events", "none").attr("fill", "#333").attr("text-anchor", "middle").attr("dy", "0.35em")
               .attr("x", rectWidth / 2).attr("y", rectHeight / 2).text(`W${d.data.name.split(' ')[1]}`)
               .each(function() { let title = d3.select(this).select("title"); if (title.empty()) title = d3.select(this).append("title"); title.text(d.data.name); });
      });

      // LESSON Rectangles / Labels
      g.filter(d => d.depth === 2).each(function(d){
          const rectWidth = d.y1_manual - d.y0_manual - 1; const rectHeight = Math.max(0, d.x1 - d.x0); const group = d3.select(this);
          group.selectAll("rect").data([d]).join("rect")
              .attr("x", 0).attr("y", 0).attr("width", rectWidth).attr("height", rectHeight)
              .attr("fill", lessonColor(d.data.cognitiveLoadBand || 1)).attr("stroke", hoveredNode === d ? "black" : "#ccc")
              .attr("stroke-width", hoveredNode === d ? 1.5 : 0.5).style("cursor", "pointer")
              .on("mouseover", () => handleMouseOver(d)); // Use handler
          group.selectAll("text").data([d]).join("text")
              .style("pointer-events", "none").attr("fill", "#111").attr("text-anchor", "start").attr("x", 3).attr("y", rectHeight / 2).attr("dy", "0.35em")
              .text(d => { if (rectHeight < 10 || rectWidth < 10) return ""; return d.data.title || ""; })
              .each(function() { let title = d3.select(this).select("title"); if (title.empty()) title = d3.select(this).append("title"); title.text(`${d.data.lessonId}: ${d.data.title}`); });
       });

  }, [hoveredNode, root]); // Trigger effect on hover change

  // Details panel now uses selectedLesson state
  return (
      <div style={{ display: "flex", height: "calc(100vh - 60px)", minWidth: 0, alignItems: 'stretch' }}>
          <div style={{ flex: "1 1 auto", overflow: 'hidden', paddingBottom: `${1.5 * rowHeight}px` }}>
              <svg ref={svgRef}
                  style={{ display: 'block', width: '100%', height: '100%' }}
                  onMouseLeave={handleMouseLeave} // Use handler
              />
          </div>
          {/* --- REDUCED DETAILS PANEL WIDTH --- */}
          <div style={{ flex: "0 0 300px", padding: "1rem", overflowY: 'auto', borderLeft: '1px solid #ccc' }}>
              {/* Render based on selectedLesson */}
              {selectedLesson && <LessonDetails lesson={selectedLesson} edukgLookup={edukgLookup} /> }
          </div>
      </div>
  );
}

// ... (LessonDetails component unchanged) ...
function LessonDetails({ lesson, edukgLookup }) {
  const {
    lessonId,
    title,
    duration,
    cognitiveLoadBand,
    learningOutcomes,
    overview,
    materials,
    alignedNodes,
  } = lesson;

  const mappedKnowledge = (alignedNodes || [])
    .map(id => edukgLookup.get(id))
    .filter(Boolean);

  return (
    <div>
      <h3>{title}</h3>
      <p><strong>ID:</strong> {lessonId}</p>
      <p><strong>Duration:</strong> {duration}</p>
      <p><strong>Load Band:</strong> {cognitiveLoadBand}</p>

       <h4>Outcomes</h4>
       {learningOutcomes && learningOutcomes.length > 0 ? (
         <ul>
           {learningOutcomes.map((o, index) => (
             <li key={o.syllabusCode || index}>
               {o.syllabusCode} — {o.bloom}
             </li>
           ))}
         </ul>
       ) : <p>No outcomes listed.</p>}

       {mappedKnowledge && mappedKnowledge.length > 0 ? (
           <>
             <h4>Mapped Knowledge Nodes</h4>
             <ul>
               {mappedKnowledge.map((node) => (
                 <li key={node.nodeId} title={node.description || node.nodeId}>
                   {(node.description || node.nodeId).substring(0, 75) + ( (node.description || node.nodeId).length > 75 ? '...' : '')}
                   {node.type && ` (${node.type})`}
                 </li>
               ))}
             </ul>
           </>
         ) : (
             <p style={{color: '#888'}}>No aligned knowledge nodes found.</p>
         )}

       <h4>Overview</h4>
       <p style={{ whiteSpace: "pre-wrap", background: '#f9f9f9', padding: '0.5em', borderRadius: '4px', border: '1px solid #eee' }}>
         {overview || "No overview available."}
       </p>

       <h4>Materials</h4>
       {materials && Object.keys(materials).length > 0 ? (
         <ul>
           {Object.entries(materials).map(([k, v]) =>
             v ? (
               <li key={k}>
                 <a href={v} target="_blank" rel="noreferrer">{k}</a>
               </li>
             ) : null,
           )}
         </ul>
       ) : (
         <p>No materials listed.</p>
       )}
    </div>
  );
}
