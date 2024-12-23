
import Image from '../../assets/img/houses/house1lg.png'
import React from 'react';

const Banner = () => {
  

  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
       
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-semibold leading-none mb-6">
  <span style={{ color: '#154D7C', fontFamily:'"Open-sans",sans-serif'}}>Rent</span> Your Dream Land With Us.
</h1>

          <p className='max-w-[680px] mb-8'>
            Welcome to PropertyConnectHub! Your trusted platform to
            connect landlords, agents, and care providers seamlessly.
          </p>
        </div>

        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={Image} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Banner;
