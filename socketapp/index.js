let http = require('http');
let express = require('express')
let socketIo = require('socket.io');

let app = express();
let server = http.createServer(app);
let io = socketIo(server);

app.use(express.static('./views'));

io.on('connection',(socket)=>{
    console.log('a user is connected');

    socket.on('disconnect',()=>{
        console.log('user disconnected')
    })

    socket.on('message',(msg)=>{
        console.log(msg);
        io.emit('message',msg)
    })

    socket.on('pm',(msg,to)=>{
        console.log('a message has been send to '+ to);
        io.to(to).emit('pm',msg)
    })

    socket.on('register',(userId)=>{
        socket.join(userId);
        console.log(`A user is registered with user Id ${userId}`)
    })
})

server.listen(8080,function(){console.log(`server is running on port 8080`)})