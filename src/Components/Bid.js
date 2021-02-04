import React from 'react';

function Bid({ years, salary_per_year }) {
    return (
        <p>{years} year(s) ${salary_per_year} million</p>
    )
}

export default Bid;