import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './SectionTwo.css';

const SectionTwo = () => (
  <Row className="show-grid text-center disp">
    <Col xs={12} sm={14} className="person-wrapper">
      <div className="hi-icon-wrap hi-icon-effect-1 hi-icon-effect-1a">
        <a href="#" className="hi-icon hi-icon-mobile">
          Mobile
        </a>
      </div>
      <h3>
        <code>Section 1</code>
      </h3>
      <p>
        Bespoke whatever normcore austin ea, chicharrones four loko. Non la croix dreamcatcher
        taiyaki. Scenester trust fund small batch consectetur man bun, shaman austin ramps. Paleo
        sunt mumblecore, unicorn selvage neutra pop-up +1 vice edison bulb hella.
      </p>
    </Col>
    <Col xs={12} sm={14} className="person-wrapper">
      <div className="hi-icon-wrap hi-icon-effect-1 hi-icon-effect-1a">
        <a href="#" className="hi-icon hi-icon-chat">
          Chat
        </a>
      </div>
      <h3>
        <code>Section 2</code>
      </h3>
      <p>
        Ullamco keytar poke, copper mug keffiyeh tilde photo booth artisan four dollar toast nisi
        bespoke viral. Subway tile id DIY, taiyaki live-edge do pok pok 90's iceland art party
        heirloom tote bag. Dolor flannel sed, jianbing taxidermy incididunt brooklyn.
      </p>
    </Col>
    <Col xs={12} sm={14} className="person-wrapper">
      <div className="hi-icon-wrap hi-icon-effect-1 hi-icon-effect-1a">
        <a href="#" className="hi-icon hi-icon-list">
          List
        </a>
      </div>
      <h3>
        <code>Section 3</code>
      </h3>
      <p>
        Viral kickstarter intelligentsia air plant copper mug taxidermy everyday carry tempor umami
        man bun vegan. Celiac meggings yuccie pitchfork sustainable twee. Wayfarers edison bulb
        mustache YOLO officia truffaut. Irony portland fam hella fugiat, laborum nulla.
      </p>
    </Col>
  </Row>
);

export default SectionTwo;
