import React from 'react';
import './Mycard.css';

const Mycard = (props) => {
  return (
    <>
    <div className='mycard'><img src={props.imgg} alt={props.cardno} /></div>
    </>
  )
}

export default Mycard