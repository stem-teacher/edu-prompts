import React, { useEffect, useState } from "react";
import { EduKGData, HierarchyNode } from "../types/eduKG";
import {
  parseNDJSON,
  buildSunburstHierarchy,
  buildChordData,
  buildAssessmentTree,
  getGraphStats
} from "../utils/dataTransformers";
import SunburstView from "./SunburstView";
import ChordView from "./ChordView";
import AssessmentTreeView from "./AssessmentTreeView";
import ViewToggle, { ViewType } from "./ViewToggle";
import { uiColors } from "../utils/colorSchemes";

interface InvestigatingScienceVisualizationProps {
  ndjsonData: string;
}

const InvestigatingScienceVisualization: React.FC<
  InvestigatingScienceVisualizationProps
> = ({ ndjsonData }) => {
  const [eduKGData, setEduKGData] = useState<EduKGData | null>(null);
  const [hierarchyData, setHierarchyData] = useState<HierarchyNode | null>(null);
  const [chordData, setChordData] = useState<{
    modules: string[];
    strands: string[];
    matrix: number[][];
  } | null>(null);
  const [assessmentData, setAssessmentData] = useState<HierarchyNode | null>(null);
  const [currentView, setCurrentView] = useState<ViewType>("sunburst");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setLoading(true);
      setError(null);

      // Parse NDJSON data
      const parsed = parseNDJSON(ndjsonData);
      setEduKGData(parsed);

      // Build data for all visualizations
      const hierarchy = buildSunburstHierarchy(parsed.nodes, parsed.relationships);
      setHierarchyData(hierarchy);

      const chord = buildChordData(parsed.nodes, parsed.relationships);
      setChordData(chord);

      const assessment = buildAssessmentTree(parsed.nodes, parsed.relationships);
      setAssessmentData(assessment);

      setLoading(false);
    } catch (err) {
      console.error("Error processing data:", err);
      setError(err instanceof Error ? err.message : "Unknown error occurred");
      setLoading(false);
    }
  }, [ndjsonData]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px",
          color: uiColors.textLight,
        }}
      >
        <div>
          <div
            style={{
              width: "50px",
              height: "50px",
              border: `4px solid ${uiColors.border}`,
              borderTopColor: uiColors.hover,
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              margin: "0 auto 16px",
            }}
          />
          <p>Loading visualization...</p>
        </div>
        <style>
          {`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          padding: "24px",
          backgroundColor: "#FEE",
          border: "2px solid #C00",
          borderRadius: "8px",
          color: "#C00",
        }}
      >
        <h3 style={{ margin: "0 0 8px 0" }}>Error Loading Visualization</h3>
        <p style={{ margin: 0 }}>{error}</p>
      </div>
    );
  }

  if (!hierarchyData || !chordData || !assessmentData || !eduKGData) {
    return (
      <div
        style={{
          padding: "24px",
          backgroundColor: "#FFC",
          border: "2px solid #CC0",
          borderRadius: "8px",
          color: "#660",
        }}
      >
        <p style={{ margin: 0 }}>No data available to visualize.</p>
      </div>
    );
  }

  const stats = getGraphStats(eduKGData);

  return (
    <div
      style={{
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        color: uiColors.text,
        backgroundColor: uiColors.background,
        padding: "24px",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "32px", textAlign: "center" }}>
        <h1
          style={{
            margin: "0 0 8px 0",
            fontSize: "32px",
            fontWeight: "bold",
            color: uiColors.text,
          }}
        >
          Investigating Science Knowledge Graph
        </h1>
        <p
          style={{
            margin: "0 0 16px 0",
            fontSize: "16px",
            color: uiColors.textLight,
          }}
        >
          Interactive curriculum visualization for NSW Stage 6 Investigating Science
        </p>

        {/* Statistics bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <span style={{ fontSize: "24px", fontWeight: "bold", color: uiColors.hover }}>
              {stats.totalModules}
            </span>
            <span style={{ marginLeft: "8px", color: uiColors.textLight }}>Modules</span>
          </div>
          <div>
            <span style={{ fontSize: "24px", fontWeight: "bold", color: uiColors.hover }}>
              {stats.totalInquiryQuestions}
            </span>
            <span style={{ marginLeft: "8px", color: uiColors.textLight }}>Inquiry Questions</span>
          </div>
          <div>
            <span style={{ fontSize: "24px", fontWeight: "bold", color: uiColors.hover }}>
              {stats.totalConcepts}
            </span>
            <span style={{ marginLeft: "8px", color: uiColors.textLight }}>Concepts</span>
          </div>
        </div>
      </div>

      {/* View Toggle */}
      <ViewToggle currentView={currentView} onViewChange={setCurrentView} />

      {/* Instructions */}
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto 24px",
          padding: "16px",
          backgroundColor: "white",
          border: `1px solid ${uiColors.border}`,
          borderRadius: "8px",
        }}
      >
        <h3
          style={{
            margin: "0 0 8px 0",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          How to Use This Visualization
        </h3>
        <ul
          style={{
            margin: 0,
            paddingLeft: "24px",
            fontSize: "14px",
            lineHeight: "1.6",
          }}
        >
          <li>
            <strong>Select a view</strong> using the buttons above
          </li>
          <li>
            <strong>Hover</strong> over elements to see detailed information
          </li>
          <li>
            <strong>Click</strong> on elements to view full details and interact
          </li>
          <li>
            {currentView === "sunburst" &&
              "Sunburst shows: Year Level → Modules → Inquiry Questions → Concepts"}
            {currentView === "chord" &&
              "Chord diagram shows: Module-strand relationship connections"}
            {currentView === "tree" &&
              "Tree shows: Outcomes organized by scientific strands"}
          </li>
        </ul>
      </div>

      {/* Visualizations */}
      {currentView === "sunburst" && (
        <SunburstView data={hierarchyData} width={1000} height={1000} />
      )}
      {currentView === "chord" && (
        <ChordView
          modules={chordData.modules}
          strands={chordData.strands}
          matrix={chordData.matrix}
          width={800}
          height={800}
        />
      )}
      {currentView === "tree" && (
        <AssessmentTreeView data={assessmentData} width={1000} height={800} />
      )}

      {/* Footer */}
      <div
        style={{
          marginTop: "32px",
          paddingTop: "16px",
          borderTop: `1px solid ${uiColors.border}`,
          textAlign: "center",
          fontSize: "14px",
          color: uiColors.textLight,
        }}
      >
        <p style={{ margin: "0 0 8px 0" }}>
          Investigating Science Syllabus © NSW Education Standards Authority (NESA)
        </p>
        <p style={{ margin: 0 }}>
          Visualization © Virtualnation Pty Ltd 2025
        </p>
      </div>
    </div>
  );
};

export default InvestigatingScienceVisualization;
