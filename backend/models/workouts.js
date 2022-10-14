const mongoose = require("mongoose");

const { Schema } = mongoose;
const { ObjectId } = Schema;

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    reps: {
      type: Number,
      required: true
    },
    load: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

const workouts = mongoose.model("Workouts", workoutSchema);

module.exports = workouts;
