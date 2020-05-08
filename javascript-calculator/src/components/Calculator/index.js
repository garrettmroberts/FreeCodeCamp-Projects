import React, { useState } from "react";
import Button from "../Button";
import "./style.css";

const Calculator = () => {
  const [displayState, setDisplayState] = useState("0");
  const [finishedState, setFinishedState] = useState(false);
  
  const updateState = event => {
    const target = event.target.innerText;
    // Takes care of all numbers + decimal
    if (/[0-9.]/.test(target)) {
      if (!finishedState) {
        // Drops 0 if first int of number
        if (displayState === "0") {
          // Otherwise concats to current num
          setDisplayState(target)
        } else {
          // Prevents two decimals from appearing in the same integer
          const split = displayState.split(/[+*/-]/);
          if (target === "." && split[split.length - 1].includes(".")) {
            return;
          };
          setDisplayState(displayState + target);
        }
      }
    // Processes operators
    } else {
      setFinishedState(false);
      switch (event.target.id) {
        case "add":
          if (!/[/+*]/.test(displayState[displayState.length -1])) {
            setDisplayState(displayState + target);
          }
          break;
        case "subtract":
          if (displayState === "0") {
            setDisplayState("-");
          }
          let split = displayState
            .toString()
            .split(/([/*+-])/)
            .filter(el => {
              return el !== "";
            });
          // Doesn't allow more than two operators beside each other
          if (/[/*+ -]{2}/.test(split.slice(split.length - 2).join(""))) {
            return;
          } else {
            setDisplayState(displayState + target);
          }
          break;
        case "divide":
          if (!/[/+*]/.test(displayState[displayState.length - 1])) {
            setDisplayState(displayState + "/");
          }
          break;
        case "multiply":
          if (!/[/+*]/.test(displayState[displayState.length - 1])) {
            setDisplayState(displayState + target);
          }
          break;
        default:
          break;
      };
    };
  };

  const clearState = () => {
    setDisplayState("0");
    setFinishedState(false);
  };

  const processAnswer = () => {
    if (!displayState.includes("-")) {
      setDisplayState(eval(displayState));
    } else {
      let split = displayState
        .split(/(-)/)
        .filter(el => {
          return el !== "";
        });
      let indices = [], i;
      for(i = 0; i < split.length; i++) {
        if(split[i] === "-") {
          indices.push(i);
        };
      };
      indices.forEach((index) => {
        if (split[index] === split[index + 1]) {
          let parentheses = "(" + split[index + 1] + split[index + 2] + ")";
          split.splice(index + 1, index + 2, parentheses);
          setDisplayState(split.join(""));
        };
        setDisplayState(eval(split.join("")));
      });
    }
    setFinishedState(true);
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