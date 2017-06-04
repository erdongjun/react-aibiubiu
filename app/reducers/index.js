import { combineReducers } from 'redux';
import userinfo from './userinfo';
import catelist from './catelist';
import hot from './hot';
import circle from './circle';


export default combineReducers({
    userinfo,
    catelist,
    hot,
    circle
})