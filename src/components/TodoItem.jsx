

function TodoItem(props) {
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    function handleDelete(deleteid) {
        const tempArr = activityArr.filter(function (item) {
            if (item.id == deleteid) 
            {
                return false
            }
            else
            {
                return true
            }
        })
        setActivityArr(tempArr)
    }
    return (
        <div className="todoitem">
            <p>{props.index + 1}.{props.item.activity}</p>
            <button className="delete" onClick={() => handleDelete(props.item.id)}>Delete</button>
        </div>
    )
}

export default TodoItem