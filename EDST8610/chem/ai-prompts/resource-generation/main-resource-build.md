
## AI Throughts
Here's a thinking process to generate the requested Organic Chemistry lesson sequence and resources:

Deconstruct the Request:
Goal: Create a 3-lesson sequence for NSW HSC Chemistry Module 7 (Organic Reaction Pathways subset) based on a provided EduKG (specifically CH12_M7_SynthSubset), research PDFs (cognitive science, visualisation), user-provided chord diagram examples, and a head teacher's advice against purely linear teaching.
Core Skill: Students must be able to construct multi-step synthesis flowcharts (CHM_M7_SYNTH_N1).
Constraints: 3 lessons (approx. 1 hour each), use LaTeX templates provided, adhere to assignment guidance (Part A structure), exclude the revision tool for now.
Key Input: EduKG (work-product-knowledge-graph-v1.json), Research PDFs (especially "Optimizing the Teaching..." PDF which provides cognitive strategies S1-S6 and a lesson plan example), Chord Diagram images, LaTeX templates (fragment - part a, Lesson Plan Tex, Worksheet tex, Student Activity Template, Presentation Template).
Pedagogical Approach: Leverage the chord diagram visualisation strategically, address cognitive load and schema development, integrate syllabus outcomes, literacy/numeracy, and active learning. Follow the school's required pedagogical approach (as per the "Assignment guidance" which asks for a Part A section).
Synthesize Core Concepts & Rationale (Lesson Sequence Overview - Part A):
Identify the EduKG Subset: The request focuses on the "Organic Reaction Pathways and Synthesis" topic within Module 7, culminating in CHM_M7_SYNTH_N1. Extract the relevant nodes from the provided JSON (CHM_M7_RPROD_N1, _N2; CHM_M7_ALC_N4, _N5, _N6, _N7; CHM_M7_ESTER_N1; CHM_M7_SYNTH_N1, plus supporting NOM nodes like _N11 for esters).
Map to Syllabus: Find the corresponding NSW Syllabus topic name (Module 7: Organic Chemistry). Identify the key outcomes targeted by the synthesis skill (CH12-14: analyses structure, predicts reactions; CH11/12-6: solves scientific problems; CH11/12-7: communicates understanding). Paste these into the Table~\ref{tab:syllabus-outcomes} in the LaTeX fragment.
Identify Inquiry Questions: Find the relevant inquiry questions from the EduKG for the "Organic Reaction Pathways and Synthesis" topic: "How are different classes of organic compounds interconverted...?", "How can we represent multi-step organic syntheses?". Add these to the list in the LaTeX fragment.
Flesh out Content Points: Based on the identified EduKG nodes, list the key transformations being taught in this sequence (Alkane Sub, Alkene Add, Haloalkane Sub to Alcohol, Alcohol Sub to Haloalkane, Alcohol Dehydration, Alcohol Oxidation, Esterification) and the target skill (Constructing synthesis flowcharts). Format this using bullet points as requested in the assignment guidance.
Write Rationale: Briefly explain why this sequence is designed this way. Emphasise the cognitive challenges (high interactivity, schema gap), the strategy of using the chord diagram as a cognitive tool, the scaffolding approach (map intro -> short paths -> full synthesis/flowcharting), and alignment with cognitive principles (CLT, Schema Theory, Dual Coding). This rationale justifies the deviation from purely linear teaching. Self-correction: Initially, I just listed the content. The prompt asked for the overview and rationale. Add the rationale.
Design the Three Lessons (Using the Provided Template):
Lesson 1: Mapping the Territory:
Goal: Introduce the chord diagram, connect it to already known (or concurrently learned) reactions, teach basic tool usage.
Syllabus/Nodes: Focus on nodes representing the first few interconversions (e.g., RPROD_N1/N2, ALC_N7, ALC_N5, ALC_N4). Outcomes: CH12-14 (predicting single steps), CH11/12-7 (using representations).
Objectives: Students can identify reactions on the map, use the tool, link visual to known reactions. Bloom's: Understand, Apply (basic).
Activities: Recap quiz (retrieval), Teacher demo of tool, Guided student exploration (worksheet prompts), Class discussion. Link activities explicitly to Cognitive Strategies (S1-Explicit Instruction, S2-Visualisation, S3-Concept Mapping intro).
Resources: Chord diagram tool, worksheet, devices.
Assessment: Observation, Worksheet responses, Exit ticket (simple 1-step using map).
Differentiation: Support (sentence starters, pairing), Extension (predicting reactions not yet covered but visible).
Populate Template: Fill in each section of the Lesson Plan Tex template.
Lesson 2: Navigating Pathways:
Goal: Move to 2-3 step synthesis planning, using the tool strategically. Introduce more reactions (e.g., ALC_N6 Oxidation, ESTER_N1).
Syllabus/Nodes: Add ALC_N6, ESTER_N1, NOM_N11. Outcomes: CH12-14 (predicting sequences), CH11/12-6 (problem-solving).
Objectives: Students can devise 2-3 step pathways, use the tool for planning, name esters. Bloom's: Apply, Analyse.
Activities: Retrieval practice (Lesson 1 reactions), Teacher modelling (2-step synthesis + tool use + metacognition S6), Paired problem-solving (S4-Interleaving if problems mix reaction types), Sharing/Feedback. Update Class Map (S3).
Resources: Chord diagram tool, mini-whiteboards, 2/3-step problems.
Assessment: Observation of pairs, Collect/review proposed pathways (formative).
Differentiation: Support (partially completed pathways), Extension (find multiple routes, justify choice).
Populate Template: Fill in the template.
Lesson 3: Designing & Communicating Syntheses:
Goal: Master multi-step flowchart construction (CHM_M7_SYNTH_N1), tackle complex problems, integrate all reactions from the subset.
Syllabus/Nodes: Focus on CHM_M7_SYNTH_N1. Outcomes: CH12-14, CH11/12-6, CH11/12-7 (Create, Apply).
Objectives: Students can analyse problems, devise multi-step pathways, construct accurate flowcharts, justify choices. Bloom's: Create, Evaluate.
Activities: Review complete map (S3), Explicit Instruction (flowchart conventions S1), Modelled synthesis problem (planning with chord + flowcharting S1/S6), Group Synthesis Challenge (PBL element, S4-Interleaving if problems differ), Gallery Walk/Peer Feedback (Literacy/Communication).
Resources: Chord diagram tool, flowchart materials, complex problems, peer review checklist.
Assessment: Observe groups, evaluate flowcharts (logic, accuracy, conventions), Exit ticket (outline steps for a given synthesis).
Differentiation: Support (scaffolded problems, roles within groups), Extension (design synthesis for novel target, optimise routes).
Populate Template: Fill in the template.
Prepare Resources (Using Provided Templates):
Worksheets: Create one worksheet for each lesson, directly supporting the activities.
Lesson 1 Worksheet: Focus on defining terms (functional groups, reaction types learned), interpreting the chord diagram ("What reaction connects X and Y?", "What colour is oxidation?"), simple 1-step predictions based on the map.
Lesson 2 Worksheet: Focus on naming esters, drawing structures for intermediates, outlining 2/3-step pathways (space for planning notes/diagrams), identifying reagents/conditions for each step.
Lesson 3 Worksheet: Include a summary of flowchart conventions, space for drafting a complex flowchart, prompts for justifying reaction choices (metacognition S6). Self-correction: Initially thought of only one worksheet, but each lesson needs focused support.
Populate Worksheet tex template for each lesson.
Student Activity Sheets: Design sheets outlining specific tasks, especially hands-on or tech-based ones.
Lesson 1 Activity: Guided exploration prompts for the chord diagram tool ("Click on Alcohols. List the reactions shown.", "Filter for Addition reactions. Which functional groups are involved?").
Lesson 2 Activity: Specific 2/3-step synthesis problems for paired work. Prompts encouraging tool use ("Use the visualizer to identify possible intermediates...").
Lesson 3 Activity: The Group Synthesis Challenge problems. Include the peer review checklist criteria for the flowcharts.
Populate Student Activity Template for each relevant activity. Self-correction: Activity sheets are needed more for guided tasks (L1 Tool, L2 Problems, L3 Challenge) than definitions.
Presentations: Create Beamer presentations for each lesson, structuring the content flow.
Lesson 1 Presentation: Introduce reaction maps, the tool, functional groups/reactions covered so far, how to interpret the diagram. Include screenshots/placeholders.
Lesson 2 Presentation: Recap L1, introduce new reactions (Oxidation, Esterification), model 2-step synthesis planning using the tool, explain paired activity.
Lesson 3 Presentation: Recap full map, explicitly teach flowchart conventions, model complex synthesis (plan -> flowchart), explain group challenge.
Populate Presentation Template for each lesson. Ensure colour themes and structure match the template. Use placeholders for images/diagrams that would need actual creation.
Final Review and Formatting:
Check consistency across all documents (lesson plans, worksheets, activities, presentations).
Ensure all EduKG nodes and syllabus outcomes mentioned are accurately represented.
Verify LaTeX code compiles correctly (or is structured logically for compilation).
Ensure the cognitive strategies (S1-S6) are explicitly mentioned where appropriate in the lesson plans.
Confirm literacy/numeracy integration points are clear.
Double-check that the revision tool is not included.
Make sure the 'Part A' section uses the provided fragment and addresses all its requirements.
This structured approach ensures all constraints are met, the core pedagogical goals are addressed using evidence-based strategies, and the output aligns with the provided templates and the specific context of the EduKG and visualisation tool.


