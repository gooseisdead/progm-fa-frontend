import React from 'react';

function Bid({ years, salary_per_year, created, username, team }) {

    return (
        <div className="bid-list">
            <p>{years} year(s) ${salary_per_year.toFixed(1)} million</p>
            <p>{username} - {team}</p>
            <p className="time-line">{created}</p>
        </div>
    )
}

export default Bid;