import { SELECT_CHARACTER } from '../actions/characters';

const initialState = {
  selectCharacter: {},
  createCharacter: {}
};

const characterReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SELECT_CHARACTER:
      return {
        ...state,
        selectCharacter: payload
      };
    default:
      return state;
  }
};

export default characterReducer;
