import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

/**
 * SunburstDS2
 * Zoomable sunburst for Stage 5 Data Science 2
 */
export default function SunburstDS2() {
  const svgRef = useRef();
  const tipRef = useRef();

  /* ─────────────── COLOUR PALETTE ─────────────── */
  const C = {
    central:    "#2C3E50",
    inquiry:    "#A0522D",
    skill:      "#C3B299",
    concept:    "#8F9779",
    definition: "#8F9779",
    outcome:    "#E9D8A6",
    connection: "#D4C5B9"
  };

  /* ─────────────── EDUKG HIERARCHY ───────────────
     (Replace this with your full JSON tree as given)
  */
  const data = 
  {
  "courses": [
    {
      "courseName": "Science 7–10",
      "stage": "Stage 5",
      "focusArea": "Data Science 2",
      "modules": [
        {
          "moduleName": "Data Science 2",
          "moduleCode": "SC5_DA2",
          "validationStatus": {
             "syllabusCoverage": "All SC5-DA2-01 content points mapped.",
             "orphanNodes": "None detected.",
             "prerequisiteLoops": "None detected.",
             "cognitiveLoadAverageInitialPath": "Target <= 3.0 achievable via defined path (approx 2.86). Overall average approx 3.25.",
             "lastChecked": "2025-04-25"
           },
          "topics": [
            {
              "topicName": "Large Datasets & Scientific Argumentation",
              "inquiryQuestions": [
                "How can large datasets be analysed to test scientific claims?",
                "How is scientific knowledge used in evidence-based decisions?",
                "How can the legitimacy of claims be verified?"
              ],
              "syllabusOutcomes": [
                {
                  "outcomeCode": "SC5-DA2-01",
                  "description": "Assesses the use of scientific knowledge and data in evidence-based decisions and when verifying the legitimacy of claims.",
                  "bloomsLevel": "Evaluate"
                }
              ],
              "workingScientificallyOutcomes": [
                {"code": "SC5-WS-06", "description": "Analyses data from investigations to identify trends, patterns and relationships, and draws conclusions."},
                {"code": "SC5-WS-07", "description": "Selects suitable problem-solving strategies and evaluates proposed solutions to identified problems."},
                {"code": "SC5-WS-08", "description": "Communicates scientific arguments with evidence, using scientific language and terminology in a range of communication forms."}
              ],
              "knowledgeNodes": [
                {
                  "nodeId": "DS5_N1",
                  "description": "Distinguish between investigable questions (testable with available resources, specific, measurable) and non-investigable questions (vague, subjective, currently untestable) in a scientific context.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Understand",
                  "difficulty": 2,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "SC5-WS-02 Questioning and predicting",
                  "workingScientificallyOutcomes": ["SC5-WS-02"],
                  "literacySkills": ["Distinguish between categories", "Analyse questions"],
                  "numeracySkills": ["Consider resource constraints"],
                  "prerequisiteNodes": ["DS4_N11"],
                  "misconceptions": [
                    "All questions about science are investigable.",
                    "If a question is interesting, it must be investigable.",
                    "Subjective questions can be answered scientifically."
                  ],
                  "cognitiveLoad": {"intrinsic": 2,"extraneous": 1,"germane": 2,"band": 2},
                  "spacingParameter": 7,
                  "retrievalQuestionTemplates": [
                    "What makes a scientific question 'investigable'?",
                    "Is 'Why is gravity?' an investigable question for a Year 9 lab? Explain.",
                    "Give an example of a non-investigable question in science."
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Data-ink ratio",
                    "interactionPattern": "Drag-and-drop classification",
                    "focusContext": "Sorting question examples (e.g., 'Does fertiliser X increase yield?', 'Is red prettier than blue?') into 'Investigable' and 'Non-Investigable' bins with feedback."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Incorrect classification",
                    "hintType": "Provide criteria checklist (Testable, Measurable, Ethical, Resource-feasible)"
                  },
                  "resourceMeta": {
                    "mediaType": "interactive activity",
                    "readingLevel": "Year 9",
                    "accessibilityFeatures": ["keyboardNavigation", "clearInstructions"]
                  },
                  "examQuestionsLinked": [
                      {"id": "EQ_DS5N1_1", "description": "Classify the following questions as investigable or non-investigable for a school science project, justifying your choice.", "difficultyEstimate": "Easy"}
                  ],
                  "depthStudyComponents": ["Defining research question"],
                  "examples": ["Investigable: Does temperature affect the rate of reaction between vinegar and baking soda?", "Non-investigable: What is the best type of renewable energy?"],
                  "media": ["media/investigable_sort_activity.html"],
                  "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                {
                  "nodeId": "DS5_N2",
                  "description": "Explain how scientific knowledge is verified and refined through a cyclical process involving hypothesis testing, experimentation/observation, data analysis, peer review, and replication.",
                  "type": "concept",
                  "bloomTaxonomyLevel": "Understand",
                  "difficulty": 3,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "Nature of Science",
                  "literacySkills": ["Explain complex process", "Sequence stages", "Understand feedback loops"],
                  "numeracySkills": ["Understand role of statistical analysis"],
                  "prerequisiteNodes": ["DS4_N10", "DS4_N13"],
                  "misconceptions": [
                    "Science proves things with absolute certainty.",
                    "Peer review guarantees correctness.",
                    "Once published, scientific knowledge is fixed and never changes."
                  ],
                  "cognitiveLoad": {"intrinsic": 3,"extraneous": 1,"germane": 3,"band": 3},
                  "spacingParameter": 14,
                  "retrievalQuestionTemplates": [
                    "What is the role of peer review in science?",
                    "How does experimentation help refine scientific understanding?",
                    "Why is replication important in verifying scientific findings?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Focus-context",
                    "interactionPattern": "Narrative-stepper",
                    "focusContext": "Animated flowchart illustrating the iterative scientific method, emphasizing testing, analysis, peer review, and refinement loops."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Misunderstanding peer review",
                    "hintType": "Explain peer review as critical evaluation by experts focusing on methodology and interpretation, not just agreement."
                  },
                  "resourceMeta": {
                    "mediaType": "animation/interactive diagram",
                    "readingLevel": "Year 9",
                    "accessibilityFeatures": ["altText", "clearLayout", "captions", "transcript"]
                  },
                   "examQuestionsLinked": [
                      {"id": "EQ_DS5N2_1", "description": "Describe the key stages involved in the verification and refinement of scientific knowledge.", "difficultyEstimate": "Medium"}
                  ],
                  "depthStudyComponents": ["Understanding scientific process"],
                  "examples": ["The decades-long process refining understanding of atomic structure.", "Ongoing refinement of climate models as more data becomes available and computing power increases.", "Verification of the efficacy of vaccines through multiple trials and peer review."],
                  "media": ["media/scientific_verification_flowchart.svg"],
                  "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                 {
                  "nodeId": "DS5_N3",
                  "description": "Develop and apply criteria (e.g., Currency, Relevance, Authority, Accuracy, Purpose - CRAAP test or similar) to evaluate the validity and reliability of scientific information presented online.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Apply",
                  "difficulty": 3,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "SC5-WS-06 Analysing data and information",
                  "workingScientificallyOutcomes": ["SC5-WS-06"],
                  "literacySkills": ["Evaluate sources", "Identify bias", "Synthesise information", "Apply framework"],
                  "numeracySkills": [],
                  "prerequisiteNodes": ["DS4_N1", "DS5_N2"],
                  "misconceptions": [
                    "A professional-looking website guarantees reliability.",
                    "Wikipedia is suitable as a primary scientific source.",
                    ".org or .edu domains automatically mean unbiased, accurate information."
                  ],
                  "cognitiveLoad": {"intrinsic": 3,"extraneous": 1,"germane": 3,"band": 3},
                  "spacingParameter": 10,
                  "retrievalQuestionTemplates": [
                    "List the five components of the CRAAP test for evaluating sources.",
                    "Evaluate this [sample website link] using the CRAAP criteria.",
                    "Why is considering the 'Purpose' of a website important for evaluating its reliability?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Layering-separation",
                    "interactionPattern": "Interactive checklist/rubric",
                    "focusContext": "Students apply a digital CRAAP test checklist (with guiding questions) to evaluate sample online science articles/websites."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Difficulty applying a specific criterion (e.g., Authority)",
                    "hintType": "Provide guiding questions: 'Who wrote this? What are their qualifications? Is this their area of expertise?'"
                  },
                  "resourceMeta": {
                    "mediaType": "interactive activity/web tool",
                    "readingLevel": "Year 9",
                    "accessibilityFeatures": ["keyboardNavigation", "clearInstructions", "toolTips"]
                  },
                   "examQuestionsLinked": [
                      {"id": "EQ_DS5N3_1", "description": "You find an online article claiming a new miracle cure. Describe the steps you would take and the criteria you would use to evaluate its credibility.", "difficultyEstimate": "Medium"}
                  ],
                  "depthStudyComponents": ["Literature review", "Evaluating sources"],
                  "examples": ["Applying CRAAP test to a blog post vs. a peer-reviewed journal article found online.", "Comparing information on climate change from NASA website vs. an opinion piece."],
                  "media": ["media/evaluate_online_source_activity.html"],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + Information Literacy standards",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                 {
                  "nodeId": "DS5_N4",
                  "description": "Identify scientific claims presented in various media (news, ads, social media) and determine if they are formulated in a way that is specific, measurable, and potentially testable through scientific investigation.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Analyse",
                  "difficulty": 3,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "SC5-WS-02 Questioning and predicting",
                  "workingScientificallyOutcomes": ["SC5-WS-02"],
                  "literacySkills": ["Identify claims", "Analyse language for specificity", "Determine testability"],
                  "numeracySkills": ["Recognise measurable aspects"],
                  "prerequisiteNodes": ["DS5_N1"],
                  "misconceptions": [
                    "All claims made in science news articles are scientifically testable as stated.",
                    "Vague or subjective claims (e.g., 'better', 'healthier') are scientifically testable without refinement."
                  ],
                  "cognitiveLoad": {"intrinsic": 3,"extraneous": 1,"germane": 3,"band": 3},
                  "spacingParameter": 10,
                  "retrievalQuestionTemplates": [
                    "Identify the main scientific claim in this [news headline/advertisement].",
                    "Is the claim 'Product X makes you feel better' scientifically testable as written? Why/why not?",
                    "Reword this vague claim '[vague claim]' to make it more testable."
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Focus-context",
                    "interactionPattern": "Annotation tool",
                    "focusContext": "Students highlight claims in sample media texts and evaluate testability using criteria (specific, measurable)."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Difficulty distinguishing testable vs. non-testable claims",
                    "hintType": "Provide examples: 'Increases speed by 5%' (Testable) vs. 'Works wonders' (Non-testable)."
                  },
                  "resourceMeta": {
                    "mediaType": "interactive text analysis",
                    "readingLevel": "Year 9",
                    "accessibilityFeatures": ["keyboardNavigation", "screenReaderFriendly", "highlighting"]
                  },
                  "examQuestionsLinked": [
                      {"id": "EQ_DS5N4_1", "description": "Analyse the following advertisement claim: [...]. Is it scientifically testable? Explain your reasoning.", "difficultyEstimate": "Medium"}
                  ],
                  "depthStudyComponents": ["Hypothesis formulation", "Refining research question"],
                  "examples": ["Testable: 'This toothpaste whitens teeth by 3 shades in 2 weeks'. Non-testable: 'This crystal promotes positive vibes'. Vague requiring refinement: 'Organic food is healthier'." ],
                  "media": ["media/claim_analysis_activity.html"],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME Review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                 {
                  "nodeId": "DS5_N5",
                  "description": "Explain how specific evidence (data, observations from investigations) logically supports or refutes a scientific claim, outlining the reasoning (the 'because' or 'how') that connects them.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Understand",
                  "difficulty": 3,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "SC5-WS-08 Communicating; SC5-WS-06 Analysing data",
                  "workingScientificallyOutcomes": ["SC5-WS-08", "SC5-WS-06"],
                  "literacySkills": ["Explain reasoning", "Link evidence to claim", "Structure explanation logically"],
                  "numeracySkills": ["Interpret data as evidence"],
                  "prerequisiteNodes": ["DS5_N4", "DS4_N14"],
                   "misconceptions": [
                    "Just stating the data = explaining the reasoning.",
                    "Correlation equals causation in reasoning.",
                    "Ignoring contradictory evidence is okay when supporting a claim."
                  ],
                  "cognitiveLoad": {"intrinsic": 3,"extraneous": 1,"germane": 3,"band": 3},
                  "spacingParameter": 14,
                  "retrievalQuestionTemplates": [
                    "Explain the reasoning that links this data [graph/table] to the claim that [claim].",
                    "How does the evidence [specific observation] support the claim?",
                    "Does this data [contradictory data] refute the claim [claim]? Explain the reasoning."
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Layering-separation",
                    "interactionPattern": "Interactive argument map (Claim-Evidence-Reasoning)",
                    "focusContext": "Tool allowing students to explicitly link specific data points (Evidence) to a central Claim via connecting Reasoning statements."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Weak or missing reasoning link",
                    "hintType": "Prompt with 'How does this data show that the claim is true/false?' or provide sentence starters: 'The data shows [evidence], which supports/refutes the claim because [reasoning]...'"
                  },
                  "resourceMeta": {
                    "mediaType": "interactive tool/template",
                    "readingLevel": "Year 9",
                    "accessibilityFeatures": ["keyboardAccess", "toolTips", "structuredInput"]
                  },
                  "examQuestionsLinked": [
                      {"id": "EQ_DS5N5_1", "description": "A study found X. Explain how this evidence supports the claim Y.", "difficultyEstimate": "Medium"}
                  ],
                  "depthStudyComponents": ["Discussion of results", "Forming conclusions", "Justifying conclusions"],
                  "examples": ["Claim: Increased CO2 causes warming. Evidence: Graph shows CO2 levels and global temperatures rising together over time. Reasoning: CO2 is a greenhouse gas that traps heat, therefore higher concentrations lead to higher temperatures."],
                  "media": ["media/CER_mapping_tool.html"],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME Review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                 {
                  "nodeId": "DS5_N6",
                  "description": "Construct a concise written scientific argument using the Claim-Evidence-Reasoning (CER) structure: state a clear claim, provide relevant supporting evidence, and articulate the reasoning linking them.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Apply",
                  "difficulty": 4,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "SC5-WS-08 Communicating",
                  "workingScientificallyOutcomes": ["SC5-WS-08"],
                  "literacySkills": ["Structure argument (CER)", "Use precise scientific language", "Write persuasively and logically", "Synthesise information"],
                  "numeracySkills": ["Present quantitative evidence clearly"],
                  "prerequisiteNodes": ["DS5_N5"],
                  "misconceptions": [
                    "A strong opinion constitutes a scientific argument.",
                    "Listing facts without connection is an argument.",
                    "Scientific arguments don't need to address potential weaknesses."
                  ],
                  "cognitiveLoad": {"intrinsic": 4,"extraneous": 1,"germane": 4,"band": 4},
                  "spacingParameter": 14,
                  "retrievalQuestionTemplates": [
                    "Write a CER paragraph arguing for/against [simple scientific claim] using this provided data [data].",
                    "Identify the Claim, Evidence, and Reasoning in this sample scientific argument.",
                    "Improve this argument [weak argument] by strengthening the reasoning."
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Data-ink ratio",
                    "interactionPattern": "Structured writing template",
                    "focusContext": "Digital or paper template explicitly structured with sections for Claim, Evidence (listing data/observations), and Reasoning."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Missing or weak component (e.g., reasoning)",
                    "hintType": "Provide sentence starters for each CER component or highlight the missing section."
                  },
                  "resourceMeta": {
                    "mediaType": "worksheet/digital template",
                    "readingLevel": "Year 9",
                    "accessibilityFeatures": ["clearInstructions", "spellCheck", "structuredFields"]
                  },
                   "examQuestionsLinked": [
                      {"id": "EQ_DS5N6_1", "description": "Based on the provided experimental results, construct a scientific argument about [...], using the CER framework.", "difficultyEstimate": "Hard"}
                  ],
                  "depthStudyComponents": ["Writing discussion/conclusion", "Presenting findings", "Scientific report writing"],
                  "examples": ["Argument for handwashing: Claim - Washing hands reduces germ transmission. Evidence - Studies show lower illness rates in groups practicing regular handwashing; swabs show fewer bacteria after washing. Reasoning - Soap and water physically remove and kill pathogens, preventing their spread."],
                  "media": ["media/CER_template.docx"],
                  "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + Writing Guide + SME Review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                 {
                  "nodeId": "DS5_N7",
                  "description": "Explain the distinction between science (systematic, evidence-based, testable, falsifiable, peer-reviewed) and pseudoscience (lacks rigorous methodology, often relies on belief/anecdote, avoids falsification, lacks peer review).",
                  "type": "concept",
                  "bloomTaxonomyLevel": "Understand",
                  "difficulty": 2,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "Nature of Science",
                  "literacySkills": ["Compare and contrast", "Define key terms accurately", "Identify defining characteristics"],
                  "numeracySkills": [],
                  "prerequisiteNodes": ["DS4_N4"],
                   "misconceptions": [
                    "Pseudoscience is harmless.",
                    "If something has been believed for a long time, it must be scientific.",
                    "Pseudoscience uses the 'scientific method' but gets wrong answers."
                  ],
                  "cognitiveLoad": {"intrinsic": 2,"extraneous": 1,"germane": 2,"band": 2},
                  "spacingParameter": 10,
                  "retrievalQuestionTemplates": [
                    "List two key differences between science and pseudoscience.",
                    "What does it mean for a scientific claim to be 'falsifiable'?",
                    "Why is reliance on anecdotes a characteristic of pseudoscience?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Layering-separation",
                    "interactionPattern": "Linked-views",
                    "focusContext": "Interactive comparison table contrasting features of science (e.g., Testable) vs. pseudoscience (e.g., Often Untestable) with definitions and examples."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Difficulty differentiating key features",
                    "hintType": "Focus on core concepts: evidence, testability, falsifiability, and peer review."
                  },
                  "resourceMeta": {
                    "mediaType": "text/html interactive table",
                    "readingLevel": "Year 9",
                    "accessibilityFeatures": ["clearLayout", "definitions", "highContrast"]
                  },
                   "examQuestionsLinked": [
                      {"id": "EQ_DS5N7_1", "description": "Explain why astrology is considered a pseudoscience, referring to the characteristics of science.", "difficultyEstimate": "Medium"}
                  ],
                  "depthStudyComponents": ["Critical evaluation of information"],
                  "examples": ["Science: Germ theory, theory of evolution, quantum mechanics. Pseudoscience: Homeopathy, cryptozoology, polygraph testing (often considered pseudoscientific)."],
                  "media": ["media/science_vs_pseudo_comparison.html"],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME Review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                 {
                  "nodeId": "DS5_N8",
                  "description": "Identify common examples of pseudoscientific claims encountered in popular media, advertising, or online platforms.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Apply",
                  "difficulty": 2,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "Nature of Science",
                  "literacySkills": ["Identify claims in context", "Analyse media critically", "Recognise pseudoscientific indicators"],
                  "numeracySkills": [],
                  "prerequisiteNodes": ["DS5_N7"],
                   "misconceptions": [
                    "Testimonials from celebrities are valid scientific evidence.",
                    "Products advertised using complex-sounding ('sciency') language are genuinely scientific.",
                    "If it's 'natural', it must be scientific and safe."
                  ],
                  "cognitiveLoad": {"intrinsic": 2,"extraneous": 2,"germane": 3,"band": 2},
                  "spacingParameter": 7,
                  "retrievalQuestionTemplates": [
                    "Find an example of a pseudoscientific claim in a recent news article or advertisement.",
                    "Why is the claim '[example claim, e.g., crystal healing]' considered pseudoscientific?",
                    "List two red flags that might indicate a claim is pseudoscientific."
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Small-multiples",
                    "interactionPattern": "Interactive gallery",
                    "focusContext": "Curated gallery of real or mock advertisements/headlines/social media posts for students to classify as likely science or pseudoscience, with justifications."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Incorrect classification",
                    "hintType": "Highlight pseudoscientific indicators (e.g., untestable claims, reliance on anecdotes, lack of verifiable evidence, conspiracy tones)."
                  },
                  "resourceMeta": {
                    "mediaType": "interactive activity/gallery",
                    "readingLevel": "Year 9",
                    "accessibilityFeatures": ["altText", "keyboardNavigation", "imageDescriptions"]
                  },
                   "examQuestionsLinked": [
                       {"id": "EQ_DS5N8_1", "description": "Identify and explain two examples of pseudoscience you might encounter online.", "difficultyEstimate": "Easy"}
                  ],
                  "depthStudyComponents": ["Evaluating claims in research"],
                  "examples": ["Astrology forecasts, miracle weight-loss supplements, devices claiming to block 'harmful' EMFs, flat-Earth theories promoted online, unsubstantiated 'detox' diets."],
                  "media": ["media/pseudo_claims_gallery.html"],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME Review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                {
                  "nodeId": "DS5_N9",
                  "description": "Investigate and explain common techniques used to distort data or its interpretation, such as cherry-picking evidence, using misleading graph scales (e.g., truncated axes), inappropriate graph types, or confusing correlation with causation.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Analyse",
                  "difficulty": 4,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "SC5-WS-06 Analysing data and information",
                  "workingScientificallyOutcomes": ["SC5-WS-06"],
                  "literacySkills": ["Analyse critically", "Identify manipulation techniques", "Explain impact of distortion"],
                  "numeracySkills": ["Interpret graphs critically", "Identify misleading statistics/scales", "Understand correlation vs. causation issue"],
                  "prerequisiteNodes": ["DS4_N14", "DS5_N7", "DS5_N16"],
                   "misconceptions": [
                    "Graphs are always neutral representations of data.",
                    "Small distortions don't significantly change the message.",
                    "Presenting only supportive data is good scientific practice."
                  ],
                  "cognitiveLoad": {"intrinsic": 4,"extraneous": 1,"germane": 4,"band": 4},
                  "spacingParameter": 14,
                  "retrievalQuestionTemplates": [
                    "Explain how truncating the Y-axis on a graph can be misleading.",
                    "What is 'cherry-picking' data and why is it problematic?",
                    "Analyse this graph [misleading graph]. Identify and explain the distortion technique used."
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Small-multiples",
                    "interactionPattern": "Linked-views",
                    "focusContext": "Side-by-side comparison: Display the same dataset using an honest graph and a misleading graph (e.g., truncated axis). Allow interaction to manipulate scales and see the effect."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Difficulty identifying distortion technique",
                    "hintType": "Provide a checklist of common techniques (Truncated Y-axis, Non-zero baseline, Cherry-picking data points, Inappropriate graph type, Confusing correlation/causation)."
                  },
                  "resourceMeta": {
                    "mediaType": "interactive simulation/comparison tool",
                    "readingLevel": "Year 10",
                    "accessibilityFeatures": ["altText", "keyboardNavigation", "clearFeedback", "descriptiveLabels"]
                  },
                   "examQuestionsLinked": [
                      {"id": "EQ_DS5N9_1", "description": "Critique the provided graph. Identify any features that might distort the interpretation of the data.", "difficultyEstimate": "Hard"}
                  ],
                  "depthStudyComponents": ["Critical evaluation of data/sources", "Data presentation ethics"],
                  "examples": ["Climate change denial charts truncating axes or cherry-picking short time periods.", "Advertising graphs exaggerating product effectiveness with manipulated scales.", "News reports implying causation from correlational data (e.g., linking video games directly to violence)."],
                  "media": ["media/misleading_graphs_interactive.html"],
                  "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME review + Tufte principles",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                {
                  "nodeId": "DS5_N10",
                  "description": "Evaluate whether a specific assertion, claim, or theory presented in media or elsewhere is pseudoscientific by systematically applying evaluation criteria (e.g., testability, evidence quality, falsifiability, peer review status, logical consistency).",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Evaluate",
                  "difficulty": 4,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "SC5-WS-07 Problem-solving",
                  "workingScientificallyOutcomes": ["SC5-WS-07"],
                  "literacySkills": ["Evaluate claims critically", "Apply framework/criteria", "Justify reasoned judgement", "Synthesise information"],
                  "numeracySkills": ["Assess quantitative claims within the evaluation"],
                  "prerequisiteNodes": ["DS5_N7", "DS5_N8", "DS5_N3"],
                  "misconceptions": [
                    "Using scientific terms makes a claim scientific.",
                    "Widespread belief equates to scientific validity.",
                    "Absence of a scientific explanation automatically validates a pseudoscientific one."
                  ],
                  "cognitiveLoad": {"intrinsic": 4,"extraneous": 1,"germane": 4,"band": 4},
                  "spacingParameter": 21,
                  "retrievalQuestionTemplates": [
                    "Evaluate the claim '[specific pseudoscientific claim, e.g., homeopathy works]' using scientific evaluation criteria.",
                    "Is astrology science or pseudoscience? Justify your evaluation based on evidence and testability.",
                    "Outline the steps you would take to evaluate if a new health trend is based on science or pseudoscience."
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Layering-separation",
                    "interactionPattern": "Interactive rubric/checklist",
                    "focusContext": "Students use a digital tool to evaluate sample claims (e.g., psychic powers, miracle diet) against criteria for science vs. pseudoscience, providing justifications."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Superficial evaluation or incorrect justification",
                    "hintType": "Prompt student to explicitly address each criterion: 'What testable evidence exists? Is it falsifiable? Has it been peer-reviewed? Are the claims logical?'"
                  },
                  "resourceMeta": {
                    "mediaType": "interactive activity/case study evaluator",
                    "readingLevel": "Year 10",
                    "accessibilityFeatures": ["keyboardNavigation", "clearInstructions", "structuredResponse"]
                  },
                   "examQuestionsLinked": [
                      {"id": "EQ_DS5N10_1", "description": "A magazine promotes a new 'energy balancing' bracelet. Evaluate whether this claim is likely scientific or pseudoscientific, justifying your answer with specific criteria.", "difficultyEstimate": "Hard"}
                  ],
                  "depthStudyComponents": ["Critical evaluation of information", "Literature review analysis"],
                  "examples": ["Evaluating claims about the effectiveness of homeopathy using criteria like evidence base and plausibility.", "Assessing ancient astronaut theories based on testability and alternative explanations.", "Evaluating detox tea claims against scientific understanding of physiology."],
                  "media": ["media/pseudoscience_evaluator.html"],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                {
                  "nodeId": "DS5_N11",
                  "description": "Define 'large datasets' (often termed Big Data) and outline their key distinguishing features (e.g., Volume, Velocity, Variety, Veracity, Value - the '5 Vs'), common collection methods (sensors, transactions, social media), and typical scientific applications.",
                  "type": "definition",
                  "bloomTaxonomyLevel": "Remember",
                  "difficulty": 2,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": null,
                  "literacySkills": ["Define technical terms", "Identify characteristics", "List examples", "Categorise methods/applications"],
                  "numeracySkills": ["Appreciate concepts of scale (Volume, Velocity)"],
                  "prerequisiteNodes": ["DS4_N1"],
                  "misconceptions": [
                    "Big data is defined only by its size (Volume).",
                    "All data within large datasets is accurate and reliable (Veracity issues).",
                    "Big data is only generated by computers.",
                    "Value of big data is automatic, not derived through analysis."
                  ],
                  "cognitiveLoad": {"intrinsic": 2,"extraneous": 1,"germane": 2,"band": 2},
                  "spacingParameter": 7,
                  "retrievalQuestionTemplates": [
                    "Define 'Big Data' using at least three of the '5 Vs'.",
                    "List two methods used to collect large datasets in science.",
                    "Give one example of how large datasets are used in a scientific field."
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "High data-ink ratio",
                    "interactionPattern": "Hover tooltip definitions",
                    "focusContext": "Infographic visually explaining the 5 Vs (Volume, Velocity, Variety, Veracity, Value) with icons and concise definitions relevant to science."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Confusing or forgetting the 5 Vs",
                    "hintType": "Provide mnemonic (e.g., VVVVV) or short definitions for each V."
                  },
                  "resourceMeta": {
                    "mediaType": "infographic/text",
                    "readingLevel": "Year 9",
                    "accessibilityFeatures": ["altText", "clearLayout", "definitions"]
                  },
                   "examQuestionsLinked": [
                      {"id": "EQ_DS5N11_1", "description": "Describe three characteristics that define large datasets (Big Data).", "difficultyEstimate": "Easy"}
                  ],
                  "depthStudyComponents": ["Understanding data sources", "Context for data analysis"],
                  "examples": ["Genomics (High Volume, Variety)", "Climate modelling (High Volume, Velocity, Variety)", "Particle physics experiments (High Volume, Velocity)", "Social media trend analysis (High Velocity, Variety, potential Veracity issues)", "Astronomy sky surveys (High Volume)"],
                  "media": ["media/big_data_5vs_infographic.svg"],
                  "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + Industry definitions + SME review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                {
                  "nodeId": "DS5_N12",
                  "description": "Identify and access suitable large datasets from reputable sources (e.g., CSIRO Data Access Portal, Bureau of Meteorology, ABS, international repositories like NASA/NOAA) to formulate a specific, testable scientific question relevant to the dataset's scope.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Apply",
                  "difficulty": 3,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "SC5-WS-02 Questioning and predicting",
                  "workingScientificallyOutcomes": ["SC5-WS-02"],
                  "literacySkills": ["Formulate specific questions", "Interpret dataset descriptions/metadata", "Navigate data portals"],
                  "numeracySkills": ["Identify relevant variables", "Assess data suitability for question"],
                  "prerequisiteNodes": ["DS5_N1", "DS5_N11"],
                  "misconceptions": [
                    "Any question can be answered if the dataset is 'big' enough.",
                    "The question must be formulated only after seeing all the data.",
                    "Finding relevant large datasets is always straightforward."
                  ],
                  "cognitiveLoad": {"intrinsic": 3,"extraneous": 2,"germane": 3,"band": 3},
                  "spacingParameter": 14,
                  "retrievalQuestionTemplates": [
                    "Browse the [BoM climate data portal]. Formulate a testable question about rainfall patterns.",
                    "What kind of scientific question could you investigate using Australian census data (ABS)?",
                    "Formulate a question answerable by the [specific dataset description provided]."
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Focus-context",
                    "interactionPattern": "Interactive exploration tool with guided questioning",
                    "focusContext": "Provide links to reputable data portals/repositories, descriptions of sample large datasets, and a structured template for formulating testable questions based on available variables."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Formulating a question not answerable by the identified dataset",
                    "hintType": "Prompt student to check the dataset's metadata: 'What variables are actually included? What time period does it cover? What geographic area?'"
                  },
                  "resourceMeta": {
                    "mediaType": "web links/interactive form/metadata viewer",
                    "readingLevel": "Year 9",
                    "accessibilityFeatures": ["clearInstructions", "linksDescribed", "searchFunctionality"]
                  },
                   "examQuestionsLinked": [
                       {"id": "EQ_DS5N12_1", "description": "Suggest a reputable source for large datasets related to Australian air quality and formulate a testable question using that potential data.", "difficultyEstimate": "Medium"}
                  ],
                  "depthStudyComponents": ["Developing research question", "Identifying data sources", "Planning investigation"],
                  "examples": ["Using BoM data: 'Is there a statistically significant difference in the average maximum temperature between coastal and inland NSW locations over the past 20 years?'", "Using CSIRO Atlas of Living Australia: 'Is the observed distribution of koalas correlated with specific types of eucalyptus forests?'"],
                  "media": ["media/data_portal_explorer.html"],
                  "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME Review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                 {
                  "nodeId": "DS5_N13",
                  "description": "Conduct a basic descriptive statistical analysis of a relevant large dataset using digital tools (e.g., spreadsheet software like Excel/Google Sheets), calculating and interpreting measures of central tendency (mean, median, mode) and spread (range, interquartile range).",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Apply",
                  "difficulty": 3,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "SC5-WS-05 Processing data and information",
                  "workingScientificallyOutcomes": ["SC5-WS-05"],
                  "literacySkills": ["Use digital tools effectively", "Interpret statistical terms correctly", "Follow procedural steps"],
                  "numeracySkills": ["Use spreadsheet functions (AVERAGE, MEDIAN, MODE, MAX, MIN, QUARTILE.INC)", "Calculate descriptive statistics accurately", "Handle large numbers/datasets", "Select appropriate measures"],
                  "prerequisiteNodes": ["DS4_N12", "DS5_N11"],
                  "misconceptions": [
                    "Mean is always the most representative measure (sensitive to outliers).",
                    "Descriptive statistics alone can prove hypotheses.",
                    "Requires advanced programming (spreadsheets are sufficient here)."
                  ],
                  "cognitiveLoad": {"intrinsic": 3,"extraneous": 2,"germane": 3,"band": 3},
                  "spacingParameter": 10,
                  "retrievalQuestionTemplates": [
                    "Calculate the mean, median, mode and range for the '[variable]' column in this dataset [link/subset] using a spreadsheet.",
                    "When might the median be a better measure of central tendency than the mean?",
                    "What does the interquartile range (IQR) tell you about data spread?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Layering-separation",
                    "interactionPattern": "Screencast tutorial + practice dataset",
                    "focusContext": "Video demonstrating how to use common spreadsheet functions (AVERAGE, MEDIAN, MODE, MAX, MIN, QUARTILE) on a sample large dataset, with accompanying practice file."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Incorrect spreadsheet function usage or calculation",
                    "hintType": "Show correct function syntax with explanation, or link to spreadsheet help documentation for that function."
                  },
                  "resourceMeta": {
                    "mediaType": "video tutorial/spreadsheet file",
                    "readingLevel": "Year 9",
                    "accessibilityFeatures": ["captions", "transcript", "taggedPDF", "clearLabels"]
                  },
                  "examQuestionsLinked": [
                      {"id": "EQ_DS5N13_1", "description": "Given the following dataset [...], use spreadsheet functions to calculate the mean, median and range.", "difficultyEstimate": "Medium"}
                  ],
                  "depthStudyComponents": ["Data processing and analysis", "Using digital tools"],
                  "examples": ["Calculating average monthly rainfall from BoM data.", "Finding the median household income from ABS census data.", "Determining the range and IQR of reaction times from a large psychology experiment dataset."],
                  "media": ["media/spreadsheet_stats_tutorial.mp4", "media/practice_dataset.xlsx"],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + Numeracy Guide + SME Review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                 {
                  "nodeId": "DS5_N14",
                  "description": "Explain the benefits of using descriptive statistical analysis (summarising central tendency and spread) and appropriate graphical representations for identifying patterns, trends, and communicating key findings from large datasets effectively.",
                  "type": "concept",
                  "bloomTaxonomyLevel": "Understand",
                  "difficulty": 2,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "SC5-WS-06 Analysing data and information; SC5-WS-08 Communicating",
                  "workingScientificallyOutcomes": ["SC5-WS-06", "SC5-WS-08"],
                  "literacySkills": ["Explain benefits and purpose", "Communicate value of summaries", "Relate analysis to communication"],
                  "numeracySkills": ["Understand purpose of statistics and graphs", "Appreciate data reduction"],
                  "prerequisiteNodes": ["DS5_N13"],
                   "misconceptions": [
                    "Presenting raw data tables is the clearest way to communicate.",
                    "Statistics obscure the real information.",
                    "Graphs are just decorative elements."
                  ],
                  "cognitiveLoad": {"intrinsic": 2,"extraneous": 1,"germane": 2,"band": 2},
                  "spacingParameter": 7,
                  "retrievalQuestionTemplates": [
                    "Why are summary statistics like the mean useful when dealing with large datasets?",
                    "How can a graph help communicate a pattern found in data more effectively than a table?",
                    "List two benefits of using descriptive statistics."
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Focus-context",
                    "interactionPattern": "Linked-views",
                    "focusContext": "Interactive display showing a large raw dataset table alongside its calculated summary statistics and a relevant graph (e.g., histogram). Highlighting how the summaries and graph make overall patterns much clearer."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Struggling to articulate the benefit of summaries",
                    "hintType": "Use analogy: 'Trying to understand a crowd by looking at every single person vs. getting an average height and age range.' Summaries provide the big picture."
                  },
                  "resourceMeta": {
                    "mediaType": "interactive demonstration/comparison",
                    "readingLevel": "Year 9",
                    "accessibilityFeatures": ["altText", "clearLayout", "captions"]
                  },
                   "examQuestionsLinked": [
                      {"id": "EQ_DS5N14_1", "description": "Explain why scientists often use graphs and summary statistics when presenting findings from large datasets.", "difficultyEstimate": "Easy"}
                  ],
                  "depthStudyComponents": ["Justifying analysis methods", "Communicating findings effectively"],
                  "examples": ["Using average global temperature trend lines makes climate change patterns obvious.", "Graphing species distribution data reveals hotspots quickly.", "Median income statistics provide a clearer picture of typical earnings than thousands of individual salaries."],
                  "media": ["media/benefit_of_summaries.html"],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME Review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                 {
                  "nodeId": "DS5_N15a",
                  "description": "Conduct a simple univariate (one variable) analysis on a large dataset using digital tools, creating appropriate visualisations (e.g., histogram, box plot) and interpreting the resulting distribution.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Apply",
                  "difficulty": 3,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "SC5-WS-05 Processing data; SC5-WS-06 Analysing data",
                  "workingScientificallyOutcomes": ["SC5-WS-05", "SC5-WS-06"],
                  "literacySkills": ["Use digital tools", "Interpret visualisations", "Describe distributions (shape, center, spread)"],
                  "numeracySkills": ["Create histograms/box plots", "Read graph scales", "Interpret distribution shape (e.g., skewed, normal)"],
                  "prerequisiteNodes": ["DS5_N13"],
                  "misconceptions": [
                    "Univariate analysis shows relationships between variables.",
                    "The shape of a histogram doesn't provide useful information.",
                    "Box plots only show the median."
                  ],
                  "cognitiveLoad": {"intrinsic": 3,"extraneous": 2,"germane": 3,"band": 3},
                  "spacingParameter": 14,
                  "retrievalQuestionTemplates": [
                    "Create a histogram for this data column [data]. Describe the shape of the distribution.",
                    "Generate a box plot for this data [data]. What does it tell you about the spread?",
                    "What type of graph is best for showing the distribution of a single numerical variable?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Small-multiples",
                    "interactionPattern": "Interactive data visualisation tool",
                    "focusContext": "Tool allowing students to select a single variable from a dataset and generate corresponding histograms or box plots, with prompts for interpretation."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Difficulty interpreting graph shape or features",
                    "hintType": "Provide examples of different distribution shapes (normal, skewed left/right, uniform) or explain features of a box plot (median, quartiles, whiskers, outliers)."
                  },
                  "resourceMeta": {
                    "mediaType": "interactive tool/spreadsheet",
                    "readingLevel": "Year 10",
                    "accessibilityFeatures": ["keyboardNavigation", "toolTips", "clearLabels", "altText"]
                  },
                   "examQuestionsLinked": [
                      {"id": "EQ_DS5N15a_1", "description": "Create a histogram for the provided data on student heights and describe the distribution.", "difficultyEstimate": "Medium"}
                  ],
                  "depthStudyComponents": ["Data analysis", "Data visualisation"],
                  "examples": ["Histogram of rainfall amounts per month to see seasonal distribution.", "Box plot of student test scores to see spread and identify potential outliers."],
                  "media": ["media/univariate_vis_tool.html"],
                  "analyticsMeta": {
                    "source": "Refined based on recommendation to split original N15.",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                 {
                  "nodeId": "DS5_N15b",
                  "description": "Conduct a simple bivariate (two variables) analysis on a large dataset using digital tools, creating appropriate visualisations (e.g., scatter plot) and identifying potential visual correlations or relationships.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Apply",
                  "difficulty": 4,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "SC5-WS-05 Processing data; SC5-WS-06 Analysing data",
                  "workingScientificallyOutcomes": ["SC5-WS-05", "SC5-WS-06"],
                  "literacySkills": ["Use digital tools", "Interpret visualisations", "Describe relationships (positive, negative, no correlation)"],
                  "numeracySkills": ["Create scatter plots", "Identify correlations visually", "Read coordinates"],
                  "prerequisiteNodes": ["DS5_N13", "DS5_N15a"],
                   "misconceptions": [
                    "A scatter plot can only show a few data points.",
                    "All bivariate relationships must be linear.",
                    "Visual correlation on a scatter plot proves causation."
                  ],
                  "cognitiveLoad": {"intrinsic": 4,"extraneous": 2,"germane": 4,"band": 4},
                  "spacingParameter": 14,
                  "retrievalQuestionTemplates": [
                    "Create a scatter plot for these two variables [data1, data2]. Describe the relationship you observe.",
                    "What does a positive correlation look like on a scatter plot?",
                    "Can a scatter plot show no relationship between two variables? Explain."
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Focus-context",
                    "interactionPattern": "Interactive data visualisation tool",
                    "focusContext": "Tool allowing students to select two variables from a dataset and generate a corresponding scatter plot, with prompts for describing the correlation."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Difficulty identifying or describing correlation",
                    "hintType": "Show examples of positive, negative, and no correlation scatter plots. Provide descriptive terms (strong/weak, positive/negative, linear/non-linear)."
                  },
                  "resourceMeta": {
                    "mediaType": "interactive tool/spreadsheet",
                    "readingLevel": "Year 10",
                    "accessibilityFeatures": ["keyboardNavigation", "toolTips", "clearLabels", "altText"]
                  },
                   "examQuestionsLinked": [
                      {"id": "EQ_DS5N15b_1", "description": "Create a scatter plot for the provided data on study time vs. test score. Describe the relationship shown.", "difficultyEstimate": "Medium"}
                  ],
                  "depthStudyComponents": ["Data analysis", "Data visualisation", "Identifying relationships"],
                  "examples": ["Scatter plot of temperature vs. ice cream sales to identify correlation.", "Scatter plot of latitude vs. species diversity.", "Scatter plot of study hours vs. exam scores."],
                  "media": ["media/bivariate_vis_tool.html"],
                   "analyticsMeta": {
                    "source": "Refined based on recommendation to split original N15.",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                 {
                  "nodeId": "DS5_N16",
                  "description": "Recognise and critically explain the difference between correlation (a statistical relationship where variables tend to move together) and causation (where a change in one variable directly causes a change in another), identifying potential confounding factors.",
                  "type": "concept",
                  "bloomTaxonomyLevel": "Understand",
                  "difficulty": 3, # Adjusted from 4 based on split N15
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "SC5-WS-06 Analysing data and information",
                  "workingScientificallyOutcomes": ["SC5-WS-06"],
                  "literacySkills": ["Explain distinction clearly", "Define key terms accurately", "Identify examples/counterexamples", "Critical thinking"],
                  "numeracySkills": ["Interpret correlation critically", "Understand logical fallacies"],
                  "prerequisiteNodes": ["DS5_N15b"],
                  "misconceptions": [
                    "Strong correlation always proves causation.",
                    "If B happens after A, A must have caused B (post hoc fallacy).",
                    "Confounding factors are rare in real-world data."
                  ],
                  "cognitiveLoad": {"intrinsic": 3,"extraneous": 1,"germane": 3,"band": 3}, # Adjusted from 4
                  "spacingParameter": 14,
                  "retrievalQuestionTemplates": [
                    "In your own words, explain 'correlation does not necessarily imply causation'.",
                    "Give an example of two variables that are correlated but one does not cause the other.",
                    "What is a 'confounding factor' and why is it important?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Small-multiples",
                    "interactionPattern": "Linked-views",
                    "focusContext": "Display scatter plots showing strong correlation (e.g., ice cream sales vs. crime rate). Provide text/diagram explaining the confounding variable (e.g., hot weather influences both)."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Incorrectly assuming causation from correlation example",
                    "hintType": "Prompt student to brainstorm other factors ('What else could cause both X and Y to increase?') or provide the confounding variable."
                  },
                  "resourceMeta": {
                    "mediaType": "text/html with interactive graphs/diagrams",
                    "readingLevel": "Year 10",
                    "accessibilityFeatures": ["altText", "clearLayout", "definitions"]
                  },
                   "examQuestionsLinked": [
                      {"id": "EQ_DS5N16_1", "description": "A graph shows a strong positive correlation between shoe size and reading ability in children. Does this mean larger feet cause better reading? Explain.", "difficultyEstimate": "Medium"}
                  ],
                  "depthStudyComponents": ["Critical evaluation of results", "Drawing valid conclusions", "Understanding limitations"],
                  "examples": ["Correlation: Ice cream sales and drowning incidents (confounding factor: summer weather).", "Correlation: Number of storks and human birth rate in some areas (confounding factors: rural vs urban development affecting both)."],
                  "media": ["media/correlation_vs_causation_examples.html"],
                  "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                {
                  "nodeId": "DS5_N17",
                  "description": "Explore and explain the crucial role of large datasets and rigorous statistical analysis in validating significant scientific findings and building confidence in scientific theories, citing relevant historical or contemporary examples.",
                  "type": "concept",
                  "bloomTaxonomyLevel": "Understand",
                  "difficulty": 3,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "Nature of Science",
                  "literacySkills": ["Explain role and importance", "Cite supporting examples", "Summarise complex findings", "Connect data to theory validation"],
                  "numeracySkills": ["Appreciate role of statistics in validation", "Understand concept of statistical significance"],
                  "prerequisiteNodes": ["DS5_N11", "DS5_N13", "DS5_N14"],
                  "misconceptions": [
                    "A single groundbreaking experiment is enough to validate a major theory.",
                    "Statistical analysis is only necessary for 'weak' results.",
                    "Historical scientific validation didn't rely on quantitative data analysis."
                  ],
                  "cognitiveLoad": {"intrinsic": 3,"extraneous": 2,"germane": 3,"band": 3},
                  "spacingParameter": 14,
                  "retrievalQuestionTemplates": [
                    "How did analysing large amounts of data help validate the theory of [example, e.g., plate tectonics]?",
                    "Why is statistical analysis often essential for validating claims based on large datasets?",
                    "Give an example where analysing large datasets led to a major scientific discovery or validation."
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Layering-separation",
                    "interactionPattern": "Narrative-stepper",
                    "focusContext": "Interactive case study presentation (e.g., Mendel's inheritance patterns) showing initial hypothesis, large-scale data collection, statistical analysis revealing ratios, and eventual validation/acceptance of the theory."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Difficulty connecting statistical analysis to theory validation",
                    "hintType": "Explain how statistics help determine if observed patterns are real or just due to random chance, thus strengthening the evidence for a theory."
                  },
                  "resourceMeta": {
                    "mediaType": "interactive case study/text",
                    "readingLevel": "Year 10",
                    "accessibilityFeatures": ["clearStructure", "summaries", "altText", "captions"]
                  },
                   "examQuestionsLinked": [
                       {"id": "EQ_DS5N17_1", "description": "Explain the importance of using large datasets and statistical analysis in validating modern scientific theories, such as climate change.", "difficultyEstimate": "Medium"}
                  ],
                  "depthStudyComponents": ["Understanding scientific validation", "Justifying conclusions"],
                  "examples": ["Gregor Mendel's work on inheritance required analysing thousands of pea plants.", "Vera Rubin's validation of dark matter involved analysing the rotation curves of numerous galaxies.", "Validation of climate models relies on comparing simulations against vast historical and ongoing observational datasets."],
                  "media": ["media/validation_case_study_mendel.html"],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                 {
                  "nodeId": "DS5_N18",
                  "description": "Apply data analysis skills and scientific knowledge to evaluate options and make evidence-based decisions regarding a familiar, real-world scientific issue (e.g., sustainability choices, health interventions, technology adoption), assessing potential implications.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Evaluate",
                  "difficulty": 5,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "SC5-WS-07 Problem-solving",
                  "workingScientificallyOutcomes": ["SC5-WS-07"],
                  "literacySkills": ["Analyse complex issue", "Synthesise diverse information", "Justify decision with evidence", "Assess short/long-term implications", "Consider multiple perspectives"],
                  "numeracySkills": ["Apply data analysis to decision-making", "Weigh quantitative evidence", "Risk/benefit assessment"],
                  "prerequisiteNodes": ["DS5_N13", "DS5_N15b", "DS5_N16"],
                  "misconceptions": [
                    "Decisions can be based solely on statistics, ignoring ethical/social factors.",
                    "Data always points to a single, unambiguously 'correct' decision.",
                    "The immediate implications are the only ones that matter."
                  ],
                  "cognitiveLoad": {"intrinsic": 5,"extraneous": 2,"germane": 5,"band": 5},
                  "spacingParameter": 28,
                  "retrievalQuestionTemplates": [
                    "Analyse this data [data on issue, e.g., energy source comparison] to decide the most suitable option for [scenario]. Justify your choice.",
                    "Based on this data [health study data], what are the potential benefits and risks of [intervention]? Justify your assessment.",
                    "Evaluate the potential environmental implications of choosing Product A over Product B, using the provided lifecycle assessment data."
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Focus-context",
                    "interactionPattern": "Interactive case study/decision tree",
                    "focusContext": "Present a real-world scenario (e.g., community energy planning) with relevant datasets (cost, efficiency, environmental impact). Students analyse data, make a recommendation, justify it, and explore simulated consequences."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Difficulty weighing different types of evidence or assessing implications",
                    "hintType": "Provide a decision-making matrix template (options vs. criteria based on data). Prompt consideration of different stakeholder perspectives or timeframes (short vs. long term)."
                  },
                  "resourceMeta": {
                    "mediaType": "interactive simulation/case study",
                    "readingLevel": "Year 10",
                    "accessibilityFeatures": ["clearLayout", "summaries", "keyboardNavigation", "accessibleDataTables"]
                  },
                   "examQuestionsLinked": [
                       {"id": "EQ_DS5N18_1", "description": "Using the provided data on water usage and rainfall, evaluate two different water conservation strategies for a local council and justify your recommendation.", "difficultyEstimate": "Hard"}
                  ],
                  "depthStudyComponents": ["Applying science to real-world problems", "Evaluation and justification", "Ethical considerations"],
                  "examples": ["Analysing local waste audit data to propose the most effective recycling/composting initiative.", "Comparing data on the effectiveness, side effects, and cost of different medical treatments.", "Evaluating data on energy consumption of appliances to make informed consumer choices."],
                  "media": ["media/real_world_decision_scenario.html"],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                {
                  "nodeId": "DS5_N19",
                  "description": "Use graphical representations of data (e.g., scatter plots with trendlines, line graphs) to interpolate (estimate values within the data range) and extrapolate (predict values beyond the data range), clearly acknowledging the assumptions and limitations involved, especially with extrapolation.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Apply",
                  "difficulty": 3,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "SC5-WS-06 Analysing data and information",
                  "workingScientificallyOutcomes": ["SC5-WS-06"],
                  "literacySkills": ["Interpret graphs accurately", "Make reasoned predictions based on trends", "Articulate assumptions/limitations"],
                  "numeracySkills": ["Read graph scales precisely", "Visually or mathematically extrapolate trends", "Interpolate values between points", "Understand uncertainty in prediction"],
                  "prerequisiteNodes": ["DS4_N7", "DS5_N15b"],
                   "misconceptions": [
                    "Extrapolation provides certain future predictions.",
                    "Interpolation is just guessing the value between points.",
                    "Linear trends observed in data will always continue indefinitely."
                  ],
                  "cognitiveLoad": {"intrinsic": 3,"extraneous": 1,"germane": 3,"band": 3},
                  "spacingParameter": 10,
                  "retrievalQuestionTemplates": [
                    "Using this graph [graph with trendline], interpolate the approximate value for Y when X is [x-value within range].",
                    "Extrapolate from this graph [graph with trendline] to predict the approximate value for Y when X is [x-value outside range]. What is a limitation of this prediction?",
                    "Why must extrapolation be treated with more caution than interpolation?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Focus-context",
                    "interactionPattern": "Interactive graph",
                    "focusContext": "Display a graph with plotted data and a calculated line of best fit. Allow users to click/drag along the line to interpolate or extend the line (visually distinct) to extrapolate. Provide feedback on the confidence/limitations, especially for extrapolation."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Extrapolating far beyond the data range without acknowledging limitations",
                    "hintType": "Display warnings about uncertainty. Show examples where trends change direction outside the observed range (e.g., population growth saturation)."
                  },
                   "resourceMeta": {
                    "mediaType": "interactive graph/simulation",
                    "readingLevel": "Year 9",
                    "accessibilityFeatures": ["keyboardNavigation", "altText", "clearLabels", "descriptiveFeedback"]
                  },
                   "examQuestionsLinked": [
                      {"id": "EQ_DS5N19_1", "description": "The graph shows temperature change from 1980-2020. Extrapolate to predict the temperature in 2050 and state one limitation of your prediction.", "difficultyEstimate": "Medium"}
                  ],
                  "depthStudyComponents": ["Data analysis", "Making predictions", "Understanding limitations"],
                  "examples": ["Interpolating the concentration of a solution at a specific time point between measurements on a reaction rate graph.", "Extrapolating plant growth based on early measurements (caution: growth often slows).", "Predicting future sea levels based on historical trend data (caution: rate of change may increase)."],
                  "media": ["media/interpolate_extrapolate_graph.html"],
                  "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + WS Guide + SME Review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                 {
                  "nodeId": "DS5_N20",
                  "description": "Evaluate the strength and limitations of conclusions drawn from scientific data, explicitly considering sources of uncertainty (e.g., measurement error, sampling bias, sample size, data variability/spread) and plausible alternative explanations for the observed patterns.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Evaluate",
                  "difficulty": 4,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "SC5-WS-06 Analysing data and information",
                  "workingScientificallyOutcomes": ["SC5-WS-06"],
                  "literacySkills": ["Evaluate conclusions critically", "Identify and explain sources of uncertainty", "Generate alternative explanations", "Synthesise complex information"],
                  "numeracySkills": ["Understand impact of error and variability on conclusions", "Assess statistical significance intuitively", "Logical reasoning"],
                  "prerequisiteNodes": ["DS4_N13", "DS5_N5", "DS5_N16"],
                   "misconceptions": [
                    "A statistically significant result means the conclusion is absolutely true.",
                    "Uncertainty invalidates any conclusion.",
                    "The first explanation that fits the data is the only possible one."
                  ],
                  "cognitiveLoad": {"intrinsic": 4,"extraneous": 1,"germane": 4,"band": 4},
                  "spacingParameter": 21,
                  "retrievalQuestionTemplates": [
                    "What factors might introduce uncertainty into the conclusions drawn from this experiment [scenario/data]?",
                    "Critically evaluate the conclusion: '[conclusion based on data]'. How confident can we be, and why?",
                    "Suggest an alternative explanation, other than [stated conclusion], for the pattern observed in this data [data/graph]."
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Layering-separation",
                    "interactionPattern": "Interactive critique tool/template",
                    "focusContext": "Present a scientific conclusion based on a dataset. Provide a structured template prompting students to identify specific sources of uncertainty (measurement, sampling, etc.) and brainstorm potential alternative explanations."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Difficulty identifying specific uncertainties or generating alternatives",
                    "hintType": "Provide categories of uncertainty (e.g., 'How was it measured?', 'Who was sampled?', 'How much variation is there?'). Prompt brainstorming with 'Could something else be causing this pattern? What assumptions were made?'"
                  },
                   "resourceMeta": {
                    "mediaType": "case study/interactive critique tool",
                    "readingLevel": "Year 10",
                    "accessibilityFeatures": ["clearLayout", "clearInstructions", "structuredPrompts"]
                  },
                   "examQuestionsLinked": [
                      {"id": "EQ_DS5N20_1", "description": "A study concludes that drinking coffee increases lifespan based on survey data. Evaluate the potential limitations and sources of uncertainty in this conclusion.", "difficultyEstimate": "Hard"}
                  ],
                  "depthStudyComponents": ["Evaluating results and conclusions", "Identifying limitations of investigation", "Suggesting further research"],
                  "examples": ["Evaluating a drug trial conclusion: consider sample size, demographics, measurement of outcomes, placebo effect.", "Evaluating conclusions from climate data: consider measurement uncertainties, model limitations, natural variability.", "Assessing survey results: consider sampling method, question wording bias, response rate."],
                  "media": ["media/evaluate_conclusions_tool.html"],
                  "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                {
                  "nodeId": "DS5_N21",
                  "description": "Develop specific, measurable, and relevant criteria for evaluating potential solutions to an identified scientific problem or for assessing the validity of a contested scientific claim.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Create",
                  "difficulty": 4,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "SC5-WS-07 Problem-solving",
                  "workingScientificallyOutcomes": ["SC5-WS-07"],
                  "literacySkills": ["Identify key factors of problem/claim", "Define clear and unambiguous criteria", "Prioritise criteria if necessary", "Operationalise concepts"],
                  "numeracySkills": ["Consider quantifiable metrics for criteria", "Define thresholds for success"],
                  "prerequisiteNodes": ["DS5_N1", "DS5_N10"],
                   "misconceptions": [
                    "Evaluation criteria are just personal opinions.",
                    "A single criterion is sufficient for complex evaluations.",
                    "Criteria should be developed after solutions are proposed."
                  ],
                  "cognitiveLoad": {"intrinsic": 4,"extraneous": 1,"germane": 4,"band": 4},
                  "spacingParameter": 14,
                  "retrievalQuestionTemplates": [
                    "Develop three specific criteria you would use to evaluate different designs for a solar oven.",
                    "What measurable criteria could be used to assess the claim that 'Exercise improves mood'?",
                    "Why is it important for evaluation criteria to be specific and measurable?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Data-ink ratio",
                    "interactionPattern": "Interactive template/brainstorming tool",
                    "focusContext": "Provide a scientific problem (e.g., reducing plastic waste) or a claim (e.g., effectiveness of a farming technique). Use a structured template (e.g., SMART criteria) for students to brainstorm, refine, and justify evaluation criteria."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Developing criteria that are too vague or not measurable",
                    "hintType": "Prompt with categories (e.g., Effectiveness, Cost, Safety, Sustainability, Feasibility). Suggest using SMART framework (Specific, Measurable, Achievable, Relevant, Time-bound) to refine criteria."
                  },
                   "resourceMeta": {
                    "mediaType": "interactive tool/worksheet",
                    "readingLevel": "Year 10",
                    "accessibilityFeatures": ["clearInstructions", "keyboardAccess", "structuredFields"]
                  },
                   "examQuestionsLinked": [
                       {"id": "EQ_DS5N21_1", "description": "Outline the key criteria you would use to evaluate the success of a program designed to restore a local wetland.", "difficultyEstimate": "Medium"}
                  ],
                  "depthStudyComponents": ["Designing investigations", "Evaluating solutions", "Setting success metrics"],
                  "examples": ["Criteria for evaluating water filter designs: % contaminant removal (Effectiveness), cost per litre (Cost), flow rate (Feasibility), material safety (Safety).", "Criteria for assessing climate change claim validity: Consistency with multiple lines of evidence, predictive power, peer review status, plausibility of mechanism."],
                  "media": ["media/criteria_developer_tool.html"],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                {
                  "nodeId": "DS5_N22",
                  "description": "Evaluate the suitability and effectiveness of different approaches or strategies used to solve a specific scientific problem or analyse a particular dataset, based on pre-defined, relevant criteria.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Evaluate",
                  "difficulty": 4,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "SC5-WS-07 Problem-solving",
                  "workingScientificallyOutcomes": ["SC5-WS-07"],
                  "literacySkills": ["Compare and contrast different approaches", "Evaluate against specific criteria", "Justify assessment logically", "Synthesise pros and cons"],
                  "numeracySkills": ["Assess quantitative performance of approaches", "Compare efficiency/cost-effectiveness"],
                  "prerequisiteNodes": ["DS5_N21"],
                   "misconceptions": [
                    "The newest or most complex approach is always superior.",
                    "Evaluation is simply choosing a personal preference.",
                    "An approach that works in one context is automatically best for all contexts."
                  ],
                  "cognitiveLoad": {"intrinsic": 4,"extraneous": 1,"germane": 4,"band": 4},
                  "spacingParameter": 21,
                  "retrievalQuestionTemplates": [
                    "Evaluate Method A vs. Method B for measuring plant growth, using criteria of accuracy, cost, and ease of use.",
                    "Compare using a controlled experiment versus an observational study to investigate [research question]. Which is more suitable here, and why?",
                    "Assess two different data analysis techniques for this dataset [data], based on their ability to reveal [specific pattern type]."
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Small-multiples",
                    "interactionPattern": "Linked-views",
                    "focusContext": "Present descriptions/simulations of two or more different approaches/strategies. Provide an interactive checklist or rubric based on defined criteria for students to perform the evaluation."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Struggling to systematically compare against criteria",
                    "hintType": "Provide a comparison table structure: Rows = Criteria, Columns = Approaches. Prompt for specific evidence related to each cell."
                  },
                   "resourceMeta": {
                    "mediaType": "case study/comparison tool/interactive rubric",
                    "readingLevel": "Year 10",
                    "accessibilityFeatures": ["clearLayout", "structuredComparison", "keyboardNavigation"]
                  },
                   "examQuestionsLinked": [
                       {"id": "EQ_DS5N22_1", "description": "Evaluate two different methods for purifying water (e.g., filtration vs. distillation) based on effectiveness, speed, and cost.", "difficultyEstimate": "Hard"}
                  ],
                  "depthStudyComponents": ["Evaluating methodologies", "Justifying chosen experimental design", "Refining procedures"],
                  "examples": ["Comparing titration vs. spectroscopy for determining concentration.", "Evaluating different algorithms for analysing genomic data based on speed and accuracy.", "Assessing different sampling techniques (random vs. stratified) for an ecological survey based on representativeness and feasibility."],
                  "media": ["media/approach_evaluation_tool.html"],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                 {
                  "nodeId": "DS5_N23",
                  "description": "Analyse how scientific texts and presentations strategically use evidence, specific language (technical terms, cautious phrasing), structure (e.g., IMRaD), and visual aids to construct arguments, establish authority, and persuade a specific audience.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Analyse",
                  "difficulty": 4,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "SC5-WS-08 Communicating",
                  "workingScientificallyOutcomes": ["SC5-WS-08"],
                  "literacySkills": ["Analyse text structure and rhetoric", "Identify persuasive language/techniques", "Evaluate use of evidence", "Recognise authorial voice/stance", "Critical reading skills"],
                  "numeracySkills": ["Critically evaluate presentation of quantitative data/graphs as evidence"],
                  "prerequisiteNodes": ["DS5_N6", "DS5_N3"],
                   "misconceptions": [
                    "All scientific writing is purely objective and devoid of persuasive elements.",
                    "The structure of a scientific paper is arbitrary.",
                    "Technical jargon is used only to be precise, not sometimes to establish authority."
                  ],
                  "cognitiveLoad": {"intrinsic": 4,"extraneous": 2,"germane": 4,"band": 4},
                  "spacingParameter": 14,
                  "retrievalQuestionTemplates": [
                    "Analyse this [scientific article abstract]. How does the author establish the importance of their research?",
                    "Identify two ways the language used in this [text excerpt] aims to persuade the reader.",
                    "How does the structure of a typical research paper (IMRaD) help build a scientific argument?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Layering-separation",
                    "interactionPattern": "Annotation tool",
                    "focusContext": "Students read excerpts from scientific articles (e.g., abstract, discussion) or popular science writing and use annotation tools to highlight features related to argument construction, evidence use, persuasive language, structure, and authority markers."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Difficulty identifying subtle persuasive techniques or structural elements",
                    "hintType": "Provide a checklist of features to look for: specific word choices (e.g., 'clearly shows' vs. 'suggests'), use of citations, data presentation choices, typical section goals in IMRaD structure."
                  },
                   "resourceMeta": {
                    "mediaType": "interactive text analysis tool/annotated examples",
                    "readingLevel": "Year 10",
                    "accessibilityFeatures": ["keyboardNavigation", "clearInstructions", "textHighlighting"]
                  },
                   "examQuestionsLinked": [
                      {"id": "EQ_DS5N23_1", "description": "Read the provided abstract from a scientific paper. Analyse how the authors construct their argument and establish the significance of their findings.", "difficultyEstimate": "Hard"}
                  ],
                  "depthStudyComponents": ["Literature review skills", "Evaluating scientific communication", "Scientific writing conventions"],
                  "examples": ["Analysing how a paper's Discussion section links results back to the hypothesis.", "Identifying how cautious language ('may suggest', 'further research needed') manages uncertainty.", "Recognising how citing authoritative sources builds credibility.", "Evaluating the effectiveness of graphs used in a presentation."],
                  "media": ["media/sci_text_analysis_tool.html"],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + Writing Guide + SME Review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

  useEffect(() => {
    if (!svgRef.current) return;
    d3.select(svgRef.current).selectAll("*").remove();

    // Canvas
    const width = 800;
    const height = 800;
    const margin = 10;
    const outerRadius = Math.min(width, height) / 2 - margin;
    const innerRadius = outerRadius * 0.15;     // central circle = 15% of full radius
    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", [0, 0, width, height])
      .style("font", "12px sans-serif");

    const g = svg
      .append("g")
      .attr("transform", `translate(${width/2},${height/2})`);

    // Partition layout (x for angles, ignore y)
    const root = d3
      .hierarchy(data)
      .sum((d) => {
        if (d.type === "central")               return 0;
        if (d.type === "inquiry")               return 8;
        if (["skill","concept","definition"].includes(d.type)) return 6;
        if (d.type === "outcome")               return 3;
        return 2;
      })
      .sort((a, b) => b.value - a.value);

    d3.partition().size([2 * Math.PI, root.height + 1])(root);

    // ring width for each depth (levels = root.height+1)
    const levels = root.height + 1;
    const ringWidth = (outerRadius - innerRadius) / levels;

    // scales
    const x = d3.scaleLinear().domain([0, 2 * Math.PI]).range([0, 2 * Math.PI]);

    // arc generator: inner/outer by depth, angles by x(d.x0/x1)
    const arc = d3
      .arc()
      .startAngle((d) => x(d.x0))
      .endAngle((d) => x(d.x1))
      .innerRadius((d) => innerRadius + (d.depth - 1) * ringWidth)
      .outerRadius((d) => innerRadius + d.depth * ringWidth - 1);

    // tooltip
    const tip = d3
      .select(tipRef.current)
      .style("position", "absolute")
      .style("pointer-events", "none")
      .style("padding", "6px 10px")
      .style("background", "#fff")
      .style("border", "1px solid #999")
      .style("border-radius", "4px")
      .style("box-shadow", "0 2px 4px rgba(0,0,0,0.2)")
      .style("opacity", 0);

    function showTip(e, text) {
      tip
        .html(text)
        .style("opacity", 1)
        .style("left", `${e.pageX + 10}px`)
        .style("top", `${e.pageY - 20}px`);
    }
    function moveTip(e) {
      tip.style("left", `${e.pageX + 10}px`).style("top", `${e.pageY - 20}px`);
    }
    function hideTip() {
      tip.style("opacity", 0);
    }

    // draw arcs
    const slices = g
      .append("g")
      .selectAll("path")
      .data(root.descendants().slice(1)) // skip the root itself
      .join("path")
      .attr("fill", (d) => colour[d.data.type])
      .attr("d", (d) => arc(d))
      .style("cursor", "pointer")
      .on("click", (_, d) => clicked(d))
      .on("mouseover", (e, d) => showTip(e, d.data.name))
      .on("mousemove", moveTip)
      .on("mouseout", hideTip);

    // labels
    const labels = g
      .append("g")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle")
      .selectAll("text")
      .data(root.descendants().slice(1))
      .join("text")
      .attr("dy", "0.35em")
      .style("fill", "#111")
      .style("font-weight", (d) => (d.depth === 1 ? 600 : 400))
      .attr("display", (d) => labelVisible(d) ? null : "none")
      .text((d) => {
        if (d.depth === 1) {
          // wrap level-1 on spaces into two lines
          const words = d.data.name.split(" ");
          if (words.length <= 2) return d.data.name;
          return null;
        }
        // lower-level: abbreviate if too long
        return d.data.name.length > 16 ? d.data.name.slice(0, 14) + "…" : d.data.name;
      })
      .each(function(d) {
        if (d.depth === 1) {
          // for depth-1, create two tspans
          const words = d.data.name.split(" ");
          const g = d3.select(this).text("");
          g.append("tspan").attr("x", 0).attr("dy", "-0.5em").text(words.slice(0, Math.ceil(words.length/2)).join(" "));
          g.append("tspan").attr("x", 0).attr("dy", "1em").text(words.slice(Math.ceil(words.length/2)).join(" "));
        }
      })
      .attr("transform", (d) => labelTransform(d));

    // central circle + reset
    g
      .append("circle")
      .attr("r", innerRadius - 1)
      .attr("fill", colour.central)
      .style("cursor", "pointer")
      .on("click", () => clicked(root));

    g
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .attr("fill", "#fff")
      .attr("font-weight", 700)
      .text("Data Science 2");

    // legend
    const legendData = [
      ["central","Central"],
      ["inquiry","Inquiry"],
      ["skill","Skill"],
      ["concept","Concept"],
      ["outcome","Outcome"],
      ["connection","Connection"]
    ];
    const legend = svg.append("g").attr("transform", `translate(20,20)`);
    legendData.forEach(([key,label],i) => {
      const g2 = legend.append("g").attr("transform", `translate(0,${i*20})`);
      g2.append("rect").attr("width",14).attr("height",14).attr("fill",C[key]);
      g2.append("text").attr("x",20).attr("y",12).text(label);
    });

    // label helpers
    function labelVisible(d) {
      if (d.depth === 1) return true;
      // slice width in px = (x1-x0)*outerRadius
      const slice = (d.x1 - d.x0) * outerRadius;
      return slice > 30;
    }
    function labelTransform(d) {
      const angle = ((d.x0 + d.x1)/2) * 180/Math.PI - 90;
      const r = innerRadius + (d.depth - 0.5)*ringWidth;
      if (d.depth === 1) {
        // keep horizontal
        const x = Math.cos(((d.x0 + d.x1)/2)-Math.PI/2) * (innerRadius + ringWidth*0.5);
        const y = Math.sin(((d.x0 + d.x1)/2)-Math.PI/2) * (innerRadius + ringWidth*0.5);
        return `translate(${x},${y})`;
      }
      return `rotate(${angle}) translate(${r},0) rotate(${angle < 180 ? 0 : 180})`;
    }

    // zoom function (updates only x-domain)
    function clicked(p) {
      const [x0,x1] = [p.x0,p.x1];
      x.domain([x0,x1]);
      // transition arcs
      slices.transition().duration(750).attrTween("d", (d) => () => arc(d));
      // transition labels
      labels
        .transition().duration(750)
        .attr("display", (d) => labelVisible(d) ? null : "none")
        .attrTween("transform", (d) => () => labelTransform(d));
    }
  }, []);

  return (
    <div style={{ background:"#FDF6EC", padding:"10px 0" }}>
      <h2 style={{ textAlign:"center", color:"#2C3E50", fontWeight:700 }}>
        Stage 5 Science — Data Science 2 Knowledge Graph
      </h2>
      <div style={{ position:"relative", width:800, margin:"auto" }}>
        <svg ref={svgRef} width="100%" height="800" />
        <div ref={tipRef}></div>
      </div>
      <p style={{ textAlign:"center", margin:"6px 0", fontSize:14 }}>
        Click a segment to zoom; click centre to reset. Hover for details.
      </p>
    </div>
  );
}