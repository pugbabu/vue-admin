import moment from 'moment';
export default {
  formatTime: (value, fmt) => {
    value = parseInt(value) * 1000; // 后台返回的时间戳单位为秒
    fmt = fmt ? fmt : 'YYYY-MM-DD hh:mm:ss';
    return moment(value).format(fmt);
  }
};