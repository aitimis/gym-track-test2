const mongoose = require('mongoose')

const WorkoutSchema = new mongoose.Schema({
  date: { 
    type: Date, 
    default: Date.now 
},
  clientId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Client' 
},
  exercises: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Exercise' }]
})

module.exports = mongoose.model('Workout', WorkoutSchema)
