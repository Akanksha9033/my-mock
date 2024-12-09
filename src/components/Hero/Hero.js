// Importing React and useState hook for managing component state
import React, { useState } from 'react';
// Importing styles and images
import './Hero.css';
import './section1.css';
import pmiLogo from '../../assets/pmilogo.png';
import efficiencyImg from '../../assets/eficiency.png';
import riskManagementImg from '../../assets/risk.png';
import budgetControlImg from '../../assets/Budget.png';
import communicationImg from '../../assets/Enhanced communication.png';
import qualityImg from '../../assets/quality.png';
import satisfactionImg from '../../assets/satisfaction.png';
import trainer from '../../assets/Trainer.png';
import materialsImg from '../../assets/Comprehensive materials.png';
import personalImg from '../../assets/Personal support.png';
import flexibleImg from '../../assets/Flexible learning.png';
import applicationImg from '../../assets/Application support.png';
import websiteImg from '../../assets/Website Photo.png';


// Importing additional assets for testimonials
import developer1Img from '../../assets/developer1.png';
import developer2Img from '../../assets/developer2.png';

// Data for benefits section
const benefitsData = [
  {
    img: efficiencyImg, // Image for benefit
    title: 'Increased Efficiency', // Title of the benefit
    description: 'Clear planning and organized processes ensure that resources are utilized effectively, leading to faster and more accurate project completion.', // Description
  },
  {
    img: riskManagementImg,
    title: 'Effective Risk Management',
    description: 'Identifying and addressing potential risks early allows for smooth execution and helps avoid delays or disruptions.',
  },
  {
    img: budgetControlImg,
    title: 'Better Budget Control',
    description: 'Monitoring budgets throughout the project ensures that costs are kept within limits, maximizing financial resources.',
  },
  {
    img: communicationImg,
    title: 'Enhanced Communication',
    description: 'Project management improves communication between teams, stakeholders, and clients.',
  },
  {
    img: qualityImg,
    title: 'Improved Quality',
    description: 'Ensures high-quality deliverables by managing processes effectively and maintaining standards.',
  },
  {
    img: satisfactionImg,
    title: 'Increased Satisfaction',
    description: 'Delivering projects on time and within budget increases client satisfaction and trust.',
  },
];

// Data for testimonials carousel
const testimonialsData = [
  {
    name: 'John Doe', // Name of the testimonial giver
    role: 'Project Manager', // Their role
    testimonial: 'Excellence in project management, Good training standards and learning material.', // Feedback
    img: developer1Img, // Their photo
  },
  {
    name: 'Jane Smith',
    role: 'Senior Project Manager',
    testimonial: 'Great learning experience with industry insights. Amit’s training is top-notch!',
    img: developer2Img,
  },
  {
    name: 'Michael Brown',
    role: 'Consultant',
    testimonial: 'The course prepared me thoroughly for the PMP exam. The support was exceptional.',
    img: developer1Img,
  },
];

