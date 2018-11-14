// // const app = require('./app');

// // app.listen(app.get('port'), () => console.log(`listening on port ${app.get('port')}...`));
// const express = require('express');
// const http = require('http');
// const socketIO = require('socket.io');
// const api = require('./api.js');
// // our localhost port
// const port = 8080;

// const app = express();

// // our server instance
// const server = http.createServer(app);

// app.use(express.static('public/'));
// app.use(express.static('client/dist'));

// // This creates our socket using the instance of the server
// const io = socketIO(server);

// // This is what the socket.io syntax is like, we will work this later
// const fromClient = function() {
//   console.log('from client invoked');
//   io.on('connection', socket => {
//     socket.on('fromClient', data => {
//       console.log('data', data);
//       api.invokeDialog(data.client).then(res => {
//         socket.emit('fromServer', { server: res });
//       });
//     });
//   });
// };

// server.listen(port, () => console.log(`Listening on port ${port}`));

// module.exports = { fromClient };
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const api = require('./api');
// our localhost port
const port = 4001;

const app = express();

// our server instance
const server = http.createServer(app);

app.use(express.static('public/'));
app.use(express.static('client/dist'));

// This creates our socket using the instance of the server
const io = socketIO(server);

// Instantiate a DialogFlow client.
const dialogflow = require('dialogflow');

const projectId = 'events-search-2565a'; //https://dialogflow.com/docs/agents#settings
const sessionId = 'quickstart-session-id';

const languageCode = 'en-US';

const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(projectId, sessionId);
// Define session path
// function invokeDialog(query) {
// console.log('invoked', query);

io.on('connection', socket => {
  socket.on('fromClient', data => {
    api.sendTextMessageToDialogFlow(data.client).then(res => {
      console.log('Detected intent');
      const result = res[0].queryResult;
      socket.emit('fromServer', { server: res[0].queryResult.fulfillmentText });
      console.log(`  Query: ${result.queryText}`);
      console.log(`  Response: ${result.fulfillmentText}`);
      if (result.intent) {
        console.log(`  Intent: ${result.intent.displayName}`);
      } else {
        console.log(`  No intent matched.`);
      }
    });
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
