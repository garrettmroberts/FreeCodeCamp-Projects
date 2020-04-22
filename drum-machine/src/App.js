import React, { useState } from 'react';
import Wrapper from './components/Wrapper';
import DrumPad from "./components/DrumPad";
import "./App.css";

function App() {
  function playSound(e) {
    const letter = e.key.toUpperCase();
    const audio = document.getElementById(letter);
    if (audio !== null) {
      audio.currentTime = 0;
      audio.play();

      const display = document.getElementById("display");
      display.innerText = audio.parentElement.id;
      console.log(display)
    };
  };

  window.addEventListener("keydown", playSound);

  return (
    <Wrapper>
      
      <div id="drum-pads">
        <DrumPad file="boom"  keypress="Q" />
        <DrumPad file="clap" keypress="W" />
        <DrumPad file="hihat" keypress="E" />
        <DrumPad file="kick" keypress="A" />
        <DrumPad file="openhat" keypress="S" />
        <DrumPad file="ride" keypress="D" />
        <DrumPad file="snare" keypress="Z" />
        <DrumPad file="tink" keypress="X" />
        <DrumPad file="tom" keypress="C" />
      </div>
      <div id="display-container">
        <h2 id="display"></h2>
      </div>
    </Wrapper>
  );
}

export default App;
