// Create your context here
import React, { createContext, useReducer } from "react";

// Action Types
const CREATE_QUOTE = "CREATE_QUOTE";
const DELETE_QUOTE = "DELETE_QUOTE";
const EDIT_QUOTE_AUTHENTICITY = "EDIT_QUOTE_AUTHENTICITY";
const SET_HIGHLIGHTED_QUOTE = "SET_HIGHLIGHTED_QUOTE";
const TOGGLE_VISIBILITY = "TOGGLE_VISIBILITY";

let id = 1;
const getNextId = () => id++;
const initialState = {
  displayAllQuotes: true,
  highlightedQuote: null,
  quotes: [
    {
      id: getNextId(),
      quoteText: "Don't cry because it's over, smile because it happened.",
      authorName: "Dr. Seuss",
      apocryphal: false,
    },
    {
      id: getNextId(),
      quoteText: "So many books, so little time.",
      authorName: "Frank Zappa",
      apocryphal: false,
    },
    {
      id: getNextId(),
      quoteText: "Be yourself; everyone else is already taken.",
      authorName: "Oscar Wilde",
      apocryphal: false,
    },
  ],
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case CREATE_QUOTE:
      return { ...state, quotes: [...state.quotes, action.payload] };
    case DELETE_QUOTE:
      return {
        ...state,
        quotes: state.quotes.filter((qt) => qt.id !== action.payload),
      };
    case EDIT_QUOTE_AUTHENTICITY:
      return {
        ...state,
        quotes: state.quotes.map((qt) => {
          if (qt.id != action.payload) return qt;
          return { ...qt, apocryphal: !qt.apocryphal };
        }),
      };
    case SET_HIGHLIGHTED_QUOTE:
      return {
        ...state,
        highlightedQuote:
          state.highlightedQuote !== action.payload ? action.payload : null,
      };
    case TOGGLE_VISIBILITY:
      return { ...state, displayAllQuotes: !state.displayAllQuotes };
    default:
      return state;
  }
};
