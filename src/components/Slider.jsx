// src/components/Slider.js
import React, { useState } from 'react';

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="w-full h-auto"
      />
      <button
        onClick={prevImage}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-l"
      >
        Previous
      </button>
      <button
        onClick={nextImage}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-r"
      >
        Next
      </button>
    </div>
  );
};

export default Slider;
