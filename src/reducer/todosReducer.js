export default function reducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            localStorage.setItem("todos",JSON.stringify([...state.todos,action.payload]))
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case "DELETE_TODO":
            localStorage.setItem("todos",JSON.stringify(state.todos.filter((todo) => todo.id !== Number(action.payload))))
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== Number(action.payload))
            }
        case "TOGGLE_COMPLETE":
            const todos = state.todos.map(todo => {
                if (todo.id === Number(action.payload)) {
                  return {
                    ...todo,
                    isComplete: !todo.isComplete
                  };
                }
                return todo;
            })
            console.log(todos)
            localStorage.setItem("todos",JSON.stringify(todos))
            return {
                ...state,
                todos: todos
                }
        default:
            break;
    }
}