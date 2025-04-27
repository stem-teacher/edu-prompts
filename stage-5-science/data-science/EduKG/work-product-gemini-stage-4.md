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
    }
  ]
}
