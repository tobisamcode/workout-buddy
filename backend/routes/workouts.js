const express = require("express");

const workoutRouter = express.Router();

// GET all workouts
workoutRouter.get("/", (req, res) => {
  res.json({ message: "GET all workouts" });
});

// GET a single workout
workoutRouter.get("/:id", (req, res) => {
  res.json({ message: "GET a single workout" });
});

// POST a new workout
workoutRouter.post("/", (req, res) => {
  res.json({ message: "POST a new workout" });
});

// DELETE a  workout
workoutRouter.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a workout" });
});

// UPDATE a  workout
workoutRouter.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE a workout" });
});

module.exports = workoutRouter;
