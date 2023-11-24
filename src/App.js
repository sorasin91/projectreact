import React from 'react'
import './App.css'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Services from './Services'
import Aboutus from './Aboutus'
import Contactus from './Contactus'
import Footer from './Footer'

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='service' element={<Services/>}/>
            <Route path='about' element={<Aboutus/>}/>
            <Route path='contact' element={<Contactus/>}/>
        </Routes>
        <Footer/>
        
      </Router>
    </div>
  )
}

export default App