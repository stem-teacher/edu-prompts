# Vertical Icicle Visualisation: Specification & Session Summary

## 1. Component Specification (as implemented)

### 1.1. Purpose

An interactive vertical icicle diagram (vertical partition layout) to visualise the lesson sequence for the \"Stage 5 Data Science 2\" course module. Allows browsing the sequence and viewing lesson details upon interaction.

### 1.2. Data Model

*   **Input Data:**
    *   `src/data/lessonSequence.json`: An array of lesson objects, each containing:
        *   `lessonId` (e.g., \"W1L1\")
        *   `title`
        *   `duration`
        *   `alignedNodes`: An array of strings referencing knowledge node IDs (e.g., `[\"DS5_N1\"]`) from the EduKG data.
        *   `learningOutcomes`: Array of objects (`{ syllabusCode, bloom }`).
        *   `cognitiveLoadBand`: Number (1-5).
        *   `overview`: Text description.
        *   `materials`: Object mapping material type to URL/resource link.
        *   (Implicitly requires week grouping via a utility function)
    *   `src/data/work-product-final-EduKG-stage-5-datascience.json`: A hierarchical JSON representing the course structure (Course > Module > Topics), where each Topic contains an array `knowledgeNodes`. Each node in this array has:
        *   `nodeId` (e.g., \"DS5_N1\")
        *   `description`
        *   `type`
        *   (Other attributes like `bloomTaxonomyLevel`, etc.)
*   **Internal Hierarchy:** The flat lesson list is transformed (using `src/utils/makeLessonTree.js`) into a 3-level hierarchy suitable for `d3.partition`: Module > Week > Lesson.
*   **EduKG Lookup:** A lookup `Map` is generated on component load, mapping `nodeId` from the EduKG data to the corresponding node object for efficient detail retrieval.

### 1.3. Visual Structure

*   **Layout:** Vertical icicle using `d3.partition`. Depth progresses horizontally from left to right.
    *   **Column 1 (Module):** Fixed width (`moduleColWidth = 40px`). Displays the module name vertically centered. Color: `#2C3E50`.
    *   **Column 2 (Weeks):** Fixed width (`weekColWidth = 40px`). Displays week identifiers (\"W1\", \"W2\", etc.) centered. Color: `#e3f2fd`. Appears on hover over any element.
    *   **Column 3 (Lessons):** Fixed width (`lessonColWidth = 200px`). Displays the full lesson `title`, left-aligned. Background color based on `cognitiveLoadBand` using an ordinal scale. Appears when hovering the parent week or a sibling/self lesson.
*   **Vertical Sizing:** Each row corresponds to a lesson, with height defined by `rowHeight = 28px`. Total height calculated based on the total number of lessons.
*   **Container:** The SVG uses `viewBox` to scale, aiming to fit the available height with a small bottom padding.

### 1.4. Interaction

*   **Hover Module Bar:** Reveals all Week bars. Highlights Module bar.
*   **Hover Week Bar:** Reveals Lesson bars for that specific week. Highlights Week bar. Keeps Week bars visible.
*   **Hover Lesson Bar:** Highlights Lesson bar. Keeps Week bars visible. Shows full lesson details in the right-hand panel. Updates the \"selected lesson\" state.
*   **Mouse Leave SVG:** Clears hover highlights. Hides Week and Lesson bars. Keeps the *last selected lesson's details* visible in the right-hand panel.
*   **Tooltips:** Native browser tooltips show full Week names or Lesson ID + Title on hover over the respective bars/labels.

### 1.5. Detail Panel

*   **Location:** Fixed-width right-hand panel (`300px`). Scrolls vertically if content overflows.
*   **Content:** Displays details of the *last hovered lesson* (`selectedLesson` state).
    *   Lesson Title (Heading)
    *   Lesson ID
    *   Duration
    *   Cognitive Load Band
    *   Learning Outcomes (List)
    *   Mapped Knowledge Nodes (List of truncated descriptions/IDs with type, from EduKG lookup using `alignedNodes`)
    *   Overview (Text)
    *   Materials (List of links)
*   **Persistence:** Remains visible showing the last selected lesson even when the mouse leaves the visualization area.

### 1.6. Technology

*   React (with Hooks: `useState`, `useEffect`, `useMemo`, `useRef`)
*   D3.js (`d3-hierarchy`, `d3-scale`, `d3-selection`, `d3-shape`)
*   Vite build tool

## 2. Session Summary & Code Overview (April 28th)

*   **Goal:** Implement the vertical icicle visualization based on the provided AI briefing.
*   **Initial Steps:** Reviewed briefing, inspected project structure (`ds2-visuals` Vite/React app), located existing `VerticalIcicle.jsx` component.
*   **Data Integration:**
    *   Confirmed presence of `lessonSequence.json` and added `work-product-final-EduKG-stage-5-datascience.json`.
    *   Corrected invalid comment in EduKG JSON.
    *   Identified discrepancy between initial assumptions and actual data structure/linking keys (`alignedNodes`, `knowledgeNodes`, `nodeId`).
    *   Implemented `buildEdukgLookup` utility function to traverse the nested EduKG structure and create a flat map for efficient node detail lookup.
    *   Updated `LessonDetails` to use `alignedNodes` and the lookup map.
*   **Layout & Interaction Debugging (Iterative):**
    *   Corrected D3 partition coordinate interpretation for vertical layout (`size([height, width])`, using `y` for horizontal, `x` for vertical).
    *   Resolved React state issue where `d3.hierarchy` creating new objects on each render broke hover comparisons; fixed using `useMemo` for the `root` object.
    *   Implemented hover logic to show/hide Week and Lesson columns. Debugged inverse hover behavior. Final logic shows Weeks when anything is hovered, and Lessons only when parent Week or sibling Lesson is hovered.
    *   Implemented manual coordinate adjustment (`y0`, `y1`) after partition layout to achieve fixed column widths (Module: 40px, Week: 40px, Lesson: 200px). Adjusted drawing logic to use these modified coordinates.
    *   Addressed layout shift potentially caused by coordinate overrides or D3 updates.
    *   Addressed vertical clipping of the last lesson by adding padding to the SVG container (`paddingBottom`) and ensuring container height was sufficient.
    *   Addressed horizontal positioning/gap by adjusting flexbox container styles and reducing column/details panel widths.
*   **Final Touches:**
    *   Changed lesson labels from ID to full title.
    *   Removed placeholder text from the details panel.
    *   Implemented persistence for the details panel (using `selectedLesson` state).
*   **Code Location:** The primary implementation resides in `ds2-visuals/src/components/VerticalIcicle.jsx`. It relies on data files in `src/data/` and the utility in `src/utils/makeLessonTree.js`.

*   **Potential Minor Issues:** Slight vertical clipping might still occur in edge cases depending on screen height vs. calculated visualization height. Text in lesson titles might overflow the 200px column width.
