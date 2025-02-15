import React from 'react'
import { NavLink } from 'react-router'
import './navbar.css'



function Navbar() {
  return (
    <div className='navm'>
      <nav>
        <div className="logo">
          <img src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" alt="" />
        </div>
        <ul>
            <li><NavLink to='/' style={{textDecoration:'none', color:'black',fontWeight:'bold',fontSize:'18px'}}>Home</NavLink> </li>
            <li><NavLink to='/men' style={{textDecoration:'none' , color:'black',fontWeight:'bold',fontSize:'18px'}}>Men</NavLink> </li>    
            
            
        </ul>
        <div className="nav1">
          <div className="nav2">
            <input type="search" />
            
            <NavLink to='/login' style={{textDecoration:'none',color:'black',fontWeight:'bolder',fontSize:'18px'}}>Login</NavLink> 
            
            <i class="fa-regular fa-heart"></i> 
            <i class="fa-solid fa-cart-plus"></i>
            
            </div>
        </div>
        </nav>
        <div className="a">
          <ul>
            <li>Sale</li>
            <li>Men</li>
            <li>Women</li>
            <li>Winterwear</li>
            <li>Plus Size</li>
            <li>ACCESSORIES</li>
            <li>OFFICIAL MERCH</li>
            <li>SNEAKERS</li>
            <li>BEWAKOOF AIR</li>
          </ul>
        </div>
      
    </div>
  )
}

export default Navbar
