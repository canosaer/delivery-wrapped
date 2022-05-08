import React, { useContext } from 'react'
import { Context } from '../store/store'
import TopRow from '../components/TopRow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function MomMode() {
    const [state, dispatch] = useContext(Context)

    return(
        <main className="mom-mode">
            <section className="top-row top-row_mom">
                <a className="top-row__link" href="https://www.spotify.com/us/" target="_blank">
                    <FontAwesomeIcon className="top-row__logo" icon={["fab", "spotify"]} />
                </a>
                <Link to="/" className="close">
                    <div className="close__line close__line_1"></div>
                    <div className="close__line close__line_2"></div>
                </Link>
            </section>
            <section className="mom-mode__container">
            </section>
        </main>
    )
}