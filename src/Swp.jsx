import React, { useRef, useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./Swp.css";

// // import required modules
// import { EffectCards } from "swiper";
import { EffectCards } from "swiper/modules";

import projidark from "./img/Screenshot160.png";
import projgoogle from "./img/projgoogle.png";
import projfigma from "./img/newPicture3.png";
import projport from "./img/newPicture2.png";
import DUcamp from "./img/Picture556.png";
import pn from './img/Picture54.png';

// import { useTypewriter,Cursor } from "react-simple-typewriter";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function Swp() {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, []);

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}

        className="mySwiper"
      > 
        <SwiperSlide style={{ backgroundImage: `url(${projfigma})` }}><h1>Dope</h1> <p>Project</p></SwiperSlide>
        <SwiperSlide style={{ backgroundImage: `url(${projidark})` }}><h1>iDark</h1> <p>Project</p></SwiperSlide>
        <SwiperSlide style={{ backgroundImage: `url(${pn})` }}><h1>Black Panda</h1> <p>Project</p></SwiperSlide>
        <SwiperSlide style={{ backgroundImage: `url(${projport})` }}><h1>Portfolio</h1> <p>Project</p></SwiperSlide>
        <SwiperSlide style={{ backgroundImage: `url(${DUcamp})` }}><h1>Darshan University</h1> <p>DU Campus</p></SwiperSlide>
      </Swiper>
    </>
  );
}
