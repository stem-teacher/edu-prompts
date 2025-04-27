import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

// Define node colors - **NEW PALETTE inspired by Thermodynamics example**
const nodeColors = {
  central: "#2C3E50", // Navy Blue (From Thermo)
  topic_area: "#A0522D", // Warm Brown/Brick (Like Thermo Inquiry)
  inquiry_group: "#A0522D", // Warm Brown/Brick
  inquiry_item: "#C3B299", // Medium Beige (Like Thermo Skill)
  outcome_group: "#8F9779", // Olive Green (Like Thermo Knowledge)
  outcome: "#E9D8A6", // Soft Beige (Like Thermo Outcome)
  ws_group: "#8F9779", // Olive Green (Reusing)
  ws_outcome: "#E9D8A6", // Soft Beige (Reusing)
  knowledge_group: "#AF601A", // Medium Brown (Distinct)
  theme: "#D35400", // Burnt Orange (Distinct)
  skill: "#C3B299", // Medium Beige (From Thermo)
  concept: "#AEB6BF", // Grey (Neutral)
  definition: "#EAECEE", // Light Grey (Neutral, low emphasis)
  unknown: "#cccccc", // Fallback grey
};

// Helper function for text color based on background
const getSafeTextColor = (nodeType) => {
  if (!nodeType || typeof nodeType !== "string") {
    return "#333";
  }
  // Types with dark backgrounds needing light text
  const darkBgTypes = [
    "central",
    "topic_area",
    "inquiry_group",
    "knowledge_group",
    "theme",
    "ws_group",
    "outcome_group",
  ];
  return darkBgTypes.includes(nodeType) ? "#FFF" : "#333"; // White text for dark, dark for light
};

