import React from "react";
import { uiColors } from "../utils/colorSchemes";

export type ViewType = "sunburst" | "chord" | "tree";

interface ViewToggleProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ currentView, onViewChange }) => {
  const views: Array<{ id: ViewType; label: string; description: string }> = [
    {
      id: "sunburst",
      label: "Sunburst",
      description: "Hierarchical view of modules, inquiry questions, and concepts",
    },
    {
      id: "chord",
      label: "Chord Diagram",
      description: "Module-strand relationship connections",
    },
    {
      id: "tree",
      label: "Assessment Tree",
      description: "Outcomes organized by scientific strands",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        justifyContent: "center",
        padding: "24px 16px",
        flexWrap: "wrap",
      }}
    >
      {views.map((view) => (
        <button
          key={view.id}
          onClick={() => onViewChange(view.id)}
          style={{
            padding: "16px 24px",
            borderRadius: "12px",
            border: `2px solid ${
              currentView === view.id ? uiColors.hover : uiColors.border
            }`,
            backgroundColor:
              currentView === view.id ? uiColors.hover : "white",
            color: currentView === view.id ? "white" : uiColors.text,
            cursor: "pointer",
            transition: "all 0.2s ease",
            minWidth: "200px",
            textAlign: "left",
            fontFamily: "inherit",
          }}
          onMouseEnter={(e) => {
            if (currentView !== view.id) {
              e.currentTarget.style.borderColor = uiColors.hover;
              e.currentTarget.style.backgroundColor = "#F8F9FA";
            }
          }}
          onMouseLeave={(e) => {
            if (currentView !== view.id) {
              e.currentTarget.style.borderColor = uiColors.border;
              e.currentTarget.style.backgroundColor = "white";
            }
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              marginBottom: "4px",
            }}
          >
            {view.label}
          </div>
          <div
            style={{
              fontSize: "13px",
              opacity: currentView === view.id ? 0.9 : 0.7,
            }}
          >
            {view.description}
          </div>
        </button>
      ))}
    </div>
  );
};

export default ViewToggle;
