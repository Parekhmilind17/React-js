import React, { useRef, useState } from 'react'
import Navbar from '../component/navbar'
import './men.css'
import Free from '../component/free'
import { useEffect } from 'react'
function Men() {

  let [state,setState]=useState([])
  let[lenght,setLenght] =useState()

  

  useEffect(()=>{
    fetch(`http://localhost:3000/men`)
    .then((res)=>{
      return res.json()
    })
    .then((res)=>{
        setState(res)  
        setLenght(res.length)
         
    })
   
  },[])
  console.log(state);
  console.log(lenght);
    
  let solid=useRef(null)
  let reg =useRef(null)
  
  
  return (
    <div>
      <Navbar/>
      <Free/>
      <div className="mena">
        <div className="mena1"></div>
        <div className="mena2">
          <div className="menap">       
            <h4>Clothes For Men <span>{lenght}</span></h4>
            </div>
              
              <div className="menpro">
          {
            state.map((el)=>{
              return <div className="pro">
                <div className="mena21">
                  <img src={el.img} alt=""/>
                  <div className="mena211">
                  <p sty>{el.title}</p>
                  <p style={{color:'gray'}} >{el.description}</p>
                  <p style={{fontWeight:'bold', fontSize:'20px'}}>₹999 <s style={{color:"gray"}}>₹2,199</s> <span style={{color:'#00B53A', fontWeight:'bold'}}> 54% off</span></p>
                  <div className="co">
                    <span>100% Cotton</span>
                  </div>
                  
                </div>
                </div>
                
               </div>
            })
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Men;
