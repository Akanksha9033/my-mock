import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Hero from './components/Hero/Hero';
import Training from './components/Training';
import Mockexam from './components/Mockxam';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import FAQ from './components/Faq';
import Event from './components/Event';



const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/hero" element={<Hero />} />
        
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/training" element={<Training />} />
          <Route path="/mockexam" element={<Mockexam />} />
          <Route path="/event" element={<Event />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
