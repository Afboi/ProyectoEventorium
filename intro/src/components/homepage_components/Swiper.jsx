// Importing necessary libraries and components
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ActivityCard } from "./ActivityCard";

import { useFetchAllEventDetail } from "../../hooks/useFetchEventDetail";


import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

export function SwiperTasks({id}) {

  const { data } = useFetchAllEventDetail(id);
  console.log('Soy la data de eventos',data);

  const createEvents = (items) => {
    return items.map( item => 
      <SwiperSlide>
        <ActivityCard 
        key={item.id}
        event_id={item.event_id}
        user_id={item.user_id}
        event_name={item.event_name}
        event_date_start={item.event_date_start_short}
        event_date_end={item.event_date_end_short}
        course_name={item.course_name}
        />
      </SwiperSlide>    
    )
}

  return (
    <>
      {/* A div container for the swiper tasks */}
      <div className="swiper-tasks rounded-xl bg-white  pt-4 mt-4">
        {/* A heading for the swiper tasks */}

        <h5 className="text-lg font-medium text-blue text-center">
          Activities
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
            {createEvents(data)}
          </Swiper>
        </div>
      </div>
    </>
  );
}
