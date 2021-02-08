import React from 'react';

function TeamCard({ username, team, logo, id, players }) {

    const renderPlayers = players.map((player) => {
        if (player.team.id === id) {
            return (
                <>
                    <p>{player.name} • {player.position}</p>
                    <p>${player.salary_per_year.toFixed(1)} million</p>
                </>
            )
        }
    })

    return (
        <div className="team-container">
            <div className="team-card" style={{ backgroundImage: {logo} }}>
                <h3>{team}</h3>
                    {/* <div className="team-img-container"> */}
                        <img src={logo} alt="logo"></img>
                    {/* </div> */}
                <p>GM: {username}</p>
                {renderPlayers}
            </div>
        </div>
    )
}

export default TeamCard;