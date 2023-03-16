import { memo, useCallback, useState } from "react"
import { useTodos } from "./context/TodosContext"
import "./AddTodo.scss"

function AddToDo() {
    const { todos, dispatch } = useTodos()
    const [todo, setTodo] = useState()
    const submitHandle = useCallback(e => {
        e.preventDefault()
        dispatch({
            type: "ADD_TODO",
            payload: {
                text: todo,
                isComplete: false,
                id: todos.length !== 0 ? todos[todos.length-1].id+1 : 0
            }
        })
        setTodo("")
    }, [todo,dispatch,todos])
    const onChange = useCallback(e => {
        setTodo(e.target.value)
    }, [])
    return (

        <form onSubmit={submitHandle} className="addTodo">
            <input type="text" placeholder="Add Todo" value={todo} onChange={onChange} />
            <button disabled={!todo} type="submit">EKLE</button>
        </form>
    )
}

export default memo(AddToDo)