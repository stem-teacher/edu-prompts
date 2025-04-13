Thank you for your excellent recommendations.  If you could now assist with the following please.
1. I want to put the revision tool on hold for the moment, as I am short of time. If I have time at the end I will add it later.
2. I include a latex fragment below (fragment - part a) from a similar paper prepared for physics. This approach does not sit directly within that envisioned by the lectures, which is ok since this is the pedagogical approach I am required to follow by my school, if you can prepare this taking input from the #Assignment guidance, but only where it makes sense.
3. Prepare a lesson sequence overview with rationale.
4. Prepare the three lesson plans.  I provide a template below  (# Lesson Plan Tex)
5.  Prepare relevant resources for each class. I provide a worksheet, student activity and presentation latex templates below as per (# Worksheet tex # Student Activity Template # Presentation Template )



# Assignment guidance
The Stage 6 Topic from your syllabus can be cut and pasted from the syllabus document. (Nothing else required.)
The Current Syllabus Outcomes can be cut and pasted from the syllabus document. (Nothing else required.)
Content selected for your 3-lesson sequence is YOU fleshing out the Stage 6 Topic dot-points your syllabus indicates you need to cover. This is ALL your OWN work. You may use bullet points, a table, or a paragraph style to respond.
Total Length for Part A: approximately one A4 page


```latex fragment - part a
\section{Part A: Lesson Sequence Overview}
\label{sec:part_a_overview}

\textbf{Teaching Subject Area:} Chemistry, Stage 6 (Years 11--12)

\textbf{Stage 6 Syllabus Topic:} Module 7: Organic Chemistry as specified by the NSW Stage 6 Chemistry syllabus \parencite{nesa2017chemistry}.

The primary syllabus outcomes targeted are summarised in Table~\ref{tab:syllabus-outcomes}.

\begin{table}[htbp!]
\centering
\caption{Selected Syllabus Outcomes Addressed by Lesson Sequence}
\label{tab:syllabus-outcomes}
\begin{threeparttable}
    \begin{tabular}{@{}llc@{}} % Added @{} for better spacing
    \toprule % Use booktabs rules
    Code         & Outcome Description & Bloom's Level \\ \midrule % Use booktabs rules
    PH11-10 & Explains and analyses waves and energy transfer by sound, & Analyse \\
    & light, and thermodynamic principles & \\
    PH11/12-3   & Conducts investigations to collect valid \& reliable data & Apply \\
    PH11/12-4   & Selects and processes qualitative \& quantitative data & Analyse \\
    PH11/12-7   & Communicates scientific understanding using suitable language & Apply
    \end{tabular}

\end{threeparttable}
\end{table}

This lesson sequence integrates XX syllabus inquiry questions:

\begin{enumerate}
\item XX
\end{enumerate}

The specific syllabus content points selected for emphasis within the three-lesson sequence are:

\begin{itemize}
    \item \textbf{Relating Temperature and Kinetic Energy:} Explain the relationship between the temperature of an object and the kinetic energy of the particles within it (ACSPH018).
\end{itemize}

# Lesson Plan Tex
\documentclass[11pt, a4paper]{article}
\usepackage{geometry}
\geometry{left=2cm, right=2cm, top=2cm, bottom=2cm}
\usepackage{hyperref}
\usepackage{array}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}

\title{Year 11 Physics - Lesson Plan 1/3 \\ Thermodynamics: Particles, Temperature & Energy Flow}
\date{Based on NSW Stage 6 Syllabus (Module 3)}
\author{Philip Haynes}

\begin{document}
\maketitle
\vspace{-2em} % Reduce space after title

\section*{Lesson Overview}
\begin{itemize}
    \item \textbf{Lesson Title:} Thermodynamics: Relating Particles, Temperature, and Energy Transfer
    \item \textbf{Duration:} 60 minutes
    \item \textbf{Focus Inquiry Question:} How are temperature, thermal energy, and particle motion related? (Introduction to Q3: direction of energy transfer)
\end{itemize}

\section*{Syllabus Alignment & Knowledge Nodes Targeted}
\begin{itemize}
    \item \textbf{Outcomes:} PH11-10, PH11/12-3 (Conduct Invest.), PH11/12-7 (Communicate)
    \item \textbf{Content:} ACSPH018, ACSPH016, ACSPH022 (conceptual intro)
    \item \textbf{Knowledge Nodes:} N1 (Temp/KE Relation), N4 (Transfer Mechanisms), N2 (Thermal Equilibrium - Concept)
\end{itemize}

\section*{Student Learning Objectives (Aligned with Nodes)}
Students will be able to:
\begin{itemize}
    \item Explain the relationship between temperature and the average kinetic energy of particles (N1 - Understand).
    \item Identify and describe conduction, convection, and radiation with examples (N4 - Understand).
    \item Explain conduction in solids using the particle model (N4 - Understand).
    \item Define thermal equilibrium conceptually as no net energy transfer (N2 - Understand).
    \item Predict the direction of heat flow based on temperature differences (Links N1, N2, Inquiry Q3).
    \item [Literacy] Define temperature, thermal energy, conduction, convection, radiation, thermal equilibrium precisely (N1, N4, N2).
    \item [Numeracy] Qualitatively interpret particle energy distributions/visualisations (N1).
\end{itemize}

\section*{Lesson Structure \& Activities}

\subsection*{Introduction (10 mins)}
\begin{itemize}
    \item \textbf{Teacher Activity:} Display Inquiry Questions 1, 2, 3. State focus on Q1. Engage with prompt: "Metal vs wood chair feeling cold/warm". Facilitate brief discussion. Introduce Thermodynamics scope. Provide historical (Steam Engine) and future (Climate/IT) context. Define core terms on board/slide: Temperature (Avg KE), Thermal Energy (Total KE+PE), Heat (Transfer of TE). [N1 Definitions]
    \item \textbf{Student Activity:} Note Inquiry Questions. Participate in discussion. Record key definitions from board/slide (support via Worksheet 1).
    \item \textbf{Pedagogy Focus:} Contextualization (Motivation), Activate Prior Knowledge, Core Terminology (Literacy N1).
\end{itemize}

\subsection*{Exploration (30 mins)}
\begin{itemize}
    \item \textbf{Teacher Activity:} Conduct/Show Demo/Simulations (See Activity Sheet 1 for details):
        \begin{itemize}
            \item Conduction (N4): Heat metal rod, explain particle vibration transfer.
            \item Convection (N4): Show video/sim of convection currents, explain density changes.
            \item Radiation (N4): Use IR camera/heat lamp/sim, explain EM wave transfer. Link to user prompt: hot metal radiating heat and light.
        \end{itemize}
        Guide PhET Simulation "Energy Forms and Changes" exploration (link on Activity Sheet 1). Focus on particle view vs. temperature (N1). Introduce Equilibrium concept (N2) - what happens when hot/cold objects touch? Discuss direction of flow (Inquiry Q3 link).
    \item \textbf{Student Activity:} Observe demos/sims, explain using particle model (N1, N4). Use PhET simulation on laptops, guided by Worksheet 1 prompts. Discuss equilibrium concept. Complete relevant parts of Worksheet 1.
    \item \textbf{Pedagogy Focus:} Active Learning (Observation/Prediction), Multimodal Input (Demo/Sim), Visualising Microscopic Processes (N1, N4), Guided Inquiry (N2). Cognitive Science: Dual Coding, reducing load via visualisation.
    \item \textbf{ICT Integration:} PhET Simulation.
\end{itemize}

\subsection*{Consolidation (20 mins)}
\begin{itemize}
    \item \textbf{Teacher Activity:} Lead class discussion summarising N1, N4. Explicitly address metal/wood chair question using conduction/conductivity concept (N4). Reiterate equilibrium concept (N2) and direction of heat flow. Distribute Worksheet 1 for completion. Distribute \#MarkSense Quiz 1.
    \item \textbf{Student Activity:} Participate in discussion, complete Worksheet 1 (definitions, explanations for N1, N4, N2 concept). Complete \#MarkSense Quiz 1 (end of class or homework).
    \item \textbf{Pedagogy Focus:} Concept Consolidation, Linking Micro-Macro, Formative Assessment.
\end{itemize}

\section*{Resources Required}
\begin{itemize}
    \item Teacher demonstrations materials (metal rod, heat source, etc. - See Activity Sheet 1) OR Simulation/Video access.
    \item Student laptops with internet access.
    \item PhET Simulation links (on Activity Sheet 1).
    \item Worksheet 1 (separate PDF).
    \item \#MarkSense Quiz 1 (included on Worksheet 1 PDF).
    \item Projector/Whiteboard.
\end{itemize}

\section*{Assessment}
\begin{itemize}
    \item \textbf{Formative:} Teacher observation of student participation in discussions and simulation use. Review of Worksheet 1 responses. Analysis of \#MarkSense Quiz 1 results.
\end{itemize}

\section*{Differentiation}
\begin{itemize}
    \item \textbf{Support:} Provide sentence starters for explanations on worksheet. Pair students for simulation exploration. Pre-teach key vocabulary.
    \item \textbf{Extension:} Ask students to research specific thermal conductivity values and explain differences. Challenge students to explain convection in weather patterns.
\end{itemize}

\end{document}

# Student Activity Template

\documentclass[11pt, a4paper]{article} % Using article class for simpler activity sheet
\usepackage{geometry}
\geometry{left=2cm, right=2cm, top=2cm, bottom=2cm}
\usepackage{graphicx}
\usepackage{hyperref}
\usepackage{array}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}

\title{Year 11 Physics - Activity Sheet 1 \\ Demonstrating Heat Transfer Mechanisms}
\date{Module 3 - Lesson 1}
\author{Thermodynamics}

\begin{document}
\maketitle

\section*{Aim}
To observe and explain the three primary mechanisms of heat transfer: conduction, convection, and radiation, and relate these to particle motion and temperature changes.

\section*{Knowledge Nodes Targeted}
\begin{itemize}
    \item N1: Temp/KE Relation (Observing effect of heating)
    \item N4: Transfer Mechanisms (Identifying and explaining each mode)
    \item N2: Thermal Equilibrium (Conceptual introduction via heat flow direction)
\end{itemize}

\section*{Part A: Demonstrations (Teacher Led or Video/Simulation)}

\subsection*{Demo 1: Conduction}
\begin{itemize}
    \item \textbf{Materials:} Metal rod (e.g., copper or aluminium), heat source (Bunsen burner or torch), heat-resistant mat, (optional: thermal camera, wax dots along rod).
    \item \textbf{Procedure:}
        \begin{enumerate}
        \item Place the metal rod on the heat-resistant mat.
        \item Carefully heat ONE end of the rod with the heat source.
        \item Observe how the heat travels along the rod (e.g., using touch carefully away from heat, thermal camera, or melting wax dots).
        \end{enumerate}
    \item \textbf{Safety:} Wear safety glasses. Handle hot rod with tongs. Be aware of hot surfaces.
    \item \textbf{Observation Prompt (for Worksheet 1):} Describe how the energy transferred from the hot end to the cold end. Explain using the particle model (vibrations, collisions). [N4]
\end{itemize}

\subsection*{Demo 2: Convection}
\begin{itemize}
    \item \textbf{Materials:} Large beaker or flask of water, heat source, (optional: potassium permanganate crystal or food colouring, small paper pieces).
    \item \textbf{Procedure (Option 1 - Visualisation):}
        \begin{enumerate}
        \item Fill beaker with cold water. Carefully drop a small crystal of KMnO4 or a drop of food colouring to the bottom near one side.
        \item Gently heat the water directly below the colourant.
        \item Observe the movement of the coloured water.
        \end{enumerate}
    \item \textbf{Procedure (Option 2 - Simulation):} Use PhET "States of Matter" or search for "convection current simulation/video". Observe fluid movement patterns when heated from below.
    \item \textbf{Observation Prompt:} Describe the pattern of movement observed. Explain why the fluid moves in this way, relating it to temperature, density, and particle movement. [N4]
\end{itemize}

\subsection*{Demo 3: Radiation}
\begin{itemize}
    \item \textbf{Materials:} Heat lamp or incandescent bulb, hand or thermometer, (optional: infrared thermometer/camera).
    \item \textbf{Procedure:}
        \begin{enumerate}
        \item Turn on the heat lamp/bulb.
        \item Carefully place a hand near (but not touching) the lamp. Feel the warmth.
        \item (Optional) Measure temperature near the lamp with IR thermometer or observe with IR camera.
        \end{enumerate}
    \item \textbf{Observation Prompt:} How did the heat reach your hand without direct contact or air movement being the main factor? What type of energy transfer is this? Does it require a medium? [N4]
\end{itemize}

\section*{Part B: PhET Simulation Exploration}

\subsection*{Simulation: Energy Forms and Changes}
\begin{itemize}
    \item \textbf{Link:} \href{https://phet.colorado.edu/en/simulations/energy-forms-and-changes}{https://phet.colorado.edu/en/simulations/energy-forms-and-changes}
    \item \textbf{Procedure:}
        \begin{enumerate}
        \item Open the simulation and select the "Intro" screen.
        \item Place a thermometer on the brick and the water.
        \item Place the brick and water on the stands.
        \item Check the "Energy Symbols" box.
        \item Use the slider to add heat to both the brick and the water.
        \item Observe:
            \begin{itemize}
                \item The movement/vibration of the particles (atoms/molecules) within the brick and water.
                \item The change in the temperature reading on the thermometers.
                \item The flow of 'E' energy symbols representing heat transfer.
            \end{itemize}
        \end{enumerate}
    \item \textbf{Observation Prompts (for Worksheet 1):}
        \begin{itemize}
            \item How did particle motion change when heat was added? [N1]
            \item How did temperature change? Relate particle motion to temperature. [N1]
        \end{itemize}
\end{itemize}

\end{document}

# Presentation Template
\documentclass[xcolor=svgnames]{beamer}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc} % Added for better font encoding
\usepackage{xcolor}
\usepackage{booktabs} % for tables if needed
\usepackage{amsmath} % for math
\usepackage{graphicx} % For images if needed
\usepackage{hyperref} % For links
\usetheme{Madrid}

% COLORS (As provided)
\definecolor{mqred}{RGB}{166, 25, 46}
\definecolor{mqdeepred}{RGB}{118, 35, 47}
\definecolor{mqgray}{RGB}{55, 58, 54}
\definecolor{mqlightgray}{RGB}{237, 235, 229}
\definecolor{mqmagenta}{RGB}{198, 0, 126}
\usecolortheme[named=mqred]{structure}
\setbeamercolor{title in head/foot}{bg=mqlightgray, fg=mqgray}
\setbeamercolor{author in head/foot}{bg=mqdeepred}
\setbeamercolor{page number in head/foot}{bg=mqdeepred, fg=mqlightgray}

% FOOTNOTE ARRANGEMENTS (As provided)
\makeatletter
\setbeamertemplate{footline}{
  \leavevmode%
  \hbox{%
  \begin{beamercolorbox}[wd=.5\paperwidth,ht=2.25ex,dp=1ex,center]{author in head/foot}%
    \usebeamerfont{author in head/foot}\insertshortauthor\expandafter\ifblank\expandafter{\beamer@shortinstitute}{}{~~(\insertshortinstitute)}
  \end{beamercolorbox}%
  \begin{beamercolorbox}[wd=.4\paperwidth,ht=2.25ex,dp=1ex,center]{title in head/foot}%
    \usebeamerfont{title in head/foot}\insertshorttitle
  \end{beamercolorbox}%
  \begin{beamercolorbox}[wd=.1\paperwidth,ht=2.25ex,dp=1ex,center]{page number in head/foot}%
    \usebeamerfont{page number in head/foot}\insertframenumber{} / \inserttotalframenumber
  \end{beamercolorbox}}%
  \vskip0pt%
}
\makeatother
\beamertemplatenavigationsymbolsempty

% TITLE, AUTHORS, INSTITUTE, DATE
\title[Thermo: Particles \& Energy]{Thermodynamics Lesson 1: Particles, Temperature \& Energy Flow}
\author[P. Haynes]{Mr Haynes}
\institute[GHS]{Gosford High School}
\date{\today} % Or specific date

% LOGO (Optional)
%\titlegraphic{\includegraphics[height=2.5cm]{logo.jpg}} % Change the logo path as needed

\begin{document}

\begin{frame}
    \titlepage
\end{frame}

\begin{frame}{Outline}
    \tableofcontents
\end{frame}

\section{Introduction}
\begin{frame}{What is Thermodynamics?}
    \frametitle{Introduction: Why Study Thermodynamics?}
    \textbf{Focus Inquiry Question 1:} How are temperature, thermal energy, and particle motion related?
    \vspace{1em}

    \begin{itemize}
        \item \textbf{Definition:} The study of energy, its transfer (heat, work), and transformations.
        \item \textbf{Think/Pair/Share:} Why does a metal chair feel colder than a wooden one at the same room temperature?
        \vspace{1em}
        \item \textbf{Relevance:}
        \begin{itemize}
            \item \textit{Historical:} Driven by the need to understand and improve Steam Engines (Industrial Revolution).
            \item \textit{Future:} Crucial for Climate Science (energy efficiency), Sustainable Technologies, Computing (heat limits).
        \end{itemize}
        \item \textbf{Key Terms (Worksheet 1):}
        \begin{itemize}
            \item Temperature (Measure of \textit{average} particle Kinetic Energy - KE) [N1]
            \item Thermal Energy (Total internal energy - KE + Potential Energy) [N1]
            \item Heat (Transfer of thermal energy due to temperature difference)
        \end{itemize}
    \end{itemize}
\end{frame}

\section{Particle Model and Temperature}
\begin{frame}{Particles in Motion [N1]}
    \frametitle{Temperature and Particle Kinetic Energy}
    \begin{itemize}
        \item Matter is made of particles (atoms/molecules) constantly in motion.
        \item Temperature is directly related to the \textit{average} kinetic energy of these particles.
        \item Higher Temperature $\implies$ Higher Average KE $\implies$ Faster Particle Motion (vibration, translation, rotation).
        \item Lower Temperature $\implies$ Lower Average KE $\implies$ Slower Particle Motion.
    \end{itemize}
    \vspace{1em}
    \textbf{Visualisation:} PhET Simulation "Energy Forms and Changes" shows this link.
    % Placeholder for a screenshot or diagram
    \begin{center}
    \includegraphics[width=0.6\textwidth]{placeholder_phet_particles.png} % Replace with actual image
    \end{center}
    Observe particle speed increasing as heat is added.
\end{frame}

\section{Heat Transfer Mechanisms}
\begin{frame}{How Does Heat Move? [N4]}
    \frametitle{Mechanisms of Heat Transfer}
    Heat (thermal energy) transfers via three main mechanisms:
    \vspace{1em}

    \begin{columns}[T] % Align tops
        \begin{column}{0.33\textwidth}
            \textbf{1. Conduction}
            \begin{itemize}
                \item Transfer through direct particle collisions.
                \item Dominant in solids.
                \item Faster in materials with closely packed particles / free electrons (e.g., metals).
                \item \textit{Example:} Hot spoon handle.
            \end{itemize}
        \end{column}
        \begin{column}{0.33\textwidth}
            \textbf{2. Convection}
            \begin{itemize}
                \item Transfer by the movement of fluids (liquids/gases).
                \item Hotter fluid is less dense and rises; cooler fluid sinks. Creates currents.
                \item \textit{Example:} Boiling water, sea breeze.
            \end{itemize}
        \end{column}
        \begin{column}{0.33\textwidth}
            \textbf{3. Radiation}
            \begin{itemize}
                \item Transfer via electromagnetic waves (infrared).
                \item Requires NO medium.
                \item All objects above absolute zero radiate.
                \item \textit{Example:} Heat from sun, warmth from a fire.
            \end{itemize}
        \end{column}
    \end{columns}
    \vspace{1em}
    \textit{Activity 1 provides demonstrations/simulations for these.}
\end{frame}

\section{Thermal Equilibrium Intro}
\begin{frame}{Reaching a Balance [N2 Intro]}
    \frametitle{Thermal Equilibrium}
    \begin{itemize}
        \item \textbf{Direction of Flow (Inquiry Q3 link):} Heat naturally flows from a hotter object to a colder object when they are in thermal contact.
        \item \textbf{Equilibrium Definition:} The state reached when there is \textbf{no net flow} of heat between objects in thermal contact.
        \item \textbf{Condition:} This occurs when the objects reach the \textbf{same temperature}.
        \item \textit{Example:} A cold drink eventually warms up to room temperature. The drink and the room air reach thermal equilibrium.
    \end{itemize}
    \begin{center}
    % Placeholder for diagram: Hot block -> Cold block = Heat Flow Arrow
    \fbox{\includegraphics[width=0.5\textwidth]{placeholder_equilibrium.png}} % Replace
    \end{center}
\end{frame}

\section{Summary}
\begin{frame}{Lesson 1 Summary}
    \begin{itemize}
        \item Thermodynamics studies energy transfer and transformation.
        \item Temperature reflects average particle kinetic energy [N1].
        \item Heat is energy transferred due to temperature differences.
        \item Heat transfers via Conduction, Convection, Radiation [N4].
        \item Thermal Equilibrium is reached when temperatures are equal (no net heat flow) [N2].
    \end{itemize}
    \vspace{1em}
    \textbf{Next Steps:}
    \begin{itemize}
        \item Complete Worksheet 1 (Definitions, Explanations).
        \item Complete \#MarkSense Quiz 1 (Check understanding).
        \item Preview Lesson 2: Quantifying heat transfer (Calculations!).
    \end{itemize}
\end{frame}

\begin{frame}
    \centering
    \textbf{Thank you!}\\
    Questions?
\end{frame}

\end{document}

# Worksheet tex
\documentclass[11pt, a4paper]{article}
\usepackage{geometry}
\geometry{left=2cm, right=2cm, top=2cm, bottom=2cm}
\usepackage{amsmath} % For math
\usepackage{graphicx} % For images if needed
\usepackage{array}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{hyperref}

\title{Year 11 Physics - Worksheet 1 \\ Thermodynamics: Particles, Temperature & Energy Flow}
\date{Module 3}
\author{Student Name: \underline{\hspace{5cm}} ID: \underline{\hspace{3cm}}} % Placeholder for student info

\begin{document}
\maketitle

\section*{Part 1: Defining Concepts (Knowledge Nodes N1, N4, N2)}

1.  \textbf{Define} the following terms precisely using your understanding from the lesson:
    \begin{itemize}
        \item Thermodynamics: \vspace{1cm}
        \item Temperature (in terms of particle motion): \vspace{1cm}
        \item Thermal Energy: \vspace{1cm}
        \item Heat: \vspace{1cm}
        \item Conduction: \vspace{1cm}
        \item Convection: \vspace{1cm}
        \item Radiation (thermal): \vspace{1cm}
        \item Thermal Equilibrium: \vspace{1cm}
    \end{itemize}
    \textit{[Literacy Focus: Precise scientific terminology - N1, N4, N2]}

2.  Using the particle model, \textbf{explain} why a metal spoon left in hot soup quickly becomes hot, while a wooden spoon takes much longer. Mention the key heat transfer mechanism involved. [N4 Understand]
    \vspace{2cm}

3.  Give one real-world \textbf{example} for each type of heat transfer where it is the *primary* mode of transfer:
    \begin{itemize}
        \item Conduction Example:
        \item Convection Example:
        \item Radiation Example:
    \end{itemize}
    [N4 Understand]

\section*{Part 2: Observations & Explanations (Knowledge Nodes N1, N4)}

4.  From the PhET Simulation ("Energy Forms and Changes"):
    \begin{itemize}
        \item Describe what happened to the \textbf{motion} of the water/brick particles when heat energy was added. [N1 Understand] \vspace{1cm}
        \item What happened to the \textbf{temperature} reading as heat was added? [N1 Understand] \vspace{1cm}
        \item What is the relationship between the average kinetic energy of the particles and the temperature of the substance? [N1 Understand] \vspace{1cm}
        \textit{[Numeracy Focus: Qualitative interpretation of simulation visuals - N1]}
    \end{itemize}

5.  Consider the demonstrations of heat transfer:
    \begin{itemize}
        \item How does energy transfer differ fundamentally between conduction (e.g., metal rod) and radiation (e.g., heat lamp)? [N4 Understand] \vspace{2cm}
    \end{itemize}


\hrulefill
\section*{\#MarkSense Quiz 1}
\textbf{Instructions:} Choose the best answer for multiple choice questions. Write brief answers for short answer questions in the space provided.

\vspace{0.5cm}
\textbf{Student Name:} \underline{\hspace{5cm}} \textbf{ID:} \underline{\hspace{3cm}}
\vspace{0.5cm}

1.  Temperature is a measure of the \_\_\_\_ kinetic energy of particles in a substance. [N1]
    \begin{itemize}
        \item[A.] Total
        \item[B.] Average
        \item[C.] Potential
        \item[D.] Rotational
    \end{itemize}
    \textbf{Answer:} \underline{\hspace{1cm}}

2.  Heat transfer through the movement of fluids (liquids/gases) is primarily: [N4]
    \begin{itemize}
        \item[A.] Conduction
        \item[B.] Convection
        \item[C.] Radiation
        \item[D.] Advection
    \end{itemize}
    \textbf{Answer:} \underline{\hspace{1cm}}

3.  Explain why putting a lid on a hot cup of coffee keeps it warm longer, mentioning at least TWO heat transfer mechanisms. [N4, N2 conceptual link] (2 marks)
    \vspace{3cm}


\end{document}
