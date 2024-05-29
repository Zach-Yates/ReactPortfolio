import React from 'react'
import './App.css'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Sites/Landing/Components/Home.jsx'
import GameHome from './Sites/GameCompany/Pages/GameHome.jsx'


function App() {

  return (
    <>
    <Router>
      <Routes>
        {/* <Route path='/' exact Component={Home}></Route> */}
        {/* <Route path='/GameHome' exact Component={GameHome}></Route> */}
        <Route path='/' exact Component={GameHome}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
