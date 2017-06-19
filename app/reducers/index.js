import { combineReducers } from 'redux';
import userinfo from './userinfo';
import catelist from './catelist';
import hot from './hot';
import circle from './circle';
import postlist from './postlist';


export default combineReducers({
    userinfo,
    catelist,
    hot,
    circle,
    postlist
})