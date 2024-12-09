import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import './Contact.css';
import ContactImage from '../../assets/contact.png';



function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);  // Show success message
    setFormData({ name: '', email: '', message: '' });  // Clear form after submission
  };

  return (
    <div className="contact-page">
      <section className="hero-section text-center">
        <h1>Contact Us</h1>
        <p>
           <span> Have questions or feedback? We'd love to hear from you!</span>
        </p>
      </section>

      <Container className="contact-form py-5">
        <Row>
          <Col md={6}>
            <h2>Send us a message</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </Form.Group>

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

              <Button variant="primary" type="submit">Submit</Button>
            </Form>
          </Col>
          <Col md={6}>
            <h2>Our Office</h2>
            <p>Harlaur Banglore,560102</p>
            <p>Email: contact@edzest.org</p>
            <p>Phone: 6299119033</p>
          </Col>
        </Row>

        {showAlert && (
          <Alert variant="success" className="mt-4">
            Message sent successfully! We'll get back to you shortly.
          </Alert>
        )}
      </Container>
    </div>
  );
}

export default Contact;
