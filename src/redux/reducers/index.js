import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import todosReducer from './todosReducer';
import charactersReducer from './charactersReducer';

const reducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
  characters: charactersReducer
})

export default reducer;
