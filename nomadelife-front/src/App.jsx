import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import CreatePost from './pages/CreatePost/CreatePost'
import Login from 'pages/Login/Login'
import { useState } from 'react'
import Home from 'pages/Home/Home'
import Register from 'pages/Register/Register'
import {BrowserRouter, Routes, Route, Navigate} from 'react-route-dom'

function App() {
  return (
    <>
      <BrowserRouter>
         <Navigate>
          <div className='container'> 
            <Routes>

                <Route path = '/' element = {<Home/>} />
                <Route path = '/login' element = {<Login/>} />
                <Route path = '/register' element = {<Register/>} />
              
            </Routes>
          </div>
              <NavBar/>
              <Footer/>
         </Navigate>
      </BrowserRouter>
      
    </>
  )
}

export default App
