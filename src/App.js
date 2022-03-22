import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div className="container">
      <div className="items">
        <h1>Stop Watch</h1>
        <p>
          <span className="digits">
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
          </span>
          <span className="digits">
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
          </span>
          <span className="digits mili-sec">
            {("0" + ((time / 10) % 100)).slice(-2)}
          </span>
        </p>
        <button className="start" onClick={handleStart}>
          Start
        </button>
        <button className="stop" onClick={handlePauseResume}>
          Stop
        </button>
        <button className="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
