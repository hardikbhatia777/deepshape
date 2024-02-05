import React from "react";
import CustomButton from "./GenericButton";
import "../styles/ServicesHome.css";
import diagram from "../assets/services-right.png";
import { Link } from "react-router-dom";

export default function ServicesHome() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="services-home-main">
      <div className="services-home-left">
        <div className="services-home-heading">
          SERVICES
          <div className="services-underline"></div>
        </div>
        <p className="services-main-content">
          AI in Fashion Design market integrates advanced technologies to
          revolutionize the fashion industry. AI applications optimize design
          processes, enhance supply chain efficiency, and provide personalized
          customer experiences. From virtual try-on solutions to generative
          design algorithms, AI fosters innovation and creativity. Despite
          initial implementation costs and data privacy concerns, the market
          offers substantial opportunities for global expansion and
          collaboration.
        </p>
        <div className="button">
          <Link to="/services">
            <CustomButton onClick={scrollToTop}>Know more →</CustomButton>
          </Link>
        </div>
      </div>
      <div className="services-home-right">
        <img className="services-diagram" alt="" src={diagram} />
      </div>
    </div>
  );
}
