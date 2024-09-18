const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: {
    type: String
  },
  userId: { //trainer ID
    type: String,
    required: true,
  },
  workouts: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Workout' }]
});

module.exports = mongoose.model('Client', clientSchema);


