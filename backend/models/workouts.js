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

const workoutModel = mongoose.model("Workout", workoutSchema);

module.exports = workoutModel;
