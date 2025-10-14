// TypeScript type definitions for Investigating Science eduKG

export interface Node {
  id: string;
  type: string;
  props: NodeProps;
}

export interface NodeProps {
  kind?: string;
  code?: string;
  strand?: string;
  statement?: string;
  number?: number;
  title?: string;
  year_level?: number;
  year?: number;
  description?: string;
  [key: string]: any;
}

export interface Relationship {
  from: string;
  to: string;
  label: string;
}

export interface EduKGData {
  nodes: Node[];
  relationships: Relationship[];
}

// Visualization-specific types

export interface HierarchyNode {
  name: string;
  children?: HierarchyNode[];
  // Optional metadata
  id?: string;
  strand?: string;
  outcomeId?: string;
  moduleId?: string;
  description?: string;
  code?: string;
  value?: number;
}

export interface OutcomeNode extends Node {
  props: {
    kind: "Outcome";
    code: string;
    strand: string;
    statement: string;
  };
}

export interface ModuleNode extends Node {
  props: {
    kind: "Module";
    number: number;
    title: string;
    year_level: number;
  };
}

export interface ExamNode extends Node {
  props: {
    kind: "Exam";
    year: number;
    description?: string;
  };
}

export type StrandName =
  | "Questioning and predicting"
  | "Planning investigations"
  | "Conducting investigations"
  | "Processing data and information"
  | "Analysing data and information"
  | "Problem solving"
  | "Communicating";

export interface TooltipData {
  visible: boolean;
  content: string;
  x: number;
  y: number;
}

export interface InfoPanelData {
  title: string;
  type: string;
  strand?: string;
  description?: string;
  code?: string;
  metadata?: Record<string, any>;
}
