import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { TooltipData, InfoPanelData } from "../types/eduKG";
import { getStrandColor, uiColors } from "../utils/colorSchemes";
import { calculateTooltipPosition } from "../utils/helpers";
import Tooltip from "./Tooltip";
import InfoPanel from "./InfoPanel";

interface ChordViewProps {
  modules: string[];
  strands: string[];
  matrix: number[][];
  width?: number;
  height?: number;
}

const ChordView: React.FC<ChordViewProps> = ({
  modules,
  strands,
  matrix,
  width = 800,
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
    if (!svgRef.current || !matrix || matrix.length === 0) return;

    renderChord();
  }, [modules, strands, matrix, width, height]);

  const renderChord = () => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const radius = Math.min(width, height) / 2 - 80;
    const innerRadius = radius - 30;

    // Create main group and center it
    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    // Use modules as labels
    const labels = modules;
    const n = labels.length;

    // Create chord layout
    const chord = d3.chord().padAngle(0.03).sortSubgroups(d3.descending);

    const chords = chord(matrix);

    // Color scale - vibrant colors for each module
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

    const getColor = (index: number): string => {
      return moduleColors[index % moduleColors.length];
    };

    // Arc generator for groups
    const arc = d3.arc().innerRadius(innerRadius).outerRadius(innerRadius + 20);

    // Ribbon generator for chords
    const ribbon = d3.ribbon().radius(innerRadius);

    // Draw chords (ribbons)
    const ribbons = g
      .append("g")
      .selectAll("path")
      .data(chords)
      .join("path")
      .attr("d", ribbon as any)
      .style("fill", (d) => getColor(d.source.index))
      .style("opacity", 0.6)
      .style("stroke", "#fff")
      .style("stroke-width", 0.5)
      .style("cursor", "pointer")
      .on("mouseover", function (event, d) {
        // Highlight ribbon
        d3.select(this).style("opacity", 0.9).style("stroke-width", 2);

        // Create tooltip
        const sourceLabel = labels[d.source.index];
        const targetLabel = labels[d.target.index];
        const value = d.source.value;

        const content = `
          <div>
            <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: bold;">
              ${sourceLabel} ↔ ${targetLabel}
            </h3>
            <p style="margin: 0; font-size: 13px;">
              <strong>Connection Weight:</strong> ${value}
            </p>
            <p style="margin: 4px 0 0 0; font-size: 12px; font-style: italic;">
              Click for details
            </p>
          </div>
        `;

        const position = calculateTooltipPosition(event.pageX, event.pageY, 280, 100);

        setTooltipData({
          visible: true,
          content,
          x: position.x,
          y: position.y,
        });
      })
      .on("mouseout", function () {
        d3.select(this).style("opacity", 0.6).style("stroke-width", 0.5);
        setTooltipData((prev) => ({ ...prev, visible: false }));
      })
      .on("click", (event, d) => {
        event.stopPropagation();

        const sourceLabel = labels[d.source.index];
        const targetLabel = labels[d.target.index];

        // Check if it's a self-connection or module-to-module
        const isSelfConnection = d.source.index === d.target.index;

        if (isSelfConnection) {
          setInfoPanelData({
            title: sourceLabel,
            type: "Module",
            description: `This module contains ${d.source.value} concepts across multiple inquiry questions.`,
            metadata: {
              "Total Concepts": d.source.value,
              "Module": sourceLabel,
            },
          });
        } else {
          setInfoPanelData({
            title: `${sourceLabel} → ${targetLabel}`,
            type: "Module Progression",
            description: `This connection shows the learning progression between two modules. Students move from ${sourceLabel} to ${targetLabel} in their learning journey.`,
            metadata: {
              "From": sourceLabel,
              "To": targetLabel,
              "Connection Strength": d.source.value,
            },
          });
        }
      });

    // Draw groups (arcs)
    const group = g
      .append("g")
      .selectAll("g")
      .data(chords.groups)
      .join("g");

    group
      .append("path")
      .attr("d", arc as any)
      .style("fill", (d) => getColor(d.index))
      .style("stroke", "#fff")
      .style("stroke-width", 2)
      .style("cursor", "pointer")
      .on("mouseover", function (event, d) {
        d3.select(this).style("opacity", 0.8);

        const label = labels[d.index];
        const isModule = d.index < modules.length;

        const content = `
          <div>
            <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: bold; color: ${getColor(
              d.index
            )};">
              ${label}
            </h3>
            <p style="margin: 0; font-size: 13px;">
              <strong>Type:</strong> Module
            </p>
            <p style="margin: 4px 0 0 0; font-size: 13px;">
              <strong>Content Weight:</strong> ${d.value} concepts
            </p>
          </div>
        `;

        const position = calculateTooltipPosition(event.pageX, event.pageY, 250, 100);

        setTooltipData({
          visible: true,
          content,
          x: position.x,
          y: position.y,
        });
      })
      .on("mouseout", function () {
        d3.select(this).style("opacity", 1);
        setTooltipData((prev) => ({ ...prev, visible: false }));
      })
      .on("click", (event, d) => {
        const label = labels[d.index];

        setInfoPanelData({
          title: label,
          type: "Module",
          description: `This module contains inquiry questions and concepts related to its theme`,
          metadata: {
            "Content Weight": d.value,
            "Module Index": d.index + 1,
          },
        });
      });

    // Add labels
    group
      .append("text")
      .each((d: any) => {
        d.angle = (d.startAngle + d.endAngle) / 2;
      })
      .attr("dy", "0.35em")
      .attr("transform", (d: any) => {
        return `
          rotate(${(d.angle * 180) / Math.PI - 90})
          translate(${innerRadius + 30})
          ${d.angle > Math.PI ? "rotate(180)" : ""}
        `;
      })
      .attr("text-anchor", (d: any) => (d.angle > Math.PI ? "end" : "start"))
      .style("font-size", "11px")
      .style("font-weight", (d) => (d.index < modules.length ? "bold" : "normal"))
      .style("fill", uiColors.text)
      .style("pointer-events", "none")
      .text((d) => labels[d.index]);

    // Add title
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", 30)
      .attr("text-anchor", "middle")
      .style("font-size", "18px")
      .style("font-weight", "bold")
      .style("fill", uiColors.text)
      .text("Module Connections & Content Distribution");

    // Add description
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", 55)
      .attr("text-anchor", "middle")
      .style("font-size", "12px")
      .style("fill", uiColors.textLight)
      .text("Arc size shows module content weight • Ribbons show module progression");
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

export default ChordView;
