import { useState } from 'react'
import Headerofsite from './Components/headerComp/header'
import Input from './Components/inputComp/inputBox'
import WeatherCard from './Components/weatherCardComp/weatherCard'
import './App'
function App() {

  return (
    <>
      <Headerofsite />

      <Input />

      <WeatherCard />
    </>
  )
}

export default App
