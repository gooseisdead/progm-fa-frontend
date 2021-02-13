import React, { useState, useEffect } from 'react';
import Bid from '../Components/Bid';
import NewBidForm from '../Forms/NewBidForm';

function BidContainer({ player_id, team, highestBid }) {

    const [bids, setBids] = useState([])
    // const [playerSigned, setPlayerSigned] = useState(false)

    useEffect(() => {
      fetch(`${process.env.REACT_APP_API_BASE_URL}/bids`)
          .then((response) => response.json())
          .then(setBids)
    },[])
        // console.log("Bids", bids)

    // console.log(highestBid)

    function handleNewBid(newBid) {
        const updatedBidsArray = [...bids, newBid];
        setBids(updatedBidsArray);
    }

    // let bidsArray = bids.map((bid) => bid.player.id)
    // console.log(bidsArray)
    // console.log(bids)

    bids.sort((b, a) => {return a.salary_per_year- b.salary_per_year})

    const renderBids = bids.map((bid) => {
        if (bid.player.id === player_id ) {
        return (
            <div className="bid">
                <Bid 
                    key={bid.id}
                    years={bid.years}
                    salary_per_year={bid.salary_per_year}
                    player={bid.player}
                    created={bid.created_at}
                    username={bid.user.username}
                    team={bid.user.team.logo}
                />
            </div>
            )
        } else {
            return null
        }
    })

    return (
        <div>
        <div className="bid-container">
            <b className="bid-scroll">Scroll Bid History</b>
            {renderBids}
        </div>
        <div className="bid-form">
            <NewBidForm player_id={player_id}
                        team={team}
                        localHandleNewBid={handleNewBid}
            />
        </div>
        </div>
    )
}

export default BidContainer;