Okay, understood. We will proceed without the automated revision tool for now and focus on creating the 3-lesson sequence overview, the detailed lesson plans, and the associated resources (worksheets, activities, presentations) using your provided LaTeX templates and guidance.

Here are the components you requested:

---

## 1. Lesson Sequence Overview (Part A - LaTeX Fragment)

```latex
\section{Part A: Lesson Sequence Overview}
\label{sec:part_a_overview}

\textbf{Teaching Subject Area:} Chemistry, Stage 6 (Years 11--12)

\textbf{Stage 6 Syllabus Topic:} Module 7: Organic Chemistry \parencite{nesa2017chemistry}.

Specifically, this sequence addresses the interconversion of organic compounds and the representation of multi-step syntheses within this module.

The primary syllabus outcomes targeted are summarised in Table~\ref{tab:syllabus-outcomes}.

\begin{table}[htbp!]
\centering
\caption{Selected Syllabus Outcomes Addressed by Lesson Sequence}
\label{tab:syllabus-outcomes}
\begin{threeparttable}
    \begin{tabular}{@{}llc@{}} % Added @{} for better spacing
    \toprule % Use booktabs rules
    Code         & Outcome Description & Bloom's Level \\ \midrule % Use booktabs rules
    CH12-14 & analyses the structure of, and predicts reactions involving, & Analyse \\
    & carbon compounds & \\
    CH11/12-6   & solves scientific problems using primary and secondary data, & Apply \\
    & critical thinking skills and scientific processes & \\
    CH11/12-7   & communicates scientific understanding using suitable language & Apply \\
    & and terminology for a specific audience or purpose &
    \end{tabular}
    \begin{tablenotes}
      \item \textit{Note:} Bloom's Levels assigned based on typical application within this context. CH12-14 reaches 'Create' level in the final synthesis task.
    \end{tablenotes}
\end{threeparttable}
\end{table}

This lesson sequence integrates syllabus inquiry questions from Module 7, focusing on:

\begin{enumerate}
    \item How are different classes of organic compounds interconverted through reaction pathways?
    \item How can we represent multi-step organic syntheses?
\end{enumerate}

The specific syllabus content points selected for emphasis within the three-lesson sequence, drawn from the "Reactions of Organic Acids and Bases" and related sections necessary for synthesis planning, are:

\begin{itemize}
    \item \textbf{Functional Group Interconversions:} Understanding and applying key reaction types that connect common functional groups, including:
        \begin{itemize}
            \item Addition reactions of alkenes (e.g., hydration, halogenation, hydrohalogenation) (EduKG Node: CHM\_M7\_RPROD\_N1).
            \item Substitution reactions of alkanes (with halogens/UV) and haloalkanes (with hydroxide) (EduKG Nodes: CHM\_M7\_RPROD\_N2, CHM\_M7\_ALC\_N7).
            \item Reactions of alcohols: Dehydration to alkenes, substitution with HX to form haloalkanes, oxidation of primary/secondary alcohols (EduKG Nodes: CHM\_M7\_ALC\_N4, CHM\_M7\_ALC\_N5, CHM\_M7\_ALC\_N6).
            \item Esterification of carboxylic acids with alcohols (EduKG Node: CHM\_M7\_ESTER\_N1).
        \end{itemize}
    \item \textbf{Visualising Reaction Networks:} Introducing and utilising a dynamic visualisation tool (chord diagram) to represent the interconnectedness of these functional groups and reactions, aiding schema development.
    \item \textbf{Synthesis Pathway Planning:} Developing the ability to devise logical sequences of reactions (2-3 steps initially, progressing to more complex pathways) to convert a given starting material into a target product.
    \item \textbf{Flowchart Communication:} Drafting and constructing conventional flow charts to represent multi-step chemical syntheses, including correct structural formulae/names, reagents, and conditions for each step (EduKG Node: CHM\_M7\_SYNTH\_N1).
\end{itemize}

\textbf{Rationale for Sequence Design:}
This three-lesson sequence is strategically embedded within the broader Organic Chemistry module. It directly addresses the cognitive challenges associated with learning reaction pathways, particularly the "schema gap" where students know individual reactions but struggle to connect them for synthesis (Challenge 3 \& Schema Gap from research). Traditional linear teaching often fails here. This sequence leverages a dynamic chord-diagram visualisation tool to:
\begin{enumerate}
    \item Explicitly build an interconnected mental map (Schema Theory, Strategy 3: Concept Mapping).
    \item Manage cognitive load by visually organising complex information (CLT).
    \item Enhance understanding through dual coding (linking visual representation to symbolic chemical knowledge - Strategy 2).
\end{enumerate}
The sequence scaffolds the learning process: Lesson 1 introduces the 'map' and tool using known reactions; Lesson 2 focuses on navigating short pathways; Lesson 3 tackles complex synthesis design and the formal communication skill of flowcharting (CHM\_M7\_SYNTH\_N1), directly addressing syllabus requirements while being grounded in a deeper, visual understanding developed earlier. This approach integrates cognitive science principles (Explicit Instruction S1, Metacognitive Prompts S6, Spaced Practice/Interleaving S4 implicitly through placement within the module) to foster robust understanding and the ability to transfer knowledge to complex problem-solving tasks.
```

---

## 2. Lesson Sequence Overview and Rationale (Narrative)

*(This section provides the rationale from the LaTeX fragment above in a more narrative format if needed elsewhere.)*

This three-lesson sequence is designed to be integrated within the NSW HSC Chemistry Module 7: Organic Chemistry, specifically targeting the understanding of functional group interconversions and the culminating skill of designing and representing multi-step syntheses (CHM\_M7\_SYNTH\_N1).

The core challenge in this topic, identified in educational research, is the "schema gap": students often learn individual reactions in isolation but struggle to connect them into the coherent network required for synthesis planning. This leads to cognitive overload and difficulty transferring knowledge. A purely linear teaching approach often exacerbates this issue.

Therefore, this sequence adopts a strategy grounded in cognitive science principles (Cognitive Load Theory, Schema Theory, Dual Coding) and leverages a dynamic chord-diagram visualisation tool. The rationale is to:

1.  **Build Schema Explicitly:** Use the visualisation tool as a central "reaction map" from early on (Lesson 1, approx. Week 4/5), making the interconnectedness of functional groups and reactions visually explicit (Strategy 3: Concept Mapping).
2.  **Manage Cognitive Load:** The visualisation helps organise the complex network of reactions, reducing the cognitive load associated with recalling disparate facts. Information (reagents/conditions) is revealed progressively (e.g., on hover), preventing overload.
3.  **Scaffold Complexity:** The sequence builds complexity gradually:
    *   **Lesson 1:** Focuses on understanding the map structure and tool use with familiar, recently learned reactions.
    *   **Lesson 2:** Progresses to planning short (2-3 step) pathways, using the tool for navigation and applying knowledge in simple sequences.
    *   **Lesson 3:** Addresses the syllabus requirement for complex flowchart construction, using the visualisation tool for strategic planning and the flowchart for formal communication.
