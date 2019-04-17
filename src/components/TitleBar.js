import React from 'react';

const TitleBar = (props) => {

  const options = props.houses.map((house, index) => {
    return <option value={index} key={index}>{house.name}</option>
  })

  function handleChange(event) {
    props.onHousesSelect(event.target.value);
  }

  return (
    <div>
      <h1>Houses</h1>
        <select id="house-selector" onChange={handleChange} defaultValue="default">
          <option disabled value="default">Choose a house</option>
          {options}
        </select>
    </div>
  )
}

export default TitleBar;
