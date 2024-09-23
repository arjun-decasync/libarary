import React from "react";
import "./usernavbar.css";

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const usernavbar = () => {
  return (
    <div className="for_margin">
      <Navbar expand="lg" className="main_body" fixed="top">
        <Container>
          <Navbar.Brand>
            <span className="heading">Book Stall</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto font_size_adjustment">
              <Nav.Link href="#about">Buy Books</Nav.Link>
              <Nav.Link href="#contact">Sell your Books</Nav.Link>
              <Nav.Link href="/">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default usernavbar;
