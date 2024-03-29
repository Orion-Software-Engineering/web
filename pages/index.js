import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import Chat from "../components/home/Chat";
import Hero from "../components/home/Hero";
import Header from "../components/home/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import NoSSR from "react-no-ssr";

export default function Swipe() {
  return (

    <div className="styles.container">
      <div className=""></div>
      <div>
        <Header />
        <Swiper                                 //implement home screen slider
          modules={[EffectFade, Autoplay]}
          navigation
          autoplay={{ delay: 6000 }}
          effect={"fade"}
          speed={1000}
          slidesPerView={1}
          loop
        >
          <NoSSR>
          </NoSSR>
          <SwiperSlide>
            <Hero />
          </SwiperSlide>
        </Swiper>
        <Chat />
      </div>
    </div>
  );
}
