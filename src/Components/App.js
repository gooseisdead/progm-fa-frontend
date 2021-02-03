import React, { useState, useEffect } from 'react';
import PlayerContainer from '../Containers/PlayerContainer';
import UserContainer from '../Containers/UserContainer';

function App() {

  const [players, setPlayers] = useState([])
  const [teams, setTeams] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/players")
        .then((response) => response.json())
        .then(setPlayers)
    },[])

  useEffect(() => {
    fetch("http://localhost:3000/teams")
        .then((response) => response.json())
        .then(setTeams)
    },[])
  
  useEffect(() => {
    fetch("http://localhost:3000/users")
        .then((response) => response.json())
        .then(setUsers)
    },[])

    console.log(teams.map((team) => team.user.username))
    console.log(users)
    console.log(players)
    console.log(teams)

  return (
    <div className="App">
      <UserContainer users={users} teams={teams} />
      <PlayerContainer players={players} teams={teams} />
    </div>
  );
}

export default App;
