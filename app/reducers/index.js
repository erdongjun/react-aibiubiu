import { combineReducers } from 'redux';
import userinfo from './userinfo';
import catelist from './catelist';
import hot from './hot';


export default combineReducers({
    userinfo,
    catelist,
    hot
})