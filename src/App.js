import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import MCQ from './components/MCQ';
import DragAndDrop from './components/DragAndDrop';
import FillInTheBlanks from './components/FillInTheBlanks';
import Hotspot from './components/Hotspot';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mcq" element={<MCQ />} />
        <Route path="/drag-drop" element={<DragAndDrop />} />
        <Route path="/fill-blank" element={<FillInTheBlanks />} />
        <Route path="/hotspot" element={<Hotspot />} />
        
      </Routes>
    </Router>
  );
}

export default App;
