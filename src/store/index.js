import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import { rootReducer, userReducer, history } from "../reducers";

const middleware = applyMiddleware(thunk, logger, promise);

const store = createStore(
  combineReducers({
    rootReducer,
    userReducer,
    history
  }),
  {},
  middleware
);
console.log(store.getState());
export default store;
