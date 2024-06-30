let socket = io();

function fire(){
    let inputElement = document.getElementById('input');
    let message = inputElement.value;
    let receiverId = prompt('write the Id of the receiver');
    socket.emit('pm',`user ${userId} says ${message}`,receiverId)
}

socket.on('pm',(msg)=>{
    let messageBox = document.getElementById('messages');
    let p = document.createElement('p');
    p.innerHTML = msg;
    messageBox.appendChild(p);
})

socket.on('message',(msg)=>{
    alert(msg)
})

let userId = prompt('what is your user Id');
socket.emit('register',userId)


