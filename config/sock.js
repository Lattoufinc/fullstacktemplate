const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const api = require('../client/src/components/api');

const conn = function() {
  server.listen(8080);
  app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
  });
};
const fromClient = function() {
  io.on('connection', function(socket) {
    socket.on('fromClient', function(data) {
      api.sessionClient(data.client).then(function(res) {
        socket.emit('fromServer', { server: res });
      });
    });
  });
};

module.exports = { conn, fromClient };
