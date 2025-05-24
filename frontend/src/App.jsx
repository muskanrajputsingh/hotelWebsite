import './index.css'
import './App.css';
import { Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Footer from './components/Footer/Footer';
import About from './Pages/About/About';
import Room from './Pages/Room/Room';
import FacilityCard from './components/FacilityCard/FacilityCard';
import Contact from './Pages/Contact/Contact';
import Registration from './Pages/Registration/Registration';
import BookingScreen from './components/BookingScreen/BookingScreen';
import Attraction from './Pages/Attraction/Attraction';
import Gallery from './Pages/Gallery/Gallery';
import Login from './Pages/Login/Login';
import Profile from './components/Profile/Profile';
import Admin from './Pages/Admin/Admin';
import RoomSwiper from './components/RoomSwiper/RoomSwiper';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}  />
        <Route path='/room' element={<Room />} />
        <Route path='/facility' element={<FacilityCard />} />
        <Route path='/about' element={<About />}  />
        <Route path='/contact' element={<Contact />}  />
        <Route path='/attraction' element={<Attraction />}  />
        <Route path='/gallery' element={<Gallery />}  />
        <Route path='/registration' element={<Registration />}  />
        <Route path='/bookingScreen/:roomid/:startDate/:endDate' exact element={<BookingScreen />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/profile' exact element={<Profile />} />
        <Route path='/admin' exact element={<Admin />} />
        <Route path='/roomswiper' exact element={<RoomSwiper />} />
      </Routes>
    <Footer />
     
    </>
  )
}

export default App
