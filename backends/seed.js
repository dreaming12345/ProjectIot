const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");
const Student = require("./models/Student"); // Path to your model

// MongoDB connection
const dbURI = "mongodb://localhost:27017/myDatabase"; // Replace with your database URI
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

// Function to generate fake student data
const generateFakeStudents = (count) => {
  const students = [];
  for (let i = 0; i < count; i++) {
    students.push({
      name: faker.name.fullName(),
      class: `Class ${faker.number.int({
        min: 1,
        max: 12,
      })}${faker.string.alpha({ length: 1, casing: "upper" })}`,
      grade: faker.helpers.arrayElement(["A", "B", "C", "D", "E"]),
      age: faker.number.int({ min: 6, max: 18 }),
      date: faker.date.past(),
      payment: faker.helpers.arrayElement([true, false]),
    });
  }
  return students;
};

// Insert fake data
const seedDatabase = async () => {
  try {
    const fakeStudents = generateFakeStudents(50); // Generate 50 fake student records
    await Student.insertMany(fakeStudents);
    console.log("Fake data inserted successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error inserting fake data:", err);
  }
};

seedDatabase();
