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
    return res.status(200).json(workout);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

// CREATE a new workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }

  if (!load) {
    emptyFields.push("load");
  }

  if (!reps) {
    emptyFields.push("reps");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  try {
    const workout = await workoutModel.create({ title, reps, load });
    return res.status(200).json(workout);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

// DELETE a  workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  try {
    const workout = await workoutModel.findByIdAndDelete({ _id: id });

    if (!workout) {
      return res.status(404).json({ error: "No such workout" });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// UPDATE a  workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  try {
    const workout = await workoutModel.findByIdAndUpdate(
      { _id: id },
      { ...body }
    );

    if (!workout) {
      return res.status(404).json({ error: "No such workout" });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getWorkouts,
  getAWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
};
