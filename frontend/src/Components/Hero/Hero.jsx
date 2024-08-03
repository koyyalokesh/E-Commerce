import React from "react";
import "./Hero.css";
import hero_image from "../Assets/shopping.jpg";

import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        
        <div>
         <div className="hero-hand-icon">
            <p>new</p>
            
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} className="hero-img" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
