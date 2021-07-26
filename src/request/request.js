import axios from 'axios'
import store from '../store'
const $ajax = axios.create({
    baseURL:'http://apiv2.shawdo.com:8080',
    })
 // 给$ajax实例添加请求拦截器，在请求发出前可以操作，比如全局loading效果
 $ajax.interceptors.request.use(function (config) {
   // console.log(config);
    const token = store.state.token
    if(token){
      //给请求头中添加token令牌，后端需要验证每次请求是否携带token，才会返回相应数据
      config.headers.Authorization = token;
      // console.log(config);
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
  //返回响应结果
 $ajax.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});
export default $ajax
 
   