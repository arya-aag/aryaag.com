import React, { Component } from 'react';
import logo from './fire-circle.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Building the Sun..</h1>
        </header>
        <p className="App-intro">
          Please wait a little while longer.
        </p>
      </div>
    );
  }
}

export default App;
