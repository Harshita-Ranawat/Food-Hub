import React from 'react';
import {Banner1,Banner2} from "../images/images.js";
const images=[Banner1,Banner2];

const Header = ({ title, image, type }) => {
    return (
      <div className='w-full h-[100vh]'>
        <div className='relative w-full h-full'>
          <img src={image ?? images[Math.floor(Math.random() * images.length)]}
            alt='Hero Image'
            className='w-full h-full object-cover'
          />
        </div>
  
        <div className='absolute w-full h-full mt-[200px] top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4 '>
          <h1 className='text-white text-4xl md:text-5xl font-bold text-center'>{title}</h1>
          {
            type && (
              <p className='text-sm mt-4 text-center text-red-500 bg-black px-6 py-4 rounded-full '>Welcome to FoodHub, your passport to culinary adventures!
                <br className='hidden md:block' /> Discover a treasure trove of
                delectable food from around the globe.</p>
            )
          }
        </div>
      </div>
    )
  }
  
  export default Header
