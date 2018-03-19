import React, { Component, Fragment } from 'react';
import uuid  from 'uuid/v4';
import styled from 'styled-components';

import TodoList from './components/TodoList';
import NewAddTodo from './components/NewAddTodo';
import Filters from './components/Filters';

const Wrapper = styled.div`
  margin-top: 50px;
  text-align: center;
`;

class App extends Component {
  state = {
    todos: [],
    filter: 'All'
  }

  handleChangeFilter = filter => {
    this.setState({
      filter
    })
  }

  handleDeleteTodo = id => {
    const { todos } = this.state;
    const newTodoList = todos.filter(todo => todo.id !== id)

    this.setState({
      todos: newTodoList
    });
  }

  handleAddTodo = inputValue => {
    const { todos } = this.state;
    const newTodo = {
      id: uuid(),
      text: inputValue,
      complete: false
    };
    // const myObj = {
    //   name: 'facundo',
    //   apellido: 'mechetti'
    // }
    // console.log('juan: ', Object.assign({}, myObj, { name: 'Juan'}))
    // console.log("myObj: ", {...myObj, name: 'Carlos'})
    // console.log("Original: ", myObj)

    this.setState({
      // todos: todos.concat(newTodo)
      todos: [...todos, newTodo]
    })
  }

  handleToggle = id => {
    const { todos } = this.state;
    const newTodoList = todos.map(todo => {
      if (todo.id === id) {
        // return Object.assign({}, todo, {
        //   complete: !todo.complete
        // })
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo
    })

    this.setState({
      todos: newTodoList
    })
  }

  render() {
    const { todos, filter } = this.state;
    return (
      <Wrapper>

        <NewAddTodo onAddTodo={this.handleAddTodo}/>

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

      </Wrapper>
    );
  }
}

export default App;
