const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const connectDB = require("./DataAccessLayer/database");
const carRoutes = require("./PresentationLayer/index");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Kết nối MongoDB
connectDB();

// Routes
app.use("/api", carRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
