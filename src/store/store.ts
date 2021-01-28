import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {initialState, reducer} from './reducer';

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;