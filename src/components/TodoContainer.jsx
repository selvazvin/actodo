
import AdTodoForm from "./AdTodoForm"
import TodoList from "./TodoList"
import { useState } from "react"

function TodoContainer() {
    const [activityArr, setActivityArr] = useState([
        {
            id: 1,
            activity: "Go for a walk"
        },
        {
            id: 2,
            activity: "Take a Shower"
        },
        {
            id: 3,
            activity: "Have a Breakfast"
        }
    ])
    return (
        <div className="todo">
           <AdTodoForm activityArr={activityArr} setActivityArr={setActivityArr}></AdTodoForm>
           <TodoList activityArr={activityArr} setActivityArr={setActivityArr}></TodoList>
            
        </div>
    )
}

export default TodoContainer