import React, { useState } from "react";
import "./usersignup.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const usersignup = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (name.length < 4 || name.length > 20) {
      newErrors.name = "Name must be between 4 and 20 characters long";
    }

    if (mobile.length !== 10 || !/^\d{10}$/.test(mobile)) {
      newErrors.mobile = "Mobile number must be exactly 10 digits";
    }

    if (password.length < 4 || password.length > 20) {
      newErrors.password = "Password must be between 4 and 20 characters long";
    }

    if (confirmPassword !== password) {
      newErrors.confirmPassword = "Confirm password must match the password";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/register", {
        name,
        mobile,
        password,
      })
      .then((result) => {
        console.log(result);
        navigate("/userlogin");
      })
      .catch((error) => console.log(error));

    if (validateForm()) {
      console.log({
        name,
        mobile,
        password,
        confirmPassword,
      });
    }
  };

  return (
    <div>
      <Container>
        <Card className="custom_card">
          <Row>
            <Col xs={12} md={3}></Col>
            <Col xs={12} md={6}>
              <div className="d-flex justify-content-center align-items-center vh-100">
                <Card className="signup_card">
                  <h1>User Signup</h1>
                  <Form onSubmit={handleSignup}>
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        isInvalid={!!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formMobile">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter Mobile number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        isInvalid={!!errors.mobile}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.mobile}
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
                    <Form.Group
                      className="mb-3"
                      controlId="formConfirmPassword"
                    >
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        isInvalid={!!errors.confirmPassword}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.confirmPassword}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Button
                      className="signup_button"
                      variant="primary"
                      type="submit"
                    >
                      SignUp
                    </Button>
                    <Form.Text className="text_muted">
                      Do you have an account?<a href="/userlogin">Login</a>
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

export default usersignup;
