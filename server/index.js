const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const User = require("./models/Employee");
const Book = require("./models/Book");

mongoose.connect(
  "mongodb+srv://arjunbindran:arjunbindran@cluster21.p68zgnb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster21"
);

app.post("/login", async (req, res) => {
  const { mobile, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ mobile });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // If login is successful
    return res.status(200).json("Success");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/register", async (req, res) => {
  const { name, mobile, password } = req.body;

  try {
    // Check if the mobile number already exists
    const existingUser = await User.findOne({ mobile });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Mobile number is already registered" });
    }

    // Create a new user
    const newUser = new User({
      name,
      mobile,
      password,
    });

    await newUser.save();

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

//Add new book
app.post("/add_book", async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res
      .status(201)
      .json({ message: "Book added successfully!", book: newBook });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error adding book", error: error.message });
  }
});

//veiw all book
app.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a book
app.delete("/books/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Book.findByIdAndDelete(id);
    res.json({ message: "Book deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Edit a book
app.put("/books/:id", async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(id, updates, {
      new: true,
    });
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// Get all books with optional filters
app.get("/books_filter", async (req, res) => {
  const { category, bookValue, search } = req.query;
  const query = {};

  // Apply filters if provided
  if (category) {
    query.category = category;
  }
  if (bookValue) {
    query.bookValue = bookValue;
  }

  // Search by bookName or authorName if search term is provided
  if (search) {
    query.$or = [
      { bookName: { $regex: search, $options: "i" } },
      { authorName: { $regex: search, $options: "i" } },
      { bookLanguage: { $regex: search, $options: "i" } },
    ];
  }

  try {
    const books = await Book.find(query);
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});




app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(3001, () => {
  console.log("server is running");
});
