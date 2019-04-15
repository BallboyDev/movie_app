import React, { Component } from 'react';
import Movie from './Movie.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    );
  }
}

export default App;
