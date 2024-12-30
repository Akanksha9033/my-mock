import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center text-white p-6 rounded-lg shadow-lg bg-opacity-80 bg-black">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Edzest Mock Test</h1>
        <button
          onClick={() => navigate('/mcq')}
          className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold text-lg rounded-full hover:bg-yellow-600 transition duration-300"
        >
          Start Test
        </button>
      </div>
    </div>
  );
};

export default HomePage;
