
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import "./style.css"

function Signup(props)
{
    const users=props.users
    const setusers=props.setusers
    
    const [eusername,setEusername] = useState()
    const [epassword,setEpassword] = useState()

    const navigate=useNavigate()

    function handleUInput(evt)
    {
        setEusername(evt.target.value)
    }

    function handlePInput(evt)
    {
        setEpassword(evt.target.value)
    }

    function addUser()
    {
        setusers([...users,{username:eusername,password:epassword}])
        navigate("/")
    }

    return(
        <div className="signup">
            <div className="signup__container">
            <h1>Hey Hi</h1>
            <p>I help you manage your activities after the login</p>
            <div>
                <input type="text" placeholder="username" onChange={handleUInput}/>
            </div>
            <div>
                <input type="text" placeholder="password" onChange={handlePInput}/>
            </div>
            <div>
                <input type="text" placeholder="confirm password"/>
            </div>

            <button onClick={addUser}>Signup</button>
            <p>Already have an account? <Link to={"/"}>Login</Link></p>
            </div>
            
        </div>
    )
}

export default Signup