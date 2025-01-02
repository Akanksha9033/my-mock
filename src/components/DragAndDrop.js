import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DragDropPage = () => {
  const navigate = useNavigate();
  
  // State to track the correct answers
  const [answers, setAnswers] = useState({
    france: null,
    germany: null,
    japan: null,
    india: null,
    usa: null,
    italy: null,
    uk: null,
    brazil: null,
    canada: null,
  });
  
  // State to track the submission status
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // State to track if the next section is visible
  const [showNextSection, setShowNextSection] = useState(false);
  
  // Correct answers for validation
  const correctAnswers = {
    france: 'Paris',
    germany: 'Berlin',
    japan: 'Tokyo',
    india: 'New Delhi',
    usa: 'Washington D.C.',
    italy: 'Rome',
    uk: 'London',
    brazil: 'Brasília',
    canada: 'Ottawa',
  };

  // Handle drop action
  const handleDrop = (e, country) => {
    e.preventDefault();
    const selectedCapital = e.dataTransfer.getData('capital');
    setAnswers((prev) => ({
      ...prev,
      [country]: selectedCapital,
    }));
  };

  // Allow dropping on the drop targets
  const allowDrop = (e) => {
    e.preventDefault();
  };

  // Handle drag start
  const handleDragStart = (e, capital) => {
    e.dataTransfer.setData('capital', capital);
  };

  // Submit function to check answers and show the next section
  const handleSubmit = () => {
    setIsSubmitted(true);
    setShowNextSection(true); // Show the next section after submission
  };

  // Check if all answers are correct
  const isCorrect = (country) => answers[country] === correctAnswers[country];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Drag and Drop Test</h1>
      <p>You are managing a highly visible project for your organization. The Project sponsor is regularly following up with you on the costs you are sending behind maintaining the quality of your products to be delivered. Keep in mind that there are many small products which are being delivered at different phases of the project. Match each of the following cost-types with their correct scenario/definition</p>
      
      <div className="flex space-x-4 mt-4">
        {/* Draggable Capitals */}
        <div>
          <p
            className="cursor-pointer p-2 bg-blue-200 rounded mb-2"
            draggable
            onDragStart={(e) => handleDragStart(e, 'Paris')}
          >
            Paris
          </p>
          <p
            className="cursor-pointer p-2 bg-blue-200 rounded mb-2"
            draggable
            onDragStart={(e) => handleDragStart(e, 'Berlin')}
          >
            Berlin
          </p>
          <p
            className="cursor-pointer p-2 bg-blue-200 rounded mb-2"
            draggable
            onDragStart={(e) => handleDragStart(e, 'Tokyo')}
          >
            Tokyo
          </p>
          <p
            className="cursor-pointer p-2 bg-blue-200 rounded mb-2"
            draggable
            onDragStart={(e) => handleDragStart(e, 'New Delhi')}
          >
            New Delhi
          </p>
          <p
            className="cursor-pointer p-2 bg-blue-200 rounded mb-2"
            draggable
            onDragStart={(e) => handleDragStart(e, 'Washington D.C.')}
          >
            Washington D.C.
          </p>
          <p
            className="cursor-pointer p-2 bg-blue-200 rounded mb-2"
            draggable
            onDragStart={(e) => handleDragStart(e, 'Rome')}
          >
            Rome
          </p>
          <p
            className="cursor-pointer p-2 bg-blue-200 rounded mb-2"
            draggable
            onDragStart={(e) => handleDragStart(e, 'London')}
          >
            London
          </p>
          <p
            className="cursor-pointer p-2 bg-blue-200 rounded mb-2"
            draggable
            onDragStart={(e) => handleDragStart(e, 'Brasília')}
          >
            Brasília
          </p>
          <p
            className="cursor-pointer p-2 bg-blue-200 rounded mb-2"
            draggable
            onDragStart={(e) => handleDragStart(e, 'Ottawa')}
          >
            Ottawa
          </p>
        </div>

        {/* Drop Targets */}
        <div className="space-y-4">
          <div
            className={`border p-4 rounded text-center ${isSubmitted && isCorrect('france') ? 'bg-green-200' : ''}`}
            onDrop={(e) => handleDrop(e, 'france')}
            onDragOver={allowDrop}
          >
            {answers.france ? answers.france : 'Drop France Capital'}
          </div>
          <div
            className={`border p-4 rounded text-center ${isSubmitted && isCorrect('germany') ? 'bg-green-200' : ''}`}
            onDrop={(e) => handleDrop(e, 'germany')}
            onDragOver={allowDrop}
          >
            {answers.germany ? answers.germany : 'Drop Germany Capital'}
          </div>
          <div
            className={`border p-4 rounded text-center ${isSubmitted && isCorrect('japan') ? 'bg-green-200' : ''}`}
            onDrop={(e) => handleDrop(e, 'japan')}
            onDragOver={allowDrop}
          >
            {answers.japan ? answers.japan : 'Drop Japan Capital'}
          </div>
          <div
            className={`border p-4 rounded text-center ${isSubmitted && isCorrect('india') ? 'bg-green-200' : ''}`}
            onDrop={(e) => handleDrop(e, 'india')}
            onDragOver={allowDrop}
          >
            {answers.india ? answers.india : 'Drop India Capital'}
          </div>
          <div
            className={`border p-4 rounded text-center ${isSubmitted && isCorrect('usa') ? 'bg-green-200' : ''}`}
            onDrop={(e) => handleDrop(e, 'usa')}
            onDragOver={allowDrop}
          >
            {answers.usa ? answers.usa : 'Drop USA Capital'}
          </div>
          <div
            className={`border p-4 rounded text-center ${isSubmitted && isCorrect('italy') ? 'bg-green-200' : ''}`}
            onDrop={(e) => handleDrop(e, 'italy')}
            onDragOver={allowDrop}
          >
            {answers.italy ? answers.italy : 'Drop Italy Capital'}
          </div>
          <div
            className={`border p-4 rounded text-center ${isSubmitted && isCorrect('uk') ? 'bg-green-200' : ''}`}
            onDrop={(e) => handleDrop(e, 'uk')}
            onDragOver={allowDrop}
          >
            {answers.uk ? answers.uk : 'Drop UK Capital'}
          </div>
          <div
            className={`border p-4 rounded text-center ${isSubmitted && isCorrect('brazil') ? 'bg-green-200' : ''}`}
            onDrop={(e) => handleDrop(e, 'brazil')}
            onDragOver={allowDrop}
          >
            {answers.brazil ? answers.brazil : 'Drop Brazil Capital'}
          </div>
          <div
            className={`border p-4 rounded text-center ${isSubmitted && isCorrect('canada') ? 'bg-green-200' : ''}`}
            onDrop={(e) => handleDrop(e, 'canada')}
            onDragOver={allowDrop}
          >
            {answers.canada ? answers.canada : 'Drop Canada Capital'}
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Submit
      </button>

      {/* Next Button */}
      <button
        onClick={() => navigate('/hotspot')}
        className="mt-6 ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        style={{ display: showNextSection ? 'inline-block' : 'none' }} // Show Next button after submission
      >
        Next
      </button>

      {/* Hotspot Section (conditional rendering after submission) */}
      {showNextSection && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Hotspot Section</h2>
          <p>This is the next section after the Drag and Drop test!</p>
        </div>
      )}
    </div>
  );
};

export default DragDropPage;
