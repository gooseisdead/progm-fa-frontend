import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import BidContainer from '../Containers/BidContainer';


function PlayerCard({ id, name, position, real_mlb_team, team, years, salary_per_year, sortedList, teams, bids }) {

    const [selectBy, setSelectBy] = useState("");

    function handleTeamSelect(event) {
        setSelectBy(event.target.value);
      }

    // let sortedList = teams.sort()
    //     .map((team, index) => <option key={index}>{team.name}</option>);

    return (
        <div className="card-container">
            <div className="player-card">
                <h3>
                    <Link to={`/players/${id}`} className="player-link">{name} - {position}</Link>
                </h3>
                <p>{real_mlb_team}</p>
                <p>{team}</p>
                <p>{years} years, ${salary_per_year} million</p>
                <label>
                <strong>Team:</strong>
                    <select onChange={handleTeamSelect} value={selectBy}>
                        {sortedList}
                    </select>
                </label>
                <BidContainer player_id={id} />
            </div>
        </div>
    )
}

export default PlayerCard;