"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import { SwiperProps } from "@/types/swiper";
import Image from "next/image";
import SwiperCore, { Autoplay } from "swiper"
const SwiperComponent = (props: SwiperProps): JSX.Element => {

  SwiperCore.use([Autoplay])

  return (
    <Swiper
      spaceBetween={props.config.spaceBetween}
      // autoplay={{
      //   delay: 1111,
      // }}
      breakpoints={{
        575: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        }
      }}
    >
      {props.dataSwipes.map((item, i) => {
        return (<SwiperSlide key={i}>
          <div className="items-center justify-center flex-col flex w-full">
            <div className="h-[220px] md:h-[240] sm:h-[250] w-full relative overflow-hidden bg-white rounded-md wow fadeInUp flex items-center justify-center">
              <Image src={item.image} alt="img" fill className=""/>
            </div>
            <div className="text-base font-medium text-body-color flex justify-center lg:py-4 break-all">{ item.description }</div>
          </div>
        </SwiperSlide>)
      })}
    </Swiper>
  );
};

export default SwiperComponent
