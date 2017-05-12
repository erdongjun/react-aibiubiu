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

