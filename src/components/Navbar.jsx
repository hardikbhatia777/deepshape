import React from "react";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="nav__main">
      <img src={logo} className="nav__logo" alt=""/>
      <div className="nav__links">
        <div className="nav__link">About us</div>
        <div className="nav__link">Approach</div>
        <div className="nav__link">Services</div>
        <div className="nav__link">Contact</div>
      </div>
    </div>
  );
}
