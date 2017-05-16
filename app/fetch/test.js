import API from './fetch';

export function testFetch() {
    return API.getFetch('/api/User/logout',{username:'xifan',password:'111'}).then((data)=>{
    	// console.log(new Date(parseInt(data.data.time) * 1000));
    }).catch((err)=>{console.log(err)})
}
