import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Footer/>
    </>
  )

}

import {useState} from react
import  './App.css'
import  './components/NavBar'
import  './components/Footer'
import CreatePost from '.pages/CreatePost/CreatePost'

export default App
