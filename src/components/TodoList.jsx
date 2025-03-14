import { useState } from "react"
import TodoItem from "./TodoItem"
function TodoList(props) {

   const activityArr=props.activityArr
   const setActivityArr=props.setActivityArr

    return (
        <div className="todolist">
            <h1>Todays Activity</h1>
            
            {activityArr.length===0?<p>You haven't added anything yet</p>:""}
            {
                activityArr.map(function (item, index) {
                    return (
                        <TodoItem item={item} index={index} activityArr={activityArr} setActivityArr={setActivityArr}></TodoItem>
                    )
                })
            }
        </div>
    )
}

export default TodoList