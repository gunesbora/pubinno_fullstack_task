import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from './components/Sidebar'
import Details from './pages/Details'
import Home from './pages/Home'



const AppRouter = () => {
  return (

    <Router>
      <Sidebar/>
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/details" element={<Details/>}/>  


        </Routes>


    </Router>
    
  )
}

export default AppRouter
