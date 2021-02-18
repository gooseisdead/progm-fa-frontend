import React from 'react';

function MinorLeagueManager({ id, onDelete, on40Man }) {
    
    function handleDeleteClick() {
        onDelete(id);
        window.location.reload();
    }

    function handle40ManClick() {
        on40Man(id);
        window.location.reload();
    }

    return (
            <div className="roster-buttons">
                <button onClick={handle40ManClick} className="add-to">Add to 40-Man Roster</button>
                <button onClick={handleDeleteClick} className="minor-cut">Minor League Cut</button>
            </div>
    )
}

export default MinorLeagueManager;