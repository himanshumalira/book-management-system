# React + Vite

import React, { useEffect, useState } from "react";
import "./Book.css";
import axios from "axios";
import Book from "./Book";
const URL = "http://localhost:8000/api/v1/books/allbooks";
const fetchHandler = async () => {
return await axios.get(URL).then((res) => res.data.books);
};
const Books = () => {
const [books, setBooks] = useState();
useEffect(() => {
fetchHandler().then((data) => setBooks(data.books));
}, []);
console.log(books);
return (
<div>
<ul>
{books &&
books.map((book, i) => (
<li key={i}>
<Book book={book} />
</li>
))}
</ul>
</div>
);
};

export default Books;

export default App;
