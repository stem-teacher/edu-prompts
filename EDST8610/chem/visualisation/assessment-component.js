import React, { useState, useEffect } from 'react';

const AssessmentGenerator = ({ knowledgeGraph, targetNodeId }) => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [assessmentItems, setAssessmentItems] = useState([]);
  const [bloomLevel, setBloomLevel] = useState('all');
  const [questionCount, setQuestionCount] = useState(5);
  
  useEffect(() => {
    if (!knowledgeGraph || !targetNodeId) return;
    
    // Find the target node in the knowledge graph
    const node = findNodeById(knowledgeGraph, targetNodeId);
    if (node) {
      setSelectedNode(node);
      generateAssessment(node);
    }
  }, [knowledgeGraph, targetNodeId, bloomLevel, questionCount]);
  
  const findNodeById = (graph, nodeId) => {
    for (const course of graph.courses) {
      for (const module of course.modules) {
        for (const topic of module.topics) {
          const foundNode = topic.knowledgeNodes.find(node => node.nodeId === nodeId);
          if (foundNode) return foundNode;
        }
      }
    }
    return null;
  };
  
  const generateAssessment = (node) => {
    if (!node) return;
    
    // Find all prerequisite nodes
    const prerequisites = [];
    if (node.prerequisiteNodes && node.prerequisiteNodes.length > 0) {
      for (const prereqId of node.prerequisiteNodes) {
        const prereqNode = findNodeById(knowledgeGraph, prereqId);
        if (prereqNode) prerequisites.push(prereqNode);
      }
    }
    
    // Generate questions covering the target node and prerequisites
    const questions = [];
    
    // Include questions for the target node
    const targetQuestions = generateQuestionsForNode(node);
    questions.push(...targetQuestions);
    
    // Include questions for prerequisites
    for (const prereq of prerequisites) {
      const prereqQuestions = generateQuestionsForNode(prereq);
      questions.push(...prereqQuestions);
    }
    
    // Filter by Bloom's level if selected
    let filteredQuestions = questions;
    if (bloomLevel !== 'all') {
      filteredQuestions = questions.filter(q => q.bloomLevel === bloomLevel);
    }
    
    // Limit the number of questions
    const limitedQuestions = filteredQuestions.slice(0, questionCount);
    
    setAssessmentItems(limitedQuestions);
  };
  
  const generateQuestionsForNode = (node) => {
    // This would connect to a database of questions or use templates
    // For now, we'll generate sample questions based on node type and Bloom's level
    
    const questions = [];
    
    const nodeType = node.type;
    const bloomLevel = node.bloomTaxonomyLevel;
    
    // Check for existing exam questions
    if (node.examQuestionsLinked && node.examQuestionsLinked.length > 0) {
      questions.push({
        id: `${node.nodeId}-exam-1`,
        text: `Exam question ${node.examQuestionsLinked[0]} (HSC past paper)`,
        type: 'existing-exam',
        nodeId: node.nodeId,
        bloomLevel: bloomLevel,
        marks: 4
      });
    }
    
    // Generate question based on node type
    switch (nodeType) {
      case 'nomenclature_rule':
        questions.push({
          id: `${node.nodeId}-nom-1`,
          text: `Name the following compound according to IUPAC conventions: [Structure of ${node.examples[0]}]`,
          type: 'short-answer',
          nodeId: node.nodeId,
          bloomLevel: bloomLevel,
          marks: 2
        });
        break;
        
      case 'reaction_type':
        questions.push({
          id: `${node.nodeId}-rxn-1`,
          text: `Write a balanced equation showing the ${node.description.includes('addition') ? 'addition' : 
                 node.description.includes('substitution') ? 'substitution' : 
                 node.description.includes('elimination') ? 'elimination' : 
                 node.description.includes('oxidation') ? 'oxidation' : 
                 'condensation'} reaction of ${node.examples[0].split(' + ')[0]}.`,
          type: 'equation',
          nodeId: node.nodeId,
          bloomLevel: bloomLevel,
          marks: 3
        });
        break;
        
      case 'reaction_synthesis':
        questions.push({
          id: `${node.nodeId}-synth-1`,
          text: `Describe the conditions required for the ${node.examples[0].split(' + ')[0]} reaction with ${node.examples[0].split(' + ')[1].split(' ->')[0]}.`,
          type: 'short-answer',
          nodeId: node.nodeId,
          bloomLevel: bloomLevel,
          marks: 2
        });
        break;
        
      case 'process_representation':
        questions.push({
          id: `${node.nodeId}-proc-1`,
          text: `Draw a flow chart showing the synthesis of ${node.examples[0].split(':')[1].trim().split(' ->').pop().trim()} from ${node.examples[0].split(':')[1].trim().split(' ->')[0].trim()}.`,
          type: 'flow-chart',
          nodeId: node.nodeId,
          bloomLevel: bloomLevel,
          marks: 6
        });
        break;
        
      case 'structure_representation':
        questions.push({
          id: `${node.nodeId}-struct-1`,
          text: `Draw the structural formula for ${node.examples[0]}.`,
          type: 'drawing',
          nodeId: node.nodeId,
          bloomLevel: bloomLevel,
          marks: 2
        });
        break;
        
      default:
        questions.push({
          id: `${node.nodeId}-gen-1`,
          text: `Explain the concept of ${node.description.split(' ')[0]} ${node.description.split(' ')[1]} ${node.description.split(' ')[2]}.`,
          type: 'short-answer',
          nodeId: node.nodeId,
          bloomLevel: bloomLevel,
          marks: 3
        });
    }
    
    // Add a second question based on Bloom's level
    switch (bloomLevel) {
      case 'Remember':
        questions.push({
          id: `${node.nodeId}-remember-1`,
          text: `Define the term '${node.description.split(' ')[2]}' as used in organic chemistry.`,
          type: 'short-answer',
          nodeId: node.nodeId,
          bloomLevel: bloomLevel,
          marks: 1
        });
        break;
        
      case 'Understand':
        questions.push({
          id: `${node.nodeId}-understand-1`,
          text: `Explain why ${node.description.split(' ').slice(0, 5).join(' ')} is important in organic chemistry.`,
          type: 'short-answer',
          nodeId: node.nodeId,
          bloomLevel: bloomLevel,
          marks: 2
        });
        break;
        
      case 'Apply':
        questions.push({
          id: `${node.nodeId}-apply-1`,
          text: `Apply your knowledge of ${node.description.split(' ').slice(0, 3).join(' ')} to solve the following problem: [Problem based on examples]`,
          type: 'problem-solving',
          nodeId: node.nodeId,
          bloomLevel: bloomLevel,
          marks: 3
        });
        break;
        
      case 'Analyse':
        questions.push({
          id: `${node.nodeId}-analyse-1`,
          text: `Analyse the following reaction mechanism and explain each step: [Mechanism related to node]`,
          type: 'extended-response',
          nodeId: node.nodeId,
          bloomLevel: bloomLevel,
          marks: 4
        });
        break;
        
      case 'Evaluate':
        questions.push({
          id: `${node.nodeId}-evaluate-1`,
          text: `Compare and evaluate two different methods for synthesizing ${node.examples ? node.examples[0].split(' ')[0] : 'an organic compound'}.`,
          type: 'extended-response',
          nodeId: node.nodeId,
          bloomLevel: bloomLevel,
          marks: 5
        });
        break;
        
      case 'Create':
        questions.push({
          id: `${node.nodeId}-create-1`,
          text: `Design a multi-step synthesis pathway to convert ${node.examples ? node.examples[0].split(' ')[0] : 'an alkane'} to ${node.examples ? node.examples[0].split(' ').pop() : 'an ester'}.`,
          type: 'synthesis-planning',
          nodeId: node.nodeId,
          bloomLevel: bloomLevel,
          marks: 6
        });
        break;
        
      default:
        // No additional question
    }
    
    return questions;
  };
  
  const totalMarks = assessmentItems.reduce((sum, item) => sum + item.marks, 0);
  
  return (
    <div className="assessment-generator">
      <div className="assessment-controls">
        <div className="filter-group">
          <label>Bloom's Taxonomy Level:</label>
          <select value={bloomLevel} onChange={(e) => setBloomLevel(e.target.value)}>
            <option value="all">All Levels</option>
            <option value="Remember">Remember</option>
            <option value="Understand">Understand</option>
            <option value="Apply">Apply</option>
            <option value="Analyse">Analyse</option>
            <option value="Evaluate">Evaluate</option>
            <option value="Create">Create</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label>Number of Questions:</label>
          <select value={questionCount} onChange={(e) => setQuestionCount(parseInt(e.target.value))}>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
      </div>
      
      <div className="assessment-preview">
        <h2>Assessment for: {selectedNode?.description?.split('.')[0]}</h2>
        <p className="assessment-info">Total marks: {totalMarks} | Questions: {assessmentItems.length}</p>
        
        <div className="assessment-items">
          {assessmentItems.map((item, index) => (
            <div key={item.id} className="assessment-item">
              <div className="question-header">
                <span className="question-number">Question {index + 1}</span>
                <span className="question-marks">{item.marks} mark{item.marks !== 1 ? 's' : ''}</span>
                <span className={`bloom-level bloom-${item.bloomLevel.toLowerCase()}`}>{item.bloomLevel}</span>
              </div>
              
              <p className="question-text">{item.text}</p>
              
              <div className="question-metadata">
                <span className="question-type">{item.type}</span>
                <span className="node-reference">Node: {item.nodeId}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="assessment-export">
        <button>Export as PDF</button>
        <button>Export as Word Document</button>
        <button>Save to Question Bank</button>
      </div>
      
      <style jsx>{`
        .assessment-generator {
          font-family: 'Inter', sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .assessment-controls {
          display: flex;
          margin-bottom: 20px;
          background: #f9f9f9;
          padding: 15px;
          border-radius: 8px;
        }
        
        .filter-group {
          margin-right: 20px;
        }
        
        .filter-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }
        
        .filter-group select {
          padding: 8px;
          border-radius: 4px;
          border: 1px solid #ddd;
        }
        
        .assessment-preview {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          margin-bottom: 20px;
        }
        
        .assessment-info {
          color: #666;
          font-style: italic;
          margin-bottom: 20px;
        }
        
        .assessment-items {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .assessment-item {
          padding: 15px;
          border: 1px solid #eee;
          border-radius: 8px;
          background: #fafafa;
        }
        
        .question-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid #eee;
        }
        
        .question-number {
          font-weight: bold;
        }
        
        .question-marks {
          background: #f0f0f0;
          padding: 3px 8px;
          border-radius: 4px;
          font-size: 0.9em;
        }
        
        .bloom-level {
          padding: 3px 8px;
          border-radius: 4px;
          color: white;
          font-size: 0.8em;
        }
        
        .bloom-remember { background: #74ADD1; }
        .bloom-understand { background: #4575B4; }
        .bloom-apply { background: #ABD9E9; color: #333; }
        .bloom-analyse { background: #FDAE61; color: #333; }
        .bloom-evaluate { background: #F46D43; }
        .bloom-create { background: #D73027; }
        
        .question-text {
          margin-bottom: 15px;
          font-size: 1.1em;
        }
        
        .question-metadata {
          display: flex;
          justify-content: space-between;
          font-size: 0.8em;
          color: #666;
        }
        
        .assessment-export {
          display: flex;
          gap: 10px;
        }
        
        .assessment-export button {
          padding: 8px 16px;
          background: #2e8b57;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default AssessmentGenerator;