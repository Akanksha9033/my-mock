import React, { useState } from 'react';
import './TestPage.css';

const TestPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  // Example questions
  const questions = [
    { id: 1, question: 'What is React?', type: 'mcq' },
    { id: 2, question: 'Drag and drop the components.', type: 'drag-drop' },
    { id: 3, question: 'Fill in the blank: React is a _____ library.', type: 'fill-blank' },
    { id: 4, question: 'Identify the area on the image.', type: 'hotspot' },
  ];

  // Handle next question
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Handle test submission
  const handleSubmit = () => {
    setShowPopup(true);
  };

  // Close the popup
  const handleClosePopup = () => {
    setShowPopup(false);
    // Redirect or perform other actions if needed
  };

  return (
    <div className="test-page-container">
      {/* Display current question */}
      <h2 className="test-title">Question {currentQuestionIndex + 1} of {questions.length}</h2>
      <div className="question-content">
        <p>{questions[currentQuestionIndex].question}</p>
      </div>

      {/* Navigation buttons */}
      {currentQuestionIndex < questions.length - 1 && (
        <button className="next-button" onClick={handleNext}>
          Next
        </button>
      )}

      {/* Submit button */}
      {currentQuestionIndex === questions.length - 1 && (
        <button className="submit-button" onClick={handleSubmit}>
          Submit Test
        </button>
      )}

      {/* Popup message */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Test Submitted!</h2>
            <p>You have successfully submitted the test.</p>
            <button className="close-popup-button" onClick={handleClosePopup}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestPage;
