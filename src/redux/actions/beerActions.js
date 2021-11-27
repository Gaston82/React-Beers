import { ActionTypes } from "../constants/action-types";

export const setBeers = (beers) => {
  return {
    type: ActionTypes.SET_BEERS,
    payload: beers,
  };
};

export const selectedBeer = (beer) => {
  return {
    type: ActionTypes.SELECTED_BEER,
    payload: beer,
  };
};

// export const setBeers = (beers) => {
//   return {
//     type: ActionTypes.SET_BEERS,
//     payload: beer,
//   };
// };
