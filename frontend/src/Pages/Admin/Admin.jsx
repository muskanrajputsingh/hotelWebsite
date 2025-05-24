import React, { useEffect, useState } from 'react';
import './Admin.css'
import { Tabs } from 'antd';
import axios from 'axios';
import Loader from '../../components/Loader/Loader';
import Swal from 'sweetalert2';

const { TabPane } = Tabs;

const Admin = () => {

  useEffect(()=>{
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log("Current User:", currentUser); 

    if (!currentUser || !currentUser.isAdmin) {
      console.log("Redirecting to home page..."); 
      window.location.href = '/';
    }

  })

  return (
    <>    
      <div className='mt-3 ml-3 bs mr-3'>
        <h3 className='text-center' style={{ fontSize: '30px' }}>ADMIN PANEL</h3>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Bookings" key="1">
            <Bookings />
          </TabPane>
          <TabPane tab="Rooms" key="2">
            <Rooms />
          </TabPane>
          <TabPane tab="Add Room" key="3">
           <Addroom />
          </TabPane>
          <TabPane tab="Users" key="4">
          <Users/>
          </TabPane>
        </Tabs>
      </div>
      <br />
    </>
  )
}

export default Admin;

//bookings-------------------------------------------------------------------------------------------------------------------------
export function Bookings() {
  const [bookings, setbookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response  = await axios.get('https://hotelwebsitebackend.onrender.com/api/getallbookings');
        setbookings(response.data);
        console.log(setbookings(response.data))
        setLoading(false);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setLoading(false);
        setError(error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <h3>BOOKINGS</h3>
          {loading && (<Loader />)}
          {!loading && !error && (<h6 style={{color:'red'}}>There are Total {bookings.length} Bookings</h6>)}
          <table className='table table-bordered table-dark'>
            <thead className='bs thead-dark'>
                <tr>
                    <th>Booking Id</th>
                    <th>User Id</th>
                    <th>Room</th>
                    <th>Start</th>
                    <th>To</th>
                    <th>Status</th>
                </tr>
            </thead>

            <tbody>

                 {
                     bookings.length > 0 && bookings.map(booking => (
                    <tr key={booking._id}>
                    <td>{booking._id}</td>
                    <td>{booking.userid}</td>
                    <td>{booking.rooms}</td>
                    <td>{booking.startDate}</td>
                    <td>{booking.endDate}</td>
                    <td>{booking.status}</td>
                    </tr>))
                }
            </tbody>

          </table>
        </div>
      </div>
    </>
  )
}
//rooms----------------------------------------------------------------------------------------------------------------------------------
export function Rooms() {
    const [rooms, setrooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchRooms = async () => {
        try {
          const response  = await axios.get('https://hotelwebsitebackend.onrender.com/api/room');
          setrooms(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching bookings:', error);
          setLoading(false);
          setError(error);
        }
      };
  
      fetchRooms();
    }, []);
  
    return (
      <>
        <div className="row">
          <div className="col-md-12">
            <h3>ROOMS</h3>
            {loading && (<Loader />)}
            <table className='table table-bordered table-dark'>
              <thead className='bs thead-dark'>
                  <tr>
                      <th>Room Id</th>
                      <th>Room Type</th>
                      <th>Rent</th>
                      <th>Max Count</th>
                      <th>Phone Number</th>
                      <th>Facility</th>
                  </tr>
              </thead>
               <tbody>
                 {
                       rooms.length > 0 && rooms.map(room => (
                      <tr key={room._id}>
                      <td>{room._id}</td>
                      <td>{room.roomType}</td>
                      <td>{room.rentperday}</td>
                      <td>{room.maximumMembers}</td>
                      <td>{room.phoneNo}</td>
                      <td>{room.description}</td>
                      </tr>))
                  }
              </tbody>
  
            </table>
          </div>
        </div>
      </>
    )
  }

  //registered users-----------------------------------------------------------------------------------------------------------------------
  export function Users(){
    const [users, setusers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response  = await axios.get('https://hotelwebsitebackend.onrender.com/api/getallusers');
            setusers(response.data);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching bookings:', error);
            setLoading(false);
            setError(error);
          }
        };
    
        fetchUsers();
      }, []);
    
    return(
        <div className="row">
            <div className="col-md-12">
                <h3>Users</h3>
                <table className='table table-dark table-bordered'>
                  <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Is Admin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users && (users.map(user=>{
                        return <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.isAdmin ? 'YES' : 'NO'}</td>
                        </tr>
                    }))}
                  </tbody>
                </table>
            </div>
        </div>
    )
  }
//add rooms----------------------------------------------------------------------------------------------------------------------------
 export function Addroom(){
  const[loading,setLoading]=useState(false);
  const[name,setname]=useState('')
  const[rentperday,setrentperday]=useState('')
  const[maximumMembers,setmaximumMembers]=useState('')
  const[description,setdescription]=useState('')
  const[phoneNo,setphoneNo]=useState('')
  const[roomType,setroomType]=useState('')
  const[img1,setimg1]=useState('')
  const[img2,setimg2]=useState('')
  const[img3,setimg3]=useState('')

  const addRoom=(async()=>{
   
   const newroom={
    name,
    rentperday,
    maximumMembers,
    description,
    phoneNo,
    roomType,
    imgurls:[img1,img2,img3]
   }
   console.log(newroom);

   try{
   setLoading(true)
   const result = await(axios.post('https://hotelwebsitebackend.onrender.com/api/addroom',newroom)).data
   console.log(result)
   setLoading(false)
   Swal.fire('Congrats',"Your New Room Added Successfully" , 'success').then(result=>{
    window.location.href='/room'
   })
   }catch(error){
   console.log(error)
   setLoading(false)
   Swal.fire('Oops',"Something Went Wrong",'error')
   }
})

  return(
    <div className="row">
      {loading && <Loader />}
      <div className="col-md-6 admininput">
        <input type="text" placeholder=' Room Name' value={name}  onChange={(e)=>{setname(e.target.value)}}/>
        <input type="number" placeholder=' Rent Per Day' value={rentperday} onChange={(e)=>{setrentperday(e.target.value)}} />
        <input type="text" placeholder=' Max Count' value={maximumMembers} onChange={(e)=>{setmaximumMembers(e.target.value)}}/>
        <input type="text" placeholder=' Description' value={description} onChange={(e)=>{setdescription(e.target.value)}}/>
        <input type="text" placeholder=' Phone No' value={phoneNo} onChange={(e)=>{setphoneNo(e.target.value)}}/>
       </div> 
       <div className="col-md-6 admininput">
       <input type="text" placeholder=' Room Type'  value={roomType} onChange={(e)=>{setroomType(e.target.value)}}/>
       <input type="text" placeholder=' Room Img 1' value={img1} onChange={(e)=>{setimg1(e.target.value)}}/>
       <input type="text" placeholder=' Room Img 2' value={img2} onChange={(e)=>{setimg2(e.target.value)}}/>
       <input type="text" placeholder=' Room Img 3' value={img3} onChange={(e)=>{setimg3(e.target.value)}}/>
       <div className="text-left">
        <button onClick={addRoom}>Add Room</button>
       </div>
       </div>
    </div>
  )
}
