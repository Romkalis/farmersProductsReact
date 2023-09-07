import React from "react";
import "./style.css";

function Button({ buttonClass, text }) {
  return (
    <button
      type="button"
      className={`button ${buttonClass ? `${buttonClass}` : ""}`}
    >
      {text}
    </button>
  );
}

export default Button;
