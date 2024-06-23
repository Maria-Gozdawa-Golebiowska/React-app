import { createStore } from 'redux';
import initialState from './initialState';
import shortid from "shortid";
import { strContains } from "../utils/strContains";

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

  // New getAllColumns selector
export const getAllColumns = (state) => state.columns;

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = playload => ({type: 'ADD_CARD', playload});
export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload});



const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_COLUMN":
      return {
        ...state,
        columns: [...state.columns, { ...action.payload, id: shortid() }],
      };
    default:
      return state;
    case "ADD_CARD":
      return {
        ...state,
        cards: [...state.cards, { ...action.payload, id: shortid() }],
      };  
    case "UPDATED_SEARCHSTRING":
      return {...state, searchString: action.payload}
  }
};


const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;