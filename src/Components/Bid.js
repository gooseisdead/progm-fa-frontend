import React from 'react';
import { format } from "date-fns";

function Bid({ years, salary_per_year, created, username, team }) {

    const bidDate = new Date(created)

    return (
        <div className="bid-list">
            <p>{years} year(s) ${salary_per_year.toFixed(1)} million</p>
            <p>{username} - {team}</p>
            <p className="time-line">{format(bidDate, "E MMM do yyyy h:mm:ss aa")}</p>
            ---------
        </div>
    )
}

export default Bid;