const DataScienceEduKGSunburst = () => {
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);
  const [tooltipContent, setTooltipContent] = useState({
    visible: false,
    content: "",
    x: 0,
    y: 0,
  });
  const [focusedNode, setFocusedNode] = useState(null);

  // --- Data Definition (Assume same structure as before) ---
  const data = {
    name: "SC5_DA2",
    desc: "Stage 5 Science: Data Science 2 Module",
    type: "central",
    children: [
      {
        name: "Inquiry Questions",
        desc: "Guiding questions for the module",
        type: "inquiry_group",
        children: [
          {
            name: "How can large datasets be analysed to test scientific claims?",
            type: "inquiry_item",
            desc: "Focus on analysis methods for claims.",
          },
          {
            name: "How is scientific knowledge used in evidence-based decisions?",
            type: "inquiry_item",
            desc: "Focus on application of knowledge.",
          },
          {
            name: "How can the legitimacy of claims be verified?",
            type: "inquiry_item",
            desc: "Focus on verification processes.",
          },
        ],
      },
      {
        name: "Syllabus Outcomes",
        desc: "Formal learning outcomes",
        type: "outcome_group",
        children: [
          {
            name: "SC5-DA2-01",
            desc: "Assesses the use of scientific knowledge...",
            type: "outcome",
            bloom: "Evaluate",
          },
          {
            name: "Working Scientifically",
            desc: "Related Working Scientifically skills",
            type: "ws_group",
            children: [
              {
                name: "SC5-WS-06",
                desc: "Analyses data...",
                type: "ws_outcome",
              },
              {
                name: "SC5-WS-07",
                desc: "Selects suitable problem-solving...",
                type: "ws_outcome",
              },
              {
                name: "SC5-WS-08",
                desc: "Communicates scientific arguments...",
                type: "ws_outcome",
              },
            ],
          },
        ],
      },
      {
        name: "Knowledge & Skills",
        desc: "Core concepts and skills covered",
        type: "knowledge_group",
        children: [
          {
            name: "Evaluating Claims & Info",
            type: "theme",
            children: [
              {
                name: "Investigable Questions",
                ref: "DS5_N1",
                type: "skill",
                bloom: "Understand",
                cl: 2,
              },
              {
                name: "Scientific Verification",
                ref: "DS5_N2",
                type: "concept",
                bloom: "Understand",
                cl: 3,
              },
              {
                name: "Evaluate Online Info (CRAAP)",
                ref: "DS5_N3",
                type: "skill",
                bloom: "Apply",
                cl: 3,
              },
              {
                name: "Identify Testable Claims",
                ref: "DS5_N4",
                type: "skill",
                bloom: "Analyse",
                cl: 3,
              },
              {
                name: "Evidence-Reasoning Link",
                ref: "DS5_N5",
                type: "skill",
                bloom: "Understand",
                cl: 3,
              },
              {
                name: "Construct CER Argument",
                ref: "DS5_N6",
                type: "skill",
                bloom: "Apply",
                cl: 4,
              },
              {
                name: "Analyse Scientific Texts",
                ref: "DS5_N23",
                type: "skill",
                bloom: "Analyse",
                cl: 4,
              },
            ],
          },
          {
            name: "Pseudoscience",
            type: "theme",
            children: [
              {
                name: "Science vs Pseudoscience",
                ref: "DS5_N7",
                type: "concept",
                bloom: "Understand",
                cl: 2,
              },
              {
                name: "Identify Pseudo Examples",
                ref: "DS5_N8",
                type: "skill",
                bloom: "Apply",
                cl: 2,
              },
              {
                name: "Data Distortion Techniques",
                ref: "DS5_N9",
                type: "skill",
                bloom: "Analyse",
                cl: 4,
              },
              {
                name: "Evaluate Pseudo Claims",
                ref: "DS5_N10",
                type: "skill",
                bloom: "Evaluate",
                cl: 4,
              },
            ],
          },
          {
            name: "Handling Large Datasets",
            type: "theme",
            children: [
              {
                name: "Define Big Data (5 Vs)",
                ref: "DS5_N11",
                type: "definition",
                bloom: "Remember",
                cl: 2,
              },
              {
                name: "Find Datasets & Formulate Qs",
                ref: "DS5_N12",
                type: "skill",
                bloom: "Apply",
                cl: 3,
              },
              {
                name: "Descriptive Statistics",
                ref: "DS5_N13",
                type: "skill",
                bloom: "Apply",
                cl: 3,
              },
              {
                name: "Benefits of Summaries",
                ref: "DS5_N14",
                type: "concept",
                bloom: "Understand",
                cl: 2,
              },
              {
                name: "Univariate Analysis/Viz",
                ref: "DS5_N15a",
                type: "skill",
                bloom: "Apply",
                cl: 3,
              },
              {
                name: "Bivariate Analysis/Viz",
                ref: "DS5_N15b",
                type: "skill",
                bloom: "Apply",
                cl: 4,
              },
              {
                name: "Correlation vs Causation",
                ref: "DS5_N16",
                type: "concept",
                bloom: "Understand",
                cl: 3,
              },
              {
                name: "Role of Big Data in Validation",
                ref: "DS5_N17",
                type: "concept",
                bloom: "Understand",
                cl: 3,
              },
              {
                name: "Interpolation/Extrapolation",
                ref: "DS5_N19",
                type: "skill",
                bloom: "Apply",
                cl: 3,
              },
            ],
          },
          {
            name: "Problem Solving & Decisions",
            type: "theme",
            children: [
              {
                name: "Evaluate Conclusions",
                ref: "DS5_N20",
                type: "skill",
                bloom: "Evaluate",
                cl: 4,
              },
              {
                name: "Develop Evaluation Criteria",
                ref: "DS5_N21",
                type: "skill",
                bloom: "Create",
                cl: 4,
              },
              {
                name: "Evaluate Approaches",
                ref: "DS5_N22",
                type: "skill",
                bloom: "Evaluate",
                cl: 4,
              },
              {
                name: "Evidence-Based Decisions",
                ref: "DS5_N18",
                type: "skill",
                bloom: "Evaluate",
                cl: 5,
              },
            ],
          },
        ],
      },
    ],
  };
  // --- End of Data Definition ---

  useEffect(() => {
    if (!svgRef.current || !data) return;

    d3.select(svgRef.current).selectAll("*").remove();
    const width = 1400;
    const height = 1100;
    const radius = Math.min(width, height) / 2 - 20;

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", "100%")
      .attr("height", "100%")
      .style("font-family", "'Inter', 'Helvetica', 'Arial', sans-serif")
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    try {
      const root = d3
        .hierarchy(data)
        .sum((d) => {
          // Keep sum logic simple for structure
          if (!d.children) return 1; // Give all leaves a base size
          return 0; // Let parents derive size from children initially
        })
        // Sort to ensure consistent layout, e.g., alphabetically or by type
        .sort((a, b) => a.data.name.localeCompare(b.data.name));

      const partition = d3
        .partition()
        .size([2 * Math.PI, radius])
        .padding(0.005); // Adjust padding slightly if needed

      partition(root);

      // ** FIX: Central Circle Radius Calculation **
      // Calculate the inner radius of the first ring of segments
      const firstRingInnerRadius =
        d3.min(
          root.descendants().filter((d) => d.depth === 1),
          (d) => d.y0,
        ) || 30; // Find min y0 of depth 1 nodes

      const arc = d3
        .arc()
        .startAngle((d) => d.x0)
        .endAngle((d) => d.x1)
        // Ensure inner radius respects the central circle space
        .innerRadius((d) => Math.max(firstRingInnerRadius, d.y0))
        .outerRadius((d) => Math.max(firstRingInnerRadius, d.y1 - 1)) // Apply padding gap
        .cornerRadius(3);

      // Add path elements
      const path = svg
        .append("g") // Group paths
        .selectAll("path")
        .data(root.descendants().filter((d) => d.depth > 0)) // Exclude central node path
        .join("path")
        .attr("d", arc)
        .style(
          "fill",
          (d) => nodeColors[d.data?.type || "unknown"] || nodeColors.unknown,
        )
        .style("stroke", "#fff") // White stroke
        .style("stroke-width", 1.5) // Slightly thicker stroke
        .style("opacity", 1)
        // --- Keep mouse handlers the same ---
        .on("mouseover", (event, d) => {
          d3.select(event.currentTarget).style("opacity", 0.7); // Dim slightly
          if (d.data) {
            const nodeData = {
              name: d.data.name || "N/A",
              desc: d.data.desc || "",
              type: d.data.type || "unknown",
              ref: d.data.ref,
              bloom: d.data.bloom,
              cl: d.data.cl,
            };
            setFocusedNode(nodeData);
            let tooltipHTML = `<strong>${nodeData.name}</strong>`;
            if (nodeData.desc) tooltipHTML += `<br>${nodeData.desc}`;
            if (nodeData.ref) tooltipHTML += `<br>ID: ${nodeData.ref}`;
            if (nodeData.bloom) tooltipHTML += `<br>Bloom's: ${nodeData.bloom}`;
            if (nodeData.cl) tooltipHTML += `<br>CL: ${nodeData.cl}`;
            tooltipHTML += `<br>Type: ${nodeData.type}`;
            setTooltipContent({
              visible: true,
              content: tooltipHTML,
              x: event.pageX,
              y: event.pageY,
            });
          } else {
            setFocusedNode(null);
            setTooltipContent({ visible: false, content: "", x: 0, y: 0 });
          }
        })
        .on("mousemove", (event) => {
          setTooltipContent((prev) => ({
            ...prev,
            x: event.pageX,
            y: event.pageY,
          }));
        })
        .on("mouseout", (event) => {
          d3.select(event.currentTarget).style("opacity", 1);
          setTooltipContent((prev) => ({ ...prev, visible: false }));
          setFocusedNode(null);
        });

      // Add central circle - ** Radius fixed **
      svg
        .append("circle")
        .attr("r", firstRingInnerRadius) // Use calculated radius
        .attr("fill", nodeColors.central)
        .attr("stroke", "#fff") // Add stroke to central circle too
        .attr("stroke-width", 1.5);

      // Add central label
      svg
        .append("text")
        .attr("text-anchor", "middle")
        .attr("dy", "0.35em")
        .attr("font-size", "16px")
        .attr("font-weight", "bold")
        .attr("fill", getSafeTextColor("central")) // Use safe text color
        .text(data.name);

      // ** NEW: Text Labels using textPath **
      const labelGroup = svg
        .append("g")
        .attr("pointer-events", "none")
        .attr("text-anchor", "middle")
        .style("user-select", "none")
        .style("font-size", "10px"); // Base font size for labels

      // Filter nodes eligible for labeling
      const nodesForLabels = root.descendants().filter((d) => {
        if (!d.data || d.depth === 0) return false; // No data or root node
        const angle = d.x1 - d.x0;
        const radius = (d.y0 + d.y1) / 2;
        const arcLength = angle * radius;
        // Only label if arc is wide enough and segment is not too close to center
        return (
          angle > 0.03 && d.y0 > firstRingInnerRadius + 10 && arcLength > 30
        ); // Adjust thresholds as needed
      });

      labelGroup
        .selectAll("text")
        .data(nodesForLabels)
        .join("text")
        // Add a background rectangle for better readability (optional)
        // .each(function(d) {
        //     const bbox = this.getBBox();
        //     d3.select(this.parentNode).insert("rect", ":first-child")
        //       .attr("x", bbox.x - 2).attr("y", bbox.y - 2)
        //       .attr("width", bbox.width + 4).attr("height", bbox.height + 4)
        //       .style("fill", "rgba(255, 255, 255, 0.7)"); // Semi-transparent white bg
        // })
        .attr("dy", "0.35em") // Vertical alignment tweak
        .attr("fill", (d) => getSafeTextColor(d.data.type)) // Get text color based on segment fill
        .attr("transform", (d) => {
          // Rotate text group to align with segment midpoint
          const angle = (((d.x0 + d.x1) / 2) * 180) / Math.PI;
          const rotate = angle - 90;
          const midRadius = (d.y0 + d.y1) / 2;
          // Rotate first, then translate
          return `rotate(${rotate}) translate(${midRadius},0) rotate(${angle < 180 ? 0 : 180})`; // Flip text on bottom half
        })
        .text((d) => {
          // Truncate long text
          const name = d.data.name || "";
          const maxChars = Math.floor(
            ((d.x1 - d.x0) * ((d.y0 + d.y1) / 2)) / 6,
          ); // Estimate based on arc length and font size
          return name.length > maxChars
            ? name.substring(0, maxChars - 1) + "…"
            : name;
        });

      // Add legend (using new colors)
      const legend = svg
        .append("g")
        .attr("transform", `translate(${-radius + 10}, ${-radius + 20})`)
        .attr("font-family", "'Inter', 'Helvetica', 'Arial', sans-serif")
        .attr("font-size", 12);
      const legendItems = [
        /* ... Same legend items as before ... */
        { type: "central", label: "Module Core" },
        { type: "inquiry_group", label: "Inquiry Questions" },
        { type: "outcome_group", label: "Syllabus Outcomes" },
        { type: "ws_group", label: "Working Scientifically" },
        { type: "knowledge_group", label: "Knowledge & Skills Area" },
        { type: "theme", label: "Conceptual Theme" },
        { type: "skill", label: "Skill Node" },
        { type: "concept", label: "Concept Node" },
        { type: "definition", label: "Definition Node" },
      ];
      legendItems.forEach((item, i) => {
        const legendGroup = legend
          .append("g")
          .attr("transform", `translate(0, ${i * 22})`);
        legendGroup
          .append("rect")
          .attr("width", 14)
          .attr("height", 14)
          .attr("rx", 2)
          .attr("fill", nodeColors[item.type]);
        legendGroup.append("text").attr("x", 20).attr("y", 12).text(item.label);
      });
      // --- End of D3 drawing ---
    } catch (error) {
      console.error("Error during D3 processing:", error);
    }
  }, [data]); // Dependency array

  useEffect(() => {
    // Tooltip Effect
    const tooltip = d3.select(tooltipRef.current);
    if (tooltipContent.visible && tooltipRef.current) {
      tooltip
        .style("opacity", 1)
        .style("left", `${tooltipContent.x + 15}px`)
        .style("top", `${tooltipContent.y - 10}px`)
        .html(tooltipContent.content);
    } else if (tooltipRef.current) {
      tooltip.style("opacity", 0);
    }
  }, [tooltipContent]);

  // --- Component Render ---
  let displayNode = null;
  if (
    focusedNode &&
    typeof focusedNode === "object" &&
    Object.keys(focusedNode).length > 0
  ) {
    displayNode = { ...focusedNode, type: focusedNode.type || "unknown" };
  }

  return (
    <div
      className="w-full flex flex-col items-center"
      style={{
        background: "#FDF6EC",
        fontFamily: "'Inter', 'Helvetica', 'Arial', sans-serif",
      }}
    >
      {" "}
      {/* Lighter background like Thermo example */}
      <div className="w-full max-w-5xl">
        <h2
          className="text-2xl font-bold text-center my-4"
          style={{ color: "#2C3E50" }}
        >
          {" "}
          {/* Match central color */}
          Stage 5 Science: Data Science 2 (SC5_DA2) EduKG Structure
        </h2>

        <div className="relative mb-6">
          <svg
            ref={svgRef}
            className="w-full"
            style={{ maxHeight: "700px" }}
          ></svg>

          <div
            ref={tooltipRef}
            className="absolute pointer-events-none"
            style={{
              /* ... tooltip styles ... */ position: "fixed",
              opacity: 0,
              background: "rgba(255, 255, 255, 0.95)",
              padding: "8px 12px",
              borderRadius: "4px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
              border: "1px solid #ccc",
              fontSize: "12px",
              maxWidth: "300px",
              transition: "opacity 0.2s, left 0.1s, top 0.1s",
              zIndex: 1000,
            }}
          ></div>
        </div>

        {/* Focused Node Panel */}
        {displayNode ? (
          <div
            className="bg-white p-4 rounded-lg shadow mb-6 mx-auto max-w-2xl"
            style={{ border: "1px solid #e5e5e5" }}
          >
            <h3 className="text-lg font-bold mb-2" style={{ color: "#2C3E50" }}>
              {displayNode.name}
            </h3>
            {displayNode.desc && (
              <p className="mb-2 text-sm">{displayNode.desc}</p>
            )}
            <div className="flex flex-wrap gap-2 mt-3">
              <span
                className="px-2 py-1 rounded text-xs font-semibold"
                style={{
                  backgroundColor:
                    nodeColors[displayNode.type] || nodeColors.unknown,
                  color: getSafeTextColor(displayNode.type),
                }}
              >
                Type: {displayNode.type}
              </span>
              {displayNode.ref && (
                <span className="px-2 py-1 bg-gray-200 rounded text-xs font-semibold">
                  {" "}
                  ID: {displayNode.ref}{" "}
                </span>
              )}
              {displayNode.bloom && (
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-semibold">
                  {" "}
                  Bloom's: {displayNode.bloom}{" "}
                </span>
              )}
              {displayNode.cl && (
                <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-semibold">
                  {" "}
                  Load: {displayNode.cl}{" "}
                </span>
              )}
            </div>
          </div>
        ) : null}

        <div className="text-center text-sm mb-6" style={{ color: "#555" }}>
          <p>
            Hover over segments for details. This visualization maps the Data
            Science 2 curriculum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataScienceEduKGSunburst;
