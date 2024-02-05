import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css'

const CustomButton = ({ children, onClick }) => {
  return (
    <button className='button-main' onClick={onClick}>
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CustomButton;
