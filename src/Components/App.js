import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import PlayerContainer from '../Containers/PlayerContainer';
import UserContainer from '../Containers/UserContainer';
import Header from '../Components/Header';

function App() {

  const [players, setPlayers] = useState([])
  const [teams, setTeams] = useState([])
  const [users, setUsers] = useState([])

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
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/users`)
        .then((response) => response.json())
        .then(setUsers)
    },[])
  console.log("Users", users)


  console.log(teams.map((team) => team.user.username))
  

  return (
    <div className="App">
      <Header />
        <Route path="/users">
          <UserContainer users={users} teams={teams} />
        </Route>
        <Route path="/players">
          <PlayerContainer players={players} teams={teams} />
        </Route>
    </div>
  );
}

export default App;
