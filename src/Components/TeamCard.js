import React from 'react';
import { Link } from 'react-router-dom';

function TeamCard({ username, team, logo, id, players }) {

    // const renderPlayers = players.map((player) => {
    //     if (player.team.id === id) {
    //         return (
    //             <>
    //                 <p>{player.name} • {player.position}</p>
    //                 <p>${player.salary_per_year.toFixed(1)} million</p>
    //             </>
    //         )
    //     }
    // })

    return (
        <div className="team-container">
            <div className="team-card" style={{ backgroundImage: {logo} }}>
                <h3>{team}</h3>
                        <img src={logo} alt="logo"></img>
                <p>GM: {username}</p>
                <Link to={`/teams/${id}`}>See Details</Link>
                {/* {renderPlayers} */}
            </div>
        </div>
    )
}

export default TeamCard;