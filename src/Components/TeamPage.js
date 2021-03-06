import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddPlayerForm from '../Forms/AddPlayerForm';
import MinorLeagueManager from '../Forms/MinorLeagueManager';
import Demotions from '../Forms/Demotions';
import NonTender from '../Forms/NonTender';
import Buyout from '../Forms/Buyout';

function TeamPage({ sortedList, localHandleAddPlayer, onDelete, on40Man, onDemotion, onNonTender }) {

    const [team, setTeam] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [showForm, setShowForm] = useState(false)
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

    players.sort(function (a, b) {
        return a.position - b.position; })

    let salaryArray = players.map((player) => player.salary_per_year)
    let totalSalary = salaryArray.reduce(function(a, b) {
        return a + b;
    }, 0);

    const allOthers = ["2nd Year", "3rd Year", "4th Year", "5th Year", "6th Year"]
    
    const renderFortyMan = players.map((player) => {
        if (player.minor_league_status === false) {
            return (
                <p className="forty-man-line">{player.position} .... <b>{player.name}</b>
                 ... ${player.salary_per_year.toFixed(1)} million
                 ({player.team_control === "minors" ? player.team_control : player.years})
                 {player.team_control === "minors" ? <Demotions id={player.id} onDemotion={onDemotion}/> : null}
                 {allOthers.includes(player.team_control) ? <NonTender id={player.id} onNonTender={onNonTender}/> : null}
                 {player.team_control === "Free Agent" ? <Buyout id={player.id} onNonTender={onNonTender}/> : null}</p>
            )}
        })

    const renderMinors = players.map((player) => {
        if (player.minor_league_status === true) {
            return (
                <p className="minors-line">{player.position} .... <b>{player.name}</b> ... ${player.salary_per_year.toFixed(1)} million ({player.team_control}) <MinorLeagueManager id={player.id} onDelete={onDelete} on40Man={on40Man} /></p>
            )}
        })

    function clickHandler() {
        setShowForm((showForm) => !showForm)
    }

    const toKebabCase = str =>
        str &&
        str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');
    
    return (
        <>
        <h1 className="team-name-header">{name}</h1>
                <p className="gm-line">GM: <b>{user.username}</b></p>
                <img src={logo} alt={name} className="team-logo-page"></img><br></br>
        <div className="team-page-container">
        <div className={toKebabCase(team.name)}>
        <button onClick={clickHandler} className='admin-button'>Show/hide admin form</button>
          {showForm ? 
            <AddPlayerForm key={params}
                            params={params}
                            sortedList={sortedList}
                            localHandleAddPlayer={localHandleAddPlayer}
                            setTeam={setTeam}
                            team={team}
                            /> :
                            null
                            } 
                                <h2>40-Man Roster</h2>
                            {renderFortyMan}
            ________________________________________________
                                <h2>Minor Leagues</h2>
                                {renderMinors}
                            <br></br>
                        <p className="roster-size"><b>Roster Size: {salaryArray.length} / 80 </b><br></br> {80 - salaryArray.length} roster slots available</p>
                    <p className="total-salary-line"><b>Team Salary: </b>${totalSalary.toFixed(1)} million</p>
                <p className="available-salary">Available Salary: ${155.0 - totalSalary.toFixed(1)} million</p>
            <p className="cap">Salary Cap: $155.0 million </p>
        </div>
        </div>
        </>
    )
}

export default TeamPage;