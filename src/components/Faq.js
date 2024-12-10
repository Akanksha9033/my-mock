// App.js
import React from "react";
import "./Faq.css";

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

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqData = [
    {
      question: "What is PMP certification?",
      answer:
        "PMP stands for Project Management Professional, a globally recognized certification for project managers.",
    },
    {
      question: "Who can apply for PMP certification?",
      answer:
        "Anyone with project management experience and meeting the prerequisites can apply for PMP certification.",
    },
    {
      question: "How long is the PMP certification valid?",
      answer:
        "PMP certification is valid for three years and requires renewal through professional development units (PDUs).",
    },
    {
      question: "What is the cost of the PMP exam?",
      answer:
        "The cost varies based on PMI membership. For members, it is $405, and for non-members, it is $555.",
    },
    {
      question: "What are PDUs in PMP?",
      answer:
        "PDUs are Professional Development Units, required to maintain your PMP certification.",
    },
    {
      question: "What is the exam format for PMP?",
      answer:
        "The PMP exam consists of 180 questions to be completed in 230 minutes.",
    },
    {
      question: "Can I take the PMP exam online?",
      answer:
        "Yes, the PMP exam can be taken online with a proctored environment.",
    },
    {
      question: "What is the Agile methodology?",
      answer:
        "Agile methodology is an iterative approach to project management and software development that emphasizes flexibility and collaboration.",
    },
    {
      question: "What is the CAPM certification?",
      answer:
        "CAPM stands for Certified Associate in Project Management, an entry-level certification for project practitioners.",
    },
    {
      question: "How can I prepare for PMP certification?",
      answer:
        "You can prepare through training programs, mock exams, and studying the PMBOK guide.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
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
  );
};

export default FAQ;
