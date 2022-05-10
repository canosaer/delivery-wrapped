import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft, faChevronRight, faHouse, faMagnifyingGlass, faBookmark, faArrowUpFromBracket, faEllipsis, faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faSpotify, faChevronLeft, faChevronRight, faHouse, faMagnifyingGlass, faBookmark, faArrowUpFromBracket, faEllipsis, faHeart )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);