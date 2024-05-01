import React from "react";
import { Link } from "react-router-dom";

const Button = ({ buttonLabel, linkTo, handleClick, disabled, ariaLabel }) => {
  return (
    <Link to={linkTo}>
      <button
        className="mainBtn"
        onClick={handleClick}
        disabled={disabled}
        aria-label={ariaLabel}
        aria-disabled={disabled ? "true" : "false"}
      >
        {buttonLabel}
      </button>
    </Link>
  );
};

export default Button;
