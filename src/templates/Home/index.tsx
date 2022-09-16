import { useState } from 'react'

import { AddTodo } from 'components/AddTodo'
import { ListTodo } from 'components/ListTodo'
import { TodoActions } from 'components/TodoActions'

import { Base } from 'templates/Base'

import type { ITodo } from 'types'

import * as S from './styles'

const Home = () => {
  const [todos, setTodos] = useState<Array<ITodo>>([])

  return (
    <Base>
      <S.Main>
        <S.Title>React + Vite ToDo List</S.Title>

        <AddTodo setTodos={setTodos} existingTodos={todos} />

        <ListTodo setTodos={setTodos} existingTodos={todos} />

        <TodoActions setTodos={setTodos} existingTodos={todos} />
      </S.Main>
    </Base>
  )
}

export { Home }
