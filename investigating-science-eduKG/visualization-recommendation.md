# Visualization Recommendation for NSW Stage 6 Investigating Science Subject

## Executive Summary

This document recommends a **hybrid hierarchical-network visualization** approach for the Investigating Science eduKG, combining modified sunburst elements with chord diagram features. This approach differs from the force-directed graph recommended for organic chemistry because Investigating Science exhibits a primarily hierarchical structure with strategic cross-connections, rather than the dense, cyclic network structure of chemical reaction pathways.

**Primary Recommendation**: Multi-view interactive visualization system consisting of:
1. **Primary View**: Enhanced sunburst diagram for hierarchical curriculum structure
2. **Secondary View**: Outcome-strand chord diagram for cross-module connections
3. **Tertiary View**: Assessment pathway tree showing exam question → outcome relationships

---

## 1. Structural Analysis: Why Investigating Science Differs from Chemistry

### Chemistry Reaction Pathways (from research)
- **Structure**: Dense network with cycles (e.g., alcohols → alkenes → alcohols)
- **Relationships**: Bidirectional transformations
- **Complexity**: Non-hierarchical, interconnected web
- **Recommended Visualization**: Force-directed graph

### Investigating Science eduKG
- **Structure**: Hierarchical with moderate cross-connections
  - Syllabus (1) → Modules (8) → Topics → Outcomes (17) → Exam Questions
- **Relationships**: Primarily parent-child (PRODUCES, DERIVES_FROM, VERIFIES)
- **Complexity**: Hierarchical taxonomy with outcome-module many-to-many relationships
- **Temporal Dimension**: Year 11 (M1-M4) → Year 12 (M5-M8) progression
- **Focus**: Scientific process skills (strands) across content modules

**Key Insight**: The eduKG represents a curriculum taxonomy, not a transformation network. This structural difference necessitates a different visualization approach than chemistry.

---

## 2. Cognitive Load Considerations

### Research Findings Applied to Investigating Science

**From Cognitive Load Theory (CLT)**:
1. **Intrinsic Load**: Understanding scientific process skills and their application requires managing high element interactivity
2. **Extraneous Load**: Must minimize through clean design, progressive disclosure, and intuitive navigation
3. **Germane Load**: Maximize through schema-building features that show relationships between modules, outcomes, and assessment

### Visualization Design Principles for CLT

| Principle | Implementation Strategy |
|-----------|-------------------------|
| **Progressive Disclosure** | Show hierarchy first, reveal details on interaction |
| **Dual Coding** | Combine visual structure (position, color) with text labels |
| **Chunking** | Group by modules, strands, and year levels |
| **Coherence** | Remove extraneous decorative elements |
| **Signaling** | Use color to highlight outcome strands |
| **Segmentation** | Provide multiple complementary views |
| **Pre-training** | Include legend and interaction instructions |

### Student Audience Considerations

**For Stage 6 Students (Years 11-12)**:
- Developing abstract thinking capabilities
- Need to understand assessment requirements (exam questions → outcomes)
- Benefit from seeing "big picture" curriculum structure
- Require scaffolded exploration (not all information at once)

**For Teachers**:
- Need to plan learning sequences across modules
- Must align teaching to syllabus outcomes
- Require understanding of how outcomes connect to assessment

---

## 3. Recommended Visualization Approach

### 3.1 Primary View: Enhanced Hierarchical Sunburst

**Rationale**:
- Best represents the hierarchical structure (syllabus → modules → outcomes)
- Students can see curriculum "at a glance"
- Familiar radial layout reduces cognitive load
- Space-efficient for displaying many nodes

**Structure**:
```
Center: Investigating Science Syllabus
Ring 1: Year Levels (Year 11, Year 12)
Ring 2: Modules (M1-M8)
Ring 3: Outcome Strands (7 strands)
Ring 4: Individual Outcomes (17 outcomes)
Ring 5: Exam Papers (2019-2024)
```

**Visual Encoding**:

