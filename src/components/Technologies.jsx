// src/App.js
import React from 'react';
import Slider from './Slider';

const Technologies = () => {
  // Replace these image URLs with your actual image URLs
  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
    // Add more image URLs as needed
  ];

  return (
    <div className="container mx-auto my-8">
      <Slider images={images} />
    </div>
  );
};

export default Technologies;
