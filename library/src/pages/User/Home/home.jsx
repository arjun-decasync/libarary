import React from "react";
import "./home.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Usernavbar from "../../../usercomponents/userNavbar/usernavbar";

const home = () => {
  return (
    <div>
      <div>
        <Usernavbar />
      </div>

      <div>
        <Container className="home_container">
          <Row>
            <Col xs={12} sm={12} md={6}>
              <Card className="home_image_card">
                <Card.Img
                  variant="top"
                  src="https://d3525k1ryd2155.cloudfront.net/i/en20/homepage-slides/books-on-sale-s-1150w.jpg"
                  className="home_image"
                />
                <Card.Body>
                  <Button variant="primary" href="/buyingHomepage">
                    Buy Books
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={6}>
              <Card className="home_image_card">
                <Card.Img
                  variant="top"
                  src="https://www.clankart.com/user-uploads/blog/What_to_do_with_old_books.webp"
                  className="home_image"
                />
                <Card.Body>
                  <Button variant="primary" href="/sellingHomepage">
                    Sell Your Books
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default home;
