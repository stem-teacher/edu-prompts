# Comprehensive Prompt for Curriculum Sunburst Visualization

## Creating a Curriculum Knowledge Graph Sunburst Visualization

Below is a detailed prompt for creating an interactive D3.js sunburst visualization of curriculum content from a JSON data structure. Use this to generate syllabus visualizations for any subject area.

---

### Task Definition

Please create an interactive D3.js sunburst visualization that transforms curriculum data into a hierarchical, visually appealing knowledge graph. The visualization should:

1. Represent the hierarchical structure of a curriculum
2. Use appropriate visual encoding (colors, size, labels) to distinguish different types of content
3. Include interactive features (hover tooltips, information panel)
4. Follow educational design principles suitable for teacher and student use

### Expected JSON Data Structure

Your JSON data should follow a structure similar to:

```json
{
  "courses": [{
    "courseName": "[Subject Name]",
    "modules": [{
      "moduleName": "[Module Name]",
      "moduleCode": "[Module Code]",
      "topics": [{
        "topicName": "[Topic Name]",
        "inquiryQuestions": ["[Question 1]", "[Question 2]", ...],
        "syllabusOutcomes": [
          {
            "outcomeCode": "[Code]",
            "description": "[Description]",
            "bloomsLevel": "[Taxonomy Level]"
          },
          ...
        ],
        "knowledgeNodes": [
          {
            "nodeId": "[ID]",
            "description": "[Description]",
            "type": "[Type]",
            "bloomTaxonomyLevel": "[Level]",
            "syllabusReference": "[Reference]",
            "literacySkills": ["[Skill 1]", "[Skill 2]", ...],
            "numeracySkills": ["[Skill 1]", "[Skill 2]", ...],
            "examples": ["[Example 1]", "[Example 2]", ...]
          },
          ...
        ],
        "furtherConnections": [
          {
            "relatedSyllabusContent": ["[Content 1]", "[Content 2]", ...],
            "crossCurriculumPriorities": ["[Priority 1]", "[Priority 2]", ...]
          }
        ]
      }]
    }]
  }]
}
```

### Visualization Structure

Please structure the sunburst visualization with the following hierarchy:

1. **Center:** Topic name (central concept)
2. **First Ring:** Main organizational categories
   - Inquiry Questions
   - Syllabus Outcomes
   - Further Connections

3. **Second Ring:**
   - Under Inquiry Questions: Individual inquiry questions
   - Under Syllabus Outcomes: Individual outcomes
   - Under Connections: Types of connections

4. **Third Ring:**
   - Under each inquiry question: Relevant knowledge nodes
   - Under outcomes: Any sub-components or related elements
   - Under connections: Specific connections

5. **Fourth Ring:**
   - Skills associated with knowledge nodes
   - Examples
   - Other detailed information

### Visual Design Specifications

1. **Color Scheme:**
   - Central Concept: Navy Blue (#2C3E50)
   - Inquiry Questions: Warm Brown/Brick (#A0522D)
   - Knowledge Nodes: Olive Green (#8F9779)
   - Syllabus Outcomes: Soft Beige (#E9D8A6)
   - Skills: Medium Beige (#C3B299)
   - Connections: Light Beige (#D4C5B9)
   - Background: Off-white/Soft Cream (#FDF6EC)

2. **Typography:**
   - Font Family: Inter, Helvetica, or Arial (sans-serif)
   - Font Weights:
     - Bold for central concept, inquiry questions, and knowledge nodes
     - Regular for outcomes, skills, and connections
   - Font Sizes:
     - 18px for central concept
     - 14px for inquiry questions
     - 12px for knowledge nodes
     - 11px for other elements

3. **Segment Design:**
   - Small rounded corners (2px radius)
   - Thin white borders between segments (1.5px)
   - Subtle hover effect (darker stroke, 80% opacity)

### Interactive Features

1. **Tooltips:**
   - Show on hover over any segment
   - Include node name, description, and metadata
   - Include syllabus references where applicable

2. **Information Panel:**
   - Display detailed information about selected node below visualization
   - Include all relevant metadata (ID, Bloom's level, etc.)
   - Use colored tags to indicate node type

3. **Label Management:**
   - Auto-truncate labels that don't fit in segments
   - Position labels appropriately based on segment angle
   - Use appropriate contrasting text colors (white on dark backgrounds)

### Accessibility Considerations

1. **Color Contrast:**
   - Ensure sufficient contrast between text and backgrounds
   - Use ColorBrewer principles for accessibility

2. **Legend:**
   - Include a clear legend explaining all color categories
   - Position in top-left corner of visualization

3. **Supporting Text:**
   - Include brief instructions on how to interact with the visualization
   - Add context about the purpose of the visualization

### Technical Implementation

Please use the D3.js library to implement this visualization with:

1. A responsive SVG container (viewBox for scaling)
2. React hooks for state management (useState, useEffect, useRef)
3. Hierarchical data transformation using d3.hierarchy and d3.partition
4. SVG path generation using d3.arc
5. Consistent sizing based on node importance
6. Clean tooltips that follow the mouse pointer

### Educational Purpose

This visualization should support:

1. **Curriculum Planning:**
   - Help teachers see relationships between curriculum elements
   - Support identification of assessment opportunities

2. **Student Guidance:**
   - Show learning progression and concept relationships
   - Highlight skills development across the curriculum

3. **Assessment Alignment:**
   - Connect knowledge nodes to syllabus outcomes
   - Track Bloom's taxonomy levels across the curriculum

---

Please create this interactive visualization, ensuring that all node information is preserved and accessible through the interactive elements. The visualization should be both visually appealing and educationally valuable.
