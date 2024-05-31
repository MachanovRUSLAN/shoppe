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
    <div className="py-3 z-10">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper relative"
      >
        <SwiperSlide>
          <img className="lg:flex md:flex hidden" src="img/Img 01.png" alt="" />
          <img
            className="lg:hidden md:hidden  flex w-[100%]"
            src="img/reponsiveSlideImg.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className="lg:flex md:flex hidden" src="img/Img 01.png" alt="" />
          <img
            className="lg:hidden md:hidden  flex w-[100%]"
            src="img/reponsiveSlideImg.png"
            alt=""
          />
        </SwiperSlide>
        <div className="slide-cont absolute lg:top-[40%] top-[50%] lg:left-10 left-4 z-50">
          <h1 className="lg:text-[33px] text-[20px]  text-[#FFFFFF]">
            Gold Big Hoops
          </h1>
          <p className="lg:text-[26px] text-[19px]  text-[#FFFFFF] mt-1">
            $ 68.000
          </p>
          <div className="lg:w-[193px] w-[120px] lg:h-[53px] h-[30px] rounded-[5px] lg:mt-10 mt-3 border flex justify-center items-center border-white slide-but">
            <button className="w-[full] text-[#FFFFFF]">Wiew Product</button>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default HomeSlide;
