import React from "react";
import "../styles/Approach.css";
import one from "../assets/01.png";
import two from "../assets/02.png";
import three from "../assets/03.png";
import pic1 from "../assets/approach-1.png";
import pic2 from "../assets/approach-main-2.png";
import pic3 from "../assets/approach-main-3.png";

export default function ApproachMain() {
  return (
    <div>
      <div className="about-header-main">
        <div className="about-heading-heading">Our Approach</div>
        <div className="about-heading-content">
          COLLECTION OF DATA → TREND ANALYSIS → DESIGN GENERATION
        </div>
      </div>
      <div className="about-content-main">
        <div className="left">
          <div className="approach-content-heading">Collection of Data</div>
          <div className="underline-1"></div>
          <div className="approach-content-desc">
            Data will decide and drive the innovation for the future,
            particularly in the field of artificial intelligence. DeepShape will
            be trained on vast datasets, ensuring its ability to accurately
            track consumer preferences and buying habits. This data-driven
            approach will allow DeepShape to continuously improve the model's
            overall accuracy and performance, leading to personalized
            recommendations that consumers love.
          </div>
        </div>
        <div className="right right-aligned right-margin">
          <img className="digit" src={one} alt="" />
          <img className="pic" src={pic1} alt="" />
        </div>
      </div>
      <div className="about-content-main">
        <div className="left left-aligned left-margin">
          <img className="digit" src={two} alt="" />
          <img className="pic" src={pic2} alt="" />
        </div>
        <div className="right ">
          <div className="approach-content-heading">Trend Analysis</div>
          <div className="underline-1"></div>
          <div className="approach-content-desc right-margin">
            DeepShape will pinpoint the key drivers of change. Leveraging its
            vast data resources, our software will identify emerging trends,
            consumer preferences, and market conditions, enabling informed
            decision-making and empowering brands to stay ahead of the curve.
          </div>
        </div>
      </div>
      <div className="about-content-main">
        <div className="left">
          <div className="approach-content-heading">Design Generation</div>
          <div className="underline-1"></div>
          <div className="approach-content-desc">
            DeepShape becomes your creative collaborator. Streamline and
            accelerate your design cycle as the software generates 3D designs
            that resonate with your target market. This empowers designers to
            unlock their creativity and push the boundaries of innovation.
          </div>
        </div>
        <div className="right right-aligned right-margin">
          <img className="digit" src={three} alt="" />
          <img className="pic" src={pic3} alt="" />
        </div>
      </div>{" "}
    </div>
  );
}
