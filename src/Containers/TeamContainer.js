import React, { useState } from 'react';
import TeamCard from '../Components/TeamCard';

function TeamContainer({ teams }) {

    const renderTeams = teams.map((team) => {

                    return (
                        <TeamCard 
                            key={team.id}
                            id={team.user.id}
                            username={team.user.username}
                            team={team.name}
                        />
                    )
                })

    return(
        <div className="team-container">
            {renderTeams}
        </div>
    )
}

export default TeamContainer;