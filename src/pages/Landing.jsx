import Header from "../components/Header"
import Card from "../components/Card"
import TodoContainer from "../components/TodoContainer"
import { useLocation } from "react-router-dom"
import "./style.css"

function Landing() 
{
    const data = useLocation()
    return (
        <div className="actodo-bg">
        <div className="head_container">
          <Header username={data.state.user}></Header>

          <div className="card">
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"chennai"}></Card>
          <Card bgcolor={"#FD6663"} title={"March"} subtitle={"12:47"}></Card>
          <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"}></Card>        
          </div>
          <TodoContainer></TodoContainer>
        </div>
  
      </div>
    )
}

export default Landing