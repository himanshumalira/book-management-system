import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    author: {
      type: String,
      required: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    available: {
      type: Boolean,
    },
    image: {
      type: String, // cloudinary url
      required: true,
    },
  },
  { timestamps: true }
);

export const Book = mongoose.model("Book", bookSchema);
