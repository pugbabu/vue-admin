import moment from 'moment';
export default {
  formatTime: (value, fmt) => {
    fmt = fmt ? fmt : 'YYYY-MM-DD hh:mm:ss';
    return moment(value).format(fmt);
  }
};