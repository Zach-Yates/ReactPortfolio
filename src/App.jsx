import React from 'react'
import './App.css'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Sites/Landing/Components/Home.jsx'


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' exact Component={Home}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
