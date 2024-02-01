import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="nav__main">
      <Link to="/" className="nav__logo-link">
        <img src={logo} className="nav__logo" alt=""/>
      </Link>
      <div className="nav__links">
        <Link to="/about" className="nav__link">About us</Link>
        <Link to="/approach" className="nav__link">Approach</Link>
        <Link to="/services" className="nav__link">Services</Link>
        <Link to="/contact" className="nav__link">Contact</Link>
      </div>
    </div>
  );
}