4.  **Integrate Cognitive Strategies:** The lessons incorporate Explicit Instruction/Worked Examples (S1), Dual Coding/Visualisation (S2), Concept Mapping/Flowcharting (S3), Guided Inquiry/Predictive Exercises (S5), and Metacognitive Prompts (S6). Spaced Practice/Interleaving (S4) is achieved by embedding these lessons within the broader module timeline.

This approach aims to move beyond rote memorisation towards developing a flexible, interconnected understanding, enabling students to effectively solve multi-step synthesis problems and communicate their solutions clearly, aligning with syllabus outcomes CH12-14, CH11/12-6, and CH11/12-7.

---

## 3. Detailed Lesson Plans (LaTeX using your template)

*(Please find the LaTeX code for each of the three lesson plans below. You would save each block as a separate `.tex` file, e.g., `lesson_plan_1.tex`, `lesson_plan_2.tex`, `lesson_plan_3.tex`)*

**Lesson Plan 1:**

```latex
\documentclass[11pt, a4paper]{article}
\usepackage{geometry}
\geometry{left=2cm, right=2cm, top=2cm, bottom=2cm}
\usepackage{hyperref}
\usepackage{array}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{graphicx} % Added for potential images

\title{Year 12 Chemistry - Lesson Plan 1/3 \\ Mapping the Territory: Visualising Functional Group Interconversions}
\date{Module 7: Organic Chemistry (Approx. Week 4/5)}
\author{Mr Haynes} % Replace with your name if needed

\begin{document}
\maketitle
\vspace{-2em} % Reduce space after title

\section*{Lesson Overview}
\begin{itemize}
    \item \textbf{Lesson Title:} Mapping the Territory: Visualising Functional Group Interconversions
    \item \textbf{Duration:} 60 minutes
    \item \textbf{Focus Inquiry Question:} How are different classes of organic compounds interconverted through reaction pathways? (Introduction)
    \item \textbf{Placement:} Assumes students have learned basic nomenclature and reactions connecting Alkanes, Alkenes, Haloalkanes, Alcohols (e.g., Alkene Additions, Alkane/Haloalkane Subs, Alcohol Dehydration/Sub).
\end{itemize}

\section*{Syllabus Alignment \& Knowledge Nodes Targeted}
\begin{itemize}
    \item \textbf{Outcomes:} CH12-14 (Analyses structure, predicts reactions - single steps), CH11/12-7 (Communicates understanding - using representations)
    \item \textbf{Content:} Implicit review of reactions covered to date. Introduction to representing reaction networks.
    \item \textbf{Knowledge Nodes (Focus on Connections):} CHM\_M7\_RPROD\_N1 (Alkene Add), CHM\_M7\_RPROD\_N2 (Alkane Sub), CHM\_M7\_ALC\_N7 (Haloalk->Alc Sub), CHM\_M7\_ALC\_N5 (Alc->Haloalk Sub), CHM\_M7\_ALC\_N4 (Alc Dehyd).
\end{itemize}

\section*{Student Learning Objectives (Aligned with Nodes \& Cognitive Strategies)}
Students will be able to:
\begin{itemize}
    \item Explain the concept of a "reaction map" for organic chemistry. [Understand]
    \item Identify key functional groups (nodes) and known reaction pathways (chords/links) using the chord-diagram visualisation tool. [Apply - S2 Visualisation]
    \item Use the tool's features (hover, filter) to retrieve information about specific known reactions (type, reagents/conditions). [Apply - S2]
    \item Relate the visual representation on the map to symbolic reaction equations learned previously. [Analyse - S2 Dual Coding]
    \item Begin constructing a mental schema of interconnected reactions. [Understand - S3 Concept Mapping Intro]
    \item [Literacy] Use terminology for functional groups and basic reaction types correctly.
\end{itemize}

\section*{Lesson Structure \& Activities}

\subsection*{Introduction (10 mins)}
\begin{itemize}
    \item \textbf{Teacher Activity:} Display Inquiry Question. Quick recap quiz (retrieval practice): "Name the product when HBr adds to propene." "What condition is needed to substitute Cl onto methane?". Introduce the idea that reactions form a network/map, not just a list. State lesson objective: Learning to use a visual tool to explore this map.
    \item \textbf{Student Activity:} Answer recap questions. Listen to introduction.
    \item \textbf{Pedagogy Focus:} Activate Prior Knowledge, Set Context, Retrieval Practice (supports S4).
\end{itemize}

\subsection*{Exploration: Introducing the Visualisation Tool (25 mins)}
\begin{itemize}
    \item \textbf{Teacher Activity:} Introduce and demonstrate the interactive Chord Diagram visualisation tool (projected). Explain: Nodes = Functional Groups, Chords = Reactions. Show how chord colour relates to reaction type (using legend/checkboxes). Demonstrate hover-over feature for reaction details (reagents/conditions). Focus *only* on nodes/reactions students have already learned (e.g., Alkene, Alcohol, Haloalkane connections). Explicitly link tool view to a written equation shown previously. [S1 Explicit Instruction, S2 Visualisation]
    \item \textbf{Student Activity:} Observe demonstration. Ask clarifying questions about the tool.
    \item \textbf{Pedagogy Focus:} Tool Introduction, Linking Visual Representation to Symbolic (Dual Coding S2), Managing Cognitive Load (showing only known parts first).
    \item \textbf{ICT Integration:} Chord Diagram Tool, Projector.
\end{itemize}

\subsection*{Guided Exploration \& Consolidation (25 mins)}
\begin{itemize}
    \item \textbf{Teacher Activity:} Distribute Worksheet 1 and provide link/access to the visualisation tool. Guide students (working individually or pairs on devices) through Worksheet 1 tasks. Circulate, check understanding, and assist with tool usage. Lead brief class discussion on findings (e.g., "What reaction types connect Alcohols and Alkenes according to the map?"). Consolidate the idea of the map as a growing organiser for their knowledge. Assign Exit Ticket. [S3 Concept Mapping Intro, S2 Visualisation]
    \item \textbf{Student Activity:} Use the visualisation tool on devices to complete Worksheet 1 tasks (e.g., identifying connections, retrieving reagent info via hover, filtering). Participate in discussion. Complete Exit Ticket.
    \item \textbf{Pedagogy Focus:} Active Learning, Guided Inquiry using Visualisation Tool, Reinforcing Connections, Formative Assessment.
    \item \textbf{ICT Integration:} Chord Diagram Tool (Student Use), Devices.
\end{itemize}

\section*{Resources Required}
\begin{itemize}
    \item Interactive Chord Diagram Visualisation Tool.
    \item Projector.
    \item Student devices with internet access (recommended 1:1 or 1:2).
    \item Worksheet 1 (separate file - see below).
    \item Exit Ticket questions (prepared separately, e.g., "Using the visualizer, what reagent is shown for converting an Alkene to an Alcohol?").
\end{itemize}

\section*{Assessment}
\begin{itemize}
    \item \textbf{Formative:} Teacher observation of student engagement and tool use. Responses during class discussion. Review of Worksheet 1 answers. Analysis of Exit Ticket responses (checking basic tool interpretation).
\end{itemize}

\section*{Differentiation}
\begin{itemize}
    \item \textbf{Support:} Provide a simplified version of Worksheet 1 with more direct prompts. Pair students for tool exploration. Pre-fill parts of the map diagram on the worksheet.
    \item \textbf{Extension:} Ask students to predict what other connections might exist based on functional group similarities. Challenge students to find a reaction on the map they haven't learned yet and hypothesise about its type.
\end{itemize}

\end{document}
```

**Lesson Plan 2:**

