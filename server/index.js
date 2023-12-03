const express = require('express');
const app = express();
const PORT = 4000;

const http = require('http').Server(app);
const cors = require('cors');

app.use(cors(
 { origin: "http://localhost:5173"}
));

const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:5173"
    }
});

let users = [];

// this line establishes a connection event listener, triggered when a client connects tp the server
//the callbac function is executed when the connection is made, with the socket object representing 
//the connected socket
socketIO.on('connection', (socket) => {
  // log a message indicating that a user has just connected along with their socket ID
    console.log(`${socket.id} user just connected`)

    //this line sets up a message event listener for the connected socket
    // the callback function is executed when a message event is received from the client
    // the data parameter represents the received message data
    socket.on('message', (data) => {
      console.log(data)
      //emit a 'messageResponse' event with the updated users array to all connected sockets
      // the data parameter is sent along with the event
      socketIO.emit('messageResponse', data)
    })

    // this line sets up a new user event listener for the connected socket
    //the call back function is executed when a newUser event is received from the client
    //the data parameter represents the received user data
    socket.on('newUser', (data) => {
      //push the received user data into the users array
      users.push(data)

      //emit a newUserResponse event with the the updated users array to all connected sockets
      // the users array is sent along with the event, representing the updated list of users
      socketIO.emit('newUserResponse', users)
    })

    socket.on('disconnect', () => {
      // log a message indicating that a user has just disconnected
        console.log('user disconnected')

        users = users.filter((user) => user.socketID !== socket.id);
        //emit a newUserResponse event with the updated users array to all connected sockets
        socketIO.emit('newUserResponse', users)
        //disconnect the socket
        socket.disconnect();
    })
})

app.get('/api', (req, res) => {
  res.json({
    message: 'Hello world',
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});