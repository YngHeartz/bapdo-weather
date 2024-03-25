import { useState } from 'react'
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

//Rendered Components
import Headerofsite from './Components/headerComp/header'
import Input from './Components/inputComp/inputBox'
import WeatherCard from './Components/weatherCardComp/weatherCard'
import About from './Components/AboutBapto/aboutBapto'
import Contact from './Components/Contact/contact'
import Navbar from './Components/navbarComp/navbar'
import HowToUse from './Components/howToUse/howtouse'
import ToggleDark from './Components/DarkModeToggle/darktoggle';
//End of rendered Components

//Styles
import './App'
//End of styles
function App() {

  return (
    <>
      <Navbar />

      <Headerofsite />

      <Input />

      <WeatherCard />

      <About />

      <Contact />

      <HowToUse />
      
    </>
  )
}

export default App
