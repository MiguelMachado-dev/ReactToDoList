import { useEffect, useState } from 'react'

import { AddTodo } from 'components/AddTodo'
import { ListTodo } from 'components/ListTodo'
import { TodoActions } from 'components/TodoActions'

import { Base } from 'templates/Base'

import { getStorageItem } from 'utils/localStorage'

import type { ITodo } from 'types'

import * as S from './styles'

const Home = () => {
  const [todos, setTodos] = useState<Array<ITodo>>([])
  let hasLoaded = false

  useEffect(() => {
    const existingTodos = getStorageItem('todos')

    if (!hasLoaded && existingTodos) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      hasLoaded = true
      setTodos(existingTodos)
    }
  }, [])

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