```latex
\documentclass[11pt, a4paper]{article}
\usepackage{geometry}
\geometry{left=2cm, right=2cm, top=2cm, bottom=2cm}
\usepackage{hyperref}
\usepackage{array}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{graphicx} % Added for potential images

\title{Year 12 Chemistry - Lesson Plan 2/3 \\ Navigating Pathways: Connecting Reactions for Short Syntheses}
\date{Module 7: Organic Chemistry (Approx. Week 6/7)}
\author{Mr Haynes} % Replace with your name if needed

\begin{document}
\maketitle
\vspace{-2em} % Reduce space after title

\section*{Lesson Overview}
\begin{itemize}
    \item \textbf{Lesson Title:} Navigating Pathways: Connecting Reactions for Short Syntheses
    \item \textbf{Duration:} 60 minutes
    \item \textbf{Focus Inquiry Question:} How are different classes of organic compounds interconverted through reaction pathways? (Focus on 2-3 step sequences)
    \item \textbf{Placement:} Assumes L1 completed. Assumes students have now learned Alcohol Oxidation (CHM\_M7\_ALC\_N6) and Esterification (CHM\_M7\_ESTER\_N1, CHM\_M7\_NOM\_N11).
\end{itemize}

\section*{Syllabus Alignment \& Knowledge Nodes Targeted}
\begin{itemize}
    \item \textbf{Outcomes:} CH12-14 (Predicts reactions involving carbon compounds), CH11/12-6 (Solves scientific problems - synthesis planning), CH11/12-7 (Communicates understanding).
    \item \textbf{Content:} Applying knowledge of multiple reaction steps in sequence. Introduction to synthesis planning logic.
    \item \textbf{Knowledge Nodes (Focus):} CHM\_M7\_ALC\_N6 (Oxidation), CHM\_M7\_ESTER\_N1 (Esterification), CHM\_M7\_NOM\_N11 (Ester Naming). Review/Application of nodes from L1.
\end{itemize}

\section*{Student Learning Objectives (Aligned with Nodes \& Cognitive Strategies)}
Students will be able to:
\begin{itemize}
    \item Identify multi-step pathways (2-3 steps) between functional groups using the chord-diagram tool. [Apply - S2 Visualisation]
    \item Propose a logical sequence of known reactions to achieve a simple synthetic transformation. [Analyse - CH11/12-6]
    \item Identify necessary reagents and conditions for each step in a proposed short synthesis. [Apply - CH12-14]
    \item Name reactants, intermediates, and products (including simple esters) in a short synthesis pathway. [Apply - CHM\_M7\_NOM\_N11]
    \item Articulate the planning process for solving a simple synthesis problem. [Apply - S6 Metacognition]
    \item Update and utilise their reaction map (mental or visual) incorporating oxidation and esterification. [Apply - S3 Concept Mapping]
    \item [Literacy] Describe a short synthesis pathway using correct terminology and reaction representation.
\end{itemize}

\section*{Lesson Structure \& Activities}

\subsection*{Introduction \& Retrieval Practice (10 mins)}
\begin{itemize}
    \item \textbf{Teacher Activity:} Brief retrieval quiz: "Show the reagents needed to convert 1-chloropropane to propan-1-ol." "What functional group results from dehydrating an alcohol?". Briefly review the chord diagram from L1, highlighting the previously learned connections. Add new nodes/reactions (Oxidation, Esterification) to the discussion/visualisation. [S3 Update Map, supports S4]
    \item \textbf{Student Activity:} Answer retrieval questions. Observe map update.
    \item \textbf{Pedagogy Focus:} Retrieval Practice, Activation of Prior Knowledge, Integrating New Knowledge into Schema (S3).
\end{itemize}

\subsection*{Modelling Short Synthesis Planning (15 mins)}
\begin{itemize}
    \item \textbf{Teacher Activity:} Explicitly model solving a 2-step synthesis problem (e.g., Ethene $\rightarrow$ Ethanoic Acid).
        \begin{itemize}
            \item Step 1: Identify Start/End functional groups.
            \item Step 2: Use the chord diagram tool to find path(s) - "Ethene to Alcohol (Addition), then Alcohol to Carboxylic Acid (Oxidation)". Identify intermediate (Ethanol).
            \item Step 3: Write out the sequence, adding specific reagents/conditions for each step learned previously (hover on tool or recall).
            \item Step 4: "Think aloud" the metacognitive process: "I need to get from alkene to acid. The map shows I can go via alcohol. First step is hydration... second step is oxidation of a primary alcohol..." [S1 Explicit Instruction, S2 Visualisation, S6 Metacognition]
        \end{itemize}
    \item \textbf{Student Activity:} Follow the modelled example. Ask clarifying questions.
    \item \textbf{Pedagogy Focus:} Modelling Problem-Solving Process, Explicit use of Visualisation Tool for Planning, Metacognitive Scaffolding (S6).
\end{itemize}

\subsection*{Paired Problem Solving (25 mins)}
\begin{itemize}
    \item \textbf{Teacher Activity:} Provide pairs of students with simple 2 or 3-step synthesis problems (via Activity Sheet 2 or whiteboard). Encourage them to use the chord diagram tool *first* to plan their route, then write down the detailed steps (structures/names, reagents/conditions) on mini-whiteboards or paper. Circulate, prompt with planning questions ("What intermediate is needed?", "What reaction achieves that?", "Check the tool for reagents."). [S4 Interleaving if problems mix reaction types]
    \item \textbf{Student Activity:} Work in pairs. Use the visualisation tool to plan pathways for given synthesis problems. Draft the reaction sequence with structures, names, reagents, conditions. Discuss strategy with partner.
    \item \textbf{Pedagogy Focus:} Collaborative Learning, Applying Knowledge, Problem Solving (CH11/12-6), Active use of Visualisation Tool, Metacognitive Practice (S6 prompts).
    \item \textbf{ICT Integration:} Chord Diagram Tool (Student Use), Devices.
\end{itemize}

\subsection*{Sharing & Consolidation (10 mins)}
\begin{itemize}
    \item \textbf{Teacher Activity:} Select 1-2 pairs to present their pathway for one problem on the board. Facilitate discussion – "Did anyone find a different route using the tool?". Briefly summarise the process of using the map for planning.
    \item \textbf{Student Activity:} Share proposed pathway if selected. Observe and comment on others' pathways. Ask questions.
    \item \textbf{Pedagogy Focus:} Communicating Solutions (CH11/12-7), Peer Learning, Consolidating the Planning Strategy.
\end{itemize}

\section*{Resources Required}
\begin{itemize}
    \item Interactive Chord Diagram Visualisation Tool.
    \item Projector / Whiteboard.
    \item Student devices with internet access.
    \item Mini-whiteboards or paper for drafting pathways.
    \item Activity Sheet 2 (containing 2/3-step synthesis problems - see below).
\end{itemize}

\section*{Assessment}
\begin{itemize}
    \item \textbf{Formative:} Observation of paired problem-solving process (use of tool, discussion, logic). Review of drafted pathways on mini-whiteboards/paper (checking for correct intermediates, reagents, conditions). Quality of participation in sharing session.
\end{itemize}

\section*{Differentiation}
\begin{itemize}
    \item \textbf{Support:} Provide partially completed pathways (e.g., give the intermediate). Offer a list of possible reagents to choose from. Pair students strategically.
    \item \textbf{Extension:} Challenge students to find the *shortest* possible route if multiple exist. Ask them to propose a synthesis for a slightly more complex target requiring 3 steps.
\end{itemize}

\end{document}
```

**Lesson Plan 3:**

