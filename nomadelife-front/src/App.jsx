import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import CreatePost from './pages/CreatePost/CreatePost'
import Login from 'pages/Login/Login'
import { useState } from 'react'
import Home from 'pages/Home/Home'
import Register from 'pages/Register/Register'
import {BrowserRouter, Routes, Route, Navigate} from 'react-route-dom'
import { AuthProvider } from './context/AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import { useAuthentication } from './firebase/config'
import {About} from 'pages/About/About'
import {Register} from 'pages/Register/Register'

function App() {
  const {user, setUser} = usestate(undefined)
  const {auth} = useAuthentication()

const loading = user  === undefined

useEffect(() => {
onAuthStateChanged(auth, user => {
  setUser(user)
  })
})

if(loadingUser){
  return <div classname="containner" img src="C:\dw-edson\NomadeLifeDev_dmp3\nomadelife-front\public\duck_post_loading.gif"></div>
}

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
         
      <div className='container'> 
        <Routes>

        <Route path = '/' element = {<Home/>} />
          <Route path = '/about' element = {<LoAboutgin/>} />
          <Route path = '/login' element = {<Login/>} />
          <Route path = '/register' element = {<Login/>} />
          <Route path = '/postCreate' element = {<PostCraete/>} />
          <Route path = '/dashboard' element = {<Dashboard/>} />
          
        </Routes>
      </div>
          <NavBar/>
          <Footer/>
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
