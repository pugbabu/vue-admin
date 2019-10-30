import axios from '@/axios';
import API from '../api-config';

const USER_API = {
  login: (data) => {
    return axios({
      url: API.login,
      data
    }).then(res => {
      return Promise.resolve(res);
    });
  },
  logOut:  (data) => {
    return axios({
      url: API.logOut,
      data
    }).then(res => {
      return Promise.resolve(res);
    });
  },
};
export default USER_API;