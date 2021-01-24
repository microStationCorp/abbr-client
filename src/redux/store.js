import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { abbrReducer, adminReducer, uploadReducer } from "./reducer/reducer";
import thunk from "redux-thunk";

const middleware = [thunk];

const store = createStore(
  combineReducers({
    query: abbrReducer,
    upload: uploadReducer,
    admin: adminReducer,
  }),
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
