import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCharacters } from '../redux/actions/characters';

class Characters extends Component {
  render() {
    console.log("props: ", this.props)
    return (
      <div>
        <h1>Characters!</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  characters: state.characters
})

const mapDispatchToProps = dispatch => ({
  onGetCharacters: () => dispatch(getCharacters())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Characters)
