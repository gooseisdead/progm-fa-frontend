import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PlayerContainer from '../Containers/PlayerContainer';
import TeamContainer from '../Containers/TeamContainer';
import Header from '../Components/Header';
import TeamPage from '../Components/TeamPage';
import Home from '../Pages/Home';
import OfficialRules from '../Pages/OfficialRules';
import Results from '../Pages/Results';

function App() {

    const [users, setUsers] = useState([])
    const [teams, setTeams] = useState([])
    const [players, setPlayers] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [positionTerm, setPositionTerm] = useState("C")

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
    let sortedList = teams.sort()
      .map((team, index) => <option key={index}>{team.name}</option>);

    function handleNewFreeAgent(newPlayer) {
      // console.log(newPlayer.team)
      const updatedPlayersArray = [...players, newPlayer]
      setPlayers(updatedPlayersArray)
    }

    function handleAddPlayer(newPlayer) {
      const updatedPlayersArray = [...players, newPlayer]
      setPlayers(updatedPlayersArray)
    }

    const playersToDisplay = players.filter((player) =>
        player.position.toLowerCase().includes(searchTerm.toLowerCase())
    );

    function handleDeleteClick(id) {
      fetch(`http://localhost:3000/players/${id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then(() => {
          const updatedPlayers = players.filter((player) => player.id !== id);
          setPlayers(updatedPlayers);
        });
    }

    function fortyMan(updatedPlayer) {
      const updatedPlayers = players.map((player) =>
        player.id === updatedPlayer.id ? updatedPlayer : player
      );
      setPlayers(updatedPlayers);
      setPlayers(...players)
    }

    function handle40Man(id) {
        fetch(`http://localhost:3000/players/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            minor_league_status: false,
          })
        })
          .then((r) => r.json())
          .then(fortyMan)
      }

      function handleDemotion(id) {
        fetch(`http://localhost:3000/players/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            minor_league_status: true,
          })
        })
          .then((r) => r.json())
          .then(fortyMan)
      }

      function handleNonTender(id) {
        fetch(`http://localhost:3000/players/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            team_id: 31
          })
        })
          .then((r) => r.json())
          .then(fortyMan)
      }

    // const positionsToDisplay = players.filter((player) =>
    //     player.position.toLowerCase().includes(positionTerm.toLowerCase())
    // );

    return (
      <div className="App">
        <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/teams">
              <TeamContainer teams={teams}
                            players={players}
              />
            </Route>
            <Route exact path="/players">
              <PlayerContainer teams={teams} 
                              players={playersToDisplay}
                              setPlayers={setPlayers}
                              sortedList={sortedList}
                              localHandleNewFreeAgent={handleNewFreeAgent}
                              searchTerm={searchTerm}
                              onChangeSearch={setSearchTerm}
                    />
            </Route>
            <Route exact path="/teams/:id">
              <TeamPage sortedList={sortedList}
                        localHandleAddPlayer={handleAddPlayer}
                        onDelete={handleDeleteClick}
                        on40Man={handle40Man}
                        onDemotion={handleDemotion}
                        onNonTender={handleNonTender}
                        />
            </Route>
            <Route exact path="/official_rules">
              <OfficialRules />
            </Route>
            <Route exact path="/results">
              <Results />
            </Route>
          </Switch>
      </div>
    );
}

export default App;
