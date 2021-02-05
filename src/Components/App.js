import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PlayerContainer from '../Containers/PlayerContainer';
import PlayerCard from '../Components/PlayerCard';
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
    // console.log("Players", players)
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/teams`)
        .then((response) => response.json())
        .then(setTeams)
  },[])
    // console.log("Teams", teams)
    
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/users`)
        .then((response) => response.json())
        .then(setUsers)
  },[])
    // console.log("Users", users)

  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_API_BASE_URL}/bids`)
  //       .then((response) => response.json())
  //       .then(setBids)
  // },[])
  //       console.log("Bids", bids)

  let sortedList = teams.sort()
  .map((team, index) => <option key={index}>{team.name}</option>);

  function handleNewFreeAgent(newPlayer) {
    const updatedPlayersArray = [...players, newPlayer]
    setPlayers(updatedPlayersArray)
  }

  // let beef = "beef"

  return (
    <div className="App">
      <Header />
        <Switch>
          <Route path="/teams">
            <TeamContainer teams={teams} players={players} />
          </Route>
          <Route exact path="/players">
            <PlayerContainer teams={teams} players={players} setPlayers={setPlayers} sortedList={sortedList} localHandleNewFreeAgent={handleNewFreeAgent} />
          </Route>
          <Route exact path="/players/:id">
            <PlayerCard players={players} sortedList={sortedList} />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
