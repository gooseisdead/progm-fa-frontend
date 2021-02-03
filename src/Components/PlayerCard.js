import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


function PlayerCard({ id, name, position, real_mlb_team, team, years, salary_per_year}) {

    const [player, setPlayer] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const params = useParams();
    console.log(params)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/players/${id}`)
            .then((response) => response.json())
            .then((player) => {
                setPlayer(player);
                setIsLoaded(true);
            })
        }, [id], []);

    return (
        <div className="card-container">
            <div className="player-card">
                <h3><Link to={`/players/${id}`} className="replay-link">{name} - {position}</Link></h3>
                <p>{real_mlb_team}</p>
                <p>{team}</p>
                <p>{years} years, ${salary_per_year} million</p>
            </div>
        </div>
    )
}

export default PlayerCard;