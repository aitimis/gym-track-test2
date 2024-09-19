// variables
const deleteButtons = document.querySelectorAll('.btn-deleteClient')



// event listeners
document.querySelector('#name').addEventListener('click', addNewClient)

Array.from(deleteButtons).forEach((btn) => {
    btn.addEventListener('click', deleteClient)
})

// functions
async function addNewClient() {
    const name = document.getElementById('name').value
    try {
        const response = await fetch('myClients/addNewClient', { 
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'clientNameFromJSFile': name
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch(err) {
        console.log(err)
    }
}

async function deleteClient() {
    const clientId = this.dataset.id
    console.log('client from HTML is '+ clientId);
    try{
        const response = await fetch('myClients/deleteClient', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'clientIdFromJSFile': clientId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch(err){
        console.log(err)
    }
}



















// const deleteBtn = document.querySelectorAll('.del')
// const todoItem = document.querySelectorAll('span.not')
// const todoComplete = document.querySelectorAll('span.completed')

// Array.from(deleteBtn).forEach((el)=>{
//     el.addEventListener('click', deleteTodo)
// })

// Array.from(todoItem).forEach((el)=>{
//     el.addEventListener('click', markComplete)
// })

// Array.from(todoComplete).forEach((el)=>{
//     el.addEventListener('click', markIncomplete)
// })

// async function deleteTodo(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('todos/deleteTodo', {
//             method: 'delete',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }

// async function markComplete(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('todos/markComplete', {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }

// async function markIncomplete(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('todos/markIncomplete', {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }