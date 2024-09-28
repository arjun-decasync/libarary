import React from "react";
import { useState } from "react";
import "./navbar.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg" className="main_body" fixed="top">
      <Container>
        <Navbar.Brand>
          <span className="heading">Book Stall</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto font_size_adjustment">
            <Nav.Link className="nav_color_change" href="#about">
              About Us
            </Nav.Link>
            <Nav.Link className="nav_color_change" href="#contact">
              Contact Us
            </Nav.Link>
            <Nav.Link className="nav_color_change" onClick={handleShow}>
              Login/Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <span className="reg_title">Registration</span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <Row>
              <Col xs={12}>
                <Card style={{ width: "auto", margin: "5px" }}>
                  <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEpWWQrAJpIR6Xy7FhzhCT00vzSmT7xw9S2Q&s"
                  />
                  <Button variant="success" href="/userlogin">
                    User Login
                  </Button>
                </Card>
              </Col>

              <Col xs={12}>
                <Card style={{ width: "auto", margin: "5px" }}>
                  <Card.Img
                    variant="top"
                    src="https://cdn-icons-png.flaticon.com/512/2304/2304226.png"
                  />
                  <Button variant="warning" href="/adminlogin">
                    Admin Login
                  </Button>
                </Card>
              </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default navbar;
