import React from 'react'
import Navbar from './Navbar'
import 
{
  BrowserRouter as Router,
  Routes,
  Route
} 
from "react-router-dom";
import About from './About';
import Doctors from './Doctors';
import Hero from './Hero';
import Doctor from './Doctor';
import AboveDoctor from './AboveDoctor';
export default function Final() {
  return (
    <>
      <Router>
      <Navbar/>
      <Hero /> 
      <AboveDoctor/>
      <Doctor />
      <Routes>
        <Route exact path = "/"></Route>
        <Route exact path = "/about" element ={<About />}></Route>
        <Route exact path = "/doctors"  element ={<Doctors />}></Route>
      </Routes>
      </Router>
    </>
  )
}
