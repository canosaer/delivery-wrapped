import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {Context} from '../store/store'

export default function Home() {
    const [state, dispatch] = useContext(Context)

    return(
        <main className="home">
            <section className="home__container">
                <h1 className="home_heading">Delivery Wrapped</h1>
                <div className="home__card-display">
                    <article className="card">
                        <p className="card__text">Mom Mode</p>
                    </article>
                    <article className="card">
                        <p className="card__text">Delivery Wrapped</p>
                    </article>
                    <article className="card">
                        <p className="card__text">Push Notification</p>
                    </article>
                </div>
            </section>
        </main>
    )
}