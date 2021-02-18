import React from 'react';

function NonTender({ id, onNonTender }) {

    function handleNonTenderClick() {
        onNonTender(id);
        window.location.reload();
    }

    return (
            <div className="roster-buttons">
                <button onClick={handleNonTenderClick} className="tender-click">Non-Tender</button>
                
            </div>
    )
}

export default NonTender;