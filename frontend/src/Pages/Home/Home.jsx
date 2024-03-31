import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero';
import RoomSwiper from '../../components/RoomSwiper/RoomSwiper';
import MiniHero from '../../components/MiniHero/MiniHero';
import Part from '../../components/Part1/Part';
import Part3 from '../../components/part3/Part3';
import Part4 from '../../components/part4/Part4';
// import axios from "axios";

const Home = () => {

  return (
    <>
    <div>
        <Hero />
        <Part/>
        <Part3 />
        <Part4 />
        <MiniHero/>
    </div>
    </>
  )
}

export default Home