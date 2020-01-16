import { SELECT_CHARACTER } from '../actions/characters';

const initialState = {
  selectCharacter: {},
  createCharacter: {},
  characters: [
    { name: 'Legolas', playerClass: 'rogue', level: '5' },
    { name: 'Legolas', playerClass: 'rogue', level: '5' },
    { name: 'Legolas', playerClass: 'rogue', level: '5' },
    { name: 'Legolas', playerClass: 'rogue', level: '5' },
    { name: 'Legolas', playerClass: 'rogue', level: '5' },
    { name: 'Legolas', playerClass: 'rogue', level: '5' },
    { name: 'Legolas', playerClass: 'rogue', level: '5' },
    { name: 'Legolas', playerClass: 'rogue', level: '5' },
    { name: 'Legolas', playerClass: 'rogue', level: '5' }
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
