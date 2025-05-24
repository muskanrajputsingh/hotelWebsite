import React from 'react';
import './FacilityCard.css';
import Facility from '../../Pages/Facility/Facility';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const FacilityCard = () => {
    let box1=document.querySelector('.facility-container')

    const btnprev=()=>{
       let width=box1.clientWidth;
       box1.scrollLeft=box1.scrollLeft - width;
     }

    const btnnext=()=>{
        let width=box1.clientWidth;
        box1.scrollLeft=box1.scrollLeft + width;
   }

  return (
    <>
    <div className="facilityslider">
    <div className="slider-head">
        <h3>View Our Facilities</h3>
    </div>
     <div className="facility-carousel">
     <button className='pre-btn' onClick={btnprev}><p><IoIosArrowBack /></p></button>
     <button className='next-btn' onClick={btnnext}><p><IoIosArrowForward/></p></button>

     <div className="facility-container">

     <Facility  imggg="https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=600"/>

     <Facility  imggg="https://images.pexels.com/photos/1043458/pexels-photo-1043458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>

     <Facility imggg="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600" />

     <Facility  imggg="https://images.pexels.com/photos/331107/pexels-photo-331107.jpeg?auto=compress&cs=tinysrgb&w=600"/>

     <Facility imggg="https://images.pexels.com/photos/6466289/pexels-photo-6466289.jpeg?auto=compress&cs=tinysrgb&w=600"/>

    <Facility imggg="https://images.pexels.com/photos/7563687/pexels-photo-7563687.jpeg?auto=compress&cs=tinysrgb&w=600"/>

     <Facility  imggg="https://images.pexels.com/photos/1000633/pexels-photo-1000633.jpeg?auto=compress&cs=tinysrgb&w=600"/>

    </div>

     </div>
    </div>

    </>
  )
}

export default FacilityCard