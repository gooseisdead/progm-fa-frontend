import React from 'react';
import banner from '../exports/banner.png'

function Home() {
    return (
        <div className="home-container">
            <h1 className="home-header">Pro GM Dynasty League Baseball</h1>
            <img className="home-banner" src={banner} alt="winners banner"></img>
        </div>
        )

}

export default Home;