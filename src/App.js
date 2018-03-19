import React, { Component, Fragment } from 'react';
import uuid  from 'uuid/v4';
import { connect } from 'react-redux';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Filters from './components/Filters';
import * as actions from './redux/actions';

class App extends Component {
  handleChangeFilter = filter => {
    this.props.onChangeFilter(filter)
  }

  handleDeleteTodo = id => {
    this.props.onDeleteTodo(id)
  }

  handleAddTodo = inputValue => {
    const newTodo = {
      id: uuid(),
      text: inputValue,
      complete: false
    };
    this.props.onAddTodo(newTodo)
  }

  handleToggle = id => {
    this.props.onChangeTodoStatus(id)
  }

  render() {
    const { todos, filter } = this.props;

    return (
      <div style={{
        textAlign: 'center',
        paddingTop: '50px'
      }}>

        <AddTodo onAddTodo={this.handleAddTodo}/>

        { todos.length
          ? (
            <Fragment>
              <Filters filter={filter} onChangeFilter={this.handleChangeFilter}/>
              <TodoList
                todos={todos}
                filter={filter}
                onDeleteTodo={this.handleDeleteTodo}
                onToggle={this.handleToggle}
                />
            </Fragment>

          )
          : <h2>Agregar Todos!</h2>
        }

      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.filter,
  name: state.name
});

const mapDispatchToProps = dispatch => ({
  onAddTodo: newTodo => dispatch(actions.addTodo(newTodo)),
  onDeleteTodo: todoId => dispatch(actions.deleteTodo(todoId)),
  onChangeTodoStatus: todoId => dispatch(actions.changeTodoStatus(todoId)),
  onChangeFilter: filter => dispatch(actions.changeFilter(filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
