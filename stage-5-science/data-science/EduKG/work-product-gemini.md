```json
{
  "courses": [
    {
      "courseName": "Science 7–10",
      "stage": "Stage 4",
      "focusArea": "Data Science 1",
      "modules": [
        {
          "moduleName": "Data Science 1",
          "moduleCode": "SC4_DA1",
          "topics": [
            {
              "topicName": "Using Data for Models & Predictions",
              "inquiryQuestions": [
                "How is data used by scientists to model and predict scientific phenomena?"
              ],
              "syllabusOutcomes": [
                {
                  "outcomeCode": "SC4-DA1-01",
                  "description": "Explains how data is used by scientists to model and predict scientific phenomena.",
                  "bloomsLevel": "Understand"
                }
              ],
              "workingScientificallyOutcomes": [
                {"code": "SC4-WS-06", "description": "Uses data to identify trends, patterns and relationships, and draw conclusions."},
                {"code": "SC4-WS-07", "description": "Identifies problem-solving strategies and proposes solutions."}
              ],
              "knowledgeNodes": [
                {
                  "nodeId": "DS4_N1",
                  "description": "Define 'data' in a scientific context and identify different types (e.g., quantitative, qualitative) and sources (e.g., experimental, observational, big data, websites, digital technology).",
                  "type": "definition",
                  "bloomTaxonomyLevel": "Remember",
                  "difficulty": 1,
                  "syllabusReference": "SC4-DA1-01",
                  "workingScientificallyCategory": null,
                  "literacySkills": ["Define technical terms", "Identify information sources"],
                  "numeracySkills": ["Recognise quantitative vs qualitative"],
                  "prerequisiteNodes": [],
                  "misconceptions": [
                    "Data is always numbers.",
                    "All information found online is reliable data."
                  ],
                  "cognitiveLoad": {"intrinsic": 1,"extraneous": 1,"germane": 1,"band": 1},
                  "spacingParameter": 3,
                  "retrievalQuestionTemplates": [
                    "What is scientific data?",
                    "List two sources of scientific data.",
                    "Is 'the sky is blue' data? If so, what type?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Data-ink ratio",
                    "interactionPattern": "Hover tooltip definitions",
                    "focusContext": "Icons representing different data sources"
                  },
                  "adaptiveScaffold": {
                    "trigger": "Incorrect response to retrieval question",
                    "hintType": "Simplified definition with examples"
                  },
                  "resourceMeta": {
                    "mediaType": "text/html",
                    "readingLevel": "Year 7",
                    "accessibilityFeatures": ["screenReaderFriendly", "simpleLanguage"]
                  },
                  "examQuestionsLinked": [],
                  "depthStudyComponents": [],
                  "examples": ["Temperature readings (quantitative), Colour change observations (qualitative), CSIRO datasets (big data)"],
                  "media": ["media/data_types.svg"],
                  "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                {
                  "nodeId": "DS4_N2",
                  "description": "Explain what a digital footprint is and why it's important to engage safely with digital systems when accessing or sharing data.",
                  "type": "concept",
                  "bloomTaxonomyLevel": "Understand",
                  "difficulty": 2,
                  "syllabusReference": "SC4-DA1-01",
                  "workingScientificallyCategory": null,
                  "literacySkills": ["Explain concepts", "Understand implications"],
                  "numeracySkills": [],
                  "prerequisiteNodes": ["DS4_N1"],
                   "misconceptions": [
                    "Incognito mode means my digital footprint is erased.",
                    "Only illegal activities online are risky."
                  ],
                  "cognitiveLoad": {"intrinsic": 2,"extraneous": 1,"germane": 2,"band": 2},
                  "spacingParameter": 7,
                  "retrievalQuestionTemplates": [
                    "What is a digital footprint?",
                    "Why is online safety important when dealing with data?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Layering-separation",
                    "interactionPattern": "Narrative-stepper",
                    "focusContext": "Flow chart showing data trail from online activities"
                  },
                  "adaptiveScaffold": {
                    "trigger": "Multiple incorrect retrieval attempts",
                    "hintType": "Link to external eSafety resource"
                  },
                  "resourceMeta": {
                    "mediaType": "interactive simulation",
                    "readingLevel": "Year 7",
                    "accessibilityFeatures": ["keyboardNavigation", "altText"]
                  },
                  "examQuestionsLinked": [],
                  "depthStudyComponents": [],
                  "examples": ["Social media posts, online shopping history, website cookies"],
                  "media": ["media/digital_footprint_infographic.png"],
                  "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + Digital Citizenship Guidelines",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                 {
                  "nodeId": "DS4_N3",
                  "description": "Define 'Data Science' as an interdisciplinary field using statistics, scientific methods, algorithms and systems to extract insights from data.",
                  "type": "definition",
                  "bloomTaxonomyLevel": "Remember",
                  "difficulty": 2,
                  "syllabusReference": "SC4-DA1-01",
                  "workingScientificallyCategory": null,
                  "literacySkills": ["Define technical terms"],
                  "numeracySkills": ["Recognise role of statistics"],
                  "prerequisiteNodes": ["DS4_N1"],
                   "misconceptions": [
                    "Data science is just about coding.",
                    "Data science is the same as statistics."
                  ],
                  "cognitiveLoad": {"intrinsic": 2,"extraneous": 1,"germane": 1,"band": 1},
                  "spacingParameter": 7,
                  "retrievalQuestionTemplates": [
                    "What is data science?",
                    "List two disciplines involved in data science."
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Data-ink ratio",
                    "interactionPattern": "Hover tooltip definitions",
                    "focusContext": "Venn diagram showing overlapping fields"
                  },
                  "adaptiveScaffold": {
                    "trigger": "Misconception detected (e.g., 'just coding')",
                    "hintType": "Text explanation highlighting other components (stats, domain expertise)"
                  },
                  "resourceMeta": {
                    "mediaType": "text/html",
                    "readingLevel": "Year 8",
                    "accessibilityFeatures": ["screenReaderFriendly"]
                  },
                  "examQuestionsLinked": [],
                  "depthStudyComponents": [],
                  "examples": ["Using climate data to predict weather patterns", "Analysing genomic data to understand disease"],
                  "media": ["media/data_science_venn.svg"],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                {
                  "nodeId": "DS4_N4",
                  "description": "Compare scientific inquiry methods (based on evidence, testable, repeatable) with non-scientific approaches (e.g., pseudoscience, anecdote).",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Understand",
                  "difficulty": 2,
                  "syllabusReference": "SC4-DA1-01",
                  "workingScientificallyCategory": "Nature of Science",
                  "literacySkills": ["Compare and contrast", "Identify characteristics"],
                  "numeracySkills": [],
                  "prerequisiteNodes": ["DS4_N1"],
                  "misconceptions": [
                    "If it sounds scientific, it must be true.",
                    "Personal experiences are as valid as scientific evidence for general claims."
                  ],
                  "cognitiveLoad": {"intrinsic": 2,"extraneous": 1,"germane": 2,"band": 2},
                  "spacingParameter": 10,
                  "retrievalQuestionTemplates": [
                    "What makes an inquiry scientific?",
                    "Give one difference between science and pseudoscience."
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Layering-separation",
                    "interactionPattern": "Linked-views",
                    "focusContext": "Comparison table (Criteria vs. Approach)"
                  },
                  "adaptiveScaffold": {
                    "trigger": "Struggling to differentiate",
                    "hintType": "Provide checklist of scientific criteria"
                  },
                  "resourceMeta": {
                    "mediaType": "text/html",
                    "readingLevel": "Year 8",
                    "accessibilityFeatures": ["highContrast", "clearLayout"]
                  },
                  "examQuestionsLinked": [],
                  "depthStudyComponents": [],
                  "examples": ["Evidence-based medicine vs. homeopathy", "Astronomy vs. Astrology"],
                  "media": ["media/science_vs_pseudo.png"],
                  "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                {
                  "nodeId": "DS4_N5",
                  "description": "Define 'scientific model' as a representation (physical, conceptual, mathematical, computational) based on data and observations, used to explain or predict phenomena.",
                  "type": "definition",
                  "bloomTaxonomyLevel": "Remember",
                  "difficulty": 1,
                  "syllabusReference": "SC4-DA1-01",
                  "workingScientificallyCategory": null,
                  "literacySkills": ["Define technical terms"],
                  "numeracySkills": ["Recognise mathematical/computational models"],
                  "prerequisiteNodes": ["DS4_N1"],
                  "misconceptions": [
                    "Models are exact copies of reality.",
                    "Models are always physical objects.",
                    "Once a model is created, it never changes."
                  ],
                  "cognitiveLoad": {"intrinsic": 2,"extraneous": 1,"germane": 1,"band": 1},
                  "spacingParameter": 5,
                  "retrievalQuestionTemplates": [
                    "What is a scientific model?",
                    "Why do scientists use models?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Small-multiples",
                    "interactionPattern": "Hover tooltip examples",
                    "focusContext": "Grid showing different types of models (diagram, equation, 3D print, simulation screenshot)"
                  },
                  "adaptiveScaffold": {
                    "trigger": "Confusing model with reality",
                    "hintType": "Explain models are simplifications, highlight limitations"
                  },
                  "resourceMeta": {
                    "mediaType": "text/html",
                    "readingLevel": "Year 7",
                    "accessibilityFeatures": ["altText", "simpleLanguage"]
                  },
                  "examQuestionsLinked": [],
                  "depthStudyComponents": [],
                  "examples": ["Ball-and-stick model of a molecule", "Weather map", "Equation E=mc²", "Particle model of matter", "Computer simulation of planetary orbits"],
                  "media": ["media/model_types.svg"],
                  "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                {
                  "nodeId": "DS4_N6",
                  "description": "Identify different types of scientific models used by scientists, including diagrams, physical 3D models, computer simulations, and mathematical formulas.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Understand",
                  "difficulty": 1,
                  "syllabusReference": "SC4-DA1-01",
                  "workingScientificallyCategory": null,
                  "literacySkills": ["Categorise examples"],
                  "numeracySkills": [],
                  "prerequisiteNodes": ["DS4_N5"],
                  "misconceptions": [
                     "Mathematical formulas aren't 'models'.",
                     "Diagrams are just pictures, not models."
                  ],
                  "cognitiveLoad": {"intrinsic": 1,"extraneous": 1,"germane": 2,"band": 1},
                  "spacingParameter": 5,
                  "retrievalQuestionTemplates": [
                    "List three types of scientific models.",
                    "Is a food web diagram a model? Explain."
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Small-multiples",
                    "interactionPattern": "Drag-and-drop classification",
                    "focusContext": "Examples matched to model type categories"
                  },
                  "adaptiveScaffold": {
                    "trigger": "Incorrect classification",
                    "hintType": "Provide definitions of each model type"
                  },
                  "resourceMeta": {
                    "mediaType": "interactive activity",
                    "readingLevel": "Year 7",
                    "accessibilityFeatures": ["keyboardNavigation", "ariaLabels"]
                  },
                  "examQuestionsLinked": [],
                  "depthStudyComponents": [],
                  "examples": ["Solar system model (physical)", "Circuit diagram (diagram)", "Climate change simulation (computer)", "F=ma (mathematical)"],
                  "media": [],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                {
                  "nodeId": "DS4_N7",
                  "description": "Analyse a simple scientific model (e.g., diagram, graph) to identify underlying data/observations, spot trends, and generate predictions.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Analyse",
                  "difficulty": 3,
                  "syllabusReference": "SC4-DA1-01",
                  "workingScientificallyCategory": "Analysing data and information",
                  "workingScientificallyOutcomes": ["SC4-WS-06"],
                  "literacySkills": ["Interpret visual information", "Infer relationships"],
                  "numeracySkills": ["Interpret graphs", "Identify trends"],
                  "prerequisiteNodes": ["DS4_N5", "DS4_N6"],
                   "misconceptions": [
                    "Predictions from models are always certain.",
                    "The model shows everything about the real phenomenon."
                  ],
                  "cognitiveLoad": {"intrinsic": 3,"extraneous": 1,"germane": 3,"band": 3},
                  "spacingParameter": 14,
                  "retrievalQuestionTemplates": [
                    "Look at this [simple model]. What trend does it show?",
                    "Based on this [model], what might happen next?",
                    "What data might have been used to create this [model]?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Focus-context",
                    "interactionPattern": "Linked-views",
                    "focusContext": "Interactive model (e.g., simple graph) linked to data table and prediction input field"
                  },
                  "adaptiveScaffold": {
                    "trigger": "Difficulty identifying trend",
                    "hintType": "Highlight key data points or add trendline"
                  },
                   "resourceMeta": {
                    "mediaType": "interactive simulation",
                    "readingLevel": "Year 8",
                    "accessibilityFeatures": ["keyboardNavigation", "altText"]
                  },
                  "examQuestionsLinked": [],
                  "depthStudyComponents": [],
                  "examples": ["Analysing a simple population growth graph to predict future size", "Interpreting a weather map model to predict rain"],
                  "media": ["media/interactive_model_analysis.html"],
                  "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                {
                  "nodeId": "DS4_N8",
                  "description": "Explain that computer-based models allow simulation of complex phenomena and enable scientists to easily change variables to investigate their effects.",
                  "type": "concept",
                  "bloomTaxonomyLevel": "Understand",
                  "difficulty": 2,
                  "syllabusReference": "SC4-DA1-01",
                  "workingScientificallyCategory": null,
                  "literacySkills": ["Explain purpose", "Identify advantages"],
                  "numeracySkills": ["Understand concept of variables"],
                  "prerequisiteNodes": ["DS4_N5", "DS4_N6"],
                   "misconceptions": [
                    "Computer simulations are just games.",
                    "Simulations perfectly replicate reality."
                  ],
                  "cognitiveLoad": {"intrinsic": 2,"extraneous": 1,"germane": 2,"band": 2},
                  "spacingParameter": 10,
                  "retrievalQuestionTemplates": [
                    "Why are computer simulations useful in science?",
                    "What can scientists easily change in a computer model?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Focus-context",
                    "interactionPattern": "Narrative-stepper",
                    "focusContext": "Simple interactive simulation (e.g., predator-prey) with sliders for variables"
                  },
                  "adaptiveScaffold": {
                    "trigger": "Confusing simulation with reality",
                    "hintType": "Provide text explaining model assumptions and limitations"
                  },
                   "resourceMeta": {
                    "mediaType": "video/animation",
                    "readingLevel": "Year 8",
                    "accessibilityFeatures": ["captions", "transcript"]
                  },
                  "examQuestionsLinked": [],
                  "depthStudyComponents": [],
                  "examples": ["Climate change models", "Epidemic spread simulations", "Galaxy formation simulations"],
                  "media": ["media/computer_simulation_example.mp4"],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                 {
                  "nodeId": "DS4_N9",
                  "description": "Identify specific data and observations used by scientists to develop a well-known scientific model (e.g., the Big Bang model, model of the atom).",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Understand",
                  "difficulty": 3,
                  "syllabusReference": "SC4-DA1-01",
                  "workingScientificallyCategory": "Nature of Science",
                  "literacySkills": ["Identify evidence", "Link data to model"],
                  "numeracySkills": [],
                  "prerequisiteNodes": ["DS4_N5", "DS4_N1"],
                   "misconceptions": [
                    "Models are created purely from imagination.",
                    "Only one piece of data is needed to create a model."
                  ],
                  "cognitiveLoad": {"intrinsic": 3,"extraneous": 2,"germane": 3,"band": 3},
                  "spacingParameter": 14,
                  "retrievalQuestionTemplates": [
                    "What evidence supports the Big Bang model?",
                    "What observations led to the development of the particle model of matter?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Layering-separation",
                    "interactionPattern": "Narrative-stepper",
                    "focusContext": "Timeline showing key observations/data leading to model development"
                  },
                  "adaptiveScaffold": {
                    "trigger": "Unable to link data to model",
                    "hintType": "Provide specific examples of data points and how they informed the model"
                  },
                   "resourceMeta": {
                    "mediaType": "text/html with embedded images",
                    "readingLevel": "Year 9",
                    "accessibilityFeatures": ["altText", "clearStructure"]
                  },
                  "examQuestionsLinked": [],
                  "depthStudyComponents": [],
                  "examples": ["Big Bang: Cosmic Microwave Background radiation, redshift of galaxies. Particle Model: Brownian motion, gas laws.", "Atomic Model: Rutherford's gold foil experiment, spectral lines."],
                  "media": ["media/big_bang_evidence.png"],
                  "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                {
                  "nodeId": "DS4_N10",
                  "description": "Outline how scientists use models as a basis for developing workable scientific theories.",
                  "type": "concept",
                  "bloomTaxonomyLevel": "Understand",
                  "difficulty": 3,
                  "syllabusReference": "SC4-DA1-01",
                  "workingScientificallyCategory": "Nature of Science",
                  "literacySkills": ["Explain process", "Sequence steps"],
                  "numeracySkills": [],
                  "prerequisiteNodes": ["DS4_N5", "DS4_N9"],
                   "misconceptions": [
                    "A model IS a theory.",
                    "Theories are just guesses."
                  ],
                  "cognitiveLoad": {"intrinsic": 3,"extraneous": 1,"germane": 2,"band": 2},
                  "spacingParameter": 14,
                  "retrievalQuestionTemplates": [
                    "How does a model help in forming a theory?",
                    "What is the difference between a model and a theory?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Focus-context",
                    "interactionPattern": "Narrative-stepper",
                    "focusContext": "Flow chart: Observation -> Data -> Model -> Testing/Refinement -> Theory"
                  },
                  "adaptiveScaffold": {
                    "trigger": "Confusing model and theory",
                    "hintType": "Provide clear definitions and analogy (e.g., map is model, theory explains why landforms are there)"
                  },
                   "resourceMeta": {
                    "mediaType": "text/html",
                    "readingLevel": "Year 9",
                    "accessibilityFeatures": ["screenReaderFriendly", "simpleLanguage"]
                  },
                  "examQuestionsLinked": [],
                  "depthStudyComponents": [],
                  "examples": ["Development of the theory of plate tectonics from models of continental drift.", "Development of evolutionary theory from models of inheritance and observation."],
                  "media": ["media/model_to_theory.svg"],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                {
                  "nodeId": "DS4_N11",
                  "description": "Formulate simple scientific questions that can be addressed by collecting and analysing data.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Apply",
                  "difficulty": 2,
                  "syllabusReference": "SC4-DA1-01",
                  "workingScientificallyCategory": "Questioning and predicting",
                  "workingScientificallyOutcomes": ["SC4-WS-02"],
                  "literacySkills": ["Formulate questions"],
                  "numeracySkills": ["Identify measurable variables"],
                  "prerequisiteNodes": ["DS4_N1"],
                   "misconceptions": [
                    "Any question can be answered with data.",
                    "Questions about opinions are scientific questions."
                  ],
                  "cognitiveLoad": {"intrinsic": 2,"extraneous": 1,"germane": 3,"band": 2},
                  "spacingParameter": 10,
                  "retrievalQuestionTemplates": [
                    "Turn this observation '[observation]' into a testable question.",
                    "Is 'Is blue the best colour?' a scientific question addressable by data? Why/why not?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Data-ink ratio",
                    "interactionPattern": "Interactive form",
                    "focusContext": "Template for formulating questions (e.g., How does [Variable X] affect [Variable Y]?)"
                  },
                  "adaptiveScaffold": {
                    "trigger": "Formulating non-testable questions",
                    "hintType": "Provide criteria for a testable question (measurable, specific)"
                  },
                   "resourceMeta": {
                    "mediaType": "worksheet/interactive form",
                    "readingLevel": "Year 7",
                    "accessibilityFeatures": ["clearInstructions"]
                  },
                  "examQuestionsLinked": [],
                  "depthStudyComponents": ["Question formulation for Depth Study"],
                  "examples": ["How does the amount of sunlight affect plant height?", "Does the type of surface affect how far a toy car rolls?"],
                  "media": [],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                 {
                  "nodeId": "DS4_N12",
                  "description": "Conduct repeated trials in a simple investigation, record measurements accurately using appropriate units, and calculate the mean (average) and range of the collected data.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Apply",
                  "difficulty": 3,
                  "syllabusReference": "SC4-DA1-01",
                  "workingScientificallyCategory": "Conducting investigations; Processing data",
                  "workingScientificallyOutcomes": ["SC4-WS-04", "SC4-WS-05"],
                  "literacySkills": ["Follow procedures", "Record data systematically"],
                  "numeracySkills": ["Measure accurately", "Use units", "Calculate mean", "Calculate range"],
                  "prerequisiteNodes": ["DS4_N1"],
                   "misconceptions": [
                    "One trial is enough.",
                    "Average is the same as range.",
                    "Units don't matter."
                  ],
                  "cognitiveLoad": {"intrinsic": 3,"extraneous": 1,"germane": 3,"band": 3},
                  "spacingParameter": 7,
                  "retrievalQuestionTemplates": [
                    "Why are repeated trials important in experiments?",
                    "Calculate the mean and range for this dataset: [data].",
                    "What is the difference between mean and range?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Focus-context",
                    "interactionPattern": "Linked-views",
                    "focusContext": "Interactive data table where students input trial data, and mean/range are auto-calculated and displayed."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Calculation errors",
                    "hintType": "Show formula/steps for mean and range"
                  },
                   "resourceMeta": {
                    "mediaType": "interactive activity/simulation",
                    "readingLevel": "Year 7",
                    "accessibilityFeatures": ["keyboardNavigation", "clearFeedback"]
                  },
                  "examQuestionsLinked": [],
                  "depthStudyComponents": ["Data collection", "Basic data processing"],
                  "examples": ["Measuring the time it takes for a pendulum to swing 10 times, repeating 5 times, calculating mean/range.", "Measuring bounce height of a ball dropped from 1m, repeating 5 times, calculating mean/range."],
                  "media": ["media/repeated_trials_interactive.html"],
                  "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + Numeracy Guide",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                {
                  "nodeId": "DS4_N13",
                  "description": "Discuss the concepts of accuracy (closeness to true value) and reliability (consistency of results) in experimental data, using mean and range calculations from repeated trials.",
                  "type": "concept",
                  "bloomTaxonomyLevel": "Understand",
                  "difficulty": 3,
                  "syllabusReference": "SC4-DA1-01",
                  "workingScientificallyCategory": "Analysing data and information",
                  "workingScientificallyOutcomes": ["SC4-WS-06"],
                  "literacySkills": ["Explain concepts", "Compare and contrast", "Use technical terms"],
                  "numeracySkills": ["Interpret mean and range"],
                  "prerequisiteNodes": ["DS4_N12"],
                   "misconceptions": [
                    "Accuracy and reliability/precision are the same thing.",
                    "If results are reliable, they must be accurate.",
                     "A large range always means inaccurate results (could be reliable but inaccurate)."
                  ],
                  "cognitiveLoad": {"intrinsic": 3,"extraneous": 1,"germane": 3,"band": 3},
                  "spacingParameter": 10,
                  "retrievalQuestionTemplates": [
                    "What is the difference between accuracy and reliability?",
                    "How can repeated trials help assess reliability?",
                    "Does a small range guarantee accuracy? Explain."
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Small-multiples",
                    "interactionPattern": "Linked-views",
                    "focusContext": "Target diagrams (like Fig 15 in WS Guide) linked to datasets with varying mean/range, illustrating high/low accuracy/reliability."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Confusing accuracy and reliability",
                    "hintType": "Use analogy (e.g., darts on a dartboard)"
                  },
                   "resourceMeta": {
                    "mediaType": "text/html with interactive graphics",
                    "readingLevel": "Year 8",
                    "accessibilityFeatures": ["altText", "clearLayout"]
                  },
                  "examQuestionsLinked": [],
                  "depthStudyComponents": ["Evaluation of data quality"],
                  "examples": ["Comparing class results for an experiment: results are reliable if everyone gets similar answers (small range among group means), accurate if the class average is close to the known value."],
                  "media": ["media/accuracy_reliability.svg"],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + WS Guide",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                {
                  "nodeId": "DS4_N14",
                  "description": "Analyse simple datasets (e.g., from student investigations) presented in tables or graphs to identify basic patterns or trends and test whether the data is consistent with an initial prediction.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Analyse",
                  "difficulty": 3,
                  "syllabusReference": "SC4-DA1-01",
                  "workingScientificallyCategory": "Analysing data and information",
                   "workingScientificallyOutcomes": ["SC4-WS-06"],
                  "literacySkills": ["Interpret data", "Compare data to prediction"],
                  "numeracySkills": ["Read tables/graphs", "Identify trends (increasing, decreasing, constant)"],
                  "prerequisiteNodes": ["DS4_N1", "DS4_N11"],
                   "misconceptions": [
                    "Correlation implies causation.",
                    "If data doesn't fit prediction, the experiment failed (rather than disproving hypothesis)."
                  ],
                  "cognitiveLoad": {"intrinsic": 3,"extraneous": 1,"germane": 3,"band": 3},
                  "spacingParameter": 10,
                  "retrievalQuestionTemplates": [
                    "What pattern does this [table/graph] show?",
                    "Does the data in this [table/graph] support the prediction that [prediction]?",
                    "Describe the trend shown in this graph."
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Focus-context",
                    "interactionPattern": "Linked-views",
                    "focusContext": "Display prediction, interactive graph/table of data, and prompt for analysis/comparison."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Difficulty identifying pattern",
                    "hintType": "Overlay trendline or highlight key data points"
                  },
                   "resourceMeta": {
                    "mediaType": "interactive activity",
                    "readingLevel": "Year 8",
                    "accessibilityFeatures": ["altText", "keyboardNavigation"]
                  },
                  "examQuestionsLinked": [],
                  "depthStudyComponents": ["Data analysis", "Drawing conclusions"],
                  "examples": ["Graphing plant height over time to see if it increased as predicted.", "Tabulating results of different fertilisers and seeing which correlates with tallest plants."],
                  "media": ["media/analyse_data_predict.html"],
                  "analyticsMeta": {
                    "source": "Curriculum parser v1.3",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                {
                  "nodeId": "DS4_N15",
                  "description": "Create a simple scientific model (e.g., diagram, physical model, basic flowchart) to explain an observable phenomenon based on collected data or observations.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Create",
                  "difficulty": 4,
                  "syllabusReference": "SC4-DA1-01",
                  "workingScientificallyCategory": "Problem-solving; Communicating",
                   "workingScientificallyOutcomes": ["SC4-WS-07", "SC4-WS-08"],
                  "literacySkills": ["Represent concepts visually/physically", "Explain phenomenon"],
                  "numeracySkills": ["Represent relationships"],
                  "prerequisiteNodes": ["DS4_N5", "DS4_N14"],
                   "misconceptions": [
                    "The model must be complicated to be good.",
                    "The first model created is always the best one."
                  ],
                  "cognitiveLoad": {"intrinsic": 4,"extraneous": 2,"germane": 4,"band": 4},
                  "spacingParameter": 21,
                  "retrievalQuestionTemplates": [
                    "Draw a model to explain [simple phenomenon X].",
                    "Based on this data [simple dataset], create a model showing the relationship."
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Layering-separation",
                    "interactionPattern": "Digital whiteboard/drawing tool",
                    "focusContext": "Provide dataset/phenomenon description and tools for model creation (shapes, lines, text)."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Struggling to start model",
                    "hintType": "Suggest a type of model (diagram, flowchart) or provide starting components"
                  },
                   "resourceMeta": {
                    "mediaType": "interactive tool",
                    "readingLevel": "Year 8",
                    "accessibilityFeatures": ["keyboardAccess", "toolTips"]
                  },
                  "examQuestionsLinked": [],
                  "depthStudyComponents": ["Developing models", "Communicating findings"],
                  "examples": ["Drawing a particle model to explain melting based on temperature data.", "Creating a flowchart to show a simple food chain observed.", "Building a physical model of the water cycle."],
                  "media": [],
                  "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "courseName": "Science 7–10",
      "stage": "Stage 5",
      "focusArea": "Data Science 2",
      "modules": [
        {
          "moduleName": "Data Science 2",
          "moduleCode": "SC5_DA2",
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
                  "description": "Distinguish between investigable questions (testable with available resources) and non-investigable questions in a scientific context.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Understand",
                  "difficulty": 2,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "Questioning and predicting",
                  "workingScientificallyOutcomes": ["SC5-WS-02"],
                  "literacySkills": ["Distinguish between categories", "Analyse questions"],
                  "numeracySkills": ["Consider resource constraints"],
                  "prerequisiteNodes": ["DS4_N11"],
                  "misconceptions": [
                    "All questions about science are investigable.",
                    "If a question is interesting, it must be investigable."
                  ],
                  "cognitiveLoad": {"intrinsic": 2,"extraneous": 1,"germane": 2,"band": 2},
                  "spacingParameter": 7,
                  "retrievalQuestionTemplates": [
                    "What makes a scientific question 'investigable'?",
                    "Is 'Why is gravity?' an investigable question for a school lab? Explain.",
                    "Give an example of a non-investigable question."
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Data-ink ratio",
                    "interactionPattern": "Drag-and-drop classification",
                    "focusContext": "Sorting question examples into 'Investigable' and 'Non-Investigable' bins."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Incorrect classification",
                    "hintType": "Provide criteria for investigability (testable, measurable, ethical, resource)"
                  },
                  "resourceMeta": {
                    "mediaType": "interactive activity",
                    "readingLevel": "Year 9",
                    "accessibilityFeatures": ["keyboardNavigation", "clearInstructions"]
                  },
                  "examQuestionsLinked": [],
                  "depthStudyComponents": ["Defining research question"],
                  "examples": ["Investigable: Does temperature affect enzyme activity? Non-investigable: What is the meaning of life?"],
                  "media": [],
                  "analyticsMeta": {
                    "source": "Curriculum parser v1.3",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                {
                  "nodeId": "DS5_N2",
                  "description": "Explain how scientific knowledge is verified and refined through processes like hypothesis testing, experimentation, data analysis, and peer review.",
                  "type": "concept",
                  "bloomTaxonomyLevel": "Understand",
                  "difficulty": 3,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "Nature of Science",
                  "literacySkills": ["Explain complex process", "Sequence stages"],
                  "numeracySkills": ["Understand role of data analysis"],
                  "prerequisiteNodes": ["DS4_N10", "DS4_N13"],
                  "misconceptions": [
                    "Science proves things with absolute certainty.",
                    "Peer review means other scientists just agree with the findings.",
                    "Once published, scientific knowledge never changes."
                  ],
                  "cognitiveLoad": {"intrinsic": 3,"extraneous": 1,"germane": 3,"band": 3},
                  "spacingParameter": 14,
                  "retrievalQuestionTemplates": [
                    "What is the purpose of peer review in science?",
                    "How does hypothesis testing help refine scientific knowledge?",
                    "List two key processes involved in verifying scientific claims."
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Focus-context",
                    "interactionPattern": "Narrative-stepper",
                    "focusContext": "Flowchart illustrating the scientific method, highlighting testing, analysis and peer review stages."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Misunderstanding peer review",
                    "hintType": "Explain peer review involves critical evaluation by experts"
                  },
                  "resourceMeta": {
                    "mediaType": "text/html with diagram",
                    "readingLevel": "Year 9",
                    "accessibilityFeatures": ["altText", "clearLayout"]
                  },
                  "examQuestionsLinked": [],
                  "depthStudyComponents": ["Understanding scientific process"],
                  "examples": ["The process leading to the acceptance of germ theory", "Refinement of climate models based on new data and peer review"],
                  "media": ["media/scientific_verification_flowchart.svg"],
                  "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                 {
                  "nodeId": "DS5_N3",
                  "description": "Develop and apply criteria (e.g., currency, credibility, author expertise, bias, consistency with other sources) to evaluate the validity and reliability of scientific information found online.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Apply",
                  "difficulty": 3,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "Analysing data and information",
                  "workingScientificallyOutcomes": ["SC5-WS-06"],
                  "literacySkills": ["Evaluate sources", "Identify bias", "Synthesise information"],
                  "numeracySkills": [],
                  "prerequisiteNodes": ["DS4_N1", "DS5_N2"],
                  "misconceptions": [
                    "If a website looks professional, its information is reliable.",
                    "Wikipedia is always a reliable primary source.",
                    ".org websites are always unbiased."
                  ],
                  "cognitiveLoad": {"intrinsic": 3,"extraneous": 1,"germane": 3,"band": 3},
                  "spacingParameter": 10,
                  "retrievalQuestionTemplates": [
                    "List three criteria for evaluating an online science source.",
                    "Evaluate this [sample website/article] based on the criteria.",
                    "Why is checking the author's expertise important?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Layering-separation",
                    "interactionPattern": "Interactive checklist/rubric",
                    "focusContext": "Students apply evaluation criteria checklist to sample online articles."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Difficulty applying criteria",
                    "hintType": "Provide guiding questions for each criterion (e.g., 'When was this published?' for currency)"
                  },
                  "resourceMeta": {
                    "mediaType": "interactive activity",
                    "readingLevel": "Year 9",
                    "accessibilityFeatures": ["keyboardNavigation", "clearInstructions"]
                  },
                  "examQuestionsLinked": [],
                  "depthStudyComponents": ["Literature review", "Evaluating sources"],
                  "examples": ["Applying CRAAP test (Currency, Relevance, Authority, Accuracy, Purpose) to a health blog.", "Comparing information on climate change from NASA vs. a political advocacy group."],
                  "media": ["media/evaluate_online_source_activity.html"],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + Information Literacy standards",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                 {
                  "nodeId": "DS5_N4",
                  "description": "Identify scientific claims presented in media or other sources and determine if they are formulated in a way that allows them to be scientifically tested.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Analyse",
                  "difficulty": 3,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "Questioning and predicting",
                  "workingScientificallyOutcomes": ["SC5-WS-02"],
                  "literacySkills": ["Identify claims", "Analyse language", "Determine testability"],
                  "numeracySkills": [],
                  "prerequisiteNodes": ["DS5_N1"],
                  "misconceptions": [
                    "All claims in science articles are testable.",
                    "Vague claims are scientifically testable."
                  ],
                  "cognitiveLoad": {"intrinsic": 3,"extraneous": 1,"germane": 3,"band": 3},
                  "spacingParameter": 10,
                  "retrievalQuestionTemplates": [
                    "Identify the main claim in this [news headline/advertisement].",
                    "Is the claim '[claim]' scientifically testable? Why/why not?",
                    "What makes a claim 'testable'?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Focus-context",
                    "interactionPattern": "Annotation tool",
                    "focusContext": "Students highlight claims in sample texts and evaluate testability using criteria."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Difficulty identifying claims or testability",
                    "hintType": "Provide examples of testable vs. non-testable claims (specific vs. vague)"
                  },
                  "resourceMeta": {
                    "mediaType": "interactive text analysis",
                    "readingLevel": "Year 9",
                    "accessibilityFeatures": ["keyboardNavigation", "screenReaderFriendly"]
                  },
                  "examQuestionsLinked": [],
                  "depthStudyComponents": ["Hypothesis formulation"],
                  "examples": ["Testable: 'This brand of fertiliser increases tomato yield by 10%'. Non-testable: 'This crystal heals negative energy'."],
                  "media": [],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                 {
                  "nodeId": "DS5_N5",
                  "description": "Explain the evidence and reasoning used to support or refute a scientific claim, using data from primary or secondary investigations.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Understand",
                  "difficulty": 3,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "Communicating; Analysing data",
                  "workingScientificallyOutcomes": ["SC5-WS-08", "SC5-WS-06"],
                  "literacySkills": ["Explain reasoning", "Link evidence to claim", "Structure explanation"],
                  "numeracySkills": ["Interpret data as evidence"],
                  "prerequisiteNodes": ["DS5_N4", "DS4_N14"],
                   "misconceptions": [
                    "Stating the data is the same as explaining the reasoning.",
                    "One piece of data is sufficient evidence.",
                    "Ignoring contradictory data is acceptable."
                  ],
                  "cognitiveLoad": {"intrinsic": 3,"extraneous": 1,"germane": 3,"band": 3},
                  "spacingParameter": 14,
                  "retrievalQuestionTemplates": [
                    "Explain how this data [data table/graph] supports the claim that [claim].",
                    "What reasoning links the evidence [evidence] to the conclusion [conclusion]?",
                    "Does this data [contradictory data] refute the claim [claim]? Explain why."
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Layering-separation",
                    "interactionPattern": "Interactive argument map",
                    "focusContext": "Tool to link data points (evidence) to a central claim via reasoning statements."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Weak link between evidence and claim",
                    "hintType": "Prompt with 'How does this evidence show that...?' or provide sentence starters (e.g., 'The data shows..., which means...') "
                  },
                  "resourceMeta": {
                    "mediaType": "interactive tool/template",
                    "readingLevel": "Year 9",
                    "accessibilityFeatures": ["keyboardAccess", "toolTips"]
                  },
                  "examQuestionsLinked": [],
                  "depthStudyComponents": ["Discussion of results", "Forming conclusions"],
                  "examples": ["Claim: Plants need sunlight. Evidence: Plants in cupboard died, plants on windowsill grew. Reasoning: Sunlight provides energy for photosynthesis, essential for growth."],
                  "media": [],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                 {
                  "nodeId": "DS5_N6",
                  "description": "Construct a simple written scientific argument presenting a claim, supporting it with relevant evidence, and providing clear reasoning that links the evidence to the claim.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Apply",
                  "difficulty": 4,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "Communicating",
                  "workingScientificallyOutcomes": ["SC5-WS-08"],
                  "literacySkills": ["Structure argument (Claim-Evidence-Reasoning)", "Use scientific language", "Write persuasively"],
                  "numeracySkills": ["Present data effectively"],
                  "prerequisiteNodes": ["DS5_N5"],
                  "misconceptions": [
                    "A strong opinion is a good argument.",
                    "Listing facts is the same as constructing an argument.",
                    "Arguments don't need counter-arguments acknowledged."
                  ],
                  "cognitiveLoad": {"intrinsic": 4,"extraneous": 1,"germane": 4,"band": 4},
                  "spacingParameter": 14,
                  "retrievalQuestionTemplates": [
                    "Write a paragraph arguing for/against [claim] using this data [data].",
                    "Structure an argument using the Claim-Evidence-Reasoning framework for [scenario]."
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Data-ink ratio",
                    "interactionPattern": "Structured writing template",
                    "focusContext": "Template with sections for Claim, Evidence (data/observations), Reasoning."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Missing component (e.g., reasoning)",
                    "hintType": "Highlight missing section or provide prompts for reasoning"
                  },
                  "resourceMeta": {
                    "mediaType": "worksheet/digital template",
                    "readingLevel": "Year 9",
                    "accessibilityFeatures": ["clearInstructions", "spellCheck"]
                  },
                  "examQuestionsLinked": ["Extended response questions requiring justification"],
                  "depthStudyComponents": ["Writing discussion/conclusion", "Presenting findings"],
                  "examples": ["Argument for wearing sunscreen: Claim - Sunscreen reduces skin cancer risk. Evidence - Statistical data showing lower rates in sunscreen users. Reasoning - Sunscreen blocks harmful UV radiation which damages DNA, leading to cancer."],
                  "media": [],
                  "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + Writing Guide",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                 {
                  "nodeId": "DS5_N7",
                  "description": "Explain the distinction between science (evidence-based, testable, falsifiable) and pseudoscience (lacks evidence, often untestable, relies on belief/anecdote).",
                  "type": "concept",
                  "bloomTaxonomyLevel": "Understand",
                  "difficulty": 2,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "Nature of Science",
                  "literacySkills": ["Compare and contrast", "Define key terms"],
                  "numeracySkills": [],
                  "prerequisiteNodes": ["DS4_N4"],
                   "misconceptions": [
                    "Pseudoscience is just 'bad' science.",
                    "Ancient knowledge is always pseudoscience.",
                    "If many people believe it, it's not pseudoscience."
                  ],
                  "cognitiveLoad": {"intrinsic": 2,"extraneous": 1,"germane": 2,"band": 2},
                  "spacingParameter": 10,
                  "retrievalQuestionTemplates": [
                    "What is the main difference between science and pseudoscience?",
                    "Give one characteristic of pseudoscience.",
                    "Why is 'falsifiability' important in science?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Layering-separation",
                    "interactionPattern": "Linked-views",
                    "focusContext": "Comparison table outlining features of science vs. pseudoscience."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Difficulty differentiating",
                    "hintType": "Focus on the role of testable evidence and falsifiability"
                  },
                  "resourceMeta": {
                    "mediaType": "text/html",
                    "readingLevel": "Year 9",
                    "accessibilityFeatures": ["clearLayout", "definitions"]
                  },
                  "examQuestionsLinked": [],
                  "depthStudyComponents": [],
                  "examples": ["Science: Astronomy, Chemistry, Biology. Pseudoscience: Astrology, Alchemy, Phrenology."],
                  "media": ["media/science_vs_pseudo_comparison.png"],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                 {
                  "nodeId": "DS5_N8",
                  "description": "Identify examples of pseudoscientific claims commonly found in popular media or advertising.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Apply",
                  "difficulty": 2,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "Nature of Science",
                  "literacySkills": ["Identify claims", "Analyse media"],
                  "numeracySkills": [],
                  "prerequisiteNodes": ["DS5_N7"],
                   "misconceptions": [
                    "Testimonials are strong scientific evidence.",
                    "Products advertised with 'sciency' language are scientifically proven."
                  ],
                  "cognitiveLoad": {"intrinsic": 2,"extraneous": 2,"germane": 3,"band": 2},
                  "spacingParameter": 7,
                  "retrievalQuestionTemplates": [
                    "Find an example of a pseudoscientific claim in an advertisement.",
                    "Is this claim '[claim from media]' likely science or pseudoscience? Why?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Small-multiples",
                    "interactionPattern": "Interactive gallery",
                    "focusContext": "Gallery of mock advertisements/headlines for students to classify as science/pseudoscience."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Incorrect classification",
                    "hintType": "Highlight red flags (e.g., untestable claims, appeal to emotion, lack of evidence)"
                  },
                  "resourceMeta": {
                    "mediaType": "interactive activity",
                    "readingLevel": "Year 9",
                    "accessibilityFeatures": ["altText", "keyboardNavigation"]
                  },
                  "examQuestionsLinked": [],
                  "depthStudyComponents": [],
                  "examples": ["Astrology horoscopes, cryptozoology (Bigfoot), flat-Earth theory, miracle weight-loss pills, 'water witching' (dowsing), magnetic therapy bracelets."],
                  "media": [],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                {
                  "nodeId": "DS5_N9",
                  "description": "Investigate and explain how data, or its analysis and interpretation (e.g., cherry-picking, misleading graphs), can be distorted to manipulate findings and support specific viewpoints.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Analyse",
                  "difficulty": 4,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "Analysing data and information",
                  "workingScientificallyOutcomes": ["SC5-WS-06"],
                  "literacySkills": ["Analyse critically", "Identify manipulation techniques", "Explain impact"],
                  "numeracySkills": ["Interpret graphs critically", "Identify misleading statistics"],
                  "prerequisiteNodes": ["DS4_N14", "DS5_N7"],
                   "misconceptions": [
                    "Graphs always present data objectively.",
                    "Correlation shown on a graph always proves causation.",
                    "Leaving out some data is acceptable if it doesn't fit the desired outcome."
                  ],
                  "cognitiveLoad": {"intrinsic": 4,"extraneous": 1,"germane": 4,"band": 4},
                  "spacingParameter": 14,
                  "retrievalQuestionTemplates": [
                    "How can a graph be made misleading?",
                    "What is 'cherry-picking' data?",
                    "Analyse this graph [misleading graph]. How is it distorting the data?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Small-multiples",
                    "interactionPattern": "Linked-views",
                    "focusContext": "Side-by-side comparison of honest vs. misleading graphs of the same data. Interactive graph where users can manipulate scale/axis to see distortion."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Difficulty identifying distortion",
                    "hintType": "Provide checklist of common distortion techniques (truncated axis, cherry-picking, improper scale)"
                  },
                  "resourceMeta": {
                    "mediaType": "interactive simulation",
                    "readingLevel": "Year 10",
                    "accessibilityFeatures": ["altText", "keyboardNavigation", "clearFeedback"]
                  },
                  "examQuestionsLinked": ["Data analysis questions involving graph interpretation"],
                  "depthStudyComponents": ["Critical evaluation of data/sources"],
                  "examples": ["Truncating the Y-axis on a bar chart to exaggerate differences.", "Using a pictograph with disproportionately sized icons.", "Showing correlation without mentioning confounding factors.", "Selecting only data points that support a desired trend."],
                  "media": ["media/misleading_graphs.html"],
                  "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                {
                  "nodeId": "DS5_N10",
                  "description": "Evaluate whether an assertion, claim, or theory is pseudoscientific by applying criteria such as testability, reliance on evidence vs. anecdote, falsifiability, and peer review.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Evaluate",
                  "difficulty": 4,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "Problem-solving",
                  "workingScientificallyOutcomes": ["SC5-WS-07"],
                  "literacySkills": ["Evaluate claims", "Apply criteria", "Justify judgement"],
                  "numeracySkills": [],
                  "prerequisiteNodes": ["DS5_N7", "DS5_N8", "DS5_N3"],
                  "misconceptions": [
                    "If it uses scientific terminology, it can't be pseudoscience.",
                    "Popularity of a claim makes it scientifically valid.",
                    "Lack of explanation means something is pseudoscientific (could be unexplained phenomenon)."
                  ],
                  "cognitiveLoad": {"intrinsic": 4,"extraneous": 1,"germane": 4,"band": 4},
                  "spacingParameter": 21,
                  "retrievalQuestionTemplates": [
                    "Evaluate the claim '[pseudoscientific claim]' using scientific criteria.",
                    "Is astrology science or pseudoscience? Justify your answer.",
                    "What questions would you ask to determine if a health claim is pseudoscientific?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Layering-separation",
                    "interactionPattern": "Interactive rubric/checklist",
                    "focusContext": "Students evaluate sample claims against criteria for science vs. pseudoscience."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Incorrect evaluation",
                    "hintType": "Prompt student to consider specific criteria (e.g., 'Is there testable evidence? Has it been peer-reviewed?')"
                  },
                  "resourceMeta": {
                    "mediaType": "interactive activity",
                    "readingLevel": "Year 10",
                    "accessibilityFeatures": ["keyboardNavigation", "clearInstructions"]
                  },
                  "examQuestionsLinked": [],
                  "depthStudyComponents": ["Critical evaluation of information"],
                  "examples": ["Evaluating claims about psychic abilities, homeopathy, or ancient alien theories."],
                  "media": [],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                {
                  "nodeId": "DS5_N11",
                  "description": "Define 'large datasets' (Big Data) and outline their key features (Volume, Velocity, Variety, Veracity, Value), methods of collection (e.g., sensors, surveys, online activity), and common scientific applications.",
                  "type": "definition",
                  "bloomTaxonomyLevel": "Remember",
                  "difficulty": 2,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": null,
                  "literacySkills": ["Define technical terms", "Identify characteristics", "List examples"],
                  "numeracySkills": ["Appreciate scale (volume, velocity)"],
                  "prerequisiteNodes": ["DS4_N1"],
                  "misconceptions": [
                    "Big data just means lots of rows in a spreadsheet.",
                    "All large datasets are accurate (veracity issues).",
                    "Collecting big data is always easy."
                  ],
                  "cognitiveLoad": {"intrinsic": 2,"extraneous": 1,"germane": 2,"band": 2},
                  "spacingParameter": 7,
                  "retrievalQuestionTemplates": [
                    "What are the '5 Vs' of Big Data?",
                    "List two ways large scientific datasets are collected.",
                    "Give an example of a scientific field that uses large datasets."
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "High data-ink ratio",
                    "interactionPattern": "Hover tooltip definitions",
                    "focusContext": "Infographic illustrating the 5 Vs with icons and brief explanations."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Forgetting the 5 Vs",
                    "hintType": "Provide mnemonic or first letter cues"
                  },
                  "resourceMeta": {
                    "mediaType": "infographic/text",
                    "readingLevel": "Year 9",
                    "accessibilityFeatures": ["altText", "clearLayout"]
                  },
                  "examQuestionsLinked": [],
                  "depthStudyComponents": ["Understanding data sources"],
                  "examples": ["Genomics (volume, variety)", "Real-time climate monitoring (velocity)", "Large Hadron Collider data (volume)", "Social media sentiment analysis (variety, velocity)", "Astronomical surveys (volume)"],
                  "media": ["media/big_data_5vs.svg"],
                  "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + Industry definitions",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                {
                  "nodeId": "DS5_N12",
                  "description": "Use available large datasets (e.g., from CSIRO, BoM, ABS, online repositories) to formulate a specific, testable scientific question.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Apply",
                  "difficulty": 3,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "Questioning and predicting",
                  "workingScientificallyOutcomes": ["SC5-WS-02"],
                  "literacySkills": ["Formulate questions", "Interpret dataset descriptions"],
                  "numeracySkills": ["Identify relevant variables in dataset"],
                  "prerequisiteNodes": ["DS5_N1", "DS5_N11"],
                  "misconceptions": [
                    "Any question can be answered by any large dataset.",
                    "Formulating the question comes after analysing the data."
                  ],
                  "cognitiveLoad": {"intrinsic": 3,"extraneous": 2,"germane": 3,"band": 3},
                  "spacingParameter": 14,
                  "retrievalQuestionTemplates": [
                    "Look at this description of [large dataset]. Formulate a testable question.",
                    "What kind of question could you investigate using historical weather data?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Focus-context",
                    "interactionPattern": "Interactive exploration tool",
                    "focusContext": "Provide links/descriptions of sample large datasets and a template for question formulation."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Formulating question not answerable by dataset",
                    "hintType": "Prompt student to check available variables/metadata in dataset description"
                  },
                  "resourceMeta": {
                    "mediaType": "web links/interactive form",
                    "readingLevel": "Year 9",
                    "accessibilityFeatures": ["clearInstructions", "linksDescribed"]
                  },
                  "examQuestionsLinked": [],
                  "depthStudyComponents": ["Developing research question", "Identifying data sources"],
                  "examples": ["Using BoM data: 'Is there a correlation between average annual temperature and rainfall in Sydney over the last 50 years?'", "Using ABS census data: 'How has the proportion of renewable energy usage in households changed across different states?'"],
                  "media": [],
                  "analyticsMeta": {
                    "source": "Curriculum parser v1.3",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                 {
                  "nodeId": "DS5_N13",
                  "description": "Conduct a basic descriptive statistical analysis of a large dataset using digital tools (e.g., spreadsheet software), calculating measures like mean, median, mode, and range.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Apply",
                  "difficulty": 3,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "Processing data and information",
                  "workingScientificallyOutcomes": ["SC5-WS-05"],
                  "literacySkills": ["Use digital tools", "Interpret statistical terms"],
                  "numeracySkills": ["Use spreadsheet functions", "Calculate descriptive statistics", "Handle large numbers"],
                  "prerequisiteNodes": ["DS4_N12", "DS5_N11"],
                  "misconceptions": [
                    "Mean is always the best measure of central tendency.",
                    "Descriptive statistics can prove causation.",
                    "Analysis requires complex programming skills (can use spreadsheets)."
                  ],
                  "cognitiveLoad": {"intrinsic": 3,"extraneous": 2,"germane": 3,"band": 3},
                  "spacingParameter": 10,
                  "retrievalQuestionTemplates": [
                    "Calculate the mean, median, and range for the '[variable]' column in this dataset [link/subset].",
                    "What does the 'median' tell you about this data?",
                    "Which spreadsheet function calculates the average?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Layering-separation",
                    "interactionPattern": "Screencast tutorial + practice dataset",
                    "focusContext": "Demonstrate using spreadsheet functions (AVERAGE, MEDIAN, MODE, MAX, MIN) on a sample large dataset."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Incorrect function usage",
                    "hintType": "Show correct syntax or link to function help documentation"
                  },
                  "resourceMeta": {
                    "mediaType": "video tutorial/spreadsheet file",
                    "readingLevel": "Year 9",
                    "accessibilityFeatures": ["captions", "transcript", "taggedPDF"]
                  },
                  "examQuestionsLinked": ["Data analysis tasks"],
                  "depthStudyComponents": ["Data processing and analysis"],
                  "examples": ["Calculating average rainfall from historical BoM data.", "Finding the median age from census data.", "Determining the range of temperatures recorded by a climate sensor."],
                  "media": ["media/spreadsheet_analysis_tutorial.mp4"],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + Numeracy Guide",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                 {
                  "nodeId": "DS5_N14",
                  "description": "Explain the benefits of using descriptive statistical analysis techniques (like mean, median, graphs) for recognising patterns and communicating findings from large datasets.",
                  "type": "concept",
                  "bloomTaxonomyLevel": "Understand",
                  "difficulty": 2,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "Analysing data and information; Communicating",
                  "workingScientificallyOutcomes": ["SC5-WS-06", "SC5-WS-08"],
                  "literacySkills": ["Explain benefits", "Communicate purpose"],
                  "numeracySkills": ["Understand purpose of statistics"],
                  "prerequisiteNodes": ["DS5_N13"],
                   "misconceptions": [
                    "Showing raw data is always better than summaries.",
                    "Statistics make data more complicated."
                  ],
                  "cognitiveLoad": {"intrinsic": 2,"extraneous": 1,"germane": 2,"band": 2},
                  "spacingParameter": 7,
                  "retrievalQuestionTemplates": [
                    "Why use statistics instead of just showing all the raw data?",
                    "How does calculating the mean help understand a large dataset?",
                    "What's an advantage of using a graph to show data patterns?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Focus-context",
                    "interactionPattern": "Linked-views",
                    "focusContext": "Show a large raw dataset table alongside summary statistics and a graph, highlighting how summaries make patterns clearer."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Struggling to see benefit",
                    "hintType": "Use analogy (e.g., summarizing a long book vs. reading every word)"
                  },
                  "resourceMeta": {
                    "mediaType": "interactive demonstration",
                    "readingLevel": "Year 9",
                    "accessibilityFeatures": ["altText", "clearLayout"]
                  },
                  "examQuestionsLinked": [],
                  "depthStudyComponents": ["Justifying analysis methods", "Communicating findings"],
                  "examples": ["Using average temperature trends makes climate change patterns clearer than daily readings.", "Graphing population data reveals growth patterns difficult to see in tables."],
                  "media": [],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                 {
                  "nodeId": "DS5_N15",
                  "description": "Conduct a simple univariate (one variable) analysis (e.g., histogram, box plot of heights) and a bivariate (two variables) analysis (e.g., scatter plot of height vs. shoe size) using large datasets and digital tools.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Apply",
                  "difficulty": 4,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "Processing data; Analysing data",
                  "workingScientificallyOutcomes": ["SC5-WS-05", "SC5-WS-06"],
                  "literacySkills": ["Use digital tools", "Distinguish analysis types"],
                  "numeracySkills": ["Create histograms/box plots/scatter plots", "Interpret distributions", "Identify correlations visually"],
                  "prerequisiteNodes": ["DS5_N13"],
                  "misconceptions": [
                    "Univariate analysis shows relationships between variables.",
                    "A scatter plot can only show two data points.",
                    "All bivariate relationships are linear."
                  ],
                  "cognitiveLoad": {"intrinsic": 4,"extraneous": 2,"germane": 4,"band": 4},
                  "spacingParameter": 14,
                  "retrievalQuestionTemplates": [
                    "Create a histogram for this data column [data]. What does it show?",
                    "Create a scatter plot for these two variables [data1, data2]. Is there a visual correlation?",
                    "What is the difference between univariate and bivariate analysis?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Small-multiples",
                    "interactionPattern": "Interactive data visualisation tool",
                    "focusContext": "Tool allowing students to select variables from a dataset and generate corresponding histograms, box plots, or scatter plots."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Choosing wrong graph type",
                    "hintType": "Provide guidance on which graph suits which analysis type (histogram for univariate distribution, scatter for bivariate relationship)"
                  },
                  "resourceMeta": {
                    "mediaType": "interactive tool/spreadsheet",
                    "readingLevel": "Year 10",
                    "accessibilityFeatures": ["keyboardNavigation", "toolTips", "clearLabels"]
                  },
                  "examQuestionsLinked": ["Data analysis and interpretation tasks"],
                  "depthStudyComponents": ["Advanced data analysis"],
                  "examples": ["Univariate: Histogram of student ages from census data.", "Bivariate: Scatter plot of ice cream sales vs. temperature from historical data."],
                  "media": ["media/data_vis_tool.html"],
                  "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + Numeracy Guide",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                 {
                  "nodeId": "DS5_N16",
                  "description": "Recognise and explain the critical difference between correlation (variables change together) and causation (one variable causes change in another), identifying potential confounding factors.",
                  "type": "concept",
                  "bloomTaxonomyLevel": "Understand",
                  "difficulty": 4,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "Analysing data and information",
                  "workingScientificallyOutcomes": ["SC5-WS-06"],
                  "literacySkills": ["Explain distinction", "Define key terms", "Identify examples"],
                  "numeracySkills": ["Interpret correlation critically"],
                  "prerequisiteNodes": ["DS5_N15"],
                  "misconceptions": [
                    "Strong correlation always means causation.",
                    "If two things happen at the same time, one must have caused the other.",
                    "Scientific studies always prove causation."
                  ],
                  "cognitiveLoad": {"intrinsic": 4,"extraneous": 1,"germane": 3,"band": 3},
                  "spacingParameter": 14,
                  "retrievalQuestionTemplates": [
                    "Explain 'correlation does not imply causation'.",
                    "Give an example of two variables that are correlated but not causally linked.",
                    "What is a 'confounding factor'?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Small-multiples",
                    "interactionPattern": "Linked-views",
                    "focusContext": "Show scatter plots of spurious correlations (e.g., ice cream sales vs. crime rate) alongside explanations of confounding variables (e.g., temperature)."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Assuming causation from correlation",
                    "hintType": "Prompt student to think of other factors that could influence both variables"
                  },
                  "resourceMeta": {
                    "mediaType": "text/html with interactive graphs",
                    "readingLevel": "Year 10",
                    "accessibilityFeatures": ["altText", "clearLayout"]
                  },
                  "examQuestionsLinked": ["Interpretation of data/studies"],
                  "depthStudyComponents": ["Critical evaluation of results"],
                  "examples": ["Correlation: Ice cream sales and drowning incidents (confounding factor: summer weather).", "Correlation: Number of firefighters at a fire and amount of damage (confounding factor: size of fire)."],
                  "media": ["media/correlation_vs_causation.svg"],
                  "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                {
                  "nodeId": "DS5_N17",
                  "description": "Explore and explain the role of large datasets and statistical analysis in validating significant scientific findings, citing historical or contemporary examples.",
                  "type": "concept",
                  "bloomTaxonomyLevel": "Understand",
                  "difficulty": 3,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "Nature of Science",
                  "literacySkills": ["Explain role", "Cite examples", "Summarise findings"],
                  "numeracySkills": ["Appreciate role of statistics in validation"],
                  "prerequisiteNodes": ["DS5_N11", "DS5_N13", "DS5_N14"],
                  "misconceptions": [
                    "Small experiments are enough to validate major theories.",
                    "Statistical analysis is only used when results are uncertain.",
                    "Historical findings didn't use data analysis."
                  ],
                  "cognitiveLoad": {"intrinsic": 3,"extraneous": 2,"germane": 3,"band": 3},
                  "spacingParameter": 14,
                  "retrievalQuestionTemplates": [
                    "How did large datasets help validate the theory of [example, e.g., dark matter]?",
                    "Why is statistical analysis important for validating scientific claims?",
                    "Give an example where large data analysis changed scientific understanding."
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Layering-separation",
                    "interactionPattern": "Narrative-stepper",
                    "focusContext": "Case study presentation (e.g., Mendel's pea plants) showing initial work, data collection, statistical analysis, and validation/acceptance."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Difficulty linking data to validation",
                    "hintType": "Explain how statistical significance helps rule out chance findings"
                  },
                  "resourceMeta": {
                    "mediaType": "case study/text",
                    "readingLevel": "Year 10",
                    "accessibilityFeatures": ["clearStructure", "summaries"]
                  },
                  "examQuestionsLinked": [],
                  "depthStudyComponents": ["Understanding scientific validation"],
                  "examples": ["Gregor Mendel's experiments with pea plants (requiring statistical analysis of large counts).", "Vera Rubin's discovery of dark matter (analysing rotation curves of many galaxies).", "Development and validation of global climate models using vast amounts of observational data."],
                  "media": [],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                 {
                  "nodeId": "DS5_N18",
                  "description": "Apply data analysis skills to make evidence-based decisions about a familiar, real-world issue (e.g., environmental, health, consumer choice) and assess the potential implications of these decisions.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Evaluate",
                  "difficulty": 5,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "Problem-solving",
                  "workingScientificallyOutcomes": ["SC5-WS-07"],
                  "literacySkills": ["Analyse issue", "Synthesise information", "Justify decision", "Assess implications"],
                  "numeracySkills": ["Apply data analysis", "Weigh evidence"],
                  "prerequisiteNodes": ["DS5_N13", "DS5_N15", "DS5_N16"],
                  "misconceptions": [
                    "Decisions should be based purely on statistics, ignoring other factors.",
                    "There is always one 'right' decision based on the data.",
                    "Implications of a decision are always obvious."
                  ],
                  "cognitiveLoad": {"intrinsic": 5,"extraneous": 2,"germane": 5,"band": 5},
                  "spacingParameter": 28,
                  "retrievalQuestionTemplates": [
                    "Analyse this data [data on issue] to decide the best course of action for [scenario]. Justify your choice.",
                    "What are the potential positive and negative implications of the decision made based on this data [data]?",
                    "How could more data change your decision about [issue]?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Focus-context",
                    "interactionPattern": "Interactive case study",
                    "focusContext": "Scenario presented with relevant datasets (tables, graphs). Students analyse data, make a choice, and justify it, then explore potential consequences."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Difficulty justifying decision or assessing implications",
                    "hintType": "Provide a framework for decision-making (e.g., pros/cons list based on data) or prompts for considering short/long-term impacts"
                  },
                  "resourceMeta": {
                    "mediaType": "interactive simulation/case study",
                    "readingLevel": "Year 10",
                    "accessibilityFeatures": ["clearLayout", "summaries", "keyboardNavigation"]
                  },
                  "examQuestionsLinked": ["Decision-making scenarios based on data"],
                  "depthStudyComponents": ["Applying science to real-world problems", "Evaluation and justification"],
                  "examples": ["Analysing data on local waste generation to propose a recycling initiative.", "Comparing nutritional data and cost for different food options.", "Evaluating data on water usage to decide on conservation measures."],
                  "media": ["media/decision_making_scenario.html"],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                {
                  "nodeId": "DS5_N19",
                  "description": "Use graphical representations of data (e.g., scatter plots, line graphs) to extrapolate (predict beyond data range) or interpolate (estimate within data range) information, acknowledging limitations.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Apply",
                  "difficulty": 3,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "Analysing data and information",
                  "workingScientificallyOutcomes": ["SC5-WS-06"],
                  "literacySkills": ["Interpret graphs", "Make predictions based on trends"],
                  "numeracySkills": ["Read graphs accurately", "Extrapolate trends", "Interpolate values", "Understand limitations"],
                  "prerequisiteNodes": ["DS4_N7", "DS5_N15"],
                   "misconceptions": [
                    "Extrapolation is always accurate.",
                    "Interpolation gives the exact true value.",
                    "Trends always continue linearly forever."
                  ],
                  "cognitiveLoad": {"intrinsic": 3,"extraneous": 1,"germane": 3,"band": 3},
                  "spacingParameter": 10,
                  "retrievalQuestionTemplates": [
                    "Using this graph [graph], interpolate the value for [x-value within range].",
                    "Extrapolate from this graph [graph] to predict the value for [x-value outside range].",
                    "What are the risks of extrapolating too far from the data?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Focus-context",
                    "interactionPattern": "Interactive graph",
                    "focusContext": "Graph with plotted data and line of best fit. User can click/drag to interpolate or extend line to extrapolate, with visual feedback on confidence."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Extrapolating inaccurately or without caution",
                    "hintType": "Show examples where trends change unexpectedly outside the data range"
                  },
                   "resourceMeta": {
                    "mediaType": "interactive graph",
                    "readingLevel": "Year 9",
                    "accessibilityFeatures": ["keyboardNavigation", "altText", "clearLabels"]
                  },
                  "examQuestionsLinked": ["Graph interpretation questions"],
                  "depthStudyComponents": ["Data analysis", "Making predictions"],
                  "examples": ["Interpolating population size between census years from a graph.", "Extrapolating future temperature rise based on historical climate data graph (with caveats)."],
                  "media": ["media/interp_extrap_graph.html"],
                  "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + WS Guide",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                 {
                  "nodeId": "DS5_N20",
                  "description": "Evaluate the strength of conclusions drawn from data, considering sources of uncertainty (e.g., measurement error, sample size, data variability) and potential alternative explanations.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Evaluate",
                  "difficulty": 4,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "Analysing data and information",
                  "workingScientificallyOutcomes": ["SC5-WS-06"],
                  "literacySkills": ["Evaluate conclusions", "Identify uncertainty", "Consider alternatives", "Critical thinking"],
                  "numeracySkills": ["Understand error/variability impact"],
                  "prerequisiteNodes": ["DS4_N13", "DS5_N5", "DS5_N16"],
                   "misconceptions": [
                    "If a conclusion is stated, it must be certain.",
                    "Uncertainty means the conclusion is wrong.",
                    "There is only ever one possible explanation for data."
                  ],
                  "cognitiveLoad": {"intrinsic": 4,"extraneous": 1,"germane": 4,"band": 4},
                  "spacingParameter": 21,
                  "retrievalQuestionTemplates": [
                    "What factors might make the conclusion drawn from this data [data/scenario] uncertain?",
                    "Critique this conclusion [conclusion based on data]. How strong is the evidence?",
                    "Can you think of an alternative explanation for this data pattern [pattern]?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Layering-separation",
                    "interactionPattern": "Interactive critique tool",
                    "focusContext": "Present a conclusion based on data. Prompt students to identify uncertainties and alternative explanations using a checklist or template."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Difficulty identifying uncertainty or alternatives",
                    "hintType": "Provide categories of uncertainty (measurement, sampling) or prompt with 'What else could cause this pattern?'"
                  },
                   "resourceMeta": {
                    "mediaType": "case study/interactive activity",
                    "readingLevel": "Year 10",
                    "accessibilityFeatures": ["clearLayout", "clearInstructions"]
                  },
                  "examQuestionsLinked": ["Evaluation of experimental conclusions"],
                  "depthStudyComponents": ["Evaluating results and conclusions", "Identifying limitations"],
                  "examples": ["Evaluating a conclusion about drug effectiveness, considering sample size and placebo effect.", "Assessing a conclusion based on survey data, considering potential biases in sampling or questions.", "Considering measurement error when evaluating conclusions from physics experiments."],
                  "media": [],
                  "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + SME review",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                {
                  "nodeId": "DS5_N21",
                  "description": "Develop specific criteria relevant to an identified scientific problem or claim to help evaluate potential solutions or the validity of the claim.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Create",
                  "difficulty": 4,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "Problem-solving",
                  "workingScientificallyOutcomes": ["SC5-WS-07"],
                  "literacySkills": ["Identify key factors", "Define criteria", "Prioritise criteria"],
                  "numeracySkills": ["Consider quantifiable aspects"],
                  "prerequisiteNodes": ["DS5_N1", "DS5_N10"],
                   "misconceptions": [
                    "Evaluation criteria are subjective opinions.",
                    "Only one criterion is needed.",
                    "Criteria developed before understanding the problem."
                  ],
                  "cognitiveLoad": {"intrinsic": 4,"extraneous": 1,"germane": 4,"band": 4},
                  "spacingParameter": 14,
                  "retrievalQuestionTemplates": [
                    "Develop 3 criteria to evaluate solutions for [scientific problem].",
                    "What criteria would you use to assess the validity of a claim about [topic]?",
                    "Why are clear evaluation criteria important?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Data-ink ratio",
                    "interactionPattern": "Interactive template/brainstorm tool",
                    "focusContext": "Provide a problem/claim scenario and a structured template for students to brainstorm and refine evaluation criteria."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Developing vague or irrelevant criteria",
                    "hintType": "Prompt with categories (e.g., effectiveness, cost, safety, ethics, feasibility) or suggest SMART criteria (Specific, Measurable, Achievable, Relevant, Time-bound)"
                  },
                   "resourceMeta": {
                    "mediaType": "interactive tool/worksheet",
                    "readingLevel": "Year 10",
                    "accessibilityFeatures": ["clearInstructions", "keyboardAccess"]
                  },
                  "examQuestionsLinked": [],
                  "depthStudyComponents": ["Designing investigations", "Evaluating solutions"],
                  "examples": ["Criteria for evaluating a new water purification method: effectiveness (purity level), cost, speed, environmental impact, ease of use.", "Criteria for evaluating a climate change mitigation strategy: CO2 reduction potential, cost, technological readiness, social acceptance."],
                  "media": [],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                {
                  "nodeId": "DS5_N22",
                  "description": "Evaluate different approaches or strategies used to solve a scientific problem or analyse data, assessing their suitability based on defined criteria.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Evaluate",
                  "difficulty": 4,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "Problem-solving",
                  "workingScientificallyOutcomes": ["SC5-WS-07"],
                  "literacySkills": ["Compare and contrast approaches", "Evaluate effectiveness", "Justify assessment"],
                  "numeracySkills": ["Assess quantitative aspects of approaches"],
                  "prerequisiteNodes": ["DS5_N21"],
                   "misconceptions": [
                    "There is always one 'best' way to solve a problem.",
                    "The most complex approach is always the best.",
                    "Evaluation is just stating a preference."
                  ],
                  "cognitiveLoad": {"intrinsic": 4,"extraneous": 1,"germane": 4,"band": 4},
                  "spacingParameter": 21,
                  "retrievalQuestionTemplates": [
                    "Compare approach A and approach B for analysing this data [data]. Which is more suitable based on [criteria]?",
                    "Evaluate the pros and cons of two different methods for [solving scientific problem].",
                    "Justify why one data analysis technique might be preferred over another for a specific dataset."
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Small-multiples",
                    "interactionPattern": "Linked-views",
                    "focusContext": "Side-by-side comparison of different approaches/strategies, linked to evaluation criteria checklist."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Struggling to compare systematically",
                    "hintType": "Provide a comparison table template with rows for criteria and columns for approaches"
                  },
                   "resourceMeta": {
                    "mediaType": "case study/comparison table",
                    "readingLevel": "Year 10",
                    "accessibilityFeatures": ["clearLayout", "structuredComparison"]
                  },
                  "examQuestionsLinked": ["Evaluating experimental designs or methods"],
                  "depthStudyComponents": ["Evaluating methodologies", "Justifying chosen approach"],
                  "examples": ["Comparing different methods for measuring reaction rates (e.g., gas collection vs. mass loss).", "Evaluating different statistical tests for analysing a specific type of data.", "Comparing observational study vs. controlled experiment for investigating a health outcome."],
                  "media": [],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                 {
                  "nodeId": "DS5_N23",
                  "description": "Recognise how scientific texts and communications (e.g., articles, presentations) use evidence, language, and structure to develop arguments, adopt a perspective, and establish authority.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Analyse",
                  "difficulty": 4,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "Communicating",
                  "workingScientificallyOutcomes": ["SC5-WS-08"],
                  "literacySkills": ["Analyse text structure", "Identify persuasive techniques", "Evaluate author's perspective/authority", "Critical reading"],
                  "numeracySkills": ["Evaluate use of data/stats as evidence"],
                  "prerequisiteNodes": ["DS5_N6", "DS5_N3"],
                   "misconceptions": [
                    "Scientific writing is always completely objective and neutral.",
                    "The way information is presented doesn't affect its interpretation.",
                    "Authority comes solely from qualifications, not the strength of the argument."
                  ],
                  "cognitiveLoad": {"intrinsic": 4,"extraneous": 2,"germane": 4,"band": 4},
                  "spacingParameter": 14,
                  "retrievalQuestionTemplates": [
                    "Analyse this [scientific text excerpt]. How does the author build their argument?",
                    "What techniques does this text use to persuade the reader?",
                    "How does the author establish credibility or authority in this piece?"
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "Layering-separation",
                    "interactionPattern": "Annotation tool",
                    "focusContext": "Students read sample scientific texts and highlight/annotate features related to argument structure, evidence use, persuasive language, and authority signals."
                  },
                  "adaptiveScaffold": {
                    "trigger": "Difficulty identifying techniques",
                    "hintType": "Provide a checklist of rhetorical/argumentative devices (e.g., use of statistics, expert quotes, addressing counter-arguments, specific terminology)"
                  },
                   "resourceMeta": {
                    "mediaType": "interactive text analysis tool",
                    "readingLevel": "Year 10",
                    "accessibilityFeatures": ["keyboardNavigation", "clearInstructions"]
                  },
                  "examQuestionsLinked": ["Critical analysis of scientific texts"],
                  "depthStudyComponents": ["Literature review", "Evaluating scientific communication"],
                  "examples": ["Analysing how a research paper uses Introduction-Methods-Results-Discussion structure.", "Identifying use of cautious language ('suggests', 'may indicate') vs. strong claims.", "Recognising appeals to authority or emotion in popular science articles."],
                  "media": [],
                   "analyticsMeta": {
                    "source": "Curriculum parser v1.3 + Writing Guide",
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
```
