import { useState } from 'react'

import { GoPlus } from 'react-icons/go'

import type { ITodo } from 'types'

import * as S from './styles'

interface IAddTodoProps {
  existingTodos: Array<ITodo>
  setTodos: (todos: Array<ITodo>) => void
}

const AddTodo = ({ existingTodos, setTodos }: IAddTodoProps) => {
  const [inputValue, setInputValue] = useState<string>('')

  const AddTodo = () => {
    // Check if the input is empty and return if it is
    // @@ Guard Clause
    if (!inputValue) return

    const newTodo = { text: inputValue, complete: false }
    setTodos([...existingTodos, newTodo])

    setInputValue('')
  }

  return (
    <S.Container>
      <S.Input
        type="text"
        placeholder="Create a new todo..."
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

      <S.Button
        aria-label="Add Todo"
        type="button"
        onClick={AddTodo}
        disabled={!inputValue}
      >
        <S.IconWrapper>
          <GoPlus />
        </S.IconWrapper>
      </S.Button>
    </S.Container>
  )
}

export { AddTodo }
