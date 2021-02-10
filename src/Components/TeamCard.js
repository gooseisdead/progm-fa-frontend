import React from 'react';
import { Link } from 'react-router-dom';

function TeamCard({ username, team, logo, id }) {

    return (
        <div className="team-container">
            <div className="team-card">
            <Link to={`/teams/${id}`}><h3>{team}</h3></Link>
                        <img src={logo} alt="logo"></img>
                <p>GM: {username}</p>
            </div>
        </div>
    )
}

export default TeamCard;