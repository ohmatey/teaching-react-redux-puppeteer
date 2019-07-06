import { createStore } from 'redux';

import reducer from './rootReducer'

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState);
  return store;
}
