import React from 'react';
import BidContainer from '../Containers/BidContainer';
import catcher from '../exports/catcher.png'
import rp from '../exports/rp.png'
import sp from '../exports/sp.png'
import first from '../exports/first.png'
import outfield from '../exports/outfield.png'
import third from '../exports/third.png'
import shortstop from '../exports/shortstop.png'

function PlayerCard({ id, name, position, real_mlb_team, team, years, salary_per_year, bids }) {

    // let bidsArray = bids.map((bid) => bid.salary_per_year)
    // console.log(bidsArray)

    // let highestBid = bidsArray.reduce(function(a, b) {
    //                     return Math.max(a, b);
    //                 });
    // console.log(highestBid)


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
        } else if (position === "1B") {
            return (
                <img src={first} alt="first-baseman-icon" className="icon-img"></img>
            )
        } else if (position === "2B" || position === "3B") {
            return (
                <img src={third} alt="third-baseman-icon" className="icon-img"></img>
            )
        } else if (position === "SS") {
            return (
                <img src={shortstop} alt="shortstop-icon" className="icon-img"></img>
            )
        } else if (position === "OF") {
            return (
                <img src={outfield} alt="outfield-icon" className="icon-img"></img>
            )
        }
    }

    return (
        <div className="player-container">
            <div className="player-card">
                <p>{position}</p>
                    <p className="card-name">{name}</p>
                <br></br>
                    {renderIcon()}
                <p className="real-team">{real_mlb_team}</p>
                    <BidContainer player_id={id} team={team} />
            </div>
        </div>
    )
}

export default PlayerCard;