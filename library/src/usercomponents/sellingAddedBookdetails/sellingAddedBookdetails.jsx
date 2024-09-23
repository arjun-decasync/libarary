import React, { useEffect, useState } from "react";
import "./sellingAddedBookdetails.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";

const sellingAddedBookdetails = () => {
  const [bookDetails, setBookDetails] = useState(null); // State to store book details
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch("http://localhost:3001/books");
        const data = await response.json();
        setBookDetails(data); // Set the fetched book data
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, []);

  const deleteBook = async (id) => {
    try {
      await fetch(`http://localhost:3001/books/${id}`, {
        method: "DELETE",
      });
      // Update the frontend after deleting the book
      setBookDetails(bookDetails.filter((book) => book._id !== id));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleEdit = (book) => {
    navigate("/sellingAddbook", { state: { book } });
  };

  // Render loading state if book details are not yet fetched
  if (!bookDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Container>
        {bookDetails.map((book, index) => (
          <Card className="selling_add_book_veiw_card">
            <h1 className="selling_add_book_veiw_heading">
              Added Book Details
            </h1>

            <Row key={index}>
              <Col xs={12} sm={6} md={3}>
                <div className="selling_add_book_veiw_image">
                  <Card.Img
                    variant="top"
                    src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726704000&semt=ais_hybrid"
                  />
                </div>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <div className="sellind_add_book_veiw_details">
                  <p> {book.bookName}</p>
                  <p> {book.authorName}</p>
                  <p> {book.bookLanguage}</p>
                  <p> {book.category}</p>
                </div>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <div className="sellind_add_book_veiw_details">
                  <p> {book.bookPrice} Rs</p>
                  <p>No of copies: {book.copies}</p>
                  <p>{book.bookValue}</p>
                </div>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <div className="sellind_add_book_veiw_button">
                  <Button variant="success" onClick={() => handleEdit(book)}>
                    Edit
                  </Button>
                  <Button variant="danger" onClick={() => deleteBook(book._id)}>
                    Delete
                  </Button>{" "}
                </div>
              </Col>
            </Row>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default sellingAddedBookdetails;
