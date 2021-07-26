// 在登录时axios请求数据传参时无法正常的获取数据，原因是传递参数要将参数序列化。使用qs模块进行参数序列化
import qs from 'qs'
//引入封装后的axios请求
import $ajax from '../request/request.js'
/* 此文件用来统一管理项目所有API接口请求 */
export default  function Login(data){
  //登录接口
  return $ajax({
      method:'post',
      url:'/userlogin',
      data:qs.stringify(data)
     })
}