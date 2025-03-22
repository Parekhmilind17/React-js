import { useState } from 'react'
import './App.css'
import Movie from './component/movie'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Signup from './component/signup'
import Popular from './component/Popular'
import Signin from './component/signin'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'Component={Movie}/>
      <Route path='/Popular'Component={Popular}/>

      <Route path='/Signup'Component={Signup}/>

      <Route path='/Signin'Component={Signin}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
