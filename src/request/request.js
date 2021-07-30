/* 此文件是对axios进行二次封装 */
import axios from 'axios'
import store from '../store'
//引入进度条相关的模块
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


//创建一个新的axios实例 $ajax 来封装，而不是直接在axios上来封装
const $ajax = axios.create({
    baseURL:'http://apiv2.shawdo.com:8080',//设置所有接口基础路径
    timeout:1000,
    // headers:''
    })


//添加进度条信息功能 nprogress
// 给$ajax实例添加请求拦截器，在请求发出前可以操作，比如全局loading效果
 $ajax.interceptors.request.use((config)=> {
  /*  config  是请求报文  发送请求前会拦截config这个请求报文，然后对其进行加工，然后再返回继续执行*/
    NProgress.start()//开启进度条
    const token = store.state.token
    if(token){
      // 发送请求前会拦截config这个请求报文，然后对其进行加工
      //给请求头中添加token令牌，后端需要验证每次请求是否携带token，才会返回相应数据
      config.headers.Authorization = token;
  }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
  
  
  //响应拦截器，返回响应结果
 $ajax.interceptors.response.use((response)=> {
  // response为响应报文
  NProgress.done()//停止进度条
  //返回的响应不再需要从data中拿数据，响应就是我们的数据
  return response.data
}, function (error) {
  NProgress.done()//停止进度条
  alert('请求失败' + error.message || '未知错误')
  return new Promise(()=>{})
});
export default $ajax
 
   