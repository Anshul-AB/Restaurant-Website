import React from "react";
import { Link } from "react-router-dom";

const Button = ({ buttonLabel, linkTo }) => {
  return (
    <Link to={linkTo}>
      <button className="mainBtn">{buttonLabel}</button>
    </Link>
  );
};

export default Button;
