import React from 'react';
import backgroundImage from '../assets/chips-background.png';
import '../styles/AboutUs.css';

export default function AboutUs() {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className='about-main' style={divStyle}>
      <div className="overlay"></div>
      hello
    </div>
  );
};