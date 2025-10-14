// Helper utility functions

/**
 * Truncate text to a maximum length with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + "...";
};

/**
 * Wrap text into multiple lines based on max width
 */
export const wrapText = (text: string, maxWidth: number): string[] => {
  const words = text.split(" ");
  const lines: string[] = [];
  let currentLine = "";

  words.forEach((word) => {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    if (testLine.length <= maxWidth) {
      currentLine = testLine;
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  });

  if (currentLine) lines.push(currentLine);
  return lines;
};

/**
 * Calculate angle in degrees from radians
 */
export const radiansToDegrees = (radians: number): number => {
  return (radians * 180) / Math.PI;
};

/**
 * Calculate angle in radians from degrees
 */
export const degreesToRadians = (degrees: number): number => {
  return (degrees * Math.PI) / 180;
};

/**
 * Determine if a label should be rotated for readability
 */
export const shouldRotateLabel = (angle: number): boolean => {
  const degrees = radiansToDegrees(angle);
  return degrees > 90 && degrees < 270;
};

/**
 * Format module code for display
 */
export const formatModuleCode = (moduleNumber: number): string => {
  return `M${moduleNumber}`;
};

/**
 * Extract module number from module name
 */
export const extractModuleNumber = (moduleName: string): number | null => {
  const match = moduleName.match(/M(\d+)/);
  return match ? parseInt(match[1]) : null;
};

/**
 * Get year level from module number
 */
export const getYearFromModule = (moduleNumber: number): 11 | 12 => {
  return moduleNumber <= 4 ? 11 : 12;
};

/**
 * Debounce function for performance optimization
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function for performance optimization
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean = false;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Calculate position for tooltip to ensure it stays within viewport
 */
export const calculateTooltipPosition = (
  mouseX: number,
  mouseY: number,
  tooltipWidth: number,
  tooltipHeight: number,
  offset: number = 10
): { x: number; y: number } => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  let x = mouseX + offset;
  let y = mouseY + offset;

  // Adjust if tooltip would overflow right edge
  if (x + tooltipWidth > viewportWidth) {
    x = mouseX - tooltipWidth - offset;
  }

  // Adjust if tooltip would overflow bottom edge
  if (y + tooltipHeight > viewportHeight) {
    y = mouseY - tooltipHeight - offset;
  }

  // Ensure tooltip doesn't go off left or top edge
  x = Math.max(offset, x);
  y = Math.max(offset, y);

  return { x, y };
};
