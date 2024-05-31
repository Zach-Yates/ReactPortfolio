import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import {Link as Scroll} from 'react-scroll'
import game_company_logo from '../../../../assets/game-company-logo.png'

const Navbar = () => {


  return (
    <nav className='game__navbar'>

      <ul className='left'>

        <Link to='/'> <li>Zach.dev</li></Link>

        <Link to='/gameHome'> <li> <img src={game_company_logo}/> </li> </Link>

        <Link to='/Game_Drpop'> <li>Dragon Rank Pop</li></Link>
        <Link to='/Game_Dr'> <li>Dragon Rank</li></Link>
        <Link to='/Game_Pj'> <li>Pic Jolly</li></Link>
        <Link to='/Game_Combattle'> <li>Combattle</li></Link>

      </ul>

      <ul className='right'>

        <Scroll to='games' smooth={true} offset={0} duration={500}><li className='scroller'>Games</li></Scroll>

        <Link to='/Game_About'> <li>About</li></Link> 

        <Link to='/Game_Contact'> <li>Contact</li></Link>

      </ul>

    </nav>
  )
}

export default Navbar