```latex
\documentclass[11pt, a4paper]{article}
\usepackage{geometry}
\geometry{left=2cm, right=2cm, top=2cm, bottom=2cm}
\usepackage{hyperref}
\usepackage{array}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{graphicx} % Added for potential images

\title{Year 12 Chemistry - Lesson Plan 3/3 \\ Designing \& Communicating Syntheses: Mastering Flowcharts}
\date{Module 7: Organic Chemistry (Approx. Week 9/10)}
\author{Mr Haynes} % Replace with your name if needed

\begin{document}
\maketitle
\vspace{-2em} % Reduce space after title

\section*{Lesson Overview}
\begin{itemize}
    \item \textbf{Lesson Title:} Designing \& Communicating Syntheses: Mastering Flowcharts
    \item \textbf{Duration:} 60 minutes
    \item \textbf{Focus Inquiry Question:} How can we represent multi-step organic syntheses? (Culminating task)
    \item \textbf{Placement:} Assumes L1 \& L2 completed. Assumes all relevant reactions from EduKG subset (Alkene Add/Sub, Haloalkane Sub, Alcohol Sub/Dehyd/Oxid, Esterification) have been covered in the module.
\end{itemize}

\section*{Syllabus Alignment \& Knowledge Nodes Targeted}
\begin{itemize}
    \item \textbf{Outcomes:} CH12-14 (Analyses structure, predicts reactions), CH11/12-6 (Solves scientific problems - complex synthesis), CH11/12-7 (Communicates scientific understanding - flowchart conventions).
    \item \textbf{Content:} Constructing multi-step synthesis flowcharts with correct conventions, reagents, and conditions. Applying integrated knowledge of reaction pathways.
    \item \textbf{Knowledge Nodes (Focus):} CHM\_M7\_SYNTH\_N1 (Draft and construct flow charts...). Application of all prerequisite reaction nodes.
\end{itemize}

\section*{Student Learning Objectives (Aligned with Nodes \& Cognitive Strategies)}
Students will be able to:
\begin{itemize}
    \item Analyse a multi-step synthesis problem to identify starting material, target product, and required functional group changes. [Analyse - CH11/12-6]
    \item Utilise the chord-diagram tool and reaction knowledge to devise a logical multi-step synthesis pathway. [Create - CH11/12-6]
    \item Apply standard flowchart conventions to represent a multi-step synthesis accurately. [Apply - CHM\_M7\_SYNTH\_N1, CH11/12-7]
    \item Include correct structural formulae (or IUPAC names) for all intermediates and products in a flowchart. [Apply - CH11/12-7]
    \item Specify correct reagents and conditions for each step in the flowchart. [Apply - CH12-14]
    \item Justify the chosen reaction pathway and steps. [Evaluate - S6 Metacognition]
    \item [Literacy] Communicate a complex chemical process clearly and conventionally using a flowchart.
    \item [Numeracy] Implicitly check atom conservation through balanced steps/structures.
\end{itemize}

\section*{Lesson Structure \& Activities}

\subsection*{Introduction \& Map Review (10 mins)}
\begin{itemize}
    \item \textbf{Teacher Activity:} Briefly review the "complete" reaction map using the chord diagram, emphasizing the network of possibilities learned over the module. Pose a quick challenge question: "Can we directly convert an alkane to an ester using the reactions we've learned? Why/why not? What intermediate(s) would be needed?". State lesson objective: To plan complex syntheses and communicate them using formal flowcharts. [S3 Map Review]
    \item \textbf{Student Activity:} Participate in map review and challenge question discussion.
    \item \textbf{Pedagogy Focus:} Consolidation of Schema (S3), Assessing Integrated Understanding.
\end{itemize}

\subsection*{Instruction \& Modelling: Flowchart Construction (15 mins)}
\begin{itemize}
    \item \textbf{Teacher Activity:} Explicitly teach standard flowchart conventions for chemical synthesis (referencing CHM\_M7\_SYNTH\_N1 literacy skills): Boxes for compounds (structure or name), Arrows for reactions, Reagents/conditions written above/below arrows. Model solving a more complex (e.g., 3-step) synthesis problem (e.g., Propane $\rightarrow$ Propan-1-ol $\rightarrow$ Propanal $\rightarrow$ Propanoic Acid).
        \begin{itemize}
            \item First, use the chord diagram tool to plan the route, "thinking aloud" the choices.
            \item Then, translate the planned route step-by-step into a correctly formatted flowchart on the board/projector. Emphasise clarity and inclusion of all required details. [S1 Explicit Instruction, S2 Visualisation, S6 Metacognition]
        \end{itemize}
    \item \textbf{Student Activity:} Take notes on flowchart conventions (can be added to Worksheet 3). Follow the modelled example. Ask questions about conventions or the synthesis logic.
    \item \textbf{Pedagogy Focus:} Explicit Teaching of Communication Conventions (CH11/12-7), Modelling the Link between Planning (Tool) and Communicating (Flowchart).
\end{itemize}

\subsection*{Group Synthesis Challenge (25 mins)}
\begin{itemize}
    \item \textbf{Teacher Activity:} Divide students into small groups (3-4). Provide each group with a different, challenging synthesis problem (e.g., starting from a simple alkane/alkene, synthesise a specific ester or ketone) via Activity Sheet 3. Provide access to the chord diagram tool for planning and materials for flowchart construction (large paper, mini-whiteboards, or digital tool). Instruct groups to produce a complete, conventional flowchart as their solution. Circulate to facilitate, guide, and ask probing questions (S6 prompts). [Problem-Based Learning element, S4 Interleaving via varied problems]
    \item \textbf{Student Activity:} Work collaboratively in groups. Analyse the assigned problem. Use the chord diagram tool to brainstorm and plan a viable pathway. Construct the synthesis flowchart, ensuring correct structures/names, reagents, conditions, and conventions. Discuss and justify steps within the group.
    \item \textbf{Pedagogy Focus:} Collaborative Problem Solving (CH11/12-6), Application of Integrated Knowledge (Create Level), Practice with Communication Conventions (CH11/12-7), Active Learning.
    \item \textbf{ICT Integration:} Chord Diagram Tool (Student Use), Optional Digital Whiteboard/Drawing Tool.
\end{itemize}

\subsection*{Peer Review / Gallery Walk (10 mins)}
\begin{itemize}
    \item \textbf{Teacher Activity:} Facilitate a gallery walk or structured peer review. Groups display their flowcharts. Provide a simple peer review checklist (on Activity Sheet 3 or separate) focusing on: Logical sequence, Correct structures/names, Correct reagents/conditions, Clear conventions. Encourage constructive feedback. Briefly summarise common successes/errors observed. Assign Exit Ticket.
    \item \textbf{Student Activity:} Display group flowchart. View and provide feedback on other groups' flowcharts using the checklist. Discuss feedback received. Complete Exit Ticket.
    \item \textbf{Pedagogy Focus:} Peer Assessment, Reinforcing Communication Standards (CH11/12-7), Identifying Common Errors, Formative Assessment.
\end{itemize}

\section*{Resources Required}
\begin{itemize}
    \item Interactive Chord Diagram Visualisation Tool.
    \item Projector / Whiteboard.
    \item Student devices (for tool access).
    \item Materials for flowchart construction (large paper/posters, markers, mini-whiteboards, or digital collaborative whiteboard).
    \item Activity Sheet 3 (containing synthesis challenge problems and peer review checklist - see below).
    \item Worksheet 3 (summary of flowchart conventions - see below).
    \item Exit Ticket question (prepared separately, e.g., "Outline the first two steps (reactants, reagents) needed to convert but-1-ene into ethyl ethanoate.").
\end{itemize}

\section*{Assessment}
\begin{itemize}
    \item \textbf{Formative:} Observation of group collaboration, planning strategies, and flowchart construction. Evaluation of final group flowcharts based on logic, accuracy, detail, and conventions. Quality of peer feedback provided. Analysis of Exit Ticket responses.
\end{itemize}

\section*{Differentiation}
\begin{itemize}
    \item \textbf{Support:} Assign specific roles within groups (e.g., planner, recorder, reagent checker). Provide partially solved synthesis problems or flowcharts with gaps to fill. Offer a checklist of key reactions.
    \item \textbf{Extension:} Challenge groups to find the most efficient (fewest steps) pathway. Ask them to propose a synthesis for a target molecule not directly derivable using only the learned reactions, requiring slight modification or an additional step. Ask groups to include potential side reactions or yield considerations (conceptual).
\end{itemize}

\end{document}
```

---

## 4. Relevant Resources (LaTeX using your templates)

*(Please find the LaTeX code for the Worksheets, Activity Sheets, and Presentation outlines below. These are templates that would need specific chemical structures/details filled in where placeholders exist. You would save each as a separate `.tex` file.)*

**Worksheet 1:**

