import { useState } from 'react'
import Headerofsite from './Components/headerComp/header'
import Input from './Components/inputComp/inputBox'
import Weather from './Components/weatherCardComp/weatherCard'
import './App'
function App() {
const {location, setlocation} = useState('');

  return (
    <>
      <Headerofsite />

      <Input />

      <Weather />
    </>
  )
}

export default App
