import React from "react";
import { Link } from "react-router-dom";

const Button = ({ buttonLabel, linkTo, handleClick }) => {
  return (
    <Link to={linkTo}>
      <button className="mainBtn" onClick={handleClick}>{buttonLabel}</button>
    </Link>
  );
};

export default Button;
