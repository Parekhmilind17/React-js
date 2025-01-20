import { useState } from 'react'
import "./login.css"
function Login(prop){
    let [login,setLogin]=useState({ 
        username : '',
        email :'',
        password :''       
    })
    let emailrejex=/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/
    let isvalidemail=emailrejex.test(login.email)
    
    console.log(isvalidemail)

    let handleChange=(e)=>{
         setLogin({...login, [e.target.name] : e.target.value})
    }

    let compare = (e)=>{
        e.preventDefault()

        let user = prop.a.find((el)=>{ 
           return el.username == login.username
            
        })

        if(!user){
            alert("username is not found")
        }
        else if(user.email != login.email){
            alert("email not found")
        }
        else if(user.password != login.password){
            alert("password not found")
        }
        else{
            alert(" login succesfull")
        }
    }


    return(

        <div>
            <div id="a">
                
           
            <form action="" onSubmit={compare} id="form">
            <h1>Login</h1>
            <input type="text" name="username" id="in" onChange={handleChange}  placeholder='Enter Your Username'/>
            <input type="text" name="email" id="in" onChange={handleChange} style={{border:isvalidemail ?'2px solid black': '2px solid red',outline :    'none'} }placeholder='Enter Your Email'/>
            <input type="text" name="password" id="in" onChange={handleChange} placeholder='Enter Your password'/>
            <input type="submit" id='su'/>
            <p onClick={prop.handleSwi} id='p'><b>NEW TO WEB? CREATE YOUR OWN WEB.</b></p>
        
            </form>
</div>
        </div>
    )

}
    

export default Login
