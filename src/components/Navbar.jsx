import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="nav__main">
      <NavLink exact to="/" className="nav__logo-link" activeClassName="active">
        <img src={logo} className="nav__logo" alt=""/>
      </NavLink>
      <div className="nav__links">
        <NavLink to="/about" className="nav__link" activeClassName="active">About us</NavLink>
        <NavLink to="/approach" className="nav__link" activeClassName="active">Approach</NavLink>
        <NavLink to="/services" className="nav__link" activeClassName="active">Services</NavLink>
        <NavLink to="/contact" className="nav__link" activeClassName="active">Contact</NavLink>
      </div>
    </div>
  );
}
