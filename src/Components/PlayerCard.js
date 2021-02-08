import React from 'react';
import { Link } from 'react-router-dom';
import BidContainer from '../Containers/BidContainer';

function PlayerCard({ id, name, position, real_mlb_team, team, years, salary_per_year }) {

    return (
        <div className="player-container">
            <div className="player-card">
                <h3>
                    <Link to={`/players/${id}`} className="player-link">{name}</Link>
                    <br></br>
                    {position}
                </h3>
                    <p>{real_mlb_team}</p>
                    <p>{team}</p>
                    <p>{years} years, ${salary_per_year} million</p>
                    <BidContainer player_id={id} team={team} />
            </div>
        </div>
    )
}

export default PlayerCard;