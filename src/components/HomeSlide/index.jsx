import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

function HomeSlide() {
  return (
    <div className="py-2">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="img/Img 01.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/Img 01.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/Img 01.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomeSlide;
