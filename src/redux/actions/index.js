export function addTodo(newTodo) {
  return {
    type: 'ADD_TODO',
    newTodo
  }
}

export function deleteTodo(todoId) {
  return {
    type: 'DELETE_TODO',
    todoId
  }
}

export function changeTodoStatus(todoId) {
  return {
    type: 'CHANGE_STATUS',
    todoId
  }
}

export const changeFilter = filter => ({
  type: 'CHANGE_FILTER',
  filter
})
