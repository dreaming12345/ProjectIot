const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/Student");
const cors = require("cors");
const app = express();
const dbURI = "mongodb://localhost:27017/myDatabase";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json()); // Middleware to parse JSON
app.use(cors());
// Route to fetch all students
app.get("/student", async (req, res) => {
  try {
    const students = await Student.find({});
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: "Error fetching students", error: err });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
