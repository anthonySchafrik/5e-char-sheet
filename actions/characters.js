export const SELECT_CHARACTER = 'character/SELECT_CHARACTER';
export const DELETE_CHARACTER = 'character/DELETE_CHARACTER';
export const UPDATE_CREATE_CHARACTER = 'character/UPDATE_CREATE_CHARACTER';
export const FETCH_CHARACTERS = 'character/FETCH_CHARACTERS';
export const UPDATE_SELECTED_CHARACTER = 'character/UPDATE_SELECTED_CHARACTER';

export const setSelectCharacter = char => {
  return {
    type: SELECT_CHARACTER,
    payload: char
  };
};

export const deleteCharacter = id => {
  return {
    type: DELETE_CHARACTER,
    payload: id
  };
};

export const updateCreateCharacter = updateObj => {
  return {
    type: UPDATE_CREATE_CHARACTER,
    payload: updateObj
  };
};

export const fetchCharacters = char => {
  return {
    type: FETCH_CHARACTERS,
    payload: char
  };
};

export const updateSelectedCharacter = updateObj => {
  return {
    type: UPDATE_SELECTED_CHARACTER,
    payload: updateObj
  };
};
