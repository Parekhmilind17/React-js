import "./signup.css"
function Signup(prop)
{
console.log(prop.a)
return (
    <div>
        <div id="a">

        
        
        <form action="" id="form" onSubmit={prop.handleClick} > 
        <h1>Signup</h1>
        <input type="text" name="username" value={prop.state.username} onChange={prop.handleChange} id="in" style={{border: prop.is ? '2px solid green' : '2px solid red' ,outline:'none'  }} placeholder="Enter Your ussername" /> <br />
        <input type="email" value={prop.state.email} name="email" onChange={prop.handleChange} placeholder="Enter Your Email" id="in" style={{ border:prop.ise? '2px solid green': '2px solid red',outline:'none' }}/><br />
        <input type="password" name="password"  value={prop.state.password} onChange={prop.handleChange} placeholder="enter your Password" id="in" style={{border:prop.isp?'2px solid green': '2px solid red',outline:'none'}}/> <br />
        <input type="submit"  id="su"/>
        <p onClick={prop.handleSwi} id="p"><b>Already have an account ?</b></p>
        </form>
        </div>
    </div>
)
}
export default Signup