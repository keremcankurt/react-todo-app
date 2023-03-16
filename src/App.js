import { useState } from "react";
import AddToDo from "./AddTodo";
import TodosProvider from "./context/TodosContext"
import Todos from "./Todos";
import "./App.scss"
function App() {
  const [search, setSearch] = useState("")
  const searchHandle = e => {
    setSearch(e.target.value)
  }
  return (
    <TodosProvider>
      <div className="navWrap">
        <nav>
          <h1>TODO App</h1>
          <input type="text" placeholder="Ara..." value={search} onChange={searchHandle} />
        </nav>
      </div>
      <div className="container">
        <AddToDo />
        <Todos search={search} />
      </div>


    </TodosProvider>
  );
}

export default App;
