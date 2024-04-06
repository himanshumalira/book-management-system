import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors());

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//  Routes
import bookRouter from "./routes/book.routes.js";

// Routes declaration
app.use("/api/v1/books", bookRouter);

export { app };
