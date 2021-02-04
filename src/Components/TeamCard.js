import React from 'react';

function TeamCard({ username, team, id, players, users, onSelectBy }) {

    return (
        <div className="team-card">
            <h3>{username} • {id}</h3>
            <p>{team}</p>
        </div>
    )
}

export default TeamCard;