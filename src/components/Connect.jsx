import React from "react";
import "../styles/Connect.css";
import CustomButton from "./GenericButton";
import phone from "../assets/phone.png";

export default function Connect() {
  const handleGmailRedirect = () => {
    const formData = new FormData(document.getElementById("connect-form"));

    const message = `
      Name: ${formData.get("name")}
      Email: ${formData.get("email")}
      Phone: ${formData.get("phone")}
      City: ${formData.get("city")}
      Message: ${formData.get("message")}
    `;

  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);

  // Construct Gmail URL with mailto link and Gmail specific parameters
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=contact@deepshape.tech&su=New%20Message%20from%20your%20website&body=${encodedMessage}`;

  // Open the Gmail compose window
  window.open(gmailUrl);
  };

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
          <form id="connect-form">
            <textarea className="connect-text-small" placeholder="Your name*" type="text" name="name" />
            <textarea type="email" className="connect-text-small" name="email" placeholder="Email*" />
            <textarea type="tel" className="connect-text-small" name="phone" placeholder="Phone number*" />
            <textarea type="text" className="connect-text-small" name="city" placeholder="City*" />
            <textarea className="connect-text-big" name="message" placeholder="Your message"></textarea>
            <div className="connect-button">
              <CustomButton onClick={handleGmailRedirect}>Submit Message</CustomButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
