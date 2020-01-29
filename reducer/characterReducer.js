import {
  SELECT_CHARACTER,
  DELETE_CHARACTER,
  UPDATE_CREATE_CHARACTER
} from '../actions/characters';

const initialState = {
  selectCharacter: {},
  createCharacter: {
    'character name': '',
    class: '',
    age: '',
    weight: '',
    eyes: '',
    skin: '',
    hair: '',
    'character appearance': '',
    'back story': '',
    bonds: '',
    flaws: '',
    ideals: '',
    'allies & organizations': '',
    treasure: '',
    equipment: {
      cp: '',
      sp: '',
      ep: '',
      gp: '',
      pp: '',
      text: ''
    },
    stats: {
      strength: { mult: '', stat: '' },
      dexterity: { mult: '', stat: '' },
      constitution: { mult: '', stat: '' },
      intelligence: { mult: '', stat: '' },
      wisdom: { mult: '', stat: '' },
      charisma: { mult: '', stat: '' }
    },
    inspiration: '',
    'proficiency bonus': '',
    savingThrows: {
      strength: { mult: '', proficient: false },
      dexterity: { mult: '', proficient: false },
      constitution: { mult: '', proficient: false },
      intelligence: { mult: '', proficient: false },
      wisdom: { mult: '', proficient: false },
      charisma: { mult: '', proficient: false }
    },
    'armor class': '',
    initiative: '',
    speed: '',
    'hit points maximum': '',
    'hit dice': '',
    skills: {
      acrobatics: { mult: '', proficient: false },
      arcana: { mult: '', proficient: false },
      deception: { mult: '', proficient: false },
      insight: { mult: '', proficient: false },
      investigation: { mult: '', proficient: false },
      nature: { mult: '', proficient: false },
      performance: { mult: '', proficient: false },
      religion: { mult: '', proficient: false },
      stealth: { mult: '', proficient: false },
      'animal handling': { mult: '', proficient: false },
      athletics: { mult: '', proficient: false },
      history: { mult: '', proficient: false },
      intimidation: { mult: '', proficient: false },
      medicine: { mult: '', proficient: false },
      perception: { mult: '', proficient: false },
      persuasion: { mult: '', proficient: false },
      'sleight of hand': { mult: '', proficient: false },
      survival: { mult: '', proficient: false }
    },
    attacks: [],
    spells: [
      {
        class: '',
        ability: '',
        save: '',
        bonus: '',
        description: ''
      }
    ]
  },
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
  const { characters, createCharacter } = state;

  switch (type) {
    case SELECT_CHARACTER:
      return {
        ...state,
        selectCharacter: payload
      };

    case DELETE_CHARACTER:
      return {
        ...state,
        characters: characters.filter(char => char.id !== payload)
      };

    case UPDATE_CREATE_CHARACTER:
      const { text, update } = payload;
      return {
        ...state,
        createCharacter: { ...createCharacter, [text]: update }
      };

    default:
      return state;
  }
};

export default CharacterReducer;
