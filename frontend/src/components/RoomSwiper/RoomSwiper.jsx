import React, { useEffect, useState } from 'react';

const RoomSwiper = () => {
const [rooms,setrooms]=useState([]);
useEffect(()=>{
 fetch('https://hotelwebsitebackend.onrender.com/api/room')
 .then(response =>{
  if(!response.ok){
    throw new Error('failed to fetch')
  }
  return response.json()
 })
 .then(data =>{
  setrooms(data);
 })
 .catch(err =>{
 console.error(err);
 window.alert(err);
 })
},[])
  return (
    <>
    <div>
      <h1>room detail</h1>
      {rooms.map((room,index)=>(
        <ul key={index}>
          <li>{room.roomType}</li>
          <li>{room.rentperday}</li>
          <li>{room.description}</li>
        </ul>
      ))}
    </div>
    </>
  )
}

export default RoomSwiper




// import React from 'react';
// import './RoomSwiper.css';
// import Mycard from '../Mycard/Mycard';
// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";

// const RoomSwiper = () => {
//     let box=document.querySelector('.room-container')

//     const btnprev=()=>{
//        let width=box.clientWidth;
//        box.scrollLeft=box.scrollLeft - width;
//      }

//     const btnnext=()=>{
//         let width=box.clientWidth;
//         box.scrollLeft=box.scrollLeft + width;
//    }
   
//   return (
//     <>
//     <div className="roomslider">
//     <div className="slider-head">
//         <h3>View Our Rooms & Interiors</h3>
//     </div>
//      <div className="room-carousel">
//      <button className='pre-btn' onClick={btnprev}><p><IoIosArrowBack/></p></button>
//      <button className='next-btn' onClick={btnnext}><p><IoIosArrowForward /></p></button>

//      <div className="room-container">

//      <Mycard cardno='1' imgg="https://images.pexels.com/photos/6899433/pexels-photo-6899433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>

//      <Mycard cardno='2' imgg="https://images.pexels.com/photos/7174399/pexels-photo-7174399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

//      <Mycard cardno='3' imgg="https://images.pexels.com/photos/7061059/pexels-photo-7061059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>

//      <Mycard cardno='4' imgg="https://images.pexels.com/photos/7018391/pexels-photo-7018391.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>

//      <Mycard cardno='5' imgg="https://images.pexels.com/photos/7534540/pexels-photo-7534540.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>

//      <Mycard cardno='6' imgg="https://images.pexels.com/photos/7018383/pexels-photo-7018383.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>

//      <Mycard cardno='7' imgg="https://images.pexels.com/photos/6580218/pexels-photo-6580218.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>

//      <Mycard cardno='8' imgg="https://images.pexels.com/photos/7045852/pexels-photo-7045852.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>

//      <Mycard cardno='9' imgg="https://images.pexels.com/photos/6438768/pexels-photo-6438768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
//      <Mycard cardno='10' imgg="https://images.pexels.com/photos/6301172/pexels-photo-6301172.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>

//      <Mycard cardno='11' imgg="https://images.pexels.com/photos/7535063/pexels-photo-7535063.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>

//     </div>

// {/* <div className="room-container">
//      <Mycard cardno='1' />
//      <Mycard cardno='2'  />
//      <Mycard cardno='3' />
//      <Mycard cardno='4' />
//      <Mycard cardno='5' />
//      <Mycard cardno='6' />
//      <Mycard cardno='7' />
//      <Mycard cardno='8' />
//      <Mycard cardno='9' />
//      <Mycard cardno='10' />
//      <Mycard cardno='11' />

//      </div> */}

//      </div>
//     </div>
//     </>
//   )
// }

// export default RoomSwiper
