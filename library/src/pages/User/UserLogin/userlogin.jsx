import React, { useState } from "react";
import "./userlogin.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const userlogin = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (mobile.length !== 10 || !/^\d{10}$/.test(mobile)) {
      newErrors.mobile = "Mobile number must be exactly 10 digits";
    }

    if (password.length < 4 || password.length > 20) {
      newErrors.password = "Password must be between 4 and 20 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/login", {
        mobile,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/home");
        }
      })
      .catch((error) => console.log(error));

    if (validateForm()) {
      console.log({
        mobile,
        password,
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
                <Card className="login_card">
                  <h1>User Login</h1>
                  <Form onSubmit={handleLogin}>
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
                    <Button
                      className="login_button"
                      variant="primary"
                      type="submit"
                    >
                      Login
                    </Button>
                    <Form.Text className="text_muted">
                      Don't have an account?<a href="/usersignup">Sign Up</a>
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

export default userlogin;
