import { ActionTypes } from "../constants/action-types";

const initialState = {
  beers: [
    {
      id: 1,
      name: "Quilmes",
    },
  ],
};

export const beerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_BEERS:
      return state;
    default:
      return state;
  }
};
