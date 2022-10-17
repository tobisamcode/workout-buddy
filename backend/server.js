const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");

const { connectToMongoDB } = require("./connectDB/db");

const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");

// express app

const app = express();

const PORT = process.env.PORT;

// Middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// - Routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

// listen for request
connectToMongoDB(
  app.listen(PORT, () => {
    console.log("server is running on port:", PORT);
  })
);
