import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='container'>
      <h1>Zach.dev</h1>
      <ul>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>About</Link></li>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Projects</Link></li>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
