/*import React from "react";

function Review() {
    return <>
        <div className="h-96 w-full bg-yellow-500 flex flex-col items-center">
        <h1 className="font-black text-4xl">What Our Clients Say</h1>
           <div className="h-80 w-4/5 bg-yellow-900"></div>
        </div>
    </>
}

export default Review;*/

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Review() {
  return (
    <>
     <div className="h-96 w-full  flex flex-col items-center mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-10">What Our Clients Say</h1>
           
        
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='h-96 w-36'>dfnsdf</SwiperSlide>
        
      </Swiper>
      </div>
    </>
  );
}