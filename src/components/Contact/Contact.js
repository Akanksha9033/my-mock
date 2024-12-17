import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    number: '', // Added phone number field
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log or send data to server here if needed
    console.log(formData);

    setShowAlert(true);
    // Resetting all fields after submission
    setFormData({ name: '', email: '', message: '', number: '' });
  };

  return (
    <div className="contactus-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Contact Us</h1>
        <p>Have questions or feedback? We'd love to hear from you!</p>
      </div>

      {/* Centered Contact Form */}
      <div className="contact-container">
        <div className="form-container">
          <h2 className="text-center">Send Us a Message</h2>
          <Form onSubmit={handleSubmit}>
            {/* Name Input */}
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </Form.Group>

            {/* Email Input */}
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </Form.Group>

            {/* Phone Number Input */}
            <Form.Group controlId="formNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                value={formData.number}
                onChange={(e) => setFormData({ ...formData, number: e.target.value })}
              />
            </Form.Group>

            {/* Message Input */}
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Write your message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </Form.Group>

            {/* Submit Button */}
            <Button className="submit-btn" variant="primary" type="submit">
              Submit
            </Button>
          </Form>

          {/* Success Alert */}
          {showAlert && (
            <Alert variant="success" className="alert-success">
              Message sent successfully! We'll get back to you shortly.
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
