const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  bookLanguage: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  bookPrice: {
    type: Number,
    required: true,
  },
  copies: {
    type: Number,
    required: true,
  },
  bookValue: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
