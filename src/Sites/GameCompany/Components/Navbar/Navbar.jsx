import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='container game__navbar'>

      <ul className='left'>
        <li>icon</li>
        <li>back to Zach</li>
        <li>Dragon Rank Pop</li>
        <li>Dragon Rank</li>
        <li>Pic Jolly</li>
        <li>Combattle</li>
      </ul>

      <ul className='right'>
        <li>Games</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

    </nav>
  )
}

export default Navbar
