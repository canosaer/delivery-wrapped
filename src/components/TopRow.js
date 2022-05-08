import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function TopRow() {

    return(
        <setion className="top-row">
            <a className="top-row__link" href="https://www.spotify.com/us/" target="_blank">
                <FontAwesomeIcon className="top-row__logo" icon={["fab", "spotify"]} />
            </a>
            <Link to="/" className="close">
                <div className="close__line close__line_1"></div>
                <div className="close__line close__line_2"></div>
            </Link>
        </setion>
    )
}