import './styles/main.scss'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Home from './views/Home'
import MomMode from './views/MomMode'

function App() {

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
