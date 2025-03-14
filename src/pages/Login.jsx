import { useState } from "react"
import "./style.css"
import { Link, useNavigate } from "react-router-dom"


function Login(props)
{
    const [eusername,setEusername] = useState()
    const [epassword,setEpassword] = useState()
    const [ruser,setRuser]=useState(true)

    const navigate = useNavigate()
    
    const users=props.users
    
    

    function handleUInput(evt)
    {
        setEusername(evt.target.value)
    }

    function handlePInput(evt)
    {
        setEpassword(evt.target.value)
    }

    function checkUser()
    {
        let userfound = false
        users.forEach(function(item)
        {
            if (item.username===eusername && item.password===epassword)
            {
                console.log("Login Succesful")
                userfound=true
                navigate("/landing",{state:{user:eusername}})
            }
            
        })
        if (userfound===false)
        {
            console.log("login failed")
            setRuser(false);
        }
    }

    return(
        <div className="login">
        <div className="login__container">
        <h1>Hey Hi</h1>
        {ruser?<p>I help you manage your activities after the login</p>:<p className="colorchange">please signup before login</p>}
        <div>
            <input type="text" placeholder="username" onChange={handleUInput}/>
        </div>
        <div>
            <input type="text" placeholder="password" onChange={handlePInput}/>
        </div>
        

        <button onClick={checkUser}>Login</button>
        <p>Don't have an account? <Link to={"/signup"}>Signup</Link></p>
        </div>
        
    </div>
    )
}

export default Login