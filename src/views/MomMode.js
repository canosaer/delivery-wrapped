import React, { useContext, useState } from 'react'
import { Context } from '../store/store'
import TopRow from '../components/TopRow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function MomMode() {
    const [state, dispatch] = useContext(Context)
    const [momMode, setMomMode] = useState(false)

    return(
        <main className="mom-mode">
            <TopRow mod="mom-mode" />
            <div className="account-row">
                <FontAwesomeIcon className="account-row__logo" icon={"chevron-left"} />
                <h1 className="account-row__heading">Account</h1>
            </div>
            <section className="mom-mode__container">
                <div className="data-row">
                    <h2 className="data-row__heading">Username</h2>
                    <p className="data-row__text">angluetto</p>
                </div>
                <div className="data-row">
                    <h2 className="data-row__heading">Username</h2>
                    <p className="data-row__text">angluetto</p>
                    <div className="data-row__button">Edit</div>
                </div>
                <div className="account-row">
                    <figure className="account-row__image-slot">
                        <FontAwesomeIcon className="account-row__logo" icon={["fab", "spotify"]} />
                        <h2 className="account-row__heading">Premium Individual</h2>
                        <h2 className="account-row__text">Monthly subscription</h2>
                    </figure>
                </div>
                <h3 className="mom-mode__heading">Mom Mode</h3>
                <p className="mom-mode__description">Enable Mom Mode to keep track of your favorite songs while you're expecting and we'll present you with a "Delivery Wrapped" playlist after the big day.</p>
                <label className="mom-mode__switch">
                    <input className="mom-mode__checkbox" type="checkbox" onClick={() => {setMomMode(!momMode)}}/>
                    <span className="mom-mode__slider"></span>
                </label>
                <label className={momMode ? "date-row" : "date-row invisible"}>
                    <h4 className="date-row__heading">Due Date</h4>
                    <input className="date-row__input" type="date" />
                </label>
                <p className="cancel">To close (delete) your account permanently, contact customer support.</p>
                <div className="nav-row">
                    <Link to="/" className="nav-row__item">
                        <FontAwesomeIcon className="nav-row__icon" icon={"house"} />
                        <p className="nav-row__caption">Home</p>
                    </Link>
                    <figure className="nav-row__item">
                        <FontAwesomeIcon className="nav-row__icon" icon={"magnifying-glass"} />
                        <p className="nav-row__caption">Search</p>                        
                    </figure>
                    <figure className="nav-row__item">
                        <FontAwesomeIcon className="nav-row__icon" icon={"bookmark"} />
                        <p className="nav-row__caption">Your Library</p>                        
                    </figure>
                </div>
            </section>
        </main>
    )
}