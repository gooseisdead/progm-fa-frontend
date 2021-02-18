import React from 'react';

function Buyout({ id, onNonTender }) {

    function handleNonTenderClick() {
        onNonTender(id);
        window.location.reload();
    }

    return (
            <div className="roster-buttons">
                <button onClick={handleNonTenderClick} className="tender-click">Buyout</button>
                
            </div>
    )
}

export default Buyout;