import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {Context} from '../store/store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TopRow from '../components/TopRow'
import accent from '../img/accent.png'
import mom from '../img/mom.jpg'
import baby from '../img/baby.jpg'
import celebration from '../img/celebration.png'

export default function Home() {
    const [state, dispatch] = useContext(Context)

    return(
        <main className="home">
            <img className="home__accent" src={accent}></img>
            <TopRow />
            <section className="home__container">
                <h1 className="home__heading">Delivery Wrapped</h1>
                <div className="home__row-display">
                    <Link to="" className="row">
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
            </section>
        </main>
    )
}