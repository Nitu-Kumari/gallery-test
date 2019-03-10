import React, { Component } from 'react';
import logo from './logo.svg';
import Gallery from './component/Gallery.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Gallery />
      </div>
    );
  }
}

export default App;