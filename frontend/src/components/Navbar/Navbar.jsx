import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState,useEffect } from 'react';
import { FaUser } from "react-icons/fa";

const Navbar=()=> {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('currentUser'));
    setUser(userData);
  }, []);

  const logOut=()=>{
    localStorage.removeItem('currentUser')
    window.location.href='/login'
  }
  
  const showSidebar=()=>{
  let sidebar=document.querySelector('.nav-sidebar')
  sidebar.style.display='flex'
  }
  const hideSidebar=()=>{
    let sidebar=document.querySelector('.nav-sidebar')
    sidebar.style.display='none'
  }

 const bookNoww=()=>{
  window.location.href='/room'
 }

  return (
    <>
    <div className="navbarr">
      <div className="nav-1">
        <div className="nav-phone">
          <h4><FaPhoneAlt  id='a'/>  Need Help ? Call Us :<b> +91-7000901576</b></h4>
        </div>
        <div className="nav-login">

       {user ? (
        <>
       <div class="dropdown ">
      <button class="btn user-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <FaUser style={{paddingBottom:'4px'}}/> {user.name}
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <Link to={'/profile'} class="dropdown-item" style={{fontWeight:'bolder'}}>Profile</Link>
      <Link to={'/'} onClick={logOut} class="dropdown-item" style={{fontWeight:'bolder'}}>Logout</Link>
    </div>
</div>
       </>
       ) : (
       < >
       <div id='nav-li'>
       <Link to={'/registration'}><li className='listItem'><FaUserEdit />  SignUp</li></Link>
        <Link to={'/login'}><li className='listItem'><FaUserCheck /> SignIn</li></Link>
       </div>
       </>)}

      </div>
      </div>

      <div className="nav-2">
        <div className="nav-logo">
          <img src="https://www.freepnglogos.com/uploads/hotel-logo-png/hotel-astoria-logo-png-transparent-10.png" alt="Hotel Astoria" />
          {/* <h3>HOTEL ASTORIA</h3> */}
        </div>
        <div className="nav-menu hideOnMoblie">
          <ul>
         <Link to={'/'}><li className='listItem hideOnMobile'>Home</li></Link>
         <Link to={'/about'}><li className='listItem hideOnMobile'>About</li></Link>
         <Link to={'/room'}><li className='listItem hideOnMobile'>Rooms</li></Link>
         <Link to={'/gallery'}><li className='listItem hideOnMobile'>Gallery</li></Link>
         <Link to={'/attraction'}><li className='listItem hideOnMobile'>Attractions</li></Link>
         <Link to={'/contact'}><li className='listItem hideOnMobile'>Contact</li></Link>
        </ul>
        </div>
        <div className='nav-sidemenu'>
        <ul className='nav-sidebar'>
        <Link onClick={hideSidebar}><IoClose style={{fontSize:'60px',paddingTop:'20px'}} /></Link>
         <Link to={'/'}><li className='listItem'>Home</li></Link>
         <Link to={'/about'}><li className='listItem'>About</li></Link>
         <Link to={'/room'}><li className='listItem'>Rooms</li></Link>
         <Link to={'/gallery'}><li className='listItem'>Gallery</li></Link>
         <Link to={'/attraction'}><li className='listItem'>Attractions</li></Link>
         <Link to={'/contact'}><li className='listItem'>Contact</li></Link>
         <Link to={'/room'}><li className='listItem listitem-btn'>BOOK NOW</li></Link>
         </ul>
        </div>

        <div className="nav-book">
        <Link onClick={showSidebar}><IoMenu id='nav-menu'/></Link>
        <button onClick={bookNoww} className='hideOnMoblie'>BOOK NOW</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Navbar;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import { MdBedroomParent } from "react-icons/md";
// import { AiFillHome } from "react-icons/ai";
// import { FaHotel } from "react-icons/fa";
// import { FaRegImage } from "react-icons/fa6";
// import { FaPhone } from "react-icons/fa6";
// import { FaUserAlt } from "react-icons/fa";
// import { FaWifi } from "react-icons/fa";
// import { GiCook } from "react-icons/gi";
// import { FaCarRear } from "react-icons/fa6";
// import { MdOutlineSportsGymnastics } from "react-icons/md";
// import { MdOutlinePool } from "react-icons/md";
// import { FaTree } from "react-icons/fa";
// import { MdCleaningServices } from "react-icons/md";
// import { TfiMoreAlt } from "react-icons/tfi";
// const Navbar = () => {
//   return (
//     <>
//     <div className="navbar">
//      <div className="nav-first">
//         <div className="logonav">
//         <img src="https://res.cloudinary.com/dyntugwaq/image/upload/v1706279967/blossom_d6rgmf.png" alt="" />    
//         </div>

//         <div className="linav">
//          <ul className='ulist'>
//          <Link to={'/'}><li className='listItem'><AiFillHome className='icon' />Home</li></Link>
//          <Link to={'/about'}><li className='listItem'><FaHotel className='icon'/>About Us</li></Link>
//          <Link to={'/room'}><li className='listItem'><FaRegImage className='icon'/>Photos</li></Link>
//          <Link to={'/contact'}><li className='listItem'><FaPhone className='icon'/>Contact</li></Link>
//          <Link to={'/bookingScreen'}><li className='listItem'><FaPhone className='icon'/>Booking</li></Link>

//          <Link to={'/registration'}><li className='listItem'><FaUserAlt className='icon'/>Sign-In</li></Link>
//          <Link to={'/registration'}><li className='listItem'><FaUserAlt className='icon'/>Sign-Up</li></Link>

//          </ul>
//         </div>

//         <div className="bookbutn">
//         <Link to={'/book'}><button>Book A Stay</button></Link>
//        </div>
//      </div>

//     <div className="nav-second">
//     <div className="sec-first">
//     <ul>
//     <Link to={'/room'}><li className='listItem abc'><a href="">Rooms</a>

//     <ul className='dropdown'>
//         <li><Link to={'/room'}>Single Rooms</Link></li>
//         <li><Link to={'/room'}>Double Rooms</Link></li>
//         <li><Link to={'/room'}>Deluxe Rooms</Link></li>
//         <li><Link to={'/room'}>Suites</Link></li>
//         <li><Link to={'/room'}>Presidential Rooms</Link></li>
//     </ul>

//     </li></Link>
//     <Link to={'/facility'}><li className='listItem'><a href="">Facilities</a>
    
//     <ul className='dropdown'>
//         <li><FaWifi /> Wifi</li>
//         <li><GiCook /> Restaurent</li>
//         <li><FaCarRear /> Parking</li>
//         <li><MdOutlineSportsGymnastics/> Gym</li>
//         <li><MdOutlinePool /> Swimming Pool</li>
//         <li><FaTree /> Garden</li>
//         <li><MdCleaningServices /> Room Service</li>
//         <li><TfiMoreAlt /> More</li>
//     </ul>

//     </li></Link>
//     <Link to={'/dining'}><li className='listItem'><a href="">Dining</a></li></Link>
//     <Link to={'/metting'}><li className='listItem'><a href="">Meetings&Events</a></li></Link>
//     <Link to={'/wedding'}><li className='listItem'><a href="">Weddings</a></li></Link>
//     <Link to={''}><li className='listItem blossom'>Blossom's Stay</li></Link>
//      </ul>
//     </div>
    
//   <div className="sec-second">
//   <Link to={''}><img src='https://logowik.com/content/uploads/images/t_black-baby-footprint485.logowik.com.webp'></img></Link>
//    </div>
   
//     </div>
//     </div><br />
//     </>
//   )
// }



// https://images.pexels.com/photos/7313084/pexels-photo-7313084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
// https://images.pexels.com/photos/13914283/pexels-photo-13914283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
// https://images.pexels.com/photos/290597/pexels-photo-290597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
// https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
// https://images.pexels.com/photos/2983472/pexels-photo-2983472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
// https://images.pexels.com/photos/2057610/pexels-photo-2057610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
// https://images.pexels.com/photos/8484836/pexels-photo-8484836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1