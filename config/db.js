const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectDB = async () => {
  try {
    // Connect to MongoDB
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`.bgGreen);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
