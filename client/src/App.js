import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import './../../node_modules/html5-device-mockups/dist/device-mockups.min.css';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import NavBar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
        </div>
      </Router>
    );
  }
}

export default App;
