import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Book } from "../model/books.model.js";

const getAllBooks = asyncHandler(async (req, res) => {
  try {
    const books = await Book.find();

    if (!books) {
      return res.status(404).json(new ApiResponse(400, "Book not found"));
    }
    return res.status(200).json(new ApiResponse(200, { books }, "Books found"));
  } catch (error) {
    throw new ApiError(404, "Something wents wrong with getting books");
  }
});

const getBookById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(404).json(new ApiResponse(400, "Book not found by id"));
  }
  return res
    .status(200)
    .json(new ApiResponse(200, { book }, "Book found by Id"));
});

const addBook = asyncHandler(async (req, res) => {
  const { name, author, description, price, available, image } = req.body;
  let book;

  try {
    book = new Book({ name, author, description, price, available, image });
    await book.save();
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(500).json(new ApiResponse(500, "Book not added"));
  }
  return res
    .status(201)
    .json(new ApiResponse(201, { book }, "Book added successfully"));
});

const updateBook = async (req, res) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  try {
    let book = await Book.findByIdAndUpdate(
      id,
      { name, author, description, price, available, image },
      { new: true }
    );

    if (!book) {
      return res.status(400).json(new ApiResponse(400, "Book not updated"));
    }
    return res
      .status(200)
      .json(new ApiResponse(200, { book }, "Book updated successfully"));
  } catch (error) {
    throw new ApiError(500, "Something wents wrong with updating book");
  }
};

const deleteBook = async (req, res) => {
  const id = req.params.id;
  try {
    let book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(400).json(new ApiResponse(400, "Book not deleted"));
    }
    return res
      .status(200)
      .json(new ApiResponse(200, "Book deleted successfully"));
  } catch (error) {
    throw new ApiError(500, "Something wents wrong with deleting book");
  }
};

export { getAllBooks, getBookById, addBook, updateBook, deleteBook };
