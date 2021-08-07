import { createStore , compose , applyMiddleware } from "redux";
import RootReducer from "./reducer";
import thunk from "redux-thunk";

const middleware = [thunk];
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(RootReducer,enhancer);

export default store;
