const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");

const workoutRoutes = require("./routes/workouts");

// express app

const app = express();

const PORT = process.env.PORT;

// Middleware

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// - Routes

app.use("/api/workouts", workoutRoutes);

// listen for request
app.listen(PORT, () => {
  console.log("serving is running on port:", PORT);
});
