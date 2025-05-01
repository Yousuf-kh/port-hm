import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<div>404 Not found</div>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App