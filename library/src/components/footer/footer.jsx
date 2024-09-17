import React from "react";
import "./footer.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const footer = () => {
  return (
    <div>
      <Container fluid>
        <Card className="card_section_footer">
          <Row>
            <Col xs={12} md={3}>
              <h2 className="footer_heading">Book Stall</h2>
              <p className="footer_para">Buy & Sell your Books Online.</p>
            </Col>
            <Col xs={12} md={3}>
              <h2 className="footer_social_icon_heading">Follow as on</h2>
              <div className="footer_social_icon">
                <FaFacebookF />
                <FaInstagram />
                <FaXTwitter />
                <FaLinkedin />
              </div>
            </Col>
            <Col xs={12} md={3} className="footer_links">
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Buy Books</a>
                </li>
                <li>
                  <a href="#">Sell your Books</a>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={3} className="footer_links">
              <ul>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default footer;
