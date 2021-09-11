import useReducer from "./reducer/useReducer";
import{ cartReducer} from './reducer/cartReducer'
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import { getProductDetailsReducer, getProductsReducer } from "./reducer/productReducer";

const routReducer = combineReducers({useReducer,  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer});
const devtool= window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};
const store = createStore(routReducer ,INITIAL_STATE, compose(applyMiddleware(thunk),devtool))
export default store ;
