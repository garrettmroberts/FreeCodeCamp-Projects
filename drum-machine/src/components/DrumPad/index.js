import React from "react";
import "./style.css";

function DrumPad({ file, keypress }) {
  return(
    <div className="drum-pad" id={file} >
      <kbd>{keypress}</kbd>
      <audio
        className="clip"
        id={keypress}
        src={`/sounds/${file}.wav`}
      ></audio>
    </div>
  )
};

export default DrumPad;