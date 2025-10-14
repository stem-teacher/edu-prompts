import React from "react";
import { TooltipData } from "../types/eduKG";
import { uiColors } from "../utils/colorSchemes";

interface TooltipProps {
  data: TooltipData;
}

const Tooltip: React.FC<TooltipProps> = ({ data }) => {
  if (!data.visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: data.x,
        top: data.y,
        pointerEvents: "none",
        zIndex: 1000,
        backgroundColor: uiColors.tooltipBg,
        padding: "12px 16px",
        borderRadius: "8px",
        boxShadow: `0 4px 12px ${uiColors.tooltipShadow}`,
        maxWidth: "320px",
        fontSize: "14px",
        lineHeight: "1.5",
        color: uiColors.text,
        border: `1px solid ${uiColors.border}`,
      }}
      dangerouslySetInnerHTML={{ __html: data.content }}
    />
  );
};

export default Tooltip;
