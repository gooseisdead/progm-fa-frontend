import React from 'react';
import { Route } from 'react-router-dom';
import PlayerCard from '../Components/PlayerCard';

function PlayerContainer({ players, teams }) {

    let sortedList = teams.sort()
        .map((team, index) => <option key={index}>{team.name}</option>);

    const renderPlayers = players.map((player) => { 
            return ( 
                    <PlayerCard 
                            key={player.id}
                            id={player.id}
                            name={player.name} 
                            position={player.position}
                            real_mlb_team={player.real_mlb_team}
                            team={player.team.name}
                            years={player.years}
                            salary_per_year={player.salary_per_year}
                            bids={player.bids}
                            sortedList={sortedList}
                    />
                )})
    return (
        <div className="player-container">{renderPlayers}</div>
    )
}

export default PlayerContainer;