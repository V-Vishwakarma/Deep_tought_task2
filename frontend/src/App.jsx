import { CreateTodo } from './components/CreateTodo'
import './App.css'
import { Todos } from './components/Todos'
import React, { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])

  fetch("http://localhost:3000/todos")
    .then(async function (res) {
      const json = await res.json();
      setTodos(json.todos)
    })

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  )

}

export default App
