import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import CircularProgress from "@mui/joy/CircularProgress";

import { useFetchUserEventsComplete, useFetchUserEventsIncomplete } from "../../hooks/useFetchEventDetail";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//SummaryBar component displays a summary bar using Swiper for sliding.
export function SummaryBar({id}) {

  const { dataComplete } = useFetchUserEventsComplete(id);
  const { dataIncomplete } = useFetchUserEventsIncomplete(id);

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
            slidesPerView={3}
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
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {/* Slide 2: Daily Tasks */}
            <SwiperSlide>
              <div className="flex justify-center overflow-hidden">
                <CircularProgress
                  determinate
                  value={dataIncomplete.length / (dataComplete.length + dataIncomplete.length) * 100}
                  color="primary"
                  sx={{
                    "--CircularProgress-size": "100px",
                    "--CircularProgress-trackThickness": "12px",
                    "--CircularProgress-progressThickness": "12px",
                  }}
                >
                  {dataIncomplete.length} / {dataComplete.length + dataIncomplete.length}
                </CircularProgress>
                <div className="flex flex-col ml-4 items-start  justify-center">
                  <p className="font-medium text-md text-blue sm:[1.3rem] dark:text-orange">
                  Total Tasks: {dataComplete.length + dataIncomplete.length}
                  </p>
                  <p className="font-normal text-md text-blue sm:[1.3rem] dark:text-orange">
                    {dataIncomplete.length} Incompleted
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3: Weekly Tasks */}
            <SwiperSlide>
              <div className="flex justify-center overflow-hidden">
                <CircularProgress
                  determinate
                  value={dataComplete.length / (dataComplete.length + dataIncomplete.length) * 100}
                  color="primary"
                  sx={{
                    "--CircularProgress-size": "100px",
                    "--CircularProgress-trackThickness": "12px",
                    "--CircularProgress-progressThickness": "12px",
                  }}
                >
                  {dataComplete.length} / {dataComplete.length + dataIncomplete.length}
                </CircularProgress>
                <div className="flex flex-col ml-4 items-start  justify-center">
                  <p className="font-medium text-md text-blue sm:[1.3rem] dark:text-orange">
                  Total Tasks: {dataComplete.length + dataIncomplete.length}
                  </p>
                  <p className="font-normal text-md text-blue sm:[1.3rem] dark:text-orange">
                  {dataComplete.length} Completed
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
