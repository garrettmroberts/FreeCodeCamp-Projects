import React, { useState, useEffect } from 'react';
import "./App.css";

function App() {
  const [timerState, setTimerState] = useState({
    break: 5,
    session: 25,
    timeLeft: 25 * 60,
    isRunning: false
  });

  // Runs timer if isRunning === true
  useEffect(() => {
    if (timerState.isRunning) {
      const timer = setInterval(() => {
        setTimerState({ ...timerState, timeLeft: timerState.timeLeft - 1 });
      }, 1000);
      return () => clearInterval(timer);
    }
  });

  // Increments and decrements session and break counts
  const handleChange = event => {
    const split = event.target.id.split("-");
    if (split[1] === "increment" && parseInt(event.target.parentElement.previousSibling.children[1].innerHTML) + 1 <= 60) {
      split[0] === "break"
        ? setTimerState({ ...timerState, break: timerState.break + 1 })
        : setTimerState({ ...timerState, session: timerState.session + 1 });
    } else if (split[1] === "decrement" && parseInt(event.target.parentElement.previousSibling.children[1].innerHTML) - 1 > 0) {
      split[0] === "session"
        ? setTimerState({ ...timerState, session: timerState.session - 1 })
        : setTimerState({ ...timerState, break: timerState.break - 1 })
    };
  };

  // Resets app state
  const handleReset = () => {
    setTimerState({
      break: 5,
      session: 25,
      timeLeft: "25:00",
      isRunning: false
    });
  };

  // Starts and stops timer
  const handleIsRunningChange = () => {
    timerState.isRunning ? setTimerState({ ...timerState, isRunning: false }) : setTimerState({ ...timerState, isRunning: true })
  }

  return (
    <div id="wrapper">
      <div id="pomodoro">
        <div id="setTimerSection">
          <div>
            <h4 id="break-label">Break</h4>
            <h2 id="break-length">{timerState.break}</h2>
          </div>
          <div className="incAndDec">
            <button className="incDecButtons" id="break-increment" onClick={handleChange}>Inc</button>
            <button className="incDecButtons" id="break-decrement" onClick={handleChange}>Dec</button>
          </div>
          <div>
            <h4 className="incDecButtons" id="session-label">Sesh</h4>
            <h2 className="incDecButtons" id="session-length">{timerState.session}</h2>
          </div>
          <div className="incAndDec">
            <button id="session-increment" onClick={handleChange}>Inc</button>
            <button id="session-decrement" onClick={handleChange}>Dec</button>
          </div>
        </div>
        <div id="timerSection">
          <h4 id="timer-label">Session</h4>
          <h2 id="time-left">{timerState.timeLeft}</h2>
          <div id="buttonsSection">
            <button id="start_stop" onClick={handleIsRunningChange}>Start/Stop</button>
            <button id="reset" onClick={handleReset}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
