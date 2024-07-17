import React from 'react';
import MainVid from '../assets/video/vid1.mp4'
import Hero from '../components/Hero/Hero';

const Home = () => {
  return (
   <>
   <div>
    <div className='h-[700px]'>
    <video 
      autoPlay
      loop
      muted
      className='absolute right-0 top-0 h-[700px] 
      w-full object-cover z-[-1]'>
        <source src={MainVid} type='video/mp4' />
      </video>
      <Hero />
    </div>
   </div>
   </>
  )
}

export default Home;
