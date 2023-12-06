const mongoose = require("mongoose");

// Structure the Schema
const PeopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be provided"],
    trim: true,
    maxlength: [20, "Name length cannot be more than 20 characters"],
  },
  age: {
    type: Number,
    trim: true,
    required: [true, "Please input a valid age"],
    min: [18, "Age cannot be less than 18"],
    max: [99, "Age cannot be more than 99"],
  },
  gender: {
    type: String,
    trim: true,
    required: [true, "Please select your gender"],
  },
});

module.exports = mongoose.model("People", PeopleSchema);
