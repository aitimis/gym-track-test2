const express = require('express')
const router = express.Router({ mergeParams: true })
const exercisesController = require('../controllers/exercises')
const { ensureAuth } = require('../middleware/auth')

router.post('/', ensureAuth, exercisesController.addExercise)

module.exports = router
