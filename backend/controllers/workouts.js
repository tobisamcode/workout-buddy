const mongoose = require("mongoose");
const workoutModel = require("../models/workouts");

// GET all workouts
const getWorkouts = async (req, res) => {
  try {
    const workouts = await workoutModel.find().sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

// GET a single workout
const getAWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  try {
    const workout = await workoutModel.findById(id);

    if (!workout) {
      return res.status(404).json({ error: "No such workout" });
    }
    res.status(200).json(workout);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

// CREATE a new workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await workoutModel.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE a  workout

// UPDATE a  workout

module.exports = {
  getWorkouts,
  getAWorkout,
  createWorkout
};
