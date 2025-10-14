# Investigating Science Visualization

Interactive D3.js sunburst visualization for the NSW Stage 6 Investigating Science curriculum knowledge graph.

## Overview

This visualization provides an interactive, hierarchical view of the Investigating Science curriculum, showing:

- **Year Levels** (11 and 12)
- **Modules** (M1-M8)
- **Scientific Strands** (7 strands)
- **Learning Outcomes** (17 outcomes)

The visualization uses color-coding based on scientific strands and supports interactive exploration through hover tooltips, click-to-zoom, and detailed information panels.

## Features

### Phase 1 ✅ Complete
- TypeScript type definitions for eduKG data structures
- NDJSON parser for knowledge graph data
- Data transformation utilities for building hierarchical structures
- Color scheme based on scientific strands
- Helper utilities for text formatting and calculations

### Phase 2 ✅ Complete
- **Sunburst Visualization Component**
  - Radial hierarchical layout using D3.js
  - Color-coded by scientific strand
  - Automatic text sizing and truncation
  - White borders between segments

- **Interactive Features**
  - **Hover**: Highlights segment and shows detailed tooltip
  - **Click**: Displays full information panel and zooms into segment (if it has children)
  - **Zoom**: Click center text to zoom out to parent level

- **UI Components**
  - Tooltip with node details, descriptions, and metadata
  - Information panel with expandable details
  - Legend showing all 7 scientific strands
  - Statistics display (module/outcome/exam counts)

## Project Structure

```
visualization/
├── src/
│   ├── components/
│   │   ├── InvestigatingScienceVisualization.tsx  # Main container
│   │   ├── SunburstView.tsx                        # Sunburst visualization
│   │   ├── Tooltip.tsx                             # Hover tooltip
│   │   ├── InfoPanel.tsx                           # Detail panel
│   │   └── Legend.tsx                              # Strand color legend
│   ├── utils/
│   │   ├── dataTransformers.ts                     # NDJSON parsing & transformations
│   │   ├── colorSchemes.ts                         # Color definitions
│   │   └── helpers.ts                              # Utility functions
│   ├── types/
│   │   └── eduKG.ts                                # TypeScript types
│   ├── data/
│   │   └── eduKG.ndjson                            # Knowledge graph data
│   ├── App.tsx                                     # Application entry
│   └── main.tsx                                    # React root
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:3000`

## Usage

### Basic Usage

The visualization automatically loads the eduKG.ndjson file and displays the curriculum structure.

**Interactions:**
- **Hover** over any segment to see a tooltip with details
- **Click** on any segment to:
  - View full details in the information panel below
  - Zoom into that segment (if it has children)
- **Click** the center text to zoom back out to the parent level

### Data Structure

The visualization expects NDJSON format with:
- **Nodes**: Representing deliverables (syllabus, modules, outcomes, exams)
- **Relationships**: Connecting nodes (PRODUCES, DERIVES_FROM, VERIFIES)

Example node:
```json
{
  "id": "outcome:INS11-12-1",
  "type": "Deliverable",
  "props": {
    "kind": "Outcome",
    "code": "INS11/12-1",
    "strand": "Questioning and predicting",
    "statement": "Develops and evaluates questions and hypotheses"
  }
}
```

Example relationship:
```json
{
  "from": "module:M1",
  "to": "outcome:INS11-12-1",
  "label": "PRODUCES"
}
```

## Color Scheme

The visualization uses a color scheme based on the seven scientific strands:

| Strand | Color | Hex Code |
|--------|-------|----------|
| Questioning and predicting | Steel Blue | `#4682B4` |
| Planning investigations | Cadet Blue | `#5F9EA0` |
| Conducting investigations | Sea Green | `#2E8B57` |
| Processing data and information | Goldenrod | `#DAA520` |
| Analysing data and information | Peru | `#CD853F` |
| Problem solving | Indian Red | `#CD5C5C` |
| Communicating | Medium Purple | `#9370DB` |

## Development