```latex
\documentclass[11pt, a4paper]{article}
\usepackage{geometry}
\geometry{left=2cm, right=2cm, top=2cm, bottom=2cm}
\usepackage{amsmath} % For math
\usepackage{graphicx} % For images if needed
\usepackage{array}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{hyperref}
\usepackage{mhchem} % Added for chemistry

\title{Year 12 Chemistry - Worksheet 1 \\ Mapping the Territory: Visualising Reactions}
\date{Module 7 - Lesson 1}
\author{Student Name: \underline{\hspace{5cm}} ID: \underline{\hspace{3cm}}} % Placeholder for student info

\begin{document}
\maketitle

\section*{Part 1: The Reaction Map Concept}

1.  In your own words, what is a "reaction map" in organic chemistry? Why might it be useful?
    \vspace{2cm}

2.  The chord diagram tool uses nodes and chords/links. What does each represent?
    \begin{itemize}
        \item Nodes (Outer segments): \underline{\hspace{6cm}}
        \item Chords / Links (Inner connecting bands): \underline{\hspace{6cm}}
    \end{itemize}

\section*{Part 2: Exploring Known Connections with the Tool}

\textbf{Instructions:} Use the interactive Chord Diagram Visualisation tool provided by your teacher to answer the following questions. Focus on the reactions you have already learned (connecting Alkanes, Alkenes, Haloalkanes, Alcohols).

3.  Find the node for \textbf{Alkenes}.
    \begin{itemize}
        \item[a)] List the functional groups that Alkenes are shown to be directly connected to via reactions \textit{you have learned so far}.
        \vspace{1cm}
        \item[b)] Select one of these connections (e.g., Alkene $\rightarrow$ Alcohol). What is the reaction type indicated by the chord colour/filter?
        \vspace{0.5cm}
        \item[c)] Hover over this specific chord/link. What reagent(s) and/or conditions are displayed for this transformation (e.g., \ce{H2O / H+})?
        \vspace{1cm}
    \end{itemize}

4.  Find the node for \textbf{Alcohols}.
    \begin{itemize}
        \item[a)] According to the map (based on reactions learned), can an Alcohol be directly converted back to an Alkene? (Yes/No)
        \item[b)] If yes, what is the reaction type and the key reagent/condition shown when you hover over that link?
        \vspace{1cm}
        \item[c)] According to the map (based on reactions learned), can an Alcohol be directly converted to a Haloalkane? (Yes/No)
        \item[d)] If yes, what reagent is shown for this transformation?
        \vspace{1cm}
    \end{itemize}

5.  Find the connection between \textbf{Haloalkanes} and \textbf{Alcohols}.
    \begin{itemize}
        \item[a)] What reagent is needed to convert a Haloalkane to an Alcohol according to the tool?
        \vspace{0.5cm}
        \item[b)] What type of reaction is this (use colour/filter)?
        \vspace{0.5cm}
    \end{itemize}

6.  Based on your exploration, draw a simple diagram below showing only the nodes for Alkane, Alkene, Haloalkane, and Alcohol, and draw arrows representing the direct, one-step reactions you have identified between them using the tool. Label each arrow with the reaction type (e.g., Addition, Substitution, Dehydration). [S3 Concept Mapping]
    \vspace{5cm}


\end{document}
```

**Activity Sheet 1 (for Lesson 1):**

```latex
\documentclass[11pt, a4paper]{article} % Using article class for simpler activity sheet
\usepackage{geometry}
\geometry{left=2cm, right=2cm, top=2cm, bottom=2cm}
\usepackage{graphicx}
\usepackage{hyperref}
\usepackage{array}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{mhchem} % Added for chemistry

\title{Year 12 Chemistry - Activity Sheet 1 \\ Guided Exploration: Reaction Visualisation Tool}
\date{Module 7 - Lesson 1}
\author{Organic Chemistry}

\begin{document}
\maketitle

\section*{Aim}
To familiarise yourself with the interactive Chord Diagram Visualisation tool and use it to identify known organic reaction pathways and their key details.

\section*{Tool Access}
Use the link or application provided by your teacher to access the Chord Diagram tool on your device.

\section*{Part A: Tool Familiarisation}
\begin{itemize}
    \item Identify the main components: Outer segments (Nodes), Inner bands (Chords/Links).
    \item Locate the legend or checkboxes that explain the colour-coding for reaction types (e.g., Addition, Substitution, Elimination, Oxidation, Condensation).
    \item Practice hovering your mouse cursor over different Nodes and Chords. Observe what information appears (e.g., Functional group name, Reaction details like reagents/conditions).
    \item Practice using the checkboxes (if available) to filter the view and show only certain reaction types.
\end{itemize}

\section*{Part B: Guided Exploration (Complete relevant sections on Worksheet 1)}

\textbf{Task 1: Focus on Alkenes}
\begin{enumerate}
    \item Click on or interact with the 'Alkene' node.
    \item Observe the chords connecting to it.
    \item For the connection representing the reaction of an Alkene to form an Alcohol:
        \begin{itemize}
            \item Identify the reaction type using the colour code / filter.
            \item Hover to find the specific reagents/conditions (e.g., Hydration conditions). Record these on Worksheet 1.
        \end{itemize}
    \item Repeat for the connection representing the reaction of an Alkene to form a Haloalkane (via HX addition). Record the reaction type and typical reagent (e.g., HBr) on Worksheet 1.
    \item Repeat for the connection representing the reaction of an Alkene to form a Haloalkane (via X2 addition). Record the reaction type and typical reagent (e.g., \ce{Br2}).
\end{enumerate}

\textbf{Task 2: Focus on Alcohols}
\begin{enumerate}
    \item Click on or interact with the 'Alcohol' node.
    \item Find the chord representing the conversion of an Alcohol back to an Alkene.
        \begin{itemize}
            \item Identify the reaction type (Dehydration/Elimination).
            \item Hover to find the specific reagents/conditions. Record these on Worksheet 1.
        \end{itemize}
    \item Find the chord representing the conversion of an Alcohol to a Haloalkane.
        \begin{itemize}
            \item Identify the reaction type (Substitution).
            \item Hover to find the typical reagent. Record this on Worksheet 1.
        \end{itemize}
\end{enumerate}

\textbf{Task 3: Focus on Haloalkanes}
\begin{enumerate}
    \item Click on or interact with the 'Haloalkane' node.
    \item Find the chord representing the conversion of a Haloalkane to an Alcohol.
        \begin{itemize}
            \item Identify the reaction type (Substitution).
            \item Hover to find the typical reagent/conditions. Record these on Worksheet 1.
        \end{itemize}
    \item Does the map (based on reactions learned so far) show a direct conversion from an Alkane to a Haloalkane? Identify the reaction type and condition required.
\end{enumerate}

\textbf{Task 4: Synthesise (Worksheet 1, Q6)}
Use your findings to draw the connections between the four main functional groups studied so far (Alkanes, Alkenes, Haloalkanes, Alcohols) on Worksheet 1.

\end{document}
```

**Worksheet 2:**

```latex
\documentclass[11pt, a4paper]{article}
\usepackage{geometry}
\geometry{left=2cm, right=2cm, top=2cm, bottom=2cm}
\usepackage{amsmath}
\usepackage{graphicx}
\usepackage{array}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{hyperref}
\usepackage{mhchem}

\title{Year 12 Chemistry - Worksheet 2 \\ Navigating Pathways: Short Syntheses}
\date{Module 7 - Lesson 2}
\author{Student Name: \underline{\hspace{5cm}} ID: \underline{\hspace{3cm}}}

\begin{document}
\maketitle

\section*{Part 1: New Reactions - Oxidation \& Esterification}

1.  Oxidation of Alcohols (Node: CHM\_M7\_ALC\_N6):
    \begin{itemize}
        \item[a)] What type of alcohol (primary, secondary, tertiary) is oxidised to form an aldehyde (which can be further oxidised to a carboxylic acid)? \vspace{0.5cm}
        \item[b)] What type of alcohol is oxidised to form a ketone? \vspace{0.5cm}
        \item[c)] What type of alcohol is generally resistant to oxidation under these conditions? \vspace{0.5cm}
        \item[d)] Name a common oxidising agent used for these reactions (often represented as [O]). \vspace{0.5cm}
    \end{itemize}

2.  Esterification (Node: CHM\_M7\_ESTER\_N1):
    \begin{itemize}
        \item[a)] What two types of functional groups react to form an ester? \vspace{0.5cm}
        \item[b)] What catalyst and condition are typically required for esterification? \vspace{0.5cm}
        \item[c)] What small molecule is also produced during esterification? \vspace{0.5cm}
    \end{itemize}

3.  Ester Naming (Node: CHM\_M7\_NOM\_N11): Name the following esters:
    \begin{itemize}
        \item[a)] The ester formed from methanol and ethanoic acid: \underline{\hspace{5cm}}
        \item[b)] The ester formed from propan-1-ol and propanoic acid: \underline{\hspace{5cm}}
        \item[c)] Draw the structure of ethyl propanoate: \vspace{2cm}
    \end{itemize}

\section*{Part 2: Planning Short Syntheses}

\textbf{Instructions:} For the synthesis problems assigned in class (see Activity Sheet 2), use the space below to plan your pathway. Use the Chord Diagram tool to help identify intermediates and reaction types. For each step, show: Reactant Structure/Name $\xrightarrow{\text{Reagent(s)/Conditions}}$ Product Structure/Name.

\subsection*{Problem 1: [e.g., Ethene to Ethanoic Acid]}
\textbf{Planning Notes (Intermediates? Reaction Types?):}
\vspace{1cm}

\textbf{Pathway:}
Step 1:
\vspace{2cm}
Step 2:
\vspace{2cm}

\subsection*{Problem 2: [e.g., Propane to Propanone]}
\textbf{Planning Notes:}
\vspace{1cm}

\textbf{Pathway:}
Step 1:
\vspace{2cm}
Step 2:
\vspace{2cm}
(Add more steps if needed)

\subsection*{Problem 3: [e.g., 1-Bromobutane to Butanoic Acid]}
\textbf{Planning Notes:}
\vspace{1cm}

\textbf{Pathway:}
Step 1:
\vspace{2cm}
Step 2:
\vspace{2cm}
(Add more steps if needed)

\end{document}
```

