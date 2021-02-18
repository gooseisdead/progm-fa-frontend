import React, { useState } from 'react';
import { positionSelect } from '../exports/selctions.js'
import { salaries, yearSelect, controlSelect } from '../exports/selctions.js'

function AddPlayerForm({ params, sortedList, localHandleAddPlayer }) {

    const [name, setName] = useState("");
    const [position, setPosition] = useState("C");
    const [selectBy, setSelectBy] = useState("Arizona Diamondbacks");
    const [control, setControl] = useState("minors")
    const [years, setYears] = useState(1);
    const [salary, setSalary] = useState("");
  
    const sortedPosition = positionSelect.map((position, index) => 
          <option key={index}>{position}</option>);

    const sortedYears = yearSelect.map((year, index) => <option key={index}>{year}</option>);
    const sortedSalary = salaries.map((salary, index) => <option key={index}>{salary}</option>);
    const sortedControl = controlSelect.map((control, index) => <option key={index}>{control}</option>);

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

    function handleControlSelect(event) {
      setControl(event.target.value);
    }

    console.log(control)

    function salaryBasedOnControl(control) {
      if (control === "minors") {
        return 0.5
      } else if (control === "2nd Year") {
        return 1.0
      } else if (control === "3rd Year") {
        return 1.5
      } else if (control === "4th Year") {
        return 2.0
      } else if (control === "5th Year") {
        return 2.5
      } else if (control === "6th Year") {
        return 3.0
      } else {
        return 0.0
      }
    }

    function yearsBasedOnControl(control) {
      if (control === "minors") {
        return "minors"
      } else if (control === "2nd Year") {
        return "2nd Year"
      } else if (control === "3rd Year") {
        return "3rd Year"
      } else if (control === "4th Year") {
        return "4th Year"
      } else if (control === "5th Year") {
        return "5th Year"
      } else if (control === "6th Year") {
        return "6th Year"
      } else {
        return 0.0
      }
    }
  
  
    function handleSubmit(event, team) {
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
          team_control: control,
          years: yearsBasedOnControl(control),
          salary_per_year: salaryBasedOnControl(control),
          minor_league_status: control === "minors" ? true : false || years === "1" ? true : false,
          team_id: params.id
        }),
      })
      .then((r) => r.json())
      .then((newPlayer) => localHandleAddPlayer(newPlayer));
      window.location.reload()
    }
    
    function handleFreeAgentSubmit(event) {
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
          team_control: "Free Agent",
          years: years,
          salary_per_year: salary,
          minor_league_status: false,
          team_id: params.id
        }),
      })
      .then((r) => r.json())
      .then((newPlayer) => localHandleAddPlayer(newPlayer));
      window.location.reload()
    }




      return (
        <div className="admin-form-container">
        <form onSubmit={handleSubmit} className="admin-form">
        <h2 className="add-new-cc">Add Cost-Controlled Player</h2>
          <strong>Player Name: </strong><input 
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br></br>
          <label>
              <strong> Position: </strong>
                  <select onChange={handlePositionSelect} value={position}>
                      {sortedPosition}
                  </select>
          </label>
          <br></br>
          <label>
              <strong> MLB Team: </strong>
                  <select onChange={handleTeamSelect} value={selectBy}>
                      {sortedList}
                  </select>
          </label>
          <label>
            <br></br>
           <strong> Team Conrol: </strong>
                 <select onChange={handleControlSelect} value={control} placeholder="Select Control">
                     {sortedControl}
                 </select>
         </label>
         {/* <br></br>
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
        </label> */}
          <br></br>
          <input type="submit" value="Add Player To Team" />
        </form>
        <form onSubmit={handleFreeAgentSubmit} className="admin-form">
        <h2 className="add-new-cc">Add Free Agent</h2>
          <strong>Player Name: </strong>
          <input 
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br></br>
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
        </div>
      );
}

export default AddPlayerForm;