import React from 'react';
import './Part2.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Part2 = () => {
  return (
    <>
    <div className="part2">
    <div className="section-part2">
      <p>our gallery</p>
     <div className="container-part2">
      <div className="slides-part2">
        <input type="radio" name='common' id='btn1' checked />
        <input type="radio" name='common' id='btn2'  />
        <input type="radio" name='common' id='btn3'  />
        <input type="radio" name='common' id='btn4'  />
        <input type="radio" name='common' id='btn5'  />
       
        <div className="image-slides first">
            <img src="https://cache.marriott.com/marriottassets/marriott/DEDJW/dedjw-guestroom-0030-hor-clsc.jpg?interpolation=progressive-bilinear&" alt="" />
        </div>
        <div className="image-slides">
            <img src="https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className="image-slides">
            <img src="https://images.pexels.com/photos/2883047/pexels-photo-2883047.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        
        <div className="image-slides">
            <img src="https://images.pexels.com/photos/2134224/pexels-photo-2134224.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div className="image-slides">
            <img src="https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>

       </div>
       <div className="navigator">
        <label htmlFor="btn1" className='bar'></label>
        <label htmlFor="btn2" className='bar'></label>
        <label htmlFor="btn3" className='bar'></label>
        <label htmlFor="btn4" className='bar'></label>
        <label htmlFor="btn5" className='bar'></label>
       </div>
     </div>
     </div>
     </div>
    </>
  )
}

export default Part2