import React, { useState } from 'react';
import { positionSelect } from '../exports/selctions.js'
import { salaries, yearSelect } from '../exports/selctions.js'

function AddPlayerForm({ params, sortedList, localHandleAddPlayer }) {

    const [name, setName] = useState("");
    const [position, setPosition] = useState("C");
    const [selectBy, setSelectBy] = useState("Arizona Diamondbacks");
    const [years, setYears] = useState(1);
    const [salary, setSalary] = useState(0.4);
  
    const sortedPosition = positionSelect.map((position, index) => 
          <option key={index}>{position}</option>);

    const sortedYears = yearSelect.map((year, index) => <option key={index}>{year}</option>);
    const sortedSalary = salaries.map((salary, index) => <option key={index}>{salary}</option>);

    function handleYearSelect(event) {
        setYears(event.target.value);
    }

    function handleSalarySelect(event) {
        setSalary(event.target.value);
    }
  
    function handleTeamSelect(event) {
        setSelectBy(event.target.value);
    }
  
    function handlePositionSelect(event) {
        setPosition(event.target.value);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      fetch(`${process.env.REACT_APP_API_BASE_URL}/players`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          position: position,
          real_mlb_team: selectBy,
          years: years,
          salary_per_year: salary,
          team_id: params.id
        }),
      })
      .then((r) => r.json())
      .then((newPlayer) => localHandleAddPlayer(newPlayer));
      window.location.reload()
    }
  
      return (
        <form onSubmit={handleSubmit} className="new-freeagent-form">
          <input 
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>
              <strong> Position: </strong>
                  <select onChange={handlePositionSelect} value={position}>
                      {sortedPosition}
                  </select>
          </label>
          <label>
              <strong> MLB Team: </strong>
                  <select onChange={handleTeamSelect} value={selectBy}>
                      {sortedList}
                  </select>
          </label>
          <label>
            <strong> Years: </strong>
                <select onChange={handleYearSelect} value={years} placeholder="Select Years">
                    {sortedYears}
                </select>
        </label>
        <br></br>
        <label>
            <strong> Salary: </strong>
                <select onChange={handleSalarySelect} value={salary}>
                    {sortedSalary}
                </select>
        </label>
          <br></br>
          <input type="submit" value="Add Player To Team" />
        </form>
      );
}

export default AddPlayerForm;