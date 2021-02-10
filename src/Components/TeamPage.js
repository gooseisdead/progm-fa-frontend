import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddPlayerForm from '../Forms/AddPlayerForm';

function TeamPage({ sortedList, localHandleAddPlayer }) {

    const [team, setTeam] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const params = useParams();

    useEffect(() => {
      fetch(`${process.env.REACT_APP_API_BASE_URL}/teams/${params.id}`)
        .then((r) => r.json())
        .then((team) => {
          setTeam(team);
          setIsLoaded(true);
        });
    }, [params.id]);

    if (!isLoaded) return <h2>Loading...</h2>;

    const { name, logo, players, user } = team;

    let salaryArray = players.map((player) => player.salary_per_year)

    let totalSalary = salaryArray.reduce(function(a, b){
        return a + b;
    }, 0);
    
    const renderPlayers = players.map((player) => {
          return (
              <p>{player.position} .... <b>{player.name}</b> ... {player.years} years, ${player.salary_per_year.toFixed(1)} million </p>
          )})
            
    return (
        <div className="team-page">
            <h1>{name}</h1>
            <p>GM: <b>{user.username}</b></p>
            <img src={logo} alt={name}></img>
            <AddPlayerForm key={params} params={params} sortedList={sortedList} localHandleAddPlayer={localHandleAddPlayer} />
            {renderPlayers}
            ________________________________________________
            <br></br>
            <b>Team Salary: </b>{salaryArray.length} players, {totalSalary.toFixed(1)} million<br></br>
            <p className="cap">Salary Cap: 155.0 million </p>
            <p className="available-salary">Available Salary: {155.0 - totalSalary.toFixed(1)}</p>
        </div>
    )
}

export default TeamPage;