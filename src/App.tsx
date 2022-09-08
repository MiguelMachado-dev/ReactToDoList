import { useState } from 'react'

import { AddTodo } from 'components/AddTodo'
import { Container } from 'components/Container'
import { ListTodo } from 'components/ListTodo'

import type { ITodo } from 'types'

function App() {
  const [todos, setTodos] = useState<Array<ITodo>>([])

  // TODO: filter todos

  return (
    <Container>
      <h2>React + Vite ToDo List</h2>

      <AddTodo setTodos={setTodos} existingTodos={todos} />

      <ListTodo setTodos={setTodos} existingTodos={todos} />
    </Container>
  )
}

export default App
