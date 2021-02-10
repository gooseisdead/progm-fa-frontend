import React from 'react';
import { Link } from 'react-router-dom';

function TeamCard({ username, team, logo, id }) {

    return (
        <div className="team-container">
            <div className="team-card" style={{ backgroundImage: {logo} }}>
                <h3>{team}</h3>
                        <img src={logo} alt="logo"></img>
                <p>GM: {username}</p>
                <Link to={`/teams/${id}`}>See Details</Link>
            </div>
        </div>
    )
}

export default TeamCard;