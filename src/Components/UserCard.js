import React from 'react';

function UserCard({ username, team, players, users }) {

    return (
        <div className="user-card">
            <h3>{username}</h3>
            <p>{team}</p>
        </div>
    )
}

export default UserCard;