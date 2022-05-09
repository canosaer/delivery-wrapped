import React, { useRef, useState, useContext } from 'react'
import { Context } from '../store/store'
import TopRow from '../components/TopRow'
import BottomRow from '../components/BottomRow'
import ShareRow from '../components/ShareRow'
import { Swiper, SwiperSlide } from "swiper/react";
import rainbow from '../img/rainbow.jpg'

import { Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";


export default function Wrapped() {
    const [state, dispatch] = useContext(Context)
    let slides = ['','','','','','','','']
    slides.fill('swiper-slide slide-')


    const renderSlide = (slide) => {
        switch(slide) {
            case 1:
                return (
                    <p className={`slide-${slide}__heading`}>Congrats on becoming a new mom!</p>
                );

            case 2:
                return (
                    <div className="test2"></div>
                );
        }
    }


    return(
        <main className="wrapped">
            <TopRow mod="swiper"/>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="wrapped__swiper"
                loop={true}
                // autoplay={{
                //     delay: 3000,
                // }}
            >
                {slides.map((slide, i) => {
                    const key = `slide--${i}`

                    return(
                        <SwiperSlide key={key} tag="section" className={`swiper-slide slide-${i+1}`}>
                            <div className={`content content_slide${i+1}`}>
                                {renderSlide(i+1)}
                                <BottomRow mod={`slide${i+1}`}/>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <ShareRow />
        </main>
    )
}