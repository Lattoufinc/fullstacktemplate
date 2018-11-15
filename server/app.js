const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const api = require('./api');

// our localhost port
const app = express();

// our server instance
const server = http.createServer(app);

app.use(express.static('public/'));
app.use(express.static('client/dist'));

// This creates our socket using the instance of the server
const io = socketIO(server);

io.on('connection', socket => {
  socket.on('fromClient', data => {
    api
      .sendTextMessageToDialogFlow(data.client)
      .then(res => {
        console.log('results', res);

        socket.emit('fromServer', res);
      })
      .catch(err => console.log(err));
  });
});

module.exports = server;
