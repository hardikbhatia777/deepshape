import React from "react";
import backgroundImage from "../assets/chips-background.png";
import "../styles/AboutUs.css";

export default function AboutUs() {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="about-main" style={divStyle}>
      <div className="overlay"></div>
      <div className="aboutus-content">
      <div className="services-home-heading">
        SERVICES
        <div className="services-underline"></div>
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
        </div>
      </div>
    </div>
  );
}
