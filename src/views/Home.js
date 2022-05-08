import React from 'react'
import { Link } from 'react-router-dom'
import TopRow from '../components/TopRow'
import BottomRow from '../components/BottomRow'
import mom from '../img/mom.jpg'
import baby from '../img/baby.jpg'
import celebration from '../img/celebration.png'

export default function Home() {

    return(
        <main className="home">
            <TopRow />
            <section className="home__container">
                <h1 className="home__heading">Delivery Wrapped</h1>
                <div className="home__row-display">
                    <Link to="/mom-mode" className="row">
                        <p className="row__rank">#1</p>
                            <div className="row__image-slot">
                                <img className="row__image" src={mom} alt="expecting mother" />
                            </div>
                        <p className="row__title">Mom Mode</p>
                    </Link>
                    <Link to="" className="row">
                        <p className="row__rank">#2</p>
                        <div className="row__image-slot">
                            <img className="row__image" src={baby} alt="baby" />
                        </div>
                        <p className="row__title">Wrapped Playlist</p>
                    </Link>
                    <Link to=""  className="row">
                        <p className="row__rank">#3</p>
                        <div className="row__image-slot">
                            <img className="row__image" src={celebration} alt="celebration" />
                        </div>
                        <p className="row__title">Gift Notification</p>
                    </Link>
                </div>
                <BottomRow />
            </section>
        </main>
    )
}