import React, { Component } from 'react';
import Launches from './components/Launches';
import logo from './logo.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <img src={logo} alt='logo' style={{ width: 300, display: 'block', margin: 'auto' }} />
        <Launches />
      </div>
    );
  }
}

export default App;
