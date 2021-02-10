import React, { useState, useEffect } from 'react';
import Bid from '../Components/Bid';
import NewBidForm from '../Forms/NewBidForm';

function BidContainer({ player_id, team }) {

    const [bids, setBids] = useState([])

    useEffect(() => {
      fetch(`${process.env.REACT_APP_API_BASE_URL}/bids`)
          .then((response) => response.json())
          .then(setBids)
    },[])
        // console.log("Bids", bids)

    function handleNewBid(newBid) {
        const updatedBidsArray = [...bids, newBid];
        setBids(updatedBidsArray);
    }

    let bidsArray = bids.map((bid) => bid.player)

    console.log(bidsArray)

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
                />
            </div>
            )
        } else {
            return null
        }
    })

    return (
        <div className="bid-container">
            <NewBidForm player_id={player_id}
                        team={team}
                        localHandleNewBid={handleNewBid}
            />
            <h4>Bid History</h4>
            {renderBids}
        </div>
    )
}

export default BidContainer;