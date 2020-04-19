import React from "react";

function Col(props) {
  return(
    <div className={`col-${props.breakpoint}-${props.size}`}>
      {props.children}
    </div>
  )
};

export default Col;