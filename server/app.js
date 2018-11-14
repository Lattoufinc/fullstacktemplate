// const express = require('express');
// const path = require('path');
// const routes = require('./../routes');

// const app = express();

// app.set('port', process.env.PORT || 8080);

// app.listen(app.get('port'), () => console.log(`listening on port ${app.get('port')}...`));

// app.use(express.static('public/'));
// app.use(express.static('client/dist'));

// app.use('/api', routes);

// module.exports = app;

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// our localhost port
const port = 8090;

const app = express();

// our server instance
const server = http.createServer(app);

// This creates our socket using the instance of the server
const io = socketIO(server);

// This is what the socket.io syntax is like, we will work this later
io.on('connection', socket => {
  console.log('New client connected');

  // just like on the client side, we have a socket.on method that takes a callback function
  socket.on('change color', color => {
    // once we get a 'change color' event from one of our clients, we will send it to the rest of the clients
    // we make use of the socket.emit method again with the argument given to use from the callback function above
    console.log('Color Changed to: ', color);
    io.sockets.emit('change color', color);
  });

  // disconnect is fired when a client leaves the server
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
