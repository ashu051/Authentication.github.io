import { createStore, applyMiddleware, compose } from "redux";
import combineReducer from "./reducers/combineReducer";
import thunk from "redux-thunk";
const middleware = [thunk];
const initialState = {};

const store = createStore(
  combineReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
