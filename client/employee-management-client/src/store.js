// src/store.js
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer'; // Ensure this path is correct

const store = createStore(rootReducer);

export default store;
