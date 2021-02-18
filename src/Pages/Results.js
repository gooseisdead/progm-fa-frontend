import React from 'react';

function Results() {
    return(
        <div className="result-container">
            <h1 className="results-header">Results</h1>
            <div className="results">
                <h3 className="old-way">The Old Way</h3>
                <p className="average-time"><b>The average time of each transaction for the user was</b></p>
                <h3 className="time-old">1min :25sec</h3>
                <p className="average-time"><b>The average time of each transaction for the admin was</b></p>
                <h3 className="time-old">2min :40sec</h3>
                <br></br>
                <h3 className="with-app">...with the App</h3>
                <p className="average-time"><b>The average time of each transaction for the user was</b></p>
                <h3 className="time-old"> :12sec</h3>
                <p className="average-time"><b>The average time of each transaction for the admin was</b></p>
                <h3 className="time-old"> :28sec</h3>
                <br></br>
                <p className="average-time"><b>Increase in effciency...</b></p>
                <h3 className="with-app">~80%</h3>
                <br></br>
                <p className="average-time"><b>If this was someone's full-time job...</b></p>
                <h3 className="old-way">40-hour work week --- 8 hours.</h3>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}

export default Results;