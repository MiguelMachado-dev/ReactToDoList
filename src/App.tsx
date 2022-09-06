import { useState } from 'react'
import type { ITodo } from 'types'

import { AddTodo } from 'components/AddTodo'

function App() {
  const [todos, setTodos] = useState<Array<ITodo>>([
    { text: 'Learn about React', complete: false },
    { text: 'Meet friend for lunch', complete: false },
    { text: 'Build really cool todo app', complete: false },
  ])

  // TODO: Component to render todos
  // TODO: Mark todo as complete
  // TODO: filter todos

  return (
    <div>
      <h2>React + Vite ToDo List</h2>

      <AddTodo setTodos={setTodos} existingTodos={todos} />

      {todos.map((todo, index) => (
        <div key={index}>
          <h2>{todo.text}</h2>
        </div>
      ))}
    </div>
  )
}

export default App
