import React, { Component } from 'react';
import './Phone.css';
import Chatbot from './Chatbot';

class Phone extends Component {
  render() {
    return (
      <div className="phone">
        <div className="marvel-device iphone-x">
          <div className="notch">
            <div className="camera" />
            <div className="speaker" />
          </div>
          <div className="top-bar" />
          <div className="sleep" />
          <div className="bottom-bar" />
          <div className="volume" />
          <div className="overflow">
            <div className="shadow shadow--tr" />
            <div className="shadow shadow--tl" />
            <div className="shadow shadow--br" />
            <div className="shadow shadow--bl" />
          </div>
          <div className="inner-shadow" />
          <div className="screen">
            {/* <iframe
            width="400"
            height="825"
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/eaf6ae59-822f-437a-b8fb-79f1a56077e4"
          /> */}
            <div className="header">
              <img className="headerlogo" src="../assets/logo.png" />
            </div>
            <Chatbot />
          </div>
        </div>
      </div>
    );
  }
}

export default Phone;
