import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import axios from "axios";
import Loader from '../Loader/Loader';
import Error from '../Loader/Error';
import './Profile.css';
import Swal from 'sweetalert2';
import {Tag,Divider} from 'antd';
import { FaUserAlt } from "react-icons/fa";

const { TabPane } = Tabs;

const Profile = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("currentUser")));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      window.location.href = '/login';
    }
  }, [user]);

  return (
    <>
     <div className='ml-3 mt-3'>
      <Tabs defaultActiveKey='1'>
        <TabPane tab="Profile" key="1" className='bs'>
          <h4><FaUserAlt style={{paddingBottom:'4px'}}/>  MY PROFILE</h4>
          <br />
          <h5>Name: {user.name}</h5>
          <h5>Email: {user.email}</h5>
          <h5>isAdmin: {user.isAdmin ? 'Yes' : 'No'}</h5>
        </TabPane>
        <TabPane tab="Bookings" key="2">
          <MyBookings />
        </TabPane>
      </Tabs>
    </div>
    <br />
    </>
   
  );
}

export default Profile;

export function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const user = JSON.parse(localStorage.getItem("currentUser"));
        const response = await axios.post('http://localhost:5000/api/getbookingsbyuserid', { userid: user._id });
        setBookings(response.data);
      } catch (error) {
        console.error(error);
        setError(error.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  async function cancelBooking(bookingid,roomid){
  try{
    setLoading(true)
    const result=await axios.post("http://localhost:5000/api/cancelbooking",{bookingid,roomid}).data
    console.log(result)
    setLoading(false)
    Swal.fire('Your Booking Cancelled Successfully' , 'success').then(result=>{
        window.location.reload()
    })
  }
  catch(error){
    console.log(error)
    setLoading(false)
    Swal.fire('Oops','Something Went Wrong' , 'error');
  }
 }

  return (
    <div>
    <div className="row">
      <div className="col-md-6">
        {loading && <Loader />}
        {error && <Error message={error} />}
  
        {bookings && bookings.length === 0 ? (
          <h3 style={{textAlign:'center',color:'red'}}>Their is No Booking Yet!!!</h3>
        ) : (
          bookings.map(booking => (
            <div key={booking._id} className='bs'>
              <p><b>BookingId: </b>{booking._id}</p>
              <p><b>CheckIn:</b> {booking.startDate}</p>
              <p><b>CheckOut:</b> {booking.endDate}</p>
              <p><b>Amount:</b> {booking.totalamount}</p>
              <p><b>Status:</b>{" "}
                {booking.status === 'cancelled' ? (
                  <Tag color="red">CANCELLED</Tag>
                ) : (
                  <Tag color="green">CONFIRM</Tag>
                )}
              </p>
  
              {booking.status !== 'cancelled' && (
                <div className='text-right c-btn'>
                  <button  onClick={()=>{cancelBooking(booking._id , booking.roomid)}}>CANCEL BOOKING</button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  </div>
  
  );
}