**Activity Sheet 2 (for Lesson 2):**

```latex
\documentclass[11pt, a4paper]{article}
\usepackage{geometry}
\geometry{left=2cm, right=2cm, top=2cm, bottom=2cm}
\usepackage{graphicx}
\usepackage{hyperref}
\usepackage{array}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{mhchem}

\title{Year 12 Chemistry - Activity Sheet 2 \\ Paired Problem Solving: Short Syntheses}
\date{Module 7 - Lesson 2}
\author{Organic Chemistry}

\begin{document}
\maketitle

\section*{Aim}
To practice planning and representing short (2-3 step) organic synthesis pathways using your knowledge of reactions and the visualisation tool.

\section*{Instructions}
Work with your partner. For each problem below:
\begin{enumerate}
    \item Identify the starting material and the target product.
    \item Use the Chord Diagram Visualisation tool to help you brainstorm possible reaction sequences. Identify necessary intermediates.
    \item On your mini-whiteboard or paper (or Worksheet 2), write out the step-by-step reaction pathway.
    \item For each step, clearly show the structure (or IUPAC name) of the reactant and product.
    \item Above/below the reaction arrow for each step, write the necessary reagent(s) and conditions.
    \item Be prepared to explain your chosen pathway.
\end{enumerate}

\section*{Synthesis Problems}

\textbf{Problem Set A:}
Propose a 2-step synthesis pathway for the conversion of **ethene** to **ethanoic acid**.

\vspace{1cm} \hrulefill \vspace{1cm}

\textbf{Problem Set B:}
Propose a synthesis pathway for the conversion of **propane** to **propanone**. (Hint: This might take more than 2 steps).

\vspace{1cm} \hrulefill \vspace{1cm}

\textbf{Problem Set C:}
Propose a synthesis pathway for the conversion of **1-bromobutane** to **butanoic acid**.

\vspace{1cm} \hrulefill \vspace{1cm}

\textbf{Problem Set D (Ester Challenge):}
Propose a synthesis pathway for the conversion of **propene** to **propyl ethanoate**. (Hint: You'll need to synthesise both the alcohol and the acid parts, potentially from the propene starting material if possible, or assume ethanoic acid is available).

\vspace{1cm} \hrulefill \vspace{1cm}

\textbf{Metacognitive Prompts (Consider while working):}
\begin{itemize}
    \item What functional group change is needed?
    \item What reaction(s) can achieve this change? (Check the visualizer!)
    \item What reagents/conditions are specific to that reaction?
    \item Is there another way to make this connection?
\end{itemize}

\end{document}
```

**Worksheet 3:**

```latex
\documentclass[11pt, a4paper]{article}
\usepackage{geometry}
\geometry{left=2cm, right=2cm, top=2cm, bottom=2cm}
\usepackage{amsmath}
\usepackage{graphicx}
\usepackage{array}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{hyperref}
\usepackage{tikz} % Useful for drawing flowcharts if needed, or just use space
\usetikzlibrary{shapes, arrows, positioning}
\usepackage{mhchem}

\title{Year 12 Chemistry - Worksheet 3 \\ Designing Syntheses: Flowchart Conventions}
\date{Module 7 - Lesson 3}
\author{Student Name: \underline{\hspace{5cm}} ID: \underline{\hspace{3cm}}}

\begin{document}
\maketitle

\section*{Part 1: Flowchart Conventions (Node: CHM\_M7\_SYNTH\_N1)}

Flowcharts are used to communicate multi-step synthesis pathways clearly and conventionally. Key conventions include:

\begin{itemize}
    \item \textbf{Compounds:} Represented inside boxes. Use either the correct IUPAC name or the structural formula. Be consistent.
    \item \textbf{Reactions:} Represented by arrows pointing from reactant(s) to product(s).
    \item \textbf{Reagents \& Conditions:} Written clearly above or below the reaction arrow corresponding to that specific step. Include necessary catalysts, solvents, heat ($\Delta$), UV light, etc.
    \item \textbf{Sequence:} Steps are arranged logically, usually top-to-bottom or left-to-right, showing the progression from starting material to final product via intermediates.
\end{itemize}

\textbf{Example Flowchart (Propane $\rightarrow$ Propanone):}

\begin{tikzpicture}[node distance=1.5cm, auto, >=latex,
    compound/.style={rectangle, draw, thick, minimum size=1cm, text centered},
    reagent/.style={above, midway, font=\small}]

    \node [compound] (propane) {Propane (\ce{CH3CH2CH3})};
    \node [compound, below=of propane] (chloro) {2-Chloropropane}; % Structure could be drawn instead
    \node [compound, below=of chloro] (propanol) {Propan-2-ol};
    \node [compound, below=of propanol] (propanone) {Propanone};

    \draw [->, thick] (propane) -- node [reagent] {\ce{Cl2}, UV light} (chloro);
    \draw [->, thick] (chloro) -- node [reagent] {NaOH(aq), heat} (propanol);
    \draw [->, thick] (propanol) -- node [reagent] {\ce{K2Cr2O7 / H+}, heat ([O])} (propanone);

\end{tikzpicture}

\section*{Part 2: Planning Space for Synthesis Challenge}

\textbf{Instructions:} Use the space below (or separate paper) to plan and draft the flowchart for the synthesis problem assigned to your group (see Activity Sheet 3). Use the Chord Diagram tool for initial planning. Remember to include all intermediates, reagents, and conditions.

\textbf{Assigned Problem:} \underline{\hspace{8cm}}

\textbf{Planning Notes (Routes explored, key steps):}
\vspace{4cm}

\textbf{Draft Flowchart:}
\vspace{10cm} % Ample space for drawing

\textbf{Justification Notes (Why was this route/these steps chosen?):}
\vspace{3cm}

\end{document}
```

**Activity Sheet 3 (for Lesson 3):**

