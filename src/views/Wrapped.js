import React, { useRef, useEffect, useState, useContext } from 'react'
import { Context } from '../store/store'
import TopRow from '../components/TopRow'
import BottomRow from '../components/BottomRow'
import ShareRow from '../components/ShareRow'
import { Swiper, SwiperSlide } from "swiper/react";
import rainbow from '../img/rainbow.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import musicData from '../store/musicData'

import { Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";


export default function Wrapped() {
    const [state, dispatch] = useContext(Context)
    const [songMax, setSongMax] = useState(0)
    const [artistClip, setArtistClip] = useState(false)

    let slides = ['','','','','','','','']
    slides.fill('swiper-slide slide-')
    const ref = useRef()
    // const cssRootVariables = document.documentElement.style

    useEffect(() => {
        const height = ref.current.clientHeight
        setSongMax(Math.floor((height-76)/90))
        // if(height < 800)
      }, []);


    const renderSlide = (slide) => {
        switch(slide) {
            case 1:
                return (
                    <p className="slide-1__heading">Congrats on becoming a new mom!</p>
                );

            case 2:
                return (
                    <div className="slide-2__content-box">
                        <p className="slide-2__heading">While you were pregnant, your top songs were</p>
                        <FontAwesomeIcon className="slide-2__ellipsis" icon={"ellipsis"} />
                    </div>
                );
            case 3:
                return(
                    <>   
                        <h1 className="slide-3__heading">Top Songs</h1>
                        <div className="slide-3__row-display">
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
            case 4:
                return(
                    <div className="slide-4__content-box">
                        <p className="slide-4__heading">These were the artists you l
                        <FontAwesomeIcon icon="fa-solid fa-heart" className="slide-4__heart" />
                        ved</p>
                        <FontAwesomeIcon className="slide-4__ellipsis" icon={"ellipsis"} />
                    </div>

                );
            case 5:
                return(
                    <>   
                        <h1 className="slide-5__heading">Top Artists</h1>
                        <div className="slide-5__row-display">
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
            case 6:
                return(
                    <div className="slide-6__content-box">
                        <h1 className="slide-6__heading">You were in very different moods each trimester</h1>
                        <ul className="slide-6__list">
                            <li className="slide-6__list-item">1) Indie</li>
                            <li className="slide-6__list-item">2) R&B</li>
                            <li className="slide-6__list-item">3) Pop</li>
                        </ul>
                    </div>

                );
            case 7:
                return(
                    <div className="slide-7__content-box">
                        <h1 className="slide-7__heading">The baby kept you up a lot...</h1>
                        <p className="slide-7__text">You listened to 3,000 minutes of music between midnight - 4am</p>
                    </div>

                );
            case 8:
                return(
                    <div className="slide-8__content-box">
                        <h1 className="slide-8__heading">With taste like this, you're going to be an amazing mom!</h1>
                    </div>
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