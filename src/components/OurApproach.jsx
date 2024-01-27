import React from 'react';
import FlexGallery from '../HOCS/FlexGallery';
import image1 from '../assets/approach-1.png';
import image2 from '../assets/approach-2.png';
import image3 from '../assets/approach-3.png';
import CustomButton from './GenericButton';

export default function OurApproach() {
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
                <CustomButton>See more →</CustomButton>
            </div>
        </div>
    );
}
