import React, { useState } from "react";
import { Button, Container, Form, Row, Col, Card } from "react-bootstrap";
import "./Login.css"; // External CSS for custom styling

function NewLogin() {
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form behavior

    try {
      // Send login data to the back-end server
      const response = await fetch("http://localhost:3001/log-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify JSON data
        },
        body: JSON.stringify({ email, password }), // Send email and password
      });

      if (response.ok) {
        alert("Login data sent to the server successfully!");
      } else {
        alert("Failed to send login data. Please try again.");
      }
    } catch (error) {
      console.error("Error while sending login data:", error);
      alert("An error occurred. Please check the console.");
    }
  };

  return (
    <Container className="login-container">
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <Card className="login-card">
            <Card.Body>
              <h2 className="text-center">Login</h2>
              <Form onSubmit={handleSubmit}>
                {/* Email Input Field */}
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update email state
                    required
                  />
                </Form.Group>

                {/* Password Input Field */}
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Update password state
                    required
                  />
                </Form.Group>

                {/* Login Button */}
                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default NewLogin;
