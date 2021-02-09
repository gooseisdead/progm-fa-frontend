import React from 'react';
import BidContainer from '../Containers/BidContainer';

function PlayerCard({ id, name, position, real_mlb_team, team, years, salary_per_year, bids }) {

    let activeBidArray = []
    let bidsArray = bids.map((bid) => bid.salary_per_year)
    console.log(bidsArray)


    // let highestBid = activeBidArray.reduce(function(a, b) {
    //                 return Math.max(a, b);
    // });

    

    return (
        <div className="player-container">
            <div className="player-card">
                <h3>
                    {name}
                    <br></br>
                    {position}
                </h3>
                    <p>{real_mlb_team}</p>
                    <p>{team}</p>
                    <p>{years} years, ${salary_per_year} million</p>
                    <BidContainer player_id={id} team={team} />
            </div>
        </div>
    )
}

export default PlayerCard;