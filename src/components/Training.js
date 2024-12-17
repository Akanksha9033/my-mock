import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pmptrainingImg from '../assets/pmp training.png';
import './Training Page.css';
import pmiLogo from '../assets/pmilogo.png';
import trainer from '../assets/Trainer.png';
import elearningImg from '../assets/E learning.png';
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

        {/*why choose us section */}
             <div className="hero-container">
             <h1 style={{ textAlign: "left", marginBottom: "20px", }}>Why Choose our Training Program</h1>
            <div className="hero-item">
              <div className="text-section">
                
                <h2>01.</h2>
                <h3>Expert Trainers</h3>
                <p>
                  Learn from industry professionals with years of practical
                  experience, bringing real-world insights into every session to
                  ensure you're ready for any challenge.
                </p>
              </div>
              <div className="image-section">
                <img
                  src={trainer}
                  alt="Expert Trainers"
                  className="circle-image"
                />
              </div>
            </div>
            <div className="hero-item">
              <div className="text-section">
                <h2>02.</h2>
                <h3>Comprehensive Materials</h3>
                <p>
                  Learn from industry professionals with years of practical
                  experience, bringing real-world insights into every session to
                  ensure you're ready for any challenge.
                </p>
              </div>
              <div className="image-section">
                <img
                  src={elearningImg}
                  alt="Comprehensive Materials"
                  className="circle-image"
                />
              </div>
            </div>
            <div className="hero-item">
              <div className="text-section">
                <h2>03.</h2>
                <h3>Personalised Support</h3>
                <p>
                  Learn from industry professionals with years of practical
                  experience, bringing real-world insights into every session to
                  ensure you're ready for any challenge.
                </p>
              </div>
              <div className="image-section">
                <img
                  src={personalImg}
                  alt="Expert Trainers"
                  className="circle-image"
                />
              </div>
            </div>
            <div className="hero-item">
              <div className="text-section">
                <h2>04.</h2>
                <h3>Flexible Learning</h3>
                <p>
                  Learn from industry professionals with years of practical
                  experience, bringing real-world insights into every session to
                  ensure you're ready for any challenge.
                </p>
              </div>
              <div className="image-section">
                <img
                  src={flexibleImg}
                  alt="Expert Trainers"
                  className="circle-image"
                />
              </div>
            </div>
            <div className="hero-item">
              <div className="text-section">
                <h2>04.</h2>
                <h3>Application support</h3>
                <p>
                  Access a wide range of updated study materials including PDF guides,
                  mock exams, and video tutorials, designed to support your learning
                  at every stage.
                </p>
              </div>
              <div className="image-section">
                <img
                  src={applicationImg}
                  alt="Comprehensive Materials"
                  className="circle-image"
                />
              </div>
            </div>
          </div>

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
