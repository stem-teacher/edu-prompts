import React from "react";
import { uiColors } from "../utils/colorSchemes";

interface LegendProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const Legend: React.FC<LegendProps> = ({ position = "top-right" }) => {
  const legendItems = [
    { label: "Year 11", color: "#3498DB" },
    { label: "Year 12", color: "#E74C3C" },
    { label: "Modules (M1-M8)", color: "gradient" },
    { label: "Inquiry Questions", color: "lighter" },
    { label: "Concepts", color: "lightest" },
  ];

  const positionStyles: Record<string, React.CSSProperties> = {
    "top-left": { top: "20px", left: "20px" },
    "top-right": { top: "20px", right: "20px" },
    "bottom-left": { bottom: "20px", left: "20px" },
    "bottom-right": { bottom: "20px", right: "20px" },
  };

  return (
    <div
      style={{
        position: "absolute",
        ...positionStyles[position],
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        border: `1px solid ${uiColors.border}`,
        borderRadius: "8px",
        padding: "16px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        zIndex: 100,
        minWidth: "200px",
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
        Hierarchy Levels
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {legendItems.map((item) => (
          <div
            key={item.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor:
                  item.color === "gradient"
                    ? "#9B59B6"
                    : item.color === "lighter"
                    ? "#AEB6BF"
                    : item.color === "lightest"
                    ? "#D5DBDB"
                    : item.color,
                background:
                  item.color === "gradient"
                    ? "linear-gradient(90deg, #E74C3C, #3498DB, #2ECC71, #F39C12, #9B59B6, #1ABC9C, #E67E22, #34495E)"
                    : undefined,
                borderRadius: "4px",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: "13px",
                color: uiColors.text,
                lineHeight: "1.2",
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legend;
