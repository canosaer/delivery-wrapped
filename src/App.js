import './styles/main.scss'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Title from './views/Title'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Title />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