| Element | Visual Encoding | Cognitive Justification |
|---------|----------------|------------------------|
| **Year Levels** | 2 semicircles (Y11 left, Y12 right) | Temporal progression left→right |
| **Modules** | Width = relative importance | Equal sizing (each 1/4 per year) |
| **Outcome Strands** | 7 distinct colors | Pre-attentive processing for strand recognition |
| **Outcomes** | Shade variation within strand color | Grouping by similarity |
| **Exam Papers** | Chronological order, gradient | Temporal sequence understanding |

**Color Scheme** (based on physics sunburst but adapted):

**Strand Colors** (based on scientific process sequence):
- Questioning and Predicting: `#4682B4` (Steel Blue) - Start of inquiry
- Planning Investigations: `#5F9EA0` (Cadet Blue) - Design phase
- Conducting Investigations: `#2E8B57` (Sea Green) - Action phase
- Processing Data: `#DAA520` (Goldenrod) - Analysis begins
- Analysing Data: `#CD853F` (Peru) - Deeper analysis
- Problem Solving: `#CD5C5C` (Indian Red) - Application
- Communicating: `#9370DB` (Medium Purple) - Sharing findings

**Background**: `#FDF6EC` (Soft Cream) - reduces eye strain

### 3.2 Secondary View: Outcome-Strand Chord Diagram

**Rationale**:
- Shows cross-module outcome connections
- Reveals how strands distribute across modules
- Complements hierarchical view with relational perspective

**Structure**:
- Outer arc segments: 8 Modules (M1-M8)
- Inner ribbons: Connect modules through shared outcomes
- Ribbon color: Outcome strand color
- Ribbon width: Number of outcomes in that strand connecting the modules

**Interactive Features**:
- Hover over module: Highlight all connected outcomes
- Hover over ribbon: Show specific outcomes and their descriptions
- Filter by strand: Show only outcomes from selected strand(s)

### 3.3 Tertiary View: Assessment Pathway Tree

**Rationale**:
- Critical for students preparing for exams
- Shows how exam questions verify specific outcomes
- Provides backward-design perspective (assessment → learning)

**Structure**:
- Root nodes: Exam papers (2019-2024)
- Child nodes: Individual exam questions
- Leaf nodes: Outcomes verified by each question
- Links: VERIFIES relationships from eduKG

**Visual Encoding**:
- Node color: Outcome strand (same color scheme as sunburst)
- Node size: Bloom's taxonomy level (if available in eduKG)
- Link thickness: Number of marks allocated (if available)

---

## 4. Detailed Design Specification

### 4.1 Primary Sunburst Specification

**Dimensions**:
- SVG viewBox: `0 0 1200 1200`
- Outer radius: 550px
- Inner radius: 50px (center circle)
- Ring widths: [100px, 120px, 100px, 90px, 90px]

**Typography**:
```css
--font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
--font-size-center: 20px;
--font-size-year: 16px;
--font-size-module: 14px;
--font-size-strand: 12px;
--font-size-outcome: 11px;
--font-weight-primary: 600;
--font-weight-secondary: 400;
```

**Interaction States**:

| State | Visual Change | Information Displayed |
|-------|--------------|----------------------|
| **Default** | Full opacity, subtle borders | Labels only |
| **Hover** | Opacity 0.85, stroke width 2px | Tooltip with full description |
| **Selected** | Opacity 1.0, stroke highlight | Detail panel below viz |
| **Path Highlight** | Ancestors highlighted, others dimmed | Path from center to selection |

**Tooltip Content**:
```javascript
// For Module segment
{
  title: "Module M1: Cause and Effect – Observing",
  yearLevel: "Year 11",
  description: "Students develop skills in...",
  outcomes: ["INS11/12-1", "INS11/12-4", "INS11/12-7"]
}

// For Outcome segment
{
  code: "INS11/12-1",
  strand: "Questioning and predicting",
  statement: "Develops and evaluates questions and hypotheses for scientific investigation",
  linkedModules: ["M1", "M2", "M3"],
  examQuestions: ["2023-Q1", "2022-Q3"]
}
```

**Information Panel** (below visualization):
- Fixed height: 200px
- Scrollable content area
- Sections: Description, Related Outcomes, Assessment Links, Module Connections
- Clear visual hierarchy with headings and spacing

### 4.2 Chord Diagram Specification

