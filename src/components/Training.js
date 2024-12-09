import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pmptrainingImg from '../assets/pmp training.png';
import './Training Page.css';
import pmiLogo from '../assets/pmilogo.png';
import trainer from '../assets/Trainer.png';
import materialsImg from '../assets/Comprehensive materials.png';
import personalImg from '../assets/Personal support.png';
import flexibleImg from '../assets/Flexible learning.png';
import applicationImg from '../assets/Application support.png';

const TrainingPage = () => {
  return (
    <div>
      {/* Main Container Section */}
      <div className="container">
        {/* Left Section: Text Content */}
        <div className="left-content">
          <h1 className="fw-bold text-primary">
            PMP<sup>®</sup> Exam Prep by <span className="text-purple">Edzest</span>
          </h1>
          <p className="text-muted mt-3">
            Edzest's PMP<sup>®</sup> exam prep program integrates practical insights, <br />
            proven methodologies, and expert guidance, <br />
            giving you a clear path to certification.
          </p>
          <button className="btn btn-primary btn-lg mt-3">Enroll Now</button>
        </div>

        {/* Right Section: Image */}
        <div className="right-content">
          <img
            src={pmptrainingImg}
            alt="PMP Training"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </div>

      {/* New Section */}
      <section className="new-section">
        <h2>
          6 Exclusive Batches a year to help PMP® aspirants pass on their First Attempt
        </h2>
        <p>
          Learn from an Authorized Training Partner, <br />
          <span>ATP of Project Management Institute (PMI)</span>.
        </p>
        <img src={pmiLogo} alt="PMI Logo" className="pmilogo" />
      </section>

      <section className="why-choose-us">
        <h1>Why Choose Us?</h1>
        {[...Array(5)].map((_, index) => (
          <div className="why-choose-us-content" key={index}>
            <div className="why-choose-us-text">
              <h2>{`${index + 1}.`}</h2>
              <span>{['40 hrs of live training', 'Recorded videos', 'Flashcard & E-books', 'personalised & Support', 'Mock Exam Pacak'][index]}</span>
              <p>Learn from industry professionals with years of practical experience...</p>
            </div>
            <img src={[trainer, materialsImg, personalImg, flexibleImg, applicationImg][index]} alt="Why Choose Us" />
          </div>
        ))}
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Send us a message and we’ll get back to you shortly.</p>
        <form className="contact-form">
          {/* Input fields for user details */}
          <div className="form-group">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Your Phone" required />
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" required></textarea>
          </div>
          {/* Submit button */}
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
};

export default TrainingPage;
