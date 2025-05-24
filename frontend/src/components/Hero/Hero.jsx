import React, { useState, useEffect } from 'react';
import './Hero.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero=()=> {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of image URLs
  const images = [
    "https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",  
    "https://images.pexels.com/photos/7061059/pexels-photo-7061059.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/6782479/pexels-photo-6782479.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
  ];

  useEffect(() => {
    AOS.init({duration:2000})
    const slider = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };
    const intervalId = setInterval(slider, 3000);

    return () => clearInterval(intervalId);
  }, []); 

  const room=()=>{
    window.location.href='/room';
  }

  return (
    <div className="banner" data-aos="zoom-in">
      <div className="slider">
        <img src={images[currentSlide]} alt="" id="slideimg" />
      </div>
      <div className="overlayy">
        <div className="contentt">
          <h1>HOTEL ASTORIA WELCOME'S YOU</h1>
          <h3>Live Good | Eat Good | Look's Good</h3>
          <div className="contentt-btn">
            <button onClick={room}>BOOK NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