```latex
\documentclass[11pt, a4paper]{article}
\usepackage{geometry}
\geometry{left=2cm, right=2cm, top=2cm, bottom=2cm}
\usepackage{graphicx}
\usepackage{hyperref}
\usepackage{array}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{mhchem}

\title{Year 12 Chemistry - Activity Sheet 3 \\ Group Synthesis Challenge \& Flowchart Peer Review}
\date{Module 7 - Lesson 3}
\author{Organic Chemistry}

\begin{document}
\maketitle

\section*{Aim}
To apply your integrated knowledge of organic reactions to design a multi-step synthesis pathway and communicate it using a conventional flowchart. To provide constructive feedback on peers' flowcharts.

\section*{Part A: Group Synthesis Challenge}

\textbf{Instructions:}
Work in your assigned group. Your task is to design a synthesis pathway for the problem below and represent it as a detailed, accurate flowchart.
\begin{enumerate}
    \item Analyse the starting material and target product.
    \item Use the Chord Diagram Visualisation tool and your knowledge to plan a logical sequence of reactions.
    \item Construct a flowchart on the provided materials (paper/whiteboard/digital).
    \item Ensure your flowchart includes:
        \begin{itemize}
            \item Correct structures or IUPAC names for all compounds (starting material, intermediates, product) in boxes.
            \item Arrows clearly indicating each reaction step.
            \item Accurate reagents and conditions listed for every step on the arrows.
            \item Adherence to standard flowchart conventions.
        \end{itemize}
    \item Be prepared to justify your chosen pathway.
\end{enumerate}

\subsection*{Challenge Problem (Teacher will assign one per group)}

\textbf{Problem 1:} Design a synthesis pathway to produce **ethyl propanoate** starting from **ethene** and **propane**. (Assume necessary inorganic reagents are available).

\vspace{0.5cm} \hrulefill \vspace{0.5cm}

\textbf{Problem 2:} Design a synthesis pathway to produce **butanone** starting from **but-1-ene**.

\vspace{0.5cm} \hrulefill \vspace{0.5cm}

\textbf{Problem 3:} Design a synthesis pathway to produce **1,2-dichloroethane** starting from **ethanol**.

\vspace{0.5cm} \hrulefill \vspace{0.5cm}

\textbf{Problem 4:} Design a synthesis pathway to produce **propanoic acid** starting from **propane**.

\section*{Part B: Flowchart Peer Review Checklist}

\textbf{Instructions:} When reviewing another group's flowchart, consider the following criteria:

\begin{tabular}{|l|p{8cm}|c|}
\hline
\textbf{Criteria} & \textbf{Description} & \textbf{Check ($\checkmark$)} \\ \hline
\textbf{1. Logical Pathway} & Does the sequence of reactions make chemical sense to get from start to target? & \\ \hline
\textbf{2. Correct Structures/Names} & Are the structures or names shown for reactants, intermediates, and products accurate? & \\ \hline
\textbf{3. Correct Reagents/Conditions} & Are the specified reagents and conditions appropriate for each reaction step shown? & \\ \hline
\textbf{4. Flowchart Conventions} & Are compounds in boxes? Are arrows used correctly? Are reagents/conditions placed appropriately on arrows? & \\ \hline
\textbf{5. Clarity \& Neatness} & Is the flowchart easy to read and understand? & \\ \hline
\end{tabular}

\vspace{1cm}
\textbf{Constructive Feedback / Comments:}
\vspace{2cm}

\end{document}
```

**Presentation Outlines (Beamer - Titles/Bullet Points Only):**

*(These are outlines for the Beamer presentations. You would fill these into the `Presentation Template` provided earlier, adding detail, images/placeholders, and formatting as needed for each lesson.)*

**Presentation 1 Outline:**

```text
---
Frame 1: Title Page (Lesson 1)
---
Frame 2: Outline
---
Frame 3: Introduction
    - Title: Why Map Reactions?
    - Focus Inquiry Question 1
    - Recap: Reactions learned (e.g., Alkene Add, Alkane Sub)
    - Concept: Reactions form a Network
    - Need for a Tool: Introducing the Chord Diagram
---
Frame 4: The Chord Diagram Tool
    - Title: Understanding the Visualisation
    - Screenshot/Live Demo:
        - Nodes = Functional Groups (Alkane, Alkene, Alcohol...)
        - Chords = Reactions (Coloured by type)
        - Hover = Details (Reagents/Conditions)
        - Filters = Show specific types
    - Link visual to symbolic: Show Ethene + HBr equation alongside tool view.
---
Frame 5: Exploring Connections (Activity Prep)
    - Title: Using the Tool for Known Reactions
    - Explain Worksheet 1 / Activity Sheet 1 Task:
        - Find connections (e.g., Alkene -> Alcohol)
        - Identify reaction type (colour)
        - Find reagents (hover)
    - Emphasise linking map to what's already known.
---
Frame 6: Summary & Next Steps
    - Recap: Map concept, Tool features (Nodes, Chords, Hover, Filter)
    - Importance: Organising knowledge visually
    - Preview L2: Using the map for planning short pathways.
    - Assign Exit Ticket.
---
Frame 7: Questions?
---
```

**Presentation 2 Outline:**

```text
---
Frame 1: Title Page (Lesson 2)
---
Frame 2: Outline
---
Frame 3: Recap & New Reactions
    - Title: Expanding the Map
    - Retrieval Practice Questions (L1 content)
    - Review Chord Diagram from L1
    - Introduce New Reactions:
        - Alcohol Oxidation (1ry -> Ald -> Acid; 2ry -> Ketone) - Show on Map
        - Esterification (Acid + Alcohol -> Ester) - Show on Map
        - Ester Naming (Briefly)
---
Frame 4: Planning Short Syntheses
    - Title: From A to C via B
    - Why plan? Need multiple steps.
    - Introducing the Strategy: Identify Start/End -> Use Map for Route -> Add Details
---
Frame 5: Modelling a 2-Step Synthesis
    - Title: Example: Ethene to Ethanoic Acid
    - Step 1: Start=Alkene, End=Carboxylic Acid
    - Step 2: Use Tool -> Alkene -> Alcohol -> Acid. Intermediate = Ethanol.
    - Step 3: Write sequence:
        - Ethene + H2O/H+ -> Ethanol
        - Ethanol + [O] -> Ethanoic Acid
    - Step 4: Teacher "Think Aloud" (Metacognition S6)
---
Frame 6: Paired Problem Solving Activity
    - Title: Your Turn: Plan & Draft
    - Explain Activity Sheet 2 Task:
        - Work in pairs
        - Use Tool to PLAN first
        - Write detailed steps (Structures, Reagents)
    - Emphasise collaboration & using the tool strategically.
---
Frame 7: Summary & Next Steps
    - Recap: Planning process using the map.
    - Importance: Moving from single reactions to sequences.
    - Preview L3: Complex synthesis & formal flowcharts.
---
Frame 8: Questions?
---
```

**Presentation 3 Outline:**

```text
---
Frame 1: Title Page (Lesson 3)
---
Frame 2: Outline
---
Frame 3: Reviewing the Full Map
    - Title: The Interconnected Network
    - Display full Chord Diagram (with all relevant reactions)
    - Quick Challenge: Alkane to Ester? (Requires multiple steps)
    - Lesson Goal: Plan complex pathways & communicate via Flowcharts (CHM_M7_SYNTH_N1)
---
Frame 4: Flowchart Conventions
    - Title: Communicating Synthesis Clearly
    - Explain CHM_M7_SYNTH_N1 Requirements:
        - Boxes = Compounds (Name or Structure)
        - Arrows = Reactions
        - Reagents/Conditions = On arrows
        - Logical Flow
    - Show Example Flowchart (e.g., from Worksheet 3) - Explain components.
---
Frame 5: Modelling Complex Synthesis & Flowcharting
    - Title: Plan then Draw: Example (e.g., 3/4 steps)
    - Step 1: Analyse Problem (Start/End)
    - Step 2: Use Chord Diagram to Plan Route (Think Aloud S6)
    - Step 3: Translate Plan to Flowchart (Step-by-step construction)
    - Emphasise Accuracy: Structures, Reagents, Conventions.
---
Frame 6: Group Synthesis Challenge
    - Title: Design & Build Your Flowchart
    - Explain Activity Sheet 3 Task:
        - Work in groups
        - Assigned complex problem
        - Plan using Tool
        - Construct formal Flowchart
    - Goal: Accurate & Conventional representation.
---
Frame 7: Peer Review & Wrap Up
    - Title: Evaluating Flowcharts
    - Explain Gallery Walk / Peer Review Process
    - Highlight Checklist Criteria (Activity Sheet 3)
    - Importance of Clear Communication (CH11/12-7)
    - Final Summary: Synthesis involves planning (map) & communication (flowchart).
    - Assign Exit Ticket.
---
Frame 8: Questions?
---
```

---
Remember to replace placeholders (like image paths, specific problem details if varied per group) and potentially add more visual elements (chemical structures drawn using `mhchem` or `chemfig`, diagrams, screenshots of the tool) to the actual LaTeX files before compilation.
