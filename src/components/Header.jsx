function Header(props)
{
    return(
        <div className="head"><h1>Hello {props.username}!</h1>
        <p>I help you manage your activities</p>
        </div>
    )
}

export default Header