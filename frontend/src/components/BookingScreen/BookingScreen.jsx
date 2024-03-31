import React, { useState, useEffect } from 'react';
import './BookingScreen.css';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import Swal from 'sweetalert2';
import moment from 'moment'; 

const BookingScreen = () => {
    const { roomid, startDate, endDate } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [rooms, setRooms] = useState([]);
    const [totalamount, setTotalAmount] = useState(0);
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const startdate = moment(startDate);
    const enddate = moment(endDate);
    const totaldays = moment.duration(enddate.diff(startdate)).asDays() + 1;
    useEffect(() => {
        if (!currentUser) {
            window.location.href = '/login';
        } else {
            // setLoading(true);
            fetchRoomDetails();
        }
    }, [currentUser, roomid, startDate, endDate,totaldays]);


    const fetchRoomDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/room/${roomid}`);
            if (!response.data || !response.data.length) {
                throw new Error('Room data not found');
            }
            const data = response.data;

            const availableRooms = data.filter(room => {
                if (Array.isArray(room.bookings)) {
                    for (const booking of room.bookings) {
                        const bookingStartDate = moment(booking.startDate);
                        const bookingEndDate = moment(booking.endDate);
                        if (startdate.isBetween(bookingStartDate, bookingEndDate) || enddate.isBetween(bookingStartDate, bookingEndDate)) {
                            return false;
                        }
                    }
                }
                return true;
            });

            setRooms(availableRooms);
            setTotalAmount(totaldays * availableRooms[0].rentperday);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setError(true);
            setLoading(false);
        }
    };

    const formatDateFn = (date) => {
        const selectedDate = new Date(date);
        const day = ("0" + selectedDate.getDate()).slice(-2);
        const month = ("0" + (selectedDate.getMonth() + 1)).slice(-2);
        const year = selectedDate.getFullYear().toString().slice(-2);
        return `${day}-${month}-${year}`;
    };

    const onToken = async (token) => {
        const room = rooms[0];
        const bookingDetails = {
            rooms: {
                name: room.roomType,
                _id: room._id
            },
            userid: currentUser._id,
            startDate: startDate,
            endDate: endDate,
            totalamount: totalamount,
            totaldays: totaldays,
            token: token
        };

        try {
            const result = await axios.post('http://localhost:5000/api/bookings', bookingDetails);
            Swal.fire('Congratulations', 'Your Room Booked Successfully', 'success').then(result => {
                window.location.href = '/profile';
            });
        } catch (error) {
            console.error(error);
            Swal.fire('Oops!', 'Something Went Wrong', 'error');
        }
    };

    return (
        <>
            <div className='m-5'>
                {loading ? (
                    <Loader />
                ) : rooms ? (
                    <>
                        {rooms.map((room, index) => (
                            <div key={index} className="row justify-content-center mt-5 bs">
                                <div className="col-md-5">
                                    <h1>{room && room.name}</h1>
                                    <h6 className='mb-3'><b>Vasanth Nagar,Bangaluru Karnatka,India</b></h6>
                                    <img src={room.imgurls[0]} className='bigimg' alt="Room" />
                                </div>

                                <div className="col-md-5">
                                    <div style={{ textAlign: 'right' }} className='mb-2'>
                                        <h4><b>BOOKING DETAILS</b></h4>
                                        <hr />
                                        <b>
                                            <p>Guest Name : {currentUser.name}</p>
                                            <p>From Date : {formatDateFn(startDate)}</p>
                                            <p>To Date : {formatDateFn(endDate)}</p>
                                            <p>Max Count : {room.maximumMembers}</p>
                                            <p>Room Type : {room.roomType}</p>
                                        </b>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <b>
                                            <h4><b>AMOUNT</b></h4>
                                            <hr />
                                            <p>Total days : {totaldays}</p>
                                            <p>Rent per Day : ₹ {room.rentperday}</p>
                                            <p>Total Amount: ₹ {totalamount}</p>
                                        </b>
                                    </div>

                                    <div style={{ float: 'right' }}>
                                        <StripeCheckout
                                            amount={totalamount * 100}
                                            token={onToken}
                                            currency='INR'
                                            stripeKey="pk_test_51OxYg7SGQJO75uZsnoMS4DeSY5PujdzAIClhZP7ygI2Ctt8cWnaTQuFaT7pjy2FRvQLzGyprzQ0vxUXVQjsJw0Uk00Z6iGIm3b"
                                        >
                                            <button className='btn btn-secondary'>Pay Now</button>
                                        </StripeCheckout>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <Error />
                )}
            </div><br />
        </>
    );
};

export default BookingScreen;




// const handleBooking = async () => {
//     const room = rooms[0]; // Assuming i am only dealing with one room here
//     const bookingDetails = {
//         rooms: {
//             name: room.roomType,
//             _id: room._id
//         },
//         userid: currentUser._id,
//         startDate,
//         endDate,
//         totalamount,
//         totaldays,
//     };
//     try {
//         const result = await axios.post('http://localhost:5000/api/bookings', bookingDetails);
//         console.log(result); // Log the result for debugging
//         alert("Room booked successfully!");
//     } catch (error) {
//         console.error(error);
//         alert("Something went wrong. Please try again later.");
//     }
// }

 // const fetchRoomDetails = async () => {
    //     try {
    //         const response = await fetch(`http://localhost:5000/api/room/${roomid}`);
    //         if (!response.ok) {
    //             throw new Error('Failed to fetch room data');
    //         }
    //         const data = await response.json();
    //         setRooms(data);
    //         setTotalAmount(totaldays * data[0].rentperday);
    //         setLoading(false);
    //     } catch (error) {
    //         console.error(error);
    //         setError(true);
    //         setLoading(false);
    //     }
    // };