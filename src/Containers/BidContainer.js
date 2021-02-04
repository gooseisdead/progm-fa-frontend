import React, { useState, useEffect } from 'react';
import Bid from '../Components/Bid';

function BidContainer({ player_id}) {

    const [bids, setBids] = useState([])

    useEffect(() => {
      fetch(`${process.env.REACT_APP_API_BASE_URL}/bids`)
          .then((response) => response.json())
          .then(setBids)
    },[])
        console.log("Bids", bids)

    bids.sort((b, a) => {return a.salary_per_year- b.salary_per_year})

    const renderBids = bids.map((bid) => {
        if (bid.player.id === player_id) {
        return ( <Bid 
                    years={bid.years}
                    salary_per_year={bid.salary_per_year}
                    player={bid.player}
                /> )
        }})

    return (
        <div className="bid-container">
            {renderBids}
        </div>
    )
}

export default BidContainer;