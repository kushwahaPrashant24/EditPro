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
    <div className="bg-white rounded-3xl border-2 border-zinc p-10">
      <Swiper
        slidesPerView={1} // default value
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
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
      >
        {ReviewData.map((Reviews) => (
          <SwiperSlide className='' key={Reviews.id} >
            <div className="">
              {createCard(Reviews)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Review;
