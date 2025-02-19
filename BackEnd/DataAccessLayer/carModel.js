const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  color: { type: String, required: true },
  year: { type: String, required: true }
});

module.exports = mongoose.model("Car", CarSchema, "Cars"); // Liên kết với collection "Cars"
