import { combineReducers } from "redux";
import counterReducer from "./counter";
import isLoginReducer from "./isLoggin";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogin: isLoginReducer
});

export default allReducers;