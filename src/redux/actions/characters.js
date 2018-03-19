import 'whatwg-fetch';

const fetchingCharacters = () => ({
  type: 'FETCHING_CHARACTERS'
});

const fetchingCharactersSuccess = characters => ({
  type: 'FETCHING_CHARACTERS_SUCCESS',
  characters
});

const fetchingCharactersError = error => ({
  type: 'FETCHING_CHARACTERS_ERROR',
  error
});

export const getCharacters = () => {
  return dispatch => {
    dispatch(fetchingCharacters())

    fetch('https://rickandmortyapi.com/api/character/')
      .then(res => console.log("res: ", res))
  }
}
