import axios from 'axios'

const request = axios.create({})

request.interceptors.response.use(
  function (response) {
    var data = response.data || response.request.responseText;

    try {
      data = JSON.parse(data);
    } catch (error) {
      // TODO JSON 解析异常
    }

    return data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default request