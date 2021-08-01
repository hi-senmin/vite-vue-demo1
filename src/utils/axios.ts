import axios from "axios";
import { ElMessage } from 'element-plus'

const baseURL = "https://api.github.com"

const server = axios.create({
  baseURL,
  timeout: 5000,

})


server.interceptors.request.use((config) => {
  console.log('config',config);
  return config
}, (error) => {
  return Promise.reject(error)
})

server.interceptors.response.use((response) => {
  console.log('response',response);
  return response
}, (error) => {
  if (error.response && error.response.data) {
    const code = error.response.status
    const msg = error.response.data.message
    ElMessage.error(`Code: ${code},msg: ${msg} `)
  } else {
      ElMessage.error(`${error}`)
  }
    return Promise.reject(error)
})

export default server