import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Store} from './store/store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft, faChevronRight, faHouse, faMagnifyingGlass, faBookmark, faArrowUpFromBracket, faEllipsis, faHeart } from '@fortawesome/free-solid-svg-icons'
// import { faHeart } from '@fortawesome/free-regular-svg-icons'

library.add(faSpotify, faChevronLeft, faChevronRight, faHouse, faMagnifyingGlass, faBookmark, faArrowUpFromBracket, faEllipsis, faHeart )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>,
);