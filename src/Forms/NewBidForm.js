import React, { useState } from 'react';
import { salaries, yearSelect } from '../exports/selctions.js'

function NewBidForm({ player_id, localHandleNewBid }) {

    const [years, setYears] = useState(1)
    const [salary, setSalary] = useState(0.5)
    const [formHidden, setFormHidden] = useState(false)

    const sortedYears = yearSelect.map((year, index) => <option key={index}>{year}</option>);
    const sortedSalary = salaries.map((salary, index) => <option key={index}>{salary}</option>);

    function testInterval() {
      //PATCH function
      setFormHidden(true)
    }

    function handleYearSelect(event) {
        setYears(event.target.value);
    }
    
    function handleSalarySelect(event) {
        setSalary(event.target.value);
    }
    
    function handleSubmit(event) {
      event.preventDefault();
      fetch(`${process.env.REACT_APP_API_BASE_URL}/bids`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          years: years,
          salary_per_year: salary,
          player_id: player_id,
          user_id: 19 
        }),
      })
      .then((r) => r.json())
      .then((newBid) => localHandleNewBid(newBid));
      setTimeout(testInterval, 5000)
    }

      return (
        <>
        { !formHidden ? 
        <form onSubmit={handleSubmit} data-id={player_id} className="new-bid-form">
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
          <input type="submit" value="Place Your Bid" />
        </form> : <p className="signed-line">SIGNED!</p> }
        </>
      )
}

export default NewBidForm;