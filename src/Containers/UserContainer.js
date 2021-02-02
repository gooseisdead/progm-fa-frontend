import React from 'react';
import UserCard from '../Components/UserCard';

function UserContainer({ users, teams }) {

    const teamNames = teams.map((team) => team.name)
    console.log(teamNames)
    const renderUsers = users.map((user) => {
                   return(
                    <UserCard username={user.username} users={users} />
                    )
     })

    return(
        <div className="user-container">
            {renderUsers}
        </div>
    )
}

export default UserContainer;