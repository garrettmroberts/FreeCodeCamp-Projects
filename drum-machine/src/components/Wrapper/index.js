import React from 'react';
import './style.css';

// Wrapper centers everything within it
function Wrapper(props) {
  return(
    <div className="wrapper" id="drum-machine" {...props} />
  )
}

export default Wrapper;