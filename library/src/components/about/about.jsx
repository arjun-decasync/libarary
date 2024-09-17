import React from "react";
import "./about.css";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const about = () => {
  return (
    <div>
      <Card className="about_custom-card">
        <div className="about_card-img-overlay">
          <div className="about_para_section">
            Reading daily is one of the best habits one can possess. It develops
            your imagination and provides you with a fortune of knowledge.
            "Books are your best friend" is rightly said, as reading helps build
            up your confidence and uplifts your mood. Once you start reading,
            you experience a whole new world.
          </div>

          <div className="about_buy_sell_button">
            <Button type="button" href="/userlogin">
              Buy Your Books
            </Button>
            <Button type="button" href="/userlogin">
              Sell Your Books
            </Button>
          </div>

          <Container className="about_bottom-container">
            <Row>
              <Col xs={12} md={4} className="about_img_detail">
                1M+ Books
              </Col>
              <Col xs={12} md={4} className="about_img_detail">
                10k+ Buyers
              </Col>
              <Col xs={12} md={4} className="about_img_detail">
                10K+ Sellers
              </Col>
            </Row>
          </Container>
        </div>
      </Card>
    </div>
  );
};

export default about;
