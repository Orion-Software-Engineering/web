import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Chat from "../components/Landing Page/Chat";
import Question from "../components/Landing Page/Question";
import Hero from "../components/Landing Page/Hero";
import Headerswipe from "../components/Landing Page/Header";
import "swiper/css/autoplay";
import Find from "../components/Landing Page/Find";

export default function Swipe() {
  return (
    <div className="styles.container">
      <div className="">
        <Headerswipe />
      </div>
      <div>
        <Swiper
          modules={[Navigation, EffectFade, Autoplay]}
          navigation
          autoplay={{ delay: 6000 }}
          effect={"fade"}
          speed={1000}
          slidesPerView={1}
          loop
        >
          <SwiperSlide>
            <Hero />
          </SwiperSlide>
          <SwiperSlide>
            <Chat />
          </SwiperSlide>
          <SwiperSlide>
            <Question />
          </SwiperSlide>
          <SwiperSlide>
            <Find />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
