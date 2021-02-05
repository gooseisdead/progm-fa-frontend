import React from 'react';

function TeamCard({ username, team, logo, id, players }) {

//    const renderPlayers = players.map((player) => {
//        if (player.team.id === id) {
//            return (<p>{player.name} • {player.position}</p>)
//        }
//     })
    return (
        <div className="card-container">
            <div className="team-card">
                <h3>{team}</h3>
                <img src={logo} alt="logo"></img>
                <p>{username}</p>
                {/* {renderPlayers} */}
            </div>
        </div>
    )
}

export default TeamCard;