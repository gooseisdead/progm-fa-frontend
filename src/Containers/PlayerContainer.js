import React, { useState } from 'react';
import PlayerCard from '../Components/PlayerCard';
import NewFreeAgentForm from '../Forms/NewFreeAgentForm';
import FilterForm from '../Forms/FilterForm';

function PlayerContainer({ teams, players, setPlayers, sortedList, localHandleNewFreeAgent, searchTerm, onChangeSearch, positionTerm, setPositionTerm }) {

    const [expand, setExpand] = useState(false)
    const [newShowForm, setNewShowForm] = useState(false)

    function handleExpand() {
        setExpand((expand) => !expand)
    }

    function handleShowForm() {
        setNewShowForm((newShowForm) => !newShowForm)
    }

    const expandLine = !expand ? "Expand Free Agent Cards" : "Minimize Free Agents"

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
        <button onClick={handleShowForm} className="new-fa-button">Open Player For Free Agency</button>
            {newShowForm ? 
            <NewFreeAgentForm
                sortedList={sortedList}
                localHandleNewFreeAgent={localHandleNewFreeAgent}
            /> :
            null
            }
            <br></br>
            <button onClick={handleExpand}>{expandLine}</button>
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