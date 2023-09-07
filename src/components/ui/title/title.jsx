import React from "react";
import "./style.css";

export const TitleSizes = {
  BIG: "big",
  SMALL: "small",
  DEFAULT: ""
};

function Title({ text, size }) {
  return <h1 className={`title ${size ? `title__${size}` : ""}`}>{text}</h1>;
}

export default Title;
