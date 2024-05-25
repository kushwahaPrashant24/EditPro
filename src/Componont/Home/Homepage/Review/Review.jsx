import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Card from './Card';
import ReviewData from "./ReviewData";

function createCard(Reviews) {
  return (
    <Card
      key={Reviews.id} 
      review={Reviews.review}
      name= {Reviews.name}
    />
  );
}

function Review() {
  console.log(ReviewData);

  return (
    <div className="mt-28 mb-20">
      <div className=" mt-20">
      <center><h1 className="max-h-10  max-w-4xl sm:text-lg md:text-3xl  font-black text-center text-head2   mt-3 "> 30+ COMPANIES & Organisations TRUST EditQuasar</h1></center>
      </div>
      <Swiper
        slidesPerView={2} // default value
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
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {ReviewData.map((Reviews) => (
          <SwiperSlide key={Reviews.id} >
            <div className=" bg-Amber">
              {createCard(Reviews)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Review;
