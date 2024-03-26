import Card from "@/components/Card";
import { ChevronLeft, ChevronRight } from "@/components/Icons";
import { Controller, FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "./data";

export default function SectionExpected() {
  return (
    <>
      <div className="grid grid-cols-12 mb-5 gap-3">
        <h1 className="m-0 font-normal md:col-span-10 col-span-12">
          اولین نمایش مورد انتظار
        </h1>
        <button className="text-sm hover:text-primary max-md:col-span-6 text-start">
          مشاهده همه
        </button>
        <div className="max-md:col-span-6 flex justify-end">
          <button className="swiper-btn-next btn min-h-0 h-8 w-8 p-1 me-2 hover:bg-primary">
            <ChevronRight className="w-4 h-4" />
          </button>
          <button className="swiper-btn-prev btn min-h-0 h-8 w-8 p-1 hover:bg-primary">
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation, FreeMode]}
        freeMode
        spaceBetween={10}
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
          nextEl: ".swiper-btn-next",
          prevEl: ".swiper-btn-prev",
        }}
        loop
      >
        {data?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Card item={item} small />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
