import { createContext, useContext, useReducer } from "react";
import todosReducer from "../reducer/todosReducer"

const Context = createContext()

const Provider = ({children}) => {
    const [state,dispatch] = useReducer(todosReducer,{
        todos: JSON.parse(localStorage.getItem("todos")) || []
    })
    const data = {
        ...state,
        dispatch
    }
    return(
        <Context.Provider value={data}>{children}</Context.Provider>
    )
}

export const useTodos = () => useContext(Context)

export default Provider
