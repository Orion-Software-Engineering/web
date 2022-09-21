import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import Chat from "../components/home/Chat";
import Question from "../components/home/Question";
import Hero from "../components/home/Hero";
import Header from "../components/home/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";


export default function Swipe() {
  return (
    <div className="styles.container">
      <div className=""></div>
      <div>
        <Swiper
          modules={[EffectFade, Autoplay]}
          navigation
          autoplay={{ delay: 6000 }}
          effect={"fade"}
          speed={1000}
          slidesPerView={1}
          loop
        >
          <SwiperSlide>
            <Header />
            <Hero />
          </SwiperSlide>
          <SwiperSlide>
            <Header />
            <Chat />
          </SwiperSlide>
          <SwiperSlide>
            <Header />
            <Question />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
