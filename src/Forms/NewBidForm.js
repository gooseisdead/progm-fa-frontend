import React, { useState } from 'react';
import { salaries, yearSelect } from '../exports/salaries.js'

function NewBidForm({ player_id, team, localHandleNewBid }) {

    const [years, setYears] = useState("")
    const [salary, setSalary] = useState("")
    // const [user, setUser] = useState("")
    // const [player, setPlayer] = useState("")

    const sortedYears = yearSelect.map((year, index) => <option key={index}>{year}</option>);
    const sortedSalary = salaries.map((salary, index) => <option key={index}>{salary}</option>);

    function handleYearSelect(event) {
        setYears(event.target.value);
      }
    
      function handleSalarySelect(event) {
        setSalary(event.target.value);
      }
    
  
    function handleSubmit(event) {
      event.preventDefault();
      fetch("http://localhost:3000/bids", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          years: years,
          salary_per_year: salary,
          player_id: player_id
          
        }),
      })
      .then((r) => r.json())
      .then((newBid) => localHandleNewBid(newBid))
    }
  
      return (
        <form onSubmit={handleSubmit} className="new-bid-form">
          <label>
            <strong> Years: </strong>
                <select onChange={handleYearSelect} value={years}>
                    {sortedYears}
                </select>
        </label>
        <label>
            <strong> Salary Per Year: </strong>
                <select onChange={handleSalarySelect} value={salary}>
                    {sortedSalary}
                </select>
        </label>
          <input type="submit" value="Place Your Bid" />
        </form>
      );
  








    // return (
    //     <p>form</p>
    //     <label>
    //         <strong>Team:</strong>
    //             <select onChange={handleTeamSelect} value={selectBy}>
    //                 {sortedList}
    //             </select>
    //         </label>
    // )
}

export default NewBidForm;