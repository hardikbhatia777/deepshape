import React from 'react';
import FlexGallery from '../HOCS/FlexGallery';
import image1 from '../assets/approach-1.png';
import image2 from '../assets/approach-2.png';
import image3 from '../assets/approach-3.png';
import CustomButton from './GenericButton';
import '../styles/OurApproach.css'
import { Link } from "react-router-dom";

export default function OurApproach() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
    const images = [
        { imageUrl: image1, description: 'DATA COLLECTION' },
        { imageUrl: image2, description: '3D DESIGN GENERATION' },
        { imageUrl: image3, description: 'ANALYSING THE TREND' },
    ];
    return (
        <div className='approach-main'>
            <div className='approach-heading'>
                OUR APPROACH
                <div className='underline'></div>
            </div>
            <FlexGallery images={images} />
            <div className='button'> 
            <Link to='/approach'>
                <CustomButton onClick={scrollToTop}>See more →</CustomButton>
                </Link>
            </div>
        </div>
    );
}
