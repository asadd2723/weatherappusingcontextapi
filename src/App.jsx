import { useState } from 'react'
import './App.css'
import Weather from './components/Weather'
import Display from './components/Display'

function App() {

  return (
    <>
      <Weather />
      <hr />
      <Display />
    </>
  )
}

export default App
