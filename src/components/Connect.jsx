import React from "react";
import "../styles/Connect.css";
import CustomButton from "./GenericButton";
import phone from "../assets/phone.png";

export default function Connect() {
  return (
    <div className="connect-main">
      <div className="connect-left">
        <img src={phone} alt="" className="connect-phone" />
      </div>
      <div className="connect-right">
        <div className="connect-heading">
          CONNECT
          <div className="connect-underline"></div>
          <p className="connect-content">We would love to hear from you!</p>
          <textarea className="connect-text-small" placeholder="Your name*" />
          <textarea className="connect-text-small" placeholder="Email*" />
          <textarea
            className="connect-text-small"
            placeholder="Phone number*"
          />
          <textarea className="connect-text-small" placeholder="City*" />
          <textarea className="connect-text-big" placeholder="Your message" />
          <div className="connect-button">
            <CustomButton>Submit Message</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