**Dimensions**:
- SVG viewBox: `0 0 800 800`
- Outer radius: 350px
- Inner radius: 320px
- Chord padding: 0.05 radians

**Module Arc Ordering**:
- Clockwise from 12 o'clock: M1, M2, M3, M4, M5, M6, M7, M8
- Maintains sequential module order

**Ribbon Encoding**:
```javascript
// Ribbon data structure
{
  source: "M1", // Module
  target: "M3", // Module
  strand: "Questioning and predicting",
  outcomes: ["INS11/12-1"],
  value: 1 // Number of shared outcomes
}
```

**Color Mapping**:
- Module arcs: Neutral gray `#7A7A7A`
- Ribbons: Strand colors (same as sunburst)
- Hover highlight: Darken selected strand by 20%

### 4.3 Assessment Tree Specification

**Layout**: Horizontal tree (left → right)
- Root (left): Exam papers
- Middle: Questions
- Leaves (right): Outcomes

**Dimensions**:
- SVG viewBox: `0 0 1400 800`
- Node separation: 60px vertical, 250px horizontal

**Node Styling**:
```javascript
// Exam paper nodes
{
  shape: "rounded rectangle",
  width: 120,
  height: 40,
  fill: "#2C3E50",
  stroke: "#1A252F",
  textColor: "#FFFFFF"
}

// Question nodes
{
  shape: "circle",
  radius: 25,
  fill: "#34495E",
  stroke: "#2C3E50",
  textColor: "#FFFFFF"
}

// Outcome nodes
{
  shape: "rounded rectangle",
  width: 150,
  height: 35,
  fill: <strand_color>, // Dynamic based on outcome strand
  stroke: <darken_strand_color>,
  textColor: "#FFFFFF"
}
```

**Link Styling**:
- Curve type: Bezier horizontal
- Stroke color: `#BDC3C7` (gray)
- Stroke width: 1.5px
- Hover: Increase to 3px, color to strand color

---

## 5. Technical Implementation Details

### 5.1 Technology Stack

```javascript
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "d3": "^7.8.5",
    "typescript": "^5.0.0"
  },
  "d3_modules": [
    "d3-hierarchy",    // For sunburst and tree layouts
    "d3-chord",        // For chord diagram
    "d3-shape",        // For arc and link generation
    "d3-scale",        // For color scales
    "d3-selection",    // For DOM manipulation
    "d3-transition",   // For smooth animations
    "d3-zoom"          // For pan/zoom functionality
  ]
}
```

### 5.2 Data Transformation Pipeline

**Step 1: Parse NDJSON eduKG**
```javascript
// Load and parse eduKG.ndjson
const nodes = [];
const relationships = [];

// Read line by line
eduKGLines.forEach(line => {
  const item = JSON.parse(line);
  if (item.id) {
    nodes.push(item);
  } else if (item.from && item.to) {
    relationships.push(item);
  }
});
```

**Step 2: Build Hierarchical Structure for Sunburst**
```javascript
const buildHierarchy = (nodes, relationships) => {
  const hierarchy = {
    name: "Investigating Science",
    children: [
      {
        name: "Year 11",
        children: [] // M1-M4
      },
      {
        name: "Year 12",
        children: [] // M5-M8
      }
    ]
  };

  // Find syllabus node
  const syllabus = nodes.find(n => n.type === "Deliverable" && n.props.kind === "syllabus");

  // Find all modules
  const modules = nodes.filter(n => n.type === "Deliverable" && n.props.kind === "Module");

  modules.forEach(module => {
    const yearIndex = module.props.year_level === 11 ? 0 : 1;

    // Get outcomes for this module
    const moduleOutcomes = getModuleOutcomes(module.id, relationships, nodes);

    // Group outcomes by strand
    const strandGroups = groupByStrand(moduleOutcomes);

    const moduleNode = {
      name: `M${module.props.number}: ${module.props.title}`,
      moduleId: module.id,
      children: Object.entries(strandGroups).map(([strand, outcomes]) => ({
        name: strand,
        strand: strand,
        children: outcomes.map(o => ({
          name: o.props.code,
          description: o.props.statement,
          strand: strand,
          outcomeId: o.id
        }))
      }))
    };

    hierarchy.children[yearIndex].children.push(moduleNode);
  });

  return hierarchy;
};
```

