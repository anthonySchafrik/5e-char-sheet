import { compose, createStore, combineReducers } from 'redux';

import characterReducer from './reducer/characterReducer';

const rootReducer = combineReducers({
  character: characterReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

const store = configureStore();

export default store;
