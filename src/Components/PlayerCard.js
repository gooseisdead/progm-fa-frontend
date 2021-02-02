import React from 'react';

function PlayerCard({ name, position, real_mlb_team, team, years, salary_per_year}) {
    return (
        <div className="player-card">
            <h3>{name} - {position}</h3>
            <p>{real_mlb_team}</p>
        </div>
    )
}

export default PlayerCard;