**Step 3: Build Chord Matrix**
```javascript
const buildChordMatrix = (nodes, relationships) => {
  const modules = nodes.filter(n => n.type === "Deliverable" && n.props.kind === "Module")
    .sort((a, b) => a.props.number - b.props.number);

  const outcomes = nodes.filter(n => n.type === "Deliverable" && n.props.kind === "Outcome");

  // Create 8x8 matrix (modules × modules)
  const matrix = Array(8).fill(0).map(() => Array(8).fill(0));

  // For each outcome, find which modules it appears in
  outcomes.forEach(outcome => {
    const linkedModules = getModulesForOutcome(outcome.id, relationships);

    // For each pair of modules sharing this outcome, increment matrix
    for (let i = 0; i < linkedModules.length; i++) {
      for (let j = i + 1; j < linkedModules.length; j++) {
        const moduleI = modules.findIndex(m => m.id === linkedModules[i]);
        const moduleJ = modules.findIndex(m => m.id === linkedModules[j]);
        matrix[moduleI][moduleJ]++;
        matrix[moduleJ][moduleI]++;
      }
    }
  });

  return {
    matrix,
    modules: modules.map(m => m.props.title)
  };
};
```

**Step 4: Build Assessment Tree**
```javascript
const buildAssessmentTree = (nodes, relationships) => {
  const exams = nodes.filter(n => n.type === "Deliverable" && n.props.kind === "exam");

  const tree = {
    name: "Assessments",
    children: exams.map(exam => ({
      name: exam.props.title || exam.id,
      examId: exam.id,
      children: getQuestionsForExam(exam.id, relationships, nodes).map(q => ({
        name: q.id,
        questionId: q.id,
        children: getOutcomesForQuestion(q.id, relationships, nodes).map(o => ({
          name: o.props.code,
          description: o.props.statement,
          strand: o.props.strand,
          outcomeId: o.id
        }))
      }))
    }))
  };

  return tree;
};
```

### 5.3 Component Architecture

```
src/
├── components/
│   ├── InvestigatingScienceVisualization.tsx  // Main container
│   ├── SunburstView.tsx                        // Primary sunburst
│   ├── ChordView.tsx                           // Outcome-module chord
│   ├── AssessmentTreeView.tsx                  // Exam pathway tree
│   ├── Tooltip.tsx                             // Shared tooltip component
│   ├── InfoPanel.tsx                           // Detail panel below viz
│   ├── Legend.tsx                              // Strand color legend
│   └── ViewToggle.tsx                          // Switch between views
├── utils/
│   ├── dataTransformers.ts                     // NDJSON → viz data
│   ├── colorSchemes.ts                         // Strand colors
│   └── helpers.ts                              // Utility functions
├── types/
│   └── eduKG.ts                                // TypeScript interfaces
└── data/
    └── eduKG.ndjson                            // Raw data (symlink)
```

### 5.4 Key Interactive Features

**Progressive Disclosure Strategy**:

| User Action | Information Revealed | Cognitive Load Impact |
|-------------|---------------------|----------------------|
| **Initial Load** | Sunburst showing modules and year levels | Low - overview only |
| **Hover Module** | Tooltip with module title and outcomes | Medium - on-demand detail |
| **Click Module** | Info panel shows full description, linked outcomes | Medium - chosen exploration |
| **Hover Outcome** | Tooltip with outcome code, statement, strand | Medium - specific detail |
| **Click Outcome** | Info panel shows modules using outcome, exam questions | High - comprehensive view |
| **Toggle to Chord** | New perspective on outcome distribution | Medium - alternative view |
| **Toggle to Tree** | Assessment-focused pathway view | Medium - targeted use case |

**Filtering Capabilities**:
1. **By Strand**: Click legend item to show/hide all outcomes from that strand
2. **By Year Level**: Toggle Year 11 / Year 12 modules
3. **By Module**: Select specific modules to examine in detail
4. **By Exam**: Filter tree view to specific exam years

