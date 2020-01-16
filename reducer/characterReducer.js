import { SELECT_CHARACTER } from '../actions/characters';

const initialState = {
  selectCharacter: {},
  createCharacter: {},
  characters: [
    { id: 0, name: 'Legolas', playerClass: 'rogue', level: '5' },
    { id: 1, name: 'Legolas', playerClass: 'rogue', level: '5' },
    { id: 2, name: 'Legolas', playerClass: 'rogue', level: '5' },
    { id: 3, name: 'Legolas', playerClass: 'rogue', level: '5' },
    { id: 4, name: 'Legolas', playerClass: 'rogue', level: '5' },
    { id: 5, name: 'Legolas', playerClass: 'rogue', level: '5' },
    { id: 6, name: 'Legolas', playerClass: 'rogue', level: '5' },
    { id: 7, name: 'Legolas', playerClass: 'rogue', level: '5' },
    { id: 8, name: 'Legolas', playerClass: 'rogue', level: '5' }
  ]
};

const CharacterReducer = (state = initialState, action) => {
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

export default CharacterReducer;
