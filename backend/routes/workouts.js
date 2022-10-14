const express = require("express");

const workoutModel = require("../models/workouts");

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
workoutRouter.post("/", async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await workoutModel.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
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