// Home component
const Home = () => {
  const [activeTab, setActiveTab] = useState('training'); // State for active tab
  const [activeReview, setActiveReview] = useState(0); // State for active review in the carousel
  const [activeFAQ, setActiveFAQ] = useState(null); // State for active FAQ

  // Function to handle tab switching
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Function to go to the previous testimonial
  const handlePrevReview = () => {
    setActiveReview((prevReview) => (prevReview === 0 ? testimonialsData.length - 1 : prevReview - 1));
  };

  // Function to go to the next testimonial
  const handleNextReview = () => {
    setActiveReview((prevReview) => (prevReview === testimonialsData.length - 1 ? 0 : prevReview + 1));
  };

  // Function to toggle FAQ visibility
  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="Home">
      {/* Hero Section */}
      <section className="Hero">
        <div className="Hero-text">
          <h1>
            Become a certified <br />
            <span>Project Professional</span>
          </h1>
          <p>
            <span>With our comprehensive certification exam prep course</span>
          </p>
          <div className="btn-container">
            <button className="btn">Explore More</button>
          </div>
        </div>
      </section>

      {/* New Section */}
      <section className="new-section">
        <h2>Next PMP® training batch starting from 11th Jan</h2>
        <p>
          Learn from an Authorized Training Partner, <br />
          <span>ATP of Project Management Institute (PMI)</span>.
        </p>
        <img src={pmiLogo} alt="PMI Logo" className="pmilogo" />
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h2 className="benefits-heading">Benefits of Project Management</h2>
        <div className="row">
          {benefitsData.map((benefit, index) => (
            <div className="course-col" key={index}>
              <img src={benefit.img} alt={benefit.title} className="course-img" />
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h1>Why Choose Us?</h1>
        {[...Array(5)].map((_, index) => (
          <div className="why-choose-us-content" key={index}>
            <div className="why-choose-us-text">
              <h2>{`${index + 1}.`}</h2>
              <span>{['Expert Trainers', 'Comprehensive Materials', 'Personalized Support', 'Flexible Learning', 'Application Support'][index]}</span>
              <p>Learn from industry professionals with years of practical experience...</p>
            </div>
            <img src={[trainer, materialsImg, personalImg, flexibleImg, applicationImg][index]} alt="Why Choose Us" />
          </div>
        ))}
      </section>
            {/* Our Courses Section */}
            <section className="our-courses">
        <h2 className="courses-heading">Preparation options</h2>
        <p>
          Empower your certification journey with our comprehensive preparation options.<br />
          <span>Choose from expert-led training, focused revision courses,</span>
          <span>and real exam-like mock tests to achieve exam success confidently</span>
        </p>
        <div className="courses-list">
          {/* Course: Training */}
          <div className="course-item">
            <h2>Training</h2>
            <h4>
            Master PMP® with Expert-Led Training & Free Mock Exam Access
            </h4>
            <button className="course-btn">Enroll Now</button>
          </div>
          {/* Course: Mock-Exam */}
          <div className="course-item">
            <h2>Mock-Exam</h2>
            <h4>
            Ace the PMP® Exam with <br/>
            Realistic Mock Tests
            </h4>
            <ul>
              <li>5 mini mock exams</li>
              <li>5 full length mock exams</li>
              <li>Personalised support</li>
              <li>Flashcards</li>
              <li>E-Book</li>
              <li>Summary books</li>
              </ul>
            <button className="course-btn">Enroll Now</button>
          </div>
        </div>
      </section>

      {/* About the Trainer Section */}
      <section className="trainer-info-section">
        <h2 className="section-title">About the Trainer</h2>
        {/* Tabs for switching content */}
        <div className="tabs">
          {['training', 'experience', 'education'].map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`} // Highlight active tab
              onClick={() => handleTabClick(tab)} // Switch active tab
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} {/* Capitalize first letter */}
            </button>
          ))}
        </div>
        {/* Trainer details card */}
        <div className="trainer-card">
          <div className="trainer-image">
            <img src={websiteImg} alt="Trainer" className="trainer-img" />
          </div>
          <div className="trainer-details">
            <h3 className="trainer-name">Amit Chandan</h3>
            <p className="trainer-description"></p>
            <div className="tab-content">
              {/* Display content based on active tab */}
              {activeTab === 'training' && (
                <>
                  <h1>PMP®Trainer</h1>
                <p>
                Amit is a PMI Authorised instructor for PMP® who has helped<br />
                <span>more than 500 participants from 45 countries in the last 3 years.<br /></span>
                <span>A friendly, considerate trainer who believes in helping you achieve not just your <br /></span>
                certification but developing the skills to manage projects better.
                </p>
                </>
              )}
              {activeTab === 'experience' && (
               <>
                  <h1>Project Experience</h1>
                      <p>
                    Amit's experience as a trainer is built on the diversity of his project experience,<br />
                    <span>ranging from Mechanical & Construction industries to Software<br /></span> 
                    development of education & customer service products. 
                    </p>
               </>
              )}
              {activeTab === 'education' && (
           <>
                <h1>Academic education</h1>
                <p>
                Amit holds a bachelor's degree in Mechanical Engineering.<br /><span>
                  He is also a certified PMP® (Project Management professional),<br /></span>
                  <span>PMI-ACP® (Agile certified practitioner), and PMI-SP® (Scheduling professional).</span>
              </p>
         </>
              )}
            </div>
            {/* Call-to-action buttons */}
            <div className="cta-buttons">
              <a href="#join-batch" className="join-batch-link">
                Join an Upcoming Batch
              </a>
              <button className="chat-btn">Let's Chat!</button>
            </div>
          </div>
        </div>
      </section>

     
       
    {/* Testimonials Carousel Section */}
     <section className="testimonials-carousel-section">
      <h2 className="testimonials-carousel-heading">Testimonials</h2>
     <div className="carousel-container">
      {/* Carousel Track */}
     <div
      className="carousel-track"
      style={{
        transform: `translateX(-${activeReview * 33.33}%)`, // Move carousel by 33.33% for each set of testimonials
        transition: "transform 0.5s ease-in-out",
      }}
    >
      {testimonialsData.map((testimonial, index) => (
        <div className="testimonial-slide" key={index}>
          <div className="testimonial-card">
            <img
              className="testimonial-img"
              src={testimonial.img}
              alt={testimonial.name}
            />
            <h3>{testimonial.name}</h3>
            <p className="carousel-role">{testimonial.role}</p>
            <p className="carousel-review">{testimonial.testimonial}</p>
            <a href="https://google-review-link" className="google-review-link">
              View Full Review on Google
            </a>
          </div>
        </div>
      ))}
    </div>

    {/* Navigation Buttons */}
    <button className="carousel-btn prev-btn" onClick={handlePrevReview}>
      ←
    </button>
    <button className="carousel-btn next-btn" onClick={handleNextReview}>
      →
    </button>

    {/* Indicators */}
    <div className="carousel-indicators">
      {Array(Math.ceil(testimonialsData.length / 3))
        .fill()
        .map((_, index) => (
          <button
            key={index}
            className={`indicator-btn ${
              activeReview === index ? "active" : ""
            }`}
            onClick={() => setActiveReview(index)} // Navigate to the corresponding slide
          />
        ))}
    </div>
  </div>
</section>



<section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="accordion">
          {[
            { question: "What is the PMP certification?", answer: "The PMP certification is a globally recognized certification that validates your project management expertise." },
            { question: "How can I enroll in the course?", answer: "You can enroll directly through our website. Just click on the 'Join Now' button." },
            { question: "What is the course duration?", answer: "The PMP certification course lasts for 3 months, with flexible learning options." },
            { question: "Do you offer a refund policy?", answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with the course." },
            { question: "What resources are provided in the course?", answer: "We provide comprehensive study materials, practice exams, and personal support throughout the course." },
          ].map((faq, index) => (
            <div className="faq-item" key={index}>
              <div
                className={`faq-question ${activeFAQ === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <h4>{faq.question}</h4>
                <span>{activeFAQ === index ? '-' : '+'}</span>
              </div>
              {activeFAQ === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* Contact Section */}
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

export default Home;

