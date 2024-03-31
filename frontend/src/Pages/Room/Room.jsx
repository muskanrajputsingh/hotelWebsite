import React, { useState, useEffect } from 'react';
import './Room.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Loader/Error';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Room = () => {
   useEffect(()=>{
    AOS.init({duration:1800})
    })
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [showModal, setShowModal] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [duplicateRooms, setDuplicateRooms] = useState([]);
  const [searchkey, setSearchKey] = useState('');
  const [type, setType] = useState('all'); // Correct initialization of type state

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:5000/api/room')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch room data');
        }
        return response.json();
      })
      .then(data => {
        setRooms(data);
        setDuplicateRooms(data);
        setLoading(false);
        setShowModal(Array(data.length).fill(false));
      })
      .catch(err => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  const handleShow = index => {
    const newShowModal = [...showModal];
    newShowModal[index] = true;
    setShowModal(newShowModal);
  };

  const handleClose = index => {
    const newShowModal = [...showModal];
    newShowModal[index] = false;
    setShowModal(newShowModal);
  };

  const changestart = startDate => {
    setStartDate(startDate);
  };

  const changeEnd = endDate => {
    setEndDate(endDate);
  };

  const filterAvailableRooms = () => {
    const filteredRooms = duplicateRooms.filter(room => {
      for (const booking of room.currentbookings) {
        const bookingStartDate = moment(booking.startDate, 'DD-MM-YYYY');
        const bookingEndDate = moment(booking.endDate, 'DD-MM-YYYY');
        const selectedStartDate = moment(startDate).startOf('day');
        const selectedEndDate = moment(endDate).endOf('day');

        if (
          (selectedStartDate.isBetween(bookingStartDate, bookingEndDate, undefined, '[]') ||
            selectedEndDate.isBetween(bookingStartDate, bookingEndDate, undefined, '[]')) ||
          (bookingStartDate.isBetween(selectedStartDate, selectedEndDate, undefined, '[]') ||
            bookingEndDate.isBetween(selectedStartDate, selectedEndDate, undefined, '[]'))
        ) {
          return false; // Room is booked for the selected date range
        }
      }
      return true; // Room is available
    });
    setRooms(filteredRooms);
  };

  useEffect(() => {
    filterAvailableRooms();
  }, [startDate, endDate]);

  const filterBySearch = () => {
    const tempRooms = duplicateRooms.filter(room => room.roomType.toLowerCase().includes(searchkey.toLowerCase()));
    setRooms(tempRooms);
  };

  const filterByType = (e) => {
    const selectedType = e.target.value; // Get selected type from event
    setType(selectedType); // Update type state with selected value
    if (selectedType !== 'all') {
      const tempRooms = duplicateRooms.filter(room => room.roomType.toLowerCase() === selectedType.toLowerCase());
      setRooms(tempRooms);
    } else {
      setRooms(duplicateRooms);
    }
  };

  return (
    <div className='m-5'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="row mb-5 bs table-det">
            <div className="col-md-12">
              <div className="det">
                <div className="det1">
                  <label>Start Date:</label>
                  <DatePicker id="datepicker" onChange={changestart} selected={startDate} dateFormat="dd/MM/yyyy" />
                </div>
                <div className="det2">
                  <label>End Date:</label>
                  <DatePicker onChange={changeEnd} dateFormat="dd/MM/yyyy" selected={endDate} />
                </div>
                <div className="det3">
                  <label>Search Rooms:</label>
                  <input style={{ width: '400px' }} type='text' value={searchkey} onChange={(e) => setSearchKey(e.target.value)} onKeyUp={filterBySearch} placeholder='search rooms' />
                </div>
                <div className="det4">
                  <label>Room Type:</label>
                  <select style={{ height: '27px', width: '140px' }} value={type} onChange={filterByType}>
                    <option value="all">All</option>
                    <option value="delux">Delux</option>
                    <option value="economy">Economy</option>
                    <option value="royal">Royal</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {rooms.map((room, index) => (
            <div key={index} className="projcard-container mt-3">
              <div className="projcard projcard-blue room-box" data-aos="fade-right">
                <div className="projcard-innerbox">
                  <img className="projcard-img" src={room.imgurls[0]} alt={room.roomType} />
                  <div className="projcard-textbox">
                    <div className="projcard-title">{room.roomType}</div>
                    <div className="projcard-subtitle">₹ {room.rentperday}</div>
                    <div className="projcard-bar"></div>
                    <div className="projcard-description">{room.description}</div>
                    <div className="projcard-tagbox">
                      <span className="projcard-tag">{room.phoneNo}</span>
                      <span className="projcard-tag">{room.maximumMembers}</span>
                    </div>
                    <div className='projcard-btn'>
                      {(startDate && endDate) && (
                        <button><Link to={`/bookingScreen/${room._id}/${startDate}/${endDate}`}>Book Now</Link></button>
                      )}
                    </div>
                    <div className='projcard-btn2'>
                      <Button onClick={() => handleShow(index)}>View Details</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {rooms.map((room, index) => (
            <Modal key={index} show={showModal[index]} onHide={() => handleClose(index)} size="lg">
            <Modal.Header>
             <Modal.Title>{room.roomType}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Carousel>
            {room.imgurls.map((url, imgIndex) => (
            <Carousel.Item key={imgIndex}>
            <img src={url} className="d-block w-100 bigimg"/>
            </Carousel.Item>
            ))}
           </Carousel>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => handleClose(index)}>Close</Button>
            </Modal.Footer>
          </Modal>          
          ))}
        </>
      )}
    </div>
  );
}

export default Room;
