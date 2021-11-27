import { combineReducers } from "redux";
import { beerReducer } from "./beerReducer";

const reducers = combineReducers({
  allBeers: beerReducer,
});

export default reducers;
