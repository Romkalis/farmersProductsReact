import React from "react";
import Button from "/src/components/ui/button/button";
import "./style.css";

function Nav() {
  return (
    <nav className="header-nav">
      <Button buttonClass="nav__button" text="Купить" />
    </nav>
  );
}

export default Nav;
