import logo from './logo.svg';
import React from 'react';
import Pokedex from './pokedex';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Pokedex />
      </div>      
    );
  }
}

export default App;
