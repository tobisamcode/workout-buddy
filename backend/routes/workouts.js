const express = require("express");

const {
  getWorkouts,
  getAWorkout,
  createWorkout
} = require("../controllers/workouts");

const workoutRouter = express.Router();

// GET all workouts
workoutRouter.get("/", getWorkouts);

// GET a single workout
workoutRouter.get("/:id", getAWorkout);

// POST a new workout
workoutRouter.post("/", createWorkout);

// DELETE a  workout
workoutRouter.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a workout" });
});

// UPDATE a  workout
workoutRouter.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE a workout" });
});

module.exports = workoutRouter;
