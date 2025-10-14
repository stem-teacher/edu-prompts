// Data transformation utilities for Investigating Science eduKG

import {
  Node,
  Relationship,
  EduKGData,
  HierarchyNode,
  OutcomeNode,
  ModuleNode,
  ExamNode,
} from "../types/eduKG";

/**
 * Parse NDJSON format into structured data
 */
export const parseNDJSON = (ndjsonContent: string): EduKGData => {
  const lines = ndjsonContent.trim().split("\n");
  const nodes: Node[] = [];
  const relationships: Relationship[] = [];

  lines.forEach((line) => {
    if (!line.trim()) return;

    try {
      const parsed = JSON.parse(line);

      if (parsed.id && parsed.type) {
        // This is a node
        nodes.push(parsed as Node);
      } else if (parsed.from && parsed.to && parsed.label) {
        // This is a relationship
        relationships.push(parsed as Relationship);
      }
    } catch (error) {
      console.error("Error parsing line:", line, error);
    }
  });

  return { nodes, relationships };
};

/**
 * Get all outcomes associated with a module
 */
export const getModuleOutcomes = (
  moduleId: string,
  relationships: Relationship[],
  nodes: Node[]
): OutcomeNode[] => {
  // Find relationships where module produces outcomes
  const outcomeIds = relationships
    .filter((rel) => rel.from === moduleId && rel.label === "PRODUCES")
    .map((rel) => rel.to);

  // Get the actual outcome nodes
  const outcomes = nodes
    .filter((node) => outcomeIds.includes(node.id))
    .filter((node) => node.props.kind === "Outcome") as OutcomeNode[];

  return outcomes;
};

/**
 * Get all exam questions that verify an outcome
 */
export const getOutcomeExams = (
  outcomeId: string,
  relationships: Relationship[],
  nodes: Node[]
): ExamNode[] => {
  // Find exam questions that verify this outcome
  const examIds = relationships
    .filter((rel) => rel.to === outcomeId && rel.label === "VERIFIES")
    .map((rel) => rel.from);

  const exams = nodes
    .filter((node) => examIds.includes(node.id))
    .filter((node) => node.props.kind === "Exam") as ExamNode[];

  return exams;
};

/**
 * Group outcomes by strand
 */
export const groupByStrand = (
  outcomes: OutcomeNode[]
): Record<string, OutcomeNode[]> => {
  return outcomes.reduce((acc, outcome) => {
    const strand = outcome.props.strand || "Unknown";
    if (!acc[strand]) {
      acc[strand] = [];
    }
    acc[strand].push(outcome);
    return acc;
  }, {} as Record<string, OutcomeNode[]>);
};

/**
 * Get all inquiry questions for a module
 */
const getModuleInquiryQuestions = (
  moduleId: string,
  relationships: Relationship[],
  nodes: Node[]
): any[] => {
  const iqIds = relationships
    .filter((rel) => rel.from === moduleId && rel.label === "PRODUCES")
    .map((rel) => rel.to);

  return nodes.filter((node) => iqIds.includes(node.id) && node.props.kind === "InquiryQuestion");
};

/**
 * Get all concepts for an inquiry question
 */
const getInquiryQuestionConcepts = (
  iqId: string,
  relationships: Relationship[],
  nodes: Node[]
): any[] => {
  const conceptIds = relationships
    .filter((rel) => rel.from === iqId && rel.label === "PRODUCES")
    .map((rel) => rel.to);

  return nodes.filter((node) => conceptIds.includes(node.id) && node.props.kind === "Concept");
};

/**
 * Build hierarchical data structure for sunburst visualization
 * Structure: Root → Year Level → Modules → Inquiry Questions → Concepts
 */
export const buildSunburstHierarchy = (
  nodes: Node[],
  relationships: Relationship[]
): HierarchyNode => {
  const hierarchy: HierarchyNode = {
    name: "Investigating Science",
    children: [
      {
        name: "Year 11",
        children: [],
      },
      {
        name: "Year 12",
        children: [],
      },
    ],
  };

  // Get all modules
  const modules = nodes.filter(
    (n) => n.type === "Deliverable" && n.props.kind === "Module"
  ) as ModuleNode[];

  // Sort modules by number
  modules.sort((a, b) => a.props.number - b.props.number);

  modules.forEach((module) => {
    const yearIndex = module.props.year_level === 11 ? 0 : 1;
    const inquiryQuestions = getModuleInquiryQuestions(module.id, relationships, nodes);

    // Build module node with inquiry questions as children
    const moduleNode: HierarchyNode = {
      name: `M${module.props.number}: ${module.props.title}`,
      moduleId: module.id,
      children: inquiryQuestions.map((iq, index) => {
        const concepts = getInquiryQuestionConcepts(iq.id, relationships, nodes);

        return {
          name: iq.props.title || `Question ${index + 1}`,
          description: iq.props.title,
          id: iq.id,
          children: concepts.map((concept, cIndex) => ({
            name: concept.props.statement?.substring(0, 50) || `Concept ${cIndex + 1}`,
            description: concept.props.statement,
            id: concept.id,
          })),
        };
      }),
    };

    hierarchy.children![yearIndex].children!.push(moduleNode);
  });

  return hierarchy;
};

