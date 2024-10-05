import React, { useState, useEffect } from "react";
import "./sellingAddbook.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const sellingAddbook = () => {
  const [imageSrc, setImageSrc] = useState(
    "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726704000&semt=ais_hybrid"
  ); //new
  const [selectedFile, setSelectedFile] = useState(null); //new

  // Handle image upload when clicked
  const handleImageClick = () => {
    document.getElementById("fileInput").click();
  }; //new

  // Handle image selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result); // Update the displayed image
      };
      reader.readAsDataURL(file);
      setSelectedFile(file);
    }
  }; //new

  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    bookName: "",
    authorName: "",
    bookLanguage: "",
    category: "",
    bookPrice: "",
    copies: "",
    bookValue: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Check if we are in "Edit" mode
  useEffect(() => {
    if (location.state && location.state.book) {
      setFormData(location.state.book);
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Book Name, Author, Book Language validation
    if (!formData.bookName || formData.bookName.length < 3)
      newErrors.bookName = "Book Name must be at least 3 characters.";
    if (!formData.authorName || formData.authorName.length < 3)
      newErrors.authorName = "Author Name must be at least 3 characters.";
    if (!formData.bookLanguage || formData.bookLanguage.length < 3)
      newErrors.bookLanguage = "Book Language must be at least 3 characters.";

    // Book Price validation
    if (!formData.bookPrice || formData.bookPrice < 1)
      newErrors.bookPrice = "Book Price must be at least 1.";

    // Copies validation
    if (!formData.copies || formData.copies < 1 || formData.copies > 100)
      newErrors.copies = "Number of copies must be between 1 and 100.";

    // Category validation
    if (!formData.category) newErrors.category = "Please select a category.";

    // Book Value validation
    if (!formData.bookValue)
      newErrors.bookValue = "Please select a book value option.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      if (location.state && location.state.book) {
        // If editing an existing book
        await axios.put(
          `http://localhost:3001/books/${formData._id}`,
          formData
        );
        alert("Book updated successfully!");
      } else {
        // Adding a new book
        await axios.post("http://localhost:3001/add_book", formData);
        alert("Book added successfully!");
      }

      navigate("/sellingHomepage");
    } catch (error) {
      console.error("There was an error submitting the form", error);
      alert("Error adding/updating the book. Please try again.");
    };


    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);

      try {
        const response = await axios.post('http://localhost:5000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(response.data.message);
      } catch (error) {
        console.error('Error uploading image', error);
      }
    };//new




  };

  return (
    <div>
      <Container>
        {/* {isSubmitted && (
          <Alert variant="success">Book details added successfully!</Alert>
        )} */}
        <Card className="sell_book_card">
          <h1 className="book_deatils_heading">
            {" "}
            {location.state && location.state.book
              ? "Edit Book Details"
              : "Add Book Details"}
          </h1>

          <Form onSubmit={handleSubmit}>
            <Row>
              {/* <Col xs={12} sm={12} md={12}>
                <div className="card_book_image_section">
                  <Card.Img
                    variant="top"
                    src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726704000&semt=ais_hybrid"
                  />
                </div>
              </Col> */}

              <Col xs={12} sm={12} md={12}>
                <div className="card_book_image_section">
                  <Card.Img
                    variant="top"
                    src={imageSrc}
                    onClick={handleImageClick}
                    style={{ cursor: "pointer" }}
                  />
                  <input
                    id="fileInput"
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                </div>
              </Col>

              <Col xs={12} sm={6} md={4} className="book_form_section">
                <Form.Group className="mb-3" controlId="bookname">
                  <Form.Label className="sell_book_form_label">
                    Book Name
                  </Form.Label>
                  <Form.Control
                    className={`sell_book_form_control ${
                      errors.bookName ? "is-invalid" : ""
                    }`}
                    type="text"
                    name="bookName"
                    placeholder="Enter Book Name"
                    value={formData.bookName}
                    onChange={handleChange}
                  />
                  {errors.bookName && (
                    <div className="invalid-feedback">{errors.bookName}</div>
                  )}
                </Form.Group>
              </Col>

              <Col xs={12} sm={6} md={4} className="book_form_section">
                <Form.Group className="mb-3" controlId="author">
                  <Form.Label className="sell_book_form_label">
                    Author Name
                  </Form.Label>
                  <Form.Control
                    className={`sell_book_form_control ${
                      errors.authorName ? "is-invalid" : ""
                    }`}
                    type="text"
                    name="authorName"
                    placeholder="Enter Author Name"
                    value={formData.authorName}
                    onChange={handleChange}
                  />
                  {errors.authorName && (
                    <div className="invalid-feedback">{errors.authorName}</div>
                  )}
                </Form.Group>
              </Col>

              <Col xs={12} sm={6} md={4} className="book_form_section">
                <Form.Group className="mb-3" controlId="language">
                  <Form.Label className="sell_book_form_label">
                    Book Language
                  </Form.Label>
                  <Form.Control
                    className={`sell_book_form_control ${
                      errors.bookLanguage ? "is-invalid" : ""
                    }`}
                    type="text"
                    name="bookLanguage"
                    placeholder="Enter Book Language"
                    value={formData.bookLanguage}
                    onChange={handleChange}
                  />
                  {errors.bookLanguage && (
                    <div className="invalid-feedback">
                      {errors.bookLanguage}
                    </div>
                  )}
                </Form.Group>
              </Col>

              <Col xs={12} sm={6} md={4} className="book_form_section">
                <Form.Label className="sell_book_form_label">
                  Category
                </Form.Label>
                <Form.Select
                  className={`sell_book_form_select ${
                    errors.category ? "is-invalid" : ""
                  }`}
                  aria-label="Select Book Category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Select Book Category</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Non-fiction">Non-fiction</option>
                  <option value="Science">Science</option>
                </Form.Select>
                {errors.category && (
                  <div className="invalid-feedback">{errors.category}</div>
                )}
              </Col>

              <Col xs={12} sm={6} md={4} className="book_form_section">
                <Form.Group className="mb-3" controlId="bookrate">
                  <Form.Label className="sell_book_form_label">
                    Book Price
                  </Form.Label>
                  <Form.Control
                    className={`sell_book_form_control ${
                      errors.bookPrice ? "is-invalid" : ""
                    }`}
                    type="number"
                    name="bookPrice"
                    placeholder="Enter Rate per Book"
                    value={formData.bookPrice}
                    onChange={handleChange}
                  />
                  {errors.bookPrice && (
                    <div className="invalid-feedback">{errors.bookPrice}</div>
                  )}
                </Form.Group>
              </Col>

              <Col xs={12} sm={6} md={4} className="book_form_section">
                <Form.Group className="mb-3" controlId="quantity">
                  <Form.Label className="sell_book_form_label">
                    No of copies
                  </Form.Label>
                  <Form.Control
                    className={`sell_book_form_control ${
                      errors.copies ? "is-invalid" : ""
                    }`}
                    type="number"
                    name="copies"
                    placeholder="Enter No of copies"
                    value={formData.copies}
                    onChange={handleChange}
                  />
                  {errors.copies && (
                    <div className="invalid-feedback">{errors.copies}</div>
                  )}
                </Form.Group>
              </Col>

              <Col xs={12} sm={6} md={4} className="book_form_section">
                <Form.Group>
                  <Form.Label className="sell_book_form_label">
                    Book Value
                  </Form.Label>
                  <Form.Check
                    className={`sell_book_form_check ${
                      errors.bookValue ? "is-invalid" : ""
                    }`}
                    type="radio"
                    label="First Copy"
                    value="First Copy"
                    name="bookValue"
                    onChange={handleChange}
                    checked={formData.bookValue === "First Copy"}
                  />
                  <Form.Check
                    className="sell_book_form_check"
                    type="radio"
                    label="Second Hand"
                    value="Second Hand"
                    name="bookValue"
                    onChange={handleChange}
                    checked={formData.bookValue === "Second Hand"}
                  />
                  {errors.bookValue && (
                    <div className="invalid-feedback">{errors.bookValue}</div>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Button type="submit" className="book_button">
              {location.state && location.state.book ? "Update" : "Add"}
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default sellingAddbook;
