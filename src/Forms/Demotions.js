import React from 'react';

function Demotions({ id, onDemotion }) {

    function handleDemotionClick() {
        onDemotion(id);
        window.location.reload();
    }

    return (
            <div className="roster-buttons">
                <button onClick={handleDemotionClick} className="minors-down">Send to Minors</button>
            </div>
    )
}

export default Demotions;