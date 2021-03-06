import React, { useState } from 'react'
import TopRow from './TopRow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function AccountScreen() {
    const [momMode, setMomMode] = useState(false)

    return(
        <>
            <TopRow mod="mom-mode" />
            <div className="heading-row">
                <Link to="/" className="heading-row__link">
                    <FontAwesomeIcon className="heading-row__arrow" icon={"chevron-left"} />
                </Link>
                <h1 className="heading-row__heading">Account</h1>
            </div>
            <section className="mom-mode__container">
                <div className="data-row">
                    <h2 className="data-row__heading">Username</h2>
                    <p className="data-row__text">angluetto</p>
                </div>
                <div className="data-row">
                    <h2 className="data-row__heading">Email</h2>
                    <p className="data-row__text">angluetto@gmail.com</p>
                    <div className="data-row__button">Edit</div>
                </div>
                <div className="account-row">
                    <figure className="account-row__image-slot">
                        <FontAwesomeIcon className="account-row__logo" icon={["fab", "spotify"]} />
                    </figure>
                    <h2 className="account-row__heading">Premium Individual</h2>
                    <h2 className="account-row__text">Monthly subscription</h2>
                    <FontAwesomeIcon className="account-row__arrow" icon={"chevron-right"} />
                </div>
                <p className="cancel">To close (delete) your account permanently, contact customer support.</p>
                <h3 className="mom-mode__heading">Mom Mode</h3>
                <p className="mom-mode__text">Switch this on to track the songs and artists you listen to throughout your pregnancy. After your big day, we’ll share a special Delivery Wrapped to help you celebrate.</p>
                <label className="mom-mode__switch">
                    <input className="mom-mode__checkbox" type="checkbox" onClick={() => {setMomMode(!momMode)}}/>
                    <span className="mom-mode__slider"></span>
                </label>
                <label className={momMode ? "date-row" : "date-row invisible"}>
                    <h4 className="date-row__heading">Due Date</h4>
                    <input className="date-row__input" type="date" />
                </label>
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
        </>
    )
}