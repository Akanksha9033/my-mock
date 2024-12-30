import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function QuizPage() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
      question: "Which of the following is NOT a characteristic of a project?",
      options: [
        "Temporary in nature",
        "Produces a unique output",
        "Requires stakeholder involvement",
        "Repetitive and ongoing",
      ],
    },
    {
      question: "Which of these is a key factor in project success?",
      options: [
        "Clear objectives",
        "Unclear scope",
        "Constant budget cuts",
        "Lack of stakeholder communication",
      ],
    },
    {
      question: "What is the primary role of a project manager?",
      options: [
        "Directing project execution",
        "Providing technical expertise",
        "Managing project finances",
        "Monitoring team productivity",
      ],
    },
    
    {
      question: "What is the critical path in a project schedule?",
      options: [
        'The longest path through the project schedule',
        'The path with the most dependencies',
        'The path with the fewest resources',
        'The shortest path through the project schedule'
      ]
    },
    {
      question: "What does a Gantt chart represent?",
      options: [
        'Project timelines and task dependencies',
        'Risk management',
        'Resource allocation',
        'Project costs'
      ]
    },
    {
      question: "Which of the following is NOT a phase in the project management lifecycle?",
      options: [
        'Initiation',
        'Planning',
        'Execution',
        'Execution Analysis'
      ]
    },
    {
      question: "What does SWOT analysis stand for in project management?",
      options: [
        'Strengths, Weaknesses, Opportunities, Threats',
        'Scheduling, Work, Organization, Tracking',
        'Systematic Work, Optimization, Testing',
        'Success, Weakness, Operations, Task'
      ]
    },
    {
      question: "What is a Work Breakdown Structure (WBS)?",
      options: [
        'A hierarchical decomposition of the total scope of work',
        'A method of analyzing project risks',
        'A tool for scheduling tasks',
        'A technique to measure project performance'
      ]
    },
    {
      question: "Which of the following is the best example of a project constraint?",
      options: [
        'Time',
        'Employee engagement',
        'Stakeholder involvement',
        'Product quality'
      ]
    },
    {
      question: "What is the main purpose of project scope management?",
      options: [
        'To define and control what is included in the project',
        'To measure project performance',
        'To track project costs',
        'To allocate resources effectively'
      ]
    },
    {
      question: "What is resource leveling in project management?",
      options: [
        'Balancing resources to avoid over-allocation',
        'Assigning resources based on task priority',
        'Creating a budget for resource allocation',
        'Setting milestones for resource usage'
      ]
    },
    {
      question: "Which of the following is an example of a milestone in project management?",
      options: [
        'Project completion',
        'Daily meetings',
        'Resource allocation',
        'Risk analysis'
      ]
    },
    {
      question: "What does the term 'stakeholder' refer to in a project?",
      options: [
        'Individuals or groups who are affected by or have an interest in the project',
        'The person responsible for the project budget',
        'The team working on the project tasks',
        'The external consultants hired for the project'
      ]
    },
    {
      question: "What is a key benefit of project risk management?",
      options: [
        'Identifying and addressing potential project issues before they occur',
        'Speeding up the project completion time',
        'Improving resource allocation efficiency',
        'Maximizing project profits'
      ]
    },
    {
      question: "Which of the following is an example of a qualitative risk analysis technique?",
      options: [
        'Risk probability and impact assessment',
        'Monte Carlo simulation',
        'Decision tree analysis',
        'Sensitivity analysis'
      ]
    },
    {
      question: "Which project management methodology emphasizes flexibility and iterative progress?",
      options: [
        'Agile',
        'Waterfall',
        'Lean',
        'Critical Path Method (CPM)'
      ]
    }
  ];// Add more questions here, ensure you have 15 questions
  

  const handleNavigate = (section) => {
    if (section === 'section-2') {
      navigate('/fill-blank');
    } else if (section === 'section-3') {
      navigate('/drag-drop');
    } else if (section === 'section-4') {
      navigate('/hotspot');
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null); // Reset selected option for next question
    }
  };

  const handleAnswerSelection = (option) => {
    setSelectedOption(option); // Set selected option for the current question
    if (!answeredQuestions.includes(currentQuestionIndex)) {
      setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="text-lg font-semibold">Edzest Education Services</div>
        <div className="space-x-4">
          <button
            onClick={() => handleNavigate('section-2')}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Section 2: Fill in the Blanks
          </button>
          <button
            onClick={() => handleNavigate('section-3')}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Section 3: Drag and Drop
          </button>
          <button
            onClick={() => handleNavigate('section-4')}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Section 4: Hotspot
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto py-6 px-4">
        <div className="bg-white rounded shadow p-6">
          {/* Quiz Question Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quiz 1</h2>
            <h3 className="text-lg font-medium mb-2">Q. {currentQuestionIndex + 1} of {questions.length}</h3>
            <p className="text-gray-700 mb-4">{questions[currentQuestionIndex].question}</p>

            <div className="space-y-2">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="radio"
                    name="option"
                    id={`option-${index}`}
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleAnswerSelection(option)} // Set the selected option
                    className="mr-2"
                  />
                  <label htmlFor={`option-${index}`} className="text-gray-800">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Mark for Review
            </button>
            <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
              Clear
            </button>
          </div>

          {/* Next Question Button */}
          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={handleNextQuestion}
              className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${currentQuestionIndex === questions.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={currentQuestionIndex === questions.length - 1}
            >
              {currentQuestionIndex === questions.length - 1 ? 'End Quiz' : 'Next Question'}
            </button>
          </div>
        </div>

        {/* Question Navigation Panel */}
        <div className="mt-6 bg-white rounded shadow p-4">
          <h4 className="text-lg font-semibold mb-4">Question Navigation</h4>
          <div className="grid grid-cols-10 gap-2">
            {Array.from({ length: questions.length }, (_, i) => (
              <button
                key={i}
                className={`w-8 h-8 rounded-full border text-sm font-medium ${
                  answeredQuestions.includes(i)
                    ? 'bg-green-500 text-white'  // Green for answered questions
                    : 'bg-red-500 text-white'  // Red for unanswered questions
                }`}
                onClick={() => setCurrentQuestionIndex(i)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-6 flex justify-between items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Previous
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
