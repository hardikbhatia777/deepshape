import React from "react";
import "../styles/AboutHeading.css";
import Connect from "../components/Connect"
import Footer from "../components/Footer"

export default function Contact() {
  return (
    <div>
      <div className="about-header-main">
        <div className="about-heading-heading">Contact Us</div>
      </div>
      <Connect/>
      <Footer/>
    </div>
  );
}
