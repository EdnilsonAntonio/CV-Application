import { useState } from 'react'
import './App.css'
import FormPanel from './components/FormPanel'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <FormPanel/>
    </div>
  )
}

export default App
