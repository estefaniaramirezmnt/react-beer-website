import React from "react";
import logo from "../img/logo2_01.png";
import "../App.css"

function Header() {
  return (
    <header>
      <img src={logo} alt="Beer logo" className="beer-logo" />
    </header>
  );
}

export default Header;
