import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import CircularProgress from '@mui/joy/CircularProgress';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles-summary.css';

// Import required modules

export function SummaryBar() {
    return (
        <>
            <div className='swiper-summary text-center'>
                <div className='w-full h-52'>
                    <Swiper
                        direction={'horizontal'}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={4}
                        spaceBetween={30}
                        modules={[Pagination]}
                        className="mySwiper"
                        breakpoints={{
                            // when window width is >= 320px
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            // when window width is >= 480px
                            480: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 4,
                                spaceBetween: 30
                            }
                        }}

                    >

                        <SwiperSlide>

                            <div className='flex flex-col justify-center'>

                                <div className='grid grid-cols-5 gap-5 grow px-2'>
                                    <div className='h-[50px] w-[60px] bg-[#34798e]/50 rounded-l-full'></div>
                                    <div className='h-[50px] w-[60px] bg-[#34798e]/60' id='marca'></div>
                                    <div className='h-[50px] w-[60px] bg-[#34798e]/70 '></div>
                                    <div className='h-[50px] w-[60px] bg-[#34798e]/80 '></div>
                                    <div className='h-[50px] w-[60px] bg-[#34798e] rounded-r-full'></div>
                                </div>

                            <p className="font-medium text-[1.7rem] text-blue sm:[1.3rem] ml-24">Carga de Trabajo</p>
                            </div>                       


                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex justify-center overflow-hidden'>
                                <CircularProgress determinate value={33.67} color="primary"
                                    sx={{
                                        "--CircularProgress-size": "120px",
                                        "--CircularProgress-trackThickness": "12px",
                                        "--CircularProgress-progressThickness": "12px"
                                    }}
                                >
                                    2 / 3
                                </CircularProgress>
                                <div className='flex flex-col ml-4 items-start  justify-center'>
                                    <p className="font-medium text-[1.7rem] text-blue sm:[1.3rem]">Tareas del Día</p>
                                    <p className="font-normal text-[1.7rem] text-blue sm:[1.3rem]">Completadas</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex justify-center overflow-hidden'>
                                <CircularProgress determinate value={10.67} color="primary"
                                    sx={{
                                        "--CircularProgress-size": "120px",
                                        "--CircularProgress-trackThickness": "12px",
                                        "--CircularProgress-progressThickness": "12px"
                                    }}
                                >
                                    2 / 10
                                </CircularProgress>
                                <div className='flex flex-col ml-4 items-start  justify-center'>
                                    <p className="font-medium text-[1.7rem] text-blue sm:[1.3rem]">Tareas de la Semana</p>
                                    <p className="font-normal text-[1.7rem] text-blue sm:[1.3rem]">Completadas</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative w-full h-full">
                                <img className="w-full h-full object-cover rounded-[1rem]" src="./src/assets/imgs/dia-internacional-trabajadores-2022-celebra-domingo-1-mayo_98.webp" alt="" />
                                <div className="absolute inset-0 bg-black opacity-25 rounded-[1rem]"></div>
                                <div className="absolute bottom-2 left-2 text-white">
                                    <p className="text-[1.7rem]  sm:[1.3rem]">01 de mayo</p>
                                    <p className="text-[1.7rem]  sm:[1.3rem]">Día del Trabajador</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>


        </>
    );
}
