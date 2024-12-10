import React, { useState } from "react";
import './navbar.css';
import Logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu toggle

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <img src={Logo} alt="Logo" className="Logo" />
      <button className="navbar-toggle" onClick={handleMenuToggle}>
        ☰ {/* Hamburger icon */}
      </button>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
        <li><Link to="/hero">Hero</Link></li>
          <li><Link to="/training">Training</Link></li>
          <li><Link to="/mockexam">Mockexam</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>  {/* Correct path for Contact Us page */}
          <li><Link to="/login">Login</Link></li>  {/* Correct path for Contact Us page */}

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
