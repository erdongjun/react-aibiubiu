import 'whatwg-fetch';
import 'es6-promise';
/** 
 * 2017/05/11 xifan
 * 基于 fetch 封装的 GET请求 
 * @param url 
 * @param params {} 
 * @param headers 
 * @returns {Promise} 
 */  

var API = {};  


let headers = {
        'Accept': 'application/json'
    };  

API.getFetch = function(url, params) {
    if (params) {  
        let paramsArray = [];  
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))  
        if (url.search(/\?/) === -1) {  
            url += '?' + paramsArray.join('&')  
        } else {  
            url += '&' + paramsArray.join('&')  
        }  
    }  
    return  fetch(url, { method: 'GET',  headers: headers }) 
          	.then((response) => {  
              	if (response.ok) {  
                  	return response.json();  
              	} else {  
                  	return Promise.reject({status:response.status});
              	}  
          	})  
          	.then((json) => {  
              	return json;
          	}) 
         
}  




/** 
 * 基于 fetch 封装的 POST请求  FormData 表单数据 
 * @param url 
 * @param formData   
 * @param headers 
 * @returns {Promise} 
 */  


API.postFetch= function(url,formData) { 
	if(formData){
		var data = new FormData();
        for (let key in formData) {
            let value = formData[key];
            if (typeof(value) == "object") {
                value = JSON.stringify(value)
            }
            data.append(key, value)
        }
	}
    return  fetch(url, { method: 'POST',headers: headers,body:data}) 
          	.then((response) => {  
              	if (response.ok) {  
                  	return response.json();  
              	} else {  
                  	return Promise.reject({status:response.status});
              	}  
          	})  
          	.then((json) => {  
              	return json;
          	}) 
}  

export default API;