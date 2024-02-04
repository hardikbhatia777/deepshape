import React from 'react';
import Footer from '../components/Footer';
import '../styles/Policy.css'

export default function Policy() {
  return (
    <div className="policy-container">
      <div className="policy-content">
        <h1>Privacy Policy for DeepShape</h1>
        <p><strong>Last updated:</strong> February 02, 2024</p>

        <h2>Privacy Policy</h2>
        <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
        <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>

        <h2>Interpretation and Definitions</h2>
        <h3>Interpretation</h3>
        <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

        <h3>Definitions</h3>
        <p><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</p>
        <p><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
        {/* Definitions section continues with other definitions */}

        <h2>Collecting and Using Your Personal Data</h2>
        <h3>Types of Data Collected</h3>
        <h4>Personal Data</h4>
        <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
        <ul>
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          {/* Other items from Personal Data section */}
        </ul>
    </div>
      <Footer />
    </div>
  );
}
