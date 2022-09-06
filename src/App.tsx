import { useState } from 'react'
import type { ITodo } from 'types'

import { AddTodo } from 'components/AddTodo'

function App() {
  const [todos, setTodos] = useState<Array<ITodo>>([
    { text: 'Learn about React', complete: false },
    { text: 'Meet friend for lunch', complete: false },
    { text: 'Build really cool todo app', complete: false },
  ])

  return (
    <div className="App">
      <h2>Hello World!</h2>

      <AddTodo setTodos={setTodos} existingTodos={todos} />
    </div>
  )
}

export default App
