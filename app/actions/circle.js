
import * as Msg from '../components/Common/Common'

import API from '../fetch/fetch';

export const CIRCLE = 'CIRCLE';

export const getcircle = (data) => ({
	    type: CIRCLE,
	    ...data
	})

export const fetchCircle = (circleid) =>{
	return (dispatch, getState) => {
		API.getFetch('/api/Circle/index',{id:circleid})
		.then((data)=>{
			dispatch(getcircle(data));
			if(data.state == 0){
				Msg.showSuccess(data.msg)
			}else {
				Msg.showError(data.msg)
			}
    	})
		.catch((err)=>{Msg.showError(err)});
	}
}
export const fetchCreactPost = (parms,callback) =>{
	return (dispatch, getState) => {
		API.postFetch('/api/Circle/post',parms)
		.then((data)=>{
			callback(data)
    	})
		.catch((err)=>{Msg.showError(err)});
	}
}




