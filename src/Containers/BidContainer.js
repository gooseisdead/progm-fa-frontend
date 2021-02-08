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
        console.log("Bids", bids)

    // function handleNewJoin(newBid) { 
    
    //     const newUserBidObj = {
    //         bid_id: newBid.id,
    //         user_id: 1
    //     };
    //         fetch("http://localhost:3000/user_bids", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(newUserBidObj)
    //             }
    //             .then(response => response.json())
    //             .then(newUserBid => console.log(newUserBid))
    //         )
    // }

//     function getNewBids(id) {       
//         fetch(`http://localhost:3000/bids/${id}`)
//                .then(r => r.json())
//                .then(setBids)
//    }

    function handleNewBid(newBid) {
        const updatedBidsArray = [...bids, newBid];
        setBids(updatedBidsArray);
        // handleNewJoin(newBid.id);
       
    }

    bids.sort((b, a) => {return a.salary_per_year- b.salary_per_year})

    const renderBids = bids.map((bid) => {
        if (bid.player.id === player_id ) {
        return (
            <div>
                <Bid 
                    key={bid.id}
                    years={bid.years}
                    salary_per_year={bid.salary_per_year}
                    player={bid.player}
                    created={bid.created_at}
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
            <h3>Bid History</h3>
            {renderBids}
        </div>
    )
}

export default BidContainer;