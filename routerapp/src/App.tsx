
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './assets/component/Home'
import Contact from './assets/component/Contact'
import PageNotFound from './assets/component/PageNotFound'

function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>{' | '}
          <Link to={"/contact"}>Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
