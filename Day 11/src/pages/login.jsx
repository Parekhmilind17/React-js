import React from 'react'
import Navbar  from '../component/navbar'
import './login.css'
import { Link, useNavigate } from "react-router"
import { useState } from 'react'

function Login() {


  let [state,setState]=useState({
    email:'',
    password:''
  })
  let navigate= useNavigate()

  let handelChange=(e)=>
  {
    let {name,value}= e.target
    setState({...state,[name]:value})
  }

  let handelSubmit=(e)=>
  {
    e.preventDefault()

    fetch(`http://localhost:3000/users?email=${state.email}`)
    .then((res)=>res.json())
    .then((res)=>{
      console.lo  
      
      if(res.length > 0)
      {
        if(res[0].password == state.password){
          alert("login Successfull")
          navigate("/")
        
      }
      else
        {
          alert("Login unsuccesful")
        }
        
    }
    
    setState({
      email : '',
      password : ''
    })
    }) 
   
  }
  
  return (
    <div>
      <Navbar/>
      <div className="loga">
        <div className="loga1">
          <img src="https://images.bewakoof.com/web/rm-login-desk-v2.jpg" alt="" />
</div>
        <div className="loga2">
          <div className="loga21">

          
        <h1>Login</h1>
        <form action="" onSubmit={handelSubmit}>
          <label htmlFor="">Email</label>
          <input type="Email" placeholder='Enter Your Email' name ='email' value={state.email} onChange={handelChange} />
          <label htmlFor="">Password</label>
          <input type="password" name="password" value={state.password} placeholder='Enter Your Password' onChange={handelChange}/>
          <input type="Submit"  id='su'/>
       <Link to ='/signup'><p>New to web ?</p></Link>
       
       </form>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Login
