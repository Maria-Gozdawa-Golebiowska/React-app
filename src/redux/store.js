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

export const getFavoriteCard = (state) => {
  console.log('State in getFavoriteCard:', state); // Add this log
  return state.cards.filter(card => card.isFavorite);
};

// Action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });
export const addList = payload => ({type: 'ADD_LIST', payload});
export const toggleCardFavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload });          

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
    case 'TOGGLE_CARD_FAVORITE':
      const newState = { 
        ...state, 
        cards: state.cards.map(card => 
          card.id === action.payload 
            ? { ...card, isFavorite: !card.isFavorite } 
            : card
        ) 
      };
      console.log('New state:', newState);
      return newState;
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
