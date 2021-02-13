import React, { useState } from 'react';
import PlayerCard from '../Components/PlayerCard';
import NewFreeAgentForm from '../Forms/NewFreeAgentForm';
import FilterForm from '../Forms/FilterForm';

function PlayerContainer({ teams, players, setPlayers, sortedList, localHandleNewFreeAgent, searchTerm, onChangeSearch, positionTerm, setPositionTerm }) {

    const [expand, setExpand] = useState(false)

    function handleExpand() {
        setExpand((expand) => !expand)
    }

    const buttonLine = !expand ? "Expand Free Agent Cards" : "Minimize Free Agents"

    let playerBids = players.map((player) => player.bids)

    // console.log(playerBids)

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
                            playerBids={playerBids}
                            expand={expand}
                        />
                    </div>
                )}
            })

    return (
        <>
        <div className="form-container">
        <h1 className="fa-header">Free Agency</h1>
            <NewFreeAgentForm
                sortedList={sortedList}
                localHandleNewFreeAgent={localHandleNewFreeAgent}
            />
            <button onClick={handleExpand}>{buttonLine}</button>
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