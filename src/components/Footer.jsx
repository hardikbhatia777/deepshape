import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import "../styles/Navbar.css";
import deepshape from "../assets/logo.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  };
  return (
    <div className="footer-main">
      <img className="footer-logo" src={deepshape} alt="" />
      <div className="footer-nav">
        <div className="footer-nav-item">About Us</div>
        <div className="footer-nav-item">Approach</div>
        <div className="footer-nav-item">Services</div>
        <div className="footer-nav-item">Contact</div>
      </div>
      <div className="footer-mail">contact@deepshape.tech</div>
      <div className="footer-box">
        <div className="footer-box-item">
          <img className="footer-box-link" alt="" src={linkedin} />
          <img className="footer-box-link" alt="" src={twitter} />
          <img className="footer-box-link" alt="" src={instagram} />
        </div>
        <div className="footer-box-item">
          All rights reserved. © Designaigence innovation, Pvt Ltd.2023
        </div>
        <div className="footer-box-item-big">
          <Link className="nav__link" to="/policy" activeClassName="active" onClick={scrollToTop}>
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link className="nav__link" to="/terms" activeClassName="active" onClick={scrollToTop}>
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
}
