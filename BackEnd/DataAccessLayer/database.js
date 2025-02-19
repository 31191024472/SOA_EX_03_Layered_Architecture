const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false); 
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("✅ Kết nối thành công đến MonggoDb");
  } catch (err) {
    console.error("❌ Kết nối tới MonggoDb thất bại:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
