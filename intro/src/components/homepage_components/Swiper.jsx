import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
// Import required modules

export function SwiperTasks() {
    return (
        <>
            <div className='swiper-tasks rounded-xl bg-bg-main-component  pt-4 mt-4'>
            
                    <h5 className='text-lg font-medium text-blue text-center'>Actividades</h5>
                
                <div className='w-full h-96'>

                    <Swiper
                        direction={'horizontal'}
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
                                spaceBetween: 10
                            },
                            // when window width is >= 480px
                            480: {
                                slidesPerView: 4,
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
                            <section className='overflow-hidden text-left w-full my-2'>
                                <div className='flex items-center my-2'>
                                    <div className='flex items-center'>
                                        <div className='flex bg-blue w-16 h-14 rounded-lg justify-center items-center'>
                                            <svg width="33" height="36" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25.2852 7.94359C25.2852 7.94359 25.2852 7.94359 25.2852 7.83026L25.1963 7.61776C25.1653 7.57267 25.1306 7.53003 25.0924 7.49026C25.0528 7.43028 25.0081 7.37344 24.959 7.32026L24.8255 7.22109L24.5882 7.10776L13.4646 0.548589C13.2289 0.407867 12.9565 0.333252 12.6785 0.333252C12.4005 0.333252 12.1282 0.407867 11.8924 0.548589L0.857853 7.10776L0.72437 7.22109L0.590887 7.32026C0.541723 7.37344 0.497086 7.43028 0.457404 7.49026C0.419275 7.53003 0.384556 7.57267 0.353584 7.61776L0.264595 7.83026C0.264595 7.83026 0.264595 7.83026 0.264595 7.94359C0.250018 8.06597 0.250018 8.18954 0.264595 8.31192V20.6936C0.264091 20.9343 0.327831 21.1712 0.449797 21.3819C0.571764 21.5926 0.747933 21.7702 0.961673 21.8978L12.0853 28.4569C12.1537 28.4973 12.229 28.5261 12.3077 28.5419C12.3077 28.5419 12.3819 28.5419 12.4264 28.5419C12.6773 28.6179 12.9467 28.6179 13.1976 28.5419C13.1976 28.5419 13.2718 28.5419 13.3163 28.5419C13.395 28.5261 13.4703 28.4973 13.5387 28.4569L24.5882 21.8978C24.8019 21.7702 24.9781 21.5926 25.1 21.3819C25.222 21.1712 25.2857 20.9343 25.2852 20.6936V8.31192C25.2998 8.18954 25.2998 8.06597 25.2852 7.94359ZM11.2399 24.7169L3.08257 19.9003V10.8619L11.2399 15.6644V24.7169ZM12.723 13.2136L4.4174 8.31192L12.723 3.42442L21.0286 8.31192L12.723 13.2136ZM22.3635 19.9003L14.2062 24.7169V15.6644L22.3635 10.8619V19.9003Z" fill="white" />
                                            </svg>
                                        </div>
                                        <p class="font-normal text-md ml-2 text-blue dark:text-gray-400">Universidad</p>
                                    </div>

                                </div>

                                <p class="font-medium text-lg text-blue my-2 dark:text-gray-400">Investigación I</p>

                                <p class="font-light text-sm text-blue my-2 dark:text-gray-400">Desarrollo de Aplicaciones Interactivas</p>

                                <p class="font-light text-sm text-blue my-2 dark:text-gray-400">Oct 30</p>
                                <button type="submit" className="w-full text-white bg-blue hover:bg-light-gray hover:text-blue focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm py-4 text-center ">Visualizar</button>

                            </section>

                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>


        </>
    );
}
