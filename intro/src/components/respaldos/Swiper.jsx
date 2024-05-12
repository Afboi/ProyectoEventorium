import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
// Import required modules

export function SwiperTasks() {
    return (
        <>
            <div className='rounded-xl bg-bg-main-component shadow-secondary text-center'> 

            <h5 className='text-lg font-medium ml-3 text-primary-900'>Actividades</h5>
                <div className='w-full h-52'>
                    
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
                            <section className='overflow-hidden text-left'>
                                <p class="font-light text-md text-gray-700 dark:text-gray-400">Oct 30</p>
                                <p class="font-medium text-lg text-gray-700 dark:text-gray-400">Investigación I</p>
                                <p class="font-normal text-gray-700 dark:text-gray-400">Desarrollo de Aplicaciones Interactivas</p>
                            </section>
                            <button type="submit" className="self-start w-14 h-14 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-full">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12H15" stroke="#ffffff" stroke-width="1.584" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 9L12 15" stroke="#ffffff" stroke-width="1.584" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <section className='overflow-hidden text-left'>
                                <p class="font-light text-md text-gray-700 dark:text-gray-400">Oct 30</p>
                                <p class="font-medium text-lg text-gray-700 dark:text-gray-400">Investigación I</p>
                                <p class="font-normal text-gray-700 dark:text-gray-400">Desarrollo de Aplicaciones Interactivas</p>
                            </section>
                            <button type="submit" className="self-start w-14 h-14 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-full">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12H15" stroke="#ffffff" stroke-width="1.584" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 9L12 15" stroke="#ffffff" stroke-width="1.584" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <section className='overflow-hidden text-left'>
                                <p class="font-light text-md text-gray-700 dark:text-gray-400">Oct 30</p>
                                <p class="font-medium text-lg text-gray-700 dark:text-gray-400">Investigación I</p>
                                <p class="font-normal text-gray-700 dark:text-gray-400">Desarrollo de Aplicaciones Interactivas</p>
                            </section>
                            <button type="submit" className="self-start w-14 h-14 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-full">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12H15" stroke="#ffffff" stroke-width="1.584" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 9L12 15" stroke="#ffffff" stroke-width="1.584" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <section className='overflow-hidden text-left'>
                                <p class="font-light text-md text-gray-700 dark:text-gray-400">Oct 30</p>
                                <p class="font-medium text-lg text-gray-700 dark:text-gray-400">Investigación I</p>
                                <p class="font-normal text-gray-700 dark:text-gray-400">Desarrollo de Aplicaciones Interactivas</p>
                            </section>
                            <button type="submit" className="self-start w-14 h-14 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-full">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12H15" stroke="#ffffff" stroke-width="1.584" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 9L12 15" stroke="#ffffff" stroke-width="1.584" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <section className='overflow-hidden text-left'>
                                <p class="font-light text-md text-gray-700 dark:text-gray-400">Oct 30</p>
                                <p class="font-medium text-lg text-gray-700 dark:text-gray-400">Investigación I</p>
                                <p class="font-normal text-gray-700 dark:text-gray-400">Desarrollo de Aplicaciones Interactivas</p>
                            </section>
                            <button type="submit" className="self-start w-14 h-14 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-full">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12H15" stroke="#ffffff" stroke-width="1.584" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 9L12 15" stroke="#ffffff" stroke-width="1.584" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <section className='overflow-hidden text-left'>
                                <p class="font-light text-md text-gray-700 dark:text-gray-400">Oct 30</p>
                                <p class="font-medium text-lg text-gray-700 dark:text-gray-400">Investigación I</p>
                                <p class="font-normal text-gray-700 dark:text-gray-400">Desarrollo de Aplicaciones Interactivas</p>
                            </section>
                            <button type="submit" className="self-start w-14 h-14 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-full">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12H15" stroke="#ffffff" stroke-width="1.584" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 9L12 15" stroke="#ffffff" stroke-width="1.584" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </button>
                        </SwiperSlide>
                        



                    </Swiper>
             </div>
            </div>


        </>
    );
}
