import API from './fetch';

console.log(API)


export function testFetch() {
    return API.postFetch('/api/Home/User/index',{name:'xifan',age:23}).then((data)=>{
    	console.log(data);
    }).catch((err)=>{console.log(err)})
}
