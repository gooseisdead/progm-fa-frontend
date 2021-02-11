// import React, { useState, useEffect } from 'react';

// function Timer() {

//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds(seconds => seconds + 1);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         {seconds} seconds have elapsed since mounting.
//       </header>
//     </div>
//   );




    // const [counter, setCounter] = React.useState(60);
  
    // React.useEffect(() => {
    //   const timer =
    //     counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    //   return () => clearInterval(timer);
    // }, [counter]);
  
    // return (
    //   <div className="App">
    //     <div>Countdown: {counter}</div>
    //   </div>
    // );
// }

// export default Timer;