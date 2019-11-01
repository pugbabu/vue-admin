import request from '@/utils/axios';
export default {
  hostStatus: () => {
    return request({
      url: '/ats/hoststat',
      requestTmp: 'HostStatRequest',
      responseTmp: 'HostStatReply'
    });
  }
};