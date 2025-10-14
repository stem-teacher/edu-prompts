import React from "react";
import { InfoPanelData } from "../types/eduKG";
import { uiColors, getStrandColor } from "../utils/colorSchemes";

interface InfoPanelProps {
  data: InfoPanelData | null;
  onClose?: () => void;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div
      style={{
        backgroundColor: uiColors.background,
        border: `2px solid ${uiColors.border}`,
        borderRadius: "12px",
        padding: "24px",
        marginTop: "20px",
        maxWidth: "800px",
        position: "relative",
      }}
    >
      {onClose && (
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "none",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            color: uiColors.textLight,
            padding: "4px 8px",
            lineHeight: 1,
          }}
          aria-label="Close info panel"
        >
          ×
        </button>
      )}

      {/* Title with type badge */}
      <div style={{ marginBottom: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <h2
            style={{
              margin: 0,
              fontSize: "24px",
              color: uiColors.text,
              fontWeight: "bold",
            }}
          >
            {data.title}
          </h2>
          <span
            style={{
              display: "inline-block",
              padding: "4px 12px",
              borderRadius: "16px",
              fontSize: "12px",
              fontWeight: "600",
              backgroundColor: data.strand
                ? getStrandColor(data.strand)
                : uiColors.border,
              color: "white",
            }}
          >
            {data.type}
          </span>
        </div>
      </div>

      {/* Strand information */}
      {data.strand && (
        <div style={{ marginBottom: "12px" }}>
          <span
            style={{
              fontWeight: "600",
              color: uiColors.textLight,
              fontSize: "14px",
            }}
          >
            Strand:{" "}
          </span>
          <span
            style={{
              color: getStrandColor(data.strand),
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            {data.strand}
          </span>
        </div>
      )}

      {/* Code */}
      {data.code && (
        <div style={{ marginBottom: "12px" }}>
          <span
            style={{
              fontWeight: "600",
              color: uiColors.textLight,
              fontSize: "14px",
            }}
          >
            Code:{" "}
          </span>
          <code
            style={{
              backgroundColor: "#F0F0F0",
              padding: "2px 8px",
              borderRadius: "4px",
              fontSize: "14px",
              fontFamily: "monospace",
            }}
          >
            {data.code}
          </code>
        </div>
      )}

      {/* Description */}
      {data.description && (
        <div style={{ marginBottom: "16px" }}>
          <p
            style={{
              margin: 0,
              fontSize: "16px",
              lineHeight: "1.6",
              color: uiColors.text,
            }}
          >
            {data.description}
          </p>
        </div>
      )}

      {/* Additional metadata */}
      {data.metadata && Object.keys(data.metadata).length > 0 && (
        <div
          style={{
            marginTop: "16px",
            paddingTop: "16px",
            borderTop: `1px solid ${uiColors.border}`,
          }}
        >
          <h3
            style={{
              margin: "0 0 12px 0",
              fontSize: "16px",
              fontWeight: "600",
              color: uiColors.textLight,
            }}
          >
            Additional Information
          </h3>
          <dl style={{ margin: 0 }}>
            {Object.entries(data.metadata).map(([key, value]) => (
              <div
                key={key}
                style={{
                  marginBottom: "8px",
                  display: "grid",
                  gridTemplateColumns: "140px 1fr",
                  gap: "12px",
                }}
              >
                <dt
                  style={{
                    fontWeight: "600",
                    color: uiColors.textLight,
                    fontSize: "14px",
                  }}
                >
                  {key}:
                </dt>
                <dd
                  style={{
                    margin: 0,
                    color: uiColors.text,
                    fontSize: "14px",
                  }}
                >
                  {Array.isArray(value) ? value.join(", ") : String(value)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </div>
  );
};

export default InfoPanel;
