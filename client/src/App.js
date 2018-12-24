import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launch';
import logo from './logo.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <img src={logo} alt='logo' style={{ width: 300, display: 'block', margin: 'auto' }} />
          <Route exact path='/' component={Launches} />
          <Route exact path='/launch/:flight_number' component={Launch} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
