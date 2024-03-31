import React, { useEffect } from 'react';
import './Part4.css';
import { IoArrowForward } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Part4 = () => {

   useEffect(()=>{
    AOS.init({duration:2000})
   })

    let leftbtn=document.querySelector("#leftbtn")
    let rightbtn=document.querySelector("#rightbtn")
    let carousel=document.querySelector(".carousel4")

    const leftbtnclick=()=>{
    carousel.scrollLeft+=200
    }
    const rightbtnclick=()=>{
       carousel.scrollLeft-=200
    }

  return (
    <>
    <div class="sectionn-part4 box">
     
    </div>
    <div className="part4-container">
        <div className="pg7txt">
            <h2 data-aos="zoom-in">Our Infrastructure</h2>
            <div className="movebtn">
                <button className="btn6" id='leftbtn' onClick={leftbtnclick}> <IoArrowForward /> </button>
                <button className="btn6" id='rightbtn' onClick={rightbtnclick}> <IoArrowBack /> </button>
            </div>
        </div>
        <div className="carousel4" data-aos="fade-right">
        <div className="inner" style={{backgroundImage: `url("https://images.pexels.com/photos/3767442/pexels-photo-3767442.jpeg?auto=compress&cs=tinysrgb&w=600")`}}>
        <div className="innertxt">
        <h3>Waiting Area</h3>
        </div>
       </div>

       <div className="inner" style={{backgroundImage: `url("https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?auto=compress&cs=tinysrgb&w=600")`}}>
        <div className="innertxt">
        <h3>Dining</h3>
       </div>
       </div>


       <div className="inner" style={{backgroundImage: `url("https://images.pexels.com/photos/3315291/pexels-photo-3315291.jpeg?auto=compress&cs=tinysrgb&w=600")`}}>
        <div className="innertxt">
        <h3>Washroom</h3>
        </div>
        </div>

        <div className="inner" style={{backgroundImage: `url("https://images.pexels.com/photos/4254020/pexels-photo-4254020.jpeg?auto=compress&cs=tinysrgb&w=600")`}}>
        <div className="innertxt">
        <h3>Hotel Bar</h3>
        </div>
       </div>

       <div className="inner" style={{backgroundImage: `url("https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600")`}}>
        <div className="innertxt">
        <h3>Hotel Lounge </h3>
       </div>
        </div>

       <div className="inner" style={{backgroundImage: `url("https://images.pexels.com/photos/3124079/pexels-photo-3124079.jpeg?auto=compress&cs=tinysrgb&w=600")`}}>
        <div className="innertxt">
        <h3>Reception Hall</h3>
        </div>
        </div>

      
       </div>
    </div>
    </>
  )
}

export default Part4