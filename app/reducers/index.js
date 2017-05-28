import { combineReducers } from 'redux';
import userinfo from './userinfo';
import catelist from './catelist';


export default combineReducers({
    userinfo,
    catelist
})