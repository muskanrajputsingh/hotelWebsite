import React,{useEffect} from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaEnvelope } from "react-icons/fa";
// import AOS from 'aos';
// import 'aos/dist/aos.css'

const Footer = () => {
//   useEffect(()=>{
//     AOS.init({duration:2000})
//   })
  return (
    <>
    <footer>
    <div className="row">
      <div className="col e">
        <img src="https://download.logo.wine/logo/Mandarin_Oriental_Hotel_Group/Mandarin_Oriental_Hotel_Group-Logo.wine.png" alt="logo" className='logo1 ' />
        <p>The Hotel was Built in 2020 
                With Modern <br />Techniques
                and Architecture..</p>
                
      </div>
      <div className="col e">
        <h3>Hotel Astorio</h3>
        <p>Near Nandi Hills</p>
        <p>Karnatka, PIN 567893, India</p>
        <p className="email-id">Hotelastorio.com</p>
        <h4>+91 - 0234567892</h4>
      </div>
      <div className="col foot-col">
        <h3>Menu-Links</h3>
        <ul>
         <Link to={'./'}>Home</Link>
         <Link to={'./'}>About</Link>
         <Link to={'./'}>Rooms</Link>
         <Link to={'./'}>Attractions</Link>
         <Link to={'./'}><b id='book'>BOOK NOW</b></Link>
       </ul>
      </div>
      <div className="col">
        <h3>Mail Us  <FaEnvelope /> </h3>
        <form>
        <i className="ri-mail-open-line"></i>
          <input type="email" placeholder='Enter Your Email Id' />
          <button type='submit'><i className="ri-arrow-right-line arr"></i></button>
        </form>
        <div className="social-icons">
        <i className="ri-facebook-line a"></i>
        <i className="ri-instagram-line a"></i>
        <i className="ri-twitter-line a"></i>
        <i className="ri-github-line a"></i>
        </div>
      </div>
</div>
<hr />
<p className='copyright'>Hotel Astorio @ 2024-All RightsReserved</p>
   </footer>
    </>
  )
}

export default Footer



// import React, { useState } from 'react';
// import './Footer.css';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//     const [isOpen,setIsOpen]=useState(true);

//     const clsbtnn=()=>{
//         setIsOpen(false);
//     }
//   return (
//     <>
//     <div className='main-foot'>
   
//      <div className="footer">
//      {isOpen &&(
//         <div className="foot1">
//          <input type='date' name='dtin' placeholder='Check-in Date' required/>
//          <input type='date' name='dtout' placeholder='Check-out Date' required/>
//          <select name='room'>
//             <option value="Room1">1 Room</option>
//             <option value="Room2">2 Room</option>
//             <option value="Room3">3 Room</option>
//             <option value="Room4">4 Room</option>
//             <option value="Room5">5 Room</option>
//             <option value="Room6">6 Room</option>
//             <option value="Room10">10 Room</option>
//             <option value="RoomMore">...More</option>
//          </select>
//          <select name='adult'>
//             <option value="adult1">1 Adult</option>
//             <option value="adult2">2 Adult</option>
//             <option value="adult3">3 Adult</option>
//             <option value="adult4">4 Adult</option>
//             <option value="more">...More</option>
//          </select>
//          <select name='chilldren'>
//             <option value="child0">0 Child</option>
//             <option value="child1">1 Child</option>
//             <option value="child2">2 Child</option>
//             <option value="child3">3 Child</option>
//          </select>
//         <Link to={'/book'}><button className='staybtn'>Book A Stay</button></Link>
//          <button className='clsbtn' onClick={clsbtnn}>Close</button>
//         </div>
//      )}
//      <div className="foot2">
//         <div className="info">
//         <h3>Hotel Blossom's</h3>
//       <p>+919845673210 | BlossomsStay@gmail.com</p>
//       <Link to={'/book'}><button className='bookbtnn'>Book A Stay</button></Link>
//      </div>
//         </div>
     
//      </div>
//      </div>
//     </>
//   )
// }

// export default Footer