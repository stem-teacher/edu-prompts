The goal of this query is to produce a system prompt that is able to produce a tex file text book given a knowledge graph in json format.

Below is the  #(**C.R.A.F.T.)  prompt used to generate a knowledge graph.

Further, at the end of this prompt is an example tex chapter document and below is a set of collateral previously used to generate the chapter. I now want to simplify the process by simply providing the json document and receive back a tex file.

Please now produce a sophisticated system prompt to achieve the above objective.


Instead I would like a system prompt to assist with the generation of textbook using the JSON document produced here.
**Stage 6 Science Textbook Chapter Plan: NSW HSC Science
Below is a proposed plan for a Stage 6 (Years 11–12) textbooks aligned with the current NSW HSC syllabuses.  This plan has the following including the key sections: (1) Detailed Textbook Structure, (2) Differentiation and Enrichment Directives, (3) Literacy and Numeracy Integration Plan, (4) PISA 2025 Optimization Strategy, (5) LaTeX Implementation Guide, (6) Accessibility and Neurodiversity Support Plan, and (7) Research Report Integration.

While PISA officially targets 15-year-olds, many of the same principles (real-world scenarios, data analysis, argumentation) benefit Stage 6 learners. These textbooks are intended for gifted, neurodiverse, and highly capable students undertaking the HSC. Each textbook adheres closely to the NSW Stage 6 syllabus scope and sequence while integrating strategies informed by the research (# Best Practices in Science Textbook Design for Gifted Students below).

The prompt needs to enhance prior work described in "# HSC Chapter Template for  Generation"


## I. Detailed Textbook Structure

# HSC Chapter Template for  Generation

This template provides a structured format for creating HSC Chemistry and Physics textbook chapters. It's designed to help you craft effective prompts for the OpenAI API, ensuring consistent, high-quality content that meets educational standards.

## Chapter Structure

Each chapter should follow this general structure:

```
\chapter{Module Title}

\section{Introduction}
[Overview of the module, real-world relevance, and connections to prior knowledge]

\section{Key Concept 1}
\subsection{Sub-concept 1.1}
[Main content with appropriate margin notes]

\begin{keyconcept}{Title}
[Core concept explanation]
\end{keyconcept}

\begin{stopandthink}
[Conceptual question to check understanding]
\end{stopandthink}

\subsection{Sub-concept 1.2}
[Further development with examples]

\begin{example}
[Worked example with step-by-step solution]
\end{example}

\begin{tieredquestions}{Basic}
[Fundamental practice questions]
\end{tieredquestions}

\FloatBarrier

\section{Key Concept 2}
[Similar structure as above]

\section{Practical Investigations}
\begin{investigation}{Title}
[Step-by-step procedure with clear safety guidelines]
\end{investigation}

\begin{tieredquestions}{Advanced}
[Higher-level application questions]
\end{tieredquestions}

\FloatBarrier

\section{Chapter Summary}
[Concise summary of key points]

\section{Review Questions}
[Comprehensive chapter review questions with tiered difficulty]
```

## Special Elements

### Margin Notes

Use these custom commands for margin content:

- `\keyword{term}` - For introducing key terms with definitions in the margin
- `\challenge{text}` - For advanced extension content
- `\mathlink{text}` - For mathematical connections
- `\historylink{text}` - For historical context or scientist profiles

### Environments

Use these custom environments throughout the chapter:

1. **Key Concept Boxes**
   ```latex
   \begin{keyconcept}{Title}
   [Essential concept explanation with clear, concise language]
   \end{keyconcept}
   ```

2. **Stop and Think Questions**
   ```latex
   \begin{stopandthink}
   [Conceptual question that encourages deeper thinking]
   \end{stopandthink}
   ```
   Note: Do NOT include a title parameter for stopandthink environments.

3. **Investigation Activities**
   ```latex
   \begin{investigation}{Investigation Title}
   [Structured practical activity with clear procedure]
   \end{investigation}
   ```

4. **Tiered Questions**
   ```latex
   \begin{tieredquestions}{Basic}
   [Level-appropriate questions]
   \end{tieredquestions}
   ```
   Use "Basic," "Intermediate," or "Advanced" as the parameter.

5. **Examples**
   ```latex
   \begin{example}
   [Worked examples with clear explanations]
   \end{example}
   ```

## Subject-Specific Elements

### Chemistry

For chemical formulas and equations, use the mhchem package:
```latex
\ce{H2O}                 % Simple formula
\ce{H+ + OH- -> H2O}     % Chemical equation
\ce{CaCO3 ->[900\,°C] CaO + CO2}  % Reaction with conditions
```

### Physics

For physics equations, use the equation environment:
```latex
\begin{equation}
F = ma
\end{equation}
```

For vector notation:
```latex
\vec{F} = m\vec{a}
```

## Float Management

To avoid LaTeX compilation issues:

1. Add `\FloatBarrier` after sections with multiple figures or margin notes
2. Limit margin figures to 3-4 per page
3. Use `[0pt]` offset for margin figures: `\begin{marginfigure}[0pt]`
4. For critical figures, use `[H]` placement: `\begin{figure}[H]`

## Differentiation Strategies

Throughout each chapter, incorporate:

1. **Visual aids** - Described in LaTeX for later addition of actual images
2. **Real-world applications** - Contextualizing abstract concepts
3. **Historical contexts** - Understanding the development of scientific ideas
4. **Extension material** - Challenging content for gifted students
5. **Scaffolded learning** - Building concepts systematically
6. **Varied question types** - Catering to different learning preferences

## Prompt Template

When requesting chapter content from OpenAI, structure your prompt like this:

```
Create Chapter X: [Module Title] for an HSC [Chemistry/Physics] textbook designed for gifted and neurodiverse students following the NSW curriculum. This is a [Preliminary (Year 11)/HSC (Year 12)] module.

Chapter details from the curriculum plan:
[Paste relevant section from plan-hsc.md]

The chapter should include:
1. A clear introduction to the topic with real-world relevance
2. Properly structured sections with headings and subheadings that follow logical development
3. Key concepts explained with clarity and depth appropriate for HSC level
4. Margin notes for definitions, extensions, and historical context
5. 'Stop and Think' questions throughout to check understanding
6. Investigation activities that develop scientific and practical skills
7. Tiered questions (basic, intermediate, advanced) at the end of each main section
8. Visual elements described in LaTeX (figures will be added later)
9. Extension material for gifted students through margin notes and advanced question sections
10. Clear and systematic explanations of [chemical/physical] principles with mathematical rigor
11. References to current research or applications where relevant

Format the content in LaTeX using the Tufte-book class with appropriate section headings, margin notes, and custom environments as described in the HSC chapter template.

Add \FloatBarrier commands after sections that contain multiple figures or margin notes.
Use the mhchem package (\ce{}) for chemical formulas or equations.
Remember to structure the content with diverse learners in mind, providing clear scaffolding while also challenging gifted students.
```

## Reviewing Generated Content

After generating each chapter, check for:

1. **Content accuracy** - Alignment with NSW HSC syllabus
2. **Completeness** - All key concepts covered with appropriate depth
3. **LaTeX issues** - Common problems that need fixing
4. **Pedagogical approach** - Effectiveness for diverse learners
5. **Difficulty level** - Appropriate challenge with necessary support



---

## I. Detailed Textbook Structure
#### 2. Chapter Descriptions & Flow

Each physics module is subdivided by key concepts (e.g., Module 7 might have subtopics “Wave-Particle Duality,” “Photoelectric Effect,” “Relativity Basics”). Within each subtopic, students engage in conceptual development, problem-solving, practical investigations, and extension tasks (e.g., analyzing Einstein’s 1905 paper excerpts, modern laser technology). Summative reviews, data-based questions, and cross-chapter references reinforce depth and continuity.

---

## II. Differentiation and Enrichment Directives

To challenge gifted and highly capable Stage 6 students while supporting neurodiverse learners:

1. **Pre-Module Diagnostic**
   - At the start of each module, a short quiz or a concept inventory (e.g. quick mole calculations for Chemistry or a kinematics multiple-choice set for Physics).
   - Students demonstrating mastery can be directed toward extension tasks or project-based investigations; others receive structured revision suggestions.

2. **Tiered Problem Sets**
   - **Level 1 (Core):** Direct, syllabus-aligned problems focusing on fundamental content and skills.
   - **Level 2 (Application):** Multi-step or multi-concept problems requiring deeper reasoning (e.g., complex stoichiometry with limiting reagents, or 2D projectile motion with air resistance approximations).
   - **Level 3 (Extension):** Open-ended, real-world investigations or advanced theory bridging into early university concepts (e.g., introducing basic quantum models or thermodynamic derivations).

3. **Enrichment Projects**
   - **Chemistry:** Designing an independent investigation around reaction kinetics (e.g. how temperature affects reaction rate of an enzyme or a chemical system), or exploring advanced organic synthesis from a green-chemistry perspective.
   - **Physics:** Building a small electromagnet or investigating wave interference patterns at home, then analyzing data. Possibly a deeper look into special relativity or analyzing real data from NASA telescopes for cosmic expansion.

4. **Research & Real-World Integration**
   - Frequent “Industry & Research Connection” side boxes: e.g., how photonics research leads to innovations in telecommunications, or how synthetic polymer design revolutionizes medical devices.
   - Encourage gifted students to read short excerpts from research articles or watch documentaries on cutting-edge discoveries, bridging to the syllabus content.

5. **Working Scientifically for Gifted/Neurodiverse**
   - Provide scaffolds (clear steps for experiment design, data analysis checklists), but also encourage those who excel to design novel variations of standard experiments.
   - Project-based tasks with freedom to choose variables, apparatus, or data-logging technology – especially beneficial for students with strong autonomy needs or advanced skill sets.

Throughout each module, sidebars, margin notes, and optional challenges let strong learners pursue deeper or broader content without overwhelming students who need more foundational practice.

---

## III. Literacy and Numeracy Integration Plan

### A. **Scientific Literacy**

1. **Reading Academic Texts:**
   - Each module includes at least one short excerpt from scientific literature or a historical scientific paper. Accompanying guided reading questions highlight argument structure and scientific language.
   - Margin glossaries define advanced terms on the spot. E.g., in Chemistry, \marginnote{\textbf{Enthalpy (H):} A thermodynamic property describing heat content…}

2. **Writing in Science:**
   - Students practice formal lab reports, short research essays, and scientific argumentation.
   - Sample frameworks (claim-evidence-reasoning) help them structure responses. Students with ADHD or executive dysfunction benefit from step-by-step scaffolds, while gifted students can incorporate advanced references or creative data visualizations.

3. **Speaking & Listening Skills:**
   - Encourage scientific seminars or mini-presentations where students “teach” a portion of content.
   - Class debates: e.g., debate the safety and feasibility of nuclear power, referencing real data.

### B. **Numeracy Skills**

1. **Chemistry Calculations:**
   - Reinforce stoichiometry, chemical equilibrium constants (K, K\textsubscript{a}, K\textsubscript{b}), pH/pOH calculations.
   - Emphasize systematic approaches to multi-step problems, unit conversion, significant figures.

2. **Physics Quantitative Reasoning:**
   - Algebraic manipulation of motion equations, resolving vectors, applying trigonometry.
   - Graphical interpretation (displacement-time, velocity-time, or data from an electronics experiment).
   - Evaluate experimental uncertainties and error propagation (extension for advanced learners).

3. **Data Analysis & Graphing:**
   - Each module includes at least one data-focused investigation. Students interpret graphs, perform regressions (for advanced extension), or compare theoretical vs. experimental results.

4. **Integration with National Progressions:**
   - Activities explicitly address literacy progressions (writing scientific explanations) and numeracy progressions (interpreting/representing data, applying formulae). Teachers can see tagged outcomes to ensure alignment with the Australian National Literacy and Numeracy Learning Progressions.

---

## IV. PISA 2025 Optimization Strategy

Even though HSC students are beyond the age typically assessed by PISA, these strategies still ensure world-class scientific literacy and problem-solving:

1. **Real-World Context & Scenario Tasks**
   - Chemistry: “Assess a chemical plant’s data to propose improvements in waste reduction.” Students interpret tables, weigh environmental and economic factors, and suggest an evidence-based plan.
   - Physics: “Analyze collision data from a vehicle safety study,” requiring interpretation of velocity-time graphs, conceptual understanding of momentum, and justification of safety designs.

2. **Data Interpretation & Modeling**
   - Present raw or partially processed data, require students to form conclusions with evidence.
   - Encourage them to identify extraneous information or potential bias—skills that PISA prioritizes.

3. **Argumentation & Critical Evaluation**
   - Offer contradictory viewpoints from “stakeholders” in a science context (e.g., nuclear energy expansions, carbon sequestration strategies). Students must argue from scientific evidence, consider trade-offs, and evaluate credibility of sources—mirroring PISA’s focus on evaluating claims.

4. **Collaborative Projects**
   - Group research tasks on global issues: plastic waste, battery technology, climate modeling. Students collectively design an investigation, interpret results, and present solutions, fostering communication and team-based inquiry.

5. **Global and Ethical Perspectives**
   - Tie advanced concepts to current global challenges (e.g., climate change, sustainability, medical innovation). By exploring scientific, ethical, and societal implications, students gain the broader skill set that underpins success in PISA-like tasks and university-level studies.

---

## V. LaTeX Implementation Guide

Stage 6 demands more sophisticated mathematical notation, equations, and chemical structures. We recommend:

1. **Tufte-LaTeX Class**
   - Use `tufte-book` for an elegant, spacious layout that accommodates margin notes, side figures, and extended footnotes.
   - Keep main text in the large column; relegate deeper or tangential notes to the margin using `\sidenote{}` or `\marginnote{}`.

2. **mhchem Package for Chemistry**
   - Load it in the preamble: `\usepackage[version=4]{mhchem}`.
   - For formulae: `\ce{H2SO4}`, `\ce{CO2}`, or `\ce{CaCl2}`, with stoichiometric notation (e.g. `\ce{2H2 + O2 -> 2H2O}`), and for ionic charges `\ce{Na+}`.
   - For equilibrium constants: `\(K_a = \frac{[\ce{H+}][\ce{A-}]}{[\ce{HA}]}\)` or `\(K_{eq} = \frac{[\ce{products}]}{[\ce{reactants}]}\)`.

3. **Figures, Tables, and Margin Examples**
   - Physics: For complicated free-body diagrams or circuit diagrams, consider using `\marginfigure{}` to avoid interrupting text flow.
   - Chemistry: Spectral charts or reaction schemes can be similarly placed in `\begin{marginfigure}` for quick reference.

4. **Equation Environment**
   - For major Physics equations:
     ```latex
     \begin{equation}
     F = ma
     \end{equation}
     ```
     accompanied by a short margin note about unit consistency and real-world application.

5. **Cross-Referencing & Accessibility**
   - Use `\label{}` and `\ref{}` diligently for equations, figures, and sections to help students and teachers navigate.
   - Keep color usage minimal (avoid for crucial meaning alone); rely on textual or patterned cues to stay accessible for color-blind students.

---

## VI. Accessibility and Neurodiversity Support Plan

1. **Clear Structure, Predictable Layout**
   - Each sub-topic introduced with consistent headings (“Outcomes,” “Key Concepts,” “Investigations”). This consistency helps students with autism or ADHD know what to expect and where to find information.

2. **Executive Function Aids**
   - **Checklists:** For each practical or extended investigation, a short bullet list of tasks: “Step 1: Hypothesis. Step 2: Materials. Step 3: Procedure…”
   - **Time Management Icons:** For large projects, an icon or margin note indicating approximate time or recommended pacing.

3. **Multi-Modal Presentation**
   - **Visual Diagrams:** Detailed, labeled diagrams (e.g., electron density maps or circuit schematics), plus bulleted textual explanations.
   - **Hands-On Projects:** Encourage lab demonstrations or at-home simple builds (like a miniature DC motor kit) for kinesthetic learners.
   - **Audio or Digital Tools:** Optional e-text with read-aloud functionality, highlightable text, and interactive simulations (particularly supportive for ADHD students).

4. **Scaffolding for Complex Concepts**
   - Physics equations or advanced stoichiometric calculations are broken down stepwise.
   - Provide worked examples, then partial examples for students to complete, then open practice.
   - Gifted learners can skip the stepwise scaffolding if they demonstrate mastery.

5. **Choice & Variation**
   - Where possible, let students pick the final format for presenting knowledge (written report vs. video presentation vs. infographic). This flexibility caters to varied neurocognitive strengths.

By embedding these universal design features, the textbook meets a broad range of learning preferences without singling out any student as needing “special” modifications.

---

## VII. Research Report Integration

Throughout both Chemistry and Physics textbooks, the design references best-practice findings (science-textbook-research.md) for educating gifted and neurodiverse students:

- **Interactive E-Text & Visual Supports (Ediyanto et al., 2020; Hart Barnett et al., 2018):**
  Each chapter has an e-text version with margin definitions, interactive diagrams, and text-to-speech. Visual supports (e.g., carefully designed charts, color-coded molecular structures) are integrated in each module.

- **Supported Reading & Hyperlinks (Knight et al., 2015):**
  In the digital version, key terms (e.g. “Electromagnetic Induction”) hyperlink to short definitions or videos. This boosts comprehension and fosters independence in those with ADHD/autism.

- **Differentiated Instruction & Cooperative Learning (Mathew, 2023):**
  Tiered tasks, choice boards, and opportunities for group investigations are woven into each module. Teachers can incorporate 8-way intelligence frameworks for group projects (e.g., visual-spatial tasks, linguistic tasks, logic-based tasks).

- **Focus on Real-World Inquiry (PISA 2025 alignment):**
  Repeated scenario-based tasks (like analyzing industrial data, or evaluating environmental impacts) align with PISA’s emphasis on applied scientific literacy, problem-solving, and argumentation.

By systematically applying these research findings, the Stage 6 Chemistry and Physics textbooks are designed to nurture high-level scientific expertise while remaining accessible and engaging for all learners—particularly the gifted and neurodiverse.

---

### Suggested AI Prompt for Further Module-Specific Outlines
> *“Generate a detailed sub-topic outline for Module 5: Equilibrium & Acid Reactions in HSC Chemistry, including at least three practical investigations (one focusing on Le Châtelier’s principle, one on acid strength testing, and one on titration). Provide extension questions for gifted learners and scaffolding tips for neurodiverse students.”*

Use similarly tailored prompts for each module to create in-depth lesson outlines, labs, and differentiation strategies.

---


# Best Practices in Science Textbook Design for Gifted Students

Science textbooks for years 7-10 should integrate interactive e-texts, visual supports, and accessibility features like text-to-speech and hyperlinked vocabulary to support PISA 2025 alignment and enhance learning for diverse students.

## Abstract

Interactive e-texts and visual supports enhance science learning for secondary students, particularly those with autism. Ediyanto et al. (2020) report that interactive books and computer programs foster science learning among students with ASD. Hart Barnett et al. (2018) note that visual supports promote engagement in science discussions. Supported eTexts—incorporating increased font size, text-to-speech, and hyperlinked vocabulary—yield improved comprehension and higher correct response rates, as demonstrated by Knight et al. (2015). Mathew (2023) documents that cooperative learning paired with an 8-way intelligence framework is associated with an expected 50% increase in student participation in science classes.

No study addressed design strategies tailored specifically for gifted students with ADHD/autism. Hence, current evidence supports textbook designs that integrate technology-enhanced, visually supportive, and differentiated instructional approaches to align with the PISA 2025 Science Framework for students in school years 7–10.

## Paper Search

Using your research question "What would be best practice in text book design for teaching science for school years 7-10 (ages 12-16) that best supports growth in the PISA 2025 Science Framework, particularly for gifted students with ADHD / autism.", we searched across over 126 million academic papers from the Semantic Scholar corpus. We retrieved the 500 papers most relevant to the query.

## Screening

We screened in papers that met these criteria:

- **Population Age Range**: Does the study include students aged 12-16 years (grades 7-10)?
- **Population Characteristics**: Does the study specifically examine students who are both gifted AND have ADHD and/or autism?
- **Subject Area**: Does the study focus primarily on science education?
- **Learning Materials**: Does the study examine textbook design, layout, content organization, or specialized learning materials?
- **Design Components**: Does the study include specific material design components rather than only general teaching methods?
- **Outcomes**: Does the study measure outcomes that align with one or more PISA Science Framework components (scientific competencies, knowledge, or attitudes)?
- **Study Type**: Is the study either primary research with multiple participants OR a systematic review/meta-analysis?

We considered all screening questions together and made a holistic judgement about whether to screen in each paper.

## Data Extraction

We asked a large language model to extract each data column below from each paper. We gave the model the extraction instructions shown below for each column.

### Study Design Type:
Identify the specific type of research design used in the study. Look in the methods section for explicit description of the study design. Possible types include:
- Experimental study
- Quasi-experimental study
- Observational study
- Case study
- Literature review
- Pilot study

If the design is not clearly stated, review the methodology section to determine the most appropriate classification. If multiple design elements are present, list all that apply.

### Target Population Characteristics:
Extract detailed information about study participants, focusing specifically on:
- Age range (ensure it matches 12-16 years)
- Presence of ADHD or autism spectrum disorder
- Educational setting (school type, grade level)
- Specific learning characteristics or needs

Look in participant description sections, typically found in methods or participant sections. If multiple subgroups are described, extract information for each. If information is incomplete, note "insufficient information" and specify what is missing.

### Textbook/Learning Material Characteristics:
Identify and describe specific features of science learning materials used:
- Type of material (e-text, printed textbook, digital resource)
- Specific design modifications for students with ADHD/autism
- Alignment with PISA 2025 Science Framework elements
- Support mechanisms integrated into the material

Search methods, results, and discussion sections. If multiple materials are used, describe each. If design features are not explicitly detailed, note "design features not specified".

### Learning Support Strategies:
Extract specific strategies used to support science learning:
- Cognitive support mechanisms
- Language adaptation techniques
- Comprehension enhancement methods
- Engagement strategies for neurodivergent learners

Examine intervention description, methods, and results sections. Prioritize strategies specifically targeting ADHD or autism spectrum students. If no specific strategies are mentioned, write "No specialized support strategies described".

### Science Learning Outcomes:
Identify and extract:
- Specific science learning outcomes measured
- Quantitative results (if available)
- Performance metrics related to PISA 2025 Science Framework competencies
- Specific outcomes for students with ADHD/autism

Review results and discussion sections. If statistical data is present, record exact figures. If outcomes are qualitative, summarize key findings. If no clear outcomes are reported, note "Outcomes not specified".

## Results

### Characteristics of Included Studies

| Study | Study Design | Population Focus | Educational Context | Key Interventions | Full Text Retrieved |
|-------|--------------|------------------|---------------------|-------------------|---------------------|
| Ediyanto et al., 2020 | Literature review | Students with autism spectrum disorder (ASD) | No mention found | Interactive books, e-texts, computer programs | No |
| Hart Barnett et al., 2018 | Literature review | Students with high-functioning autism spectrum disorders (ASDs) | General education (middle and high school) | Visual supports | No |
| Knight et al., 2015 | Pilot study with multiple probe across participants design | Students with autism spectrum disorder (ASD) | Public school, resource classroom for students with ASD | Supported electronic text (eText) using Book Builder™ | Yes |
| Kobarg et al., 2011 | Observational study | 15-year-old students | Schools in Organisation for Economic Co-operation and Development (OECD) countries | No mention found | No |
| Mathew, 2023 | Quasi-experimental study | Students with autism (13-15 years) | Secondary school, year levels 7 to 9 | Cooperative learning and differentiated instruction | Yes |

### Study Design
- The included studies comprised 2 literature reviews, 1 experimental study, 1 observational study, and 1 quasi-experimental study

### Population Focus
- 4 out of 5 studies focused on students with autism spectrum disorder (ASD)
- 1 study focused on general students

### Educational Context
- The studies reported varied educational contexts, including general education, middle/high school, public school, specialized classroom, and secondary school
- 1 study was conducted in OECD countries
- We didn't find mention of specific educational context information for 1 study

### Key Interventions
- Technology-based interventions were most common, reported in 2 studies
- Other interventions included visual supports, cooperative learning, and differentiated instruction
- We didn't find mention of specific interventions for 1 study

### Thematic Analysis

#### Visual Design Elements and Support Systems

| Study | Design Feature | Learning Impact | Implementation Requirements | Student Outcomes |
|-------|---------------|-----------------|------------------------------|------------------|
| Ediyanto et al., 2020 | Interactive books, e-texts, computer programs | Effective for science learning | No mention found | No mention found |
| Hart Barnett et al., 2018 | Visual supports | Promotes engagement in science discussions | No mention found | No mention found |
| Knight et al., 2015 | Supported eText with increased font size, text-to-speech, hyperlinks to vocabulary definitions | Improves comprehension of science content | Book Builder™ platform | Improved correct responses across intervention phases |
| Kobarg et al., 2011 | No mention found | No mention found | No mention found | No mention found |
| Mathew, 2023 | Differentiated instruction using 8-way intelligence framework | Enhances inclusiveness and engagement | No mention found | Expected 50% shift in student participation |

#### Design Features
- We found mention of specific design features for 4 out of 5 studies, each using a different approach:
  - Interactive technology (e.g., interactive books, e-texts, computer programs)
  - Visual supports
  - Supported eText (with increased font size, text-to-speech, hyperlinks to vocabulary definitions)
  - Differentiated instruction using 8-way intelligence framework
- We didn't find mention of design feature information for 1 study

#### Learning Impact
- We found mention of learning impact information for 4 out of 5 studies:
  - 1 study reported effectiveness for science learning
  - 1 study reported promotion of engagement in science discussions
  - 1 study reported improved comprehension of science content
  - 1 study reported enhanced inclusiveness and engagement
- We didn't find mention of learning impact information for 1 study

#### Implementation Requirements
- We found mention of implementation requirement information for 1 out of 5 studies, which specified the use of the Book Builder™ platform
- We didn't find mention of implementation requirement information for 4 studies

#### Student Outcomes
- We found mention of student outcome information for 2 out of 5 studies:
  - 1 study reported improved correct responses across intervention phases
  - 1 study expected a 50% shift in student participation
- We didn't find mention of student outcome information for 3 studies

### Digital Learning Integration

| Study | Digital Tool | Purpose | Integration Method | Effectiveness |
|-------|--------------|----------|---------------------|---------------|
| Ediyanto et al., 2020 | E-texts, computer programs | Science learning | No mention found | Effective for students with autism |
| Hart Barnett et al., 2018 | No mention found | Not applicable | Not applicable | Not applicable |
| Knight et al., 2015 | Book Builder™ eText | Science content delivery and comprehension support | Embedded coaches, hyperlinks, text-to-speech | Improved comprehension and correct responses |
| Kobarg et al., 2011 | No mention found | Not applicable | Not applicable | Not applicable |
| Mathew, 2023 | No mention found | Not applicable | Not applicable | Not applicable |

#### Digital Learning Integration Details
- We found mention of digital tools used in 2 out of 5 studies:
  - E-texts were used in 2 studies
  - Computer programs were used in 1 study
- We didn't find mention of specific digital tool information for 3 studies
- Regarding the purpose of the digital tools:
  - Science learning was the focus in 2 studies
  - Comprehension support was mentioned in 1 study
- We didn't find mention of purpose information for 3 studies
- Integration methods varied:
  - 1 study used embedded coaches, hyperlinks, and text-to-speech
- We didn't find mention of integration method information for 4 studies
- Effectiveness of the digital tools:
  - 2 studies reported positive effects
- We didn't find mention of effectiveness information for 3 studies

### Engagement and Scientific Inquiry Strategies

| Study | Engagement Strategy | Scientific Inquiry Approach | Implementation Context | Observed Impact |
|-------|---------------------|-----------------------------|-----------------------|-----------------|
| Ediyanto et al., 2020 | Interactive books | No mention found | No mention found | Effective for science learning |
| Hart Barnett et al., 2018 | Visual supports | Promoting science discourse | General education classrooms | Improved engagement in science discussions |
| Knight et al., 2015 | Embedded coaches, interactive elements | Predicting, questioning, summarizing strategies | Resource classroom for students with ASD | Improved comprehension and correct responses |
| Kobarg et al., 2011 | No mention found | Focus on scientific enquiry | Schools in OECD countries | No mention found |
| Mathew, 2023 | Cooperative learning, scaffolding | No mention found | Secondary school science classes | Expected improvement in engagement and participation |

### Engagement and Scientific Inquiry Details
- We found mention of engagement strategies for 4 out of 5 studies:
  - These included interactive books, visual supports, embedded coaches, interactive elements, cooperative learning, and scaffolding
  - We didn't find mention of a specified engagement strategy for 1 study
- Scientific inquiry approaches were reported in 3 out of 5 studies:
  - These included promoting science discourse, predicting/questioning/summarizing strategies, and a focus on scientific enquiry
  - We didn't find mention of specified scientific inquiry approaches for 2 studies
- Implementation contexts were provided for 4 out of 5 studies:
  - These included general education classrooms, a resource classroom for students with ASD, schools in OECD countries, and secondary school science classes
  - We didn't find mention of the implementation context for 1 study
- All 5 studies reported some form of observed or expected impact:
  - Effective for science learning (1 study)
  - Improved engagement in science discussions (1 study)
  - Improved comprehension and correct responses (1 study)
  - Expected improvement in engagement and participation (1 study)
  - We didn't find mention of a specified impact for 1 study

### Support Strategies

| Study | Support Strategy | Application Method | Effectiveness Indicators | PISA Alignment |
|-------|------------------|---------------------|--------------------------|----------------|
| Ediyanto et al., 2020 | Interactive books, e-texts, computer programs | No mention found | Effective for science learning | No mention found |
| Hart Barnett et al., 2018 | Visual supports | Promoting science discourse | Improved engagement in discussions | No mention found |
| Knight et al., 2015 | Supported eText with embedded coaches | Book Builder™ platform | Improved comprehension and correct responses | No mention found |
| Kobarg et al., 2011 | No mention found | Not applicable | Not applicable | No mention found |
| Mathew, 2023 | Cooperative learning, differentiated instruction | 8-way intelligence framework | Expected improvement in engagement | No mention found |

#### Support Strategies Details
- We found mention of interactive technology-based supports (e.g., interactive books, e-texts, computer programs) in 2 out of 5 studies
- Other strategies included visual supports, cooperative learning, and differentiated instruction, each found in 1 study
- We didn't find mention of support strategies for 1 study
- Application methods varied across the studies
- We found mention of positive effectiveness indicators in 4 out of 5 studies
- We didn't find mention of PISA alignment for any of the 5 studies

### Supporting Gifted Characteristics
We didn't find mention of strategies specifically addressing gifted students with ADHD/autism in science learning in any of the included studies.

## References

1. C. Mathew. "Improving Engagement Through Enhanced Inclusive Practices to Teach Science for Secondary School Students with Autism." Creative Education, 2023.
2. Ediyanto, Verra Wulandary, and D. Fatmawati. "Science Learning for Student with Autism Spectrum Disorder: A Literature Review," 2020.
3. Juliet E. Hart Barnett, Rebecca Trillo, and Cori M. More. "Visual Supports to Promote Science Discourse for Middle and High School Students With Autism Spectrum Disorders," 2018.
4. M. Kobarg, Manfred Prenzel, T. Seidel, M. Walker, B. Mccrae, and John Cresswell. "An International Comparison of Science Teaching and Learning," 2011.
5. Victoria F. Knight, Charles L. Wood, F. Spooner, D. Browder, and Chris O'Brien. "An Exploratory Study Using Science eTexts With Students With Autism Spectrum Disorder," 2015.

## **C.R.A.F.T. System Prompt for AI-driven Text Book Chapter Generator**

### **C. Context**
You are tasked with consistently supporting the development of comprehensive, pedagogically precise, granularly structured educational knowledge graphs specifically aligned with the NSW Stage 6 Year 12 Physics and Chemistry syllabus for preparing students for Higher School Certificate (HSC) examinations.

Your primary objective is to facilitate the systematic capture, categorisation, and interlinking of detailed syllabus outcomes, content specifications, mandatory skills (particularly Working Scientifically), and historical exam data into a logical, highly structured, and standardised digital knowledge graph. This digital structure must rigorously adhere at every level—including modules, topics, and learning outcomes—to the official syllabus documents provided by the NSW Education Standards Authority (NESA). Your graph design specifically targets advanced, AI-based learning platforms to deliver adaptive instructions and generate precise learning analytics to maximise student outcome effectiveness.

---

### **R. Role**
You are an internationally renowned expert in:

- Senior secondary science education, particularly the NSW HSC Physics and Chemistry syllabuses (Stage 6).
- Educational cognitive science, especially Bloom's Taxonomy and cognitive load theory.
- Computational knowledge representation, knowledge graphs, and ontological schema development for adaptive learning platforms.
- Pedagogical analytics and AI-driven educational systems with over 20 years' experience designing highly optimised, pedagogically robust, syllabus-aligned educational knowledge structures.

Your expertise ensures the generated knowledge graphs are pedagogically rigorous, cognitively appropriate, technically interoperable, and optimally designed for adaptive digital learning strategies and precise student learning analytics aligned with international best practices.

---

### **A. Action**
To facilitate reliable and consistent execution, you will undertake these specific actions sequentially to support graph creation by the generative AI model:

1. **Reference and Interpret Official Syllabus Documents:**
   Directly interpret and extract all learning outcomes, module and topic structures, Working Scientifically skills, mandatory practical and theoretical content, depth studies, and prescribed inquiry questions directly from the official NESA syllabus documentation.

2. **Define Explicit Knowledge Graph Schema & Standards:**
   Clearly and consistently apply the predefined JSON schema structure including explicit element definitions (e.g., `nodeId`, `type`, `bloomTaxonomyLevel`, `syllabusReference`, etc.) to ensure uniform implementation across all generated knowledge base nodes and relationships.

3. **Assign Pedagogical Attributes (Bloom’s Taxonomy, Cognitive Load):**
   Specify consistent guidelines for accurately assigning each knowledge node to one Bloom’s Taxonomy cognitive level (Remember, Understand, Apply, Analyse, Evaluate, Create), reflecting optimal cognitive sequencing, instructional scaffolding, and rigorous alignment with HSC-level cognitive expectations.

4. **Link Syllabus Outcomes to Examination Data & Exemplars:**
   Embed and consistently link relevant historical HSC examination questions (from past 10 years), marking criteria, and exemplar top-scoring responses as integral metadata within each node, ensuring high utility in student exam preparation.

5. **Integrate Core Skills Supporting HSC Success:**
   Clearly establish granular nodes (approximately 15-30 minutes classroom equivalents) for essential support skills—including scientific literacy, mathematical skills, practical experimentation, scientific reasoning, effective exam techniques, and optimised study methods—linking them explicitly to relevant syllabus outcomes.

6. **Establish Robust Prerequisite & Logical Linkages:**
   Clearly articulate and validate logical prerequisite sequencing between knowledge nodes ensuring conceptual coherence, appropriate cognitive scaffolding, and auditability from foundational knowledge nodes up to complex integrated tasks.

7. **Ensure Completeness & Pedagogical Accuracy via Rigorous Validation Criteria:**
   Define explicit and automated evaluative criteria for completeness (every syllabus element covered) and correctness (accurate pedagogical representation, conceptual descriptions, cross-linkages, and Bloom’s taxonomy assignments). Recommend specific automated AI-driven tests and validation rules to confirm adherence.

---

### **F. Format**
All content generated must rigorously comply with this structured, machine-readable, and highly interoperable JSON schema:

```json
{
  "courses": [
    {
      "courseName": "Physics Stage 6",
      "modules": [
        {
          "moduleName": "Module X : Module Title",
          "moduleCode": "PHX",
          "topics": [
            {
              "topicName": "Topic Title",
              "inquiryQuestions": ["Inquiry Question(s)"],
              "syllabusOutcomes": [
                {
                  "outcomeCode": "PHY12-X",
                  "description": "Outcome description text",
                  "bloomsLevel": "Remember"
                }
              ],
              "workingScientificallyOutcomes": [
                {
                  "code": "PHWSX",
                  "description": "Working Scientifically outcome description"
                }
              ],
              "knowledgeNodes": [
                {
                  "nodeId": "PHY_XXX_NL1",
                  "description": "Comprehensive conceptual description",
                  "type": "<controlled vocabulary: theory, definition, law, equation, experiment, skill, workingScientifically>",
                  "bloomTaxonomyLevel": "<Remember, Understand, Apply, Analyse, Evaluate, Create>",
                  "syllabusReference": "<e.g. PHY12-X, Module X: Topic title>",
                  "workingScientificallyCategory": "<controlled vocabulary as required>",
                  "literacySkills": ["Skill1", "Skill2"],
                  "numeracySkills": ["Skill1", "Skill2"],
                  "prerequisiteNodes": ["NODE_ID"],
                  "examQuestionsLinked": ["HSC20XXQY"],
                  "depthStudyComponents": ["Component1", "Component2"],
                  "examples": ["Real World Example 1", "Application 2"],
                  "media": ["path/to/media.extension"]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```
- Always employ formal academic language using British English spelling and standardized notation.

---

### **T. Target Audience**
This system prompt targets advanced generative AI language models including (but not limited to):

- ChatGPT 4.5
- ChatGPT o1
- Anthropic Claude 3.7
- Google Gemini 2.X
- Other highly advanced AI models with specialised educational data structuring capabilities and high semantic understanding to ensure optimal pedagogical fidelity and curriculum compliance for the NSW HSC Stage 6 Physics and Chemistry curriculum.

---

## **Example Instance**
When receiving a direct prompt input such as "_Generate a knowledge graph JSON node for Newton’s Law of Universal Gravitation_", the AI model will reliably and consistently refer back to this structured C.R.A.F.T. system prompt to ensure rigorous, complete, accurate, syllabus-aligned, and interoperable execution across all graph generation tasks.

---

## **Instructions for AI Implementation**
- You will always execute operations precisely aligned with the above contextual, structural, pedagogical, and methodological conditions.
- Continually validate generated data structures against the schema.
- Immediately raise notifications or queries if ambiguities, gaps in syllabus references, or potential schema or pedagogical inconsistencies are detected.

By strictly adhering to this comprehensive knowledge graph generation expert system prompt, you will ensure consistency, accuracy, and optimal pedagogical rigour for NSW Stage 6 educational content across diverse AI models and digital education delivery platforms.


# Example Tex chapter
```Tex
\chapter{Waves \& Thermodynamics}

Waves and thermodynamics underpin much of our daily experience, from the sound of music and communication technology to energy transfer in heating and cooling systems. Understanding these phenomena provides insight into both the natural world and modern technological advances.

This chapter explores the fundamental properties of waves, introduces sound and electromagnetic waves, and provides an overview of basic thermodynamics concepts such as temperature, heat transfer, and thermal energy. We will examine these topics through clear explanations, practical investigations, and challenging exercises to deepen your understanding and scientific thinking.

\section{The Nature of Waves}
\FloatBarrier

\subsection{What is a Wave?}
\FloatBarrier

Waves are disturbances that transfer energy from one location to another without transporting matter. Waves can propagate through various media or even through empty space.

\begin{marginfigure}[0pt]
% placeholder for wave propagation diagram
\caption{Wave propagation transfers energy without moving matter.}
\end{marginfigure}

\begin{keyconcept}{Wave Basics}
A \keyword{wave} is a disturbance transferring energy through a medium or space, characterized by properties like wavelength, frequency, amplitude, and speed.
\end{keyconcept}

\historylink{The concept of waves has been studied since antiquity, with early Greek philosophers observing water waves to understand natural phenomena.}

\subsection{Properties of Waves}
\FloatBarrier

To describe waves quantitatively, we define several key properties:

\begin{itemize}
\item \keyword{Amplitude} ($A$): Maximum displacement from equilibrium, related to wave energy.
\item \keyword{Wavelength} ($\lambda$): Distance between successive identical points (e.g., two crests).
\item \keyword{Frequency} ($f$): Number of waves passing a point per second, measured in Hertz (Hz).
\item \keyword{Period} ($T$): Time taken for one complete wave cycle, where \( T = \frac{1}{f} \).
\item \keyword{Wave speed} ($v$): Speed at which the wave propagates, given by the wave equation:
\[
v = f\lambda
\]
\mathlink{This relationship is fundamental and will be applied extensively throughout your study of physics.}
\end{itemize}

\begin{stopandthink}
If you double the frequency of a wave, what happens to its wavelength (assuming the speed remains constant)?
\end{stopandthink}

\begin{example}
A wave has a frequency of 60 Hz and a wavelength of 0.5 m. Find the speed of this wave.

\textbf{Solution:}
Using the wave equation:
\[
v = f\lambda = (60\,\text{Hz})(0.5\,\text{m}) = 30\,\text{m/s}
\]
Therefore, the wave speed is \(30\,\text{m/s}\).
\end{example}

\begin{investigation}{Measuring Wave Speed in a Slinky}
\textbf{Aim:} Determine the speed of transverse waves along a slinky.

\textbf{Method:}
\begin{enumerate}
\item Stretch a slinky along a flat surface, measuring the total length.
\item Generate a pulse wave by quickly moving one end of the slinky sideways.
\item Use a stopwatch to measure the time taken for the pulse to travel from one end to the other.
\item Repeat several times for accuracy.
\end{enumerate}

\textbf{Analysis:}
Calculate the average time and use the equation:
\[
v = \frac{\text{distance}}{\text{time}}
\]

\textbf{Discussion:}
Discuss possible sources of error and how wave speed might vary under different conditions.
\end{investigation}

\begin{tieredquestions}{Basic}
\begin{enumerate}
\item Define amplitude, wavelength, and frequency.
\item A wave has frequency 10 Hz and wavelength 2 m. Calculate its wave speed.
\end{enumerate}
\end{tieredquestions}

\begin{tieredquestions}{Intermediate}
\begin{enumerate}
\item Explain how amplitude relates to wave energy.
\item If a wave travels at 300 m/s with a wavelength of 1.5 m, determine its frequency.
\end{enumerate}
\end{tieredquestions}

\begin{tieredquestions}{Advanced}
\begin{enumerate}
\item Derive the relationship between period and frequency mathematically.
\item Discuss how wave properties might change when transitioning from one medium to another.
\end{enumerate}
\end{tieredquestions}

\FloatBarrier

\section{Sound and Electromagnetic Waves}
\FloatBarrier

\subsection{Sound Waves}
\FloatBarrier

Sound waves are mechanical, longitudinal waves produced by vibrating objects and require a medium (solid, liquid, or gas) to travel. The speed of sound varies depending on medium density and temperature.

\begin{keyconcept}{Longitudinal Waves}
In a \keyword{longitudinal wave}, particle oscillations occur parallel to the wave propagation direction. Sound waves are a primary example.
\end{keyconcept}

\historylink{Robert Boyle demonstrated that sound requires a medium for transmission through his bell-in-a-vacuum experiment in 1660.}

\begin{stopandthink}
Why can't astronauts communicate verbally in space without radio equipment?
\end{stopandthink}

\subsection{Electromagnetic Waves}
\FloatBarrier

Electromagnetic waves (EM waves) differ significantly from sound waves. They do not require a medium and travel at the speed of light (\(c \approx 3.0\times10^8\,\text{m/s}\)) in vacuum.

\begin{marginfigure}[0pt]
% placeholder for electromagnetic spectrum diagram
\caption{Electromagnetic spectrum showing wave types from radio waves to gamma rays.}
\end{marginfigure}

\begin{keyconcept}{Electromagnetic Spectrum}
The electromagnetic spectrum encompasses a range of EM waves varying by wavelength and frequency, including radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, and gamma rays.
\end{keyconcept}

\challenge{Explore the use of electromagnetic waves in modern technologies like wireless communication, medical imaging, and astronomy.}

\begin{investigation}{Measuring the Speed of Sound}
\textbf{Aim:} Experimentally determine the speed of sound in air.

\textbf{Method:}
\begin{enumerate}
\item Position two students a known distance apart (e.g., 100 m).
\item One student bangs two wooden blocks together; the second measures time delay between seeing the action and hearing the sound.
\item Repeat and average results.
\end{enumerate}

\textbf{Analysis:}
Calculate sound speed using \(v = d/t\), considering possible reaction time errors.

\textbf{Extension:}
Investigate how temperature affects sound speed.
\end{investigation}

\FloatBarrier

\section{Introduction to Thermodynamics}
\FloatBarrier

Thermodynamics studies energy transformations involving heat and temperature. These concepts underpin processes from weather systems to engines and refrigeration.

\subsection{Temperature vs. Thermal Energy}
\FloatBarrier

Temperature measures the average kinetic energy of particles in a substance. Thermal energy depends on temperature, particle number, and material type.

\begin{keyconcept}{Thermal Energy}
\keyword{Thermal energy} is the internal energy due to particle motion, dependent on temperature, mass, and specific heat capacity.
\end{keyconcept}

\begin{stopandthink}
Which contains more thermal energy: a cup of water at 90°C or a swimming pool at 30°C? Explain your reasoning.
\end{stopandthink}

\subsection{Heat Transfer Mechanisms}
\FloatBarrier

Heat transfer occurs via three mechanisms: conduction, convection, and radiation.

\begin{itemize}
\item \keyword{Conduction}: Heat transfer through direct particle collisions, common in solids.
\item \keyword{Convection}: Heat transfer through fluid motion (liquids or gases), driven by density differences.
\item \keyword{Radiation}: Transfer of heat through electromagnetic waves, requiring no medium.
\end{itemize}

\mathlink{Fourier's Law mathematically describes conductive heat flow, while Stefan-Boltzmann law applies to radiation heat transfer.}

\begin{investigation}{Comparing Heat Transfer Methods}
Design an experiment to compare heat transfer efficiency through conduction, convection, and radiation.
\end{investigation}

\begin{tieredquestions}{Advanced}
\begin{enumerate}
\item Describe mathematically how thermal equilibrium is achieved between two substances at different temperatures.
\item Relate thermodynamics principles to real-world applications such as climate control systems and engines.
\end{enumerate}
\end{tieredquestions}

\FloatBarrier

This chapter has provided foundational understanding of waves and thermodynamics essential for future physics studies and real-world applications.
```
