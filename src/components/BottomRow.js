import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function BottomRow() {

    return(
        <section className="bottom-row">
            <a className="bottom-row__link" href="https://www.spotify.com/us/" target="_blank">
                <FontAwesomeIcon className="bottom-row__logo" icon={["fab", "spotify"]} />
                <p className="bottom-row__spotify">Spotify</p>
            </a>
            <p className="bottom-row__hashtag">#DeliveryWrapped</p>
        </section>
    )
}