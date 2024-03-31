import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(()=>{
  AOS.init({duration:1800})
  })
  return (
    <>
     <div class="sectionn-part5 box" data-aos="fade-right">
     
     </div>
    <div className="about-section">
      <h1 style={{color:'grey',fontWeight:'700',padding:'10px'}} >HOTEL  ASTORIO ~</h1><br />
        <div className="about-head">
        <h1 data-aos="fade-right"> 
                the hotel was built in 2020 <br />
                with modern techniques<br />
                and architecture.
            </h1>
        </div>
           <div className="about-para" data-aos="fade-up">
           <p>
                Hotel Astoria is exactly situated in the heart of city which is jaipur and it is reachable in<br />
                15-20 minutes from airport. Tourist attractions like lal-chowk,dalgate,jhelum river are at<br />
                walking distance from the hotel.joggers park,lawn tennis,snooker club and golf courses are<br />
                also counted in the local-nearby public places where our guests can visit.
            </p>
           </div>
           <button data-aos="fade-left">Read More</button><br />
    </div>
    </>
  )
}

export default About