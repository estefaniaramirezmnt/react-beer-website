import React from "react";
import logo from "../img/logo2_01.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="Beer logo" className="beer-logo" />
    </header>
  );
}

export default Header;
