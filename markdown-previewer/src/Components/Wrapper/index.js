import React from "react";

function Wrapper(props) {
  return <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />
};

export default Wrapper;