import React, { useEffect, useState } from "react";
import "./buyingBookdetails.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const BuyingBookDetails = () => {
  const [bookDetails, setBookDetails] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    bookValue: "",
    search: "",
  });

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        // Build the query string with the filters
        const queryParams = new URLSearchParams(filters).toString();
        const response = await fetch(
          `http://localhost:3001/books_filter?${queryParams}`
        );
        const data = await response.json();
        setBookDetails(data); // Set the fetched book data
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, [filters]); // Fetch the books again whenever filters change

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearchChange = (e) => {
    setFilters({ ...filters, search: e.target.value });
  };

  return (
    <div>
      <div className="buying_container">
        <Container>
          <Form>
            <Row>
              <Col xs={12} sm={6} md={3}>
                <div className="buying_filter_category">
                  <Form.Select
                    name="category"
                    onChange={handleFilterChange}
                    aria-label="Default select example"
                  >
                    <option>Select Category</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Non-fiction">Non-fiction</option>
                    <option value="Science">Science</option>
                  </Form.Select>
                </div>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <div className="buying_filter_book_value">
                  <Form.Select
                    name="bookValue"
                    onChange={handleFilterChange}
                    aria-label="Default select example"
                  >
                    <option>Select Book Value</option>
                    <option value="First Copy">First Copy</option>
                    <option value="Second Hand">Second Hand</option>
                  </Form.Select>
                </div>
              </Col>
              <Col xs={12} sm={6} md={6}>
                <div className="buying_filter_search">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      type="text"
                      name="search"
                      placeholder="type bookname, authorname, booklanguage"
                      onChange={handleSearchChange}
                    />
                  </Form.Group>
                </div>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            {bookDetails.map((book) => (
              <Col xs={12} sm={6} md={4} key={book._id}>
                <Card
                  style={{ width: "20rem" }}
                  className="buying_book_details_card"
                >
                  <Card.Img
                    variant="top"
                    src={
                      book.imageUrl ||
                      "https://www.shutterstock.com/image-photo/stack-books-against-background-library-600nw-2459213053.jpg"
                    }
                    alt={book.bookName}
                  />
                  <Card.Body className="buying_book_details_card_body">
                    <Row>
                      <Col
                        xs={12}
                        sm={6}
                        md={6}
                        className="buying_book_details_p_tag"
                      >
                        <p>{book.bookName}</p>
                        <p>{book.authorName}</p>
                        <p>{book.bookLanguage}</p>
                      </Col>
                      <Col
                        xs={12}
                        sm={6}
                        md={6}
                        className="buying_book_details_p_tag"
                      >
                        <p>{book.category}</p>
                        <p>{book.bookValue}</p>
                        <p>{book.bookPrice} Rs</p>
                      </Col>
                    </Row>

                    <Button
                      variant="primary"
                      className="buying_book_details_button"
                    >
                      Buy
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BuyingBookDetails;
