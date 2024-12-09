import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="hero-section">
        <h1>About Us</h1>
        <p>Transforming Education, Empowering Futures</p>
      </section>
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At Edzest, our mission is to provide innovative learning solutions that
          make education accessible, interactive, and engaging for everyone.
        </p>
      </section>
      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="team-image"
            />
            <h3>Amit Chandan</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="team-image"
            />
            <h3>Akanksha</h3>
            <p>Chief Technology Officer</p>
          </div>
          <div className="team-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="team-image"
            />
            <h3>Aman jha</h3>
            <p>Head of Design</p>
          </div>
        </div>
      </section>
      <section className="values-section">
        <h2>Our Values</h2>
        <ul className="values-list">
          <li>🚀 Innovation in Education</li>
          <li>🌟 Excellence in Service</li>
          <li>🤝 Collaboration and Inclusivity</li>
          <li>💡 Continuous Learning</li>
        </ul>
      </section>
      
    </div>
  );
};

export default AboutUs;
