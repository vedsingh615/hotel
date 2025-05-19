import React from 'react';
import introimage from '../assets/hotel2.jpg';

const Intro = () => {
  return (
    <div>
      <div className="intro-text">
        <h1>The Art of Royal Living, Perfected</h1>
        <p>
          Enter a realm of storied halls, sophisticated delights and unrivalled indulgence. Immerse yourself in the grandeur of luxury at our exquisite palaces, hotels, resorts and safaris.
        </p>
      </div>

      <div className="intro-image">
        <img
          src={introimage}
          alt="intro"
          className="introimage"/>
        
      </div>
    </div>
  );
};

export default Intro;
