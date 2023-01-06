const express = require("express");
const workoutRouter = express.Router();
const {
  getWorkouts,
  getAWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
} = require("../controllers/workouts");

const requireAuth = require("../middleware/requireAuth");

// use the requireAuth middleware for all workout routes
workoutRouter.use(requireAuth);

// GET all workouts
workoutRouter.get("/", getWorkouts);

// GET a single workout
workoutRouter.get("/:id", getAWorkout);

// POST a new workout
workoutRouter.post("/", createWorkout);

// DELETE a  workout
workoutRouter.delete("/:id", deleteWorkout);

// UPDATE a  workout
workoutRouter.patch("/:id", updateWorkout);

module.exports = workoutRouter;
