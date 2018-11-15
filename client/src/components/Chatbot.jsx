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
            socket.on('fromServer', function(data) {
              // recieveing a reply from server.
              console.log('from server invoked', data);

              if (data.type === 1) {
                newSuggestion(data.server);
              } else if (data.type === 2) {
                newMessage(data.server);
                addAction();
              }
            });
          });
      });

    function newMessage(response) {
      that.botui.message.add({
        cssClass: 'custom-class',
        content: response,
        delay: 0
      });
    }

    function newSuggestion(response) {
      var newResponse = response.map(function(item) {
        return { text: item.title, value: item.title };
      });
      console.log('new response', newResponse);
      that.botui.action
        .button({
          action: newResponse
        })
        .then(function(res) {
          socket.emit('fromClient', { client: res.value });
          // will be called when a button is clicked.
          console.log(res.value); // will print "one" from 'value'
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
      <div className="botui-app-container">
        <Botui className="chat" ref={cmp => (this.botui = cmp)} />
      </div>
    );
  }
}
export default Chatbot;