/**
 * Build flattened data structure for chord diagram
 * Shows relationships between modules (how many inquiry questions each has)
 */
export const buildChordData = (
  nodes: Node[],
  relationships: Relationship[]
): {
  modules: string[];
  strands: string[];
  matrix: number[][];
} => {
  const modules = nodes
    .filter((n) => n.type === "Deliverable" && n.props.kind === "Module")
    .sort((a, b) => (a.props.number || 0) - (b.props.number || 0)) as ModuleNode[];

  const moduleNames = modules.map((m) => `M${m.props.number}: ${m.props.title}`);

  // Count inquiry questions per module
  const inquiryQuestionCounts = modules.map((module) => {
    const iqs = getModuleInquiryQuestions(module.id, relationships, nodes);
    return iqs.length;
  });

  // Create matrix showing inter-module relationships
  // For this visualization, we'll show the "weight" of each module based on content
  const n = modules.length;
  const matrix: number[][] = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));

  // Fill diagonal with inquiry question counts (self-connections show module size)
  modules.forEach((module, i) => {
    const iqs = getModuleInquiryQuestions(module.id, relationships, nodes);
    // Count concepts in this module
    let conceptCount = 0;
    iqs.forEach((iq) => {
      const concepts = getInquiryQuestionConcepts(iq.id, relationships, nodes);
      conceptCount += concepts.length;
    });

    // Self-connection shows total content
    matrix[i][i] = conceptCount;

    // Create connections to adjacent modules (Year 11 to Year 12 progression)
    if (i < n - 1) {
      // Connect to next module with smaller weight
      matrix[i][i + 1] = Math.floor(conceptCount * 0.3);
      matrix[i + 1][i] = Math.floor(conceptCount * 0.3);
    }
  });

  return {
    modules: moduleNames,
    strands: [], // Not used in this chord diagram
    matrix,
  };
};

/**
 * Build tree data for assessment pathways
 * Shows how exam questions verify outcomes
 */
export const buildAssessmentTree = (
  nodes: Node[],
  relationships: Relationship[],
  targetOutcomeId?: string
): HierarchyNode => {
  if (targetOutcomeId) {
    // Build tree for specific outcome
    const outcome = nodes.find((n) => n.id === targetOutcomeId) as OutcomeNode;
    if (!outcome) {
      return { name: "Outcome not found" };
    }

    const exams = getOutcomeExams(targetOutcomeId, relationships, nodes);

    return {
      name: outcome.props.code,
      description: outcome.props.statement,
      strand: outcome.props.strand,
      children: exams.map((exam) => ({
        name: `${exam.props.year} Exam`,
        description: exam.props.description || "Exam question",
        id: exam.id,
      })),
    };
  } else {
    // Build tree showing all outcomes grouped by strand
    const outcomes = nodes.filter(
      (n) => n.props.kind === "Outcome"
    ) as OutcomeNode[];

    const strandGroups = groupByStrand(outcomes);

    return {
      name: "Assessment Pathways",
      children: Object.entries(strandGroups).map(([strand, strandOutcomes]) => ({
        name: strand,
        strand: strand,
        children: strandOutcomes.map((outcome) => {
          const exams = getOutcomeExams(outcome.id, relationships, nodes);
          return {
            name: outcome.props.code,
            description: outcome.props.statement,
            strand: strand,
            outcomeId: outcome.id,
            value: exams.length, // Size node by number of exam questions
          };
        }),
      })),
    };
  }
};

/**
 * Get statistics about the knowledge graph
 */
export const getGraphStats = (data: EduKGData) => {
  const modules = data.nodes.filter((n) => n.props.kind === "Module");
  const outcomes = data.nodes.filter((n) => n.props.kind === "Outcome");
  const inquiryQuestions = data.nodes.filter((n) => n.props.kind === "InquiryQuestion");
  const concepts = data.nodes.filter((n) => n.props.kind === "Concept");
  const exams = data.nodes.filter((n) => n.props.kind === "exam-paper");

  const year11Modules = modules.filter((m) => m.props.year_level === 11);
  const year12Modules = modules.filter((m) => m.props.year_level === 12);

  const strandCounts = outcomes.reduce((acc, outcome) => {
    const strand = outcome.props.strand || "Unknown";
    acc[strand] = (acc[strand] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return {
    totalModules: modules.length,
    year11Modules: year11Modules.length,
    year12Modules: year12Modules.length,
    totalOutcomes: outcomes.length,
    totalInquiryQuestions: inquiryQuestions.length,
    totalConcepts: concepts.length,
    totalExams: exams.length,
    strandCounts,
    totalRelationships: data.relationships.length,
  };
};
