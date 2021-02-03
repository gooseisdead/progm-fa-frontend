import React from 'react';
import { Route } from 'react-router-dom';
import PlayerCard from '../Components/PlayerCard';

function PlayerContainer({ players, teams }) {

    const renderPlayers = players.map((player) => { 
            return ( 
                // <Route exact path="players/:id">
                    <PlayerCard 
                            key={player.id}
                            id={player.id}
                            name={player.name} 
                            position={player.position}
                            real_mlb_team={player.real_mlb_team}
                            team={player.team.name}
                            years={player.years}
                            salary_per_year={player.salary_per_year}
                    />
                // </Route>
                )})
    return (
        <div className="player-container">{renderPlayers}</div>
    )
}

export default PlayerContainer;