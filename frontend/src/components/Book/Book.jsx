import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";

const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;
  // const updateHandler = async () => {
  //   await axios
  //     .put(`http://localhost:8000/api/v1/books/update/${_id}`, inputs)
  //     .then((res) => res.data)
  //     .then(() => history("/"))
  //     .then(() => history("/books"));
  // };
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:8000/api/v1/books/delete/${_id}`)
      .then((res) => res.data.data.book)
      .then(() => history("/"))
      .then(() => history("/books"));
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs {price}</h3>
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};

export default Book;
