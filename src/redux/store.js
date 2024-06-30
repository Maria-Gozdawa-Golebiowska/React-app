import { createStore, combineReducers } from 'redux';
import initialState from './initialState.js';
import listsReducer from './listsRedux.js';
import columnsReducer from './columnsRedux.js';
import cardsReducer from './cardsRedux.js';
import searchStringReducer from './searchStringRedux.js';

// reducer 
const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;