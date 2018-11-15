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
    api.sendTextMessageToDialogFlow(data.client).then(res => {
      let result;
      let type;
      if (res[0].queryResult.fulfillmentMessages[0].suggestions.suggestions[0].title) {
        type = 1;
        result = res[0].queryResult.fulfillmentMessages[0].suggestions.suggestions;
      } else if (res[0].queryResult.fulfillmentText) {
        console.log('detected simple response');
        type = 2;
        result = res[0].queryResult.fulfillmentText;
      }
      socket.emit('fromServer', { server: result, type });
      if (result.intent) {
        console.log(`  Intent: ${result.intent.displayName}`);
      } else {
        console.log(`  No intent matched.`);
      }
    });
  });
});

module.exports = server;
