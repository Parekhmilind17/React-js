import React, { useState } from 'react'
import './singup.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseconfig'
import { NavLink, useNavigate } from 'react-router-dom'

function Signup() {

  let navigate = useNavigate()
  let [state,setState]=useState({
    name:'',
    email:'',
    password:''
  }
  )

  let handelchange=(e)=>{

      let {name,value}=e.target
      setState({...state,[name]:value})
    
  }
  let handelsubmit= async(e)=>{
    e.preventDefault()
    await createUserWithEmailAndPassword(auth,email,password)
    .then((res) => {
      navigate('/signin')
    })
  
  }
  console.log(state);
  
  return (
    <div>
      <div className="main">
      <div className="a"> 
        <input type="text"  placeholder='Enter Your Name' onChange={handelchange}  name='name'/>
        <input type="email" placeholder='Enter Your Email' name='email'/>
        <input type="passwprd"placeholder='Enter Your Password'  name='password'/>
        <input type="Submit" id='submit'/>

        
        <span onClick={()=>{navigate('/signin')}}>Already have an account</span>
        
      </div>
      </div>
    </div>
  )
}

export default Signup
