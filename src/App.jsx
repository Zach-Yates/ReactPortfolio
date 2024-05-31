import React from 'react'
import './App.css'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Sites/Landing/Components/Home.jsx'

import GameHome from './Sites/GameCompany/Pages/GameHome.jsx'
import Game_About from './Sites/GameCompany/Pages/About.jsx'
import Game_Contact from './Sites/GameCompany/Pages/Contact.jsx'
import Game_Drpop from './Sites/GameCompany/Pages/Drpop.jsx'
import Game_Dr from './Sites/GameCompany/Pages/Dr.jsx'
import Game_Pj from './Sites/GameCompany/Pages/Pj.jsx'
import Game_Combattle from './Sites/GameCompany/Pages/Combattle.jsx'


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' exact Component={Home}></Route>
        <Route path='/gameHome' exact Component={GameHome}></Route>

        {/* Game Pages */}
        <Route path='/Game_About' exact Component={Game_About}></Route>
        <Route path='/Game_Contact' exact Component={Game_Contact}></Route>
        <Route path='/Game_Drpop' exact Component={Game_Drpop}></Route>
        <Route path='/Game_Dr' exact Component={Game_Dr}></Route>
        <Route path='/Game_Pj' exact Component={Game_Pj}></Route>
        <Route path='/Game_Combattle' exact Component={Game_Combattle}></Route>
        {/* <Route path='/' exact Component={GameHome}></Route> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
