import React from "react";
import "./sellingUserdetails.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { FaRegCircleUser } from "react-icons/fa6";

const sellingUserdetails = () => {
  return (
    <div className="whole_section">
      <Container>
        <Card className="seller_card_section ">
          <Row>
            <Col xs={12} sm={4} md={4}>
              <div className="seller_user_icon">
                {" "}
                <FaRegCircleUser />
              </div>
            </Col>
            <Col xs={12} sm={4} md={4}>
              <div className="seller_user_name">User Name</div>
            </Col>
            <Col xs={12} sm={4} md={4}>
              <div className="seller_user_button">
                <Button variant="primary" href="/sellingAddbook">Add your books</Button>{" "}
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default sellingUserdetails;
