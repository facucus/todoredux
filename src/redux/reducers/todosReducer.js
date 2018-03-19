const initialState = [];

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, action.newTodo]
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.todoId)
    case 'CHANGE_STATUS':
      return state.map(todo => {
        if (todo.id === action.todoId) {
          return {
            ...todo,
            complete: !todo.complete
          }
        }
        return todo;
      })
    default:
      return state;
  }
};

export default todosReducer;
