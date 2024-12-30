import React, { useState } from 'react';

const HotspotPage = () => {
  // State to track whether the test is submitted
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to handle the submit action
  const handleSubmit = () => {
    setIsSubmitted(true); // Update the state to show the success message
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Hotspot Test</h1>
      <p>Click on the Eiffel Tower:</p>
      
      <div className="relative mt-4">
        {/* Image with hotspot (you can add an actual hotspot area here) */}
        <img
          src="/path-to-image.jpg"  // Replace with actual image path
          alt="Hotspot"
          className="w-full h-auto"
        />
        {/* Add hotspot clickable logic here */}
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Submit Test
      </button>

      {/* Success Popup */}
      {isSubmitted && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">You have successfully submitted the test</h2>
            <button
              onClick={() => setIsSubmitted(false)} // Close the popup
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotspotPage;
