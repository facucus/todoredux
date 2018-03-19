const initialState = {
  loading: false,
  characters: [],
  error: ''
}


const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_CHARACTERS':
      return {
        ...initialState,
        loading: true
      }
    case 'FETCHING_CHARACTERS_SUCCESS':
      return {
        ...initialState,
        characters: action.characters
      }
    case 'FETCHING_CHARACTERS_ERROR':
      return {
        ...initialState,
        error: action.error,
      }
    default:
      return state
  }
}

export default charactersReducer;
