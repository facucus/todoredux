import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired
  }

  handleDelete = () => {
    const { id, onDeleteTodo } = this.props;
    onDeleteTodo(id);
  }

  handleToggle = () => {
    const { onToggle, id } = this.props;
    onToggle(id)
  }

  render() {
    const { text, complete } = this.props;
    return (
      <li>
        {text}
        <input
          type='checkbox'
          checked={complete ? 'checked' : ''}
          onChange={this.handleToggle}
          />
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    )
  }
}

const TodoList = ({todos, onDeleteTodo, onToggle, filter}) => {
  const todosToRender = todos.filter(todo => {
    switch (filter) {
      case 'Completed':
        return todo.complete
      case 'Uncompleted':
        return !todo.complete
      case 'All':
      default:
        return true
    }
  });

  return (
    <ul style={{
      textAlign: 'center',
      padding: 0,
      listStyleType: 'none'
    }}>
      {todosToRender.map(todo => (
        <Todo
          key={todo.id} {...todo}
          onDeleteTodo={onDeleteTodo}
          onToggle={onToggle}
          />
      ))}
    </ul>
  )
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired
}

export default TodoList;
