import React from 'react';
import { format } from "date-fns";

function Bid({ years, salary_per_year, created, username, team }) {


    console.log(created)
    const bidDate = new Date(created)

    return (
        <div className="bid-list">
            <p className="salary-line">{years} year(s)<br></br> ${salary_per_year.toFixed(1)} million</p>
            <img className="bid-logo" src={team} alt="team-logo"></img><p className="user-line">{username}</p>
            <p className="time-line">{format(bidDate, "E MMM do yyyy h:mm:ss aa")}</p>
        </div>
    )
}

export default Bid;