import React from 'react';
import BidContainer from '../Containers/BidContainer';
import catcher from '../exports/catcher.png'
import rp from '../exports/rp.png'
import sp from '../exports/sp.png'
import first from '../exports/first.png'
import outfield from '../exports/outfield.png'
import third from '../exports/third.png'
import shortstop from '../exports/shortstop.png'

function PlayerCard({ id, name, position, real_mlb_team, team, expand, years, salary_per_year, playerBids }) {

    // let bidsArray = bids.map((bid) => bid.salary_per_year)

    // let highestBid = bidsArray.length !== 0 ? bidsArray.reduce(function(a, b) {
    //                     return Math.max(a, b);
    //                 }) : undefined;
    // console.log(highestBid)


    const cardClass = !expand ? "player-card" : "expanded-player-card"
    function renderTopline() {
    if (position === "C") {
        return (
            <p className="top-position-line">topline</p>
        )
    } else if (position === "SP") {
        return (
            <p className="top-position-line">topline</p>
        )
    } else if (position === "RP") {
        return (
            <p className="top-position-line">topline</p>
        )
    } else if (position === "1B") {
        return (
            <p className="top-position-line">topline</p>
        )
    } else if (position === "2B" || position === "3B") {
        return (
            <p className="top-position-line">topline</p>
        )
    } else if (position === "SS") {
        return (
            <p className="top-position-line">topline</p>
        )
    } else if (position === "OF") {
        return (
            <img src={outfield} alt="outfield-icon" className="icon-img"></img>
        )
    }
}


    function renderIcon() {
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
            <div className={cardClass}>
                {/* {renderTopline()} */}
                    <p className="card-name">{name}</p>
                <br></br>
                    {renderIcon()}
                    <p className="position-line">{position}</p>
                <p className="real-team">{real_mlb_team}</p>
                    <BidContainer player_id={id} team={team} />
            </div>
        </div>
    )
}

export default PlayerCard;