import React from 'react';
import './About.css';
import aboutimageImg from '../../assets/Aboutimage.png';
import aboutimageImg2 from '../../assets/Aboutimage2.png';
import aboutimageImg3 from '../../assets/Aboutimage3.png';
const AboutEdzest = () => {
  return (
    <>
      {/* First Container */}
      <div className="about-edzest-container">
        <h1 className="about-edzest-h1">About Edzest</h1>
        
        <div className="image-container">
          <img 
            src={aboutimageImg} 
            alt="Edzest Team" 
            className="about-image"
          />
        </div>

        <div className="text-container">
          <p>
            Edzest Education Services is your trusted partner in mastering project management. 
            As an authorized training partner of PMI, we specialize in providing comprehensive 
            training solutions for certifications like PMP®. Our goal is simple: to help 
            professionals and organizations manage projects better by equipping them with the 
            skills, tools, and confidence to thrive in a dynamic global marketplace.
          </p>
          <p>
            With a commitment to quality, innovation, and personalized guidance, we create impactful 
            learning experiences that bridge the gap between theory and practice. Whether you’re a 
            seasoned professional or a beginner, our tailored programs ensure you’re equipped to 
            face real-world challenges and excel in your career.
          </p>
          <p>
            Founded in June 2021, Edzest has quickly become a trusted name in PMP® certification 
            training. Over the past few years, we have trained 500 participants, from 45 countries, 
            guiding them through every step of their project management journey. Out of these, 
            156 participants have successfully earned their PMP certification, with an impressive 
            88% passing on their first attempt.
          </p>
        </div>
      </div>

      {/* Second Container */}
      <div className="about-edzest-container">
        <h1 className="about-edzest-h1">Our Mission</h1>
        
        <div className="image-container">
          <img 
            src={aboutimageImg2} 
            alt="Why Choose Edzest" 
            className="about-image"
          />
        </div>

        <div className="text-container">
          <p>
            At Edzest, we believe in empowering professionals to achieve their dreams through 
            top-quality training programs. Our unique approach combines real-world case studies, 
            interactive workshops, and practical exercises to create a truly immersive learning experience.
          </p>
          <p>
            Our expert trainers are industry veterans with years of project management experience. 
            They bring invaluable insights to our training programs, helping you connect theoretical 
            concepts with real-life applications.
          </p>
          <p>
            Join the Edzest family and gain access to a network of like-minded professionals. 
            Start your journey toward mastering project management with Edzest today!
          </p>
        </div>
      </div>

      {/* Third Container */}
      <div className="about-edzest-container">
        <h1 className="about-edzest-h1">Our Vision</h1>
        
        <div className="image-container">
          <img 
            src={aboutimageImg3} 
            alt="Our Vision" 
            className="about-image"
          />
        </div>

        <div className="text-container">
          <p>
            Our vision is to be the most trusted and innovative provider of project management 
            education worldwide. By fostering a community of excellence, we aim to inspire 
            individuals to unleash their full potential and make a meaningful impact in their organizations.
          </p>
          <p>
            With a focus on continuous improvement and growth, Edzest strives to be a guiding 
            light for those who aspire to lead with confidence and deliver extraordinary results.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutEdzest;