**Zoom and Pan** (for all views):
- Mouse wheel: Zoom in/out
- Click and drag: Pan viewport
- Double-click: Reset to default view
- Zoom extent: 0.5x to 3x

---

## 6. Cognitive Load Mitigation Strategies

### 6.1 Managing Intrinsic Load

**Challenge**: Understanding relationships between modules, outcomes, strands, and assessment

**Strategies**:
1. **Worked Examples**: Provide annotated example pathways
   - Example: "Module M1 → Outcome INS11/12-1 → Exam 2023 Q1"
   - Highlight this pathway in visualization with explanation

2. **Scaffolded Exploration**:
   - Guided tour mode: Step-by-step introduction to visualization
   - Tutorial tooltips on first use
   - Progressive feature unlock (basic → advanced interactions)

3. **Schema Building**:
   - Multiple complementary views reinforce understanding
   - Consistent color coding across all views
   - Legend always visible

### 6.2 Reducing Extraneous Load

**Challenge**: Complex visualization can overwhelm if poorly designed

**Strategies**:
1. **Visual Coherence**:
   - Remove decorative elements
   - Consistent typography hierarchy
   - White space for visual breathing room
   - High contrast for legibility

2. **Clear Signaling**:
   - Color coding guides attention to strands
   - Hover states clearly indicate interactivity
   - Active elements have visual affordances (cursor changes, highlights)

3. **Information Architecture**:
   - Default view shows structure, not details
   - Details appear only on interaction
   - Clear visual hierarchy (size, position, color intensity)

### 6.3 Enhancing Germane Load

**Challenge**: Promote deep learning about curriculum structure

**Strategies**:
1. **Dual Coding**:
   - Visual representation (position, color, size)
   - Verbal representation (labels, descriptions in tooltips)
   - Combined processing strengthens memory

2. **Comparison Views**:
   - Side-by-side Year 11 vs Year 12 comparison
   - Strand distribution across modules (chord view)
   - Assessment coverage analysis (tree view)

3. **Metacognitive Prompts**:
   - Include reflection questions in info panel
   - "How does this outcome connect to others?"
   - "Which modules develop this skill strand?"
   - "How is this outcome assessed in exams?"

---

## 7. Implementation Task List

### Phase 1: Data Processing (Estimated: 2 days)

**Tasks**:
1. **Parse eduKG.ndjson** (3 hours)
   - [ ] Write NDJSON reader utility
   - [ ] Create TypeScript interfaces for node types
   - [ ] Validate data structure
   - [ ] Handle edge cases (missing fields, malformed data)

2. **Build Data Transformers** (5 hours)
   - [ ] Implement `buildHierarchy()` for sunburst
   - [ ] Implement `buildChordMatrix()` for chord diagram
   - [ ] Implement `buildAssessmentTree()` for tree view
   - [ ] Write helper functions (getModuleOutcomes, getOutcomesForQuestion, etc.)
   - [ ] Add unit tests for transformers

3. **Create Color Scheme** (2 hours)
   - [ ] Define strand color palette
   - [ ] Create color scale utilities
   - [ ] Test color contrast ratios (WCAG AA compliance)
   - [ ] Document color meanings

### Phase 2: Sunburst Visualization (Estimated: 3 days)

**Tasks**:
1. **Basic Sunburst Structure** (4 hours)
   - [ ] Set up React component with D3 integration
   - [ ] Create SVG container with viewBox
   - [ ] Implement d3.hierarchy and d3.partition
   - [ ] Generate arc paths with d3.arc
   - [ ] Apply color scheme to arcs

2. **Labels and Typography** (3 hours)
   - [ ] Add text labels with proper positioning
   - [ ] Implement label truncation for small segments
   - [ ] Add text rotation based on arc angle
   - [ ] Ensure text contrast and readability

3. **Interactivity** (5 hours)
   - [ ] Implement hover states with opacity changes
   - [ ] Add path highlighting (ancestors and descendants)
   - [ ] Implement click selection
   - [ ] Add zoom to selected segment feature
   - [ ] Smooth transitions with d3.transition

4. **Tooltip Component** (3 hours)
   - [ ] Create reusable Tooltip component
   - [ ] Position tooltip relative to mouse
   - [ ] Populate with segment-specific data
   - [ ] Style with CSS (shadows, borders, typography)
   - [ ] Handle edge cases (tooltip near viewport edge)

