import { createStore, applyMiddleware } from "redux";

import counterReducer from "./Reducers/TodoReducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(counterReducer, composeWithDevTools());

export default store;
