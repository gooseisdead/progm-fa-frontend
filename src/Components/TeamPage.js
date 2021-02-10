import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddPlayerForm from '../Forms/AddPlayerForm';

function TeamPage({ users, sortedList, localHandleAddPlayer }) {

    const [team, setTeam] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const params = useParams();
    console.log(params);

    useEffect(() => {
      fetch(`${process.env.REACT_APP_API_BASE_URL}/teams/${params.id}`)
        .then((r) => r.json())
        .then((team) => {
          setTeam(team);
          setIsLoaded(true);
        });
    }, [params.id]);

    if (!isLoaded) return <h2>Loading...</h2>;

    const { name, logo, players } = team;
    
    const renderPlayers = players.map((player) => {
          return (
              <p>{player.position} .... {player.name}</p>
          )})
            
    return (
        <div className="team-page">
            <h1>{name}</h1>
            <img src={logo} alt={name}></img>
            <AddPlayerForm params={params} sortedList={sortedList} localHandleAddPlayer={localHandleAddPlayer} />
            {renderPlayers}
        </div>
    )
}

export default TeamPage;