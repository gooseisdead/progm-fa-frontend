import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


function PlayerCard({ id, name, position, real_mlb_team, team, years, salary_per_year }) {

    return (
        <div className="card-container">
            <div className="player-card">
                <h3><Link to={`/players/${id}`} className="player-link">{name} - {position}</Link></h3>
                <p>{real_mlb_team}</p>
                <p>{team}</p>
                <p>{years} years, ${salary_per_year} million</p>
                <select value="Radish">
                    <option value="Angels">Angels</option>
                    <option value="Athletics">Athletics</option>
                    <option value="Cubs">Cubs</option>
                </select>
            </div>
        </div>
    )
}

export default PlayerCard;