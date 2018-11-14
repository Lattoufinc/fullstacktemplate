import React, { Component } from 'react';
import Botui from 'botui-react';
import socketIOClient from 'socket.io-client';

class Chatbot extends Component {
  componentDidMount() {
    const socket = socketIOClient('http://localhost:4001');
    const that = this;
    this.botui.message
      .bot({
        content: "Hey, it's Jeoffery your Host, How can I help you?",
        delay: 1500
      })
      .then(function() {
        that.botui.action
          .text({
            action: {
              placeholder: 'Say Hello'
            }
          })
          .then(function(res) {
            socket.emit('fromClient', { client: res.value }); // sends the message typed to server
            console.log('from client', res); // will print whatever was typed in the field.
          })
          .then(function(data) {
            console.log(data);
            socket.on('fromServer', function(data) {
              // recieveing a reply from server.

              newMessage(data.server);
              addAction();
            });
          });
      });

    function newMessage(response) {
      that.botui.message.add({
        content: response,
        delay: 0
      });
    }

    function addAction() {
      that.botui.action
        .text({
          action: {
            placeholder: 'enter response...'
          }
        })
        .then(function(res) {
          socket.emit('fromClient', { client: res.value });
          console.log('client response: ', res.value);
        });
    }
  }

  render() {
    return (
      <div>
        <Botui className="chat" ref={cmp => (this.botui = cmp)} />
      </div>
    );
  }
}
export default Chatbot;
