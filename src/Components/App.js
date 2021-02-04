import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import PlayerContainer from '../Containers/PlayerContainer';
import TeamContainer from '../Containers/TeamContainer';
import Header from '../Components/Header';

function App() {

  const [users, setUsers] = useState([])
  const [teams, setTeams] = useState([])
  const [players, setPlayers] = useState([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/players`)
        .then((response) => response.json())
        .then(setPlayers)
  },[])
    console.log("Players", players)
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/teams`)
        .then((response) => response.json())
        .then(setTeams)
  },[])
    console.log("Teams", teams)
    
    console.log(teams.map((team) => team.user.username))

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/users`)
        .then((response) => response.json())
        .then(setUsers)
  },[])
    console.log("Users", users)

  return (
    <div className="App">
      <Header />
        <Route path="/teams">
          <TeamContainer teams={teams} />
        </Route>
        <Route path="/players">
          <PlayerContainer teams={teams} players={players} />
        </Route>
    </div>
  );
}

export default App;
