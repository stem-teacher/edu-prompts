// src/components/VerticalIcicle.jsx
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import dataJSON from "../data/lessonSequence.json"; // { totalWeeks, lessons: [...] }
import makeLessonTree from "../utils/makeLessonTree";

// ─── CONFIG ───
const colWidth = 100; // px per column (module/weeks/lessons)
const rowHeight = 28; // px per lesson-row
const rootColor = "#2C3E50"; // dark module bar
const weekColor = "#e3f2fd"; // pale week bar
const lessonColor = d3
  .scaleOrdinal()
  .domain([1, 2, 3, 4, 5])
  .range(["#AED9E0", "#F7D488", "#F5B971", "#E67D83", "#9C27B0"]);

export default function VerticalIcicle() {
  const [hoveredNode, setHoveredNode] = useState(null);
  const svgRef = useRef();

  // Build partition hierarchy once
  const lessons = dataJSON.lessons;
  const totalWeeks = dataJSON.totalWeeks;
  const tree = makeLessonTree(lessons, totalWeeks);
  const root = d3.hierarchy(tree).sum((d) => (d.children ? 0 : 1));

  // Partition layout: x axis = rows (# lessons), y axis = depth levels (3)
  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Compute the layout
    d3.partition().size([root.value, root.height + 1])(root);
    root.each((d) => {
      d.x0 *= rowHeight;
      d.x1 *= rowHeight;
    });

    // Full chart dimensions
    const fullHeight = root.value * rowHeight;
    const fullWidth = 3 * colWidth; // always 3 columns
    svg.attr("viewBox", [0, 0, fullWidth, fullHeight]);

    // Determine which nodes to show
    const showModule = true; // always show depth=0
    const showWeeks = hoveredNode && hoveredNode.depth >= 0; // hover module
    const showLessons = hoveredNode && hoveredNode.depth === 1;

    // If hovered a lesson, capture its data to the right pane
    // (we’ll handle that below)

    // Filter nodes
    const nodes = root.descendants().filter((d) => {
      if (d.depth === 0 && showModule) return true;
      if (d.depth === 1 && showWeeks) return true;
      if (d.depth === 2 && showLessons && d.parent === hoveredNode) return true;
      return false;
    });

    // Draw node groups
    const g = svg
      .append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 12)
      .selectAll("g")
      .data(nodes)
      .join("g")
      .attr("transform", (d) => `translate(${d.depth * colWidth},${d.x0})`);

    // Draw module bar (depth 0) as a single full-height rect + label
    if (showModule) {
      svg
        .append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", colWidth - 1)
        .attr("height", fullHeight - 1)
        .attr("fill", rootColor)
        .style("cursor", "pointer")
        .on("mouseover", () => setHoveredNode(root));

      svg
        .append("text")
        .attr("x", colWidth / 2)
        .attr("y", fullHeight / 2)
        .attr("text-anchor", "middle")
        .attr("fill", "#fff")
        .attr("transform", `rotate(-90, ${colWidth / 2}, ${fullHeight / 2})`)
        .style("pointer-events", "none")
        .text(root.data.name);
    }

    // Draw other rectangles (weeks & lessons)
    g.append("rect")
      .attr("width", colWidth - 1)
      .attr("height", (d) => d.x1 - d.x0 - 1)
      .attr("fill", (d) => {
        if (d.depth === 1) return weekColor;
        if (d.depth === 2) return lessonColor(d.data.cognitiveLoadBand || 1);
      })
      .style("cursor", (d) => (d.depth > 0 ? "pointer" : "default"))
      .on("mouseover", (_, d) => setHoveredNode(d));

    // Labels for weeks & lessons
    g.append("text")
      .attr("x", colWidth / 2)
      .attr("y", (d) => (d.x1 - d.x0) / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .attr("fill", "#111")
      .style("pointer-events", "none")
      .text((d) => {
        if (d.depth === 1) return d.data.name; // "Week N"
        if (d.depth === 2) return d.data.lessonId; // "W3L2"
        return "";
      });
  }, [hoveredNode]);

  // Sidebar: show details ONLY when hoveredNode.depth===2 (a lesson)
  const lesson =
    hoveredNode && hoveredNode.depth === 2 ? hoveredNode.data : null;

  return (
    <div style={{ display: "flex" }}>
      <svg
        ref={svgRef}
        width="100%"
        height="600px"
        onMouseLeave={() => setHoveredNode(null)}
      />
      <div style={{ flex: "1 1 0", padding: "1rem" }}>
        {lesson && <LessonDetails {...lesson} />}
      </div>
    </div>
  );
}

// Details panel
function LessonDetails({
  lessonId,
  title,
  duration,
  cognitiveLoadBand,
  learningOutcomes,
  overview,
  materials,
}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>
        <strong>ID:</strong> {lessonId}
      </p>
      <p>
        <strong>Duration:</strong> {duration}
      </p>
      <p>
        <strong>Load Band:</strong> {cognitiveLoadBand}
      </p>

      <h4>Outcomes</h4>
      <ul>
        {learningOutcomes?.map((o) => (
          <li key={o.syllabusCode}>
            {o.syllabusCode} — {o.bloom}
          </li>
        ))}
      </ul>

      <h4>Overview</h4>
      <p style={{ whiteSpace: "pre-wrap" }}>{overview}</p>

      <h4>Materials</h4>
      <ul>
        {Object.entries(materials || {}).map(([k, v]) =>
          v ? (
            <li key={k}>
              <a href={v} target="_blank" rel="noreferrer">
                {k}
              </a>
            </li>
          ) : null,
        )}
      </ul>
    </div>
  );
}
