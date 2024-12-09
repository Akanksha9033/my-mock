import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pmptrainingImg from '../assets/pmp training.png';
import './Mock.css'; 

// Main Component
const TrainingPage = () => {
  return (
    <div className="training-page">
      {/* Main Container Section */}
      <div className="container d-flex align-items-center justify-content-between flex-wrap">
        {/* Left Section: Text Content */}
        <div className="left-content text-start p-3">
          <h1 className="fw-bold text-primary">
            PMP<sup>®</sup> Exam Prep by <span className="text-purple">Edzest</span>
          </h1>
          <p className="text-muted mt-3">
            Edzest's PMP<sup>®</sup> exam prep program integrates practical insights,
            <br />
            proven methodologies, and expert guidance, <br />
            giving you a clear path to certification.
          </p>
          <button className="btn btn-primary btn-lg mt-3">Enroll Now</button>
        </div>

        {/* Right Section: Image */}
        <div className="right-content">
          <img
            src={pmptrainingImg}
            alt="pmp Training"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default TrainingPage;
