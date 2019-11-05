/**
 * @description websocket请求封装
 * @author dalei
 * @param url 请求地址
 * @param option 请求的一些参与，可配置请求响应的解析体
 * @param callback 回调函数
 */
import protoRoot from '@/proto/proto';
// 实际调用的方法
function sendSock(url, option, callback) {
  let socket = null;
  socket = new WebSocket(url);
  console.log(option);
  let responseProto = protoRoot.lookupType(option.responseTmp);
  socket.onmessage = function (res) {
    var reader = new FileReader();
    reader.readAsArrayBuffer(res.data);
    reader.onload = function (e) {
      var buf = new Uint8Array(reader.result);
      var responseData = responseProto.decode(buf);
      callback(responseData);
    };
  };
  socket.onopen = function (e) {
    console.log('连接成功');
  };
  socket.onclose = function (e) {
    console.log('断开连接');
  };
  socket.onerror = function (e) {
    console.log('连接错误');
  };
  return socket;

}


export {
  sendSock
};