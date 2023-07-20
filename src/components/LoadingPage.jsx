// src/components/LoadingPage.js

import React, { useEffect, useState } from 'react';
import logo from "../assets/logo.png"
import { useSelector } from 'react-redux';

const LoadingPage = ({ setLoadingComplete }) => {

    const language = useSelector((state) => state.language.language);
    const languageData = useSelector((state) => state.language.data[language]);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useEffect(() => {
      // Preload the image
      const image = new Image();
      image.src = logo;
  
      image.onload = () => {
        // Image is loaded, show the loading page
        setIsImageLoaded(true);
      };
  
      // Simulate some loading process
      setTimeout(() => {
        setLoadingComplete(true);
      }, 2000); // Adjust the duration as needed
    }, [setLoadingComplete]);
  return (
    <div className="loading-container">
      <div className="loading-logo flex flex-col items-center justify-center space-y-3">

      <img
        className=" w-44" // Adjust width and height to fit your logo size
        
        src={logo}
        alt="Logo"
      />
      <span className='text-xs'>{languageData.loadingText}</span>
      </div>
    </div>
  );
};

export default LoadingPage;
