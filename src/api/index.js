import axios from 'axios';
import protoRoot from '@/proto/proto';
import protobuf from 'protobufjs';
import apiConfig from './config';
// import apiConfig from './config1';

import Notification from 'ant-design-vue/es/notification';
const createRequest = () => {
  return axios.create({
    timeout: 10000,
    method: 'post',
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "application/octet-stream,charset=UTF-8",
    },
    responseType: "arraybuffer"
  });
};

// const Axios = axios.create({
//   timeout: 10000,
//   headers: {
//     "X-Requested-With": "XMLHttpRequest",
//     "Content-Type": "application/octet-stream,charset=UTF-8",
//   },
//   responseType: "arraybuffer"
// });



const request = (option) => {
  // 根据参数配置请求模板和解析模板
  let requetProto = protoRoot.lookupType(option.requestTmp);
  let responseProto = protoRoot.lookupType(option.responseTmp);
  let Axios = createRequest();
  Axios.interceptors.request.use(config => {
    config.url = option.url;
    // config.method = config.method ? config.method : 'post';
    let data = Object.assign({}, config.data);
    config.data = new Blob([requetProto.encode(requetProto.create(data)).finish()], { type: 'buffer' });
    return config;
  }, error => {
    notification.error({
      message: '服务器错误'
    });
    Promise.reject(error);
  });

  Axios.interceptors.response.use(res => {
   const buf = protobuf.util.newBuffer(res.data);
   const resData = responseProto.decode(buf);
   return resData;
  }, error => {
    return Promise.reject(error);
  });
  return Axios;

};

const getApiMap = ()=>{
  let apiObj = {};
  apiConfig.forEach((s)=>{
    let key = Object.keys(s)[0];
    let val = s[key];
    apiObj[key]= request(val);
  });
  console.log(apiObj);
  return apiObj;
};



export default getApiMap();