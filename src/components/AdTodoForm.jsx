import { useState } from "react"

function AdTodoForm(props)
{
    const activityArr=props.activityArr
    const setActivityArr=props.setActivityArr
    
    const [newactivity,setNewactivity] = useState("")

    function handleChange(evt)
    {
        setNewactivity(evt.target.value)
    }

    function addActivity()
    {
        setActivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
        setNewactivity("")
    }

    return(
        <div className="todoform">
        <h1>Manage Activities</h1>
        <input value={newactivity} onChange={handleChange} type="text" placeholder="Next Activity?" />
        <button onClick={addActivity}>Add</button>
    </div>
    )
}

export default AdTodoForm