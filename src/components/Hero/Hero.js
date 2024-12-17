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
import trainerImg from '../../assets/Trainer.png';
import elearningImg from '../../assets/E learning.png';
import personalisedsupportImg from '../../assets/Personalised support.png';
import flexibleImg from '../../assets/Flexible learning.png';
import applicationImg from '../../assets/Application support.png';
import websiteImg from '../../assets/Website Photo.png';
import heroImage  from  '../../assets/Hero.png';


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
    name: 'Jawed Ahmad',
    role: 'Project Manager',
    testimonial:
      'I am thrilled to share my successful journey of passing the PMP exam with Above Target in all three domains, and it wouldn’t have been possible without the incredible support of Mr. Amit.',
    img: developer1Img,
    googleLink:
      'https://www.google.com/search?q=edzest+education+services&rlz=1C1ONGR_enIN998IN998&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQkxNTUzajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8#lrd=0x3bc2b9dfb0bd835d:0x441280ddf6d4dbd0,1',
  },
  {
    name: 'Karthikeyan K',
    role: 'Local guide',
    testimonial:
      'Amit is a great coach with a calm attitude, and his method of coaching the project management principles and methodologies is evident. The mock tests closely resemble PMP questions with clear explanations to understand.',
    img: developer2Img,
    googleLink:
      'https://www.google.com/search?q=edzest+education+services&rlz=1C1ONGR_enIN998IN998&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQkxNTUzajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8#lrd=0x3bc2b9dfb0bd835d:0x441280ddf6d4dbd0,2',
  },
  {
    name: 'Michael Brown',
    role: 'Consultant',
    testimonial:
      'The course prepared me thoroughly for the PMP exam. The support was exceptional.',
    img: developer1Img,
    googleLink:
      'https://www.google.com/search?q=edzest+education+services&rlz=1C1ONGR_enIN998IN998&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQkxNTUzajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8#lrd=0x3bc2b9dfb0bd835d:0x441280ddf6d4dbd0,3',
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
   
    <section className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4">
            Get <span className="text-purple-600">PMP® certified</span> & Manage projects <span className="italic">better</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Your trusted partner in mastering project management with a focused approach to PMP® certification.
          </p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700">
            Explore Courses
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <img src={heroImage} alt="Team Discussion" className="rounded-full shadow-md w-72 h-72 object-cover" />
            <div className="absolute -top-6 -left-6 w-80 h-80 rounded-full border-2 border-dotted border-gray-300"></div>
          </div>
        </div>
      </div>
    </section>

      {/* New Section */}
      <section className="new-section">
      <img src={pmiLogo} alt="PMI Logo" className="pmi-logo" />
       <h2>Next PMP® training batch starting from 11th Jan</h2>
       <p>
    Learn from an Authorized Training Partner, <br />
    <span>ATP of Project Management Institute (PMI)</span>.
  </p>
  <button className="join-now">Join Now</button>
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
       {/*why choose us section */}
       <div className="hero-container">
       <h1 style={{ textAlign: "left", marginBottom: "20px" }}>Why Choose Us</h1>
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
            src={trainerImg}
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
          Access a wide range of updated study,
          materials including PDF guides, mock
          exams, and video tutorials, designed to support your learning at every stage.
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
          <p>Receive one-on-one mentoring to address
            your specific needs, with personalized
            guidance to help you overcome
            challenges and stay on track.
          </p>
        </div>
        <div className="image-section">
          <img
            src={ personalisedsupportImg}
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
          Enjoy the convenience of live online sessions paired with on-demand recorded
          videos, allowing you to learn at your own pace and schedule.
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
          <h2>05.</h2>
          <h3>Application support</h3>
          <p>
          Get expert help with your certification application process, ensuring you meet all
          the requirements and submit your application smoothly and accurately.
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
      
            {/* Our Courses Section */}
            <section className="our-courses">
        <h2 className="courses-heading">Preparation Options</h2>
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
            <ul>
              <li>
                35 contact hours
              </li>
              <li>
              40 hrs. of live training
              </li>
              <li>
              Recorded videos for revision
              </li>
              <li>
              Free Mock Exam Package
              </li>
              <li>1:1 Personalised support</li>
              <li>
              Flashcards
              </li>
              <li>
              E-book
              </li>
              <li>
              Summery Books
              </li>
            </ul>
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
  {/* Trainer details card */}
  <div className="trainer-card">
    <div className="trainer-details">
      <h3 className="trainer-name">Amit Chandan</h3>
      <p className="trainer-description"></p>
      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === 'training' ? 'active' : ''}`}
          onClick={() => setActiveTab('training')}
        >
          Training
        </button>
        <button
          className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
          onClick={() => setActiveTab('experience')}
        >
          Experience
        </button>
        <button
          className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
      </div>
      {/* Display content based on active tab */}
      <div className="tab-content">
        {activeTab === 'training' && (
          <>
            <h1>PMP®Trainer</h1>
            <p>
              Amit is a PMI Authorised instructor for PMP® who has helped<br />
              <span>more than 500 participants from 45 countries in the last 3 years.<br /></span>
              <span>A friendly, considerate trainer who believes in helping you achieve not just your<br /></span>
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
              Amit holds a bachelor's degree in Mechanical Engineering.<br />
              <span>He is also a certified PMP® (Project Management professional),<br /></span>
              <span>PMI-ACP® (Agile certified practitioner), and PMI-SP® (Scheduling professional).</span>
            </p>
          </>
        )}
      </div>
      {/* Call-to-action buttons */}
      <div className="cta-buttons">
        <a href="#join-batch" className="join-batch-link">Join an Upcoming Batch</a>
      </div>
    </div>
    {/* Trainer Image */}
    <div class="trainer-image">
  <img src={websiteImg} alt="Trainer" class="trainer-img" />
  <h3 class="trainer-name">Amit Chandan</h3>
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
            <a href="https://www.google.com/search?q=edzest+education+services&rlz=1C1ONGR_enIN998IN998&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQkxNTUzajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8#lrd=0x3bc2b9dfb0bd835d:0x441280ddf6d4dbd0,1" className="google-review-link">
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

