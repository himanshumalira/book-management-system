import { Router } from "express";
import {
  addBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
} from "../controllers/books.controllers.js";

const router = Router();

router.route("/allbooks").get(getAllBooks);
router.route("/bookbyid/:id").get(getBookById);
router.route("/addbook").post(addBook);
router.route("/update/:id").put(updateBook);
router.route("/delete/:id").delete(deleteBook);

export default router;
