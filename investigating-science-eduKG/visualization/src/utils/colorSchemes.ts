// Color scheme definitions for Investigating Science visualization

import { StrandName } from "../types/eduKG";

/**
 * Color scheme for scientific strands
 * Based on scientific process sequence with accessible contrast
 */
export const strandColors: Record<StrandName, string> = {
  "Questioning and predicting": "#4682B4", // Steel Blue
  "Planning investigations": "#5F9EA0", // Cadet Blue
  "Conducting investigations": "#2E8B57", // Sea Green
  "Processing data and information": "#DAA520", // Goldenrod
  "Analysing data and information": "#CD853F", // Peru
  "Problem solving": "#CD5C5C", // Indian Red
  "Communicating": "#9370DB", // Medium Purple
};

/**
 * Get color for a strand, with fallback
 */
export const getStrandColor = (strand: string): string => {
  return strandColors[strand as StrandName] || "#999999";
};

/**
 * Year level colors
 */
export const yearColors = {
  year11: "#2C5F7C", // Dark blue
  year12: "#8B4513", // Saddle brown
};

/**
 * Node type colors for hierarchical levels
 */
export const hierarchyColors = {
  root: "#2C3E50", // Dark slate
  year: "#34495E", // Charcoal
  module: "#5D6D7E", // Blue gray
  strand: "dynamic", // Uses strandColors
  outcome: "dynamic", // Uses strandColors with lighter tint
};

/**
 * Lighten a hex color by a percentage
 */
export const lightenColor = (color: string, percent: number): string => {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = ((num >> 8) & 0x00ff) + amt;
  const B = (num & 0x0000ff) + amt;

  return (
    "#" +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
};

/**
 * Darken a hex color by a percentage
 */
export const darkenColor = (color: string, percent: number): string => {
  return lightenColor(color, -percent);
};

/**
 * Get color for hierarchical node based on level and strand
 */
export const getHierarchyColor = (
  level: "root" | "year" | "module" | "strand" | "outcome",
  strand?: string
): string => {
  if (level === "strand" || level === "outcome") {
    if (strand) {
      const baseColor = getStrandColor(strand);
      // Outcomes get a lighter tint
      return level === "outcome" ? lightenColor(baseColor, 15) : baseColor;
    }
  }

  return hierarchyColors[level] === "dynamic"
    ? "#999999"
    : (hierarchyColors[level] as string);
};

/**
 * Color palette for assessment/exam elements
 */
export const assessmentColors = {
  exam: "#8B4513", // Saddle brown
  question: "#D2691E", // Chocolate
  verified: "#32CD32", // Lime green (shows verified outcomes)
  unverified: "#DC143C", // Crimson (shows unverified outcomes)
};

/**
 * UI element colors
 */
export const uiColors = {
  background: "#FDF6EC", // Off-white/cream
  text: "#2C3E50", // Dark slate
  textLight: "#7F8C8D", // Gray
  border: "#BDC3C7", // Light gray
  hover: "#3498DB", // Bright blue
  selected: "#E74C3C", // Bright red
  tooltipBg: "#FFFFFF", // White
  tooltipShadow: "rgba(0, 0, 0, 0.2)",
};

/**
 * Generate color scale for numeric values
 */
export const createValueColorScale = (
  min: number,
  max: number,
  startColor: string = "#E8F4F8",
  endColor: string = "#2E86AB"
): ((value: number) => string) => {
  return (value: number) => {
    const ratio = (value - min) / (max - min);
    const start = parseInt(startColor.replace("#", ""), 16);
    const end = parseInt(endColor.replace("#", ""), 16);

    const r1 = (start >> 16) & 0xff;
    const g1 = (start >> 8) & 0xff;
    const b1 = start & 0xff;

    const r2 = (end >> 16) & 0xff;
    const g2 = (end >> 8) & 0xff;
    const b2 = end & 0xff;

    const r = Math.round(r1 + ratio * (r2 - r1));
    const g = Math.round(g1 + ratio * (g2 - g1));
    const b = Math.round(b1 + ratio * (b2 - b1));

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };
};

/**
 * Get contrast color (white or black) for a given background color
 */
export const getContrastColor = (hexColor: string): string => {
  const color = hexColor.replace("#", "");
  const r = parseInt(color.substr(0, 2), 16);
  const g = parseInt(color.substr(2, 2), 16);
  const b = parseInt(color.substr(4, 2), 16);

  // Calculate relative luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.5 ? "#000000" : "#FFFFFF";
};

/**
 * Generate a color legend for the visualization
 */
export const generateStrandLegend = (): Array<{ label: string; color: string }> => {
  return Object.entries(strandColors).map(([strand, color]) => ({
    label: strand,
    color: color,
  }));
};
