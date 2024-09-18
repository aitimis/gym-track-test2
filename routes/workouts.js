const express = require('express')
const router = express.Router()
const workoutsController = require('../controllers/workouts')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, workoutsController.getWorkouts)
router.get('/:workoutId', ensureAuth, workoutsController.getWorkout)

router.post('/', ensureAuth, workoutsController.createWorkout)

module.exports = router
