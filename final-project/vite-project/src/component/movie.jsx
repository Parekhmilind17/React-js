import React from 'react'
import './movie.css'
import {useNavigate} from 'react-router-dom'

function Movie() {
  let navigate = useNavigate()
  return (
    <div>
      <div className="navbar">
        <div className="logo">

        </div>
        <div className="pop">
            <div className="pop1">
        <i class="fa-solid fa-video"></i>
        <h1> Popular Movies</h1>
        </div>
        <div className="pop2">
            <input type="text" />
        </div>
        <div className="pop3">
            <div className="pop31">
                
                <span onClick={()=>{navigate("/Signup")}}>Sign ip </span>
                
            </div>
        </div>
        </div>
      </div>
      <div className="b">
        <div className="b1"></div>
        <div className="b2"></div>
        <div className="b3"></div>
      </div>
    </div>
  )
}

export default Movie
