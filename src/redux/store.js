import { applyMiddleware, compose, createStore } from "redux";
import { abbrReducer } from "./reducer/reducer";
import thunk from "redux-thunk";

const middleware = [thunk];

const store = createStore(
  abbrReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
