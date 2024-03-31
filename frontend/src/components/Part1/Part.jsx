import React, { useEffect } from 'react';
import './Part.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Part = () => {
  
  useEffect(()=>{
    AOS.init({duration:2000})
  })

  return (
    <>
    <div className="section-2 box">
    <h1 data-aos="fade-right"> the hotel was built in 2020 <br />
                with modern techniques<br />
                and architecture.</h1>
    <p data-aos="fade-up"> hotel Astorio is exactly situated in the heart of city which is Karnatka and it is reachable<br />
                15-20 minutes from an airport. Tourist attractions like Nandi-hills,Adi shiva statue,dalgate,jhelum river are <br/>at
                walking distance from the hotel.joggers park,lawn tennis,pool,snooker club and golf <br />courses are
                also counted in the local-nearby public places where our guests can visit.<br/>the astoria ~</p>
  </div>
  <div className="sectionn-1 box">
    
  </div>
  <div className="section-4 box">
    <h1 data-aos="zoom-in">Hotel Rooms</h1>
    <div className="room-cards">
        <div className="card-room1" data-aos="fade-right">
        <div className="roomcard1 scalee">
         <img src="https://images.pexels.com/photos/6301172/pexels-photo-6301172.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        </div>
        <div className="roomcard2 scalee">
         <img src="https://images.pexels.com/photos/6970068/pexels-photo-6970068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
         </div>
         <div className="roomcard3 scalee">
         <img src="https://images.pexels.com/photos/6316054/pexels-photo-6316054.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
         </div>
        </div>
        <div className="card-room2" data-aos="fade-right">
        <div className="roomcard4 scalee">
         <img src="https://media.istockphoto.com/id/1454697447/photo/black-luxury-modern-retro-style-master-bedroom.jpg?s=612x612&w=0&k=20&c=zWXMq8oEAx5cSIF88bqiizwqAyeDmO9ihZyTlOFpHQQ=" alt="" />
        </div>
        <div className="roomcard5 scalee">
         <img src="https://i.pinimg.com/originals/b5/cd/99/b5cd99e5af51436c8be69a26b699420e.jpg" alt="" />
         </div>
         <div className="roomcard6 scalee">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzdNZI6B7YnXa9Pntr1LjUQhut4F_9vytFXjKFlsUr2uatlDDQvz8svgMWCK873u272Nk&usqp=CAU" alt="" />
         </div>
        </div>
    </div>
  </div>
    </>
  )
}

export default Part