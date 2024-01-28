import React from 'react';
import PropTypes from 'prop-types';
import '../styles/OurApproach.css';

const FlexGallery = ({ images }) => {
  return (
    <div className="flex-gallery">
      {images.map((item, index) => (
        <div key={index} className="gallery-item">
          <img src={item.imageUrl} alt='' className="gallery-image" />
          <p className="image-description">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

FlexGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FlexGallery;