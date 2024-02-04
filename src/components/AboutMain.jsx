import React from "react";
import "../styles/AboutHeading.css";
import one from "../assets/01.png";
import two from "../assets/02.png";
import three from "../assets/03.png";
import pic1 from "../assets/about-one.png";
import pic2 from "../assets/about-two.png";
import pic3 from "../assets/about-three.png";

export default function AboutHeading() {
  return (
    <div>
      <div className="about-header-main">
        <div className="about-heading-heading">Our Services</div>
        <div className="about-heading-content">
          DeepShape is an AI (Artificial Intelligence) powered platform that
          help fashion brands generate 3D design based on emerging trends and
          consumer preferences
        </div>
      </div>
      <div className="about-content-main">
        <div className="left">
          <img className="digit" src={one} alt="" />
          <div className="about-content-heading">
            AI fashion Designer
          </div>
          <div className="underline-1"></div>
          <div className="about-content-desc">
            Generate Designs that aligns with your brand identity and serve the <br/>
            specific need of your target market based on emerging trend and <br/>
            explore the new creative possibilities. <br/>
          </div>
        </div>
        <div className="right center-aligned">
          <img className="pic" src={pic1} alt="" />
        </div>
      </div>
      <div className="about-content-main">
        <div className="left">
          <img className="pic" src={pic2} alt="" />
        </div>
        <div className="right">
          <img className="digit" src={two} alt="" />
          <div className="about-content-heading">
            {" "}
            Trend forecasting and prediction
          </div>
          <div className="underline-2"></div>
          <div className="about-content-desc">
            Helping brands to forecast and predict emerging trend, based on{" "}
            <br />
            qualitative, quantitative and AI based methods.
          </div>
        </div>
      </div>
      <div className="about-content-main">
        <div className="left">
          <img className="digit" src={three} alt="" />
          <div className="about-content-heading">Inventory Management</div>
          <div className="underline-3"></div>
          <div className="about-content-desc">
            DeepShape leverages AI to create personalised, sustainable and{" "}
            <br />
            affordable fashion. Our goal is helping your business to avoid the{" "}
            <br />
            overstocking and understocking and cope with the high volatility of{" "}
            <br />
            the market
          </div>
        </div>
        <div className="right center-aligned">
          <img className="pic" src={pic3} alt="" />
        </div>
      </div>
    </div>
  );
}
