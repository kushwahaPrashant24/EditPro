/*import React from "react";

function main() {
    return <>
        <div className="h-64  z-30 mt-20 flex justify-center flex-col text-center"  >
            <center><h1 className="max-h-10  max-w-2xl sm:text-lg md:text-3xl  font-black text-center text-head2   mt-3 "> 30+ COMPANIES TRUST EditQuasar</h1></center>
            <div className="flex justify-around mt-5 mb-4">
                <div className=" flex">
                <div className="w-36 min-h-36 mt-8 bg-white rounded-full"> </div>
                <div className="w-36 bg-yellow-5">fdjfd</div>
                </div>
                <div className=" flex">
                <div className="w-36 min-h-36 mt-8 bg-white rounded-full"> </div>
                <div className="w-36 bg-yellow-5">fdjfd</div>
                </div>
                <div className=" flex">
                <div className="w-36 min-h-36 mt-8 bg-white rounded-full"> </div>
                <div className="w-36 bg-yellow-5">fdjfd</div>
                </div>
                <div className=" flex">
                <div className="w-36 min-h-36 mt-8 bg-white rounded-full"> </div>
                <div className="w-36 bg-yellow-5">fdjfd</div>
                </div>      
            </div>
        </div>
    </>
}

export default main;*/

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function main() {
  return (
    <>
       <div className="h-64  z-30 mt-20 flex justify-center flex-col text-center"  >
            <center><h1 className="max-h-10  max-w-2xl sm:text-lg md:text-3xl  font-black text-center text-head2   mt-3 "> 30+ COMPANIES TRUST EditQuasar</h1></center>
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='h-96 w-36 relative '><div className='absolute'>sdjjfnsd</div></SwiperSlide>
        <SwiperSlide className='h-96 w-36'></SwiperSlide>
        <SwiperSlide className='h-96 w-36'></SwiperSlide>
        <SwiperSlide className='h-96 w-36'></SwiperSlide>
        <SwiperSlide className='h-96 w-36'></SwiperSlide>
        <SwiperSlide className='h-96 w-36'></SwiperSlide>
        <SwiperSlide className='h-96 w-36'></SwiperSlide>
        <SwiperSlide className='h-96 w-36'></SwiperSlide>
        <SwiperSlide className='h-96 w-36'></SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}