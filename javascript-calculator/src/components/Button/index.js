import React from "react";
import "./style.css";

const Button = ({id, text, className, func}) => {
  return(
  <button id={id} className={className} onClick={func} >{text}</button>
  )
};

export default Button;