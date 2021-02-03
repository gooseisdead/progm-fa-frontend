import React from 'react';
import UserCard from '../Components/UserCard';

function UserContainer({ users, teams }) {

    const renderUsers = teams.map((team) => {
                    return (
                        <UserCard key={team.id} username={team.user.username} users={users} team={team.name} />
                    )
                })

    return(
        <div className="user-container">
            {renderUsers}
        </div>
    )
}

export default UserContainer;