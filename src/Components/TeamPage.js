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
    let totalSalary = salaryArray.reduce(function(a, b) {
        return a + b;
    }, 0);
    
    const renderFortyMan = players.map((player) => {
        if (player.minor_league_status === false) {
            return (
                <p>{player.position} .... <b>{player.name}</b> ... {player.years} years, ${player.salary_per_year.toFixed(1)} million </p>
            )}
        })

    const renderMinors = players.map((player) => {
        if (player.minor_league_status === true) {
            return (
                <p>{player.position} .... <b>{player.name}</b> ... {player.years} years, ${player.salary_per_year.toFixed(1)} million </p>
            )}
        })
            
    return (
        <div className="team-page">
            <AddPlayerForm key={params}
                                params={params}
                                sortedList={sortedList}
                                localHandleAddPlayer={localHandleAddPlayer}
                        />
            <h1>{name}</h1>
                <p>GM: <b>{user.username}</b></p>
                    <img src={logo} alt={name}></img>
                            {renderFortyMan}
            ________________________________________________
                                {renderMinors}
                            <br></br>
                        <p><b>Roster Size: {salaryArray.length} players <p className="max-size">Max Roster Size: 75</p></b> {75 - salaryArray.length} roster slots available</p>
                    <b>Team Salary: </b>{totalSalary.toFixed(1)} million<br></br>
                <p className="cap">Salary Cap: 155.0 million </p>
            <p className="available-salary">Available Salary: {155.0 - totalSalary.toFixed(1)}</p>
        </div>
    )
}

export default TeamPage;