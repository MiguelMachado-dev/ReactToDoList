import { useState } from 'react'

import type { ITodo } from 'types'

import * as S from './styles'

interface IAddTodoProps {
  existingTodos: Array<ITodo>
  setTodos: (todos: Array<ITodo>) => void
}

const AddTodo = ({ existingTodos, setTodos }: IAddTodoProps) => {
  const [inputValue, setInputValue] = useState<string>('')

  const AddTodo = () => {
    const newTodo = { text: inputValue, complete: false }
    setTodos([...existingTodos, newTodo])

    setInputValue('')
  }

  return (
    <S.Container>
      <S.Input
        type="text"
        placeholder="Add todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            AddTodo()
          }

          if (e.key === 'Escape') {
            setInputValue('')
          }
        }}
      />

      <S.Button type="button" onClick={AddTodo} disabled={!inputValue}>
        Add Todo
      </S.Button>
    </S.Container>
  )
}

export { AddTodo }
