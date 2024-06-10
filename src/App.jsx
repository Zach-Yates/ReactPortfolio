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

import Comp_Home from './Sites/CompCo/Pages/CompHome.jsx'
import Comp_Products from './Sites/CompCo/Pages/Products.jsx'
import Comp_Services from './Sites/CompCo/Pages/Services.jsx'
import Comp_About from './Sites/CompCo/Pages/CompAbout.jsx'
import Comp_Contact from './Sites/CompCo/Pages/CompContact.jsx'


function App() {

  return (
    <>
    <Router>
      <Routes>
        {/* Portfolio Landing */}
        <Route path='/' exact Component={Home}></Route>

        {/* Game Pages */}
        <Route path='/gameHome' exact Component={GameHome}></Route>
        <Route path='/Game_About' exact Component={Game_About}></Route>
        <Route path='/Game_Contact' exact Component={Game_Contact}></Route>
        <Route path='/Game_Drpop' exact Component={Game_Drpop}></Route>
        <Route path='/Game_Dr' exact Component={Game_Dr}></Route>
        <Route path='/Game_Pj' exact Component={Game_Pj}></Route>
        <Route path='/Game_Combattle' exact Component={Game_Combattle}></Route>

        {/* CompCo Pages */}
        {/* <Route path='/' exact Component={Comp_Home}></Route> */}
        <Route path='/comp_home' exact Component={Comp_Home}></Route>
        <Route path='/comp_products' exact Component={Comp_Products}></Route>
        <Route path='/comp_services' exact Component={Comp_Services}></Route>
        <Route path='/comp_about' exact Component={Comp_About}></Route>
        <Route path='/comp_contact' exact Component={Comp_Contact}></Route>

      </Routes>
    </Router>
    </>
  )
}

export default App
