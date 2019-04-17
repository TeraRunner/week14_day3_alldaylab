import React, { Component } from 'react';
import './App.css';
import CharacterContainer from './containers/CharacterContainer'

export default class App extends Component {
  render() {
    const houses = [
      {name: "Gryffindor", url:'http://hp-api.herokuapp.com/api/characters/house/gryffindor'},
      {name: "Slytherin", url:'http://hp-api.herokuapp.com/api/characters/house/slytherin'},
      {name: "Ravenclaw", url:'http://hp-api.herokuapp.com/api/characters/house/ravenclaw'},
      {name: "Hufflepuff", url:'http://hp-api.herokuapp.com/api/characters/house/hufflepuff'}
    ]

    return (
      <div>
        <h1>Harry Potter says hello!</h1>
        <CharacterContainer houses={houses}/>
      </div>
    );
  }
}
