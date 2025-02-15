import React from 'react'
import { useState } from 'react';
import './singup.css';
import { Link } from 'react-router';

function Signup() 
{
  let [state,setState]=useState({
    email:'',
    password:'' 
  })



  let handelInput=(e)=>{
    let {name,value}=e.target
    setState({...state,[name]:value})
  }
console.log(state);

let handelSubmit=(e)=>{
  e.preventDefault()
  fetch(`http://localhost:3000/users`,{
    method : "POST",
    headers : {
        'Content-Type' : "application/json"
    },
    body : JSON.stringify(state)
  })
  .then((res)=>res.json())
  .then((Res)=>{
     
    navigate("/login")
    
  })
  .catch((err)=>{
    console.log(err);
    
  })

  setState({
    
     email : "",
     password : ""
  })

}
  
  return (
    <div>
      <center>
        <u><h1>Signup page</h1></u>
        </center>
      <div className="siga">
      
        <div className="siga1">
          <img src="https://images.bewakoof.com/uploads/grid/app/Dr-Doom-1x1--Graphic-Banner-1737979087.jpg" alt="" />
        </div>
        <div className="siga2">
          <div className="siga21">
            <form action="" onSubmit={handelSubmit}>
            <label htmlFor="">Email</label> <br/>
<input type="Email" placeholder='Enter Your Email' onChange={handelInput} name='email' value={state.email}/> <br />
<label htmlFor="">Password</label> <br/>
<input type="password"  placeholder='Enter your Password'  name='password' value={state.password} onChange={handelInput}/> <br />
<input type="Submit" id='bt'/>
<Link to='/login'>Already have an account?</Link>
</form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