### Build for production:
```bash
npm run build
```

### Type checking:
```bash
npm run type-check
```

### Preview production build:
```bash
npm run preview
```

## API Reference

### Main Component

```tsx
import InvestigatingScienceVisualization from './components/InvestigatingScienceVisualization';

<InvestigatingScienceVisualization ndjsonData={ndjsonString} />
```

**Props:**
- `ndjsonData` (string): The complete NDJSON content as a string

### Data Transformers

**`parseNDJSON(ndjsonContent: string): EduKGData`**
- Parses NDJSON format into structured data

**`buildSunburstHierarchy(nodes, relationships): HierarchyNode`**
- Builds hierarchical structure for sunburst visualization
- Structure: Root → Year → Module → Strand → Outcome

**`buildChordData(nodes, relationships)`**
- Prepares data for chord diagram (future implementation)

**`buildAssessmentTree(nodes, relationships, targetOutcomeId?)`**
- Builds tree showing exam questions verifying outcomes (future implementation)

**`getGraphStats(data: EduKGData)`**
- Returns statistics about the knowledge graph

### Color Utilities

**`getStrandColor(strand: string): string`**
- Returns hex color for a given strand

**`getHierarchyColor(level, strand?): string`**
- Returns color based on hierarchy level and optional strand

**`lightenColor(color: string, percent: number): string`**
- Lightens a hex color by percentage

**`darkenColor(color: string, percent: number): string`**
- Darkens a hex color by percentage

**`getContrastColor(hexColor: string): string`**
- Returns white or black for optimal contrast

## Cognitive Load Considerations

The visualization is designed with cognitive load theory in mind:

1. **Progressive Disclosure**: Information is revealed on demand through hover and click interactions
2. **Color Coding**: Consistent strand colors reduce cognitive burden
3. **Hierarchical Layout**: Natural top-down structure matches mental models
4. **Focused Views**: Click-to-zoom reduces extraneous information
5. **Clear Labels**: Auto-sizing and truncation maintain readability

## Next Phases

### Phase 3: Chord Diagram (Planned)
- Circular visualization showing module-strand relationships
- Interactive filtering by module or strand
- Connection strength based on outcome count

### Phase 4: Assessment Tree (Planned)
- Tree visualization showing exam questions verifying outcomes
- Clickable navigation from outcome to related exam questions
- Year-based filtering (2019-2024)

### Phase 5: Navigation & Controls (Planned)
- View switching between sunburst, chord, and tree
- Search/filter functionality
- Export capabilities (PNG, SVG, PDF)

### Phase 6: Polish & Optimization (Planned)
- Performance optimization for large datasets
- Accessibility improvements (ARIA labels, keyboard navigation)
- Responsive design for mobile devices
- Animation refinements

### Phase 7: Testing & Documentation (Planned)
- Unit tests for data transformers
- Integration tests for components
- User testing with teachers and students
- Comprehensive documentation

## Technologies

- **React 18** - UI framework
- **TypeScript** - Type safety
- **D3.js v7** - Data visualization
- **Vite** - Build tool and dev server

## Educational Purpose

This visualization supports:

1. **Curriculum Planning**: Teachers can see relationships between modules, strands, and outcomes
2. **Student Guidance**: Students can explore learning progression and concept relationships
3. **Assessment Alignment**: Clear connections between outcomes and exam questions

## License

MIT License - See source files for details.

## Acknowledgments

- NSW Education Standards Authority (NESA) for the Investigating Science syllabus
- D3.js community for visualization techniques
- Cognitive load theory research informing the design

## Completion Status

✅ **Phase 1**: Data Processing (COMPLETE)
✅ **Phase 2**: Sunburst Visualization (COMPLETE)
⏳ Phase 3: Chord Diagram (Pending)
⏳ Phase 4: Assessment Tree (Pending)
⏳ Phase 5: Navigation & Controls (Pending)
⏳ Phase 6: Polish & Optimization (Pending)
⏳ Phase 7: Testing & Documentation (Pending)
