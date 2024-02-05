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
      behavior: "smooth",
    });
  };

  const openGmail = () => {
    const recipientEmail = "contact@deepshape.tech";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}`;
    window.open(gmailUrl);
  };

  return (
    <div className="footer-main">
      <Link onClick={scrollToTop} to="/">
        <img className="footer-logo" src={deepshape} alt="" />
      </Link>
      <div className="footer-nav">
        <Link onClick={scrollToTop} to="/about" className="footer-nav-item">
          About Us
        </Link>
        <Link onClick={scrollToTop} to="/approach" className="footer-nav-item">
          Approach
        </Link>
        <Link onClick={scrollToTop} to="/services" className="footer-nav-item">
          Services
        </Link>
        <Link onClick={scrollToTop} to="/contact" className="footer-nav-item">
          Contact
        </Link>
      </div>
      <div className="footer-mail" onClick={openGmail}>
        contact@deepshape.tech
      </div>
      <div className="footer-box">
        <div className="footer-box-item">
          <a href="https://www.linkedin.com/company/deepshape/">
            <img className="footer-box-link" alt="" src={linkedin} />
          </a>
          <a href="https://twitter.com/DeepShapeAI">
            <img className="footer-box-link" alt="" src={twitter} />
          </a>
          <a href="https://www.instagram.com/deepshape.tech/">
            <img className="footer-box-link" alt="" src={instagram} />
          </a>
        </div>
        <div className="footer-box-item">
          All rights reserved. © Designaigence innovation, Pvt Ltd.2023
        </div>
        <div className="footer-box-item-big">
          <Link
            className="nav__link"
            to="/policy"
            activeClassName="active"
            onClick={scrollToTop}
          >
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link
            className="nav__link"
            to="/terms"
            activeClassName="active"
            onClick={scrollToTop}
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
}
