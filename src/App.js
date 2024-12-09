import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Training from './components/Training';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/training" element={<Training />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
