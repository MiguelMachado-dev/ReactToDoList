import { useState } from 'react'

import { AddTodo } from 'components/AddTodo'
import { ListTodo } from 'components/ListTodo'

import type { ITodo } from 'types'

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

      <ListTodo setTodos={setTodos} existingTodos={todos} />
    </div>
  )
}

export default App
