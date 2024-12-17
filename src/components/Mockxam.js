import React, { useState } from "react";
import "./Mockexam.css";
import mockphotoImg from "../assets/mockphoto.png";
import FulllengthmockexamImg from "../assets/Fulllengthmockexam.png";
import minimockexamImg from "../assets/minimockexam.png";
import PersonalizedimageImg from "../assets/Personalizedimage.png";


const FAQItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggle}>
        {question}
        <span className="toggle-icon">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const PMPPracticeMockExams = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is included in the mock exams?",
      answer:
        "Our mock exams include over 200 real exam-like questions, covering all PMP® domains, and provide detailed performance analysis.",
    },
    {
      question: "How do I access the personalized support?",
      answer:
        "After each mock exam, you can schedule a one-on-one session with our expert trainers for personalized feedback and strategies.",
    },
    {
      question: "Are the mock exams timed?",
      answer:
        "Yes, the mock exams simulate the actual exam timing to help you practice time management.",
    },
    {
      question: "Can I retake the mock exams?",
      answer:
        "Yes, you can retake the mock exams multiple times to track your progress and improve your performance.",
    },
    {
      question: "Do I need any prior preparation to attempt the mock exams?",
      answer:
        "While prior knowledge of PMP concepts is recommended, our mock exams also serve as a learning tool with detailed explanations for each answer.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
            {/* Main Container Section */}
            <div className="container">
              {/* Left Section: Text Content */}
              <div className="left-content">
                <h1 className="fw-bold text-black">
                 PMP® Practice<br /> Mock Exams
                           by<span className="text-purple">Edzest</span>
                </h1>
                <p className="text-muted mt-3">
                 Get Real Exam-Like Questions and Expert Insight
                </p>
                <button className="btn btn-primary btn-lg mt-3">  Buy Now</button>
              </div>
      
              {/* Right Section: Image */}
              <div className="right-content">
                <img
                  src={mockphotoImg}
                  alt="PMP Training"
                  className="img-fluid rounded shadow-lg"
                />
              </div>
            </div>
      {/* Main Container for Sections */}
      <div className="main-container">
        <h1>What's included:</h1>
        {/* Full-Length Mock Exams Section */}
        <div className="section">
          <div className="content">
            <h2>mini-mock exams</h2>
            <ul>
              <li>
              Shorter, targeted exams to evaluate your understanding of specific topics.
              </li>
              <li>
              Perfect for pinpointing areas that need further revision.
              </li>
            </ul>
          </div>
          <div className="image">
            <img src={minimockexamImg} alt="Exam Icon" />
          </div>
        </div>
        <div className="section">
          <div className="content">
            <h2>Full-Length Mock Exams</h2>
            <ul>
              <li>
                A complete, real exam-like simulation with 200+ questions
                covering all PMP® domains.
              </li>
              <li>
                Experience the pressure of the actual exam and refine your time
                management skills.
              </li>
            </ul>
          </div>
          <div className="image">
            <img src={FulllengthmockexamImg} alt="Exam Icon" />
          </div>
        </div>

        {/* Support Section */}
        <div className="section">
          <div className="content">
            <h2>1:1 Personalized Support</h2>
            <ul>
              <li>
                After each mock exam, you’ll receive one-on-one support from our
                expert trainers.
              </li>
              <li>
                Get tailored feedback and strategies to improve your performance
                and tackle areas of difficulty.
              </li>
              <li>
                Our trainers will help you understand the reasoning behind each
                answer, enhancing your exam strategy.
              </li>
            </ul>
          </div>
          <div className="image">
            <img src={PersonalizedimageImg} alt="Support Icon" />
          </div>
        </div>

        {/* Buy Now Button */}
        <div className="button-container">
          <button className="buy-now">Buy Now</button>
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
    </div>
  );
};

export default PMPPracticeMockExams;
