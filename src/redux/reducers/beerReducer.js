import { ActionTypes } from "../constants/action-types";

const initialState = {
  beers: [],
};

export const beerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_BEERS:
      return { ...state, beers: payload };
    default:
      return state;
  }
};

export const selectedBeerReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_BEER:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_BEER:
      return {};
    default:
      return state;
  }
};
