import React from "react";
import Logo from "/src/components/ui/logo/logo";
import "./style.css";

function Footer() {
  return (
    <footer className="page-footer">
      <Logo />
      <span className="footer-copyright">Сделано вчера</span>
    </footer>
  );
}

export default Footer;
