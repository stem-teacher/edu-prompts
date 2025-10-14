import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { HierarchyNode, TooltipData, InfoPanelData } from "../types/eduKG";
import { getStrandColor, getContrastColor, uiColors } from "../utils/colorSchemes";
import { truncateText, calculateTooltipPosition } from "../utils/helpers";
import Tooltip from "./Tooltip";
import InfoPanel from "./InfoPanel";

interface AssessmentTreeViewProps {
  data: HierarchyNode;
  width?: number;
  height?: number;
}

const AssessmentTreeView: React.FC<AssessmentTreeViewProps> = ({
  data,
  width = 1000,
  height = 800,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [tooltipData, setTooltipData] = useState<TooltipData>({
    visible: false,
    content: "",
    x: 0,
    y: 0,
  });
  const [infoPanelData, setInfoPanelData] = useState<InfoPanelData | null>(null);

  useEffect(() => {
    if (!svgRef.current || !data) return;

    renderTree();
  }, [data, width, height]);

  const renderTree = () => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Create main group with margins - increased left margin to prevent truncation
    const margin = { top: 60, right: 120, bottom: 20, left: 200 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Create tree layout
    const root = d3.hierarchy(data);
    const treeLayout = d3.tree<HierarchyNode>().size([innerHeight, innerWidth]);

    treeLayout(root);

    // Draw links
    g.append("g")
      .attr("fill", "none")
      .attr("stroke", "#555")
      .attr("stroke-opacity", 0.4)
      .attr("stroke-width", 1.5)
      .selectAll("path")
      .data(root.links())
      .join("path")
      .attr(
        "d",
        d3
          .linkHorizontal<any, any>()
          .x((d) => d.y)
          .y((d) => d.x)
      );

    // Draw nodes
    const node = g
      .append("g")
      .selectAll("g")
      .data(root.descendants())
      .join("g")
      .attr("transform", (d) => `translate(${d.y},${d.x})`);

    // Add circles
    node
      .append("circle")
      .attr("r", (d) => {
        // Size by depth
        const sizes = [10, 8, 6];
        return sizes[Math.min(d.depth, sizes.length - 1)];
      })
      .attr("fill", (d) => {
        if (d.data.strand) {
          return getStrandColor(d.data.strand);
        }
        // Color by depth
        const colors = ["#2C3E50", "#5D6D7E", "#85929E"];
        return colors[Math.min(d.depth, colors.length - 1)];
      })
      .attr("stroke", "#fff")
      .attr("stroke-width", 2)
      .style("cursor", "pointer")
      .on("mouseover", function (event, d) {
        // Highlight
        d3.select(this).attr("r", (d: any) => {
          const sizes = [10, 8, 6];
          return sizes[Math.min(d.depth, sizes.length - 1)] + 2;
        });

        // Create tooltip
        const content = `
          <div>
            <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: bold;">
              ${d.data.name}
            </h3>
            ${
              d.data.strand
                ? `<p style="margin: 0 0 4px 0; font-size: 12px;">
                <strong>Strand:</strong> ${d.data.strand}
              </p>`
                : ""
            }
            ${
              d.data.description
                ? `<p style="margin: 4px 0 0 0; font-size: 12px;">
                ${d.data.description}
              </p>`
                : ""
            }
            <p style="margin: 4px 0 0 0; font-size: 11px; color: #666;">
              Depth: ${d.depth}
              ${d.children ? ` • Children: ${d.children.length}` : ""}
            </p>
          </div>
        `;

        const position = calculateTooltipPosition(event.pageX, event.pageY, 300, 120);

        setTooltipData({
          visible: true,
          content,
          x: position.x,
          y: position.y,
        });
      })
      .on("mouseout", function (event, d) {
        const sizes = [10, 8, 6];
        d3.select(this).attr("r", sizes[Math.min(d.depth, sizes.length - 1)]);
        setTooltipData((prev) => ({ ...prev, visible: false }));
      })
      .on("click", (event, d) => {
        setInfoPanelData({
          title: d.data.name,
          type: d.depth === 0 ? "Root" : d.depth === 1 ? "Strand" : "Outcome",
          strand: d.data.strand,
          description: d.data.description,
          code: d.data.code,
          metadata: {
            Depth: d.depth,
            Children: d.children ? d.children.length : 0,
            ...(d.data.outcomeId && { "Outcome ID": d.data.outcomeId }),
          },
        });
      });

    // Add labels
    node
      .append("text")
      .attr("dy", "0.31em")
      .attr("x", (d) => (d.children ? -12 : 12))
      .attr("text-anchor", (d) => (d.children ? "end" : "start"))
      .style("font-size", (d) => {
        const sizes = ["14px", "12px", "11px"];
        return sizes[Math.min(d.depth, sizes.length - 1)];
      })
      .style("font-weight", (d) => (d.depth === 0 ? "bold" : "normal"))
      .style("fill", uiColors.text)
      .style("pointer-events", "none")
      .text((d) => {
        // Don't truncate root or strand labels, truncate outcomes only
        if (d.depth === 0 || d.depth === 1) {
          return d.data.name; // Show full name for root and strands
        }
        return truncateText(d.data.name, 50); // More space for outcomes
      });

    // Add title
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", 30)
      .attr("text-anchor", "middle")
      .style("font-size", "18px")
      .style("font-weight", "bold")
      .style("fill", uiColors.text)
      .text("Assessment Pathways - Outcomes by Strand");
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

      <Tooltip data={tooltipData} />

      {infoPanelData && (
        <div style={{ maxWidth: `${width}px`, margin: "0 auto" }}>
          <InfoPanel data={infoPanelData} onClose={() => setInfoPanelData(null)} />
        </div>
      )}
    </div>
  );
};

export default AssessmentTreeView;
