require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// API Routes
const personRoutes = require("./routes/personRoutes");

app.use("/person", personRoutes);

// Default endpoint route
app.get("/", (req, res, next) => {
  res.json({
    status: "success",
  });
});

// MongoDB connection
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.ak7bzyw.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Conected");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
