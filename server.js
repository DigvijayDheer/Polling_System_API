const express = require("express");
const dotenv = require("dotenv").config();
const color = require("colors");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

// Initialize Database
connectDB();

// Initialize App
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/polls", require("./routes/pollRoutes"));
app.use("/api/options", require("./routes/optionRoutes"));

// Start the server
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server started on port: ${port}`);
});
