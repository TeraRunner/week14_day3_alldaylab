import React, {Component} from 'react';
import CharacterSelector from '../components/CharacterSelector'
import CharacterDetail from '../components/CharacterDetail'
import TitleBar from '../components/TitleBar'

export default class CharacterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      currentCharacter: null,
      currentHouse: null
    }
    this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
    this.handleHousesSelect = this.handleHousesSelect.bind(this);
    this.getFilteredCharacters = this.getFilteredCharacters.bind(this);
  }

  componentDidMount() {
    const url= 'http://hp-api.herokuapp.com/api/characters';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({characters: data})
    });

    request.send();

  }

  handleHousesSelect(index) {
    const selectedHouse = this.props.houses[index];
    this.setState({currentHouse: selectedHouse});
  }

  handleCharacterSelected(index) {
    const selectedCharacter = this.getFilteredCharacters()[index];
    this.setState({currentCharacter: selectedCharacter});
  }

  getFilteredCharacters() {
    const charactersArray = this.state.characters;
    if (this.state.currentHouse == null) {
      return this.state.characters;
    }
    else {
      const houseQuery = this.state.currentHouse.name;
      const filtered = charactersArray.filter((character) => {
        return houseQuery === character.house
      });
      return filtered;

    }
    // return this.state.characters;
  }

  render() {
    return (
      <div>
        <TitleBar
          onHousesSelect={this.handleHousesSelect}
          houses={this.props.houses}
        />
        <h1>Character container</h1>
          <CharacterSelector characters={this.getFilteredCharacters()} onCharacterSelected={this.handleCharacterSelected} />
          <CharacterDetail character={this.state.currentCharacter} />
      </div>
    )
  }

}
