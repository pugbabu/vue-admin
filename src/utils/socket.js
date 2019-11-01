
// 实际调用的方法
function sendSock (url, agentData, callback) {
  let socket = null;
  socket = new WebSocket(url);
  console.log(socket);
  socket.onmessage = function(e) {
    console.log('接受数据');
    callback(e);
  };
  socket.onopen = function(e) {
    console.log('连接成功');
  };
  socket.onclose = function(e) {
    console.log('断开连接');
  };
  socket.onerror = function(e) {
    console.log('连接错误');
  };
  return socket;

}



// 将方法暴露出去
export {
  sendSock
};
