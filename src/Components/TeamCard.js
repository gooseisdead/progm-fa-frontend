import React from 'react';

function TeamCard({ username, team, logo, id, players }) {

//    const renderPlayers = players.map((player) => {
//        if (player.team.id === id) {
//            return (<p>{player.name} • {player.position}</p>)
//        }
//     })
// {renderPlayers}

    return (
        <div className="team-container">
            <div className="team-card">
                <h3>{team}</h3>
                <img src={logo} alt="logo"></img>
                <p>GM: {username}</p>
            </div>
        </div>
    )
}

export default TeamCard;