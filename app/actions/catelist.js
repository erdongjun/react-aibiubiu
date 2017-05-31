
import * as Msg from '../components/Common/Common'

import API from '../fetch/fetch';

export const CATELIST = 'CATELIST';

export const getcatelist = (data) => ({
	    type: CATELIST,
	    ...data
	})



export const fetchGetCate = () =>{
	return (dispatch, getState) => {
		API.getFetch('/api/Createcircle/index')
		.then((data)=>{
			dispatch(getcatelist(data));
			if(data.state == 0){
				Msg.showSuccess(data.msg)
			}else {
				Msg.showError(data.msg)
			}
    	})
		.catch((err)=>{Msg.showError(err)});
	}
}

export const fetchCreateCircle = (parms,callback) =>{
	return (dispatch, getState) => {
		API.postFetch('/api/Createcircle/add',parms)
		.then((data)=>{
			if(data.state == 0){
				Msg.showSuccess(data.msg);
				callback()
			}else {
				Msg.showError(data.msg)
			}
    	})
		.catch((err)=>{Msg.showError(err)});
	}
}



