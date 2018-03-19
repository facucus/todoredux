import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
  static propTypes = {
    onAddTodo: PropTypes.func.isRequired
  }

  state = {
    inputValue: ''
  }

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      inputValue: value
    })
  }

  handleClickButton = e => {
    const { onAddTodo } = this.props;
    e.preventDefault();

    onAddTodo(this.state.inputValue);

    this.setState({
      inputValue: ''
    });
  }

  render() {
    const { inputValue } = this.state;

    return (
      <div>
        <form onSubmit={this.handleClickButton}>
          <input
            onChange={this.handleChange}
            value={inputValue}
            type='text'
            />
          <button onClick={this.handleClickButton}>Add</button>
        </form>
      </div>
    )
  }
}

export default AddTodo;
