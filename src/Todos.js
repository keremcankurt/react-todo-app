import { memo } from "react";
import { useTodos } from "./context/TodosContext";
import TodoItem from "./TodoItem";
import "./Todos.scss"

function Todos({search}) {
    const { todos, dispatch } = useTodos()

    const DeleteTodoHandle = e => {
        e.preventDefault()
        dispatch({
            type: "DELETE_TODO",
            payload: e.target.id
        })
    }
    const filteredTodos = todos.filter(todo => todo.text.toLocaleLowerCase("TR").includes(search.toLocaleLowerCase("TR")))
    return (
        <>
            <table>
                {filteredTodos.map((todo) =>
                    <TodoItem key={todo.id} todo={todo} id={todo.id} DeleteTodoHandle={DeleteTodoHandle} dispatch={dispatch} />
                )}
            </table>
        </>
    )
}

export default memo(Todos)