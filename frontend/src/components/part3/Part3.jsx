import React, { useEffect } from 'react';
import './Part3.css';
import { FaArrowRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Part3 = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  })
  return (
    <>
     <div className="part3-container">
        <h1 data-aos="zoom-in">Attractions</h1>
        <div className="part3-one" data-aos="fade-right">
          <div className="partbox-one">
           <img src="https://exploreyourway.in/wp-content/uploads/2023/10/Adiyogi-Shiva-Statue1-1-1024x677-1.jpg.webp" alt="" />
          </div>
          <div className="partbox-two">
           <h2>Adiyogi Shiva Statue</h2>
           <p>Adiyogi Shiva Statue, one of the tallest Lord Shiva statues in the world, is located in Coimbatore, Tamil Nadu. But what would you say if you get to see this statue of Adiyogi in Bangalore itself. Yes, Adiyogi Shiva Statue Bangalore, It is also called the 2nd Adiyogi Statue In Bangalore. Thousands and millions of tourists go to see its amazing view. After seeing this statue, believe that it seems as if Lord Shiva himself is seated in a meditative state.</p>
           <button id='part3-btn'>read more <FaArrowRight /></button>
          </div>
        </div>
        <div className="part3-two" data-aos="fade-up">
         <div className="partbox-three">
          <h2>Nandi Hills</h2>
          <p>Nandi Hills located around 1 hour drive from Bengaluru in early hours is an hill station with various view points & attractions around. The entry to hill station is restricted to 6 AM to 6 PM with entry being closed when the parking is full. We visited the Nandi hills for Sunrise but unfortunately it was too foggy & couldn't see any thing. Also, it's a lot of walk & crowded so not good for small kids. I would still want to visit for a full day trip to explore everything in and around.</p>
          <button id='part3-btn'>read more  <FaArrowRight /></button>
         </div>
         <div className="partbox-four">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbbrfX2bW9C5xJLb4Hj0uYRE2nAmJjYaQlpQ&s" alt="" />
         </div>
        </div>
     </div>
    </>
  )
}

export default Part3