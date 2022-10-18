import {GET_CHARACTERS} from '../Actions/marvel';

const initialState = {
  characters: [],
};

function marvelReducers(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {...state, characters: action.payload};
    default:
      return state;
  }
}

export default marvelReducers;
