import { combineReducers, createStore } from "redux";
import { authReducer } from "./AuthState";
import { productsReducer } from "./ProductsState";


// Creating reducers object from all our reducers: 
const reducers = combineReducers({ productsState: productsReducer, authState: authReducer });

// The most important Redux object: 
const store = createStore(reducers);

export default store;
