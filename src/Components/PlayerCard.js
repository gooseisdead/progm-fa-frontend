import React from 'react';
import BidContainer from '../Containers/BidContainer';
import catcher from '../exports/catcher.png'
import rp from '../exports/rp.png'
import sp from '../exports/sp.png'
import infield from '../exports/infield.png'
import outfield from '../exports/outfield.png'

function PlayerCard({ id, name, position, real_mlb_team, team, years, salary_per_year, bids }) {

    // let bidsArray = bids.map((bid) => bid.salary_per_year)
    // console.log(bidsArray)

    // let highestBid = bidsArray.reduce(function(a, b) {
    //                     return Math.max(a, b);
    //                 });
    // console.log(highestBid)

    const testOut = salary_per_year !== 0 ? "new-player-card" : "player-card"
    console.log(testOut)

    const renderIcon = () => {
        if (position === "C") {
            return (
                <img src={catcher} alt="catcher-icon" className="icon-img"></img>
            )
        } else if (position === "SP") {
            return (
                <img src={sp} alt="pitcher-icon" className="icon-img"></img>
            )
        } else if (position === "RP") {
            return (
                <img src={rp} alt="pitcher-icon" className="icon-img"></img>
            )
        } else if (position === "1B" || position === "2B" || position === "3B" || position === "SS") {
            return (
                <img src={infield} alt="pitcher-icon" className="icon-img"></img>
            )
        } else {
            return (
                <img src={outfield} alt="pitcher-icon" className="icon-img"></img>
            )
        }
    }

    return (
        <div className="player-container">
            <div className={testOut}>
                <p>{position}</p>
                <b>{name}</b>
                <br></br>
                {renderIcon()}
                {/* <img src={catcher} alt="catcher-icon"></img> */}
                    <p className="real-team">{real_mlb_team}</p>
                    {/* <p>{team}</p> */}
                    {/* <p>{years} years, ${salary_per_year} million</p> */}
                    <BidContainer player_id={id} team={team} />
            </div>
        </div>
    )
}

export default PlayerCard;