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


//获取当前域名--


var  API_URL ="";
var hostname=window.location.hostname;
var port = window.location.port;
var host = window.location.host;


if(hostname=="test.aibiubiu.com"){
    // online
  API_URL = 'http://www.aibiubiu.com';

}else{

  API_URL = 'http://'+host;

    
}

var API = {};  
let headers = {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
    };  
    
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response.json();
}

API.getFetch = function(url, params) {
    var hosturl = API_URL+url
    if (params) {  
        let paramsArray = []; 
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))  
        if (hosturl.search(/\?/) === -1) {  
            hosturl += '?' + paramsArray.join('&')  
        } else {  
            hosturl += '&' + paramsArray.join('&')  
        }  
    }  
    
    return fetch(hosturl, { method: 'GET',credentials: 'include',  mode: 'cors',  headers: headers }) 
            .then(checkStatus)  
          	.then(parseJSON)  
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
  var hosturl = API_URL+url
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
    return  fetch(hosturl, { method: 'POST',credentials: 'include', mode: 'cors',  headers: headers,body:data}) 
          	.then(checkStatus)  
            .then(parseJSON)  
          	.then((json) => {  
              	return json;
          	})
}  

export default API;