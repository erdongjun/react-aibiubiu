
import * as Msg from '../components/Common/Common'

import API from '../fetch/fetch';

export const HOT = 'HOT';

export const gethot = (data) => ({
	    type: HOT,
	    ...data
	})

export const fetchHot = () =>{
	return (dispatch, getState) => {
		API.getFetch('/api/Createcircle/hot')
		.then((data)=>{
			dispatch(gethot(data));
			if(data.state == 0){
				Msg.showSuccess(data.msg)
			}else {
				Msg.showError(data.msg)
			}
    	})
		.catch((err)=>{Msg.showError(err)});
	}
}





