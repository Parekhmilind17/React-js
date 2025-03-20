import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../firebaseconifg';

function Dashboard() {

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      console.log(user);
      
    })
  })
  return (
    <div>
      <h1>Welcome to dashboard</h1>
    </div>
  )
}

export default Dashboard;
