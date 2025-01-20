import Signup from './signup.jsx'
import { useState } from 'react'
import Login from './login.jsx'
function Ls(){
    let [swi, setSwi] = useState(true)

   

    let [state,setState]=useState({ 
        username : '',
        email :'',
        password :''       
    })
    let [arr, setArr] = useState([]);
    
    let userrejex=/^[A-Za-z][A-Za-z0-9_]{7,29}$/
    let isvaliduser= userrejex.test(state.username)
    // console.log(isvaliduser)

    let emailrejex =/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/
    let isvalidemail = emailrejex.test(state.email)
    
    let password= /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    let isvalidps= password.test(state.password)

    let handleChange = (e)=>{
        setState({...state,[e.target.name]: e.target.value})
    }
    
    let handleClick= (e)=>{
        e.preventDefault()
        
        if(isvalidemail && isvalidps && isvaliduser)
        {
            setArr([...arr,state])
            alert("form is submitted")
            setState({
                username: '',
                email:'',
                password:''
            })

        }
        else{
            alert("form is not submitted")
        }
            
        
        
        
        
    }
    console.log(arr)

    let handleSwi=(e)=>
    {
        setSwi(!swi)
    }
    
    return (
  
<div>
{swi==true? 
<Signup state={state} isp={isvalidps} ise={isvalidemail} is={isvaliduser} handleChange={handleChange} handleClick={handleClick} handleSwi={handleSwi}></Signup>
 :<Login a={arr} handleSwi={handleSwi}></Login>
}
</div>
    )
}
export default Ls