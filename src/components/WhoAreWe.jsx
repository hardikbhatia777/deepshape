import React from "react";
import "../styles/AboutHeading.css";
import scroll from '../assets/scroll-down.png'
import pic1 from "../assets/whatis-1.png";
import pic2 from "../assets/whatis-2.png";

export default function WhoAreWe() {
  return (
    <div>
      <div className="about-header-main">
        <div className="about-heading-heading">What is Deepshape?</div>
      </div>
      <div className="about-content-main">
        <div className="left">
          <div className="whatis-content-desc right-margin">
            DeepShape is an AI-powered design software seamlessly integrates
            with your creative flow, providing intelligent assistance and
            innovative tools to elevate your designs to new heights. We bring to
            you the new era of Human & AI collaboration.
            <br />
            <br />
            We see a world where designers, architects, and artists wield 3D
            design software with the same ease and fluidity as a painter wields
            a brush, sculpting dreams into tangible realities. This software
            will be as intuitive as breathing, seamlessly adapting to the
            designer's intent, transforming mere ideas into breathtaking
            creations.
          </div>
        </div>
        <div className="right center-aligned">
          <img className="whatis-pic" src={pic1} alt="" />
        </div>
      </div>
      <div className="scroll">
        <img className="scroll-pic" src={scroll} alt =''/>
      </div>
      <div className="about-content-main">
        <div className="left">
          <img className="whatis-pic" src={pic2} alt="" />
        </div>
        <div className="right">
          <div className="whatis-content-desc right-margin">
            Imagine a world where design software becomes a collaborative
            partner, understanding the designer's vision and offering
            suggestions that elevate the design to new heights. This software
            will not just follow instructions; it will anticipate needs, suggest
            alternatives, and inspire novel approaches, fostering a symbiotic
            relationship between human creativity and artificial intelligence.
            <br />
            <br />
            This is not just a vision for the future; it is a call to action. We
            invite you to join us in shaping this future, to harness the power
            of 3D design software to create a world where design is not just a
            profession but a driving force for innovation, sustainability, and
            human connection.
          </div>
        </div>
      </div>
    </div>
  );
}
