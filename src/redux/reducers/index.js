import { combineReducers } from "redux";
import { beerReducer, selectedBeerReducer } from "./beerReducer";

const reducers = combineReducers({
  allBeers: beerReducer,
  beer: selectedBeerReducer,
});

export default reducers;
