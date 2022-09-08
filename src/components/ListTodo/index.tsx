import { ITodo } from 'types'

import * as S from './styles'

interface IListTodoProps {
  existingTodos: Array<ITodo>
  setTodos: (todos: Array<ITodo>) => void
}

const ListTodo = ({ existingTodos, setTodos }: IListTodoProps) => {
  const handleToggleTaskCompletion = (id: string) => {
    if (!existingTodos) return

    const newTodo = existingTodos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            isComplete: !todo.isComplete,
          }
        : todo
    )

    setTodos(newTodo)
  }

  if (!existingTodos.length) {
    return null
  }

  return (
    <S.List>
      {existingTodos.map(({ id, text, isComplete }) => {
        return (
          <S.ListItem
            key={id}
            onClick={() => handleToggleTaskCompletion(id)}
            isDone={isComplete}
          >
            {text}
          </S.ListItem>
        )
      })}
    </S.List>
  )
}

export { ListTodo }
