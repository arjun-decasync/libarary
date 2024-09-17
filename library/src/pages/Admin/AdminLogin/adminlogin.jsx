import React, { useState } from "react";
import "./adminlogin.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const adminlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (password.length < 4 || password.length > 20) {
      newErrors.password = "Password must be between 4 and 20 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log({
        email,
        password,
      });
    }
  };

  return (
    <div>
      <Container>
        <Card className="admin_custom_card">
          <Row>
            <Col xs={12} md={3}></Col>
            <Col xs={12} md={6}>
              <div className="d-flex justify-content-center align-items-center vh-100">
                <Card className="admin_login_card">
                  <h1>Admin Login</h1>
                  <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        isInvalid={!!errors.password}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Button
                      className="admin_login_button"
                      variant="primary"
                      type="submit"
                    >
                      Login
                    </Button>
                    <Form.Text className="admin_text_muted">
                      Don't have an account?<a href="/adminsignup">Sign Up</a>
                    </Form.Text>
                  </Form>
                </Card>
              </div>
            </Col>
            <Col xs={12} md={3}></Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default adminlogin;
