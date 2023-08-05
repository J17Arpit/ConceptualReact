// Application of SetInterval

import React from "react";

const Interval = () => {
  const [count, setCount] = React.useState(0);
  const idRef = React.useRef();

  const handlePlay = () => {
    console.log("Play clicked");
    idRef.current = setInterval(() => setCount(c=>c+1), 1000);
  };

  React.useEffect(() => {
  //   handlePlay();
    return () => clearInterval(idRef.current);
  }, []);


  const handlePause= () => {
    console.log("Pause clicked");
    clearInterval(idRef.current)
  }

  const handleReset = () => {
    console.log("Reset clicked");
    clearInterval(idRef.current);
    setCount(0);
    idRef.current = setInterval(() => setCount(c=>c+1), 1000);
  }
  
  return (
    <>
    <h1>{count}</h1>
    <div>
    <button onClick={handlePlay}>PLAY</button>
    <button onClick={handlePause}>PAUSE</button>
    <button onClick={handleReset}>RESET</button>
    </div>
    </>
  );
};

export default Interval;