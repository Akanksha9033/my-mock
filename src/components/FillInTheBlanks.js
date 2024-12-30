import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FillBlankPage = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill(''));

  const questions = [
    { question: 'The capital of Japan is ___', options: ['Tokyo', 'Beijing', 'Seoul', 'Bangkok'] },
    { question: 'The largest ocean on Earth is the ___', options: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'] },
    { question: 'The Eiffel Tower is located in ___', options: ['Paris', 'London', 'New York', 'Berlin'] },
    { question: 'The longest river in the world is the ___', options: ['Nile', 'Amazon', 'Yangtze', 'Mississippi'] },
    { question: 'The Earth revolves around the ___', options: ['Sun', 'Moon', 'Mars', 'Venus'] }
  ];

  const handleSelectChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("Navigating to drag-and-drop after completing quiz");
      navigate('/drag-drop'); // Navigate to the drag-and-drop page after completing the quiz
    }
  };

  const handleSubmit = () => {
    // In real-world, you'd send the data to the server or save it
    console.log('Form Submitted:', answers);

    // After submission, navigate to drag-and-drop page
    console.log("Navigating to drag-and-drop on submit");
    navigate('/drag-drop');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Fill in the Blanks Test</h1>

      {/* Quiz Question Section */}
      <div className="bg-white rounded shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Question {currentQuestionIndex + 1} of {questions.length}</h2>
        <p className="text-lg mb-4">{questions[currentQuestionIndex].question}</p>
        
        {/* Dropdown for selecting answer */}
        <select
          value={answers[currentQuestionIndex]}
          onChange={(e) => handleSelectChange(currentQuestionIndex, e.target.value)}
          className="border rounded p-2 w-full mb-4"
        >
          <option value="">Select Answer</option>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>

        {/* Action Buttons */}
        <div className="mt-6 flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Mark for Review
          </button>
          <button
            onClick={() => setAnswers(Array(5).fill(''))}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            Clear
          </button>
        </div>

        {/* Next Question Button */}
        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={handleNext}
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
        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: questions.length }, (_, i) => (
            <button
              key={i}
              className={`w-8 h-8 rounded-full border text-sm font-medium ${answers[i] ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
              onClick={() => setCurrentQuestionIndex(i)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
          disabled={currentQuestionIndex === 0}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Previous
        </button>
        <button
          onClick={handleSubmit} // Trigger the submit action
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FillBlankPage;
