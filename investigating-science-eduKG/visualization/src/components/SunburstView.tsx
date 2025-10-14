import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { HierarchyNode, TooltipData, InfoPanelData } from "../types/eduKG";
import {
  getHierarchyColor,
  getStrandColor,
  getContrastColor,
  lightenColor,
  uiColors,
} from "../utils/colorSchemes";
import {
  truncateText,
  radiansToDegrees,
  shouldRotateLabel,
  calculateTooltipPosition,
} from "../utils/helpers";
import Tooltip from "./Tooltip";
import InfoPanel from "./InfoPanel";

interface SunburstViewProps {
  data: HierarchyNode;
  width?: number;
  height?: number;
}

const SunburstView: React.FC<SunburstViewProps> = ({
  data,
  width = 1000,
  height = 1000,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [tooltipData, setTooltipData] = useState<TooltipData>({
    visible: false,
    content: "",
    x: 0,
    y: 0,
  });
  const [infoPanelData, setInfoPanelData] = useState<InfoPanelData | null>(
    null
  );
  const [focusedNode, setFocusedNode] = useState<d3.HierarchyRectangularNode<HierarchyNode> | null>(
    null
  );

  useEffect(() => {
    if (!svgRef.current || !data) return;

    renderSunburst();
  }, [data, width, height]);

  // Re-render when focused node changes (for zoom)
  useEffect(() => {
    if (!svgRef.current || !data) return;
    renderSunburst();
  }, [focusedNode]);

  const getNodeLevel = (
    node: d3.HierarchyRectangularNode<HierarchyNode>
  ): "root" | "year" | "module" | "inquiry" | "concept" => {
    if (node.depth === 0) return "root";
    if (node.depth === 1) return "year";
    if (node.depth === 2) return "module";
    if (node.depth === 3) return "inquiry";
    return "concept";
  };

  const getNodeColor = (node: d3.HierarchyRectangularNode<HierarchyNode>): string => {
    const level = getNodeLevel(node);

    if (level === "root") {
      return "#2C3E50"; // Dark slate for root
    }

    if (level === "year") {
      // Different colors for Year 11 vs Year 12
      return node.data.name.includes("11") ? "#3498DB" : "#E74C3C"; // Blue vs Red
    }

    if (level === "module") {
      // Vibrant colors for each module based on module number
      const moduleColors = [
        "#E74C3C", // Red - M1
        "#3498DB", // Blue - M2
        "#2ECC71", // Green - M3
        "#F39C12", // Orange - M4
        "#9B59B6", // Purple - M5
        "#1ABC9C", // Turquoise - M6
        "#E67E22", // Dark Orange - M7
        "#34495E", // Dark Gray - M8
      ];

      // Extract module number from name (e.g., "M1: Title" -> 0)
      const match = node.data.name.match(/M(\d+)/);
      const moduleIndex = match ? parseInt(match[1]) - 1 : 0;
      return moduleColors[moduleIndex % moduleColors.length];
    }

    if (level === "inquiry") {
      // Get parent module color and lighten it
      if (node.parent && node.parent.parent) {
        const parentColor = getNodeColor(node.parent);
        return lightenColor(parentColor, 20);
      }
      return "#85929E";
    }

    if (level === "concept") {
      // Get grandparent module color and lighten more
      if (node.parent && node.parent.parent && node.parent.parent.parent) {
        const grandParentColor = getNodeColor(node.parent.parent);
        return lightenColor(grandParentColor, 40);
      }
      return "#AEB6BF";
    }

    return "#999999";
  };

  const createTooltipContent = (
    node: d3.HierarchyRectangularNode<HierarchyNode>
  ): string => {
    const level = getNodeLevel(node);
    const color = getNodeColor(node);

    let content = `
      <div>
        <h3 style="margin: 0 0 8px 0; color: ${color}; font-size: 16px; font-weight: bold;">
          ${node.data.name}
        </h3>
    `;

    if (node.data.strand) {
      content += `
        <p style="margin: 0 0 4px 0; font-size: 13px;">
          <strong>Strand:</strong> ${node.data.strand}
        </p>
      `;
    }

    if (node.data.code) {
      content += `
        <p style="margin: 0 0 4px 0; font-size: 13px;">
          <strong>Code:</strong> <code style="background: #f0f0f0; padding: 2px 6px; border-radius: 3px;">${node.data.code}</code>
        </p>
      `;
    }

    if (node.data.description) {
      content += `
        <p style="margin: 8px 0 0 0; font-size: 13px; line-height: 1.4;">
          ${node.data.description}
        </p>
      `;
    }

    content += `
        <p style="margin: 8px 0 0 0; font-size: 12px; color: #666; font-style: italic;">
          Level: ${level} • Depth: ${node.depth}
        </p>
      </div>
    `;

    return content;
  };

  const handleNodeClick = (
    event: MouseEvent,
    node: d3.HierarchyRectangularNode<HierarchyNode>
  ) => {
    event.stopPropagation();

    // Set info panel data
    const level = getNodeLevel(node);
    setInfoPanelData({
      title: node.data.name,
      type: level.charAt(0).toUpperCase() + level.slice(1),
      strand: node.data.strand,
      description: node.data.description,
      code: node.data.code,
      metadata: {
        Depth: node.depth,
        Children: node.children ? node.children.length : 0,
        ...(node.data.outcomeId && { "Outcome ID": node.data.outcomeId }),
        ...(node.data.moduleId && { "Module ID": node.data.moduleId }),
      },
    });

    // Zoom to node (only if it has children)
    if (node.children && node.children.length > 0) {
      setFocusedNode(node);
    }
  };

  const renderSunburst = () => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const radius = Math.min(width, height) / 2;

    // Create main group and center it
    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    // Create hierarchy
    const root = d3.hierarchy(data).sum((d) => {
      // Leaf nodes get value 1, parent nodes sum their children
      return d.children ? 0 : 1;
    });

    // Create partition layout
    const partition = d3.partition<HierarchyNode>().size([2 * Math.PI, radius]);

    partition(root);

    // Determine which node to focus on
    const currentFocus = focusedNode || root;

    // Create arc generator
    const arc = d3
      .arc<d3.HierarchyRectangularNode<HierarchyNode>>()
      .startAngle((d) => d.x0)
      .endAngle((d) => d.x1)
      .padAngle((d) => Math.min((d.x1 - d.x0) / 2, 0.005))
      .padRadius(radius / 2)
      .innerRadius((d) => d.y0)
      .outerRadius((d) => d.y1 - 1);

    // Filter nodes to only show current focus and its descendants
    const descendants = currentFocus.descendants();

    // Create path elements
    const paths = g
      .selectAll("path")
      .data(descendants)
      .join("path")
      .attr("d", arc as any)
      .style("fill", (d) => getNodeColor(d))
      .style("stroke", "#fff")
      .style("stroke-width", 2)
      .style("cursor", (d) => (d.children ? "pointer" : "default"))
      .on("mouseover", function (event, d) {
        // Highlight on hover
        d3.select(this).style("opacity", 0.8).style("stroke-width", 3);

        // Show tooltip
        const tooltipContent = createTooltipContent(d);
        const rect = (this as SVGPathElement).getBoundingClientRect();
        const position = calculateTooltipPosition(
          event.pageX,
          event.pageY,
          300,
          150
        );

        setTooltipData({
          visible: true,
          content: tooltipContent,
          x: position.x,
          y: position.y,
        });
      })
      .on("mouseout", function () {
        // Remove highlight
        d3.select(this).style("opacity", 1).style("stroke-width", 2);

        // Hide tooltip
        setTooltipData((prev) => ({ ...prev, visible: false }));
      })
      .on("click", (event, d) => handleNodeClick(event, d));

    // Add labels
    const labels = g
      .selectAll("text")
      .data(descendants)
      .join("text")
      .attr("transform", (d) => {
        const x = (((d.x0 + d.x1) / 2) * 180) / Math.PI;
        const y = (d.y0 + d.y1) / 2;
        const rotate = x - 90;
        return `rotate(${rotate}) translate(${y},0) rotate(${
          x < 180 ? 0 : 180
        })`;
      })
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .style("font-size", (d) => {
        // Scale font size based on depth
        const sizes = [18, 14, 12, 11, 10];
        return `${sizes[Math.min(d.depth, sizes.length - 1)]}px`;
      })
      .style("font-weight", (d) => (d.depth <= 1 ? "bold" : "normal"))
      .style("fill", (d) => getContrastColor(getNodeColor(d)))
      .style("pointer-events", "none")
      .style("user-select", "none")
      .text((d) => {
        // Only show labels for segments large enough
        const angle = d.x1 - d.x0;
        const arcLength = angle * (d.y0 + d.y1) / 2;

        if (arcLength < 15) return ""; // Too small for label

        // Better label handling based on depth
        const level = getNodeLevel(d);

        if (level === "year") {
          return d.data.name; // Show full "Year 11" or "Year 12"
        }

        if (level === "module") {
          // Show module code (e.g., "M1")
          const match = d.data.name.match(/M\d+/);
          return match ? match[0] : truncateText(d.data.name, 15);
        }

        // For inquiry questions and concepts, smart truncation
        const maxLength = Math.max(10, Math.floor(arcLength / 6));
        return truncateText(d.data.name, maxLength);
      });

    // Add center label (title)
    g.append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "-0.5em")
      .style("font-size", "20px")
      .style("font-weight", "bold")
      .style("fill", uiColors.text)
      .text(currentFocus === root ? "Investigating Science" : currentFocus.data.name);

    // Add "click to zoom out" text if zoomed in
    if (currentFocus !== root) {
      g.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", "1.5em")
        .style("font-size", "14px")
        .style("fill", uiColors.textLight)
        .style("cursor", "pointer")
        .text("Click here to zoom out")
        .on("click", () => {
          setFocusedNode(currentFocus.parent);
        });
    }
  };

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <div
        style={{
          width: "100%",
          maxWidth: `${width}px`,
          margin: "0 auto",
          position: "relative",
        }}
      >
        <svg
          ref={svgRef}
          width={width}
          height={height}
          style={{
            backgroundColor: uiColors.background,
            borderRadius: "8px",
            display: "block",
          }}
        />
      </div>

      {/* Legend below the visualization */}
      <div style={{ maxWidth: `${width}px`, margin: "20px auto 0" }}>
        <div
          style={{
            backgroundColor: "white",
            border: `1px solid ${uiColors.border}`,
            borderRadius: "8px",
            padding: "16px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3
            style={{
              margin: "0 0 12px 0",
              fontSize: "14px",
              fontWeight: "bold",
              color: uiColors.text,
            }}
          >
            Color Legend
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "12px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#3498DB",
                  borderRadius: "4px",
                }}
              />
              <span style={{ fontSize: "13px" }}>Year 11</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#E74C3C",
                  borderRadius: "4px",
                }}
              />
              <span style={{ fontSize: "13px" }}>Year 12</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  background:
                    "linear-gradient(90deg, #E74C3C, #3498DB, #2ECC71, #F39C12, #9B59B6, #1ABC9C, #E67E22, #34495E)",
                  borderRadius: "4px",
                }}
              />
              <span style={{ fontSize: "13px" }}>Modules (M1-M8)</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#AEB6BF",
                  borderRadius: "4px",
                }}
              />
              <span style={{ fontSize: "13px" }}>Inquiry Questions</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#D5DBDB",
                  borderRadius: "4px",
                }}
              />
              <span style={{ fontSize: "13px" }}>Concepts</span>
            </div>
          </div>
        </div>
      </div>

      <Tooltip data={tooltipData} />

      {infoPanelData && (
        <div style={{ maxWidth: `${width}px`, margin: "20px auto 0" }}>
          <InfoPanel
            data={infoPanelData}
            onClose={() => setInfoPanelData(null)}
          />
        </div>
      )}
    </div>
  );
};

export default SunburstView;
