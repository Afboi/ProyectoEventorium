// Importing necessary libraries and components
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ActivityCard } from "./ActivityCard";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

export function SwiperTasks() {
  return (
    <>
      {/* A div container for the swiper tasks */}
      <div className="swiper-tasks rounded-xl bg-white  pt-4 mt-4">
        {/* A heading for the swiper tasks */}

        <h5 className="text-lg font-medium text-blue text-center">
          Actividades
        </h5>

        <div className="w-full h-96">
          {/* The Swiper component with various props */}

          <Swiper
            direction={"horizontal"}
            pagination={{
              clickable: true,
            }}
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
                slidesPerView: 4,
                spaceBetween: 20,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {/* The SwiperSlide component */}
            <SwiperSlide>
              {/* A section for the task details */}
              <ActivityCard/>
            </SwiperSlide>
            <SwiperSlide>
              {/* A section for the task details */}
              <ActivityCard/>
            </SwiperSlide>
            <SwiperSlide>
              {/* A section for the task details */}
              <ActivityCard/>
            </SwiperSlide>
            <SwiperSlide>
              {/* A section for the task details */}
              <ActivityCard/>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
