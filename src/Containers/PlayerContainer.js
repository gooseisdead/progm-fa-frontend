import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import PlayerCard from '../Components/PlayerCard';

function PlayerContainer({ teams, players, setPlayers, sortedList }) {

    const renderPlayers = players.map((player) => { 
            if (player.team.name === "Free Agent") {
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
                                teams={teams}
                                setPlayers={setPlayers}
                                sortedList={sortedList}
                        />
                )}
            })

    return (
        <div className="player-container">
            {renderPlayers}
        </div>
    )
}

export default PlayerContainer;