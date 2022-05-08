import './styles/main.scss'

import React, { useEffect } from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Home from './views/Home'
import MomMode from './views/MomMode'
import { useWindowDimensions } from './utilities'

function App() {
  const cssRootVariables = document.documentElement.style
  const height = useWindowDimensions().height

  useEffect(() => {
    const effectiveHeight = height < 740 ? 740 : height
    cssRootVariables.setProperty('--height', `${effectiveHeight}px`)
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mom-mode" element={<MomMode />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
