import Card from "@/components/Card";
import Image from "next/image";
import { useState } from "react";
import { Controller, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "./data";

// Import Swiper styles
import { ArrowLeftLong, ArrowRightLong } from "@/components/Icons";
import "swiper/css";
import "swiper/css/effect-fade";

type Props = {
  setBackground?: (e: string) => void;
};

export default function SectionHome({ setBackground }: Props) {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  return (
    <>
      <div className="flex justify-between mb-4">
        <h1 className="m-0 font-normal">
          <b>اقلام جدید</b> این فصل
        </h1>
        <div>
          <button className="swiper-button-next inline-flex items-center justify-center w-8 h-8 hover:text-white me-2 py-1 opacity-65 hover:opacity-100">
            <ArrowRightLong />
          </button>
          <button className="swiper-button-prev inline-flex items-center justify-center p-0 w-8 h-8 py-1 opacity-65 hover:opacity-100">
            <ArrowLeftLong />
          </button>
        </div>
      </div>
      <Swiper
        modules={[EffectFade, Controller]}
        effect="fade"
        slidesPerView={1}
        loop
        onSwiper={setControlledSwiper}
        className="!absolute top-0 left-0 right-0 bottom-0 before:bg-base-100/95 before:absolute before:right-0 before:left-0 before:top-0 before:bottom-0 !-z-[1] before:z-[2]"
      >
        {data?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <figure className="w-full h-full relative rounded-md m-0 group">
                <Image
                  src={item.imgCover}
                  alt={item.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-md"
                />
              </figure>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        modules={[Navigation, Controller]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop
        // centeredSlides
        controller={{ control: controlledSwiper }}
        className="!z-10"
      >
        {data?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Card item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
