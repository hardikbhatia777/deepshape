import React from "react";
import "../styles/Cover.css";
import scrollDown from "../assets/scroll-down.png";
import laptops from "../assets/laptops.png";
import CustomButton from "./GenericButton";
import { Link } from "react-router-dom";

export default function Cover() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="cover-main">
        <div className="cover-heading">Design Faster, Better & Smarter</div>
        <div className="cover-tagline">
          Designed to generate 3D designs for fashion brands, keeping their
          brand identity and values in mind.
        </div>
        <div>
          <img className="scroll-down" src={scrollDown} alt="" />
        </div>
        <div>
          <img className="laptops" src={laptops} alt="" />
        </div>
        <div className="cover-button">
          <Link to="/contact">
            <CustomButton onClick={scrollToTop}>Launching Soon</CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
