import React from 'react';

const CharacterDetail = (props) => {
  if (!props.character) return null;
  return (
    <div>
      <h1>{props.character.name}</h1>
      <h2>{props.character.house}</h2>
      <img src={props.character.image} height='320px' width='240px' alt="character"/>
    </div>
  )
}

export default CharacterDetail;
