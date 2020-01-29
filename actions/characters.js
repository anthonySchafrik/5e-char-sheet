export const SELECT_CHARACTER = 'character/SELECT_CHARACTER';
export const DELETE_CHARACTER = 'character/DELETE_CHARACTER';
export const UPDATE_CREATE_CHARACTER = 'character/UPDATE_CREATE_CHARACTER';

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
