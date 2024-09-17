import React from "react";
import "./contact.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const contact = () => {
  return (
    <Container fluid className="contact_main_section">
      <Card className="contact_card_section">
        <Row>
          <Col xs={12} md={6} className="contact_centered-col">
            <Card.Img
              className="contact_centered-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRu2HbpUvW4C69EJribECQZd4yVAQGJLsTHg&s"
            />
          </Col>

          <Col xs={12} md={6}>
            <div className="contact_get_in_touch">
              <h2>Get in touch</h2>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your Name" />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your Email" />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Enter your Messages"
                    rows={3}
                  />
                </Form.Group>
                <Button variant="primary" type="submit contact_button">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default contact;
