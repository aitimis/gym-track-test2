const mongoose = require('mongoose')

const ExerciseSchema = new mongoose.Schema({
  name: String,
  sets: Number,
  reps: Number,
  weight: Number
})

module.exports = mongoose.model('Exercise', ExerciseSchema)
