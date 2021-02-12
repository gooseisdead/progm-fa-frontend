import React, { useState } from 'react';
import PlayerCard from '../Components/PlayerCard';
import NewFreeAgentForm from '../Forms/NewFreeAgentForm';
import FilterForm from '../Forms/FilterForm';

function PlayerContainer({ teams, players, setPlayers, sortedList, localHandleNewFreeAgent, searchTerm, onChangeSearch, positionTerm, setPositionTerm }) {

    const renderPlayers = players.map((player) => { 
            if (player.team.name === "Free Agent") {
                return (
                    <div>
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
                    </div>
                )}
            })

    return (
        <>
        <div className="form-container">
            <NewFreeAgentForm
                sortedList={sortedList}
                localHandleNewFreeAgent={localHandleNewFreeAgent}
            />
            <h1>Free Agents</h1>
            <FilterForm searchTerm={searchTerm} onChangeSearch={onChangeSearch} positionTerm={positionTerm} setPositionTerm={setPositionTerm} />
        </div>
        <div className="player-container">
                <br></br>
                    {renderPlayers}
        </div>
        </>
    )
}

export default PlayerContainer;