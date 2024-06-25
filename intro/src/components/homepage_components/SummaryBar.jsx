import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import CircularProgress from "@mui/joy/CircularProgress";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//SummaryBar component displays a summary bar using Swiper for sliding.
export function SummaryBar() {
  return (
    <>
      <div className="swiper-summary text-center">
        <div className="w-full h-36">
          <Swiper
            direction={"horizontal"}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView={4}
            spaceBetween={30}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {/* Slide 1: Workload */}
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <div className="flex gap-1 ">
                  <div className="h-8 w-10 bg-[#34798e]/50 rounded-l-full dark:bg-orange/50"></div>
                  <div
                    className="h-8 w-10 bg-[#34798e]/60 dark:bg-orange/60"
                    id="marca"
                  ></div>
                  <div className="h-8 w-10 bg-[#34798e]/70 dark:bg-orange/70"></div>
                  <div className="h-8 w-10 bg-[#34798e]/80 dark:bg-orange/80"></div>
                  <div className="h-8 w-10 bg-[#34798e] rounded-r-full dark:bg-orange"></div>
                </div>

                <p className="font-medium text-md text-blue sm:[1.3rem] dark:text-orange">
                  Workload
                </p>
              </div>
            </SwiperSlide>

            {/* Slide 2: Daily Tasks */}
            <SwiperSlide>
              <div className="flex justify-center overflow-hidden">
                <CircularProgress
                  determinate
                  value={60.67}
                  color="primary"
                  sx={{
                    "--CircularProgress-size": "100px",
                    "--CircularProgress-trackThickness": "12px",
                    "--CircularProgress-progressThickness": "12px",
                  }}
                >
                  2 / 3
                </CircularProgress>
                <div className="flex flex-col ml-4 items-start  justify-center">
                  <p className="font-medium text-md text-blue sm:[1.3rem] dark:text-orange">
                    Tasks of the Day
                  </p>
                  <p className="font-normal text-md text-blue sm:[1.3rem] dark:text-orange">
                    Completed
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3: Weekly Tasks */}
            <SwiperSlide>
              <div className="flex justify-center overflow-hidden">
                <CircularProgress
                  determinate
                  value={60.67}
                  color="primary"
                  sx={{
                    "--CircularProgress-size": "100px",
                    "--CircularProgress-trackThickness": "12px",
                    "--CircularProgress-progressThickness": "12px",
                  }}
                >
                  2 / 3
                </CircularProgress>
                <div className="flex flex-col ml-4 items-start  justify-center">
                  <p className="font-medium text-md text-blue sm:[1.3rem] dark:text-orange">
                  Tasks of the Week
                  </p>
                  <p className="font-normal text-md text-blue sm:[1.3rem] dark:text-orange">
                  Completed
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4: Special Day */}
            <SwiperSlide>
              <div className="relative w-full h-full">
                <img
                  className="w-full h-full object-cover rounded-[1rem]"
                  src="./src/assets/imgs/dia-internacional-trabajadores-2022-celebra-domingo-1-mayo_98.webp"
                  alt=""
                />
                <div className="absolute inset-0 bg-black opacity-25 rounded-[1rem]"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <p className="text-md  sm:[1.3rem]">May 1</p>
                  <p className="text-md  sm:[1.3rem]">Labor Day</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
