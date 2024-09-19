const express = require('express')
const router = express.Router()
const myClientsController = require('../controllers/myClients') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, myClientsController.getClients);

router.get('/:clientId', ensureAuth, myClientsController.getClientProfile)

// router.get('/:clientId', ensureAuth, (req, res, next) => {
//     console.log('Route hit:', req.params.clientId)
//     console.log('Route hit:', req.params)
//     next()
// }, myClientsController.getClientProfile)

router.post('/:clientId/addNewWorkout', myClientsController.addNewWorkout)

router.post('/addNewClient', myClientsController.addNewClient)

router.delete('/deleteClient', myClientsController.deleteClient)

module.exports = router










// router.get('/', ensureAuth, todosController.getTodos)

// router.post('/createTodo', todosController.createTodo)

// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteTodo', todosController.deleteTodo)

