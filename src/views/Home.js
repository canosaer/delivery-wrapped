import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {Context} from '../store/store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Home() {
    const [state, dispatch] = useContext(Context)

    return(
        <main className="home">
            <section className="home__container">
                <FontAwesomeIcon className="home__logo" icon={["fab", "spotify"]} />
                <h1 className="home__heading">Delivery Wrapped</h1>
                <h1 className="home__subheading">App Views</h1>
                <div className="home__row-display">
                    <Link to="" className="row">
                        <p className="row__rank">#1</p>
                            <div className="row__image-slot">
                                <FontAwesomeIcon className="row__image" icon="person-breastfeeding" />
                            </div>
                        {/* <figure className="row__image"></figure> */}
                        <p className="row__title">Mom Mode</p>
                    </Link>
                    <Link to="" className="row">
                        <p className="row__rank">#2</p>
                        {/* <figure className="row__image"></figure> */}
                        <div className="row__image-slot">
                            <FontAwesomeIcon className="row__image" icon="baby" />
                        </div>
                        <p className="row__title">Wrapped Playlist</p>
                    </Link>
                    <Link to=""  className="row">
                        <p className="row__rank">#3</p>
                        {/* <figure className="row__image"></figure> */}
                        <div className="row__image-slot">
                            <FontAwesomeIcon className="row__image" icon="gift" />
                        </div>
                        <p className="row__title">Gift Notification</p>
                    </Link>
                </div>
            </section>
        </main>
    )
}