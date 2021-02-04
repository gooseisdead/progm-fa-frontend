import React from 'react';

function TeamCard({ username, team, id, players, users, onSelectBy }) {

   const renderPlayers = players.map((player) => {
       if (player.team.id === id) {
           return (<p>{player.name} • {player.position}</p>)
       }
   })
    return (
        <div className="team-card">
            <h3>{team}</h3>
            <p>{username}</p>
            {renderPlayers}
        </div>
    )
}

export default TeamCard;