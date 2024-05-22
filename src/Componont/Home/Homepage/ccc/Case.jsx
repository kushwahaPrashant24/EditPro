import Card from "./Card";
import Const from "./Const";
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function createCard(Regiment) {
  return (
    <Card
      key={Regiment.id}
      name={Regiment.name}
      img={Regiment.img}
      active={Regiment.active}
      center={Regiment.center}
      butt={Regiment.butt}
    />
  );
}

function Army() {
  console.log(Const);

  return (
    <div className="mt-20 mb-20">
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
      {Const.map((regiment) => (
        <SwiperSlide key={regiment.id} className='h-96 w-36'>
          <div className="App">
            {createCard(regiment)}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
}

export default Army;
