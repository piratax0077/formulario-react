import NoControlado from "./components/noControlador"
import Formulario from "./components/Formulario"
import Cat from "./components/cat"
import Todos from "./components/Todos"
import { useState, useEffect } from "react"

const initialTodos = JSON.parse(localStorage.getItem("todos")) || []

const App = () => {

  const [todos, setTodos] = useState(initialTodos)

  // Solo utilizamos un useEffect para actualizar LocalStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  const deleteTodo = (id) => {
    const isDelete = window.confirm("Estas seguro de eliminar el todo?")
    if (isDelete) {
      const newTodos = todos.filter(todo => todo.id !== id)
      setTodos(newTodos)
    }
  }

  const updateTodo = (id) => {
    const newTodos = todos.map(todo => todo.id === id ? {...todo, priority: !todo.priority} : todo)
    setTodos(newTodos)
  }

  const orderTodo = (todos) => {
    return todos.sort((a, b) => b.priority - a.priority)
  }
 
  return (
    <div className="container mt-3">
      <Formulario addTodo={addTodo} />
      <Todos todos={orderTodo(todos)} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  )
}

export default App
