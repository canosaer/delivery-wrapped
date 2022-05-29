import React from 'react'
import AccountScreen from '../components/AccountScreen'
import { Link } from 'react-router-dom';

export default function Gift() {

    return(
        <main className="gift mom-mode">
            <AccountScreen />
            <section className="gift__container">
                <div className="gift__content">
                    <div className="gift__content-box">
                        <p className="gift__text">Whew, that was a long journey, but you made it. Take a look at your Delivery Wrapped.</p>
                        <a className="gift__link" href="https://open.spotify.com/playlist/2QK2hlDqV70Gti0u0q0PXw?si=26ddf4eaf70f4950&pt=b5e68be0fc8556e29b6aeea25e970cad" target="_blank" rel="noreferrer"><span className="gift__link-text">Open Now</span></a>
                    </div>
                </div>
            </section>
        </main>
    )
}