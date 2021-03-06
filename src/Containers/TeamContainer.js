import React from 'react';
import TeamCard from '../Components/TeamCard';

function TeamContainer({ teams, players }) {

    const renderTeams = teams.map((team) => {
        return (
            <TeamCard 
                key={team.id}
                id={team.user.id}
                username={team.user.username}
                team={team.name}
                players={players}
                logo={team.logo}
            />
        )
    })

    return(
        <>
        <h1 className="team-header">Pro GM Teams</h1>
            <br></br>
        <div className="team-container">
            {renderTeams}
        </div>
        </>
    )
}

export default TeamContainer;