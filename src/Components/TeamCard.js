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
            <div className="team-card" style={{ backgroundImage: {logo} }}>
                <h3>{team}</h3>
                    {/* <div className="team-img-container"> */}
                        <img src={logo} alt="logo"></img>
                    {/* </div> */}
                <p>GM: {username}</p>
            </div>
        </div>
    )
}

export default TeamCard;