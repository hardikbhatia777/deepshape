import React from "react";
import "../styles/Footer.css";
import deepshape from "../assets/logo.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";

export default function Footer() {
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
          <img className="footer-box-link" alt='' src={linkedin} />
          <img className="footer-box-link" alt='' src={twitter} />
          <img className="footer-box-link" alt='' src={instagram} />
        </div>
        <div className="footer-box-item">All rights reserved. © Designaigence innovation, Pvt Ltd.2023</div>
        <div className="footer-box-item">Privacy Policy | Terms of Service</div>
      </div>
    </div>
  );
}