5. **Info Panel** (3 hours)
   - [ ] Create InfoPanel component below visualization
   - [ ] Display selected node details
   - [ ] Show related nodes (linked modules, outcomes, exams)
   - [ ] Add clear visual hierarchy with headings
   - [ ] Make scrollable for long content

6. **Legend** (2 hours)
   - [ ] Create Legend component
   - [ ] Display all strand colors with labels
   - [ ] Make legend interactive (click to filter)
   - [ ] Position appropriately (top-left corner)

### Phase 3: Chord Diagram (Estimated: 2 days)

**Tasks**:
1. **Chord Diagram Structure** (4 hours)
   - [ ] Create ChordView component
   - [ ] Implement d3.chord layout
   - [ ] Generate arc paths for modules
   - [ ] Generate ribbon paths for outcome connections
   - [ ] Apply strand colors to ribbons

2. **Interactivity** (3 hours)
   - [ ] Implement hover states (dim non-related ribbons)
   - [ ] Add tooltips showing specific outcomes
   - [ ] Implement click to highlight module connections
   - [ ] Add smooth transitions

3. **Integration** (2 hours)
   - [ ] Connect chord view to main app state
   - [ ] Synchronize selection across views
   - [ ] Share color scheme with sunburst

### Phase 4: Assessment Tree (Estimated: 2 days)

**Tasks**:
1. **Tree Layout** (4 hours)
   - [ ] Create AssessmentTreeView component
   - [ ] Implement d3.tree layout (horizontal)
   - [ ] Generate nodes (exams, questions, outcomes)
   - [ ] Generate links with Bezier curves
   - [ ] Apply strand colors to outcome nodes

2. **Interactivity** (3 hours)
   - [ ] Implement node hover states
   - [ ] Add tooltips with question and outcome details
   - [ ] Implement collapsible branches (expand/collapse)
   - [ ] Highlight paths on hover

3. **Integration** (2 hours)
   - [ ] Connect tree view to main app state
   - [ ] Synchronize selection with other views
   - [ ] Enable filtering by exam year

### Phase 5: Navigation and Controls (Estimated: 1 day)

**Tasks**:
1. **View Toggle** (2 hours)
   - [ ] Create ViewToggle component (tabs or buttons)
   - [ ] Implement smooth transitions between views
   - [ ] Maintain state across view changes
   - [ ] Add keyboard shortcuts (1, 2, 3 for views)

2. **Filters** (3 hours)
   - [ ] Create filter controls (checkboxes, dropdowns)
   - [ ] Implement strand filtering
   - [ ] Implement year level filtering
   - [ ] Implement module filtering
   - [ ] Update visualizations reactively

3. **Zoom and Pan** (2 hours)
   - [ ] Implement d3.zoom for all views
   - [ ] Add zoom controls (buttons for in/out/reset)
   - [ ] Constrain zoom extent
   - [ ] Ensure smooth zoom transitions

### Phase 6: Polish and Optimization (Estimated: 2 days)

**Tasks**:
1. **Performance Optimization** (4 hours)
   - [ ] Memoize expensive computations
   - [ ] Optimize D3 selections
   - [ ] Lazy load data for large datasets
   - [ ] Profile and fix performance bottlenecks

2. **Responsive Design** (3 hours)
   - [ ] Test on different screen sizes
   - [ ] Adjust layout for mobile/tablet
   - [ ] Ensure touch interactions work
   - [ ] Add media queries for breakpoints

3. **Accessibility** (3 hours)
   - [ ] Add ARIA labels to interactive elements
   - [ ] Ensure keyboard navigation works
   - [ ] Test with screen readers
   - [ ] Add alt text for visual elements
   - [ ] Verify color contrast ratios

4. **User Instructions** (2 hours)
   - [ ] Create guided tour component
   - [ ] Write clear instructions for each view
   - [ ] Add contextual help tooltips
   - [ ] Create example use cases

### Phase 7: Testing and Documentation (Estimated: 2 days)

