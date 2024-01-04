import { useState } from 'react'
import Headerofsite from './Components/headerComp/header'
import Input from './Components/inputComp/inputBox'
import WeatherCard from './Components/weatherCardComp/weatherCard'
import './App'
import Navbar from './Components/navbarComp/navbar'
function App() {

  return (
    <>
      <Navbar />

      <Headerofsite />

      <Input />

      <WeatherCard />

      
    </>
  )
}

export default App
