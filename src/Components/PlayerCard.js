import React from 'react';
import BidContainer from '../Containers/BidContainer';

function PlayerCard({ id, name, position, real_mlb_team, team, years, salary_per_year, bids }) {

    // let bidsArray = bids.map((bid) => bid.salary_per_year)
    // console.log(bidsArray)

    // let highestBid = bidsArray.reduce(function(a, b) {
    //                     return Math.max(a, b);
    //                 });
    // console.log(highestBid)

    const testOut = salary_per_year !== 0 ? "new-player-card" : "player-card"
    console.log(testOut)

    return (
        <div className="player-container">
            <div className={testOut}>
                <p>{position}</p>
                <h4>{name}</h4>
                    <p className="real-team">{real_mlb_team}</p>
                    <p>{team}</p>
                    {/* <p>{years} years, ${salary_per_year} million</p> */}
                    <BidContainer player_id={id} team={team} />
            </div>
        </div>
    )
}

export default PlayerCard;