**Tasks**:
1. **Testing** (5 hours)
   - [ ] Write unit tests for data transformers
   - [ ] Write integration tests for components
   - [ ] Perform user acceptance testing with teachers
   - [ ] Perform user testing with students
   - [ ] Fix bugs and issues discovered

2. **Documentation** (4 hours)
   - [ ] Write README with setup instructions
   - [ ] Document component APIs
   - [ ] Create user guide with screenshots
   - [ ] Document data format requirements
   - [ ] Add inline code comments

3. **Deployment** (2 hours)
   - [ ] Set up build pipeline
   - [ ] Optimize production bundle
   - [ ] Deploy to hosting platform
   - [ ] Create shareable link for stakeholders

---

## 8. Expected Outcomes and Benefits

### For Students

1. **Curriculum Overview**:
   - Understand the "big picture" of Investigating Science
   - See how modules progress from Year 11 to Year 12
   - Recognize skill development across strands

2. **Assessment Preparation**:
   - Identify which outcomes are tested in exams
   - Understand outcome-question relationships
   - Focus revision on high-frequency outcomes

3. **Learning Pathways**:
   - See how earlier modules build skills for later modules
   - Understand cross-module connections
   - Recognize where outcomes recur

### For Teachers

1. **Curriculum Planning**:
   - Visualize outcome distribution across modules
   - Identify gaps or overlaps in coverage
   - Plan teaching sequences that build on prior modules

2. **Assessment Design**:
   - See which outcomes are frequently assessed
   - Identify under-assessed outcomes
   - Design assessments with balanced outcome coverage

3. **Differentiation**:
   - Identify entry points for different ability levels
   - See progression of cognitive demand (if Bloom's data available)
   - Plan scaffolding based on prerequisite understanding

### For Curriculum Designers

1. **Structural Analysis**:
   - Identify imbalances in strand distribution
   - See module-outcome relationships at scale
   - Evaluate temporal progression coherence

2. **Assessment Alignment**:
   - Verify exam questions align with syllabus outcomes
   - Identify outcome gaps in assessment
   - Ensure balanced representation of strands

---

## 9. Future Enhancements

### Phase 2 Features (Post-Initial Release)

1. **Personalized Learning Pathways**:
   - Students mark outcomes as "mastered" or "needs work"
   - Visualization highlights areas requiring focus
   - Suggested learning sequences based on current knowledge

2. **Cross-Curricular Connections**:
   - Link to other Stage 6 subjects (Physics, Chemistry, Biology)
   - Show where Investigating Science concepts appear in other subjects
   - Facilitate integrated teaching approaches

3. **Resource Linking**:
   - Attach teaching resources to specific outcomes
   - Link to example exam questions for each outcome
   - Embed video explanations or worked examples

4. **Collaboration Features**:
   - Teachers share annotated visualizations
   - Students collaborate on pathway planning
   - Export personalized learning plans

5. **Analytics Dashboard**:
   - Track student engagement with visualization
   - Identify commonly explored pathways
   - Measure time spent on different outcomes
   - Inform teaching based on student interest patterns

---

## 10. Conclusion

The recommended hybrid visualization approach for Investigating Science leverages the strengths of multiple visualization types:

- **Sunburst** for hierarchical structure and overview
- **Chord diagram** for cross-module outcome relationships
- **Tree diagram** for assessment pathways

This approach is grounded in cognitive load theory and informed by successful implementations in physics and chemistry, while being adapted to the unique hierarchical structure of the Investigating Science curriculum.

The implementation plan is detailed and achievable, with an estimated **14 days of development time** across 7 phases. The resulting visualization system will support both students and teachers in understanding curriculum structure, planning learning, and preparing for assessment.

**Key Success Factors**:
1. Progressive disclosure to manage cognitive load
2. Multiple complementary views for different use cases
3. Consistent visual language across all views
4. Interactive features that promote exploration
5. Clear documentation and user guidance

By following this recommendation, the Investigating Science eduKG will become an accessible, pedagogically sound tool for navigating and understanding the Stage 6 curriculum.

---

**Document Version**: 1.0
**Date**: 2025-10-08
**Author**: AI Analysis of eduKG Structure and Visualization Research
**Status**: Recommendation for Implementation
