const addNewWorkoutButton = document.querySelector('.btn-addNewWorkout')

addNewWorkoutButton.addEventListener('click', addNewWorkout)


// functions
async function addNewWorkout() {
    const workoutName = document.getElementById('workoutName').value;
    const clientId = document.getElementById('clientId').value
    // const clientIdFromData = clientDataElement.getAttribute('data-client-id');

    try {

        
        const response = await fetch(`/myClients/${clientId}/addNewWorkout`, { 
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: workoutName,
                clientId: clientId
            })
        });

        const data = await response.json();
        console.log(data);
        location.reload();
    } catch (err) {
        console.log(err);
    }
}