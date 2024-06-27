// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { DefaultActivityCard } from "./DefaultActivityCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

import { useFetchAllEventDetail } from "../../hooks/useFetchEventDetail";
import { useParams } from "react-router-dom";
import {
  useFetchUserEventsComplete,
  useFetchUserEventsIncomplete,
} from "../../hooks/useFetchEventDetail";

/**
 * Assignments Component
 * This component is used to display a list of assignments in a carousel.
 * Each assignment is represented by a DefaultActivityCard.
 * The carousel supports autoplay and pagination.
 *
 **/
export function Assignments({ id }) {
  const { dataComplete } = useFetchUserEventsComplete(id);
  const { dataIncomplete } = useFetchUserEventsIncomplete(id);

  const { data } = useFetchAllEventDetail(id);
  // console.log(data);

  const areEvents = (items) => {
    if (items.length === 0) {
      return (
        <p className="text-center text-lg textfont-normal ml-2 text-blue">
          No events available
        </p>
      );
    }
  };

  const createEvents = (items) => {
    return items.map((item) => (
      <SwiperSlide>
        <DefaultActivityCard
          key={item.id}
          event_id={item.id}
          user_id={item.user_id}
          event_name={item.event_name}
          event_date_start={item.event_date_start_short}
          event_date_end={item.event_date_end_short}
          course_initials={item.course_initial}
        />
      </SwiperSlide>
    ));
  };

  return (
    <div className="swiper-assignments rounded-xl bg-white">
      <section className="m-4">
        <h5 className="text-lg font-medium text-blue text-center">
          Assignments
        </h5>
      </section>

      <div className="flex flex-col items-center  bg-white border-[3px] border-bg-main m-3 rounded-xl">
        <div className="relative p-4">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-green bg-light-gray">
                Done
              </span>
            </div>
            <div className="text-right">
              <span className="text-sm font-semibold inline-block text-green">
                {dataComplete.length}/
                {dataComplete.length + dataIncomplete.length}
              </span>
            </div>
          </div>
          <div className="flex rounded-full w-72 sm:w-[20rem] h-2 bg-light-gray">
            <div
              style={{
                width: `${
                  (dataComplete.length /
                    (dataComplete.length + dataIncomplete.length)) *
                  100
                }%`,
              }}
              className="rounded-full bg-green"
            ></div>
          </div>
        </div>
      </div>
      <div className="w-full h-[38.5rem]">
        {areEvents(data)}
        {/* The Swiper component with various props */}

        <Swiper
          direction={"vertical"}
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
              slidesPerView: 5,
              spaceBetween: 10,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {createEvents(data)}
        </Swiper>
      </div>
    </div>
  );
}
