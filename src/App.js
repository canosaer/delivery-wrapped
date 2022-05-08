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
    cssRootVariables.setProperty('--height', height)
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
