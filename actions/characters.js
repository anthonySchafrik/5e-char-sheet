export const SELECT_CHARACTER = 'character/SELECT_CHARACTER';

export const setSelectCharacter = char => {
  return {
    type: SELECT_CHARACTER,
    payload: { name: 'reduxTest' }
  };
};
