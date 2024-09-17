import React from "react";
import "./category.css";
import Card from "react-bootstrap/Card";

import { Container, Row, Col } from "react-bootstrap";

const category = () => {
  return (
    <div>
      <Container fluid>
        <Row className="mb-3">
          <Col xs={12} sm={6} md={3}>
            <Card className="card_body_section1">
              <Card.Img
                variant="top"
                src="https://ew.com/thmb/MaxHBP4uhvg9_3eNeWgx_SOSku0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9781408855669-6cfb2099b6e84a4899ce368d6facc242.jpg"
              />
              <Card.Body>Fantasy</Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Row>
              <Col xs={12} sm={12} md={12}>
                <Card className="card_body_section2">
                  <Card.Img
                    variant="top"
                    src="https://www.kboards.com/attachments/on-the-threshold-of-the-universe_is_hardcover-jpg.47014/"
                  />
                  <Card.Body>Science fiction</Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={12} md={12}>
                <Row>
                  <Col xs={12} sm={12} md={6}>
                    <Card className="card_body_section2">
                      <Card.Img
                        variant="top"
                        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dark-forest-horror-novel-book-cover-design-template-a15fd66840045e990c0e7aba3e054689_screen.jpg?ts=1698536884"
                      />
                      <Card.Body>Horror</Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} sm={12} md={6}>
                    <Card className="card_body_section2">
                      <Card.Img
                        variant="top"
                        src="https://blog-cdn.reedsy.com/directories/gallery/172/large_8ebff8a7bad6d43655d0f8c41918b243.jpg"
                      />
                      <Card.Body>Thriller</Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Row>
              <Col xs={12} sm={12} md={12}>
                <Card className="card_body_section2">
                  <Card.Img
                    variant="top"
                    src="https://media.assettype.com/newindianexpress%2F2024-03%2F252e2868-fe59-455a-98db-e50fe91bea82%2FScreenshot_2024_03_19_031111.jpg"
                  />
                  <Card.Body>Romance</Card.Body>
                </Card>{" "}
              </Col>
              <Col xs={12} sm={12} md={12}>
                <Card className="card_body_section2">
                  <Card.Img
                    variant="top"
                    src="https://bookcover4u.com/pro/Adventures-full-book-cover-design-front-back-cover-and-spine-travel-mountain-guide-adventure-book-covers-retro-mountains-scenic-vacation-vector-landscape-snow-winter-forest-travelling-N1550036625B.jpg"
                  />
                  <Card.Body>Advanture</Card.Body>
                </Card>{" "}
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Row>
              <Col xs={12} sm={12} md={12}>
                <Card className="card_body_section2">
                  <Card.Img
                    variant="top"
                    src="https://miblart.com/wp-content/uploads/2022/06/for_blog.jpg"
                  />
                  <Card.Body>Mystery</Card.Body>
                </Card>{" "}
              </Col>
              <Col xs={12} sm={12} md={12}>
                <Card className="card_body_section2">
                  <Card.Img
                    variant="top"
                    src="https://5.imimg.com/data5/SELLER/Default/2024/6/430862946/LX/FN/SP/118981820/gandhi-my-experience-with-true-book-500x500.jpg"
                  />
                  <Card.Body>Autobiography</Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={12} sm={6} md={6}>
            <Card className="card_body_section1">
              <Card.Img
                variant="top"
                src="https://i.kickstarter.com/assets/034/657/245/c281f90a7cc6b55cb3b04258b0394d67_original.jpg?anim=false&fit=cover&gravity=auto&height=873&origin=ugc&q=92&width=1552&sig=hgINIjSHy4ZpL0TnLEG6GUjn81hlQMy0qXQi5vL941w%3D"
              />
              <Card.Body>Fairy Tales</Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Row>
              <Col xs={12} sm={12} md={12}>
                <Row>
                  <Col xs={12} sm={12} md={6}>
                    <Card className="card_body_section2">
                      <Card.Img
                        variant="top"
                        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/0be9896616877.56027b65f1860.jpg"
                      />
                      <Card.Body>History</Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} sm={12} md={6}>
                    <Card className="card_body_section2">
                      <Card.Img
                        variant="top"
                        src="https://c8.alamy.com/comp/PDEK31/1950s-picture-shows-the-front-cover-of-an-english-visitors-guide-book-to-paris-as-used-by-the-photographer-j-allan-cash-on-his-travels-to-the-french-city-showing-the-famous-symbol-of-paris-the-eiffel-tower-one-can-also-note-the-glossary-of-tea-rooms-which-would-be-important-for-english-visitors-at-this-time-PDEK31.jpg"
                      />
                      <Card.Body>Travel</Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} sm={12} md={12}>
                <Card className="card_body_section2">
                  <Card.Img
                    variant="top"
                    src="https://images.vexels.com/content/313287/preview/children-in-the-summer-book-cover-design-40d5ee.png"
                  />
                  <Card.Body>Kids</Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Card className="card_body_section1">
              <Card.Img
                variant="top"
                src="https://www.mbibooks.com/mbibooks_details/uploads/2022/10/CHELI-PURALATHA-PANTH1.jpg"
              />
              <Card.Body>Sports</Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={12} sm={6} md={3}>
            <Row>
              <Col xs={12} sm={12} md={12}>
                <Card className="card_body_section2">
                  <Card.Img
                    variant="top"
                    src="https://images-platform.99static.com//U0-a8ACuEAk-RgTs1ogmJCJOMgs=/fit-in/590x590/projects-files/67/6777/677727/552d0917-581a-4cd5-8025-42ee981f8af1.jpg"
                  />
                  <Card.Body>Health & Fitness</Card.Body>
                </Card>{" "}
              </Col>
              <Col xs={12} sm={12} md={12}>
                <Card className="card_body_section2">
                  <Card.Img
                    variant="top"
                    src="https://www.rd.com/wp-content/uploads/2023/05/70-of-the-Funniest-Books-of-All-TimeFT-via-merchant-13.jpg"
                  />
                  <Card.Body>Humor</Card.Body>
                </Card>{" "}
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Row>
              <Col xs={12} sm={12} md={12}>
                <Card className="card_body_section2">
                  <Card.Img
                    variant="top"
                    src="https://ik.imagekit.io/panmac/tr:f-auto,w-740,pr-true//bcd02f72-b50c-0179-8b4b-5e44f5340bd4/943009ff-3ea2-48ac-a6c7-7a09aacf4356/Modern-retellings-of-classics.jpg"
                  />
                  <Card.Body>Classic</Card.Body>
                </Card>{" "}
              </Col>
              <Col xs={12} sm={12} md={12}>
                <Card className="card_body_section2">
                  <Card.Img
                    variant="top"
                    src="https://www.amarchitrakatha.com/wp-content/uploads/2022/03/Book_Thumbnail.jpg"
                  />
                  <Card.Body>Poetry</Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={6} md={6}>
            <Card className="card_body_section1">
              <Card.Img
                variant="top"
                src="https://m.media-amazon.com/images/I/81yK5OW+K9L._AC_UF1000,1000_QL80_.jpg"
              />
              <Card.Body>Comics</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default category;
