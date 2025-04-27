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
          "topics": [
            {
              "topicName": "Investigating Questions & Claims",
              "inquiryQuestions": [
                "How do scientists design robust investigations to test claims?"
              ],
              "syllabusOutcomes": [
                {
                  "outcomeCode": "SC5-DA2-01",
                  "description": "Assesses the use of scientific knowledge and data in evidence-based decisions.",
                  "bloomsLevel": "Evaluate"
                }
              ],
              "workingScientificallyOutcomes": [
                {"code": "SC5-WS-07", "description": "Selects suitable problem-solving strategies and evaluates proposed solutions."}
              ],
              "knowledgeNodes": [
                {
                  "nodeId": "DS5_QC_N1",
                  "description": "Differentiate investigable from non-investigable questions and define testable claims in scientific contexts.",
                  "type": "concept",
                  "bloomTaxonomyLevel": "Understand",
                  "difficulty": 1,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "SC5-WS-07",
                  "literacySkills": ["Keyword identification","Question classification"],
                  "numeracySkills": [],
                  "prerequisiteNodes": [],
                  "misconceptions": [
                    "Any interesting question can be answered by a simple experiment."
                  ],
                  "cognitiveLoad": {"intrinsic": 2,"extraneous": 1,"germane": 2,"band": 2},
                  "spacingParameter": 4,
                  "retrievalQuestionTemplates": [
                    "State two features that make a question scientifically investigable."
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "layering-separation",
                    "interactionPattern": "hover-tooltip",
                    "focusContext": "NA"
                  },
                  "adaptiveScaffold": {
                    "trigger": "misconception.detected",
                    "hintType": "text-explanation"
                  },
                  "resourceMeta": {
                    "mediaType": "svg",
                    "readingLevel": "Year 9",
                    "accessibilityFeatures": ["altText","highContrast"]
                  },
                  "examples": ["Do energy drinks improve sprint speed? vs Are energy drinks bad?"],
                  "examQuestionsLinked": [],
                  "depthStudyComponents": [],
                  "media": ["media/investigable_vs_non.svg"],
                  "analyticsMeta": {
                    "source": "Curriculum parser v1.3",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Strong"
                  }
                },
                {
                  "nodeId": "DS5_QC_N2",
                  "description": "Formulate evaluation criteria (validity, reliability, ethics, resources) for judging if online content is trustworthy.",
                  "type": "skill",
                  "bloomTaxonomyLevel": "Apply",
                  "difficulty": 2,
                  "syllabusReference": "SC5-DA2-01",
                  "workingScientificallyCategory": "SC5-WS-07",
                  "literacySkills": ["Critical reading"],
                  "numeracySkills": [],
                  "prerequisiteNodes": ["DS5_QC_N1"],
                  "misconceptions": [
                    "A study published online is automatically credible."
                  ],
                  "cognitiveLoad": {"intrinsic": 3,"extraneous": 1,"germane": 2,"band": 2},
                  "spacingParameter": 6,
                  "retrievalQuestionTemplates": [
                    "List two criteria to assess the credibility of an online science article."
                  ],
                  "visualisationDesign": {
                    "tuftePrinciple": "focus-context",
                    "interactionPattern": "drag-filter",
                    "focusContext": "Credibility heat-map"
                  },
                  "adaptiveScaffold": {
                    "trigger": "low-performance",
                    "hintType": "worked-example"
                  },
                  "resourceMeta": {
                    "mediaType": "html",
                    "readingLevel": "Year 10",
                    "accessibilityFeatures": ["keyboardNav"]
                  },
                  "examQuestionsLinked": [],
                  "examples": ["CRAAP test adapted for science"],
                  "depthStudyComponents": [],
                  "media": ["media/credibility_heatmap.html"],
                  "analyticsMeta": {
                    "source": "Curriculum parser v1.3",
                    "lastValidated": "2025-04-25",
                    "evidenceStrength": "Moderate"
                  }
                }
              ]
            },
            {
              "topicName": "Large Datasets & Scientific Argumentation",
              "inquiryQuestions": [
                "How do statistics strengthen arguments?"
              ],
              "knowledgeNodes": [
                {
                  "nodeId": "DS5_LD_N2",
                  "description": "Perform univariate descriptive statistics (mean, median, range, IQR) on datasets using a spreadsheet.",
                  "type": "skill",
                  "prerequisiteNodes": ["DS5_LD_N1"]
                },
                {
                  "nodeId": "DS5_LD_N3",
                  "prerequisiteNodes": ["DS5_LD_N1","DS5_LD_N2"]
                }
              ]
            },
            {
              "topicName": "Pseudoscience & Data Distortion",
              "knowledgeNodes": [
                {
                  "nodeId": "DS5_PS_N2",
                  "description": "Critique distorted data visualisations (... truncated axes...) and suggest corrections.",
                  "cognitiveLoad": {"intrinsic": 2,"extraneous": 1,"germane": 3,"band": 2}
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
