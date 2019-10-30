import axios from 'axios';
import Notification from 'ant-design-vue/es/notification';

const Axios = axios.create({
  baseURL: '/api',
  timeout: 5000, // 请求超时时间
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
});

const onError = error => {
  if (error.response) {
    const status = error.response.status;
    const message = error.response.statusText;
    
    if (status === 403) {
      notification.error({ message: '禁止访问', description: message });
    }
    
    if (status === 404) {
      notification.error({ message: '未知资源', description: message });
    }
    
    if (status === 500) {
      notification.error({
        message: '服务器错误',
        description: message
      });
    }
   
  }
  return Promise.reject(error);
};

// 请求拦截器
Axios.interceptors.request.use(
  config => {
    // 开发环境下，如果请求是 post,put,patch,则打印数据体，方便调试
  
    
    return config;
  },
  error => {
    Notification.error({
      message: '请求失败',
      description: '发送请求失败，请检查您的网络'
    });
    return Promise.reject(error);
  }
);

// 响应拦截器
Axios.interceptors.response.use(res => {
  return res.data;
}, onError);



export default Axios;