import React, { useState } from 'react'
import './sinup.css'
import {Link, useNavigate } from 'react-router-dom'
import { auth, db } from '../firebaseconifg'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

function Signup() {

  let navigate=useNavigate();

 let [state,setState] = useState({
name:'',
Email:'',
password:''

})

let handelchange=(e)=>{
      let{name,value}=e.target;
     setState({...state,[name] : value})
       
}

// console.log(auth);

let handelsubmit= async (e)=>{
    e.preventDefault()

   await createUserWithEmailAndPassword(auth,state.Email, state.password)
   .then((res)=>{
  setDoc(doc(db, "users", res.user.uid), {
      name: state.name,
      email: state.Email
    });
    navigate("/dashboard")
    
   });


}
console.log(state);

  return (
    <div>
            <div className="a">
                <div className="a1">
      <form action="" onSubmit={handelsubmit}>
        <input type="text" name='name' placeholder='Enter your name' onChange={handelchange}/>
        <input type="Email" placeholder='Enter your Email'  name='Email' onChange={handelchange}/>
        <input type="password" name='password'  placeholder='Enter your password' onChange={handelchange}/>
        <input type="submit"  />

            {/* <p onClick={()=>{navigate('/signin')}}>Alredy have an account ?</p> */}
           <span> <Link to={'signin'}>Already hava an account?</Link></span>
      </form>
      </div>
      </div>
    </div>
  )
}

export default Signup;
