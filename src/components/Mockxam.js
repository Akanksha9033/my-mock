import React, { useState } from "react";
import "./Mockexam.css";
import mockphotoImg from "../assets/mockphoto.png";

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
      <div className="hero-container">
        <div className="text-content">
          <h1>
            PMP® Practice Mock Exams by <span>Edzest</span>
          </h1>
          <p>Get Real Exam-Like Questions and Expert Insights</p>
          <button className="btn-buy-now">Buy Now</button>
        </div>
        <div className="image-content">
          <img src={mockphotoImg} alt="Mock Exams Illustration" />
        </div>
      </div>

      {/* Main Container for Sections */}
      <div className="main-container">
        <h1>What's included:</h1>
        {/* Full-Length Mock Exams Section */}
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
              <li>
                Get a detailed performance analysis with insights on strengths
                and areas for improvement.
              </li>
            </ul>
          </div>
          <div className="image">
            <img src="https://via.placeholder.com/150" alt="Exam Icon" />
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
            <img src="https://via.placeholder.com/150" alt="Support Icon" />
          </div>
        </div>

        {/* Buy Now Button */}
        <div className="button-container">
          <button className="buy-now">Buy Now</button>
        </div>

        {/* FAQ Section */}
        <div className="faq-container">
          <h1>FAQs</h1>
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PMPPracticeMockExams;
