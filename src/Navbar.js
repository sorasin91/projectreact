import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>

      <div className='navbar'>
        <ol>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'service'}>Services</Link></li>
          <li><Link to={'about'}>About us</Link></li>
          <li><Link to={'contact'}>Contact us</Link></li>
        </ol>
      </div>
    </div>
  )
}

export default Navbar
