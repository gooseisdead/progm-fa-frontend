import React, { useState } from "react";
import { positionSelect } from '../exports/salaries.js'

function NewFreeAgentForm({ localHandleNewFreeAgent, sortedList }) {

  const [name, setName] = useState("")
  const [position, setPosition] = useState("")
  const [years, setYears] = useState("")
  const [salaryPerYear, setSalaryPerYear] = useState("")
  const [selectBy, setSelectBy] = useState("");

  const sortedPosition = positionSelect.map((position, index) => <option key={index}>{position}</option>);
//   const sortedYears = yearSelect.map((year, index) => <option key={index}>{year}</option>);
//   const sortedSalary = salaries.map((salary, index) => <option key={index}>{salary}</option>);

  function handleTeamSelect(event) {
    setSelectBy(event.target.value);
  }

  function handlePositionSelect(event) {
    setPosition(event.target.value);
  }

//   function handleYearSelect(event) {
//     setYears(event.target.value);
//   }

//   function handleSalarySelect(event) {
//     setSalaryPerYear(event.target.value);
//   }

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
    .then((newPlayer) => localHandleNewFreeAgent(newPlayer))
    event.target.reset();
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
        {/* <label>
            <strong> Years: </strong>
                <select onChange={handleYearSelect} value={years}>
                    {sortedYears}
                </select>
        </label>
        <label>
            <strong> Salary Per Year: </strong>
                <select onChange={handleSalarySelect} value={salaryPerYear}>
                    {sortedSalary}
                </select>
        </label> */}
        <br></br>
        <input type="submit" value="Declare New Free Agent" />
      </form>
    );
}

export default NewFreeAgentForm;
