import React from 'react';
import PlayerCard from '../Components/PlayerCard';

function PlayerContainer({ players, teams }) {

    console.log(teams.map((team) => team.players ))
    
    const renderPlayers = players.map((player) => { 
            return ( 
                <PlayerCard 
                            key={player.id}
                            name={player.name} 
                            position={player.position}
                            real_mlb_team={player.real_mlb_team}
                            team={player.team}
                            years={player.years}
                            salary_per_year={player.salary_per_year}
                />)})
    return (
        <div className="player-container">{renderPlayers}</div>
    )
}

export default PlayerContainer;