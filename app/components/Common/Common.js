import { message } from 'antd';

// 处理全局状态提醒

export const showInfo = (msg) => {
  message.info(msg);
};
export const showError = (msg) => {
  message.error(msg);
};
export const showWarn = (msg) => {
  message.warning(msg);
};
export const showSuccess = (msg) => {
  message.success(msg);
};

export const formatDate = (now) => { 
	var curr = new Date().getTime();
	var nowDate = now.getTime();
	// 刚刚 一分钟前
	if( (curr - nowDate) < 60*1000){
		return '刚刚';
	}
	// 一小时前 
	if( (curr - nowDate) < 60*60*1000){
		return '一小时前';
	}
	// 一天前 
	if( (curr - nowDate) < 24*60*60*1000){
		return '一天前';
	}
    var year=now.getFullYear(); 
    var month=now.getMonth()+1; 
    var date=now.getDate(); 
    var hour=now.getHours(); 
    var minute=now.getMinutes(); 
    var second=now.getSeconds(); 
    return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second; 
} 

