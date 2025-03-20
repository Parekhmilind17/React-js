import { useState } from 'react'
import './App.css'
import Signup from '../component/signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from '../component/signin'
import Dashboard from '../component/dashboard'


function App() {
  const [count, setCount] = useState()

  return (
    <>
      <BrowserRouter>
      <Routes>

          <Route path='/' Component={Signup}></Route>
          <Route path='/signin' Component={Signin}></Route>
          <Route path='/dashboard' Component={Dashboard}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
