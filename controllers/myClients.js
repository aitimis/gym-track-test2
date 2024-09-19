const Clients = require('../models/Client');
const Workouts = require('../models/Workout');

module.exports = {
    // get all clients
    getClients: async(req, res)=>{
        console.log(req.user)
        try{
            const clientsItems = await Clients.find({userId: req.user.id})
            res.render('myClients.ejs', {clients: clientsItems, user: req.user})
        } catch (err) {
            console.log(err)
        }
    },

    //show clients profile with their workouts
    getClientProfile: async (req, res) => {
        try {
            const clientProfile = await Clients.findOne({_id: req.params.clientId, userId: req.user.id}).populate('workouts')
            res.render('clientProfile.ejs', { clientProfile: clientProfile })
        } catch (err) {
            console.log(err)
        }
    },

    // submit new workout on the client's profile
    addNewWorkout: async(req,res)=>{
        console.log('Request Body:', req.body);
        try{

            await Workouts.create({
                name: req.body.workoutName,
                // clientId: req.body.clientId
            })
            console.log('Workout has been added!');
            res.redirect(`/myClients/${req.body.clientId}`)
        } catch(err) {
            console.log(err)
        }
    },
    

    // submit new client
    addNewClient: async(req,res)=>{
        try{
            await Clients.create({
                name: req.body.name,
                userId: req.user.clientId // trainer's Id
            })
            console.log('Client has been added!')
            res.redirect('/myClients')
        } catch(err) {
            console.log(err)
        }
    },

    // delete one client
    deleteClient: async(req,res)=>{
        try{
            await Clients.findOneAndDelete({
                _id: req.body.clientIdFromJSFile
            })
            console.log('Client deleted!')
            res.json('Deleted it')
        } catch(err) {
            console.log(err)
        }
    }
}










// const Todo = require('../models/client')

// module.exports = {
//     getTodos: async (req,res)=>{
//         console.log(req.user)
//         try{
//             const todoItems = await Todo.find({userId:req.user.id})
//             const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
//             res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
//         }catch(err){
//             console.log(err)
//         }
//     },
//     createTodo: async (req, res)=>{
//         try{
//             await Todo.create({todo: req.body.todoItem, completed: false, userId: req.user.id})
//             console.log('Todo has been added!')
//             res.redirect('/todos')
//         }catch(err){
//             console.log(err)
//         }
//     },
//     markComplete: async (req, res)=>{
//         try{
//             await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
//                 completed: true
//             })
//             console.log('Marked Complete')
//             res.json('Marked Complete')
//         }catch(err){
//             console.log(err)
//         }
//     },
//     markIncomplete: async (req, res)=>{
//         try{
//             await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
//                 completed: false
//             })
//             console.log('Marked Incomplete')
//             res.json('Marked Incomplete')
//         }catch(err){
//             console.log(err)
//         }
//     },
//     deleteTodo: async (req, res)=>{
//         console.log(req.body.todoIdFromJSFile)
//         try{
//             await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
//             console.log('Deleted Todo')
//             res.json('Deleted It')
//         }catch(err){
//             console.log(err)
//         }
//     }
// }    