import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filters extends Component {
  static propTypes = {
    onChangeFilter: PropTypes.func.isRequired,
  }

  handleClick = e => {
    this.props.onChangeFilter(e.target.id)
  }

  render() {
    const { filter } = this.props;
    const filters = ['All', 'Completed', 'Uncompleted'];

    return(
      <ul style={{
        listStyleType: 'none',
        display: 'flex',
        width: '300px',
        justifyContent: 'space-between',
        margin: '20px auto'
      }}>
        {filters.map(f => (
          <li
          key={f}
            id={f}
            style={{
              cursor: 'pointer',
              backgroundColor: filter === f ? 'red' : 'green'
            }}
            onClick={this.handleClick}>
            {f}
          </li>
        ))}
      </ul>
    )
  }
}

export default Filters;
