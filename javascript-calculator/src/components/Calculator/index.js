import React, { useState } from "react";
import Button from "../Button";
import "./style.css";

const Calculator = () => {
  const [displayState, setDisplayState] = useState("0");
  const [currentNumState, setCurrentNumState] = useState();
  
  const updateState = event => {
    const target = event.target.innerText;
    if (/[0-9.]/.test(target)) {
      // Drops 0 if first int of number
      if (displayState === "0") {
        setDisplayState(target)
      // Otherwise concats to current num
      } else {
        if (target === "." && displayState.charAt(displayState.length - 1) === ".") {
          return;
        }
        setDisplayState(displayState + target);
      }
    } else {
      console.log("operator")
    }
  };

  const clearState = () => {
    setDisplayState("0");
  };

  const processAnswer = () => {

  };

  return(
    <div id="calculator">

      {/* Display of current equation state should go here */}
      <div id="displayContainer">
  <p id="display">{displayState}</p>
      </div>

      {/* All buttons of calculator go here */}
      <div id="buttonsBox">
        <div id="body">
          <div id="left-side">
            <Button id="one" text="1" className="bodyButton" func={updateState} />
            <Button id="two" text="2" className="bodyButton" func={updateState} />
            <Button id="three" text="3" className="bodyButton" func={updateState} />
            <Button id="four" text="4" className="bodyButton" func={updateState} />
            <Button id="five" text="5" className="bodyButton" func={updateState} />
            <Button id="six" text="6" className="bodyButton" func={updateState} />
            <Button id="seven" text="7" className="bodyButton" func={updateState} />
            <Button id="eight" text="8" className="bodyButton" func={updateState} />
            <Button id="nine" text="9" className="bodyButton" func={updateState} />
          </div>
          <div id="right-side">
            <Button id="add" text="+" className="rightSideButton" func={updateState} />
            <Button id="subtract" text="-" className="rightSideButton" func={updateState} />
            <Button id="multiply" text="*" className="rightSideButton" func={updateState} />
            <Button id="divide" text="&#247;" className="rightSideButton" func={updateState} />
          </div>
        </div>
        <div id="bottom-row">
          <Button id="clear" text="CE" className="bottomButton" func={clearState} />
          <Button id="zero" text="0" className="bottomButton" func={updateState} />
          <Button id="decimal" text="." className="bottomButton" func={updateState} />
          <Button id="equals" text="=" className="bottomButton" func={processAnswer} />
        </div>
      </div>
    </div>
  )
};

export default Calculator;