import { setStorageItem } from 'utils/localStorage'

import type { ITodo } from 'types'

import * as S from './styles'

interface ITodoActionsProps {
  existingTodos: Array<ITodo>
  setTodos: (todos: Array<ITodo>) => void
}

const TodoActions = ({ existingTodos, setTodos }: ITodoActionsProps) => {
  const hasTodos: boolean = existingTodos.length > 0

  const handleClearCompleteTodos = () => {
    const filteredTodos = existingTodos.filter((todo) => !todo.isComplete)

    setTodos(filteredTodos)
    setStorageItem('todos', filteredTodos)
  }

  if (!hasTodos) return null

  return (
    <S.Container>
      <S.Quantity>{`${existingTodos.length} ${
        existingTodos.length === 1 ? 'Item' : 'Items'
      }`}</S.Quantity>

      <S.Action onClick={handleClearCompleteTodos}>Clear Complete</S.Action>
    </S.Container>
  )
}

export { TodoActions }
