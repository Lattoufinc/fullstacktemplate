import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';
import Phone from './Phone';
import Typing from 'react-typing-animation';
import './SectionOne.css';

const SectionOne = () => (
  <Jumbotron>
    <div className="row">
      <div className="column1">
        <h2>Reinventing </h2>
        <h2 className="code">Event Management</h2>

        <h2>platform.</h2>
        <Typing>
          <p className="type">
            Create your own personal AI Host,
            <Typing.Backspace count={8} />
            Event planner
            <Typing.Backspace count={13} />
            and Assistant.
            <Typing.Backspace count={14} />
          </p>
        </Typing>
      </div>
      <div className="column2">
        <Phone />
      </div>
    </div>
    <div>
      <Link to="/about">
        <Button bsStyle="primary">Request a Demo!</Button>
      </Link>
    </div>
  </Jumbotron>
);

export default SectionOne;
