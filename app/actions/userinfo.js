import * as actionTypes from '../constants/userinfo'

import * as Msg from '../components/Common/Common'

import API from '../fetch/fetch';



export const login = (data) => ({
	    type: actionTypes.USERINFO,
	    data
	})


export const fetchRegister = (parms) =>{

	return (dispatch, getState) => {

		API.postFetch('/api/User/register1',parms)
		.then((data)=>{
			console.log(data)
			
			dispatch(login(data));
    	})
		.catch((err)=>{Msg.showError(err)})
	}
}