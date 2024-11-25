const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  class: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 1,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  payment: {
    type: Boolean,
    required: true,
    default: false,
  },
});

// Create the model
const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
