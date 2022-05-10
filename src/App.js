import './styles/main.scss'

import React, { useEffect } from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Home from './views/Home'
import MomMode from './views/MomMode'
import Wrapped from './views/Wrapped'
import Gift from './views/Gift'
import { useWindowDimensions } from './utilities'

function App() {
  const cssRootVariables = document.documentElement.style
  const height = useWindowDimensions().height

  useEffect(() => {
    const effectiveHeight = height < 710 ? 710 : height
    const contentHeight = effectiveHeight - (7*16)
    cssRootVariables.setProperty('--height', `${effectiveHeight}px`)
    cssRootVariables.setProperty('--content-height', `${contentHeight}px`)
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mom-mode" element={<MomMode />} />
          <Route path="/wrapped" element={<Wrapped />} />
          <Route path="/gift" element={<Gift />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
