import { memo, useCallback } from "react"
import "./TodoItem.scss"

function TodoItem({ todo, DeleteTodoHandle, dispatch }) {
    const handleComplete = useCallback(e => {
        dispatch({
            type: "TOGGLE_COMPLETE",
            payload: todo.id
        })
    },[dispatch,todo])
    console.log(todo)
    return (
        <tr>
            <td><input type="checkbox" checked={todo.isComplete} onChange={handleComplete}/></td>
            <td className={todo.isComplete && "complete"}>{todo.text}</td>
            <td><button id={todo.id} onClick={DeleteTodoHandle}>Sil</button></td>
        </tr>
    )
}

export default memo(TodoItem)