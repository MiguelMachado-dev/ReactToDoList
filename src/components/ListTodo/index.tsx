import { ITodo } from 'types'

import * as S from './styles'

interface IListTodoProps {
  existingTodos: Array<ITodo>
  setTodos: (todos: Array<ITodo>) => void
}

const ListTodo = ({ existingTodos, setTodos }: IListTodoProps) => {
  const markTodoAsDone = (index: number) => {
    const newExistingTodos = [...existingTodos]
    newExistingTodos[index].complete = !newExistingTodos[index].complete

    setTodos(newExistingTodos)
  }

  return (
    <S.List>
      {existingTodos.map((todo, index) => {
        return (
          <S.ListItem
            key={index}
            onClick={() => markTodoAsDone(index)}
            isDone={todo.complete}
          >
            {todo.text}
          </S.ListItem>
        )
      })}
    </S.List>
  )
}

export { ListTodo }
