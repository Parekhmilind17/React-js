import React, { useState } from 'react'
import './signin.css'
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebaseconifg';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';


function Signin() {


  let navigate = useNavigate(null)


  let [state, setState] = useState({

    Email: '',
    password: ''
  })

  let handelchange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value })

  }

  // console.log(auth);

  let handelsubmit = async (e) => {
    e.preventDefault()

    await signInWithEmailAndPassword(auth, state.Email, state.password)
      .then((res) => {
    
        
        navigate("/dashboard");

      })
    }
    let googlelogin = async ()=>{
      await signInWithPopup(auth, provider)
      .then ((res)=>{
        console.log(res);
        // const data = res.user.providerData[0]

        // if(data)
        // {
        //   navigate('/dashboard')
        // }
        
      })
    }
    return (
      <div>
        <div className="a">
          <div className="a1">
            <form action="" onSubmit={handelsubmit}>

              <input type="Email" placeholder='Enter your Email' name='Email' onChange={handelchange} />
              <input type="password" name='password' placeholder='Enter your password' onChange={handelchange} />
              <input type="submit" />
              
            </form>
          </div>
        </div>
      </div>
    )
  }
export default Signin;
