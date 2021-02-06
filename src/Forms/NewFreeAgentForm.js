import React, { useState } from "react";
import { positionSelect } from '../exports/selctions.js'

function NewFreeAgentForm({ localHandleNewFreeAgent, sortedList }) {

  const [name, setName] = useState("")
  const [position, setPosition] = useState("")
  const [selectBy, setSelectBy] = useState({value: "Arizona Diamondbacks"});

  const sortedPosition = positionSelect.map((position, index) => 
        <option key={index}>{position}</option>);

  function handleTeamSelect(event) {
    setSelectBy(event.target.value);
  }

  function handlePositionSelect(event) {
    setPosition(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3000/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        position: position,
        real_mlb_team: selectBy,
        years: 0,
        salary_per_year: 0.0,
        team_id: 31
      }),
    })
    .then((r) => r.json())
    .then((newPlayer) => localHandleNewFreeAgent(newPlayer));
    event.target.reset();
    if (event.target.value === null) {
      console.log("hello")
    }
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
                <select onChange={handleTeamSelect} value={selectBy.value}>
                    {sortedList}
                </select>
        </label>
        <br></br>
        <input type="submit" value="Declare New Free Agent" />
      </form>
    );
}

export default NewFreeAgentForm;
