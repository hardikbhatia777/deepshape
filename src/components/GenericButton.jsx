import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css'

const CustomButton = ({ children }) => {
  return (
    <button className='button-main'>
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomButton;
