import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function BottomRow(props) {

    let rowClass = props.mod ? `bottom-row bottom-row_${props.mod}` : 'bottom-row'

    return(
        <section className={rowClass}>
            <a className="bottom-row__link" href="https://www.spotify.com/us/" target="_blank">
                <FontAwesomeIcon className="bottom-row__logo" icon={["fab", "spotify"]} />
                <p className="bottom-row__spotify">Spotify</p>
            </a>
            <p className="bottom-row__hashtag">#DeliveryWrapped</p>
        </section>
    )
}