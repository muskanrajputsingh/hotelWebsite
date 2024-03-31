import React from 'react';
import './Book.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Book = () => {
const[toggleState,setToggleState]=useState(1);
const toggleTab=(index)=>{
 setToggleState(index);
}
const bookAndPay=()=>{
  // var checkinDate = document.getElementById("checkinDate").value;
  // var roomSelect = document.getElementById("roomSelect");
  // var selectedRoom = roomSelect.options[roomSelect.selectedIndex].text;
  // var price = 100; 
  // document.getElementById("displayCheckinDate").innerText = checkinDate;
  // document.getElementById("displayCheckoutDate").innerText = "To be calculated";
  // document.getElementById("displayRoom").innerText = selectedRoom;
  // document.getElementById("displayPrice").innerText = price;
}
  return (
    <>
    <div className="tab-box">
        <div className="tab-box1">
         <img src="https://www.wikihow.com/images/thumb/3/31/Check-Into-a-Hotel-Step-5-Version-3.jpg/v4-460px-Check-Into-a-Hotel-Step-5-Version-3.jpg.webp" alt="" />
        </div>
        <div className="container1"><br />
         {/* <h1>Enter Your Details</h1> */}
            <div className="bloc-tabs">
                <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={()=>toggleTab(1)}><h3>Check Availability</h3></div>
                <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={()=>toggleTab(2)}><h3>Room Detail</h3></div>
                <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={()=>toggleTab(3)}><h3>Guest Information</h3></div>
            </div>
         <div className="content-tabs">
         <div className={toggleState === 1 ? "content active-content" : "content"}>
            <h2>Check Availability</h2>
            <hr />
            <div className="checkin-detail">
              <div className="checkin-form">
              <div className="checkin-date">
                <form>                
               <label for="dt1" id='dt'>Check-In</label>
               <input type='date' placeholder='date' name='dt1' id='dt1' required/>
               <label for="dt2">Check-Out</label>
               <input type='date' placeholder='date' name='dt2' id='dt2' required/>

               <div className="checkin-member">
               <select name='room' id='room'>
                <option value="Room1">1 Room</option>
                <option value="Room2">2 Room</option>
                <option value="Room3">3 Room</option>
                <option value="Room4">4 Room</option>
                <option value="Room5">5 Room</option>
                <option value="Room6">6 Room</option>
                <option value="Room10">10 Room</option>
                <option value="RoomMore">...More</option>
               </select>

              <select name='adult' id='adult'>
                <option value="adult1">1 Adult</option>
                <option value="adult2">2 Adult</option>
                <option value="adult3">3 Adult</option>
                <option value="adult4">4 Adult</option>
                <option value="more">...More</option>
            </select>

            <select name='chilldren' id='child'>
                <option value="child0">0 Child</option>
                <option value="child1">1 Child</option>
                <option value="child2">2 Child</option>
                <option value="child3">3 Child</option>
            </select>
            </div>
            <div className="check">
            <button className='checkinbtn'>Check Availability</button>
            <button className='otherbtn'>Book Another Room</button>
            </div>
               </form>
              </div>
              </div>
            </div>
           </div>
   {/* /////////////////////////////////////////////// */}
         <div className={toggleState === 2 ? "content active-content" : "content"}>
            <h2>Room Detail</h2>
            <hr />
            <div className="room-detail">
             <div className="detail-pic">
              <div className="pic">
                <img src="https://images.pexels.com/photos/8031889/pexels-photo-8031889.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <h6 id='demand'><b>In high demand! Only 3 rooms left</b></h6>
              </div>
              <div className="details-room">
               <h4>Deluxe Room</h4>
               <p><b>Room Size:</b> 240sq.ft.</p>
               <h5>Adult:2</h5>
               <h5>Child:1</h5>
               <h5>Total Room:1</h5>
               <h5>Rs 2500</h5>
               <Link to={''}><button className='selectbook'>Next</button></Link>
              </div>
             </div>
            </div>
         </div>
    {/* /////////////////////////////////////////////////////// //////////////////*/}
         <div className={toggleState === 3 ? "content active-content" : "content"}>
            <h2>Guest information</h2>
            <hr />
            <div className="payment">
            <div class="booking-container">
            <div class="left-section">
            <label for="guestName">Guest Name</label>
            <input type="text" id="guestName" placeholder="Enter your name" required />

            <label for="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required/>

            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="Enter your phone number" required/>

            {/* <label for="roomSelect">Room Selection</label>
            <select id="roomSelect">
                <option value="single">Single Room</option>
                <option value="double">Double Room</option>
                <option value="suite">Suite</option>
            </select> */}

            <button onclick={bookAndPay}>Book Now & Pay Later</button>
        </div>

        <div class="right-section">
            <h2>BOOKING DETAILS</h2>
            <p>Check-in Date: <span id="displayCheckinDate"></span></p>
            <p>Check-out Date: <span id="displayCheckoutDate"></span></p>
            <p>Rooms: <span id="displayRoom"></span></p>
            <p>Guests: <span id="displayRoom"></span></p>
            <p>Price: $<span id="displayPrice"></span></p>
            <p>Tax: $426.00<span id="displayPrice"></span></p>
            <p>Grand Total: $<span id="displayPrice"></span></p>
        </div>
          </div>  
            </div>
         </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Book