import React, { useState } from "react";
import { positionSelect } from '../exports/selctions.js'

function NewFreeAgentForm({ localHandleNewFreeAgent, sortedList }) {

  const [name, setName] = useState("")
  const [position, setPosition] = useState("C")
  const [selectBy, setSelectBy] = useState("Arizona Diamondbacks");

  function handleTeamSelect(event) {
    setSelectBy(event.target.value);
  }

  function handlePositionSelect(event) {
    setPosition(event.target.value);
  }

  const sortedPosition = positionSelect.map((position, index) => 
        <option key={index}>{position}</option>);

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
        years: 0,
        salary_per_year: 0.0,
        minor_league_status: false,
        team_id: 31
      }),
    })
    .then((r) => r.json())
    .then((newPlayer) => localHandleNewFreeAgent(newPlayer)); 
  }

    return (
      <div className="fa-form-container">
        <form onSubmit={handleSubmit} className="new-freeagent-form">
            <label>
                <strong className="strong-new"> Player Name: </strong>
                  <input 
                    name="name"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
            </label>
            <br></br>
          <label>
              <strong className="strong-new">Position: </strong>
                  <select onChange={handlePositionSelect} value={position}>
                      {sortedPosition}
                  </select>
          </label>
          <br></br>
          <label>
              <strong className="strong-new">MLB Team: </strong>
                  <select onChange={handleTeamSelect} value={selectBy}>
                      {sortedList}
                  </select>
          </label>
          <br></br>
          <input type="submit" value="Declare New Free Agent" />
        </form>
      </div>
    );
}

export default NewFreeAgentForm;
