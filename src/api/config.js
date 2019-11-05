
module.exports =  [
  {
    /**
     * @description 登录接口
     * @param {*} requestTmp 请求体名称 
     * @param {*} responseTmp 响应体名称 
     */
    login: {
      url: '/material_login',
      requestTmp: 'LoginRequest',
      responseTmp: 'LoginReply'
    },
  },
  /**
    * @description ats主机状态接口
    * @param {*} requestTmp 请求体名称 
    * @param {*} responseTmp 响应体名称 
   */
  {
    hostStatus:{
      url: '/ats/hoststat',
      requestTmp: 'HostStatRequest',
      responseTmp: 'HostStatReply'
    }
  }
];