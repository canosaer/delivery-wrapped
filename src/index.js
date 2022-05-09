import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Store} from './store/store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faPersonBreastfeeding, faBaby, faGift, faChevronLeft, faChevronRight, faHouse, faMagnifyingGlass, faBookmark, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'

library.add(faSpotify, faPersonBreastfeeding, faBaby, faGift, faChevronLeft, faChevronRight, faHouse, faMagnifyingGlass, faBookmark, faArrowUpFromBracket )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>,
);