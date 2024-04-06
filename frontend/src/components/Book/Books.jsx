import React, { useEffect, useState } from "react";
import "./Book.css";
import axios from "axios";
import Book from "./Book.jsx";
const URL = "http://localhost:8000/api/v1/books/allbooks";

const Books = () => {
  const [books, setBooks] = useState([]); // Initialize with an empty array
  useEffect(() => {
    const fetchHandler = async () => {
      try {
        await axios.get(URL).then((res) => setBooks(res.data.data.books));
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchHandler();
  }, []);
  // console.log(books);
  return (
    <div>
      <ul>
        {books
          ? books.map((book, i) => (
              <li key={i}>
                <Book book={book} />
              </li>
            ))
          : "Loading..."}
      </ul>
    </div>
  );
};

export default Books;
