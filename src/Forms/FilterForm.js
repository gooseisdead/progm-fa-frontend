import React from 'react';
import { positionSelect } from '../exports/selctions.js'

function FilterForm({ searchTerm, onChangeSearch }) {

    function handleChange(event) {
        onChangeSearch(event.target.value);
    }

    function handleClick() {
      onChangeSearch("")
    }

    const sortedPosition = positionSelect.map((position, index) => 
    <option key={index}>{position}</option>);
    
      return (
        <div className="filter-form">
          {/* <div className="input">
            <strong>Search by Name: </strong>
                <input className="prompt" value={searchTerm} onChange={handleChange} /> */}
            <br></br>
            <label>
              <strong> Filter by Position: </strong>
                  <select onChange={handleChange} value={searchTerm}>
                      {sortedPosition}
                  </select>
            </label>
            <br></br>
            <button onClick={handleClick}>Reset Filter</button>
            {/* <i className="search icon" />
          </div> */}
        </div>
      );
}

export default FilterForm;