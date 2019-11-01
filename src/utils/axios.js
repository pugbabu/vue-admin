import axios from 'axios';
import protoRoot from '@/proto/proto';
import protobuf from 'protobufjs';
import Notification from 'ant-design-vue/es/notification';
const Axios = axios.create({
  timeout: 10000,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/octet-stream,charset=UTF-8",
  },
  responseType: "arraybuffer"
});

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

const request = (option) => {
  // 根据参数配置请求模板和解析模板
  let requetProto = protoRoot.lookupType(option.requestTmp);
  let responseProto = protoRoot.lookupType(option.responseTmp);
  
  return Axios({
    data:  new Blob([requetProto.encode(requetProto.create(data)).finish()], { type: 'buffer' });
  }).then(res => {});

};





export default getApiMap();