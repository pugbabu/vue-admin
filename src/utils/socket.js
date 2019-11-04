import protoRoot from '@/proto/proto';
import protobuf from 'protobufjs';
// 实际调用的方法
function sendSock(url, option, callback) {
  let socket = null;
  socket = new WebSocket(url);
  console.log(option);
  let responseProto = protoRoot.lookupType(option.responseTmp);
  socket.onmessage = function (res) {
    console.log('接受数据');
    console.log('~~~~~~~~~~~~~~~~');
    console.log(res);
    // const buf = new Uint8Array(res.data);
    // const resData = responseProto.decode(buf);
    // const ResponseUser = protoRoot.lookup('com.example.nettydemo.protobuf.ResponseUser');
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



// 将方法暴露出去
export {
  sendSock
};