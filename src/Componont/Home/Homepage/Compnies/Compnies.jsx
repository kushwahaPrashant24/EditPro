import Cards from "./Cards";
import CompaniesConst from "./CompaniesConst.jsx"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function createCard(Regiment) {
  return (
    <Cards
      key={Regiment.id}
      name={Regiment.name}
      img={Regiment.img}
      active={Regiment.active}
      center={Regiment.center}
      butt={Regiment.butt}
    />
  );
}

function Compnies() {
  console.log(CompaniesConst);

  return (
    <div className="mt-28 mb-24">
      <div className="mb-10 mt-20">
      <center><h1 className="max-h-10  max-w-2xl sm:text-lg md:text-3xl  font-black text-center text-head2   mt-3 "> 30+ COMPANIES & Organisations TRUST EditQuasar</h1></center>
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
        {CompaniesConst.map((regiment) => (
          <SwiperSlide key={regiment.id} className='h-60 mt-16'>
            <div className="App">
              {createCard(regiment)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Compnies;
