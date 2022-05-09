import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ShareRow() {

    return(
        <section className="share-row">
            <figure className="share-row__icon-slot">
                <FontAwesomeIcon className="share-row__icon" icon={"arrow-up-from-bracket"} />
            </figure>
            <p className="share-row__text">Share this story</p>
        </section>
    )
}