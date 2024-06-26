import { createStore } from 'redux';
import initialState from './initialState';
import shortid from "shortid";
import { strContains } from "../utils/strContains";

// Selectors
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getListById = ({ lists }, listId) =>
  lists.find(list => list.id === listId);

export const getColumnsByList = (state, listId) =>
  state.columns.filter(column => column.listId === listId);

export const getAllLists = state => state.lists;

export const getAllColumns = state => state.columns;

// Action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });
export const addList = payload => ({type: 'ADD_LIST', payload});

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COLUMN":
      return {
        ...state,
        columns: [...state.columns, { ...action.payload, id: shortid.generate() }],
      };
    case "ADD_CARD":
      return {
        ...state,
        cards: [...state.cards, { ...action.payload, id: shortid.generate() }],
      };
    case "UPDATE_SEARCHSTRING":
      return { ...state, searchString: action.payload };
      case "ADD_LIST":
        return {
          ...state,
          lists: [...state.lists, { ...action.payload, id: shortid.generate() }],
        };
      default:
        return state;
  }
};

// Store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
