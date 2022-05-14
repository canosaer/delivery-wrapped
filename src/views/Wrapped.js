import React, { useRef, useEffect, useState } from 'react'
import TopRow from '../components/TopRow'
import BottomRow from '../components/BottomRow'
import ShareRow from '../components/ShareRow'
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import musicData from '../store/musicData'

import { Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";


export default function Wrapped() {
    const [songMax, setSongMax] = useState(0)

    let slides = ['','','','','','','','','','','','']
    slides.fill('swiper-slide slide-')
    const ref = useRef()

    useEffect(() => {
        const height = ref.current.clientHeight
        setSongMax(Math.floor((height-76)/90))
      }, []);


    const renderSlide = (slide) => {
        switch(slide) {
            case 1:
                return (
                    <p className="slide-1__heading">We know you’ve already had a special delivery (shout out baby), but we wanted to give you another one.</p>
                );
            case 2:
                return (
                    <p className="slide-2__heading">Here's your Delivery Wrapped.</p>
                );
            case 3:
                return (
                    <p className="slide-3__heading">While the baby was growing, your love for these songs was, too.</p>
                );
            case 4:
                return(
                    <>   
                        <h1 className="slide-4__heading">Top Songs</h1>
                        <div className="slide-4__row-display">
                            {musicData.songs.map((song, i) => {
                                const key = `song--${i}`

                                if(i<songMax){
                                    return(
                                        <div className="row" key={key}>
                                            <div className="row__image-slot">
                                                <img className="row__image" src={song.img} alt="album cover" />
                                            </div>                                        
                                            <p className="row__title">{song.title}</p>
                                            <p className="row__artist">{song.artist}</p>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </>

                );
            case 5:
                return(
                    <p className="slide-5__heading">The two of you enjoyed many artists, but there were a few that stuck out.</p>
                );
            case 6:
                return(
                    <>   
                        <h1 className="slide-6__heading">Top Artists</h1>
                        <div className="slide-6__row-display">
                            {musicData.artists.map((artist, i) => {
                                const key = `artist--${i}`

                                if(i<songMax-1){
                                    return(
                                        <div className="row">
                                            <p className="row__rank">#{i+1}</p>
                                            <div className="row__image-slot">
                                                <img className="row__image" src={artist.img} alt="artist photo" />
                                            </div>
                                            <p className="row__title">{artist.name}</p>
                                        </div>
                                    )
                                }
                            
                            })}
                        </div>
                    </>

                );
            case 7:
                return(
                    <p className="slide-7__heading">You were in different moods every trimester. Don’t believe us?</p>
                );
            case 8:
                return(
                    <ul className="slide-8__list">
                        <li className="slide-8__list-item">1) Indie</li>
                        <li className="slide-8__list-item">2) R&B</li>
                        <li className="slide-8__list-item">3) Pop</li>
                    </ul>
                );
            case 9:
                return(
                    <p className="slide-9__heading">The baby kept you up a lot. Like, a lot a lot.</p>
                );
            case 10:
                return(
                    <p className="slide-10__heading">You listened to 5,600 minutes of music between 12 pm and 5 am.</p>
                );
            case 11:
                return(
                    <p className="slide-11__heading">Congratulations. You made it to Motherhood.</p>
                );
            case 12:
                return(
                    <p className="slide-12__heading">It only gets easier from here. Not really. But you’ll figure it out, you always do.</p>
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
                autoplay={{
                    delay: 3000,
                }}
            >
                {slides.map((slide, i) => {
                    const key = `slide--${i}`

                    return(
                        <SwiperSlide key={key} tag="section" className={slide+(i+1)}>
                            <div ref={ref} className={`content content_slide${i+1}`}>
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