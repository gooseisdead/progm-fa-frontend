import React, { useState, useEffect } from 'react';
import PlayerContainer from '../Containers/PlayerContainer';

function App() {

  const [players, setPlayers] = useState([])
  const [teams, setTeams] = useState([])

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

  return (
    <div className="App">
      <PlayerContainer players={players} teams={teams} />
    </div>
  );
}

export default App;
