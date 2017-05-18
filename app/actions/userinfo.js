
import * as Msg from '../components/Common/Common'

import API from '../fetch/fetch';

export const USERINFO = 'USERINFO';

export const login = (data) => ({
	    type: USERINFO,
	    ...data
	})

export const fetchRegister = (parms) =>{
	return (dispatch, getState) => {
		API.postFetch('/api/User/register',parms)
		.then((data)=>{
			dispatch(login(data));
			if(data.state == 0){
				Msg.showSuccess(data.msg)
			}else {
				Msg.showError(data.msg)
			}
    	})
		.catch((err)=>{Msg.showError(err)});
	}
}

export const fetchLogout = () =>{
	return (dispatch, getState) => {
		API.getFetch('/api/User/logout')
		.then((data)=>{
			dispatch(login(data));
			if(data.state == 0){
				Msg.showSuccess(data.msg)
			}else {
				Msg.showError(data.msg)
			}
    	})
		.catch((err)=>{Msg.showError(err)});
	}
}

export const fetchLogin = (parms) =>{
	return (dispatch, getState) => {
		API.postFetch('/api/User/login',parms)
		.then((data)=>{
			dispatch(login(data));
			if(data.state == 0){
				Msg.showSuccess(data.msg)
			}else {
				Msg.showError(data.msg)
			}
    	})
		.catch((err)=>{Msg.showError(err)});
	}
}

export const fetchIsLogin = () =>{
	return (dispatch, getState) => {
		API.getFetch('/api/User/login')
		.then((data)=>{
			dispatch(login(data));
			if(data.state == 0){
				Msg.showSuccess(data.msg)
			}else {
				Msg.showError(data.msg)
			}
    	})
		.catch((err)=>{Msg.showError(err)});
	}
}