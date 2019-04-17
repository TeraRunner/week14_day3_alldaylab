import React, { Component } from 'react';
import './App.css';
import CharacterContainer from './containers/CharacterContainer'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Harry Potter says hello!</h1>
        <CharacterContainer />
      </div>
    );
  }
}
