import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Car = new Schema(
  {
    make: {type: String, required: true},
    model: {type: String, required: true},
    price: {type: Number, required: true},
    year: {type: Number, required: true, minLength: 4, maxLength: 4},
    img: {type: String},
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Car;