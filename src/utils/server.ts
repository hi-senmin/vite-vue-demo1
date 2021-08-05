import Axios from 'axios';
import { ElMessage, ElLoading } from 'element-plus';

const baseURL = 'https://www.test.com';
let loadingInstance: any;

const server = Axios.create({
  baseURL,
  timeout: 5000
});

server.interceptors.request.use(
  (config) => {
    loadingInstance = ElLoading.service();
    return config;
  },
  (error) => Promise.reject(error)
);

server.interceptors.response.use(
  (response) => {
    loadingInstance.close();
    if (response.status === 200) {
      return response;
    }
    throw new Error(`请求异常 ${response}`);
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status;
      const msg = error.response.data.message;
      ElMessage.error(`Code: ${code},msg: ${msg} `);
    } else {
      ElMessage.error(`${error}`);
    }
    return Promise.reject(error);
  }
);

export default server;
